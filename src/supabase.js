// @ts-nocheck

import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://mwnclalpgbduuaaiwvxp.supabase.co';
const supabaseAnonKey =
	'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im13bmNsYWxwZ2JkdXVhYWl3dnhwIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTkyNzk2OTQsImV4cCI6MTk3NDg1NTY5NH0.CAuUfi9EPzdi1kDtPSHGtVmCuaGATV1quPHeDZssnpo';
// Create a single supabase client for interacting with your database
export const supabase = createClient(supabaseUrl, supabaseAnonKey);
