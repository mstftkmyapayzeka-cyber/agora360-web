import { createClient } from '@supabase/supabase-js';

// Supabase configuration
const supabaseUrl = 'https://sdwziipervytkhompsni.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNkd3ppaXBlcnZ5dGtob21wc25pIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQ2NjkxNzksImV4cCI6MjA4MDI0NTE3OX0.mmXrx9HTuT5b-n-S4BM_ex24yuOxAEdJWrTw8npl30o';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Database types based on existing data structures
export type ArticleRow = {
    id: string;
    title: string;
    author: string;
    publication: string;
    year: number;
    summary: string;
    tags: string[];
    url: string;
    content?: string;
};

export type NewsItemRow = {
    id: string;
    title: string;
    description: string;
    region: 'Avrupa' | 'Orta Doğu' | 'Asya-Pasifik' | 'Amerika' | 'Afrika' | 'Küresel';
    date: string;
    category: 'Güvenlik' | 'Ekonomi' | 'Diplomasi' | 'Çevre' | 'Teknoloji';
    tags: string[];
    relatedAnalysisId?: string;
};

export type AnalysisRow = {
    id: string;
    title: string;
    summary: string;
    content: string;
    author: string;
    readTime: string;
    category: string;
    tags: string[];
    date: string;
};

export type LearningModuleRow = {
    id: string;
    title: string;
    description: string;
    objectives: string[];
    concepts: string[];
    readings: string[];
    content: string;
};

export type PodcastRow = {
    id: string;
    title: string;
    description: string;
    duration: string;
    topic: string;
    tags: string[];
    date: string;
    videoUrl: string;
    thumbnailUrl: string;
};

export type ResourceRow = {
    id: string;
    name: string;
    description: string;
    type: 'Kitap' | 'Makale' | 'Düşünür' | 'Araç';
    category: string;
    url?: string;
};

export type ConceptRow = {
    id: string;
    term: string;
    definition: string;
};
