import { createClient } from "@supabase/supabase-js";

// export type Database = {};
export type Question = {
  question_id: number;
  level_id: number;
  number: number;
};
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

const supabase = createClient(supabaseUrl, supabaseAnonKey);

export default supabase;
