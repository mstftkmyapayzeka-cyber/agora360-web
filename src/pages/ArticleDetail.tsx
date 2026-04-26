import { useParams, Link } from 'react-router-dom';
import { useData } from '../context/DataContext';
import { Calendar, ArrowLeft, User, Tag as TagIcon, BookOpen, Share2 } from 'lucide-react';

export function ArticleDetail() {
    const { articles } = useData();
    const { id } = useParams<{ id: string }>();
    const article = articles.find(a => a.id === id);

    if (!article) {
        return (
            <div className="container-custom py-20 text-center">
                <h2 className="text-2xl font-bold mb-4">Yazı Bulunamadı</h2>
                <Link to="/articles" className="text-primary-600 hover:underline">
                    Yazılara Geri Dön
                </Link>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-950">
            {/* Reading Progress Bar (Optional, can be added with JS) */}
            <div className="fixed top-0 left-0 w-full h-1 bg-primary-500/10 z-50">
                <div className="h-full bg-primary-500 w-0 transition-all duration-300" id="progress-bar"></div>
            </div>

            <div className="container-custom py-12 max-w-4xl">
                <div className="flex items-center justify-between mb-12">
                    <Link to="/articles" className="inline-flex items-center text-sm font-medium text-slate-500 hover:text-primary-600 transition-colors group">
                        <ArrowLeft className="h-4 w-4 mr-2 transition-transform group-hover:-translate-x-1" />
                        Geri Dön
                    </Link>
                    <button className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-900 text-slate-500 transition-colors">
                        <Share2 className="h-5 w-5" />
                    </button>
                </div>

                <article className="card-premium p-8 md:p-12 bg-white dark:bg-slate-900/50 backdrop-blur-sm border-slate-200/60 dark:border-slate-800/60">
                    <header className="mb-12">
                        <div className="flex flex-wrap gap-2 mb-6">
                            {article.tags.map(tag => (
                                <span key={tag} className="px-3 py-1 rounded-full bg-primary-500/10 border border-primary-500/20 text-xs font-bold uppercase tracking-wider text-primary-600 dark:text-primary-400">
                                    {tag}
                                </span>
                            ))}
                        </div>

                        <h1 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 dark:text-slate-50 mb-8 leading-tight tracking-tight">
                            {article.title}
                        </h1>

                        <div className="flex flex-wrap items-center gap-6 py-8 border-y border-slate-100 dark:border-slate-800/60">
                            <div className="flex items-center gap-3">
                                <div className="h-12 w-12 rounded-full bg-gradient-to-br from-primary-500 to-indigo-600 flex items-center justify-center text-white shadow-lg shadow-primary-500/20">
                                    <User className="h-6 w-6" />
                                </div>
                                <div>
                                    <div className="text-sm font-bold text-slate-900 dark:text-slate-100">{article.author}</div>
                                    <div className="text-xs text-slate-500 font-medium">Yazar</div>
                                </div>
                            </div>

                            <div className="h-8 w-px bg-slate-200 dark:bg-slate-800 hidden sm:block"></div>

                            <div className="flex flex-col gap-1">
                                <div className="flex items-center gap-1.5 text-xs font-bold text-slate-900 dark:text-slate-100 uppercase tracking-wider">
                                    <BookOpen className="h-3.5 w-3.5 text-primary-500" />
                                    {article.publication}
                                </div>
                                <div className="flex items-center gap-1.5 text-xs text-slate-500 font-medium">
                                    <Calendar className="h-3.5 w-3.5" />
                                    {article.year}
                                </div>
                            </div>
                        </div>
                    </header>

                    {/* Content Section */}
                    <div className="prose prose-slate dark:prose-invert max-w-none prose-lg md:prose-xl prose-headings:font-serif prose-a:text-primary-500 hover:prose-a:text-primary-600">
                        {article.content ? (
                            <div dangerouslySetInnerHTML={{ __html: article.content }} />
                        ) : (
                            <div className="space-y-6">
                                <p className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed font-medium italic mb-8 border-l-4 border-primary-500 pl-6 py-2">
                                    {article.summary}
                                </p>
                                <p>
                                    Uluslararası ilişkiler teorileri, modern dünya düzenini anlamlandırmak için kullanılan temel araçlardır. Realizmden liberalizme, inşacılıktan eleştirel teorilere kadar geniş bir yelpazede sunulan bu perspektifler, devletlerin davranışlarını, uluslararası örgütlerin rolünü ve küresel sistemin dinamiklerini açıklamaya çalışır.
                                </p>
                                <p>
                                    Bu yazımızda, güncel tartışmalar ışığında küresel siyasetin dönüşümünü ve bu dönüşümün arkasındaki itici güçleri ele alıyoruz. Özellikle son on yılda yaşanan teknolojik gelişmeler, iklim değişikliği ve değişen güç dengeleri, klasik teorilerin yeniden yorumlanmasını zorunlu kılmıştır.
                                </p>
                                <div className="bg-slate-50 dark:bg-slate-800/40 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 my-10">
                                    <h3 className="text-lg font-bold mb-4">Temel Çıkarımlar</h3>
                                    <ul className="list-disc pl-5 space-y-2 text-base">
                                        <li>Küresel güç dengeleri çok kutuplu bir yapıya evrilmektedir.</li>
                                        <li>Yenilikçi diplomasi araçları, geleneksel yöntemlerin yerini almaya başlamıştır.</li>
                                        <li>Ekonomik bağımlılık, güvenlik stratejilerinin merkezinde yer almaktadır.</li>
                                    </ul>
                                </div>
                                <p>
                                    Sonuç olarak, uluslararası ilişkiler disiplini, sürekli değişen bir gerçekliği anlamlandırma çabasıdır. Bu süreçte hem tarihsel birikimi hem de güncel verileri harmanlayan bütüncül bir yaklaşım, daha doğru analizler yapmamıza olanak sağlar.
                                </p>
                            </div>
                        )}
                    </div>

                    <footer className="mt-16 pt-12 border-t border-slate-100 dark:border-slate-800/60">
                        <div className="flex flex-wrap items-center justify-between gap-6">
                            <div className="flex flex-wrap gap-2">
                                {article.tags.map(tag => (
                                    <span key={tag} className="inline-flex items-center text-xs font-bold text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 px-4 py-1.5 rounded-full uppercase tracking-tighter">
                                        <TagIcon className="h-3 w-3 mr-2 text-primary-500" />
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </footer>
                </article>

                {/* Related or CTA (Optional) */}
                <div className="mt-12 text-center">
                    <Link to="/articles" className="btn btn-outline border-slate-200 dark:border-slate-800 inline-flex items-center gap-2">
                        Tüm Yazıları Gör <ArrowLeft className="h-4 w-4 rotate-180" />
                    </Link>
                </div>
            </div>
        </div>
    );
}
