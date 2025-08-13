
import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

type Artwork = {
  id: string;
  title: string | null;
  slug: string | null;
  original_bucket: string | null;
  original_path: string | null;
  gallery_image_url: string | null;
  printify_file_id: string | null;
};

serve(async (req) => {
  // CORS preflight
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  const supabaseUrl = Deno.env.get("SUPABASE_URL");
  const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");
  const printifyApiKey = Deno.env.get("Printify_API_Key") || Deno.env.get("PRINTIFY_API_KEY");

  if (!supabaseUrl || !supabaseServiceKey) {
    console.error("Missing Supabase env vars in Edge Function.");
    return new Response(JSON.stringify({ error: "Missing Supabase configuration" }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }

  if (!printifyApiKey) {
    console.error("Missing Printify API key. Set the 'Printify_API_Key' secret in Supabase.");
    return new Response(JSON.stringify({ error: "Missing Printify API key (Printify_API_Key)" }), {
      status: 400,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }

  const supabaseAdmin = createClient(supabaseUrl, supabaseServiceKey);

  let limit = 50;
  let artworkIds: string[] | undefined;
  try {
    if (req.method !== "GET") {
      const body = await req.json().catch(() => ({}));
      if (typeof body.limit === "number" && body.limit > 0) limit = Math.min(body.limit, 500);
      if (Array.isArray(body.artwork_ids)) artworkIds = body.artwork_ids;
    } else {
      const url = new URL(req.url);
      const limitParam = Number(url.searchParams.get("limit"));
      if (!Number.isNaN(limitParam) && limitParam > 0) limit = Math.min(limitParam, 500);
      const idsParam = url.searchParams.get("artwork_ids");
      if (idsParam) {
        try {
          const parsed = JSON.parse(idsParam);
          if (Array.isArray(parsed)) artworkIds = parsed;
        } catch {
          // ignore
        }
      }
    }
  } catch (e) {
    console.warn("Body parse warning:", e);
  }

  console.log("Starting upload-artworks-to-printify with limit:", limit, "ids:", artworkIds?.length ?? 0);

  // Build base query
  let query = supabaseAdmin
    .from("artworks")
    .select("id,title,slug,original_bucket,original_path,gallery_image_url,printify_file_id")
    .is("printify_file_id", null)
    .order("created_at", { ascending: true })
    .limit(limit);

  if (artworkIds && artworkIds.length > 0) {
    query = supabaseAdmin
      .from("artworks")
      .select("id,title,slug,original_bucket,original_path,gallery_image_url,printify_file_id")
      .in("id", artworkIds)
      .is("printify_file_id", null)
      .order("created_at", { ascending: true })
      .limit(limit);
  }

  const { data: artworks, error: fetchErr } = await query;
  if (fetchErr) {
    console.error("Error fetching artworks:", fetchErr);
    return new Response(JSON.stringify({ error: "Failed to fetch artworks", details: fetchErr.message }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }

  const list: Artwork[] = artworks ?? [];
  console.log(`Found ${list.length} artworks to upload`);

  const successes: Array<{ id: string; printify_file_id: string; printify_file_url?: string }> = [];
  const failures: Array<{ id: string; reason: string }> = [];

  // Helper to get a source URL (signed if from storage)
  const getSourceUrl = async (a: Artwork): Promise<string | null> => {
    if (a.original_bucket && a.original_path) {
      const { data, error } = await supabaseAdmin.storage
        .from(a.original_bucket)
        .createSignedUrl(a.original_path, 60 * 60); // 1 hour
      if (error) {
        console.warn("Signed URL error for", a.id, error);
        return null;
      }
      return data?.signedUrl ?? null;
    }
    if (a.gallery_image_url) return a.gallery_image_url;
    return null;
  };

  for (const a of list) {
    try {
      const srcUrl = await getSourceUrl(a);
      if (!srcUrl) {
        failures.push({ id: a.id, reason: "No image source available" });
        continue;
      }

      // Build a reasonable filename
      const safeName = (a.slug || a.title || `artwork-${a.id}`).toString().replace(/[^a-z0-9-_]+/gi, "-").toLowerCase();
      const fileName = `${safeName}.jpg`;

      // Upload image to Printify Files (by URL)
      const resp = await fetch("https://api.printify.com/v1/uploads/images.json", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${printifyApiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          file_name: fileName,
          url: srcUrl,
        }),
      });

      if (!resp.ok) {
        const txt = await resp.text();
        console.error("Printify upload failed for", a.id, resp.status, txt);
        failures.push({ id: a.id, reason: `Printify error ${resp.status}: ${txt}` });
        continue;
      }

      const data = await resp.json();
      const printifyFileId: string | undefined = data?.id ?? data?.file_id ?? data?._id;
      const previewUrl: string | undefined = data?.preview_url ?? data?.url ?? data?.src;

      if (!printifyFileId) {
        console.error("No file id returned for", a.id, data);
        failures.push({ id: a.id, reason: "No file id from Printify" });
        continue;
      }

      // Update artwork record
      const { error: updateErr } = await supabaseAdmin
        .from("artworks")
        .update({
          printify_file_id: printifyFileId,
          printify_file_url: previewUrl ?? null,
          printify_uploaded_at: new Date().toISOString(),
        })
        .eq("id", a.id);

      if (updateErr) {
        console.error("Failed to update artwork after upload", a.id, updateErr);
        failures.push({ id: a.id, reason: `DB update failed: ${updateErr.message}` });
        continue;
      }

      successes.push({ id: a.id, printify_file_id: printifyFileId, printify_file_url: previewUrl });
      console.log("Uploaded and updated artwork", a.id, printifyFileId);
    } catch (err) {
      console.error("Unexpected error for artwork", a.id, err);
      failures.push({ id: a.id, reason: String(err) });
    }
  }

  return new Response(
    JSON.stringify({
      processed: list.length,
      successes: successes.length,
      failures: failures.length,
      success_items: successes,
      failure_items: failures,
    }),
    { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
  );
});
