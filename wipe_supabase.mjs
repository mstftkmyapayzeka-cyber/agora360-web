import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://ucqdymdybcfhsjqtavav.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVjcWR5bWR5YmNmaHNqcXRhdmF2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzc2MjEzMTUsImV4cCI6MjA5MzE5NzMxNX0.2h1NAK8mq7J85Fe8jSE-qScdN37YSuhgD9nGI0x_aPE';
const supabase = createClient(supabaseUrl, supabaseKey);

const tables = [
    'Article', 'NewsItem', 'Analysis', 'LearningModule', 'Podcast', 
    'Resource', 'Concept', 'OnThisDay', 'LetterToEditor', 
    'TickerItem', 'MarketSnapshot', 'SidebarStory', 'Setting'
];

async function wipe() {
    console.log('Wiping all tables...');
    for (const table of tables) {
        const { error } = await supabase.from(table).delete().neq('id', '00000000-0000-0000-0000-000000000000');
        if (error) {
            console.error(`Error wiping ${table}:`, error.message);
        } else {
            console.log(`Wiped ${table}`);
        }
    }
    console.log('All tables wiped.');
}

wipe();
