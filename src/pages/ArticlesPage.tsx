import { useState, useMemo } from 'react';
import { SectionHeader } from '../components/common/SectionHeader';
import { ArticleCard } from '../components/features/ArticleCard';
import { useData } from '../context/DataContext';
import { useSection } from '../context/SectionContext';
import { Search } from 'lucide-react';

export function ArticlesPage() {
    const { articles: allData } = useData();
    const { activeSection } = useSection();
    const articles = useMemo(
        () => allData.filter(x => !activeSection || x.section === activeSection.id || x.section === 'portal'),
        [allData, activeSection]
    );
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedTag, setSelectedTag] = useState<string | null>(null);

    const allTags = useMemo(() => {
        const tags = new Set<string>();
        articles.forEach(article => article.tags.forEach(tag => tags.add(tag)));
        return Array.from(tags).sort();
    }, [articles]);

    const filteredArticles = useMemo(() => {
        return articles.filter(article => {
            const matchesSearch =
                article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                article.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
                article.summary.toLowerCase().includes(searchQuery.toLowerCase());
            const matchesTag = selectedTag ? article.tags.includes(selectedTag) : true;
            return matchesSearch && matchesTag;
        });
    }, [articles, searchQuery, selectedTag]);

    return (
        <div className="container-custom py-12">
            <SectionHeader
                title="Günün Köşe Yazıları"
                description="Gündeme dair güncel köşe yazıları — düzenli olarak güncellenir."
            />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                {/* Sidebar */}
                <aside className="lg:col-span-3">
                    <div style={{ borderTop: '3px solid var(--ink)', paddingTop: 14 }}>
                        <div className="kicker mb-3">Arşivde Ara</div>
                        <div className="relative flex items-center mb-6" style={{ borderBottom: '1px solid var(--ink)' }}>
                            <Search className="h-4 w-4" style={{ color: 'var(--ink-muted)' }} />
                            <input
                                type="text"
                                placeholder="Başlık veya yazar..."
                                className="w-full bg-transparent border-none px-2 py-2 outline-none italic"
                                style={{ fontFamily: 'Source Serif 4, Georgia, serif', color: 'var(--ink)' }}
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                        </div>

                        <div className="kicker mb-3">Etiketler</div>
                        <div className="flex flex-wrap gap-2">
                            <span
                                className={`tag-chip ${!selectedTag ? 'active' : ''}`}
                                onClick={() => setSelectedTag(null)}
                            >
                                Tümü
                            </span>
                            {allTags.map(tag => (
                                <span
                                    key={tag}
                                    className={`tag-chip ${selectedTag === tag ? 'active' : ''}`}
                                    onClick={() => setSelectedTag(tag === selectedTag ? null : tag)}
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                </aside>

                {/* Articles */}
                <div className="lg:col-span-9">
                    <div className="dateline mb-4" style={{ color: 'var(--ink-muted)' }}>
                        Toplam {filteredArticles.length} kayıt bulundu
                    </div>
                    {filteredArticles.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-8">
                            {filteredArticles.map(article => (
                                <ArticleCard key={article.id} article={article} />
                            ))}
                        </div>
                    ) : (
                        <div
                            className="text-center py-16"
                            style={{ border: '1px dashed var(--rule)', background: 'var(--paper-deep)' }}
                        >
                            <p className="lede italic" style={{ color: 'var(--ink-muted)' }}>
                                Aradığınız kriterlere uygun köşe yazısı bulunamadı.
                            </p>
                            <button
                                onClick={() => { setSearchQuery(''); setSelectedTag(null); }}
                                className="mt-3 byline ink-link"
                            >
                                Filtreleri Temizle →
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
