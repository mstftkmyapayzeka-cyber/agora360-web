import { Link } from 'react-router-dom';
import { useData } from '../context/DataContext';
import { format } from 'date-fns';
import { tr } from 'date-fns/locale';
import { DailyConcept } from '../components/features/DailyConcept';

const tickerItems = [
    'BM Güvenlik Konseyi olağanüstü toplantı çağrısı',
    'AB ortak savunma paketi onay sürecinde',
    'Türkiye-Yunanistan istişare görüşmeleri başlıyor',
    'Venedik Bienali’nde Türk pavyonu açıldı',
    'NATO bütçe müzakereleri kritik aşamada',
    'COP31 öncesi iklim diplomasisi yoğunlaştı',
];

const sectionFronts = [
    {
        to: '/siyaset',
        kicker: 'Bölüm I',
        title: 'Siyaset',
        deck: 'Güç, demokrasi ve kamuoyu — gençlerin gözünden iç ve dış politika.',
        lead: {
            label: 'Manşet Yorum',
            headline: 'Dijital seçim kampanyaları: geleceğin siyaseti mi, gözetimin yeni biçimi mi?',
            byline: 'Ayşe Yılmaz · Siyaset Editörü',
        },
    },
    {
        to: '/ui',
        kicker: 'Bölüm II',
        title: 'Uluslararası İlişkiler',
        deck: 'Jeopolitik, diplomasi ve güvenlik — küresel sahnenin günlük muhasebesi.',
        lead: {
            label: 'Açılış Analizi',
            headline: 'BM Güvenlik Konseyi reformu: Veto hakkının geleceği yeniden tartışmada.',
            byline: 'Dr. Ahmet Demir · Uİ Uzmanı',
        },
    },
    {
        to: '/sanat-kosesi',
        kicker: 'Bölüm III',
        title: 'Sanat Köşesi',
        deck: 'Sinema, edebiyat, görsel sanat ve kültür — yaratıcı ifadenin tarafsız günlüğü.',
        lead: {
            label: 'Hafta’nın Eleştirisi',
            headline: 'Türk sinemasının yeni dalgası: bağımsız üretim ve festival ekonomisi.',
            byline: 'Deniz Şahin · Sinema Eleştirmeni',
        },
    },
];

const onThisDay = [
    { year: 1789, event: 'George Washington ABD’nin ilk başkanı olarak yemin etti — modern başkanlık kurumunun başlangıcı.' },
    { year: 1945, event: 'Berlin’de Sovyet ordusu Reichstag’a Kızıl Bayrak’ı dikti — Avrupa’da savaşın sembolik finali.' },
    { year: 1993, event: 'Tim Berners-Lee CERN üzerinden World Wide Web teknolojisini ücretsiz kullanıma açtı.' },
    { year: 2011, event: 'Kraliyet düğünü: William ile Catherine Westminster Abbey’de evlendi.' },
];

const lettersToEditor = [
    {
        salutation: 'Sayın Yayın Kurulu,',
        body: 'Geçen sayıdaki BM reformu yorumunu ilgiyle okudum; ancak veto hakkının kaldırılması yerine sınırlandırılması teklifi yeterince işlenmemişti.',
        author: 'M. Kerem · Lisansüstü Öğrencisi, ODTÜ',
    },
    {
        salutation: 'Editöre,',
        body: 'Sanat Köşesi’nde Venedik Bienali değerlendirmesi disiplinlerarası bakışıyla bizleri zenginleştirdi. Sinema sayfalarının daha sık görünmesini umuyorum.',
        author: 'A. Yıldız · Sinema Yazarı',
    },
    {
        salutation: 'Yayın Kurulu’na,',
        body: 'Genç bir araştırmacı olarak iklim diplomasisi haberlerinizi referans olarak kullanıyorum. Kaynak gösteriminin dipnot biçimi son derece yararlı.',
        author: 'E. Akın · Doktora Adayı, Bilkent',
    },
];

const featuredColumnist = {
    initials: 'AY',
    name: 'Ayşe Yılmaz',
    role: 'Siyaset Editörü',
    quote: 'Demokrasi yalnızca sandıktan ibaret bir tören değildir; her gün yeniden müzakere edilen bir sözleşmedir. Gençler, bu müzakerenin kıyısında değil; tam ortasındadır.',
    column: 'Pazar Notu',
};

