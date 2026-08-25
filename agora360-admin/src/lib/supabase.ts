import { createClient } from '@supabase/supabase-js';

// Supabase configuration: prefer Vite env variables. Do NOT commit secrets into source code.
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://ucqdymdybcfhsjqtavav.supabase.co';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || '';

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
    section: 'sanat_kosesi' | 'siyaset' | 'ui' | 'portal';
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
    section: 'sanat_kosesi' | 'siyaset' | 'ui' | 'portal';
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
    section: 'sanat_kosesi' | 'siyaset' | 'ui' | 'portal';
};

export type LearningModuleRow = {
    id: string;
    title: string;
    description: string;
    objectives: string[];
    concepts: string[];
    readings: string[];
    content: string;
    section: 'sanat_kosesi' | 'siyaset' | 'ui' | 'portal';
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
    section: 'sanat_kosesi' | 'siyaset' | 'ui' | 'portal';
};

export type ResourceRow = {
    id: string;
    name: string;
    description: string;
    type: 'Kitap' | 'Makale' | 'Düşünür' | 'Araç';
    category: string;
    url?: string;
    section: 'sanat_kosesi' | 'siyaset' | 'ui' | 'portal';
};

export type ConceptRow = {
    id: string;
    term: string;
    definition: string;
    section: 'sanat_kosesi' | 'siyaset' | 'ui' | 'portal';
};
