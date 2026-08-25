import { useState, useMemo } from 'react';
import { ArticleCard } from '../components/features/ArticleCard';
import { useData } from '../context/DataContext';
import { useSection } from '../context/SectionContext';
import { Search } from 'lucide-react';
import { Link } from 'react-router-dom';

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
        articles.forEach(a => a.tags.forEach(t => tags.add(t)));
        return Array.from(tags).sort();
    }, [articles]);

    const filteredArticles = useMemo(() => {
        return articles.filter(a => {
            const q = searchQuery.toLowerCase();
            const matchesSearch =
                a.title.toLowerCase().includes(q) ||
                a.author.toLowerCase().includes(q) ||
                a.summary.toLowerCase().includes(q);
            const matchesTag = selectedTag ? a.tags.includes(selectedTag) : true;
            return matchesSearch && matchesTag;
        });
    }, [articles, searchQuery, selectedTag]);

    const featured = filteredArticles[0];
    const rest = filteredArticles.slice(1);

    const sectionLabel = activeSection?.label ?? 'Agora360';

    return (
        <div className="container-custom py-10">
            {/* Page header */}
            <div
                className="text-center pt-4 pb-5 mb-8"
                style={{ borderTop: '3px double var(--ink)', borderBottom: '1px solid var(--ink)' }}
            >
                <div className="kicker mb-2" style={{ color: 'var(--accent-red)' }}>{sectionLabel}</div>
                <h1 className="headline" style={{ fontSize: 'clamp(32px, 5vw, 52px)' }}>
                    Köşe Yazıları
                </h1>
                <p className="deck mt-2" style={{ fontSize: 16, color: 'var(--ink-muted)' }}>
                    Gündeme dair güncel köşe yazıları — düzenli olarak güncellenir.
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
                {/* Sidebar */}
                <aside className="lg:col-span-3 order-2 lg:order-1">
                    <div style={{ borderTop: '3px solid var(--ink)', paddingTop: 16 }}>
                        <div className="kicker mb-3">Arşivde Ara</div>
                        <div
                            className="relative flex items-center mb-6"
                            style={{ borderBottom: '1px solid var(--ink)' }}
                        >
                            <Search className="h-4 w-4 flex-shrink-0" style={{ color: 'var(--ink-muted)' }} />
                            <input
                                type="text"
                                placeholder="Başlık veya yazar..."
                                className="w-full bg-transparent border-none px-2 py-2 outline-none italic"
                                style={{ fontFamily: 'Source Serif 4, Georgia, serif', color: 'var(--ink)', fontSize: 14 }}
                                value={searchQuery}
                                onChange={e => setSearchQuery(e.target.value)}
                            />
                        </div>

                        <div className="kicker mb-3">Konular</div>
                        <div className="flex flex-wrap gap-2">
                            <span
                                className={`tag-chip cursor-pointer ${!selectedTag ? 'active' : ''}`}
                                onClick={() => setSelectedTag(null)}
                            >
                                Tümü
                            </span>
                            {allTags.map(tag => (
                                <span
                                    key={tag}
                                    className={`tag-chip cursor-pointer ${selectedTag === tag ? 'active' : ''}`}
                                    onClick={() => setSelectedTag(tag === selectedTag ? null : tag)}
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>

                        {(searchQuery || selectedTag) && (
                            <div className="mt-4 pt-4" style={{ borderTop: '1px solid var(--rule-soft)' }}>
                                <div className="dateline mb-1" style={{ color: 'var(--ink-muted)' }}>
                                    {filteredArticles.length} sonuç bulundu
                                </div>
                                <button
                                    className="byline ink-link text-xs"
                                    onClick={() => { setSearchQuery(''); setSelectedTag(null); }}
                                >
                                    Filtreleri Temizle ×
                                </button>
                            </div>
                        )}
                    </div>
                </aside>

                {/* Content */}
                <div className="lg:col-span-9 order-1 lg:order-2">
                    {filteredArticles.length === 0 ? (
                        <div
                            className="text-center py-20"
                            style={{ border: '1px dashed var(--rule)', background: 'var(--paper-deep)' }}
                        >
                            <p className="lede italic" style={{ color: 'var(--ink-muted)' }}>
                                Aradığınız kriterlere uygun köşe yazısı bulunamadı.
                            </p>
                            <button
                                onClick={() => { setSearchQuery(''); setSelectedTag(null); }}
                                className="mt-4 byline ink-link"
                            >
                                Filtreleri Temizle →
                            </button>
                        </div>
                    ) : (
                        <>
                            {/* Featured article */}
                            {featured && !searchQuery && !selectedTag && (
                                <div className="mb-10">
                                    <div
                                        className="kicker-ink pb-2 mb-5"
                                        style={{ borderBottom: '3px solid var(--ink)' }}
                                    >
                                        Öne Çıkan Köşe Yazısı
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                                        <article style={{ borderTop: '3px double var(--ink)', paddingTop: 16 }}>
                                            <div className="flex items-center gap-3 mb-3">
                                                <span className="kicker">{featured.tags[0] ?? 'Köşe Yazısı'}</span>
                                            </div>
                                            <h2 className="headline mb-3" style={{ fontSize: 'clamp(22px, 2.5vw, 32px)', lineHeight: 1.1 }}>
                                                <Link to={`/articles/${featured.id}`} style={{ color: 'inherit' }}>
                                                    {featured.title}
                                                </Link>
                                            </h2>
                                            <p className="deck mb-4" style={{ fontSize: 16 }}>{featured.summary}</p>
                                            <div
                                                className="flex items-center justify-between py-2 mb-3"
                                                style={{ borderTop: '1px solid var(--rule-soft)', borderBottom: '1px solid var(--rule-soft)' }}
                                            >
                                                <span className="byline">— {featured.author}</span>
                                                <span className="dateline" style={{ color: 'var(--ink-faint)' }}>{featured.year}</span>
                                            </div>
                                            <Link to={`/articles/${featured.id}`} className="byline ink-link">
                                                Gazete'de Oku →
                                            </Link>
                                        </article>
                                        <div className="hidden md:block">
                                            <div
                                                className="p-6"
                                                style={{ background: 'var(--paper-deep)', border: '1px solid var(--rule-soft)' }}
                                            >
                                                <div className="kicker mb-3">Diğer Yazılar</div>
                                                <ul className="space-y-0">
                                                    {rest.slice(0, 5).map((a, i) => (
                                                        <li
                                                            key={a.id}
                                                            className="py-3"
                                                            style={{ borderBottom: i < Math.min(rest.length - 1, 4) ? '1px dotted var(--rule-soft)' : 'none' }}
                                                        >
                                                            <div className="flex items-start gap-2">
                                                                <span className="kicker mt-1 flex-shrink-0" style={{ color: 'var(--ink-faint)', minWidth: 16 }}>
                                                                    {String(i + 2).padStart(2, '0')}
                                                                </span>
                                                                <div>
                                                                    <Link
                                                                        to={`/articles/${a.id}`}
                                                                        className="body-copy hover:underline decoration-1 underline-offset-2"
                                                                        style={{ fontSize: 14, lineHeight: 1.4, color: 'var(--ink)' }}
                                                                    >
                                                                        {a.title}
                                                                    </Link>
                                                                    <div className="dateline mt-1" style={{ color: 'var(--ink-faint)' }}>
                                                                        {a.author}
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* Grid */}
                            <div>
                                <div
                                    className="kicker-ink pb-2 mb-6"
                                    style={{ borderBottom: '3px solid var(--ink)' }}
                                >
                                    {searchQuery || selectedTag
                                        ? `${filteredArticles.length} Sonuç`
                                        : 'Tüm Köşe Yazıları'
                                    }
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-8 gap-y-8">
                                    {(searchQuery || selectedTag ? filteredArticles : rest).map(a => (
                                        <ArticleCard key={a.id} article={a} />
                                    ))}
                                </div>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}
