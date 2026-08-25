import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://ucqdymdybcfhsjqtavav.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVjcWR5bWR5YmNmaHNqcXRhdmF2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzc2MjEzMTUsImV4cCI6MjA5MzE5NzMxNX0.2h1NAK8mq7J85Fe8jSE-qScdN37YSuhgD9nGI0x_aPE';
const supabase = createClient(supabaseUrl, supabaseKey);

const candidateTables = [
  'Article', 'NewsItem', 'Analysis', 'LearningModule', 'Podcast', 
  'Resource', 'Concept', 'OnThisDay', 'LetterToEditor', 
  'TickerItem', 'MarketSnapshot', 'SidebarStory', 'Setting'
];

async function check() {
  console.log('Checking Supabase tables...');
  for (const table of candidateTables) {
    try {
      const { data, error } = await supabase.from(table).select('*').limit(1);
      if (error) {
        console.log(`- ${table}: FAILED. Error: ${error.message} (${error.code})`);
      } else {
        console.log(`- ${table}: SUCCESS. Found ${data.length} row(s). Keys:`, data.length > 0 ? Object.keys(data[0]) : '(empty table)');
      }
    } catch (e) {
      console.log(`- ${table}: THREW EXCEPTION. Error: ${e.message}`);
    }
  }
}

check();
