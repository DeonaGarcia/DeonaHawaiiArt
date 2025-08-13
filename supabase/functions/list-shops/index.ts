
import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

serve(async (req) => {
  // CORS preflight
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  const apiKey = Deno.env.get("Printify_API_Key") || Deno.env.get("PRINTIFY_API_KEY");
  if (!apiKey) {
    console.error("Missing Printify API key. Set the 'Printify_API_Key' secret in Supabase.");
    return new Response(JSON.stringify({ error: "Missing Printify API key (Printify_API_Key)" }), {
      status: 400,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }

  try {
    const resp = await fetch("https://api.printify.com/v1/shops.json", {
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
    });

    if (!resp.ok) {
      const txt = await resp.text();
      console.error("Printify list shops failed:", resp.status, txt);
      return new Response(JSON.stringify({ error: "Printify API error", status: resp.status, details: txt }), {
        status: 502,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const data = await resp.json();
    console.log("List shops success:", Array.isArray(data) ? data.length : "unknown count");
    return new Response(JSON.stringify({ shops: data }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error in list-shops:", error);
    return new Response(JSON.stringify({ error: String(error) }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
