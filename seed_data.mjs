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

    // On This Day
    await supabase.from('OnThisDay').insert([
        { id: crypto.randomUUID(), year: 1920, event: 'TBMM açıldı.' },
        { id: crypto.randomUUID(), year: 1945, event: 'İkinci Dünya Savaşı Avrupa\'da sona erdi.' }
    ]);

    // Settings
    await supabase.from('Setting').upsert([
        { key: 'quoteOfDay', value: { text: 'Bilgi güçtür, ancak paylaşılmadıkça eksiktir.', attr: 'Francis Bacon' } },
        { key: 'infoOfDay', value: { text: 'Türkiye, 1952 yılında NATO\'ya üye olmuştur.', attr: 'Agora360 Araştırma Grubu' } }
    ], { onConflict: 'key' });

    console.log('Seeding complete.');
}

seed();
