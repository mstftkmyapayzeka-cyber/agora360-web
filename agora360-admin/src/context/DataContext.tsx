import React, { createContext, useContext, useState, useEffect, useCallback, type ReactNode } from 'react';
import { supabase } from '../lib/supabase';
import type { Article } from '../data/articles';
import type { NewsItem } from '../data/news';
import type { Analysis } from '../data/analyses';
import type { LearningModule } from '../data/learningModules';
import type { Podcast } from '../data/podcasts';
import type { Resource } from '../data/resources';
import type { Concept } from '../data/concepts';

export interface OnThisDay {
    id: string;
    year: number;
    event: string;
}

export interface TickerItem {
    id: string;
    content: string;
}

export interface SidebarStory {
    id: string;
    title: string;
    category: string;
    section: string;
    order: number;
}

export interface Setting {
    id: string;
    key: string;
    value: any;
}

interface DataContextType {
    articles: Article[];
    news: NewsItem[];
    analyses: Analysis[];
    learningModules: LearningModule[];
    podcasts: Podcast[];
    resources: Resource[];
    concepts: Concept[];
    onThisDay: OnThisDay[];
    tickerItems: TickerItem[];
    sidebarStories: SidebarStory[];
    settings: Record<string, any>;
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

    addOnThisDay: (item: Omit<OnThisDay, 'id'>) => Promise<void>;
    deleteOnThisDay: (id: string) => Promise<void>;

    addTickerItem: (item: Omit<TickerItem, 'id'>) => Promise<void>;
    deleteTickerItem: (id: string) => Promise<void>;

    addSidebarStory: (item: Omit<SidebarStory, 'id'>) => Promise<void>;
    deleteSidebarStory: (id: string) => Promise<void>;

