import { Outlet, Link, useLocation } from 'react-router-dom';
import { LayoutDashboard, FileText, Newspaper, BarChart2, BookOpen, Mic, Library, Settings, LogOut } from 'lucide-react';
import { cn } from '../../lib/utils';

export function AdminLayout() {
    const location = useLocation();

    const navItems = [
        { icon: LayoutDashboard, label: 'Panel', path: '/admin' },
        { icon: FileText, label: 'Makaleler', path: '/admin/articles' },
        { icon: Newspaper, label: 'Haberler', path: '/admin/news' },
        { icon: BarChart2, label: 'Analizler', path: '/admin/analysis' },
        { icon: BookOpen, label: 'Öğrenme', path: '/admin/learning' },
        { icon: Mic, label: 'Podcastler', path: '/admin/podcasts' },
        { icon: Library, label: 'Kaynaklar', path: '/admin/resources' },
        { icon: Settings, label: 'Kavramlar', path: '/admin/concepts' },
    ];

    return (
        <div className="flex min-h-screen bg-slate-100 dark:bg-slate-900">
            {/* Sidebar */}
            <aside className="w-64 bg-white dark:bg-slate-950 border-r border-slate-200 dark:border-slate-800 flex flex-col fixed h-full z-10">
                <div className="p-6 border-b border-slate-200 dark:border-slate-800">
                    <h1 className="text-xl font-bold text-cyan-500">Agora360 Admin</h1>
                </div>
                <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
                    {navItems.map((item) => {
                        const Icon = item.icon;
                        const isActive = location.pathname === item.path;
                        return (
                            <Link
                                key={item.path}
                                to={item.path}
                                className={cn(
                                    "flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors",
                                    isActive
                                        ? "bg-indigo-50 text-indigo-600 dark:bg-indigo-900/20 dark:text-indigo-400"
                                        : "text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-900"
                                )}
                            >
                                <Icon className="w-5 h-5" />
                                {item.label}
                            </Link>
                        );
                    })}
                </nav>
                <div className="p-4 border-t border-slate-200 dark:border-slate-800">
                    <Link to="/" className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-red-600 dark:hover:text-red-400 transition-colors">
                        <LogOut className="w-5 h-5" />
                        Siteye Dön
                    </Link>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 ml-64 p-8">
                <Outlet />
            </main>
        </div>
    );
}