const indexEntries = [
    { cat: 'Manşet',     title: 'Lead story',                     page: 1, slug: 'lead' },
    { cat: 'Yorum',      title: 'Editörden — Bir gazeteyi açar gibi',  page: 2, slug: 'op-ed' },
    { cat: 'Siyaset',    title: 'Dijital kampanyalar ve gözetim',  page: 3, slug: '/siyaset' },
    { cat: 'Diplomasi',  title: 'BM reformu: veto sorusu',         page: 4, slug: '/ui' },
    { cat: 'Sanat',      title: 'Yeni Dalga ve festival ekonomisi', page: 6, slug: '/sanat-kosesi' },
    { cat: 'Tarih',      title: 'Tarihte Bugün — kısa kronoloji',  page: 7, slug: 'history' },
    { cat: 'Mektuplar',  title: 'Editöre Mektup',                  page: 8, slug: 'letters' },
];

const quoteOfDay = {
    text: 'Cumhuriyet, fikren, ilmen, fennen, bedenen kuvvetli ve yüksek karakterli muhafızlar ister.',
    attr: 'Mustafa Kemal Atatürk',
};

const marketSnapshot = [
    { name: 'BIST 100',  val: '11.428', ch: '+0,42%' },
    { name: 'USD/TRY',   val: '34,87',  ch: '+0,11%' },
    { name: 'BRENT',     val: '$83,2',  ch: '−0,38%' },
];

/* ─── SVG ornaments / illustrations ─── */

function LaurelLeft({ className = '' }: { className?: string }) {
    return (
        <svg className={className} width="78" height="42" viewBox="0 0 78 42" aria-hidden="true">
            <g fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round">
                <path d="M70 21 C 50 21, 30 21, 8 21" />
                <path d="M62 18 C 60 12, 56 9, 50 9" />
                <path d="M54 18 C 52 12, 48 9, 42 9" />
                <path d="M46 18 C 44 12, 40 9, 34 9" />
                <path d="M38 18 C 36 12, 32 9, 26 9" />
                <path d="M30 18 C 28 12, 24 9, 18 9" />
                <path d="M62 24 C 60 30, 56 33, 50 33" />
                <path d="M54 24 C 52 30, 48 33, 42 33" />
                <path d="M46 24 C 44 30, 40 33, 34 33" />
                <path d="M38 24 C 36 30, 32 33, 26 33" />
                <path d="M30 24 C 28 30, 24 33, 18 33" />
                <circle cx="8" cy="21" r="2" fill="currentColor" />
            </g>
        </svg>
    );
}
function LaurelRight({ className = '' }: { className?: string }) {
    return (
        <svg className={className} width="78" height="42" viewBox="0 0 78 42" aria-hidden="true" style={{ transform: 'scaleX(-1)' }}>
            <g fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round">
                <path d="M70 21 C 50 21, 30 21, 8 21" />
                <path d="M62 18 C 60 12, 56 9, 50 9" />
                <path d="M54 18 C 52 12, 48 9, 42 9" />
                <path d="M46 18 C 44 12, 40 9, 34 9" />
                <path d="M38 18 C 36 12, 32 9, 26 9" />
                <path d="M30 18 C 28 12, 24 9, 18 9" />
                <path d="M62 24 C 60 30, 56 33, 50 33" />
                <path d="M54 24 C 52 30, 48 33, 42 33" />
                <path d="M46 24 C 44 30, 40 33, 34 33" />
                <path d="M38 24 C 36 30, 32 33, 26 33" />
                <path d="M30 24 C 28 30, 24 33, 18 33" />
                <circle cx="8" cy="21" r="2" fill="currentColor" />
            </g>
        </svg>
    );
}

function FlourishMark() {
    return (
        <svg width="64" height="14" viewBox="0 0 64 14" aria-hidden="true">
            <g fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round">
                <path d="M2 7 C 14 7, 18 2, 26 7 S 38 12, 46 7 S 58 2, 62 7" />
                <circle cx="32" cy="7" r="1.4" fill="currentColor" />
            </g>
        </svg>
    );
}

