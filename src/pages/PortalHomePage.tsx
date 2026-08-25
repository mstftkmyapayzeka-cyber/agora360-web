import { Link } from 'react-router-dom';
import { useData } from '../context/DataContext';
import { format } from 'date-fns';
import { tr } from 'date-fns/locale';
import { DailyConcept } from '../components/features/DailyConcept';
import { FleuronBar } from '../components/common/Ornaments';

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
    const { articles, onThisDay, settings } = useData();

    const lead = articles.find(a => a.section === 'portal') || articles[0];
    const subLead1 = articles.filter(a => a.section === 'portal')[1] || articles[1];
    const subLead2 = articles.filter(a => a.section === 'portal')[2] || articles[2];
    
    const quoteOfDay = settings.quoteOfDay || {
        text: 'Bağımsızlık, yalnızca bir cümlenin başında değil; bir gazetenin her satırında okunur.',
        attr: 'Agora360'
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

            </header>

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

                    <div className="qod-block">
                        <div className="qod-header">
                            <span className="qod-label">Günün Sözü</span>
                            <div className="qod-header-rule" />
                        </div>
                        <div className="qod-body">
                            <span className="qod-guillemet">❝</span>
                            <p className="qod-text">{quoteOfDay.text}</p>
                            <div className="qod-attr">— {quoteOfDay.attr}</div>
                        </div>
                    </div>

                    {/* Tarihte Bugün — sidebar */}
                    <div className="otd-sidebar-block">
                        <div className="otd-sidebar-header">
                            <span className="otd-sidebar-label">Tarihte Bugün</span>
                            <span className="otd-sidebar-date">{dateStr}</span>
                        </div>
                        <div className="otd-sidebar-list">
                            {onThisDay.slice(0, 4).map((item, idx, arr) => (
                                <div key={item.id} className="otd-sidebar-item" style={{ borderBottom: idx < arr.length - 1 ? '1px dotted rgba(244,239,228,0.15)' : 'none' }}>
                                    <div className="otd-sidebar-year">{item.year}</div>
                                    <p className="otd-sidebar-event">{item.event}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <DailyConcept />
                </aside>
            </section>

            <Flourish />

            <section className="pt-2 grid grid-cols-1 md:grid-cols-2 gap-8" style={{ borderTop: '3px double var(--ink)' }}>
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
