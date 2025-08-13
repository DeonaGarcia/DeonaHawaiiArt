import { useEffect, useMemo, useRef, useState } from "react";
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { useToast } from "@/components/ui/use-toast";
import { supabase } from "@/integrations/supabase/client";

const EDGE_BASE = "https://cuvnfzzsgxstemnztvel.supabase.co/functions/v1";

const AdminPrintifySync = () => {
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState("upload");

  // SEO
  useEffect(() => {
    const title = "Printify Sync Admin | Deona Hawaii Art";
    const description = "Admin tool to upload artwork originals and sync files to Printify.";
    document.title = title;

    const ensureTag = (name: string, content: string) => {
      let tag = document.querySelector(`meta[name="${name}"]`);
      if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute("name", name);
        document.head.appendChild(tag);
      }
      tag.setAttribute("content", content);
    };

    ensureTag("description", description);

    const linkRelCanonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    const canonical = window.location.origin + "/admin/printify-sync";
    if (linkRelCanonical) linkRelCanonical.href = canonical;
    else {
      const l = document.createElement("link");
      l.rel = "canonical";
      l.href = canonical;
      document.head.appendChild(l);
    }
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <header className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold font-montserrat text-primary">Printify Sync Admin</h1>
            <p className="text-muted-foreground mt-2">Upload originals to storage and send pending artworks to Printify Files.</p>
          </header>

          <section>
            <Tabs value={activeTab} onValueChange={setActiveTab}>
              <TabsList>
                <TabsTrigger value="upload">Upload Originals</TabsTrigger>
                <TabsTrigger value="import">Import from Site Images</TabsTrigger>
                <TabsTrigger value="send">Send to Printify</TabsTrigger>
              </TabsList>

              <TabsContent value="upload">
                <UploadOriginals onDone={() => setActiveTab("send")} />
              </TabsContent>

              <TabsContent value="import">
                <ImportFromSiteImages onDone={() => setActiveTab("send")} />
              </TabsContent>

              <TabsContent value="send">
                <SendToPrintify />
              </TabsContent>
            </Tabs>
          </section>
        </div>
      </main>
    </div>
  );
};