function InkStamp() {
    // Circular stamp: outer ring text + inner mark "AGORA 360"
    return (
        <div className="ink-stamp" aria-hidden="true">
            <svg viewBox="0 0 132 132">
                <defs>
                    <path id="stamp-top" d="M 16 66 A 50 50 0 0 1 116 66" />
                    <path id="stamp-bot" d="M 18 66 A 48 48 0 0 0 114 66" />
                </defs>
                <circle cx="66" cy="66" r="60" fill="none" stroke="currentColor" strokeWidth="2.2" />
                <circle cx="66" cy="66" r="54" fill="none" stroke="currentColor" strokeWidth="0.8" />
                <text fontFamily="Inter, sans-serif" fontSize="10.5" fontWeight="800" letterSpacing="3" fill="currentColor">
                    <textPath href="#stamp-top" startOffset="50%" textAnchor="middle">
                        HAKEMLİ · BAĞIMSIZ · AKADEMİK
                    </textPath>
                </text>
                <text fontFamily="Inter, sans-serif" fontSize="9" fontWeight="800" letterSpacing="3.6" fill="currentColor">
                    <textPath href="#stamp-bot" startOffset="50%" textAnchor="middle">
                        EST · MMXXVI · İSTANBUL
                    </textPath>
                </text>
                {/* Inner laurel */}
                <g transform="translate(66 66)" fill="none" stroke="currentColor" strokeWidth="1">
                    <path d="M -22 6 C -16 -2, -8 -6, 0 -7" />
                    <path d="M 22 6 C 16 -2, 8 -6, 0 -7" />
                    <path d="M -18 4 C -16 0, -12 -2, -8 -2" />
                    <path d="M -14 6 C -12 2, -8 0, -4 0" />
                    <path d="M 18 4 C 16 0, 12 -2, 8 -2" />
                    <path d="M 14 6 C 12 2, 8 0, 4 0" />
                </g>
                <text x="66" y="66" textAnchor="middle" dominantBaseline="middle"
                    fontFamily="Playfair Display, Georgia, serif" fontWeight="900" fontStyle="italic"
                    fontSize="16" letterSpacing="0.5" fill="currentColor">
                    AGORA
                </text>
                <text x="66" y="82" textAnchor="middle" dominantBaseline="middle"
                    fontFamily="Inter, sans-serif" fontWeight="800" fontSize="9" letterSpacing="3" fill="currentColor">
                    360
                </text>
                {/* tiny stars */}
                <g fill="currentColor">
                    <circle cx="22" cy="66" r="1.2" />
                    <circle cx="110" cy="66" r="1.2" />
                </g>
            </svg>
        </div>
    );
}

function EditorialCartoon() {
    // Engraved-style illustration: classical Agora — three Greek columns, sun rising, laurel
    return (
        <svg viewBox="0 0 480 280" aria-hidden="true">
            <g fill="none" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'var(--ink)' }}>
                {/* Sun rays */}
                <g opacity="0.85">
                    <circle cx="240" cy="78" r="22" />
                    {Array.from({ length: 14 }).map((_, i) => {
                        const a = (i / 14) * Math.PI * 2;
                        const r1 = 28, r2 = 40;
                        const x1 = 240 + Math.cos(a) * r1;
                        const y1 = 78 + Math.sin(a) * r1;
                        const x2 = 240 + Math.cos(a) * r2;
                        const y2 = 78 + Math.sin(a) * r2;
                        return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} />;
                    })}
                </g>
                {/* Hatched sky */}
                <g opacity="0.18">
                    {Array.from({ length: 10 }).map((_, i) => (
                        <line key={i} x1={20 + i * 8} y1="20" x2={120 + i * 8} y2="20" />
                    ))}
                    {Array.from({ length: 10 }).map((_, i) => (
                        <line key={i} x1={350 + i * 8} y1="20" x2={460 + i * 8} y2="20" />
                    ))}
                </g>
                {/* Pediment */}
                <g>
                    <path d="M 110 130 L 240 96 L 370 130 Z" />
                    <line x1="100" y1="130" x2="380" y2="130" />
                    <line x1="100" y1="138" x2="380" y2="138" />
                </g>
                {/* Three columns */}
                {[140, 240, 340].map((cx, idx) => (
                    <g key={idx}>
                        {/* capital */}
                        <rect x={cx - 18} y="138" width="36" height="6" />
                        {/* shaft */}
                        <line x1={cx - 14} y1="146" x2={cx - 14} y2="232" />
                        <line x1={cx + 14} y1="146" x2={cx + 14} y2="232" />
                        {/* fluting */}
                        {[-9, -4, 1, 6].map((ox, j) => (
                            <line key={j} x1={cx + ox} y1="148" x2={cx + ox} y2="230" opacity="0.55" />
                        ))}
                        {/* base */}
                        <rect x={cx - 18} y="232" width="36" height="6" />
                    </g>
                ))}
                {/* Stylobate / steps */}
                <line x1="80" y1="240" x2="400" y2="240" />
                <line x1="70" y1="248" x2="410" y2="248" />
                <line x1="60" y1="256" x2="420" y2="256" />
                {/* Ground hatch */}
                <g opacity="0.35">
                    {Array.from({ length: 36 }).map((_, i) => (
                        <line key={i} x1={40 + i * 12} y1="262" x2={32 + i * 12} y2="270" />
                    ))}
                </g>
                {/* Laurel branch left */}
                <g transform="translate(38 200)" opacity="0.85">
                    <path d="M 0 0 C 8 -10, 18 -16, 30 -18" />
                    <path d="M 6 -4 C 6 -10, 10 -14, 14 -14" />
                    <path d="M 12 -8 C 12 -14, 16 -18, 20 -18" />
                    <path d="M 18 -12 C 18 -18, 22 -22, 26 -22" />
                </g>
                {/* Laurel branch right */}
                <g transform="translate(442 200) scale(-1 1)" opacity="0.85">
                    <path d="M 0 0 C 8 -10, 18 -16, 30 -18" />
                    <path d="M 6 -4 C 6 -10, 10 -14, 14 -14" />
                    <path d="M 12 -8 C 12 -14, 16 -18, 20 -18" />
                    <path d="M 18 -12 C 18 -18, 22 -22, 26 -22" />
                </g>
                {/* Caption tag */}
                <g transform="translate(240 268)">
                    <text textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="8.5" fontWeight="700"
                        letterSpacing="3" fill="currentColor">AGORA — KAMUSAL ALANIN GERİ DÖNÜŞÜ</text>
                </g>
            </g>
        </svg>
    );
}

