import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { DataProvider } from './context/DataContext';
import { ThemeProvider } from './context/ThemeContext';
import { SectionProvider } from './context/SectionContext';

import { AdminLayout } from './components/admin/AdminLayout';
import { AdminDashboard } from './pages/admin/AdminDashboard';
import { ArticlesAdmin } from './pages/admin/ArticlesAdmin';
import { NewsAdmin } from './pages/admin/NewsAdmin';
import { AnalysisAdmin } from './pages/admin/AnalysisAdmin';
import { LearningAdmin } from './pages/admin/LearningAdmin';
import { PodcastsAdmin } from './pages/admin/PodcastsAdmin';
import { ResourcesAdmin } from './pages/admin/ResourcesAdmin';
import { ConceptsAdmin } from './pages/admin/ConceptsAdmin';
import AdminHistory from './pages/admin/AdminHistory';
import AdminSidebar from './pages/admin/AdminSidebar';
import AdminTicker from './pages/admin/AdminTicker';
import AdminSettings from './pages/admin/AdminSettings';

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <SectionProvider>
          <DataProvider>
            <Routes>
              <Route path="/" element={<Navigate to="/dashboard" replace />} />
              
              <Route element={<AdminLayout />}>
                <Route path="/dashboard" element={<AdminDashboard />} />
                <Route path="/articles" element={<ArticlesAdmin />} />
                <Route path="/news" element={<NewsAdmin />} />
                <Route path="/analysis" element={<AnalysisAdmin />} />
                <Route path="/learning" element={<LearningAdmin />} />
                <Route path="/podcasts" element={<PodcastsAdmin />} />
                <Route path="/resources" element={<ResourcesAdmin />} />
                <Route path="/concepts" element={<ConceptsAdmin />} />
                <Route path="/history" element={<AdminHistory />} />
                <Route path="/sidebar" element={<AdminSidebar />} />
                <Route path="/ticker" element={<AdminTicker />} />
                <Route path="/settings" element={<AdminSettings />} />
              </Route>
              <Route path="*" element={<Navigate to="/dashboard" replace />} />
            </Routes>
          </DataProvider>
        </SectionProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
