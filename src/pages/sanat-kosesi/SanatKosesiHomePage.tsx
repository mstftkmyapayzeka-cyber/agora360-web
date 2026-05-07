import { Link } from 'react-router-dom';
import { useData } from '../../context/DataContext';
import { PodcastCard } from '../../components/features/PodcastCard';

export function SanatKosesiHomePage() {
    const { podcasts, articles, analyses, sidebarStories } = useData();
    
    const sectionArticles = articles.filter(a => a.section === 'sanat_kosesi');
    const lead = sectionArticles[0];
    const sectionAnalyses = analyses.filter(a => a.section === 'sanat_kosesi');
    const latestPodcasts = podcasts.filter(p => p.section === 'sanat_kosesi').slice(0, 3);
    const filteredSidebarStories = sidebarStories.filter(s => s.section === 'sanat_kosesi').sort((a, b) => a.order - b.order);
    
    const filmsThisWeek = sidebarStories.filter(s => s.section === 'sanat_kosesi' && s.category === 'Film').slice(0, 5);

    return (
        <div className="container-custom pb-20">
            {/* Section banner */}
            <div
                className="text-center mt-8 mb-2 pt-5 pb-3"
                style={{ borderTop: '3px double var(--ink)', borderBottom: '3px double var(--ink)' }}
            >
                <div className="kicker mb-1">Bölüm III</div>
                <h1 className="masthead-title" style={{ fontSize: 'clamp(40px, 6vw, 84px)', fontStyle: 'italic' }}>
                    Sanat Köşesi
                </h1>
                <p className="deck italic mt-2" style={{ fontSize: 17, color: 'var(--ink-muted)' }}>
                    Sinema, edebiyat, görsel sanat — yaratıcı ifadenin tarafsız günlüğü.
                </p>
                  {/* Lead grid */}
            <section className="grid grid-cols-1 gap-10 mt-10">
                <div className="w-full">
                    {lead ? (
                        <article style={{ borderTop: '3px double var(--ink)', paddingTop: 16 }}>
                            <div className="flex items-center gap-3 mb-3">
                                <span className="kicker">Hafta’nın Köşe Yazısı</span>
                                <span style={{ borderLeft: '1px solid var(--rule-soft)', height: 12 }} />
                                <span className="dateline" style={{ color: 'var(--ink-faint)' }}>Kültür & Sanat</span>
                            </div>
                            <Link to={`/articles/${lead.id}`} style={{ color: 'inherit' }}>
                                <h2 className="headline mb-4" style={{ fontSize: 'clamp(34px, 4.4vw, 54px)', lineHeight: 1.04, fontStyle: 'italic' }}>
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
                                <span className="dateline" style={{ color: 'var(--ink-faint)' }}>Köşe Yazısı</span>
                            </div>
                            <div className="news-columns drop-cap body-copy" style={{ color: 'var(--ink-soft)' }}>
                                <p className="mb-4">{lead.summary}</p>
                                <p>
                                    <Link to={`/articles/${lead.id}`} className="ink-link byline">
                                        Devamını Oku →
                                    </Link>
                                </p>
                            </div>
                        </article>
                    ) : (
                        <div className="dateline">İçerik yükleniyor...</div>
                    )}
                </div>
            </section>

            {filmsThisWeek.length > 0 && (
                <div className="mt-14 max-w-xl mx-auto" style={{ border: '1px solid var(--ink)', padding: 18, background: 'var(--paper-deep)' }}>
                    <div className="kicker mb-3">Bu Hafta Vizyonda</div>
                    <ul className="space-y-2">
                        {filmsThisWeek.map((f) => (
                            <li key={f.id} className="flex justify-between gap-3 py-1" style={{ borderBottom: '1px dotted var(--rule-soft)' }}>
                                <span className="body-copy" style={{ fontSize: 14, fontWeight: 600 }}>{f.title}</span>
                                <span className="dateline" style={{ color: 'var(--ink-muted)' }}>Sinema</span>
                            </li>
                        ))}
                    </ul>
                </div>
            )}

            {/* Critic essays */}
            <section className="mt-14">
                <div className="kicker-ink pb-2 mb-6" style={{ borderBottom: '3px solid var(--ink)' }}>
                    Köşe Yazıları
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {sectionAnalyses.map(a => (
                        <article key={a.id} style={{ borderTop: '3px solid var(--ink)', paddingTop: 16 }}>
                            <div className="kicker mb-2">{a.category}</div>
                            <h3 className="headline mb-2" style={{ fontSize: 24 }}>{a.title}</h3>
                            <p className="body-copy mb-3" style={{ fontSize: 15, color: 'var(--ink-muted)' }}>{a.summary}</p>
                            <div className="flex items-center justify-between byline" style={{ color: 'var(--ink-muted)' }}>
                                <span>— {a.author}</span>
                                <span className="dateline" style={{ color: 'var(--ink-faint)' }}>Eleştiri</span>
                            </div>
                        </article>
                    ))}
                </div>
            </section>

            {/* Podcasts */}
            {latestPodcasts.length > 0 && (
                <section className="mt-14">
                    <div className="kicker-ink pb-2 mb-6" style={{ borderBottom: '3px solid var(--ink)' }}>
                        Kültür Podcastleri
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
                <div className="kicker mb-2">Yaratıcı Yazı</div>
                <h3 className="headline mb-3" style={{ fontSize: 'clamp(28px, 3vw, 40px)' }}>
                    Sanatın Her Boyutunu Birlikte Keşfedelim
                </h3>
                <p className="lede italic mx-auto" style={{ maxWidth: 720, color: 'var(--ink-muted)' }}>
                    Sinema, müzik, edebiyat ve görsel sanatlar üzerine derin analizler ve güncel yorumlar.
                </p>
                <div className="mt-5">
                    <Link to="/sanat-kosesi/articles" className="btn btn-primary">Tüm İçerikler</Link>
                </div>
            </section>
        </div>
    );
}
