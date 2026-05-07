export interface Concept {
    section?: 'sanat_kosesi' | 'siyaset' | 'ui' | 'portal';
    id: string;
    term: string;
    definition: string;
}

// Static data removed - now using Supabase
export const concepts: Concept[] = [];
