import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://ucqdymdybcfhsjqtavav.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVjcWR5bWR5YmNmaHNqcXRhdmF2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzc2MjEzMTUsImV4cCI6MjA5MzE5NzMxNX0.2h1NAK8mq7J85Fe8jSE-qScdN37YSuhgD9nGI0x_aPE';
const supabase = createClient(supabaseUrl, supabaseKey);

async function seed() {
    console.log('Seeding initial data...');

    // Ticker Items
    await supabase.from('TickerItem').insert([
        { id: crypto.randomUUID(), content: 'Agora360 Yeni Yayın Dönemi Başladı!' },
        { id: crypto.randomUUID(), content: 'Küresel Siyasette Yeni Dengeler: Analizimiz Yayında.' },
        { id: crypto.randomUUID(), content: 'Sanat Köşesi: Haftanın Sergileri ve Kültür Durakları.' }
    ]);

    // Market Snapshot
    await supabase.from('MarketSnapshot').insert([
        { id: crypto.randomUUID(), name: 'BIST 100', val: '9.450', ch: '+1.2%' },
        { id: crypto.randomUUID(), name: 'USD/TRY', val: '32,45', ch: '−0.1%' },
        { id: crypto.randomUUID(), name: 'EUR/TRY', val: '35,12', ch: '+0.3%' },
        { id: crypto.randomUUID(), name: 'ALTIN', val: '2.450', ch: '+0.8%' }
    ]);

    // On This Day
    await supabase.from('OnThisDay').insert([
        { id: crypto.randomUUID(), year: 1920, event: 'TBMM açıldı.' },
        { id: crypto.randomUUID(), year: 1945, event: 'İkinci Dünya Savaşı Avrupa\'da sona erdi.' }
    ]);

    // Settings
    await supabase.from('Setting').upsert([
        { key: 'quoteOfDay', value: { text: 'Bilgi güçtür, ancak paylaşılmadıkça eksiktir.', attr: 'Francis Bacon' } },
        { key: 'weatherInfo', value: 'İSTANBUL · 22°C · GÜNEŞLİ' }
    ]);

    console.log('Seeding complete.');
}

seed();
