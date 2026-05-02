import { Link } from 'react-router-dom';
import { useData } from '../context/DataContext';
import { format } from 'date-fns';
import { tr } from 'date-fns/locale';
import { DailyConcept } from '../components/features/DailyConcept';

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
        <svg width="40" height="24" viewBox="0 0 40 24" aria-hidden="true">
            <path d="M2 12 C 10 2, 30 2, 38 12 C 30 22, 10 22, 2 12" fill="none" stroke="currentColor" strokeWidth="1" />
            <circle cx="20" cy="12" r="3" fill="currentColor" />
        </svg>
    );
}

function EditorialCartoon() {
    return (
        <svg viewBox="0 0 480 280" aria-hidden="true">
            <g fill="none" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'var(--ink)' }}>
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
                <g opacity="0.18">
                    {Array.from({ length: 10 }).map((_, i) => (
                        <line key={i} x1={20 + i * 8} y1="20" x2={120 + i * 8} y2="20" />
                    ))}
                    {Array.from({ length: 10 }).map((_, i) => (
                        <line key={i} x1={350 + i * 8} y1="20" x2={460 + i * 8} y2="20" />
                    ))}
                </g>
                <g>
                    <path d="M 110 130 L 240 96 L 370 130 Z" />
                    <line x1="100" y1="130" x2="380" y2="130" />
                    <line x1="100" y1="138" x2="380" y2="138" />
                </g>
                {[140, 240, 340].map((cx, idx) => (
                    <g key={idx}>
                        <rect x={cx - 18} y="138" width="36" height="6" />
                        <line x1={cx - 14} y1="146" x2={cx - 14} y2="232" />
                        <line x1={cx + 14} y1="146" x2={cx + 14} y2="232" />
                        {[-9, -4, 1, 6].map((ox, j) => (
                            <line key={j} x1={cx + ox} y1="148" x2={cx + ox} y2="230" opacity="0.55" />
                        ))}
                        <rect x={cx - 18} y="232" width="36" height="6" />
                    </g>
                ))}
                <line x1="80" y1="240" x2="400" y2="240" />
                <line x1="70" y1="248" x2="410" y2="248" />
                <line x1="60" y1="256" x2="420" y2="256" />
                <g opacity="0.35">
                    {Array.from({ length: 36 }).map((_, i) => (
                        <line key={i} x1={40 + i * 12} y1="262" x2={32 + i * 12} y2="270" />
                    ))}
                </g>
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

function Flourish() {
    return (
        <div className="flex items-center justify-center gap-10 my-16 opacity-40">
            <div className="h-px bg-current flex-1" />
            <FlourishMark />
            <div className="h-px bg-current flex-1" />
        </div>
    );
}