const UploadOriginals = ({ onDone }: { onDone?: () => void }) => {
  const { toast } = useToast();
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [isUploading, setIsUploading] = useState(false);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const onFiles = (files: FileList | null) => {
    if (!files) return;
    setSelectedFiles(Array.from(files));
  };

  const handleUpload = async () => {
    if (selectedFiles.length === 0) {
      toast({ title: "No files selected", description: "Choose one or more images.", variant: "default" });
      return;
    }

    try {
      setIsUploading(true);
      const form = new FormData();
      for (const f of selectedFiles) form.append("files", f, f.name);

      const res = await fetch(`${EDGE_BASE}/ingest-artworks`, {
        method: "POST",
        body: form,
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data?.error || "Upload failed");
      }

      const createdCount = (data?.created || []).length;
      const errorCount = (data?.errors || []).length;

      toast({ title: `Uploaded ${createdCount} artworks`, description: errorCount ? `${errorCount} failed` : "All good!" });
      setSelectedFiles([]);
      onDone?.();
    } catch (e: any) {
      toast({ title: "Upload failed", description: e.message, variant: "destructive" });
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <section className="mt-6">
      <div className="rounded-xl border border-border p-6 bg-card">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div>
            <h2 className="text-xl font-semibold font-montserrat text-primary">Upload Originals</h2>
            <p className="text-sm text-muted-foreground">Select high-resolution images to store securely.</p>
          </div>
          <div className="flex gap-3">
            <input ref={inputRef} type="file" multiple accept="image/*" onChange={(e) => onFiles(e.target.files)} className="hidden" />
            <Button variant="outline" onClick={() => inputRef.current?.click()}>Choose Files</Button>
            <Button onClick={handleUpload} disabled={isUploading || selectedFiles.length === 0}>{isUploading ? "Uploading..." : "Upload"}</Button>
          </div>
        </div>

        {selectedFiles.length > 0 && (
          <ul className="mt-4 list-disc pl-6 text-sm text-muted-foreground">
            {selectedFiles.map((f) => (
              <li key={f.name}>{f.name}</li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
};

const SendToPrintify = () => {
  const { toast } = useToast();
  const [isRunning, setIsRunning] = useState(false);
  const [limit, setLimit] = useState(25);
  const [result, setResult] = useState<any | null>(null);

  const run = async () => {
    try {
      setIsRunning(true);
      const { data, error } = await supabase.functions.invoke("upload-artworks-to-printify", {
        body: { limit },
      });
      if (error) throw error;
      setResult(data);
      const ok = (data?.successes || data?.uploaded || data?.created || []).length || 0;
      const failed = (data?.failures || data?.errors || []).length || 0;
      toast({ title: `Printify upload complete`, description: `${ok} ok, ${failed} failed` });
    } catch (e: any) {
      toast({ title: "Failed to upload to Printify", description: e.message, variant: "destructive" });
    } finally {
      setIsRunning(false);
    }
  };

  return (
    <section className="mt-6">
      <div className="rounded-xl border border-border p-6 bg-card">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div>
            <h2 className="text-xl font-semibold font-montserrat text-primary">Send to Printify Files</h2>
            <p className="text-sm text-muted-foreground">Processes artworks without a Printify file yet.</p>
          </div>
          <div className="flex items-center gap-3">
            <input
              type="number"
              min={1}
              max={200}
              value={limit}
              onChange={(e) => setLimit(parseInt(e.target.value || "25", 10))}
              className="h-10 w-24 rounded-md border border-input bg-background px-3 text-sm"
              aria-label="Batch size"
            />
            <Button onClick={run} disabled={isRunning}>{isRunning ? "Running..." : "Upload remaining"}</Button>
          </div>
        </div>

        {result && (
          <div className="mt-6">
            <pre className="text-xs bg-muted p-4 rounded-md overflow-auto max-h-96">{JSON.stringify(result, null, 2)}</pre>
          </div>
        )}
      </div>
    </section>
  );
};

const ImportFromSiteImages = ({ onDone }: { onDone?: () => void }) => {
  const { toast } = useToast();
  const [files, setFiles] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [isImporting, setIsImporting] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch('/lovable-uploads/manifest.json');
        if (!res.ok) throw new Error(`Manifest not found (${res.status})`);
        const data = await res.json();
        setFiles(Array.isArray(data?.files) ? data.files : []);
      } catch (e: any) {
        toast({ title: 'Failed to load manifest', description: e.message, variant: 'destructive' });
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  const run = async () => {
    if (!files.length) {
      toast({ title: 'No files found', description: 'The manifest is empty.' });
      return;
    }
    try {
      setIsImporting(true);
      const images = files.map((name) => {
        const base = name.replace(/\.[^/.]+$/, '');
        const title = base
          .replace(/[-_]+/g, ' ')
          .replace(/\s+/g, ' ')
          .trim()
          .replace(/\b\w/g, (c) => c.toUpperCase());
        const url = `${window.location.origin}/lovable-uploads/${encodeURIComponent(name)}`;
        return { url, title };
      });

      const { data, error } = await supabase.functions.invoke('seed-artworks-from-public', {
        body: { images },
      });
      if (error) throw error;

      const created = data?.created?.length || 0;
      const errors = data?.errors?.length || 0;
      toast({ title: `Imported ${created} artworks`, description: errors ? `${errors} failed` : 'All good!' });
      onDone?.();
    } catch (e: any) {
      toast({ title: 'Import failed', description: e.message, variant: 'destructive' });
    } finally {
      setIsImporting(false);
    }
  };

  return (
    <section className="mt-6">
      <div className="rounded-xl border border-border p-6 bg-card">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div>
            <h2 className="text-xl font-semibold font-montserrat text-primary">Import from Site Images</h2>
            <p className="text-sm text-muted-foreground">Creates artwork entries for images already in your site.</p>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-sm text-muted-foreground">{loading ? 'Loading...' : `${files.length} files detected`}</span>
            <Button onClick={run} disabled={loading || isImporting || files.length === 0}>
              {isImporting ? 'Importing...' : 'Import All'}
            </Button>
          </div>
        </div>
        {!loading && files.length > 0 && (
          <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 text-xs text-muted-foreground">
            {files.slice(0, 12).map((n) => (
              <li key={n} className="truncate" title={n}>{n}</li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
};

export default AdminPrintifySync;
