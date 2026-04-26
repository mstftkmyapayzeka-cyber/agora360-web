import { useState } from 'react';
import { useData } from '../../context/DataContext';
import type { Analysis } from '../../data/analyses';
import { Plus, Edit, Trash2, X, Save, Loader2 } from 'lucide-react';

export function AnalysisAdmin() {
    const { analyses, addAnalysis, updateAnalysis, deleteAnalysis, loading } = useData();
    const [isEditing, setIsEditing] = useState(false);
    const [isSaving, setIsSaving] = useState(false);
    const [currentItem, setCurrentItem] = useState<Partial<Analysis>>({});

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSaving(true);
        try {
            const item = {
                ...currentItem,
                tags: Array.isArray(currentItem.tags) ? currentItem.tags : (currentItem.tags as unknown as string)?.split(',').map(t => t.trim()) || [],
            } as Analysis;

            if (currentItem.id) {
                await updateAnalysis({ ...item, id: currentItem.id });
            } else {
                await addAnalysis(item);
            }
            setIsEditing(false);
            setCurrentItem({});
        } catch (error) {
            console.error('Save error:', error);
            alert('Kaydetme sırasında hata oluştu!');
        } finally {
            setIsSaving(false);
        }
    };

    const handleEdit = (item: Analysis) => {
        setCurrentItem(item);
        setIsEditing(true);
    };

    const handleDelete = async (id: string) => {
        if (confirm('Silmek istediğinize emin misiniz?')) {
            try {
                await deleteAnalysis(id);
            } catch (error) {
                console.error('Delete error:', error);
                alert('Silme sırasında hata oluştu!');
            }
        }
    };

    if (isEditing) {
        return (
            <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm max-w-2xl mx-auto">
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-xl font-bold text-slate-900 dark:text-white">{currentItem.id ? 'Analiz Düzenle' : 'Yeni Analiz'}</h2>
                    <button onClick={() => setIsEditing(false)} className="p-2 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-full text-slate-500">
                        <X className="w-5 h-5" />
                    </button>
                </div>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium mb-1 text-slate-700 dark:text-slate-300">Başlık</label>
                        <input
                            type="text"
                            required
                            className="w-full p-2 border rounded-lg dark:bg-slate-700 dark:border-slate-600 dark:text-white"
                            value={currentItem.title || ''}
                            onChange={e => setCurrentItem({ ...currentItem, title: e.target.value })}
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-1 text-slate-700 dark:text-slate-300">Özet</label>
                        <textarea
                            required
                            rows={3}
                            className="w-full p-2 border rounded-lg dark:bg-slate-700 dark:border-slate-600 dark:text-white"
                            value={currentItem.summary || ''}
                            onChange={e => setCurrentItem({ ...currentItem, summary: e.target.value })}
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-1 text-slate-700 dark:text-slate-300">İçerik (HTML/Markdown)</label>
                        <textarea
                            required
                            rows={10}
                            className="w-full p-2 border rounded-lg dark:bg-slate-700 dark:border-slate-600 dark:text-white font-mono text-sm"
                            value={currentItem.content || ''}
                            onChange={e => setCurrentItem({ ...currentItem, content: e.target.value })}
                        />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium mb-1 text-slate-700 dark:text-slate-300">Yazar</label>
                            <input
                                type="text"
                                required
                                className="w-full p-2 border rounded-lg dark:bg-slate-700 dark:border-slate-600 dark:text-white"
                                value={currentItem.author || ''}
                                onChange={e => setCurrentItem({ ...currentItem, author: e.target.value })}
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-1 text-slate-700 dark:text-slate-300">Okuma Süresi</label>
                            <input
                                type="text"
                                placeholder="Örn: 5 dk"
                                required
                                className="w-full p-2 border rounded-lg dark:bg-slate-700 dark:border-slate-600 dark:text-white"
                                value={currentItem.readTime || ''}
                                onChange={e => setCurrentItem({ ...currentItem, readTime: e.target.value })}
                            />
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium mb-1 text-slate-700 dark:text-slate-300">Kategori</label>
                            <input
                                type="text"
                                required
                                className="w-full p-2 border rounded-lg dark:bg-slate-700 dark:border-slate-600 dark:text-white"
                                value={currentItem.category || ''}
                                onChange={e => setCurrentItem({ ...currentItem, category: e.target.value })}
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-1 text-slate-700 dark:text-slate-300">Tarih</label>
                            <input
                                type="date"
                                required
                                className="w-full p-2 border rounded-lg dark:bg-slate-700 dark:border-slate-600 dark:text-white"
                                value={currentItem.date || ''}
                                onChange={e => setCurrentItem({ ...currentItem, date: e.target.value })}
                            />
                        </div>
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-1 text-slate-700 dark:text-slate-300">Etiketler (Virgül ile ayırın)</label>
                        <input
                            type="text"
                            className="w-full p-2 border rounded-lg dark:bg-slate-700 dark:border-slate-600 dark:text-white"
                            value={Array.isArray(currentItem.tags) ? currentItem.tags.join(', ') : currentItem.tags || ''}
                            onChange={e => setCurrentItem({ ...currentItem, tags: e.target.value as any })}
                        />
                    </div>
                    <div className="flex justify-end gap-2 mt-6">
                        <button type="button" onClick={() => setIsEditing(false)} className="px-4 py-2 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg">İptal</button>
                        <button type="submit" disabled={isSaving} className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 flex items-center gap-2 disabled:opacity-50">
                            {isSaving ? <Loader2 className="w-4 h-4 animate-spin" /> : <Save className="w-4 h-4" />}
                            {isSaving ? 'Kaydediliyor...' : 'Kaydet'}
                        </button>
                    </div>
                </form>
            </div>
        );
    }

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Analizler</h1>
                <button onClick={() => { setCurrentItem({}); setIsEditing(true); }} className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 flex items-center gap-2">
                    <Plus className="w-4 h-4" /> Yeni Ekle
                </button>
            </div>

            {loading ? (
                <div className="flex justify-center items-center py-12">
                    <Loader2 className="w-8 h-8 animate-spin text-indigo-600" />
                    <span className="ml-2 text-slate-600 dark:text-slate-400">Yükleniyor...</span>
                </div>
            ) : (
                <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 overflow-hidden">
                    <table className="w-full text-left text-sm">
                        <thead className="bg-slate-50 dark:bg-slate-900/50 text-slate-500 dark:text-slate-400">
                            <tr>
                                <th className="p-4 font-medium">Başlık</th>
                                <th className="p-4 font-medium">Yazar</th>
                                <th className="p-4 font-medium">Kategori</th>
                                <th className="p-4 font-medium text-right">İşlemler</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
                            {analyses.length === 0 ? (
                                <tr>
                                    <td colSpan={4} className="p-8 text-center text-slate-500 dark:text-slate-400">
                                        Henüz analiz eklenmemiş.
                                    </td>
                                </tr>
                            ) : (
                                analyses.map((item) => (
                                    <tr key={item.id} className="hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors">
                                        <td className="p-4 font-medium text-slate-900 dark:text-white">{item.title}</td>
                                        <td className="p-4 text-slate-600 dark:text-slate-300">{item.author}</td>
                                        <td className="p-4 text-slate-600 dark:text-slate-300">{item.category}</td>
                                        <td className="p-4 text-right">
                                            <div className="flex justify-end gap-2">
                                                <button onClick={() => handleEdit(item)} className="p-2 text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg">
                                                    <Edit className="w-4 h-4" />
                                                </button>
                                                <button onClick={() => handleDelete(item.id)} className="p-2 text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg">
                                                    <Trash2 className="w-4 h-4" />
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
}
