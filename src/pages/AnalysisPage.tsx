import { useState } from 'react';
import { SectionHeader } from '../components/common/SectionHeader';
import { AnalysisCard } from '../components/features/AnalysisCard';
import { useData } from '../context/DataContext';
import { cn } from '../lib/utils';

export function AnalysisPage() {
    const { analyses } = useData();
    const [selectedCategory, setSelectedCategory] = useState<string>('Tümü');

    const categories = ['Tümü', ...Array.from(new Set(analyses.map(a => a.category)))];

    const filteredAnalyses = selectedCategory === 'Tümü'
        ? analyses
        : analyses.filter(a => a.category === selectedCategory);

    return (
        <div className="container-custom py-12">
            <SectionHeader
                title="Konu Konu Önemli Analizler"
                description="Derinlemesine incelemeler ve uzman görüşleri."
            />

            <div className="flex flex-col md:flex-row gap-8">
                {/* Categories Sidebar */}
                <div className="w-full md:w-64 shrink-0">
                    <div className="sticky top-24 space-y-1">
                        <h3 className="font-semibold mb-3 px-3 text-slate-900 dark:text-slate-50">Kategoriler</h3>
                        {categories.map(category => (
                            <button
                                key={category}
                                onClick={() => setSelectedCategory(category)}
                                className={cn(
                                    "w-full text-left px-3 py-2 rounded-md text-sm font-medium transition-colors",
                                    selectedCategory === category
                                        ? "bg-primary-50 text-primary-700 dark:bg-primary-900/20 dark:text-primary-400"
                                        : "text-slate-600 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-800"
                                )}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Analysis Grid */}
                <div className="flex-1">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {filteredAnalyses.map(analysis => (
                            <AnalysisCard key={analysis.id} analysis={analysis} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