export function PortalHomePage() {
    const { 
        articles, onThisDay, tickerItems, 
        lettersToEditor, settings, marketSnapshot 
    } = useData();

    const lead = articles.find(a => a.section === 'portal') || articles[0];
    const subLead1 = articles.filter(a => a.section === 'portal')[1] || articles[1];
    const subLead2 = articles.filter(a => a.section === 'portal')[2] || articles[2];
    
    const quoteOfDay = settings.quoteOfDay || {
        text: 'Bağımsızlık, yalnızca bir cümlenin başında değil; bir gazetenin her satırında okunur.',
        attr: 'Yayın Kurulu'
    };

    const featuredColumnist = settings.featuredColumnist || {
        initials: 'AY',
        name: 'Ayşe Yılmaz',
        role: 'Siyaset Editörü',
        quote: 'Gençler, bu müzakerenin kıyısında değil; tam ortasındadır.',
        column: 'Pazar Notu'
    };

    const indexEntries = [
        { cat: 'Manşet',     title: lead?.title || 'Manşet', page: 1, slug: 'lead' },
        { cat: 'Siyaset',    title: 'Siyaset Gündemi',  page: 3, slug: '/siyaset' },
        { cat: 'Diplomasi',  title: 'Uluslararası İlişkiler', page: 4, slug: '/ui' },
        { cat: 'Sanat',      title: 'Sanat Köşesi', page: 6, slug: '/sanat-kosesi' },
        { cat: 'Tarih',      title: 'Tarihte Bugün',  page: 7, slug: 'history' },
        { cat: 'Mektuplar',  title: 'Editöre Mektup', page: 8, slug: 'letters' },
    ];

    const today = new Date();
    const dateStr = format(today, 'd MMMM yyyy', { locale: tr });
    const dayName = format(today, 'EEEE', { locale: tr });
    const issueNo = String(today.getDate()).padStart(3, '0');

    return (
        <div className="container-custom pb-20">
            <header className="pt-4 pb-4">
                <div className="edition-strip mb-6">
                    <span className="strip-cell">
                        <WeatherGlyph />
                        <span>{settings.weatherInfo || 'İSTANBUL · — · —'}</span>
                    </span>
                    <span className="strip-divider hidden md:inline-block" />
                    <span className="strip-cell hidden md:inline-flex">
                        <MarketGlyph />
                        {marketSnapshot.length > 0 ? marketSnapshot.map((m, i) => (
                            <span key={m.name} className="ml-2">
                                {m.name} <strong style={{ color: 'var(--ink)' }}>{m.val}</strong>
                                <span style={{ color: m.ch.startsWith('−') ? 'var(--accent-red)' : '#1f4a3f', marginLeft: 4 }}>{m.ch}</span>
                                {i < marketSnapshot.length - 1 && <span className="mx-1" style={{ color: 'var(--ink-faint)' }}>·</span>}
                            </span>
                        )) : <span className="dateline" style={{ color: 'var(--ink-muted)' }}>Piyasa verisi yükleniyor...</span>}
                    </span>
                    <span className="strip-divider hidden lg:inline-block" />
                    <span className="strip-cell">
                        <span>Erken Baskı · 06:00</span>
                    </span>
                </div>

                <div className="flex items-center justify-between mb-5 pb-2 byline"
                    style={{ borderBottom: '1px solid var(--ink)', color: 'var(--ink-muted)' }}>
                    <span>Cilt MMXXVI · No. {issueNo}</span>
                    <span className="hidden md:inline italic">"Akıl, hür düşüncenin ışığında parlar."</span>
                    <span>Fiyat: Bedava</span>
                </div>

                <div className="text-center relative py-8">
                    <div className="absolute left-0 top-1/2 -translate-y-1/2 hidden xl:block">
                        <LaurelLeft className="text-indigo-900/20" />
                    </div>
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 hidden xl:block">
                        <LaurelRight className="text-indigo-900/20" />
                    </div>
                    
                    <div className="kicker mb-3 tracking-[0.4em] uppercase" style={{ color: 'var(--ink-muted)' }}>
                        Bağımsız Gençlik Gazetesi
                    </div>
                    <h1 className="masthead-title select-none">
                        Agora360
                    </h1>
                    <div className="flex items-center justify-center gap-6 mt-4 dateline font-bold">
                        <span className="uppercase">{dayName}</span>
                        <span className="w-1.5 h-1.5 bg-accent-red rounded-full" />
                        <span className="uppercase">{dateStr}</span>
                    </div>
                </div>

                <div style={{ borderTop: '4px solid var(--ink)', borderBottom: '1px solid var(--ink)', marginTop: 24, padding: '6px 0' }}>
                    <div className="flex items-center justify-center gap-12 py-1 overflow-x-auto no-scrollbar">
                        {indexEntries.slice(0, 5).map(e => (
                            <Link key={e.slug} to={e.slug.startsWith('/') ? e.slug : '#'} className="nav-link-ink text-sm font-bold uppercase tracking-widest whitespace-nowrap">
                                {e.cat}
                            </Link>
                        ))}
                    </div>
                </div>
            </header>

            <div className="bg-indigo-600 text-white py-3 overflow-hidden border-y border-indigo-700">
                <div className="flex animate-ticker whitespace-nowrap uppercase tracking-widest text-xs font-bold">
                    {(tickerItems.length > 0 ? tickerItems.map(i => i.content) : ['Gündem Takip Ediliyor...']).map((text, idx) => (
                        <span key={idx} className="mx-8 flex items-center gap-2">
                            <span className="w-1.5 h-1.5 bg-white rounded-full" />
                            {text}
                        </span>
                    ))}
                </div>
            </div>

            <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-10">
                <div className="lg:col-span-8">
                    {lead ? (
                        <article style={{ borderTop: '3px double var(--ink)', paddingTop: 16 }}>
                            <div className="flex items-center justify-between mb-3">
                                <span className="kicker">Manşet</span>
                                <span className="dateline" style={{ color: 'var(--ink-faint)' }}>
                                    Sayfa I · Yeni Yayımlandı
                                </span>
                            </div>
                            <Link to={`/articles/${lead.id}`} style={{ color: 'inherit' }}>
                                <h2 className="headline mb-4" style={{ fontSize: 'clamp(36px, 5vw, 64px)', lineHeight: 1.02 }}>
                                    {lead.title}
                                </h2>
                            </Link>
                            <p className="deck mb-5" style={{ fontSize: 'clamp(17px, 1.6vw, 22px)' }}>
                                {lead.summary}
                            </p>
                            <div className="flex items-center justify-between mb-6 py-3"
                                style={{ borderTop: '1px solid var(--rule-soft)', borderBottom: '1px solid var(--rule-soft)' }}>
                                <span className="byline">— {lead.author}</span>
                                <span className="dateline" style={{ color: 'var(--ink-faint)' }}>
                                    {lead.publication ?? 'Agora360'} · {lead.year ?? today.getFullYear()}
                                </span>
                            </div>
                            <div className="news-columns drop-cap body-copy" style={{ color: 'var(--ink-soft)' }}>
                                <p className="mb-4">{lead.summary}</p>
                                <p>
                                    <Link to={`/articles/${lead.id}`} className="ink-link byline">Yazının Tamamı →</Link>
                                </p>
                            </div>
                        </article>
                    ) : (
                        <div className="dateline">İçerik yükleniyor...</div>
                    )}
                </div>

                <aside className="lg:col-span-4 space-y-8">
                    <div style={{ border: '1px solid var(--ink)', padding: 18, background: 'var(--paper)' }}>
                        <div className="flex items-center justify-between pb-2 mb-3" style={{ borderBottom: '3px double var(--ink)' }}>
                            <span className="kicker-ink">Bu Sayıda · Index</span>
                            <span className="dateline" style={{ color: 'var(--ink-faint)' }}>12 SAYFA</span>
                        </div>
                        <ul className="toc-list">
                            {indexEntries.map((e) => (
                                <li key={e.cat + e.page}>
                                    <Link to={e.slug.startsWith('/') ? e.slug : '#'} className="toc-entry" style={{ color: 'inherit' }}>
                                        <span className="toc-cat">{e.cat}</span>
                                        <span className="toc-title">{e.title}</span>
                                        <span className="toc-leader" />
                                        <span className="toc-page">{e.page.toString().padStart(2, '0')}</span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="quote-of-day" style={{ background: 'var(--paper-deep)' }}>
                        <span className="qd-mark">“</span>
                        <p className="qd-text">{quoteOfDay.text}</p>
                        <div className="qd-attr">— {quoteOfDay.attr}</div>
                    </div>

                    <DailyConcept />
                </aside>
            </section>

            <Flourish />

            <section className="pt-2 grid grid-cols-1 md:grid-cols-3 gap-8" style={{ borderTop: '3px double var(--ink)' }}>
                {[subLead1, subLead2].map((a, i) => a && (
                    <article key={a.id} style={{ borderTop: '1px solid var(--ink)', paddingTop: 12 }}>
                        <div className="kicker mb-2">{i === 0 ? 'İkinci Manşet' : 'Üçüncü Manşet'}</div>
                        <Link to={`/articles/${a.id}`} style={{ color: 'inherit' }}>
                            <h3 className="headline mb-3" style={{ fontSize: 24 }}>{a.title}</h3>
                        </Link>
                        <p className="body-copy line-clamp-4" style={{ fontSize: 15, color: 'var(--ink-muted)' }}>{a.summary}</p>
                        <div className="mt-3 flex items-center justify-between">
                            <span className="byline" style={{ color: 'var(--ink-muted)' }}>— {a.author}</span>
                            <span className="dateline" style={{ color: 'var(--ink-faint)' }}>S. {i + 4}</span>
                        </div>
                    </article>
                ))}
                
                <div className="bg-slate-50 dark:bg-slate-900/50 p-6 rounded border border-slate-200 dark:border-slate-800">
                    <div className="kicker mb-4" id="history">Tarihte Bugün</div>
                    <div className="space-y-4">
                        {onThisDay.slice(0, 3).map((item) => (
                            <div key={item.id} className="pb-3 border-b border-slate-200 dark:border-slate-800 last:border-0">
                                <div className="font-bold text-indigo-600 dark:text-indigo-400 mb-1">{item.year}</div>
                                <div className="text-sm body-copy leading-relaxed">{item.event}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="mt-20">
                <div className="flex items-center gap-6 mb-10">
                    <div className="h-px bg-current flex-1 opacity-20" />
                    <h2 className="masthead-title" style={{ fontSize: 42 }}>Kamus</h2>
                    <div className="h-px bg-current flex-1 opacity-20" />
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
                    <div className="lg:col-span-4 bg-paper p-8 border border-ink relative overflow-hidden">
                        <div className="relative z-10">
                            <div className="kicker mb-6">{featuredColumnist.column}</div>
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-16 h-16 rounded-full bg-indigo-600 flex items-center justify-center text-white font-bold text-2xl">
                                    {featuredColumnist.initials}
                                </div>
                                <div>
                                    <div className="headline" style={{ fontSize: 20 }}>{featuredColumnist.name}</div>
                                    <div className="byline" style={{ color: 'var(--ink-muted)' }}>{featuredColumnist.role}</div>
                                </div>
                            </div>
                            <p className="body-copy italic leading-relaxed mb-6" style={{ fontSize: 18 }}>
                                “{featuredColumnist.quote}”
                            </p>
                        </div>
                    </div>

                    <div className="lg:col-span-8 space-y-10">
                        <div className="kicker-ink pb-2 mb-6" style={{ borderBottom: '3px solid var(--ink)' }} id="letters">
                            Editöre Mektuplar
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {lettersToEditor.map((letter) => (
                                <div key={letter.id} className="body-copy">
                                    <div className="font-bold mb-2">{letter.salutation}</div>
                                    <p className="mb-3 text-slate-600 dark:text-slate-400 leading-relaxed italic">
                                        {letter.body}
                                    </p>
                                    <div className="byline text-right">— {letter.author}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
