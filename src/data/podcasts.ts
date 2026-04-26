export interface Podcast {
    section?: 'sanat_kosesi' | 'siyaset' | 'ui' | 'portal';
    id: string;
    title: string;
    description: string;
    duration: string;
    topic: string;
    tags: string[];
    date: string;
    videoUrl: string;
    thumbnailUrl: string;
}

// Static data removed - now using Supabase
export const podcasts: Podcast[] = [];
