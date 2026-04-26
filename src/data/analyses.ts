export interface Analysis {
    id: string;
    title: string;
    summary: string;
    content: string;
    author: string;
    readTime: string;
    category: string;
    tags: string[];
    date: string;
}

// Static data removed - now using Supabase
export const analyses: Analysis[] = [];
