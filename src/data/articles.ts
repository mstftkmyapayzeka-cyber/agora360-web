export interface Article {
  id: string;
  title: string;
  author: string;
  publication: string;
  year: number;
  summary: string;
  tags: string[];
  url: string;
  content?: string;
}

// Static data removed - now using Supabase
export const articles: Article[] = [];
