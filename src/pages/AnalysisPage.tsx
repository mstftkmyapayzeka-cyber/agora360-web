import { useState, useMemo } from 'react';
import { SectionHeader } from '../components/common/SectionHeader';
import { AnalysisCard } from '../components/features/AnalysisCard';
import { useData } from '../context/DataContext';
import { useSection } from '../context/SectionContext';
import { cn } from '../lib/utils';

export function AnalysisPage() {
    const { analyses: allData } = useData();
    const { activeSection } = useSection();
    const analyses = useMemo(
        () => allData.filter(x => !activeSection || x.section === activeSection.id || x.section === 'portal'),
        [allData, activeSection]
    );
    const [selectedCategory, setSelectedCategory] = useState<string>('Tümü');

    const categories = ['Tümü', ...Array.from(new Set(analyses.map(a => a.category)))];
    const filteredAnalyses = selectedCategory === 'Tümü'
        ? analyses
        : analyses.filter(a => a.category === selectedCategory);

    return (
        <div className="container-custom py-12">
            <SectionHeader
                title="Konu Konu Analizler"
                description="Derinlemesine incelemeler ve uzman görüşleri — kategoriye göre süzülebilir."
            />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
                <aside className="lg:col-span-3">
                    <div style={{ borderTop: '3px solid var(--ink)', paddingTop: 14 }}>
                        <div className="kicker mb-3">Kategoriler</div>
                        <ul>
                            {categories.map(category => (
                                <li key={category}>
                                    <button
                                        onClick={() => setSelectedCategory(category)}
                                        className={cn(
                                            'w-full text-left py-2 byline transition-colors'
                                        )}
                                        style={{
                                            color: selectedCategory === category ? 'var(--accent-red)' : 'var(--ink)',
                                            borderBottom: '1px solid var(--rule-soft)',
                                        }}
                                    >
                                        {selectedCategory === category && <span>▸ </span>}
                                        {category}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>
                </aside>

                <div className="lg:col-span-9">
                    <div className="dateline mb-4" style={{ color: 'var(--ink-muted)' }}>
                        {filteredAnalyses.length} analiz listeleniyor
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-8">
                        {filteredAnalyses.map(a => <AnalysisCard key={a.id} analysis={a} />)}
                    </div>
                </div>
            </div>
        </div>
    );
}
