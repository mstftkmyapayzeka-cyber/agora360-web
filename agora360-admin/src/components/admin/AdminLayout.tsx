import React from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { LayoutDashboard, FileText, Newspaper, BarChart2, BookOpen, Mic, Library, Settings, LogOut } from 'lucide-react';
import { cn } from '../../lib/utils';

export function AdminLayout() {
    const location = useLocation();
    
    // Check auth removed by user request
    /*
    React.useEffect(() => {
        const isAuth = localStorage.getItem('admin_auth');
        if (!isAuth && location.pathname !== '/login') {
            window.location.href = '/login';
        }
    }, [location]);
    */

    const navGroups = [
        {
            title: 'Genel',
            items: [
                { icon: LayoutDashboard, label: 'Panel', path: '/dashboard' },
                { icon: Settings, label: 'Kavramlar', path: '/concepts' },
            ]
        },
        {
            title: 'Portal & Site Geneli',
            items: [
                { icon: Newspaper, label: 'Gündem & Ticker', path: '/ticker' },
                { icon: BarChart2, label: 'Tarihte Bugün', path: '/history' },
                { icon: LayoutDashboard, label: 'Yan Panel (Sidebar)', path: '/sidebar' },
                { icon: Settings, label: 'Site Ayarları', path: '/settings' },
            ]
        },
        {
            title: 'Siyaset',
            items: [
                { icon: Newspaper, label: 'Haberler', path: '/news?section=siyaset' },
                { icon: FileText, label: 'Makaleler', path: '/articles?section=siyaset' },
                { icon: BarChart2, label: 'Analizler', path: '/analysis?section=siyaset' },
                { icon: Mic, label: 'Podcastler', path: '/podcasts?section=siyaset' },
            ]
        },
        {
            title: 'Uluslararası İlişkiler',
            items: [
                { icon: Newspaper, label: 'Haberler', path: '/news?section=ui' },
                { icon: FileText, label: 'Makaleler', path: '/articles?section=ui' },
                { icon: BarChart2, label: 'Analizler', path: '/analysis?section=ui' },
                { icon: BookOpen, label: 'Öğrenme', path: '/learning?section=ui' },
                { icon: Mic, label: 'Podcastler', path: '/podcasts?section=ui' },
                { icon: Library, label: 'Kaynaklar', path: '/resources?section=ui' },
            ]
        },
        {
            title: 'Sanat Köşesi',
            items: [
                { icon: Newspaper, label: 'Haberler', path: '/news?section=sanat_kosesi' },
                { icon: FileText, label: 'Makaleler', path: '/articles?section=sanat_kosesi' },
                { icon: BarChart2, label: 'Analizler', path: '/analysis?section=sanat_kosesi' },
                { icon: Mic, label: 'Podcastler', path: '/podcasts?section=sanat_kosesi' },
            ]
        }
    ];

    return (
        <div className="flex min-h-screen bg-slate-100 dark:bg-slate-900">
            {/* Sidebar */}
            <aside className="w-64 bg-white dark:bg-slate-950 border-r border-slate-200 dark:border-slate-800 flex flex-col fixed h-full z-10">
                <div className="p-6 border-b border-slate-200 dark:border-slate-800">
                    <h1 className="text-xl font-bold text-cyan-500">Agora360 Admin</h1>
                </div>
                <nav className="flex-1 p-4 overflow-y-auto space-y-6">
                    {navGroups.map((group, idx) => (
                        <div key={idx} className="space-y-1">
                            <p className="px-3 text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">{group.title}</p>
                            {group.items.map((item) => {
                                const Icon = item.icon;
                                const isActive = (location.pathname + location.search) === item.path || (location.pathname === item.path && !item.path.includes('?'));
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
                                        <Icon className="w-4 h-4" />
                                        {item.label}
                                    </Link>
                                );
                            })}
                        </div>
                    ))}
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
