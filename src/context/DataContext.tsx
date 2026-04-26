import React, { createContext, useContext, useState, useEffect, useCallback, type ReactNode } from 'react';
import { supabase } from '../lib/supabase';
import type { Article } from '../data/articles';
import type { NewsItem } from '../data/news';
import type { Analysis } from '../data/analyses';
import type { LearningModule } from '../data/learningModules';
import type { Podcast } from '../data/podcasts';
import type { Resource } from '../data/resources';
import type { Concept } from '../data/concepts';

interface DataContextType {
    articles: Article[];
    news: NewsItem[];
    analyses: Analysis[];
    learningModules: LearningModule[];
    podcasts: Podcast[];
    resources: Resource[];
    concepts: Concept[];
    loading: boolean;
    error: string | null;

    addArticle: (item: Omit<Article, 'id'>) => Promise<void>;
    updateArticle: (item: Article) => Promise<void>;
    deleteArticle: (id: string) => Promise<void>;

    addNews: (item: Omit<NewsItem, 'id'>) => Promise<void>;
    updateNews: (item: NewsItem) => Promise<void>;
    deleteNews: (id: string) => Promise<void>;

    addAnalysis: (item: Omit<Analysis, 'id'>) => Promise<void>;
    updateAnalysis: (item: Analysis) => Promise<void>;
    deleteAnalysis: (id: string) => Promise<void>;

    addLearningModule: (item: Omit<LearningModule, 'id'>) => Promise<void>;
    updateLearningModule: (item: LearningModule) => Promise<void>;
    deleteLearningModule: (id: string) => Promise<void>;

    addPodcast: (item: Omit<Podcast, 'id'>) => Promise<void>;
    updatePodcast: (item: Podcast) => Promise<void>;
    deletePodcast: (id: string) => Promise<void>;

    addResource: (item: Omit<Resource, 'id'>) => Promise<void>;
    updateResource: (item: Resource) => Promise<void>;
    deleteResource: (id: string) => Promise<void>;

    addConcept: (item: Omit<Concept, 'id'>) => Promise<void>;
    updateConcept: (item: Concept) => Promise<void>;
    deleteConcept: (id: string) => Promise<void>;

    refreshData: () => Promise<void>;
}

const DataContext = createContext<DataContextType | undefined>(undefined);

export const useData = () => {
    const context = useContext(DataContext);
    if (!context) {
        throw new Error('useData must be used within a DataProvider');
    }
    return context;
};

interface DataProviderProps {
    children: ReactNode;
}