function WeatherGlyph() {
    return (
        <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden="true">
            <g fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round">
                <circle cx="5.5" cy="6" r="2.6" />
                <path d="M5.5 1.4 V2.6 M5.5 9.4 V10.6 M0.9 6 H2.1 M8.9 6 H10.1 M2.4 2.9 L3.3 3.8 M7.7 8.2 L8.6 9.1 M2.4 9.1 L3.3 8.2 M7.7 3.8 L8.6 2.9" />
            </g>
        </svg>
    );
}

function MarketGlyph() {
    return (
        <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden="true">
            <g fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round">
                <path d="M1 11 L4 8 L7 9 L10 4 L13 6" />
                <path d="M10 4 L13 4 L13 7" />
            </g>
        </svg>
    );
}

function FrontPageMasthead() {
    const today = new Date();
    const dateStr = format(today, 'd MMMM yyyy', { locale: tr });
    const dayName = format(today, 'EEEE', { locale: tr });
    const issueNo = String(today.getDate()).padStart(3, '0');

    return (
        <header className="pt-4 pb-4">
            {/* ── Edition Strip ── */}
            <div className="edition-strip mb-6">
                <span className="strip-cell">
                    <WeatherGlyph />
                    <span>İSTANBUL · 18°C · AÇIK</span>
                </span>
                <span className="strip-divider hidden md:inline-block" />
                <span className="strip-cell hidden md:inline-flex">
                    <MarketGlyph />
                    {marketSnapshot.map((m, i) => (
                        <span key={m.name} className="ml-2">
                            {m.name} <strong style={{ color: 'var(--ink)' }}>{m.val}</strong>
                            <span style={{ color: m.ch.startsWith('−') ? 'var(--accent-red)' : '#1f4a3f', marginLeft: 4 }}>{m.ch}</span>
                            {i < marketSnapshot.length - 1 && <span className="mx-1" style={{ color: 'var(--ink-faint)' }}>·</span>}
                        </span>
                    ))}
                </span>
                <span className="strip-divider hidden lg:inline-block" />
                <span className="strip-cell">
                    <span>Erken Baskı · 06:00</span>
                </span>
            </div>

            {/* ── Folio line ── */}
            <div
                className="flex items-center justify-between mb-5 pb-2 byline"
                style={{ borderBottom: '1px solid var(--ink)', color: 'var(--ink-muted)' }}
            >
                <span>Cilt MMXXVI · No. {issueNo}</span>
                <span className="hidden md:inline italic">"Akıl, hür düşüncenin ışığında parlar."</span>
                <span>Fiyat: Bedava</span>
            </div>

            {/* ── Masthead with laurel ornaments ── */}
            <div className="kicker mb-2 text-center" style={{ color: 'var(--accent-red)' }}>
                Gençliğin Fikir Meydanı
            </div>

            <div className="relative grid grid-cols-12 items-center gap-2">
                <div className="col-span-2 hidden md:flex justify-end">
                    <LaurelLeft />
                </div>
                <div className="col-span-12 md:col-span-8 text-center">
                    <h1
                        className="masthead-title"
                        style={{ fontSize: 'clamp(56px, 11vw, 160px)', lineHeight: 0.92 }}
                    >
                        AGORA<span style={{ color: 'var(--accent-red)' }}>·</span>360
                    </h1>
                </div>
                <div className="col-span-2 hidden md:flex justify-start">
                    <LaurelRight />
                </div>

                {/* Hakem Damgası — corner stamp */}
                <div className="absolute hidden lg:block" style={{ right: -6, top: -10 }}>
                    <InkStamp />
                </div>
            </div>

            <div className="mt-3 italic deck text-center" style={{ fontSize: 18, color: 'var(--ink-muted)' }}>
                Bağımsız Akademik Gazete — Siyaset, Uluslararası İlişkiler ve Sanat
            </div>

            <div
                className="mt-6 mx-auto flex items-center justify-center gap-6 flex-wrap"
                style={{ borderTop: '3px double var(--ink)', borderBottom: '3px double var(--ink)', padding: '10px 0' }}
            >
                <span className="byline">{dayName.toUpperCase()}</span>
                <span style={{ borderLeft: '1px solid var(--ink)', height: 14 }} />
                <span className="byline">{dateStr}</span>
                <span style={{ borderLeft: '1px solid var(--ink)', height: 14 }} />
                <span className="byline hidden md:inline">İSTANBUL</span>
                <span className="hidden md:inline" style={{ borderLeft: '1px solid var(--ink)', height: 14 }} />
                <span className="byline hidden md:inline">12 SAYFA</span>
                <span className="hidden md:inline" style={{ borderLeft: '1px solid var(--ink)', height: 14 }} />
                <span className="byline hidden md:inline">CMYK · OFSET</span>
            </div>
        </header>
    );
}

