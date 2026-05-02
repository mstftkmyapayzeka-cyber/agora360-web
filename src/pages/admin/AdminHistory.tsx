import React, { useState } from 'react';
import { useData } from '../../context/DataContext';
import { Plus, Trash2, History } from 'lucide-react';

export default function AdminHistory() {
    const { onThisDay, addOnThisDay, deleteOnThisDay, loading } = useData();
    const [year, setYear] = useState('');
    const [event, setEvent] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!year || !event) return;
        await addOnThisDay({ year: parseInt(year), event });
        setYear('');
        setEvent('');
    };

    if (loading) return <div>Yükleniyor...</div>;

    return (
        <div className="space-y-8">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Tarihte Bugün</h1>
                    <p className="text-slate-500 dark:text-slate-400">Ana sayfadaki tarihsel kronolojiyi yönetin.</p>
                </div>
                <History className="w-10 h-10 text-indigo-500 opacity-20" />
            </div>

            <form onSubmit={handleSubmit} className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <div className="md:col-span-1">
                        <label className="block text-sm font-medium mb-1">Yıl</label>
                        <input
                            type="number"
                            value={year}
                            onChange={(e) => setYear(e.target.value)}
                            className="w-full px-3 py-2 rounded-lg border border-slate-200 dark:border-slate-800 bg-transparent"
                            placeholder="Örn: 1923"
                            required
                        />
                    </div>
                    <div className="md:col-span-3">
                        <label className="block text-sm font-medium mb-1">Olay</label>
                        <input
                            type="text"
                            value={event}
                            onChange={(e) => setEvent(e.target.value)}
                            className="w-full px-3 py-2 rounded-lg border border-slate-200 dark:border-slate-800 bg-transparent"
                            placeholder="Olay açıklaması..."
                            required
                        />
                    </div>
                </div>
                <button type="submit" className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
                    <Plus className="w-4 h-4" />
                    Ekle
                </button>
            </form>

            <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden">
                <table className="w-full text-left border-collapse">
                    <thead className="bg-slate-50 dark:bg-slate-800/50">
                        <tr>
                            <th className="px-6 py-3 text-xs font-bold uppercase tracking-wider text-slate-500">Yıl</th>
                            <th className="px-6 py-3 text-xs font-bold uppercase tracking-wider text-slate-500">Olay</th>
                            <th className="px-6 py-3 text-xs font-bold uppercase tracking-wider text-slate-500 text-right">İşlemler</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
                        {onThisDay.map((item) => (
                            <tr key={item.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors">
                                <td className="px-6 py-4 font-bold text-indigo-600 dark:text-indigo-400">{item.year}</td>
                                <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-300">{item.event}</td>
                                <td className="px-6 py-4 text-right">
                                    <button
                                        onClick={() => deleteOnThisDay(item.id)}
                                        className="p-2 text-slate-400 hover:text-red-600 transition-colors"
                                    >
                                        <Trash2 className="w-4 h-4" />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
