import { useParams } from 'react-router-dom';
import { useData } from '../context/DataContext';
import { NewspaperReader } from '../components/common/NewspaperReader';

export function ArticleDetail() {
    const { articles } = useData();
    const { id } = useParams<{ id: string }>();
    const article = articles.find(a => a.id === id);

    if (!article) {
        return (
            <div className="container-custom py-20 text-center">
                <h2 className="headline mb-4" style={{ fontSize: 32 }}>Yazı Bulunamadı</h2>
                <a href="/articles" className="ink-link byline">Yazılara Geri Dön</a>
            </div>
        );
    }

    // Determine the back path based on where we are
    const currentPath = window.location.pathname;
    let backPath = '/articles';
    let backText = 'Yazılara Dön';
    if (currentPath.includes('/sanat-kosesi/')) {
        backPath = '/sanat-kosesi/articles';
        backText = 'Sanat Köşesi Yazılarına Dön';
    } else if (currentPath.includes('/siyaset/')) {
        backPath = '/siyaset/articles';
        backText = 'Siyaset Yazılarına Dön';
    } else if (currentPath.includes('/ui/')) {
        backPath = '/ui/articles';
        backText = 'Uluslararası İlişkiler Yazılarına Dön';
    }

    return (
        <div className="container-custom py-12 max-w-5xl">
            <NewspaperReader
                title={article.title}
                summary={article.summary}
                author={article.author}
                year={article.year}
                publication={article.publication}
                tags={article.tags}
                content={article.content}
                backPath={backPath}
                backText={backText}
            />
        </div>
    );
}

