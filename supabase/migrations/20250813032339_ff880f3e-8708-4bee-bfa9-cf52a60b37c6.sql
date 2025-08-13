
-- Track Printify file uploads per artwork
ALTER TABLE public.artworks
  ADD COLUMN IF NOT EXISTS printify_file_id text,
  ADD COLUMN IF NOT EXISTS printify_file_url text,
  ADD COLUMN IF NOT EXISTS printify_uploaded_at timestamptz;

-- Ensure updated_at trigger exists on artworks
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_trigger WHERE tgname = 'set_artworks_updated_at'
  ) THEN
    CREATE TRIGGER set_artworks_updated_at
    BEFORE UPDATE ON public.artworks
    FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();
  END IF;
END $$;

-- Optional: quick lookup by Printify file id
CREATE INDEX IF NOT EXISTS idx_artworks_printify_file_id ON public.artworks (printify_file_id);
