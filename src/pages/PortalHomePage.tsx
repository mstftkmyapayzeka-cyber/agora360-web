import { Link } from 'react-router-dom';
import { useData } from '../context/DataContext';
import { format } from 'date-fns';
import { tr } from 'date-fns/locale';
import { DailyConcept } from '../components/features/DailyConcept';
import {
    FleuronBar, Quill,
    HeadlineBracket, TelegraphSpark,
} from '../components/common/Ornaments';

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
        settings
    } = useData();

    const lead = articles.find(a => a.section === 'portal') || articles[0];
    const subLead1 = articles.filter(a => a.section === 'portal')[1] || articles[1];
    const subLead2 = articles.filter(a => a.section === 'portal')[2] || articles[2];
    
    const quoteOfDay = settings.quoteOfDay || {
        text: 'Bağımsızlık, yalnızca bir cümlenin başında değil; bir gazetenin her satırında okunur.',
        attr: 'Yayın Kurulu'
    };

    const indexEntries = [
        { cat: 'Manşet',     title: lead?.title || 'Manşet', page: 1, slug: 'lead' },
        { cat: 'Siyaset',    title: 'Siyaset Gündemi',  page: 3, slug: '/siyaset' },
        { cat: 'Diplomasi',  title: 'Uluslararası İlişkiler', page: 4, slug: '/ui' },
        { cat: 'Sanat',      title: 'Sanat Köşesi', page: 6, slug: '/sanat-kosesi' },
        { cat: 'Tarih',      title: 'Tarihte Bugün',  page: 7, slug: 'history' },
    ];

    const today = new Date();
    const dateStr = format(today, 'd MMMM yyyy', { locale: tr });
    const dayName = format(today, 'EEEE', { locale: tr });
    const issueNo = String(today.getDate()).padStart(3, '0');

    return (
        <div className="container-custom pb-20">
            <header className="pt-4 pb-4">
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
                    
                    <div className="kicker mb-3 tracking-[0.4em] uppercase flex items-center justify-center gap-3" style={{ color: 'var(--ink-muted)' }}>
                        <Quill size={14} color="var(--accent-red)" />
                        <span>Bağımsız Gençlik Gazetesi</span>
                        <Quill size={14} color="var(--accent-red)" />
                    </div>
                    <div className="flex items-center justify-center gap-3">
                        <HeadlineBracket side="left" color="var(--accent-red)" />
                        <h1 className="masthead-title select-none" style={{ position: 'relative' }}>
                            Agora360
                        </h1>
                        <HeadlineBracket side="right" color="var(--accent-red)" />
                    </div>
                    <div className="mt-3 flex justify-center">
                        <FleuronBar color="var(--ink)" className="opacity-60" />
                    </div>
                    <div className="flex items-center justify-center gap-6 mt-3 dateline font-bold">
                        <span className="uppercase">{dayName}</span>
                        <span className="w-1.5 h-1.5 bg-accent-red rounded-full" />
                        <span className="uppercase">{dateStr}</span>
                    </div>
                </div>
            </header>

            <div
                className="py-3 overflow-hidden flex items-center gap-4"
                style={{
                    background: 'var(--ink)',
                    color: 'var(--paper)',
                    borderTop: '1px solid var(--ink)',
                    borderBottom: '1px solid var(--ink)',
                }}
            >
                <div
                    className="hidden md:flex items-center gap-2 pl-5 pr-4 dateline flex-shrink-0"
                    style={{ color: 'var(--paper)', borderRight: '1px solid rgba(244,239,228,0.25)' }}
                >
                    <TelegraphSpark size={14} color="var(--accent-red)" />
                    <span style={{ fontSize: 10 }}>TELGRAF</span>
                </div>
                <div className="flex animate-ticker whitespace-nowrap uppercase tracking-widest text-xs font-bold">
                    {(tickerItems.length > 0 ? tickerItems.map(i => i.content) : ['Gündem Takip Ediliyor...']).map((text, idx) => (
                        <span key={idx} className="mx-8 flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full" style={{ background: 'var(--accent-red)' }} />
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
                        <span className="qd-mark">"</span>
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

            {/* ─── Künye / Colophon flourish at very bottom ─── */}
            <div className="mt-16 mb-4 text-center">
                <div className="flex items-center justify-center mb-3">
                    <FleuronBar color="var(--ink)" />
                </div>
                <div className="dateline" style={{ color: 'var(--ink-faint)' }}>
                    "Mürekkep ucuzdur, fikir paha biçilemez."
                </div>
            </div>
        </div>
    );
}
