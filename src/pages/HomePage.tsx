import { SectionHeader } from '../components/common/SectionHeader';
import { ArticleCard } from '../components/features/ArticleCard';
import { AnalysisCard } from '../components/features/AnalysisCard';
import { PodcastCard } from '../components/features/PodcastCard';
import { DailyConcept } from '../components/features/DailyConcept';
import { useData } from '../context/DataContext';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, TrendingUp, BookOpen, Globe } from 'lucide-react';

export function HomePage() {
    const { articles, news, analyses, podcasts } = useData();
    // Get latest items
    const latestArticles = articles.slice(0, 3);
    const latestNews = news.slice(0, 5);
    const featuredAnalysis = analyses.slice(0, 2);
    const latestPodcasts = podcasts.slice(0, 3);

    return (
        <div className="space-y-24 pb-24">
            {/* Hero Section */}
            <section className="relative min-h-[80vh] flex items-center overflow-hidden bg-slate-950">
                {/* Dynamic Background */}
                <div className="absolute inset-0 z-0">
                    <div className="absolute top-0 -left-4 w-72 h-72 bg-primary-500 rounded-full mix-blend-multiply filter blur-[128px] opacity-20 animate-blob"></div>
                    <div className="absolute top-0 -right-4 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-[128px] opacity-20 animate-blob animation-delay-2000"></div>
                    <div className="absolute -bottom-8 left-20 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-[128px] opacity-20 animate-blob animation-delay-4000"></div>
                </div>

                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center opacity-10 mix-blend-overlay" />
                <div className="absolute inset-0 bg-gradient-to-b from-slate-950/50 via-slate-950 to-slate-950" />

                <div className="container-custom relative z-10">
                    <div className="max-w-4xl mx-auto text-center reveal">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-500/10 border border-primary-500/20 text-primary-400 text-sm font-medium mb-8">
                            <Sparkles className="w-4 h-4" />
                            <span>Yeni Nesil Uİ Platformu</span>
                        </div>
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white mb-8 leading-[1.1] tracking-tight">
                            Uluslararası İlişkiler <br />
                            <span className="text-gradient">Dünyasını Keşfedin</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-slate-400 mb-12 leading-relaxed max-w-3xl mx-auto">
                            Küresel siyaset, diplomasi ve strateji üzerine derinlemesine analizler, güncel haberler ve akademik kaynaklar için dijital kütüphaneniz.
                        </p>
                        <div className="flex flex-wrap items-center justify-center gap-6">
                            <Link to="/articles" className="btn btn-primary px-8 py-4 text-lg group">
                                Keşfetmeye Başla
                                <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                            </Link>
                            <Link to="/learning" className="btn btn-outline border-slate-700 text-slate-300 hover:text-white px-8 py-4 text-lg">
                                Eğitim Modülleri
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Scroll Indicator */}
                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-500 transition-opacity duration-300 hover:opacity-100 opacity-50">
                    <span className="text-xs font-medium uppercase tracking-widest">Kaydır</span>
                    <div className="w-px h-12 bg-gradient-to-b from-primary-500 to-transparent"></div>
                </div>
            </section>

            <div className="container-custom space-y-32">
                {/* Stats Section or Featured Categories */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 reveal">
                    {[
                        { icon: Globe, label: 'Küresel Analizler', value: '1.2k+' },
                        { icon: BookOpen, label: 'Akademik Makale', value: '450+' },
                        { icon: TrendingUp, label: 'Günlük Veri', value: '24/7' },
                        { icon: Sparkles, label: 'Özel İçerik', value: '100%' },
                    ].map((stat, i) => (
                        <div key={i} className="text-center group">
                            <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 text-primary-500 mb-4 transition-transform group-hover:scale-110">
                                <stat.icon className="w-6 h-6" />
                            </div>
                            <div className="text-2xl font-bold text-slate-900 dark:text-white mb-1">{stat.value}</div>
                            <div className="text-sm text-slate-500 dark:text-slate-400">{stat.label}</div>
                        </div>
                    ))}
                </div>

                {/* Daily Concept & News Grid */}
                {/* Daily Concept & News Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                    <div className="lg:col-span-8 space-y-12 reveal">
                        <SectionHeader
                            title="Gündem ve Güncel Yazılar"
                            description="Küresel siyasetteki son gelişmeleri ve uzman kalemlerden güncel değerlendirmeleri takip edin."
                            linkTo="/news"
                        />

                        {/* Featured News Ticker/Grid */}
                        <div className="bg-slate-50 dark:bg-slate-900/50 rounded-3xl border border-slate-200 dark:border-slate-800/60 p-1 mb-12">
                            <div className="flex flex-col md:flex-row gap-4">
                                <div className="md:w-1/3 bg-primary-600 rounded-[1.4rem] p-6 text-white flex flex-col justify-between">
                                    <div>
                                        <div className="inline-flex items-center gap-2 px-2 py-1 rounded-md bg-white/20 text-[10px] font-bold uppercase tracking-wider mb-4">
                                            <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></span>
                                            Son Dakika
                                        </div>
                                        <h4 className="text-xl font-bold leading-tight mb-4">Küresel Diplomasi Arenasında Yeni Dönem Başlıyor</h4>
                                    </div>
                                    <Link to="/news" className="text-sm font-semibold flex items-center gap-2 hover:translate-x-1 transition-transform">
                                        Detaylar <ArrowRight className="w-4 h-4" />
                                    </Link>
                                </div>
                                <div className="md:w-2/3 p-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {latestNews.slice(0, 4).map(item => (
                                        <Link key={item.id} to="/news" className="group p-4 rounded-xl hover:bg-white dark:hover:bg-slate-800 transition-all border border-transparent hover:border-slate-100 dark:hover:border-slate-700">
                                            <div className="text-[10px] font-bold text-primary-500 uppercase tracking-widest mb-1">{item.category}</div>
                                            <h5 className="font-bold text-slate-900 dark:text-slate-100 line-clamp-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">{item.title}</h5>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {latestArticles.map((article, i) => (
                                <div key={article.id} className={`reveal`} style={{ animationDelay: `${i * 100}ms` }}>
                                    <ArticleCard article={article} />
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="lg:col-span-4 space-y-12">
                        <div className="reveal" style={{ animationDelay: '200ms' }}>
                            <DailyConcept />
                        </div>

                        <div className="reveal card-premium p-8" style={{ animationDelay: '400ms' }}>
                            <div className="flex items-center justify-between mb-8">
                                <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-50">Popüler Etiketler</h3>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {['Jeopolitik', 'Güvenlik', 'Ekonomi', 'Diplomasi', 'AB', 'NATO', 'Orta Doğu', 'Asya'].map(tag => (
                                    <span key={tag} className="px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-sm font-medium text-slate-600 dark:text-slate-400 hover:bg-primary-500 hover:text-white dark:hover:bg-primary-500 cursor-pointer transition-colors">
                                        #{tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Analysis Section */}
                <section className="reveal">
                    <SectionHeader
                        title="Stratejik Analizler"
                        description="Bölge uzmanlarından ve akademisyenlerden güncel olayların derinlemesine değerlendirmeleri."
                        linkTo="/analysis"
                    />
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {featuredAnalysis.map((analysis, i) => (
                            <div key={analysis.id} className="reveal" style={{ animationDelay: `${i * 150}ms` }}>
                                <AnalysisCard analysis={analysis} />
                            </div>
                        ))}
                    </div>
                </section>

                {/* Podcasts Section */}
                <section className="reveal">
                    <SectionHeader
                        title="Multimedya"
                        description="Görsel ve işitsel içeriklerle uluslararası ilişkileri farklı perspektiflerden dinleyin."
                        linkTo="/podcasts"
                    />
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {latestPodcasts.map((podcast, i) => (
                            <div key={podcast.id} className="reveal" style={{ animationDelay: `${i * 100}ms` }}>
                                <PodcastCard podcast={podcast} />
                            </div>
                        ))}
                    </div>
                </section>

                {/* CTA Section */}
                <section className="relative overflow-hidden bg-slate-900 rounded-[2rem] p-12 md:p-20 text-center reveal shadow-2xl">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-600/20 via-transparent to-indigo-600/20 pointer-events-none" />
                    <div className="relative z-10 max-w-3xl mx-auto">
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                            Akademik Yolculuğunuza <br /><span className="text-gradient">Bugün Başlayın</span>
                        </h2>
                        <p className="text-slate-300 text-lg md:text-xl mb-12 leading-relaxed">
                            Uluslararası İlişkiler teorilerini, temel kavramları ve stratejik düşünceyi öğrenmek için hazırladığımız kapsamlı eğitim modüllerini keşfedin.
                        </p>
                        <Link to="/learning" className="btn btn-primary px-10 py-5 text-lg shadow-2xl shadow-primary-500/30">
                            Eğitim Platformuna Git <ArrowRight className="ml-3 h-5 w-5" />
                        </Link>
                    </div>
                </section>
            </div>
        </div>
    );
}
