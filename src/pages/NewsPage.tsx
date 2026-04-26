import { useState, useMemo } from 'react';
import { SectionHeader } from '../components/common/SectionHeader';
import { NewsItem } from '../components/features/NewsItem';
import { useData } from '../context/DataContext';
import { Filter } from 'lucide-react';

export function NewsPage() {
    const { news } = useData();
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
    }, [selectedRegion, selectedCategory]);

    return (
        <div className="container-custom py-12">
            <SectionHeader
                title="Güncel Gelişmeler"
                description="Dünyadan ve Türkiye'den önemli uluslararası ilişkiler haberleri."
            />

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                {/* Filters */}
                <div className="lg:col-span-1 space-y-6">
                    <div className="bg-white dark:bg-slate-900 p-5 rounded-xl border border-slate-200 dark:border-slate-800 sticky top-24">
                        <h3 className="font-semibold mb-4 flex items-center gap-2">
                            <Filter className="h-4 w-4" /> Filtrele
                        </h3>

                        <div className="space-y-4">
                            <div>
                                <label className="text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5 block">
                                    Bölge
                                </label>
                                <select
                                    className="w-full rounded-md border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 px-3 py-2 text-sm focus:ring-2 focus:ring-primary-500"
                                    value={selectedRegion}
                                    onChange={(e) => setSelectedRegion(e.target.value)}
                                >
                                    {regions.map(region => (
                                        <option key={region} value={region}>{region}</option>
                                    ))}
                                </select>
                            </div>

                            <div>
                                <label className="text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5 block">
                                    Kategori
                                </label>
                                <select
                                    className="w-full rounded-md border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 px-3 py-2 text-sm focus:ring-2 focus:ring-primary-500"
                                    value={selectedCategory}
                                    onChange={(e) => setSelectedCategory(e.target.value)}
                                >
                                    {categories.map(category => (
                                        <option key={category} value={category}>{category}</option>
                                    ))}
                                </select>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Timeline Feed */}
                <div className="lg:col-span-3">
                    <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-6 md:p-8">
                        <div className="space-y-8">
                            {filteredNews.length > 0 ? (
                                filteredNews.map(item => (
                                    <NewsItem key={item.id} item={item} />
                                ))
                            ) : (
                                <p className="text-center text-slate-500 py-8">Kriterlere uygun haber bulunamadı.</p>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
