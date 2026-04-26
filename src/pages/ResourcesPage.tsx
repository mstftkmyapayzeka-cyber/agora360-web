import { SectionHeader } from '../components/common/SectionHeader';
import { useData } from '../context/DataContext';
import { useSection } from '../context/SectionContext';
import { Book, User, Link as LinkIcon, ExternalLink } from 'lucide-react';

export function ResourcesPage() {
    const { resources: allData } = useData();
    const { activeSection } = useSection();
    const resources = useMemo(() => allData.filter(x => !activeSection || x.section === activeSection.id || x.section === 'portal'), [allData, activeSection]);
    const books = resources.filter(r => r.type === 'Kitap');
    const thinkers = resources.filter(r => r.type === 'Düşünür');
    const tools = resources.filter(r => r.type === 'Araç' || r.type === 'Makale');

    return (
        <div className="container-custom py-12">
            <SectionHeader
                title="Kaynaklar ve Araçlar"
                description="Araştırmalarınız için temel başvuru kaynakları."
            />

            <div className="space-y-16">
                {/* Books Section */}
                <section>
                    <div className="flex items-center gap-3 mb-6">
                        <div className="p-2 bg-primary-100 dark:bg-primary-900/30 rounded-lg text-primary-600 dark:text-primary-400">
                            <Book className="h-6 w-6" />
                        </div>
                        <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-50">Önemli Kitaplar</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {books.map(resource => (
                            <div key={resource.id} className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-primary-200 dark:hover:border-primary-800 transition-colors">
                                <span className="text-xs font-semibold text-primary-600 dark:text-primary-400 uppercase tracking-wider mb-2 block">
                                    {resource.category}
                                </span>
                                <h3 className="text-lg font-bold text-slate-900 dark:text-slate-50 mb-2">
                                    {resource.name}
                                </h3>
                                <p className="text-slate-600 dark:text-slate-400 text-sm">
                                    {resource.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Thinkers Section */}
                <section>
                    <div className="flex items-center gap-3 mb-6">
                        <div className="p-2 bg-primary-100 dark:bg-primary-900/30 rounded-lg text-primary-600 dark:text-primary-400">
                            <User className="h-6 w-6" />
                        </div>
                        <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-50">Önemli Düşünürler</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {thinkers.map(resource => (
                            <div key={resource.id} className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-primary-200 dark:hover:border-primary-800 transition-colors">
                                <span className="text-xs font-semibold text-primary-600 dark:text-primary-400 uppercase tracking-wider mb-2 block">
                                    {resource.category}
                                </span>
                                <h3 className="text-lg font-bold text-slate-900 dark:text-slate-50 mb-2">
                                    {resource.name}
                                </h3>
                                <p className="text-slate-600 dark:text-slate-400 text-sm">
                                    {resource.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Tools Section */}
                <section>
                    <div className="flex items-center gap-3 mb-6">
                        <div className="p-2 bg-primary-100 dark:bg-primary-900/30 rounded-lg text-primary-600 dark:text-primary-400">
                            <LinkIcon className="h-6 w-6" />
                        </div>
                        <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-50">Dijital Araçlar & Veritabanları</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {tools.map(resource => (
                            <a
                                key={resource.id}
                                href={resource.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group flex items-start gap-4 bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 hover:shadow-md transition-all"
                            >
                                <div className="flex-1">
                                    <div className="flex items-center gap-2 mb-1">
                                        <h3 className="text-lg font-bold text-slate-900 dark:text-slate-50 group-hover:text-primary-600 transition-colors">
                                            {resource.name}
                                        </h3>
                                        <ExternalLink className="h-4 w-4 text-slate-400 group-hover:text-primary-600" />
                                    </div>
                                    <p className="text-slate-600 dark:text-slate-400 text-sm mb-2">
                                        {resource.description}
                                    </p>
                                    <span className="inline-block px-2 py-0.5 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-xs rounded">
                                        {resource.category}
                                    </span>
                                </div>
                            </a>
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
}
