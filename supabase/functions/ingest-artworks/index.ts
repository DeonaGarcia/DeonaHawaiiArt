import { createClient } from "jsr:@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

function slugify(input: string) {
  return input
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const SUPABASE_URL = Deno.env.get("SUPABASE_URL");
    const SERVICE_ROLE_KEY = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");
    if (!SUPABASE_URL || !SERVICE_ROLE_KEY) {
      return new Response(
        JSON.stringify({ error: "Missing Supabase server configuration" }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const supabase = createClient(SUPABASE_URL, SERVICE_ROLE_KEY);

    const form = await req.formData();
    const files = form.getAll("files");

    if (!files || files.length === 0) {
      return new Response(
        JSON.stringify({ error: "No files provided. Append one or more 'files' fields." }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const created: any[] = [];
    const errors: any[] = [];

    for (const item of files) {
      if (!(item instanceof File)) {
        errors.push({ reason: "Invalid part (not a File)" });
        continue;
      }

      try {
        const originalName = item.name || "upload";
        const titleFromName = originalName.replace(/\.[^/.]+$/, "").replace(/[\-_]+/g, " ").trim();
        const title = titleFromName || "Untitled";
        const slug = slugify(title);

        const arrayBuffer = await item.arrayBuffer();
        const fileBytes = new Uint8Array(arrayBuffer);

        const filePath = `${crypto.randomUUID()}-${originalName}`;

        const { error: uploadError } = await supabase.storage
          .from("art-originals")
          .upload(filePath, fileBytes, { contentType: item.type || "application/octet-stream", upsert: false });

        if (uploadError) {
          errors.push({ name: originalName, step: "upload", error: uploadError.message });
          continue;
        }

        const { data: inserted, error: insertError } = await supabase
          .from("artworks")
          .insert({
            title,
            slug: slug || crypto.randomUUID(),
            original_bucket: "art-originals",
            original_path: filePath,
          })
          .select("id, title, slug, original_bucket, original_path")
          .single();

        if (insertError) {
          errors.push({ name: originalName, step: "insert", error: insertError.message });
          continue;
        }

        created.push(inserted);
      } catch (e) {
        errors.push({ name: (item as File).name, step: "unknown", error: (e as Error).message });
      }
    }

    return new Response(JSON.stringify({ created, errors }), {
      status: 200,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (e) {
    return new Response(JSON.stringify({ error: (e as Error).message }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
