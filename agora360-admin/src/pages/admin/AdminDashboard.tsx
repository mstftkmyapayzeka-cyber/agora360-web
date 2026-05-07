import { useData } from '../../context/DataContext';
import { Link } from 'react-router-dom';
import { FileText, Newspaper, BarChart2, BookOpen, Mic, Library, Settings } from 'lucide-react';

export function AdminDashboard() {
    const { articles, news, analyses, learningModules, podcasts, resources, concepts, loading, error } = useData();

    const stats = [
        { label: 'Makaleler', count: articles.length, icon: FileText, color: 'text-blue-600', bg: 'bg-blue-100 dark:bg-blue-900/20' },
        { label: 'Haberler', count: news.length, icon: Newspaper, color: 'text-green-600', bg: 'bg-green-100 dark:bg-green-900/20' },
        { label: 'Analizler', count: analyses.length, icon: BarChart2, color: 'text-purple-600', bg: 'bg-purple-100 dark:bg-purple-900/20' },
        { label: 'Modüller', count: learningModules.length, icon: BookOpen, color: 'text-orange-600', bg: 'bg-orange-100 dark:bg-orange-900/20' },
        { label: 'Podcastler', count: podcasts.length, icon: Mic, color: 'text-pink-600', bg: 'bg-pink-100 dark:bg-pink-900/20' },
        { label: 'Kaynaklar', count: resources.length, icon: Library, color: 'text-cyan-600', bg: 'bg-cyan-100 dark:bg-cyan-900/20' },
        { label: 'Kavramlar', count: concepts.length, icon: Settings, color: 'text-yellow-600', bg: 'bg-yellow-100 dark:bg-yellow-900/20' },
    ];

    const sections = [
        { id: 'siyaset', label: 'Siyaset', color: 'bg-blue-600' },
        { id: 'ui', label: 'Uluslararası İlişkiler', color: 'bg-indigo-600' },
        { id: 'sanat_kosesi', label: 'Sanat Köşesi', color: 'bg-purple-600' },
        { id: 'portal', label: 'Ana Portal', color: 'bg-slate-600' },
    ];

    const getSectionCount = (data: any[], sectionId: string) => data.filter(item => item.section === sectionId).length;

    return (
        <div className="space-y-10">
            <div className="flex justify-between items-end">
                <div>
                    <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Yönetim Paneli</h1>
                    <p className="text-slate-500 dark:text-slate-400 mt-1">Sistem genelindeki içeriklerin özeti</p>
                </div>
                <div className="flex items-center gap-2">
                    <span className={`w-2.5 h-2.5 rounded-full ${loading ? 'bg-yellow-500 animate-pulse' : error ? 'bg-red-500' : 'bg-emerald-500'}`} />
                    <span className="text-xs font-medium text-slate-500 dark:text-slate-400">
                        {loading ? 'Yükleniyor...' : error ? 'Bağlantı Hatası' : 'Supabase Bağlı'}
                    </span>
                </div>
            </div>

            {error && (
                <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl p-4">
                    <p className="text-red-700 dark:text-red-300 text-sm font-medium">{error}</p>
                    <p className="text-red-500 dark:text-red-400 text-xs mt-1">Supabase URL ve API Key'i kontrol edin. .env.local dosyasına doğru değerleri girin.</p>
                </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat) => {
                    const Icon = stat.icon;
                    return (
                        <div key={stat.label} className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 hover:shadow-md transition-shadow">
                            <div className="flex items-center justify-between mb-4">
                                <div className={`p-3 rounded-xl ${stat.bg}`}>
                                    <Icon className={`w-6 h-6 ${stat.color}`} />
                                </div>
                                <p className="text-2xl font-black text-slate-900 dark:text-white">{stat.count}</p>
                            </div>
                            <p className="text-sm font-bold text-slate-600 dark:text-slate-400 uppercase tracking-wider">{stat.label}</p>
                        </div>
                    );
                })}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {sections.slice(0, 3).map((section) => (
                    <div key={section.id} className="bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 overflow-hidden">
                        <div className={`${section.color} p-4 text-white font-bold flex justify-between items-center`}>
                            <span>{section.label}</span>
                            <span className="text-xs bg-white/20 px-2 py-1 rounded">Bölüm Özeti</span>
                        </div>
                        <div className="p-6 space-y-4">
                            <div className="flex justify-between items-center">
                                <span className="text-sm text-slate-500 dark:text-slate-400">Makaleler</span>
                                <span className="font-bold dark:text-white">{getSectionCount(articles, section.id)}</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="text-sm text-slate-500 dark:text-slate-400">Haberler</span>
                                <span className="font-bold dark:text-white">{getSectionCount(news, section.id)}</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="text-sm text-slate-500 dark:text-slate-400">Analizler</span>
                                <span className="font-bold dark:text-white">{getSectionCount(analyses, section.id)}</span>
                            </div>
                            <div className="pt-4 border-t border-slate-100 dark:border-slate-700">
                                <Link 
                                    to={`/admin/articles?section=${section.id}`} 
                                    className="text-xs text-indigo-600 dark:text-indigo-400 font-bold hover:underline"
                                >
                                    İçerikleri Yönet →
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
