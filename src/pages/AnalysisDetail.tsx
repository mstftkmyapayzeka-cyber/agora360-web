import { useParams } from 'react-router-dom';
import { useData } from '../context/DataContext';
import { format, parseISO } from 'date-fns';
import { tr } from 'date-fns/locale';
import { NewspaperReader } from '../components/common/NewspaperReader';

export function AnalysisDetail() {
    const { analyses } = useData();
    const { id } = useParams<{ id: string }>();
    const analysis = analyses.find(a => a.id === id);

    if (!analysis) {
        return (
            <div className="container-custom py-20 text-center">
                <h2 className="headline mb-4" style={{ fontSize: 32 }}>Analiz Bulunamadı</h2>
                <a href="/analysis" className="ink-link byline">Analizlere Geri Dön</a>
            </div>
        );
    }

    // Determine the back path based on where we are
    const currentPath = window.location.pathname;
    let backPath = '/analysis';
    let backText = 'Analizlere Dön';
    if (currentPath.includes('/sanat-kosesi/')) {
        backPath = '/sanat-kosesi/analysis';
        backText = 'Sanat Köşesi Analizlerine Dön';
    } else if (currentPath.includes('/siyaset/')) {
        backPath = '/siyaset/analysis';
        backText = 'Siyaset Analizlerine Dön';
    } else if (currentPath.includes('/ui/')) {
        backPath = '/ui/analysis';
        backText = 'Uluslararası İlişkiler Analizlerine Dön';
    }

    const formattedDate = format(parseISO(analysis.date), 'd MMMM yyyy', { locale: tr });

    return (
        <div className="container-custom py-12 max-w-5xl">
            <NewspaperReader
                title={analysis.title}
                summary={analysis.summary}
                author={analysis.author}
                date={formattedDate}
                year={formattedDate}
                publication={analysis.category}
                tags={analysis.tags}
                content={analysis.content}
                backPath={backPath}
                backText={backText}
            />
        </div>
    );
}