export const DataProvider: React.FC<DataProviderProps> = ({ children }) => {
    const [articles, setArticles] = useState<Article[]>([]);
    const [news, setNews] = useState<NewsItem[]>([]);
    const [analyses, setAnalyses] = useState<Analysis[]>([]);
    const [learningModules, setLearningModules] = useState<LearningModule[]>([]);
    const [podcasts, setPodcasts] = useState<Podcast[]>([]);
    const [resources, setResources] = useState<Resource[]>([]);
    const [concepts, setConcepts] = useState<Concept[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    // Fetch all data from Supabase
    const fetchData = useCallback(async () => {
        setLoading(true);
        setError(null);
        try {
            const [
                articlesRes,
                newsRes,
                analysesRes,
                learningRes,
                podcastsRes,
                resourcesRes,
                conceptsRes
            ] = await Promise.all([
                supabase.from('Article').select('*'),
                supabase.from('NewsItem').select('*'),
                supabase.from('Analysis').select('*'),
                supabase.from('LearningModule').select('*'),
                supabase.from('Podcast').select('*'),
                supabase.from('Resource').select('*'),
                supabase.from('Concept').select('*')
            ]);

            if (articlesRes.error) console.error('Articles error:', articlesRes.error);
            if (newsRes.error) console.error('News error:', newsRes.error);
            if (analysesRes.error) console.error('Analyses error:', analysesRes.error);
            if (learningRes.error) console.error('Learning error:', learningRes.error);
            if (podcastsRes.error) console.error('Podcasts error:', podcastsRes.error);
            if (resourcesRes.error) console.error('Resources error:', resourcesRes.error);
            if (conceptsRes.error) console.error('Concepts error:', conceptsRes.error);

            setArticles(articlesRes.data || []);
            setNews(newsRes.data || []);
            setAnalyses(analysesRes.data || []);
            setLearningModules(learningRes.data || []);
            setPodcasts(podcastsRes.data || []);
            setResources(resourcesRes.data || []);
            setConcepts(conceptsRes.data || []);
        } catch (err) {
            setError(err instanceof Error ? err.message : 'Veri yüklenirken hata oluştu');
            console.error('Fetch error:', err);
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    // ==================== ARTICLES ====================
    const addArticle = async (item: Omit<Article, 'id'>) => {
        const newItem = { ...item, id: crypto.randomUUID() };
        const { data, error } = await supabase.from('Article').insert(newItem).select().single();
        if (error) {
            console.error('Add article error:', error);
            throw error;
        }
        setArticles(prev => [...prev, data]);
    };

    const updateArticle = async (item: Article) => {
        const { data, error } = await supabase.from('Article').update(item).eq('id', item.id).select().single();
        if (error) {
            console.error('Update article error:', error);
            throw error;
        }
        setArticles(prev => prev.map(a => a.id === item.id ? data : a));
    };

    const deleteArticle = async (id: string) => {
        const { error } = await supabase.from('Article').delete().eq('id', id);
        if (error) {
            console.error('Delete article error:', error);
            throw error;
        }
        setArticles(prev => prev.filter(a => a.id !== id));
    };

    // ==================== NEWS ====================
    const addNews = async (item: Omit<NewsItem, 'id'>) => {
        const newItem = { ...item, id: crypto.randomUUID() };
        const { data, error } = await supabase.from('NewsItem').insert(newItem).select().single();
        if (error) {
            console.error('Add news error:', error);
            throw error;
        }
        setNews(prev => [...prev, data]);
    };

    const updateNews = async (item: NewsItem) => {
        const { data, error } = await supabase.from('NewsItem').update(item).eq('id', item.id).select().single();
        if (error) {
            console.error('Update news error:', error);
            throw error;
        }
        setNews(prev => prev.map(n => n.id === item.id ? data : n));
    };

    const deleteNews = async (id: string) => {
        const { error } = await supabase.from('NewsItem').delete().eq('id', id);
        if (error) {
            console.error('Delete news error:', error);
            throw error;
        }
        setNews(prev => prev.filter(n => n.id !== id));
    };

    // ==================== ANALYSES ====================
    const addAnalysis = async (item: Omit<Analysis, 'id'>) => {
        const newItem = { ...item, id: crypto.randomUUID() };
        const { data, error } = await supabase.from('Analysis').insert(newItem).select().single();
        if (error) {
            console.error('Add analysis error:', error);
            throw error;
        }
        setAnalyses(prev => [...prev, data]);
    };

    const updateAnalysis = async (item: Analysis) => {
        const { data, error } = await supabase.from('Analysis').update(item).eq('id', item.id).select().single();
        if (error) {
            console.error('Update analysis error:', error);
            throw error;
        }
        setAnalyses(prev => prev.map(a => a.id === item.id ? data : a));
    };

    const deleteAnalysis = async (id: string) => {
        const { error } = await supabase.from('Analysis').delete().eq('id', id);
        if (error) {
            console.error('Delete analysis error:', error);
            throw error;
        }
        setAnalyses(prev => prev.filter(a => a.id !== id));
    };

    // ==================== LEARNING MODULES ====================
    const addLearningModule = async (item: Omit<LearningModule, 'id'>) => {
        const newItem = { ...item, id: crypto.randomUUID() };
        const { data, error } = await supabase.from('LearningModule').insert(newItem).select().single();
        if (error) {
            console.error('Add learning module error:', error);
            throw error;
        }
        setLearningModules(prev => [...prev, data]);
    };

    const updateLearningModule = async (item: LearningModule) => {
        const { data, error } = await supabase.from('LearningModule').update(item).eq('id', item.id).select().single();
        if (error) {
            console.error('Update learning module error:', error);
            throw error;
        }
        setLearningModules(prev => prev.map(l => l.id === item.id ? data : l));
    };

    const deleteLearningModule = async (id: string) => {
        const { error } = await supabase.from('LearningModule').delete().eq('id', id);
        if (error) {
            console.error('Delete learning module error:', error);
            throw error;
        }
        setLearningModules(prev => prev.filter(l => l.id !== id));
    };

    // ==================== PODCASTS ====================
    const addPodcast = async (item: Omit<Podcast, 'id'>) => {
        const newItem = { ...item, id: crypto.randomUUID() };
        const { data, error } = await supabase.from('Podcast').insert(newItem).select().single();
        if (error) {
            console.error('Add podcast error:', error);
            throw error;
        }
        setPodcasts(prev => [...prev, data]);
    };

    const updatePodcast = async (item: Podcast) => {
        const { data, error } = await supabase.from('Podcast').update(item).eq('id', item.id).select().single();
        if (error) {
            console.error('Update podcast error:', error);
            throw error;
        }
        setPodcasts(prev => prev.map(p => p.id === item.id ? data : p));
    };

    const deletePodcast = async (id: string) => {
        const { error } = await supabase.from('Podcast').delete().eq('id', id);
        if (error) {
            console.error('Delete podcast error:', error);
            throw error;
        }
        setPodcasts(prev => prev.filter(p => p.id !== id));
    };

    // ==================== RESOURCES ====================
    const addResource = async (item: Omit<Resource, 'id'>) => {
        const newItem = { ...item, id: crypto.randomUUID() };
        const { data, error } = await supabase.from('Resource').insert(newItem).select().single();
        if (error) {
            console.error('Add resource error:', error);
            throw error;
        }
        setResources(prev => [...prev, data]);
    };

    const updateResource = async (item: Resource) => {
        const { data, error } = await supabase.from('Resource').update(item).eq('id', item.id).select().single();
        if (error) {
            console.error('Update resource error:', error);
            throw error;
        }
        setResources(prev => prev.map(r => r.id === item.id ? data : r));
    };

    const deleteResource = async (id: string) => {
        const { error } = await supabase.from('Resource').delete().eq('id', id);
        if (error) {
            console.error('Delete resource error:', error);
            throw error;
        }
        setResources(prev => prev.filter(r => r.id !== id));
    };

    // ==================== CONCEPTS ====================
    const addConcept = async (item: Omit<Concept, 'id'>) => {
        const newItem = { ...item, id: crypto.randomUUID() };
        const { data, error } = await supabase.from('Concept').insert(newItem).select().single();
        if (error) {
            console.error('Add concept error:', error);
            throw error;
        }
        setConcepts(prev => [...prev, data]);
    };

    const updateConcept = async (item: Concept) => {
        const { data, error } = await supabase.from('Concept').update(item).eq('id', item.id).select().single();
        if (error) {
            console.error('Update concept error:', error);
            throw error;
        }
        setConcepts(prev => prev.map(c => c.id === item.id ? data : c));
    };

    const deleteConcept = async (id: string) => {
        const { error } = await supabase.from('Concept').delete().eq('id', id);
        if (error) {
            console.error('Delete concept error:', error);
            throw error;
        }
        setConcepts(prev => prev.filter(c => c.id !== id));
    };

    const value = {
        articles, addArticle, updateArticle, deleteArticle,
        news, addNews, updateNews, deleteNews,
        analyses, addAnalysis, updateAnalysis, deleteAnalysis,
        learningModules, addLearningModule, updateLearningModule, deleteLearningModule,
        podcasts, addPodcast, updatePodcast, deletePodcast,
        resources, addResource, updateResource, deleteResource,
        concepts, addConcept, updateConcept, deleteConcept,
        loading,
        error,
        refreshData: fetchData
    };

    return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};
