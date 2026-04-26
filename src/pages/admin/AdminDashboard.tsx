import { useData } from '../../context/DataContext';
import { FileText, Newspaper, BarChart2, BookOpen, Mic, Library, Settings } from 'lucide-react';

export function AdminDashboard() {
    const { articles, news, analyses, learningModules, podcasts, resources, concepts } = useData();

    const stats = [
        { label: 'Makaleler', count: articles.length, icon: FileText, color: 'text-blue-600', bg: 'bg-blue-100 dark:bg-blue-900/20' },
        { label: 'Haberler', count: news.length, icon: Newspaper, color: 'text-green-600', bg: 'bg-green-100 dark:bg-green-900/20' },
        { label: 'Analizler', count: analyses.length, icon: BarChart2, color: 'text-purple-600', bg: 'bg-purple-100 dark:bg-purple-900/20' },
        { label: 'Modüller', count: learningModules.length, icon: BookOpen, color: 'text-orange-600', bg: 'bg-orange-100 dark:bg-orange-900/20' },
        { label: 'Podcastler', count: podcasts.length, icon: Mic, color: 'text-pink-600', bg: 'bg-pink-100 dark:bg-pink-900/20' },
        { label: 'Kaynaklar', count: resources.length, icon: Library, color: 'text-cyan-600', bg: 'bg-cyan-100 dark:bg-cyan-900/20' },
        { label: 'Kavramlar', count: concepts.length, icon: Settings, color: 'text-yellow-600', bg: 'bg-yellow-100 dark:bg-yellow-900/20' },
    ];

    return (
        <div className="space-y-6">
            <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Yönetim Paneli</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat) => {
                    const Icon = stat.icon;
                    return (
                        <div key={stat.label} className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-sm font-medium text-slate-500 dark:text-slate-400">{stat.label}</p>
                                    <p className="text-3xl font-bold text-slate-900 dark:text-white mt-2">{stat.count}</p>
                                </div>
                                <div className={`p-3 rounded-lg ${stat.bg}`}>
                                    <Icon className={`w-6 h-6 ${stat.color}`} />
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
