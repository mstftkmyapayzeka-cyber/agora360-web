import { useState, useMemo } from 'react';
import { SectionHeader } from '../components/common/SectionHeader';
import { ArticleCard } from '../components/features/ArticleCard';
import { Tag } from '../components/common/Tag';
import { useData } from '../context/DataContext';
import { Search, Filter } from 'lucide-react';

export function ArticlesPage() {
    const { articles } = useData();
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedTag, setSelectedTag] = useState<string | null>(null);

    // Extract all unique tags
    const allTags = useMemo(() => {
        const tags = new Set<string>();
        articles.forEach(article => article.tags.forEach(tag => tags.add(tag)));
        return Array.from(tags).sort();
    }, []);

    // Filter articles
    const filteredArticles = useMemo(() => {
        return articles.filter(article => {
            const matchesSearch =
                article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                article.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
                article.summary.toLowerCase().includes(searchQuery.toLowerCase());

            const matchesTag = selectedTag ? article.tags.includes(selectedTag) : true;

            return matchesSearch && matchesTag;
        });
    }, [searchQuery, selectedTag]);

    return (
        <div className="container-custom py-12">
            <SectionHeader
                title="Günün Makaleleri"
                description="Akademik literatürden seçilmiş güncel ve temel makaleler."
            />

            <div className="flex flex-col md:flex-row gap-8 mb-10">
                {/* Sidebar Filters */}
                <div className="w-full md:w-64 space-y-6 shrink-0">
                    <div className="bg-slate-50 dark:bg-slate-900 p-4 rounded-lg border border-slate-200 dark:border-slate-800">
                        <h3 className="font-semibold mb-3 flex items-center gap-2">
                            <Filter className="h-4 w-4" /> Filtrele
                        </h3>

                        <div className="relative mb-4">
                            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-slate-400" />
                            <input
                                type="text"
                                placeholder="Makale ara..."
                                className="w-full bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-md pl-9 pr-3 py-2 text-sm focus:ring-2 focus:ring-primary-500"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                        </div>

                        <div>
                            <h4 className="text-sm font-medium text-slate-500 dark:text-slate-400 mb-2">Etiketler</h4>
                            <div className="flex flex-wrap gap-2">
                                <Tag
                                    label="Tümü"
                                    onClick={() => setSelectedTag(null)}
                                    className={!selectedTag ? "bg-primary-100 text-primary-700 dark:bg-primary-900/30 dark:text-primary-300 ring-1 ring-primary-500" : ""}
                                />
                                {allTags.map(tag => (
                                    <Tag
                                        key={tag}
                                        label={tag}
                                        onClick={() => setSelectedTag(tag === selectedTag ? null : tag)}
                                        className={selectedTag === tag ? "bg-primary-100 text-primary-700 dark:bg-primary-900/30 dark:text-primary-300 ring-1 ring-primary-500" : ""}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Article Grid */}
                <div className="flex-1">
                    <div className="mb-4 text-sm text-slate-500">
                        Toplam {filteredArticles.length} makale bulundu
                    </div>

                    {filteredArticles.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                            {filteredArticles.map(article => (
                                <ArticleCard key={article.id} article={article} />
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-12 bg-slate-50 dark:bg-slate-900 rounded-lg border border-dashed border-slate-300 dark:border-slate-700">
                            <p className="text-slate-500">Aradığınız kriterlere uygun makale bulunamadı.</p>
                            <button
                                onClick={() => { setSearchQuery(''); setSelectedTag(null); }}
                                className="mt-2 text-primary-600 hover:underline text-sm"
                            >
                                Filtreleri Temizle
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
