import { Lightbulb, RefreshCw, Sparkles } from 'lucide-react';
import { type Concept } from '../../data/concepts';
import { useState, useEffect } from 'react';
import { useData } from '../../context/DataContext';
import { cn } from '../../lib/utils';

export function DailyConcept() {
    const { concepts } = useData();
    const [concept, setConcept] = useState<Concept | null>(null);
    const [isAnimating, setIsAnimating] = useState(false);

    const getRandomConcept = () => {
        if (concepts.length === 0) return;
        setIsAnimating(true);
        setTimeout(() => {
            const randomIndex = Math.floor(Math.random() * concepts.length);
            setConcept(concepts[randomIndex]);
            setIsAnimating(false);
        }, 500);
    };

    useEffect(() => {
        if (concepts.length > 0 && !concept) {
            const randomIndex = Math.floor(Math.random() * concepts.length);
            setConcept(concepts[randomIndex]);
        }
    }, [concepts, concept]);

    if (!concept) return null;

    return (
        <div className="card-premium group p-8 bg-gradient-to-br from-indigo-600 via-primary-600 to-primary-700 text-white border-none shadow-2xl shadow-primary-500/20">
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity duration-700 pointer-events-none">
                <Sparkles className="h-48 w-48 animate-pulse" />
            </div>

            <div className="relative z-10">
                <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center gap-3 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20">
                        <Lightbulb className="h-4 w-4 text-yellow-300" />
                        <span className="text-[10px] font-bold uppercase tracking-[0.2em]">Mercek Altında</span>
                    </div>
                    <button
                        onClick={getRandomConcept}
                        className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center hover:bg-white/20 transition-all hover:rotate-180 duration-500 group-active:scale-90"
                        title="Yeni Kavram"
                    >
                        <RefreshCw className={cn("h-4 w-4", isAnimating && "animate-spin")} />
                    </button>
                </div>

                <div className={cn("transition-all duration-500", isAnimating ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0")}>
                    <h3 className="text-3xl font-serif font-bold mb-4 tracking-tight">
                        {concept.term}
                    </h3>
                    <div className="w-12 h-1 bg-white/20 rounded-full mb-6"></div>
                    <p className="text-white/80 text-lg leading-relaxed font-medium line-clamp-4">
                        {concept.definition}
                    </p>

                    <button className="mt-8 text-sm font-bold flex items-center gap-2 group/btn">
                        <span>Detaylı Bilgi</span>
                        <div className="w-6 h-[1px] bg-white/40 transition-all group-hover/btn:w-10"></div>
                    </button>
                </div>
            </div>
        </div>
    );
}
