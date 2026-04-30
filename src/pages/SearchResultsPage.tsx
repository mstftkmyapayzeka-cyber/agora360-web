import { useSearchParams } from 'react-router-dom';
import { ArticleCard } from '../components/features/ArticleCard';
import { NewsItem } from '../components/features/NewsItem';
import { AnalysisCard } from '../components/features/AnalysisCard';
import { PodcastCard } from '../components/features/PodcastCard';
import { useData } from '../context/DataContext';
import { useMemo } from 'react';

export function SearchResultsPage() {
    const { articles, news, analyses, podcasts } = useData();
    const [searchParams] = useSearchParams();
    const query = searchParams.get('q') || '';

    const results = useMemo(() => {
        if (!query) return { articles: [], news: [], analyses: [], podcasts: [] };
        const q = query.toLowerCase();
        return {
            articles: articles.filter(item =>
                item.title.toLowerCase().includes(q) ||
                item.summary.toLowerCase().includes(q) ||
                item.tags.some(t => t.toLowerCase().includes(q))
            ),
            news: news.filter(item =>
                item.title.toLowerCase().includes(q) ||
                item.description.toLowerCase().includes(q)
            ),
            analyses: analyses.filter(item =>
                item.title.toLowerCase().includes(q) ||
                item.summary.toLowerCase().includes(q)
            ),
            podcasts: podcasts.filter(item =>
                item.title.toLowerCase().includes(q) ||
                item.description.toLowerCase().includes(q)
            ),
        };
    }, [query, articles, news, analyses, podcasts]);

    const total = results.articles.length + results.news.length + results.analyses.length + results.podcasts.length;

    return (
        <div className="container-custom py-12">
            <div
                className="text-center mb-10 pt-5 pb-3"
                style={{ borderTop: '3px double var(--ink)', borderBottom: '3px double var(--ink)' }}
            >
                <div className="kicker mb-1">Arşiv Araması</div>
                <h1 className="masthead-title" style={{ fontSize: 'clamp(32px, 5vw, 56px)' }}>
                    “{query}”
                </h1>
                <p className="dateline mt-2" style={{ color: 'var(--ink-muted)' }}>
                    {total} kayıt bulundu
                </p>
            </div>

            {total === 0 && (
                <div
                    className="text-center py-16"
                    style={{ border: '1px dashed var(--rule)', background: 'var(--paper-deep)' }}
                >
                    <p className="lede italic" style={{ color: 'var(--ink-muted)' }}>
                        Aradığınız kriterlere uygun içerik bulunamadı.
                    </p>
                </div>
            )}

            <div className="space-y-14">
                {results.articles.length > 0 && (
                    <section>
                        <div className="kicker-ink pb-2 mb-6" style={{ borderBottom: '3px solid var(--ink)' }}>
                            Makaleler ({results.articles.length})
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-8">
                            {results.articles.map(item => <ArticleCard key={item.id} article={item} />)}
                        </div>
                    </section>
                )}

                {results.analyses.length > 0 && (
                    <section>
                        <div className="kicker-ink pb-2 mb-6" style={{ borderBottom: '3px solid var(--ink)' }}>
                            Analizler ({results.analyses.length})
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-8">
                            {results.analyses.map(item => <AnalysisCard key={item.id} analysis={item} />)}
                        </div>
                    </section>
                )}

                {results.news.length > 0 && (
                    <section>
                        <div className="kicker-ink pb-2 mb-6" style={{ borderBottom: '3px solid var(--ink)' }}>
                            Haberler ({results.news.length})
                        </div>
                        <div style={{ borderTop: '3px solid var(--ink)' }}>
                            {results.news.map(item => <NewsItem key={item.id} item={item} />)}
                        </div>
                    </section>
                )}

                {results.podcasts.length > 0 && (
                    <section>
                        <div className="kicker-ink pb-2 mb-6" style={{ borderBottom: '3px solid var(--ink)' }}>
                            Podcastler ({results.podcasts.length})
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {results.podcasts.map(item => <PodcastCard key={item.id} podcast={item} />)}
                        </div>
                    </section>
                )}
            </div>
        </div>
    );
}
