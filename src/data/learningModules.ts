export interface LearningModule {
    id: string;
    title: string;
    description: string;
    objectives: string[];
    concepts: string[];
    readings: string[];
    content: string;
}

// Static data removed - now using Supabase
export const learningModules: LearningModule[] = [];
