-- Remove all commerce-related tables that interfere with WooCommerce
DROP TABLE IF EXISTS public.orders CASCADE;
DROP TABLE IF EXISTS public.products CASCADE;
DROP TABLE IF EXISTS public.product_variants CASCADE;
DROP TABLE IF EXISTS public.printify_products CASCADE;
DROP TABLE IF EXISTS public.sync_jobs CASCADE;