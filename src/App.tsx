import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { DataProvider } from './context/DataContext';
import { SectionProvider } from './context/SectionContext';
import { Layout } from './components/layout/Layout';

// Portal
import { PortalHomePage } from './pages/PortalHomePage';

// Sanat Köşesi
import { SanatKosesiHomePage } from './pages/sanat-kosesi/SanatKosesiHomePage';

// Siyaset
import { SiyasetHomePage } from './pages/siyaset/SiyasetHomePage';

// UI (Uluslararası İlişkiler)
import { UIHomePage } from './pages/ui/UIHomePage';

// Shared pages (used across sections)
import { ArticlesPage } from './pages/ArticlesPage';
import { NewsPage } from './pages/NewsPage';
import { AnalysisPage } from './pages/AnalysisPage';
import { AnalysisDetail } from './pages/AnalysisDetail';
import { LearningPage } from './pages/LearningPage';
import { LearningDetail } from './pages/LearningDetail';
import { PodcastsPage } from './pages/PodcastsPage';
import { ResourcesPage } from './pages/ResourcesPage';
import { AboutPage } from './pages/AboutPage';
import { ArticleDetail } from './pages/ArticleDetail';
import { SearchResultsPage } from './pages/SearchResultsPage';

// Admin
import { AdminLayout } from './components/admin/AdminLayout';
import { AdminDashboard } from './pages/admin/AdminDashboard';
import { ArticlesAdmin } from './pages/admin/ArticlesAdmin';
import { NewsAdmin } from './pages/admin/NewsAdmin';
import { AnalysisAdmin } from './pages/admin/AnalysisAdmin';
import { LearningAdmin } from './pages/admin/LearningAdmin';
import { PodcastsAdmin } from './pages/admin/PodcastsAdmin';
import { ResourcesAdmin } from './pages/admin/ResourcesAdmin';
import { ConceptsAdmin } from './pages/admin/ConceptsAdmin';
import { AdminLogin } from './pages/admin/AdminLogin';
import AdminHistory from './pages/admin/AdminHistory';
import AdminTicker from './pages/admin/AdminTicker';
import AdminLetters from './pages/admin/AdminLetters';
import AdminSidebar from './pages/admin/AdminSidebar';
import AdminSettings from './pages/admin/AdminSettings';

function App() {
    return (
        <ThemeProvider defaultTheme="dark" storageKey="nexus-theme">
            <DataProvider>
                <Router>
                    <SectionProvider>
                        <Routes>
                            {/* Main layout */}
                            <Route path="/" element={<Layout />}>
                                {/* Portal landing */}
                                <Route index element={<PortalHomePage />} />
                                <Route path="search" element={<SearchResultsPage />} />
                                <Route path="about" element={<AboutPage />} />

                                {/* SANAT KÖŞESİ section */}
                                <Route path="sanat-kosesi" element={<SanatKosesiHomePage />} />
                                <Route path="sanat-kosesi/articles" element={<ArticlesPage />} />
                                <Route path="sanat-kosesi/articles/:id" element={<ArticleDetail />} />
                                <Route path="sanat-kosesi/news" element={<NewsPage />} />
                                <Route path="sanat-kosesi/analysis" element={<AnalysisPage />} />
                                <Route path="sanat-kosesi/analysis/:id" element={<AnalysisDetail />} />
                                <Route path="sanat-kosesi/podcasts" element={<PodcastsPage />} />

                                {/* SİYASET section */}
                                <Route path="siyaset" element={<SiyasetHomePage />} />
                                <Route path="siyaset/articles" element={<ArticlesPage />} />
                                <Route path="siyaset/articles/:id" element={<ArticleDetail />} />
                                <Route path="siyaset/news" element={<NewsPage />} />
                                <Route path="siyaset/analysis" element={<AnalysisPage />} />
                                <Route path="siyaset/analysis/:id" element={<AnalysisDetail />} />
                                <Route path="siyaset/podcasts" element={<PodcastsPage />} />

                                {/* UI (Uluslararası İlişkiler) section */}
                                <Route path="ui" element={<UIHomePage />} />
                                <Route path="ui/articles" element={<ArticlesPage />} />
                                <Route path="ui/articles/:id" element={<ArticleDetail />} />
                                <Route path="ui/news" element={<NewsPage />} />
                                <Route path="ui/analysis" element={<AnalysisPage />} />
                                <Route path="ui/analysis/:id" element={<AnalysisDetail />} />
                                <Route path="ui/learning" element={<LearningPage />} />
                                <Route path="ui/learning/:id" element={<LearningDetail />} />
                                <Route path="ui/podcasts" element={<PodcastsPage />} />
                                <Route path="ui/resources" element={<ResourcesPage />} />
                            </Route>

                            {/* Admin panel */}
                            <Route path="/admin/login" element={<AdminLogin />} />
                            <Route path="/admin" element={<AdminLayout />}>
                                <Route index element={<AdminDashboard />} />
                                <Route path="articles" element={<ArticlesAdmin />} />
                                <Route path="news" element={<NewsAdmin />} />
                                <Route path="analysis" element={<AnalysisAdmin />} />
                                <Route path="learning" element={<LearningAdmin />} />
                                <Route path="podcasts" element={<PodcastsAdmin />} />
                                <Route path="resources" element={<ResourcesAdmin />} />
                                <Route path="concepts" element={<ConceptsAdmin />} />
                                <Route path="history" element={<AdminHistory />} />
                                <Route path="ticker" element={<AdminTicker />} />
                                <Route path="letters" element={<AdminLetters />} />
                                <Route path="sidebar" element={<AdminSidebar />} />
                                <Route path="settings" element={<AdminSettings />} />
                            </Route>
                        </Routes>
                    </SectionProvider>
                </Router>
            </DataProvider>
        </ThemeProvider>
    );
}

export default App;
