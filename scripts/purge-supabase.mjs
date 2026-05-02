import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.SUPABASE_URL || process.env.VITE_SUPABASE_URL || 'https://ucqdymdybcfhsjqtavav.supabase.co';
const supabaseKey = process.env.SUPABASE_KEY || process.env.VITE_SUPABASE_ANON_KEY || '';

if (!supabaseKey) {
  console.error('Supabase key is missing. Set SUPABASE_KEY or VITE_SUPABASE_ANON_KEY in your environment.');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

const tables = [
  'Article',
  'NewsItem',
  'Analysis',
  'LearningModule',
  'Podcast',
  'Resource',
  'Concept',
  'OnThisDay',
  'LetterToEditor',
  'TickerItem',
  'MarketSnapshot',
  'Setting',
  'SidebarStory'
];

for (const table of tables) {
  const { error } = await supabase.from(table).delete().neq('id', '');
  if (error) {
    console.error(`Failed to clear ${table}:`, error);
    process.exit(1);
  }
  console.log(`Cleared ${table}`);
}

console.log('All site data cleared from Supabase.');
