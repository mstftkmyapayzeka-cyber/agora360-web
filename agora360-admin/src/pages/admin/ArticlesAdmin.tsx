import { useSearchParams } from 'react-router-dom';
import { useState } from 'react';
import { useData } from '../../context/DataContext';
import type { Article } from '../../data/articles';
import { Plus, Edit, Trash2, X, Save, Upload, Loader2 } from 'lucide-react';

export function ArticlesAdmin() {
    const { articles, addArticle, updateArticle, deleteArticle, loading } = useData();
    const [isEditing, setIsEditing] = useState(false);
    const [isSaving, setIsSaving] = useState(false);
    const [currentArticle, setCurrentArticle] = useState<Partial<Article>>({});
    const [searchParams] = useSearchParams();
    const sectionQuery = searchParams.get('section') as Article['section'];

    const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setCurrentArticle({ ...currentArticle, url: reader.result as string });
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSaving(true);
        try {
            const article = {
                ...currentArticle,
                tags: Array.isArray(currentArticle.tags) ? currentArticle.tags : (currentArticle.tags as unknown as string)?.split(',').map(t => t.trim()) || [],
                year: Number(currentArticle.year)
            } as Article;

            if (currentArticle.id) {
                await updateArticle({ ...article, id: currentArticle.id });
            } else {
                await addArticle(article);
            }
            setIsEditing(false);
            setCurrentArticle({});
        } catch (error) {
            console.error('Save error:', error);
            alert('Kaydetme sırasında hata oluştu!');
        } finally {
            setIsSaving(false);
        }
    };

    const handleEdit = (article: Article) => {
        setCurrentArticle(article);
        setIsEditing(true);
    };

    const handleDelete = async (id: string) => {
        if (confirm('Silmek istediğinize emin misiniz?')) {
            try {
                await deleteArticle(id);
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
                    <h2 className="text-xl font-bold text-slate-900 dark:text-white">{currentArticle.id ? 'Köşe Yazısı Düzenle' : 'Yeni Köşe Yazısı'}</h2>
                    <button onClick={() => setIsEditing(false)} className="p-2 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-full text-slate-500">
                        <X className="w-5 h-5" />
                    </button>
                </div>
                <form onSubmit={handleSubmit} className="space-y-4">
                    
                    <div>
                        <label className="block text-sm font-medium mb-1 text-slate-700 dark:text-slate-300">Bölüm</label>
                        <select
                            required
                            className="w-full p-2 border rounded-lg dark:bg-slate-700 dark:border-slate-600 dark:text-white"
                            value={currentArticle.section || 'portal'}
                            onChange={e => setCurrentArticle({ ...currentArticle, section: e.target.value as Article['section'] })}
                        >
                            <option value="portal">Ana Portal</option>
                            <option value="siyaset">Siyaset</option>
                            <option value="ui">Uluslararası İlişkiler</option>
                            <option value="sanat_kosesi">Sanat Köşesi</option>
                        </select>
                    </div>
<div>
                        <label className="block text-sm font-medium mb-1 text-slate-700 dark:text-slate-300">Başlık</label>
                        <input
                            type="text"
                            required
                            className="w-full p-2 border rounded-lg dark:bg-slate-700 dark:border-slate-600 dark:text-white"
                            value={currentArticle.title || ''}
                            onChange={e => setCurrentArticle({ ...currentArticle, title: e.target.value })}
                        />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium mb-1 text-slate-700 dark:text-slate-300">Yazar</label>
                            <input
                                type="text"
                                required
                                className="w-full p-2 border rounded-lg dark:bg-slate-700 dark:border-slate-600 dark:text-white"
                                value={currentArticle.author || ''}
                                onChange={e => setCurrentArticle({ ...currentArticle, author: e.target.value })}
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-1 text-slate-700 dark:text-slate-300">Yıl</label>
                            <input
                                type="number"
                                required
                                className="w-full p-2 border rounded-lg dark:bg-slate-700 dark:border-slate-600 dark:text-white"
                                value={currentArticle.year || ''}
                                onChange={e => setCurrentArticle({ ...currentArticle, year: Number(e.target.value) })}
                            />
                        </div>
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-1 text-slate-700 dark:text-slate-300">Yayın/Dergi</label>
                        <input
                            type="text"
                            required
                            className="w-full p-2 border rounded-lg dark:bg-slate-700 dark:border-slate-600 dark:text-white"
                            value={currentArticle.publication || ''}
                            onChange={e => setCurrentArticle({ ...currentArticle, publication: e.target.value })}
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-1 text-slate-700 dark:text-slate-300">Özet</label>
                        <textarea
                            required
                            rows={4}
                            className="w-full p-2 border rounded-lg dark:bg-slate-700 dark:border-slate-600 dark:text-white"
                            value={currentArticle.summary || ''}
                            onChange={e => setCurrentArticle({ ...currentArticle, summary: e.target.value })}
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-1 text-slate-700 dark:text-slate-300">Etiketler (Virgül ile ayırın)</label>
                        <input
                            type="text"
                            className="w-full p-2 border rounded-lg dark:bg-slate-700 dark:border-slate-600 dark:text-white"
                            value={Array.isArray(currentArticle.tags) ? currentArticle.tags.join(', ') : currentArticle.tags || ''}
                            onChange={e => setCurrentArticle({ ...currentArticle, tags: e.target.value as any })}
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-1 text-slate-700 dark:text-slate-300">Dosya veya URL</label>
                        <div className="flex gap-2">
                            <input
                                type="text"
                                placeholder="https://..."
                                className="flex-1 p-2 border rounded-lg dark:bg-slate-700 dark:border-slate-600 dark:text-white"
                                value={currentArticle.url || ''}
                                onChange={e => setCurrentArticle({ ...currentArticle, url: e.target.value })}
                            />
                            <label className="cursor-pointer bg-slate-200 dark:bg-slate-700 p-2 rounded-lg hover:bg-slate-300 dark:hover:bg-slate-600 transition-colors">
                                <Upload className="w-5 h-5 text-slate-600 dark:text-slate-300" />
                                <input type="file" className="hidden" onChange={handleFileUpload} accept=".pdf,.doc,.docx" />
                            </label>
                        </div>
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-1 text-slate-700 dark:text-slate-300">İçerik (HTML desteklenir)</label>
                        <textarea
                            rows={8}
                            className="w-full p-2 border rounded-lg dark:bg-slate-700 dark:border-slate-600 dark:text-white font-mono text-sm"
                            placeholder="Köşe yazısı içeriğini buraya yazın. HTML etiketleri desteklenir: <p>, <h3>, <ul>, <li>, <blockquote> vb."
                            value={currentArticle.content || ''}
                            onChange={e => setCurrentArticle({ ...currentArticle, content: e.target.value })}
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

    const filteredData = sectionQuery ? articles.filter(item => item.section === sectionQuery) : articles;

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Köşe Yazıları</h1>
                <button onClick={() => { setCurrentArticle({ section: sectionQuery || 'portal' }); setIsEditing(true); }} className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 flex items-center gap-2">
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
                                <th className="p-4 font-medium">Yıl</th>
                                <th className="p-4 font-medium">Bölüm</th>
                                <th className="p-4 font-medium text-right">İşlemler</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
                            {filteredData.length === 0 ? (
                                <tr>
                                    <td colSpan={5} className="p-8 text-center text-slate-500 dark:text-slate-400">
                                        Henüz köşe yazısı eklenmemiş.
                                    </td>
                                </tr>
                            ) : (
                                filteredData.map((article) => (
                                    <tr key={article.id} className="hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors">
                                        <td className="p-4 font-medium text-slate-900 dark:text-white">{article.title}</td>
                                        <td className="p-4 text-slate-600 dark:text-slate-300">{article.author}</td>
                                        <td className="p-4 text-slate-600 dark:text-slate-300">{article.year}</td>
                                        <td className="p-4 text-slate-600 dark:text-slate-300">
                                            <span className="px-2 py-1 bg-slate-100 dark:bg-slate-800 rounded-md text-xs font-mono">
                                                {article.section === 'sanat_kosesi' ? 'Sanat' : article.section === 'siyaset' ? 'Siyaset' : article.section === 'ui' ? 'Uluslararası' : 'Portal'}
                                            </span>
                                        </td>
                                        <td className="p-4 text-right">
                                            <div className="flex justify-end gap-2">
                                                <button onClick={() => handleEdit(article)} className="p-2 text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg">
                                                    <Edit className="w-4 h-4" />
                                                </button>
                                                <button onClick={() => handleDelete(article.id)} className="p-2 text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg">
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