function TickerStrip() {
    const doubled = [...tickerItems, ...tickerItems];
    return (
        <div
            className="overflow-hidden flex items-stretch"
            style={{ borderBottom: '1px solid var(--ink)' }}
        >
            <div
                className="flex-shrink-0 px-3 py-2 byline flex items-center"
                style={{ background: 'var(--ink)', color: 'var(--paper)' }}
            >
                Son Dakika
            </div>
            <div className="flex-1 overflow-hidden flex items-center">
                <div className="animate-ticker whitespace-nowrap">
                    {doubled.map((item, i) => (
                        <span key={i} className="inline-flex items-center mx-6 dateline" style={{ color: 'var(--ink)' }}>
                            <span style={{ color: 'var(--accent-red)' }}>◆</span>
                            <span className="ml-2">{item}</span>
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
}

function Flourish() {
    return (
        <div className="flourish-divider">
            <FlourishMark />
        </div>
    );
}

export function PortalHomePage() {
    const { articles, news, analyses, concepts } = useData();

    const lead = articles[0] ?? null;
    const subLead1 = articles[1] ?? null;
    const subLead2 = articles[2] ?? null;
    const todayConcept = concepts[0] ?? null;

    return (
        <div className="container-custom pb-20">
            <FrontPageMasthead />
            <TickerStrip />

            {/* ── Lead grid: 8/4 split ── */}
            <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-10">
                {/* Lead Story */}
                <div className="lg:col-span-8">
                    {lead ? (
                        <article style={{ borderTop: '3px double var(--ink)', paddingTop: 16 }}>
                            <div className="flex items-center justify-between mb-3">
                                <span className="kicker">Manşet</span>
                                <span className="dateline" style={{ color: 'var(--ink-faint)' }}>
                                    Sayfa I · Önce Yayımlandı
                                </span>
                            </div>
                            <Link to={`/articles/${lead.id}`} style={{ color: 'inherit' }}>
                                <h2
                                    className="headline mb-4"
                                    style={{ fontSize: 'clamp(36px, 5vw, 64px)', lineHeight: 1.02 }}
                                >
                                    {lead.title}
                                </h2>
                            </Link>
                            <p className="deck mb-5" style={{ fontSize: 'clamp(17px, 1.6vw, 22px)' }}>
                                {lead.summary}
                            </p>
                            <div
                                className="flex items-center justify-between mb-6 py-3"
                                style={{ borderTop: '1px solid var(--rule-soft)', borderBottom: '1px solid var(--rule-soft)' }}
                            >
                                <span className="byline">— {lead.author}</span>
                                <span className="dateline" style={{ color: 'var(--ink-faint)' }}>
                                    {lead.publication ?? 'Agora360'} · {lead.year ?? new Date().getFullYear()}
                                </span>
                            </div>

                            <div
                                className="news-columns drop-cap body-copy smallcaps-opener"
                                style={{ color: 'var(--ink-soft)' }}
                            >
                                <p className="mb-4">
                                    {lead.summary}
                                </p>
                                <p className="mb-4">
                                    Bu sayımızda, kamuoyunun yeniden şekillendiği bir çağda gençlerin sesi nasıl çıkar sorusunu masaya yatırıyoruz. Analiz ekibimiz bağımsız kaynaklardan derlediği veri ve uzman görüşleriyle olayın arka planını okurla paylaşıyor.
                                </p>
                                <p className="mb-4">
                                    Konunun derinleşmesi için aşağıdaki bölümlere de göz atılabilir; her sayfa farklı bir disiplinden okuma sunuyor. Editörler kurulu, içeriklerin akademik standarda uygunluğunu yayım öncesinde inceler.
                                </p>
                                <p>
                                    <Link to={`/articles/${lead.id}`} className="ink-link byline">
                                        Yazının Tamamı →
                                    </Link>
                                </p>
                            </div>

                            <div className="pull-quote text-center">
                                <span style={{ color: 'var(--accent-red)' }}>“</span>
                                Bağımsızlık, yalnızca bir cümlenin başında değil; bir gazetenin her satırında okunur.
                                <span style={{ color: 'var(--accent-red)' }}>”</span>
                                <div className="byline mt-3" style={{ color: 'var(--ink-muted)' }}>— Yayın Kurulu</div>
                            </div>

                            <span className="jumpline">Devamı: Sayfa 3, Sütun 2 →</span>
                        </article>
                    ) : (
                        <div className="dateline">İçerik hazırlanıyor.</div>
                    )}
                </div>

                {/* Sidebar: index + concept + stamp + quote */}
                <aside className="lg:col-span-4 space-y-8">
                    {/* Bu Sayıda · Index */}
                    <div style={{ border: '1px solid var(--ink)', padding: 18, background: 'var(--paper)' }}>
                        <div className="flex items-center justify-between pb-2 mb-3" style={{ borderBottom: '3px double var(--ink)' }}>
                            <span className="kicker-ink">Bu Sayıda · Index</span>
                            <span className="dateline" style={{ color: 'var(--ink-faint)' }}>12 SAYFA</span>
                        </div>
                        <ul className="toc-list">
                            {indexEntries.map((e) => {
                                const inner = (
                                    <>
                                        <span className="toc-cat">{e.cat}</span>
                                        <span className="toc-title">{e.title}</span>
                                        <span className="toc-leader" />
                                        <span className="toc-page">{e.page.toString().padStart(2, '0')}</span>
                                    </>
                                );
                                return (
                                    <li key={e.cat + e.page}>
                                        {e.slug.startsWith('/') ? (
                                            <Link to={e.slug} className="toc-entry" style={{ color: 'inherit' }}>
                                                {inner}
                                            </Link>
                                        ) : (
                                            <div className="toc-entry">{inner}</div>
                                        )}
                                    </li>
                                );
                            })}
                        </ul>
                    </div>

                    {/* Bugünün Sözü */}
                    <div className="quote-of-day" style={{ background: 'var(--paper-deep)' }}>
                        <span className="qd-mark">“</span>
                        <p className="qd-text">{quoteOfDay.text}</p>
                        <div className="qd-attr">— {quoteOfDay.attr}</div>
                    </div>

                    {/* Today's concept */}
                    {todayConcept && <DailyConcept />}

                    {/* Editörden — signature note */}
                    <div style={{ border: '1px solid var(--ink)', padding: 18, background: 'var(--paper)' }}>
                        <div className="kicker mb-2">Editörden</div>
                        <h4 className="headline mb-2" style={{ fontSize: 22 }}>
                            Bir gazeteyi açar gibi…
                        </h4>
                        <p className="body-copy italic" style={{ fontSize: 14 }}>
                            Agora360, üç bölümlü bir bağımsız gazetedir. İlk sayfada gündem; iç sayfalarda eleştiri, analiz ve eğitim. Sayfaları çevirmeye buradan başlayabilirsiniz.
                        </p>
                        <div className="mt-4 flex items-center gap-3">
                            <svg width="80" height="28" viewBox="0 0 80 28" aria-hidden="true">
                                <path d="M2 18 C 8 4, 14 22, 20 12 C 26 2, 32 22, 40 14 C 48 6, 54 22, 62 14 C 70 6, 74 18, 78 14"
                                    fill="none" stroke="var(--ink)" strokeWidth="1.4" strokeLinecap="round" />
                            </svg>
                            <div className="byline" style={{ color: 'var(--ink-muted)' }}>— Yayın Kurulu</div>
                        </div>
                    </div>
                </aside>
            </section>

            {/* Flourish divider */}
            <Flourish />

            {/* ── Three-up sub leads ── */}
            <section className="pt-2 grid grid-cols-1 md:grid-cols-3 gap-8" style={{ borderTop: '3px double var(--ink)' }}>
                {[subLead1, subLead2, articles[3] ?? null].map((a, i) => a && (
                    <article key={a.id} style={{ borderTop: '1px solid var(--ink)', paddingTop: 12 }}>
                        <div className="kicker mb-2">{['İkinci Manşet', 'Üçüncü Manşet', 'Dördüncü Manşet'][i]}</div>
                        <Link to={`/articles/${a.id}`} style={{ color: 'inherit' }}>
                            <h3 className="headline mb-3" style={{ fontSize: 24 }}>
                                <span className="hover:underline decoration-1 underline-offset-4">{a.title}</span>
                            </h3>
                        </Link>
                        <p className="body-copy line-clamp-4" style={{ fontSize: 15, color: 'var(--ink-muted)' }}>
                            {a.summary}
                        </p>
                        <div className="mt-3 flex items-center justify-between">
                            <span className="byline" style={{ color: 'var(--ink-muted)' }}>— {a.author}</span>
                            <span className="dateline" style={{ color: 'var(--ink-faint)' }}>S. {i + 4}</span>
                        </div>
                    </article>
                ))}
            </section>

            {/* ── Karikatür + Köşe Yazarı ── */}
            <section className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-8">
                {/* Editorial cartoon */}
                <div className="lg:col-span-7">
                    <div
                        className="flex items-center justify-between pb-2 mb-4"
                        style={{ borderBottom: '3px double var(--ink)' }}
                    >
                        <span className="kicker-ink">Editöryel Karikatür</span>
                        <span className="dateline" style={{ color: 'var(--ink-faint)' }}>Sayfa V · Çizgi</span>
                    </div>
                    <div className="cartoon-panel">
                        <div className="cp-frame">
                            <EditorialCartoon />
                        </div>
                        <p className="mt-4 deck text-center" style={{ fontSize: 16 }}>
                            “Sütunlar hâlâ ayakta — ama meydan kimin?”
                        </p>
                        <div className="byline text-center mt-2" style={{ color: 'var(--ink-muted)' }}>
                            Çizgi: Atölye Agora · Tahta Baskı (Reprodüksiyon)
                        </div>
                    </div>
                </div>

                {/* Featured columnist */}
                <div className="lg:col-span-5">
                    <div
                        className="flex items-center justify-between pb-2 mb-4"
                        style={{ borderBottom: '3px double var(--ink)' }}
                    >
                        <span className="kicker-ink">Köşe · {featuredColumnist.column}</span>
                        <span className="dateline" style={{ color: 'var(--ink-faint)' }}>Bu Hafta</span>
                    </div>
                    <div style={{ border: '1px solid var(--ink)', padding: 22, background: 'var(--paper)' }}>
                        <div className="flex items-center gap-4 mb-4">
                            <div className="columnist-portrait">{featuredColumnist.initials}</div>
                            <div>
                                <div className="headline" style={{ fontSize: 20 }}>{featuredColumnist.name}</div>
                                <div className="byline" style={{ color: 'var(--ink-muted)' }}>{featuredColumnist.role}</div>
                            </div>
                        </div>
                        <div
                            className="deck"
                            style={{
                                fontSize: 19,
                                lineHeight: 1.45,
                                paddingLeft: 18,
                                borderLeft: '3px solid var(--accent-red)',
                                color: 'var(--ink)',
                            }}
                        >
                            <span style={{ color: 'var(--accent-red)', fontSize: 28, fontWeight: 900, marginRight: 4 }}>“</span>
                            {featuredColumnist.quote}
                        </div>
                        <div className="mt-5 flex items-center justify-between">
                            <span className="byline" style={{ color: 'var(--ink-muted)' }}>Yazının Tamamı</span>
                            <Link to="/siyaset" className="ink-link byline">Sayfa 3’te →</Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── Section fronts (Three sections previewed) ── */}
            <section className="mt-16">
                <div
                    className="flex items-center justify-center gap-6 mb-8 py-2"
                    style={{ borderTop: '3px double var(--ink)', borderBottom: '3px double var(--ink)' }}
                >
                    <span className="kicker">İç Sayfalar</span>
                    <span style={{ borderLeft: '1px solid var(--ink)', height: 14 }} />
                    <span className="byline">Üç Bölüm — Üç Disiplin</span>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {sectionFronts.map((s, idx) => (
                        <Link
                            key={s.to}
                            to={s.to}
                            className="group"
                            style={{
                                background: 'var(--paper)',
                                border: '1px solid var(--ink)',
                                padding: 24,
                                color: 'inherit',
                                transition: 'background 0.2s ease',
                                position: 'relative',
                            }}
                            onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = 'var(--paper-deep)'; }}
                            onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = 'var(--paper)'; }}
                        >
                            <div className="flex items-center justify-between pb-2 mb-4" style={{ borderBottom: '1px solid var(--ink)' }}>
                                <span className="kicker">{s.kicker}</span>
                                <span className="dateline">Sayfa {3 + idx} →</span>
                            </div>
                            <h3 className="headline mb-2" style={{ fontSize: 30 }}>
                                {s.title}
                            </h3>
                            <p className="deck mb-5" style={{ fontSize: 15 }}>
                                {s.deck}
                            </p>
                            <div className="pt-4" style={{ borderTop: '1px dotted var(--rule-soft)' }}>
                                <div className="kicker mb-1">{s.lead.label}</div>
                                <p className="body-copy" style={{ fontSize: 15, fontWeight: 600 }}>
                                    {s.lead.headline}
                                </p>
                                <div className="mt-2 byline" style={{ color: 'var(--ink-muted)' }}>
                                    — {s.lead.byline}
                                </div>
                            </div>
                            <div className="mt-5 byline ink-link inline-block">
                                Bölüme Geç →
                            </div>
                        </Link>
                    ))}
                </div>
            </section>

            {/* ── Tarihte Bugün + Op-Ed ── */}
            <section className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-8">
                {/* On This Day */}
                <div className="lg:col-span-4">
                    <div
                        className="kicker-ink pb-2 mb-4"
                        style={{ borderBottom: '3px double var(--ink)' }}
                    >
                        Tarihte Bugün
                    </div>
                    <div style={{ border: '1px solid var(--ink)', padding: 18, background: 'var(--paper)' }}>
                        {onThisDay.map((t) => (
                            <div className="timeline-row" key={t.year}>
                                <div className="timeline-year">{t.year}</div>
                                <div className="timeline-event">{t.event}</div>
                            </div>
                        ))}
                        <div className="mt-4 byline" style={{ color: 'var(--ink-muted)' }}>
                            Hazırlayan: Tarih Masası
                        </div>
                    </div>
                </div>

                {/* Op-Ed */}
                <div className="lg:col-span-8">
                    {analyses.length > 0 && (
                        <>
                            <div
                                className="kicker-ink pb-2 mb-6"
                                style={{ borderBottom: '3px double var(--ink)' }}
                            >
                                Yorum · Op-Ed
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {analyses.slice(0, 4).map(a => (
                                    <article key={a.id} style={{ borderTop: '1px solid var(--rule-soft)', paddingTop: 12 }}>
                                        <div className="flex items-center justify-between mb-2">
                                            <span className="kicker">{a.category}</span>
                                            <span className="dateline" style={{ color: 'var(--ink-faint)' }}>
                                                {a.readTime} okuma
                                            </span>
                                        </div>
                                        <Link to={`/analysis/${a.id}`} style={{ color: 'inherit' }}>
                                            <h4 className="headline mb-2" style={{ fontSize: 20 }}>
                                                <span className="hover:underline decoration-1 underline-offset-4">{a.title}</span>
                                            </h4>
                                        </Link>
                                        <p className="body-copy line-clamp-3" style={{ fontSize: 14, color: 'var(--ink-muted)' }}>
                                            {a.summary}
                                        </p>
                                        <div className="mt-3 byline" style={{ color: 'var(--ink-muted)' }}>
                                            — {a.author}
                                        </div>
                                    </article>
                                ))}
                            </div>
                        </>
                    )}
                </div>
            </section>

            {/* ── Editöre Mektup ── */}
            <section className="mt-16">
                <div
                    className="flex items-center justify-between pb-2 mb-6"
                    style={{ borderBottom: '3px double var(--ink)' }}
                >
                    <span className="kicker-ink">Editöre Mektup · Okur Tribünü</span>
                    <span className="dateline" style={{ color: 'var(--ink-faint)' }}>Sayfa 8</span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {lettersToEditor.map((l, i) => (
                        <div key={i} className="letter-card">
                            <div className="lt-salutation">{l.salutation}</div>
                            <p className="body-copy" style={{ fontSize: 14, color: 'var(--ink-soft)' }}>
                                {l.body}
                            </p>
                            <div className="mt-3 byline" style={{ color: 'var(--ink-muted)' }}>
                                — {l.author}
                            </div>
                        </div>
                    ))}
                </div>
                <div className="mt-6 text-center">
                    <span className="dateline" style={{ color: 'var(--ink-faint)' }}>
                        Mektubunuzu yayın@agora360 adresine 280 kelimeyi geçmeyecek şekilde gönderebilirsiniz.
                    </span>
                </div>
            </section>

            {/* ── Footer banner ── */}
            <section className="mt-16 text-center" style={{ borderTop: '3px double var(--ink)', borderBottom: '3px double var(--ink)', padding: '32px 16px' }}>
                <div className="kicker mb-2">Yayın Politikası</div>
                <h3 className="headline mb-3" style={{ fontSize: 'clamp(28px, 3vw, 40px)' }}>
                    Bağımsız, akademik, çok sesli.
                </h3>
                <p className="lede italic mx-auto" style={{ maxWidth: 720, color: 'var(--ink-muted)' }}>
                    Agora360, kâr amacı gütmeyen bir öğrenci yayınıdır. Tüm metinler bağımsız hakemler tarafından okunur; ticari sponsorluk kabul edilmez.
                </p>
                <div className="mt-5 flex items-center justify-center gap-4">
                    <Link to="/about" className="btn btn-outline">Hakkımızda</Link>
                    <Link to="/ui/learning" className="btn btn-primary">Eğitim Modülleri</Link>
                </div>
                <div className="mt-6 dateline" style={{ color: 'var(--ink-faint)' }}>
                    © Agora360 · MMXXVI · Tüm hakları saklıdır · Basıldığı Yer: Dijital Atölye
                </div>
            </section>
        </div>
    );
}
