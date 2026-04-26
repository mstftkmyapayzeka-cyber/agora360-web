export interface Resource {
    section?: 'sanat_kosesi' | 'siyaset' | 'ui' | 'portal';
    id: string;
    name: string;
    description: string;
    type: 'Kitap' | 'Makale' | 'Düşünür' | 'Araç';
    category: string;
    url?: string;
}

// Static data removed - now using Supabase
export const resources: Resource[] = [];
