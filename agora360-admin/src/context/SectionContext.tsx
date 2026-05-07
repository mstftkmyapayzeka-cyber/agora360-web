import React, { createContext, useContext, useState, useEffect, type ReactNode } from 'react';
import { useLocation } from 'react-router-dom';

export type SectionId = 'siyaset' | 'ui' | 'portal' | 'sanat_kosesi';

export interface SectionConfig {
  id: SectionId;
  label: string;
  path: string;
  primaryColor: string;
  gradientFrom: string;
  gradientTo: string;
  emoji: string;
  description: string;
  bgClass: string;
  textClass: string;
  borderClass: string;
  hoverBgClass: string;
}

export const SECTIONS: SectionConfig[] = [
  {
    id: 'sanat_kosesi',
    label: 'Sanat Köşesi',
    path: '/sanat-kosesi',
    primaryColor: '#a855f7',
    gradientFrom: 'from-purple-500',
    gradientTo: 'to-pink-600',
    emoji: '🎭',
    description: 'Sergiler, sinema, edebiyat ve kültür-sanat dünyasının nabzı.',
    bgClass: 'bg-purple-500',
    textClass: 'text-purple-500',
    borderClass: 'border-purple-500',
    hoverBgClass: 'hover:bg-purple-500',
  },
  {
    id: 'siyaset',
    label: 'Siyaset',
    path: '/siyaset',
    primaryColor: '#14b8a6',
    gradientFrom: 'from-teal-500',
    gradientTo: 'to-cyan-600',
    emoji: '🗳️',
    description: 'Güncel siyasi gelişmeler, seçimler, analizler ve yorum.',
    bgClass: 'bg-teal-500',
    textClass: 'text-teal-500',
    borderClass: 'border-teal-500',
    hoverBgClass: 'hover:bg-teal-500',
  },
  {
    id: 'ui',
    label: 'Uluslararası İlişkiler',
    path: '/ui',
    primaryColor: '#3b82f6',
    gradientFrom: 'from-blue-500',
    gradientTo: 'to-indigo-600',
    emoji: '🌐',
    description: 'Küresel diplomasi, jeopolitik analizler ve uluslararası gündem.',
    bgClass: 'bg-blue-500',
    textClass: 'text-blue-500',
    borderClass: 'border-blue-500',
    hoverBgClass: 'hover:bg-blue-500',
  },
];

interface SectionContextType {
  activeSection: SectionConfig | null;
  setActiveSection: (section: SectionConfig | null) => void;
  getSectionByPath: (path: string) => SectionConfig | undefined;
}

const SectionContext = createContext<SectionContextType | undefined>(undefined);

export const useSection = () => {
  const context = useContext(SectionContext);
  if (!context) throw new Error('useSection must be used within SectionProvider');
  return context;
};

export const SectionProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [activeSection, setActiveSection] = useState<SectionConfig | null>(null);
  const location = useLocation();

  const getSectionByPath = (path: string) =>
    SECTIONS.find(s => path.startsWith(s.path));

  useEffect(() => {
    const section = getSectionByPath(location.pathname);
    setActiveSection(section || null);
  }, [location.pathname]);

  return (
    <SectionContext.Provider value={{ activeSection, setActiveSection, getSectionByPath }}>
      {children}
    </SectionContext.Provider>
  );
};
