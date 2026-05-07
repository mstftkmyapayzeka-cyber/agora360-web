import React, { useState } from 'react';
import { useData } from '../../context/DataContext';
import { Plus, Trash2, Layout } from 'lucide-react';

export default function AdminSidebar() {
    const { sidebarStories, addSidebarStory, deleteSidebarStory, loading } = useData();
    const [title, setTitle] = useState('');
    const [category, setCategory] = useState('');
    const [section, setSection] = useState('portal');
    const [order, setOrder] = useState('0');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!title || !category) return;
        await addSidebarStory({ title, category, section, order: parseInt(order) });
        setTitle('');
        setCategory('');
    };

    if (loading) return <div>Yükleniyor...</div>;

    return (
        <div className="space-y-8">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Yan Panel (Sidebar)</h1>
                    <p className="text-slate-500 dark:text-slate-400">Bölümlere özel bülten ve yan panel içeriklerini yönetin.</p>
                </div>
                <Layout className="w-10 h-10 text-indigo-500 opacity-20" />
            </div>

            <form onSubmit={handleSubmit} className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <div className="md:col-span-2">
                        <label className="block text-sm font-medium mb-1">Başlık</label>
                        <input
                            type="text"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            className="w-full px-3 py-2 rounded-lg border border-slate-200 dark:border-slate-800 bg-transparent"
                            placeholder="Haber başlığı..."
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-1">Kategori/Etiket</label>
                        <input
                            type="text"
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                            className="w-full px-3 py-2 rounded-lg border border-slate-200 dark:border-slate-800 bg-transparent"
                            placeholder="Örn: Bölge Bülteni, Film"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-1">Bölüm</label>
                        <select
                            value={section}
                            onChange={(e) => setSection(e.target.value)}
                            className="w-full px-3 py-2 rounded-lg border border-slate-200 dark:border-slate-800 bg-transparent"
                        >
                            <option value="portal">Ana Portal</option>
                            <option value="siyaset">Siyaset</option>
                            <option value="ui">Uİ</option>
                            <option value="sanat_kosesi">Sanat Köşesi</option>
                        </select>
                    </div>
                </div>
                <div className="flex items-center gap-4">
                    <div className="w-32">
                        <label className="block text-sm font-medium mb-1">Sıra</label>
                        <input
                            type="number"
                            value={order}
                            onChange={(e) => setOrder(e.target.value)}
                            className="w-full px-3 py-2 rounded-lg border border-slate-200 dark:border-slate-800 bg-transparent"
                        />
                    </div>
                    <button type="submit" className="mt-6 flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
                        <Plus className="w-4 h-4" />
                        Ekle
                    </button>
                </div>
            </form>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {['portal', 'siyaset', 'ui', 'sanat_kosesi'].map(sect => (
                    <div key={sect} className="space-y-3">
                        <h3 className="font-bold uppercase text-xs tracking-wider text-slate-400 px-2">{sect.replace('_', ' ')}</h3>
                        <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden divide-y divide-slate-200 dark:divide-slate-800">
                            {sidebarStories.filter(s => s.section === sect).map(item => (
                                <div key={item.id} className="p-4 flex items-center justify-between group hover:bg-slate-50 dark:hover:bg-slate-800/30">
                                    <div>
                                        <div className="text-sm font-bold">{item.title}</div>
                                        <div className="text-xs text-slate-500">{item.category}</div>
                                    </div>
                                    <button
                                        onClick={() => deleteSidebarStory(item.id)}
                                        className="p-2 text-slate-400 hover:text-red-600 opacity-0 group-hover:opacity-100 transition-all"
                                    >
                                        <Trash2 className="w-4 h-4" />
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
