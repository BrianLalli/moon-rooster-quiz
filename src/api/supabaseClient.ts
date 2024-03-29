// src/supabaseClient.ts

import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.REACT_APP_SUPABASE_URL;
const supabaseAnonKey = process.env.REACT_APP_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
    throw new Error("Supabase URL and Anon Key must be defined");
}

const supabase = createClient(supabaseUrl, supabaseAnonKey);


export default supabase;
