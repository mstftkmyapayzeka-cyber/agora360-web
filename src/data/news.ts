export interface NewsItem {
    id: string;
    title: string;
    description: string;
    region: 'Avrupa' | 'Orta Doğu' | 'Asya-Pasifik' | 'Amerika' | 'Afrika' | 'Küresel';
    date: string;
    category: 'Güvenlik' | 'Ekonomi' | 'Diplomasi' | 'Çevre' | 'Teknoloji';
    tags: string[];
    relatedAnalysisId?: string;
}

// Static data removed - now using Supabase
export const newsItems: NewsItem[] = [];
