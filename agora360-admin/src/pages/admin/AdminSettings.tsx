import { useState, useEffect } from 'react';
import { useData } from '../../context/DataContext';
import { Save, Settings as SettingsIcon, Quote, User } from 'lucide-react';

export default function AdminSettings() {
    const { settings, updateSetting, loading } = useData();
    
    const [quote, setQuote] = useState({ text: '', attr: '' });
    const [columnist, setColumnist] = useState({ initials: '', name: '', role: '', quote: '', column: '' });

    useEffect(() => {
        if (settings.quoteOfDay) setQuote(settings.quoteOfDay);
        if (settings.featuredColumnist) setColumnist(settings.featuredColumnist);
    }, [settings]);

    const handleSaveQuote = async () => {
        await updateSetting('quoteOfDay', quote);
        alert('Günün Sözü güncellendi!');
    };

    const handleSaveColumnist = async () => {
        await updateSetting('featuredColumnist', columnist);
        alert('Öne Çıkan Yazar güncellendi!');
    };

    if (loading) return <div>Yükleniyor...</div>;

    return (
        <div className="space-y-10 pb-20">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Site Ayarları</h1>
                    <p className="text-slate-500 dark:text-slate-400">Günün sözü ve yazar bilgilerini yönetin.</p>
                </div>
                <SettingsIcon className="w-10 h-10 text-indigo-500 opacity-20" />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                {/* Quote of Day */}
                <section className="space-y-4">
                    <div className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 font-bold uppercase tracking-wider text-xs">
                        <Quote className="w-4 h-4" />
                        Günün Sözü (Quote of the Day)
                    </div>
                    <div className="bg-white dark:bg-slate-900 p-8 rounded-xl border border-slate-200 dark:border-slate-800 space-y-4 relative">
                        <div>
                            <label className="block text-sm font-medium mb-1">Söz Metni</label>
                            <textarea
                                value={quote.text}
                                onChange={(e) => setQuote({ ...quote, text: e.target.value })}
                                className="w-full px-3 py-2 rounded-lg border border-slate-200 dark:border-slate-800 bg-transparent min-h-[100px]"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-1">Yazar/Atıf</label>
                            <input
                                type="text"
                                value={quote.attr}
                                onChange={(e) => setQuote({ ...quote, attr: e.target.value })}
                                className="w-full px-3 py-2 rounded-lg border border-slate-200 dark:border-slate-800 bg-transparent"
                            />
                        </div>
                        <button onClick={handleSaveQuote} className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
                            <Save className="w-4 h-4" />
                            Kaydet
                        </button>
                    </div>
                </section>

                {/* Featured Columnist */}
                <section className="space-y-4">
                    <div className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 font-bold uppercase tracking-wider text-xs">
                        <User className="w-4 h-4" />
                        Öne Çıkan Yazar (Featured Columnist)
                    </div>
                    <div className="bg-white dark:bg-slate-900 p-8 rounded-xl border border-slate-200 dark:border-slate-800 space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium mb-1">İsim</label>
                                <input
                                    type="text"
                                    value={columnist.name}
                                    onChange={(e) => setColumnist({ ...columnist, name: e.target.value })}
                                    className="w-full px-3 py-2 rounded-lg border border-slate-200 dark:border-slate-800 bg-transparent"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-1">Baş Harfler</label>
                                <input
                                    type="text"
                                    value={columnist.initials}
                                    onChange={(e) => setColumnist({ ...columnist, initials: e.target.value })}
                                    className="w-full px-3 py-2 rounded-lg border border-slate-200 dark:border-slate-800 bg-transparent"
                                />
                            </div>
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-1">Rol / Unvan</label>
                            <input
                                type="text"
                                value={columnist.role}
                                onChange={(e) => setColumnist({ ...columnist, role: e.target.value })}
                                className="w-full px-3 py-2 rounded-lg border border-slate-200 dark:border-slate-800 bg-transparent"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-1">Köşe Adı</label>
                            <input
                                type="text"
                                value={columnist.column}
                                onChange={(e) => setColumnist({ ...columnist, column: e.target.value })}
                                className="w-full px-3 py-2 rounded-lg border border-slate-200 dark:border-slate-800 bg-transparent"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-1">Alıntı / Özet</label>
                            <textarea
                                value={columnist.quote}
                                onChange={(e) => setColumnist({ ...columnist, quote: e.target.value })}
                                className="w-full px-3 py-2 rounded-lg border border-slate-200 dark:border-slate-800 bg-transparent min-h-[80px]"
                            />
                        </div>
                        <button onClick={handleSaveColumnist} className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
                            <Save className="w-4 h-4" />
                            Kaydet
                        </button>
                    </div>
                </section>
            </div>
        </div>
    );
}
