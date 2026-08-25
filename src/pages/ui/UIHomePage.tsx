import { Link } from 'react-router-dom';
import { ArticleCard } from '../../components/features/ArticleCard';
import { PodcastCard } from '../../components/features/PodcastCard';
import { DailyConcept } from '../../components/features/DailyConcept';
import { useData } from '../../context/DataContext';

export function UIHomePage() {
    const { articles, podcasts } = useData();

    const sectionArticles = articles.filter(a => a.section === 'ui');
    const lead = sectionArticles[0];
    const latestArticles = sectionArticles.slice(1, 5);
    const latestPodcasts = podcasts.filter(p => p.section === 'ui').slice(0, 3);

    return (
        <div className="container-custom pb-20">
            {/* Section banner */}
            <div
                className="text-center mt-8 mb-2 pt-5 pb-3"
                style={{ borderTop: '3px double var(--ink)', borderBottom: '3px double var(--ink)' }}
            >
                <div className="kicker mb-1">Bölüm II</div>
                <h1 className="masthead-title" style={{ fontSize: 'clamp(40px, 6vw, 84px)' }}>
                    Uluslararası İlişkiler
                </h1>
                <p className="deck italic mt-2" style={{ fontSize: 17, color: 'var(--ink-muted)' }}>
                    Küresel sahne, yerel perspektif — diplomasinin günlük muhasebesi.
                </p>
            </div>

            {/* Lead grid */}
            <section className="grid grid-cols-1 gap-8">
                <div className="w-full">
                    {lead ? (
                        <article style={{ borderTop: '3px double var(--ink)', paddingTop: 16 }}>
                            <div className="flex items-center justify-between mb-3">
                                <span className="kicker">Köşe Yazısı</span>
                                <span className="dateline" style={{ color: 'var(--ink-faint)' }}>2026</span>
                            </div>
                            <Link to={`/articles/${lead.id}`} style={{ color: 'inherit' }}>
                                <h2 className="headline mb-4" style={{ fontSize: 'clamp(32px, 4.4vw, 56px)', lineHeight: 1.04 }}>
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
                                    <Link to={`/articles/${lead.id}`} className="ink-link byline">
                                        Yazının Devamı →
                                    </Link>
                                </p>
                            </div>
                        </article>
                    ) : (
                        <div className="dateline">İçerik yükleniyor...</div>
                    )}
                </div>
            </section>

            <div className="mt-14 max-w-xl mx-auto">
                <DailyConcept />
            </div>

            {/* Articles */}
            <section className="mt-14">
                <div className="kicker-ink pb-2 mb-6" style={{ borderBottom: '3px solid var(--ink)' }}>
                    Son Köşe Yazıları
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {latestArticles.map(article => (
                        <ArticleCard key={article.id} article={article} />
                    ))}
                </div>
            </section>

            {/* Podcasts */}
            {latestPodcasts.length > 0 && (
                <section className="mt-14">
                    <div className="kicker-ink pb-2 mb-6" style={{ borderBottom: '3px solid var(--ink)' }}>
                        Multimedya
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
                <div className="kicker mb-2">Tüm İçerikler</div>
                <h3 className="headline mb-3" style={{ fontSize: 'clamp(28px, 3vw, 40px)' }}>
                    Tüm Köşe Yazılarını Keşfedin
                </h3>
                <p className="lede italic mx-auto" style={{ maxWidth: 720, color: 'var(--ink-muted)' }}>
                    Uluslararası ilişkiler, diplomasi ve küresel siyasete dair bağımsız analizler.
                </p>
                <div className="mt-5">
                    <Link to="/ui/articles" className="btn btn-primary">Tüm Yazılara Git</Link>
                </div>
            </section>
        </div>
    );
}
