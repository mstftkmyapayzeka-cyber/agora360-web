import { useState, useMemo } from 'react';
import { SectionHeader } from '../components/common/SectionHeader';
import { NewsItem } from '../components/features/NewsItem';
import { useData } from '../context/DataContext';
import { useSection } from '../context/SectionContext';

export function NewsPage() {
    const { news: allNews } = useData();
    const { activeSection } = useSection();
    const news = useMemo(
        () => allNews.filter(x => !activeSection || x.section === activeSection.id || x.section === 'portal'),
        [allNews, activeSection]
    );
    const [selectedRegion, setSelectedRegion] = useState<string>('Tümü');
    const [selectedCategory, setSelectedCategory] = useState<string>('Tümü');

    const regions = ['Tümü', ...Array.from(new Set(news.map(item => item.region)))];
    const categories = ['Tümü', ...Array.from(new Set(news.map(item => item.category)))];

    const filteredNews = useMemo(() => {
        return news.filter(item => {
            const matchRegion = selectedRegion === 'Tümü' || item.region === selectedRegion;
            const matchCategory = selectedCategory === 'Tümü' || item.category === selectedCategory;
            return matchRegion && matchCategory;
        });
    }, [news, selectedRegion, selectedCategory]);

    return (
        <div className="container-custom py-12">
            <SectionHeader
                title="Gelişmeler · Bülten"
                description="Dünyadan ve Türkiye'den önemli haberler — kronolojik bülten formatında."
            />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
                {/* Filters */}
                <aside className="lg:col-span-3">
                    <div style={{ borderTop: '3px solid var(--ink)', paddingTop: 14 }}>
                        <div className="kicker mb-3">Filtre</div>

                        <div className="mb-5">
                            <label className="byline mb-1 block" style={{ color: 'var(--ink-muted)' }}>Bölge</label>
                            <select
                                className="np-input w-full"
                                value={selectedRegion}
                                onChange={(e) => setSelectedRegion(e.target.value)}
                            >
                                {regions.map(r => <option key={r}>{r}</option>)}
                            </select>
                        </div>

                        <div>
                            <label className="byline mb-1 block" style={{ color: 'var(--ink-muted)' }}>Kategori</label>
                            <select
                                className="np-input w-full"
                                value={selectedCategory}
                                onChange={(e) => setSelectedCategory(e.target.value)}
                            >
                                {categories.map(c => <option key={c}>{c}</option>)}
                            </select>
                        </div>

                        <div className="mt-6 dateline" style={{ color: 'var(--ink-muted)' }}>
                            {filteredNews.length} bülten gösteriliyor
                        </div>
                    </div>
                </aside>

                {/* Feed */}
                <div className="lg:col-span-9">
                    <div style={{ borderTop: '3px solid var(--ink)' }}>
                        {filteredNews.length > 0 ? (
                            filteredNews.map(item => <NewsItem key={item.id} item={item} />)
                        ) : (
                            <p className="lede italic text-center py-16" style={{ color: 'var(--ink-muted)' }}>
                                Kriterlere uygun haber bulunamadı.
                            </p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
