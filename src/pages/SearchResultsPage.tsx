import { useSearchParams } from 'react-router-dom';
import { SectionHeader } from '../components/common/SectionHeader';
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

        const lowerQuery = query.toLowerCase();

        return {
            articles: articles.filter(item =>
                item.title.toLowerCase().includes(lowerQuery) ||
                item.summary.toLowerCase().includes(lowerQuery) ||
                item.tags.some(tag => tag.toLowerCase().includes(lowerQuery))
            ),
            news: news.filter(item =>
                item.title.toLowerCase().includes(lowerQuery) ||
                item.description.toLowerCase().includes(lowerQuery)
            ),
            analyses: analyses.filter(item =>
                item.title.toLowerCase().includes(lowerQuery) ||
                item.summary.toLowerCase().includes(lowerQuery)
            ),
            podcasts: podcasts.filter(item =>
                item.title.toLowerCase().includes(lowerQuery) ||
                item.description.toLowerCase().includes(lowerQuery)
            )
        };
    }, [query]);

    const totalResults =
        results.articles.length +
        results.news.length +
        results.analyses.length +
        results.podcasts.length;

    return (
        <div className="container-custom py-12">
            <SectionHeader
                title={`Arama Sonuçları: "${query}"`}
                description={`${totalResults} sonuç bulundu.`}
            />

            {totalResults === 0 && (
                <div className="text-center py-20 bg-slate-50 dark:bg-slate-900 rounded-xl border border-dashed border-slate-300 dark:border-slate-700">
                    <p className="text-slate-500 text-lg">Aradığınız kriterlere uygun içerik bulunamadı.</p>
                </div>
            )}

            <div className="space-y-12">
                {results.articles.length > 0 && (
                    <section>
                        <h3 className="text-xl font-bold mb-4 border-b border-slate-200 dark:border-slate-800 pb-2">Makaleler ({results.articles.length})</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {results.articles.map(item => <ArticleCard key={item.id} article={item} />)}
                        </div>
                    </section>
                )}

                {results.analyses.length > 0 && (
                    <section>
                        <h3 className="text-xl font-bold mb-4 border-b border-slate-200 dark:border-slate-800 pb-2">Analizler ({results.analyses.length})</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {results.analyses.map(item => <AnalysisCard key={item.id} analysis={item} />)}
                        </div>
                    </section>
                )}

                {results.news.length > 0 && (
                    <section>
                        <h3 className="text-xl font-bold mb-4 border-b border-slate-200 dark:border-slate-800 pb-2">Haberler ({results.news.length})</h3>
                        <div className="space-y-4">
                            {results.news.map(item => <NewsItem key={item.id} item={item} />)}
                        </div>
                    </section>
                )}

                {results.podcasts.length > 0 && (
                    <section>
                        <h3 className="text-xl font-bold mb-4 border-b border-slate-200 dark:border-slate-800 pb-2">Podcastler ({results.podcasts.length})</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {results.podcasts.map(item => <PodcastCard key={item.id} podcast={item} />)}
                        </div>
                    </section>
                )}
            </div>
        </div>
    );
}
