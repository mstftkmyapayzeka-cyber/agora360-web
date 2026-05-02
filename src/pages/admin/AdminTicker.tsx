import React, { useState } from 'react';
import { useData } from '../../context/DataContext';
import { Plus, Trash2, Megaphone } from 'lucide-react';

export default function AdminTicker() {
    const { tickerItems, addTickerItem, deleteTickerItem, loading } = useData();
    const [content, setContent] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!content) return;
        await addTickerItem({ content });
        setContent('');
    };

    if (loading) return <div>Yükleniyor...</div>;

    return (
        <div className="space-y-8">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Gündem & Ticker</h1>
                    <p className="text-slate-500 dark:text-slate-400">Sitenin üst kısmında kayan haber bandını yönetin.</p>
                </div>
                <Megaphone className="w-10 h-10 text-indigo-500 opacity-20" />
            </div>

            <form onSubmit={handleSubmit} className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 flex gap-4">
                <input
                    type="text"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    className="flex-1 px-3 py-2 rounded-lg border border-slate-200 dark:border-slate-800 bg-transparent"
                    placeholder="Yeni gündem maddesi..."
                    required
                />
                <button type="submit" className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
                    <Plus className="w-4 h-4" />
                    Ekle
                </button>
            </form>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {tickerItems.map((item) => (
                    <div key={item.id} className="bg-white dark:bg-slate-900 p-4 rounded-xl border border-slate-200 dark:border-slate-800 flex items-center justify-between group">
                        <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{item.content}</span>
                        <button
                            onClick={() => deleteTickerItem(item.id)}
                            className="p-2 text-slate-400 hover:text-red-600 opacity-0 group-hover:opacity-100 transition-all"
                        >
                            <Trash2 className="w-4 h-4" />
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}
