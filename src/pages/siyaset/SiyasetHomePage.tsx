import { Link } from 'react-router-dom';
import { useData } from '../../context/DataContext';
import { PodcastCard } from '../../components/features/PodcastCard';

export function SiyasetHomePage() {
    const { podcasts, articles, analyses, tickerItems, sidebarStories } = useData();
    
    const latestPodcasts = podcasts.filter(p => p.section === 'siyaset').slice(0, 3);
    const sectionArticles = articles.filter(a => a.section === 'siyaset');
    const lead = sectionArticles[0];
    const polCards = sectionArticles.slice(1, 7);
    const siyasetAnalyses = analyses.filter(a => a.section === 'siyaset').slice(0, 2);
    const filteredSidebarStories = sidebarStories.filter(s => s.section === 'siyaset').sort((a, b) => a.order - b.order);
    const filteredTickerItems = tickerItems.filter(t => t.content.toLowerCase().includes('siyaset') || t.content.length > 0).slice(0, 10);

    return (
        <div className="container-custom pb-20">
            {/* Section banner */}
            <div
                className="text-center mt-8 mb-2 pt-5 pb-3"
                style={{ borderTop: '3px double var(--ink)', borderBottom: '3px double var(--ink)' }}
            >
                <div className="kicker mb-1">Bölüm I</div>
                <h1 className="masthead-title" style={{ fontSize: 'clamp(40px, 6vw, 84px)' }}>
                    Siyaset
                </h1>
                <p className="deck italic mt-2" style={{ fontSize: 17, color: 'var(--ink-muted)' }}>
                    Güç, demokrasi ve kamuoyu — bağımsız analiz ve yorum.
                </p>
            </div>

            {/* Ticker */}
            <div
                className="overflow-hidden flex items-stretch mb-10"
                style={{ borderBottom: '1px solid var(--ink)' }}
            >
                <div className="byline px-3 py-2" style={{ background: 'var(--ink)', color: 'var(--paper)' }}>
                    Bugünkü Gündem
                </div>
                <div className="flex-1 overflow-hidden flex items-center">
                    <div className="animate-ticker whitespace-nowrap dateline" style={{ color: 'var(--ink)' }}>
                        {(filteredTickerItems.length > 0 ? filteredTickerItems.map(i => i.content) : ['Gündem Takip Ediliyor...']).map((t, i) => (
                            <span key={i} className="mx-6">◆ {t}</span>
                        ))}
                    </div>
                </div>
                 {/* Lead + sidebar */}
            <section className="grid grid-cols-1 gap-10">
                <div className="w-full">
                    {lead ? (
                        <article style={{ borderTop: '3px double var(--ink)', paddingTop: 16 }}>
                            <div className="flex items-center gap-3 mb-3">
                                <span className="kicker">Manşet Yorum</span>
                                <span style={{ borderLeft: '1px solid var(--rule-soft)', height: 12 }} />
                                <span className="dateline" style={{ color: 'var(--ink-faint)' }}>2026</span>
                            </div>
                            <Link to={`/articles/${lead.id}`} style={{ color: 'inherit' }}>
                                <h2 className="headline mb-4" style={{ fontSize: 'clamp(34px, 4.6vw, 60px)', lineHeight: 1.04 }}>
                                    {lead.title}
                                </h2>
                            </Link>
                            <p className="deck mb-5" style={{ fontSize: 19 }}>
                                {lead.summary}
                            </p>
                            <div
                                className="flex items-center justify-between py-3 mb-6"
                                style={{ borderTop: '1px solid var(--rule-soft)', borderBottom: '1px solid var(--rule-soft)' }}
                            >
                                <span className="byline">— {lead.author}</span>
                                <span className="dateline" style={{ color: 'var(--ink-faint)' }}>Analiz</span>
                            </div>
                            <div className="news-columns drop-cap body-copy" style={{ color: 'var(--ink-soft)' }}>
                                <p className="mb-4">{lead.summary}</p>
                                <p>
                                    <Link to={`/articles/${lead.id}`} className="ink-link byline">Devamı için Tıklayın →</Link>
                                </p>
                            </div>
                        </article>
                    ) : (
                        <div className="dateline">İçerik yükleniyor...</div>
                    )}
                </div>
            </section>

            {/* Article grid 3-up */}
            <section className="mt-14">
                <div className="kicker-ink pb-2 mb-6" style={{ borderBottom: '3px solid var(--ink)' }}>
                    Son Köşe Yazıları
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8" style={{ borderTop: '1px solid var(--ink)' }}>
                    {polCards.map((card, i) => (
                        <article
                            key={card.id}
                            className="py-6 px-2"
                            style={{
                                borderBottom: '1px solid var(--rule-soft)',
                                borderRight: (i % 3 !== 2) ? '1px solid var(--rule-soft)' : 'none',
                            }}
                        >
                            <div className="kicker mb-2">{card.author}</div>
                            <Link to={`/articles/${card.id}`} style={{ color: 'inherit' }}>
                                <h3 className="headline mb-2" style={{ fontSize: 20 }}>{card.title}</h3>
                            </Link>
                            <p className="body-copy line-clamp-3 mb-3" style={{ fontSize: 14, color: 'var(--ink-muted)' }}>{card.summary}</p>
                            <div className="flex items-center justify-between">
                                <span className="dateline" style={{ color: 'var(--ink-faint)' }}>{card.year || '2026'}</span>
                                <span className="tag-chip">Köşe Yazısı</span>
                            </div>
                        </article>
                    ))}
                </div>
            </section>

            {/* Analyses */}
            <section className="mt-14">
                <div className="kicker-ink pb-2 mb-6" style={{ borderBottom: '3px solid var(--ink)' }}>
                    Yorum
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {siyasetAnalyses.map(a => (
                        <article key={a.id} style={{ borderTop: '3px solid var(--ink)', paddingTop: 16 }}>
                            <div className="kicker mb-2">{a.category}</div>
                            <h3 className="headline mb-2" style={{ fontSize: 24 }}>{a.title}</h3>
                            <p className="body-copy mb-3" style={{ fontSize: 15, color: 'var(--ink-muted)' }}>{a.summary}</p>
                            <div className="flex items-center justify-between byline" style={{ color: 'var(--ink-muted)' }}>
                                <span>— {a.author}</span>
                                <span className="dateline" style={{ color: 'var(--ink-faint)' }}>Analiz</span>
                            </div>
                        </article>
                    ))}
                </div>
            </section>

            {/* Podcasts */}
            {latestPodcasts.length > 0 && (
                <section className="mt-14">
                    <div className="kicker-ink pb-2 mb-6" style={{ borderBottom: '3px solid var(--ink)' }}>
                        Siyaset Podcastleri
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {latestPodcasts.map(p => <PodcastCard key={p.id} podcast={p} />)}
                    </div>
                </section>
            )}

            {/* CTA */}
            <section
                className="mt-16 text-center py-10"
                style={{ borderTop: '3px double var(--ink)', borderBottom: '3px double var(--ink)' }}
            >
                <div className="kicker mb-2">Bağımsız Yorum</div>
                <h3 className="headline mb-3" style={{ fontSize: 'clamp(28px, 3vw, 40px)' }}>
                    Siyasi Zekânızı Geliştirin
                </h3>
                <p className="lede italic mx-auto" style={{ maxWidth: 720, color: 'var(--ink-muted)' }}>
                    Bağımsız analizler, uzman yorumlar ve kapsamlı siyasi içerikler ile dünyanın nabzını tutun.
                </p>
                <div className="mt-5">
                    <Link to="/siyaset/analysis" className="btn btn-primary">Analizlere Git</Link>
                </div>
            </section>
        </div>
    );
}
