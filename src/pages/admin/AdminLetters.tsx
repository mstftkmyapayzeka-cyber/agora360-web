import React, { useState } from 'react';
import { useData } from '../../context/DataContext';
import { Plus, Trash2, Mail } from 'lucide-react';

export default function AdminLetters() {
    const { lettersToEditor, addLetterToEditor, deleteLetterToEditor, loading } = useData();
    const [salutation, setSalutation] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!body || !author) return;
        await addLetterToEditor({ salutation, body, author });
        setSalutation('');
        setBody('');
        setAuthor('');
    };

    if (loading) return <div>Yükleniyor...</div>;

    return (
        <div className="space-y-8">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Editöre Mektuplar</h1>
                    <p className="text-slate-500 dark:text-slate-400">Okuyucu mektuplarını ve geri bildirimleri yönetin.</p>
                </div>
                <Mail className="w-10 h-10 text-indigo-500 opacity-20" />
            </div>

            <form onSubmit={handleSubmit} className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label className="block text-sm font-medium mb-1">Hitap</label>
                        <input
                            type="text"
                            value={salutation}
                            onChange={(e) => setSalutation(e.target.value)}
                            className="w-full px-3 py-2 rounded-lg border border-slate-200 dark:border-slate-800 bg-transparent"
                            placeholder="Örn: Sayın Editör,"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-1">Yazar</label>
                        <input
                            type="text"
                            value={author}
                            onChange={(e) => setAuthor(e.target.value)}
                            className="w-full px-3 py-2 rounded-lg border border-slate-200 dark:border-slate-800 bg-transparent"
                            placeholder="Örn: Ali Yılmaz, ODTÜ"
                            required
                        />
                    </div>
                </div>
                <div>
                    <label className="block text-sm font-medium mb-1">Mektup İçeriği</label>
                    <textarea
                        value={body}
                        onChange={(e) => setBody(e.target.value)}
                        className="w-full px-3 py-2 rounded-lg border border-slate-200 dark:border-slate-800 bg-transparent min-h-[100px]"
                        placeholder="Mektup metni..."
                        required
                    />
                </div>
                <button type="submit" className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
                    <Plus className="w-4 h-4" />
                    Ekle
                </button>
            </form>

            <div className="grid grid-cols-1 gap-4">
                {lettersToEditor.map((item) => (
                    <div key={item.id} className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 relative group">
                        <div className="font-bold mb-2">{item.salutation}</div>
                        <p className="text-slate-600 dark:text-slate-400 italic mb-3">{item.body}</p>
                        <div className="text-sm font-medium text-slate-900 dark:text-white text-right">— {item.author}</div>
                        <button
                            onClick={() => deleteLetterToEditor(item.id)}
                            className="absolute top-4 right-4 p-2 text-slate-400 hover:text-red-600 opacity-0 group-hover:opacity-100 transition-all"
                        >
                            <Trash2 className="w-4 h-4" />
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}