    updateSetting: (key: string, value: any) => Promise<void>;

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

export const DataProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [articles, setArticles] = useState<Article[]>([]);
    const [news, setNews] = useState<NewsItem[]>([]);
    const [analyses, setAnalyses] = useState<Analysis[]>([]);
    const [learningModules, setLearningModules] = useState<LearningModule[]>([]);
    const [podcasts, setPodcasts] = useState<Podcast[]>([]);
    const [resources, setResources] = useState<Resource[]>([]);
    const [concepts, setConcepts] = useState<Concept[]>([]);
    const [onThisDay, setOnThisDay] = useState<OnThisDay[]>([]);
    const [tickerItems, setTickerItems] = useState<TickerItem[]>([]);
    const [sidebarStories, setSidebarStories] = useState<SidebarStory[]>([]);
    const [settings, setSettings] = useState<Record<string, any>>({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const fetchData = useCallback(async () => {
        setLoading(true);
        try {
            const [
                art, nws, ana, lr, pod, res, con, otd, tck, set, sbs
            ] = await Promise.all([
                supabase.from('Article').select('*'),
                supabase.from('NewsItem').select('*'),
                supabase.from('Analysis').select('*'),
                supabase.from('LearningModule').select('*'),
                supabase.from('Podcast').select('*'),
                supabase.from('Resource').select('*'),
                supabase.from('Concept').select('*'),
                supabase.from('OnThisDay').select('*').order('year', { ascending: false }),
                supabase.from('TickerItem').select('*'),
                supabase.from('Setting').select('*'),
                supabase.from('SidebarStory').select('*').order('order', { ascending: true })
            ]);

            setArticles(art.data || []);
            setNews(nws.data || []);
            setAnalyses(ana.data || []);
            setLearningModules(lr.data || []);
            setPodcasts(pod.data || []);
            setResources(res.data || []);
            setConcepts(con.data || []);
            setOnThisDay(otd.data || []);
            setTickerItems(tck.data || []);
            setSidebarStories(sbs.data || []);
            
            const settingsMap = (set.data || []).reduce((acc: any, curr: any) => {
                acc[curr.key] = curr.value;
                return acc;
            }, {});
            setSettings(settingsMap);
        } catch (err) {
            console.error('Supabase veri çekme hatası:', err);
            setError('Veri yüklenemedi. Supabase bağlantısını kontrol edin.');
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => { fetchData(); }, [fetchData]);

    // ARTICLES
    const addArticle = async (item: Omit<Article, 'id'>) => {
        const { data, error } = await supabase.from('Article').insert({ ...item, id: crypto.randomUUID() }).select().single();
        if (error) throw error;
        setArticles(prev => [...prev, data]);
    };
    const updateArticle = async (item: Article) => {
        const { data, error } = await supabase.from('Article').update(item).eq('id', item.id).select().single();
        if (error) throw error;
        setArticles(prev => prev.map(a => a.id === item.id ? data : a));
    };
    const deleteArticle = async (id: string) => {
        await supabase.from('Article').delete().eq('id', id);
        setArticles(prev => prev.filter(a => a.id !== id));
    };

    // NEWS
    const addNews = async (item: Omit<NewsItem, 'id'>) => {
        const { data, error } = await supabase.from('NewsItem').insert({ ...item, id: crypto.randomUUID() }).select().single();
        if (error) throw error;
        setNews(prev => [...prev, data]);
    };
    const updateNews = async (item: NewsItem) => {
        const { data, error } = await supabase.from('NewsItem').update(item).eq('id', item.id).select().single();
        if (error) throw error;
        setNews(prev => prev.map(n => n.id === item.id ? data : n));
    };
    const deleteNews = async (id: string) => {
        await supabase.from('NewsItem').delete().eq('id', id);
        setNews(prev => prev.filter(n => n.id !== id));
    };

    // ANALYSES
    const addAnalysis = async (item: Omit<Analysis, 'id'>) => {
        const { data, error } = await supabase.from('Analysis').insert({ ...item, id: crypto.randomUUID() }).select().single();
        if (error) throw error;
        setAnalyses(prev => [...prev, data]);
    };
    const updateAnalysis = async (item: Analysis) => {
        const { data, error } = await supabase.from('Analysis').update(item).eq('id', item.id).select().single();
        if (error) throw error;
        setAnalyses(prev => prev.map(a => a.id === item.id ? data : a));
    };
    const deleteAnalysis = async (id: string) => {
        await supabase.from('Analysis').delete().eq('id', id);
        setAnalyses(prev => prev.filter(a => a.id !== id));
    };

    // LEARNING
    const addLearningModule = async (item: Omit<LearningModule, 'id'>) => {
        const { data, error } = await supabase.from('LearningModule').insert({ ...item, id: crypto.randomUUID() }).select().single();
        if (error) throw error;
        setLearningModules(prev => [...prev, data]);
    };
    const updateLearningModule = async (item: LearningModule) => {
        const { data, error } = await supabase.from('LearningModule').update(item).eq('id', item.id).select().single();
        if (error) throw error;
        setLearningModules(prev => prev.map(l => l.id === item.id ? data : l));
    };
    const deleteLearningModule = async (id: string) => {
        await supabase.from('LearningModule').delete().eq('id', id);
        setLearningModules(prev => prev.filter(l => l.id !== id));
    };

    // PODCASTS
    const addPodcast = async (item: Omit<Podcast, 'id'>) => {
        const { data, error } = await supabase.from('Podcast').insert({ ...item, id: crypto.randomUUID() }).select().single();
        if (error) throw error;
        setPodcasts(prev => [...prev, data]);
    };
    const updatePodcast = async (item: Podcast) => {
        const { data, error } = await supabase.from('Podcast').update(item).eq('id', item.id).select().single();
        if (error) throw error;
        setPodcasts(prev => prev.map(p => p.id === item.id ? data : p));
    };
    const deletePodcast = async (id: string) => {
        await supabase.from('Podcast').delete().eq('id', id);
        setPodcasts(prev => prev.filter(p => p.id !== id));
    };

    // RESOURCES
    const addResource = async (item: Omit<Resource, 'id'>) => {
        const { data, error } = await supabase.from('Resource').insert({ ...item, id: crypto.randomUUID() }).select().single();
        if (error) throw error;
        setResources(prev => [...prev, data]);
    };
    const updateResource = async (item: Resource) => {
        const { data, error } = await supabase.from('Resource').update(item).eq('id', item.id).select().single();
        if (error) throw error;
        setResources(prev => prev.map(r => r.id === item.id ? data : r));
    };
    const deleteResource = async (id: string) => {
        await supabase.from('Resource').delete().eq('id', id);
        setResources(prev => prev.filter(r => r.id !== id));
    };

    // CONCEPTS
    const addConcept = async (item: Omit<Concept, 'id'>) => {
        const { data, error } = await supabase.from('Concept').insert({ ...item, id: crypto.randomUUID() }).select().single();
        if (error) throw error;
        setConcepts(prev => [...prev, data]);
    };
    const updateConcept = async (item: Concept) => {
        const { data, error } = await supabase.from('Concept').update(item).eq('id', item.id).select().single();
        if (error) throw error;
        setConcepts(prev => prev.map(c => c.id === item.id ? data : c));
    };
    const deleteConcept = async (id: string) => {
        await supabase.from('Concept').delete().eq('id', id);
        setConcepts(prev => prev.filter(c => c.id !== id));
    };

    // NEW DATA TYPES
    const addOnThisDay = async (item: Omit<OnThisDay, 'id'>) => {
        const { data, error } = await supabase.from('OnThisDay').insert({ ...item, id: crypto.randomUUID() }).select().single();
        if (error) throw error;
        setOnThisDay(prev => [...prev, data]);
    };
    const deleteOnThisDay = async (id: string) => {
        await supabase.from('OnThisDay').delete().eq('id', id);
        setOnThisDay(prev => prev.filter(i => i.id !== id));
    };

    const addTickerItem = async (item: Omit<TickerItem, 'id'>) => {
        const { data, error } = await supabase.from('TickerItem').insert({ ...item, id: crypto.randomUUID() }).select().single();
        if (error) throw error;
        setTickerItems(prev => [...prev, data]);
    };
    const deleteTickerItem = async (id: string) => {
        await supabase.from('TickerItem').delete().eq('id', id);
        setTickerItems(prev => prev.filter(i => i.id !== id));
    };

    const addSidebarStory = async (item: Omit<SidebarStory, 'id'>) => {
        const { data, error } = await supabase.from('SidebarStory').insert({ ...item, id: crypto.randomUUID() }).select().single();
        if (error) throw error;
        setSidebarStories(prev => [...prev, data]);
    };
    const deleteSidebarStory = async (id: string) => {
        await supabase.from('SidebarStory').delete().eq('id', id);
        setSidebarStories(prev => prev.filter(i => i.id !== id));
    };

    const updateSetting = async (key: string, value: any) => {
        const { data, error } = await supabase.from('Setting').upsert({ key, value }).select().single();
        if (error) throw error;
        setSettings(prev => ({ ...prev, [key]: data.value }));
    };

    const value = {
        articles, addArticle, updateArticle, deleteArticle,
        news, addNews, updateNews, deleteNews,
        analyses, addAnalysis, updateAnalysis, deleteAnalysis,
        learningModules, addLearningModule, updateLearningModule, deleteLearningModule,
        podcasts, addPodcast, updatePodcast, deletePodcast,
        resources, addResource, updateResource, deleteResource,
        concepts, addConcept, updateConcept, deleteConcept,
        onThisDay, addOnThisDay, deleteOnThisDay,
        tickerItems, addTickerItem, deleteTickerItem,
        sidebarStories, addSidebarStory, deleteSidebarStory,
        settings, updateSetting,
        loading, error, refreshData: fetchData
    };

    return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};
