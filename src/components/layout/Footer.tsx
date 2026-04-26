import { Mail, Twitter, Linkedin, Facebook, Palette, Landmark, Globe, Compass } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Footer() {
    return (
        <footer className="border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950">
            <div className="container-custom py-8 md:py-12">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-5">
                    {/* Brand */}
                    <div className="md:col-span-2 space-y-4">
                        <div className="flex items-center space-x-3">
                            <div className="relative flex items-center justify-center w-10 h-10">
                                <Compass className="absolute inset-0 w-10 h-10 text-cyan-500 animate-[spin_20s_linear_infinite]" />
                                <Landmark className="relative w-5 h-5 text-emerald-400 z-10" />
                            </div>
                            <div className="flex flex-col justify-center">
                                <span className="font-serif text-2xl font-bold tracking-tight text-slate-900 dark:text-white leading-none">
                                    Agora360
                                </span>
                                <span className="text-[10px] font-bold text-amber-500 tracking-widest mt-0.5 uppercase">
                                    Gençliğin Fikir Meydanı
                                </span>
                            </div>
                        </div>
                        <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed mt-4">
                            Sanat Köşesi, Siyaset ve Uluslararası İlişkiler alanlarında derinlemesine içerikler, analizler ve güncel haberler sunan gençliğin fikir meydanı.
                        </p>
                        <div className="flex gap-3 pt-2">
                            <a href="#" className="w-8 h-8 rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-500 hover:text-indigo-600 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 transition-colors">
                                <Twitter className="h-4 w-4" />
                            </a>
                            <a href="#" className="w-8 h-8 rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-500 hover:text-indigo-600 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 transition-colors">
                                <Linkedin className="h-4 w-4" />
                            </a>
                            <a href="#" className="w-8 h-8 rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-500 hover:text-indigo-600 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 transition-colors">
                                <Facebook className="h-4 w-4" />
                            </a>
                        </div>
                    </div>

                    {/* Sanat Köşesi */}
                    <div>
                        <h3 className="mb-4 text-sm font-bold flex items-center gap-2 text-purple-500">
                            <Palette className="h-4 w-4" /> Sanat Köşesi
                        </h3>
                        <ul className="space-y-2 text-sm text-slate-500 dark:text-slate-400">
                            <li><Link to="/sanat-kosesi" className="hover:text-purple-500 transition-colors">Ana Sayfa</Link></li>
                            <li><Link to="/sanat-kosesi/news" className="hover:text-purple-500 transition-colors">Haberler</Link></li>
                            <li><Link to="/sanat-kosesi/articles" className="hover:text-purple-500 transition-colors">Makaleler</Link></li>
                            <li><Link to="/sanat-kosesi/analysis" className="hover:text-purple-500 transition-colors">Analizler</Link></li>
                            <li><Link to="/sanat-kosesi/podcasts" className="hover:text-purple-500 transition-colors">Podcastler</Link></li>
                        </ul>
                    </div>

                    {/* Siyaset & UI */}
                    <div>
                        <h3 className="mb-4 text-sm font-bold flex items-center gap-2 text-teal-500">
                            <Landmark className="h-4 w-4" /> Siyaset
                        </h3>
                        <ul className="space-y-2 text-sm text-slate-500 dark:text-slate-400 mb-6">
                            <li><Link to="/siyaset" className="hover:text-teal-500 transition-colors">Ana Sayfa</Link></li>
                            <li><Link to="/siyaset/news" className="hover:text-teal-500 transition-colors">Haberler</Link></li>
                            <li><Link to="/siyaset/analysis" className="hover:text-teal-500 transition-colors">Analizler</Link></li>
                        </ul>
                        <h3 className="mb-4 text-sm font-bold flex items-center gap-2 text-blue-500">
                            <Globe className="h-4 w-4" /> Uluslararası İlişkiler
                        </h3>
                        <ul className="space-y-2 text-sm text-slate-500 dark:text-slate-400">
                            <li><Link to="/ui" className="hover:text-blue-500 transition-colors">Ana Sayfa</Link></li>
                            <li><Link to="/ui/learning" className="hover:text-blue-500 transition-colors">Uİ Öğren</Link></li>
                            <li><Link to="/ui/resources" className="hover:text-blue-500 transition-colors">Kaynaklar</Link></li>
                            <li><Link to="/about" className="hover:text-blue-500 transition-colors">Hakkında</Link></li>
                            <li><Link to="/admin" className="hover:text-primary-600 font-medium text-primary-600 transition-colors">Yönetici Paneli</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="mt-8 border-t border-slate-200 dark:border-slate-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-sm text-slate-500 dark:text-slate-400">
                        &copy; {new Date().getFullYear()} Agora360. Tüm hakları saklıdır.
                    </p>
                    <div className="flex items-center gap-1.5 text-sm text-slate-500">
                        <Mail className="h-4 w-4" />
                        <span>iletisim@agora360.com</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
