-- Enable Row Level Security on printify_products table
ALTER TABLE public.printify_products ENABLE ROW LEVEL SECURITY;

-- Enable Row Level Security on sync_jobs table  
ALTER TABLE public.sync_jobs ENABLE ROW LEVEL SECURITY;

-- Create restrictive policies for printify_products (admin/service access only)
-- No public access - only backend operations can access this data
CREATE POLICY "Service role can manage printify_products" 
ON public.printify_products 
FOR ALL 
TO service_role 
USING (true) 
WITH CHECK (true);

-- Create restrictive policies for sync_jobs (admin/service access only)  
-- No public access - only backend operations can access this data
CREATE POLICY "Service role can manage sync_jobs" 
ON public.sync_jobs 
FOR ALL 
TO service_role 
USING (true) 
WITH CHECK (true);