import React, { createContext, useContext, useState, useEffect } from 'react';

export interface DominantColorOption {
  id: string;
  name: string;
  label: string;
  firm: string;
  hex: string;
  hoverHex: string;
  lightHex: string;
  borderHex: string;
  badgeBg: string;
  badgeText: string;
}

export const DOMINANT_COLORS: DominantColorOption[] = [
  {
    id: 'crimson',
    name: 'Crimson Red',
    label: 'Crimson Red',
    firm: 'McKinsey / Bain Classic',
    hex: '#C8102E',
    hoverHex: '#990000',
    lightHex: '#FFF1F2',
    borderHex: '#FECDD3',
    badgeBg: 'bg-rose-50',
    badgeText: 'text-rose-700',
  },
  {
    id: 'emerald',
    name: 'BCG Green',
    label: 'BCG Green',
    firm: 'BCG Signature Emerald',
    hex: '#00875A',
    hoverHex: '#006644',
    lightHex: '#ECFDF5',
    borderHex: '#A7F3D0',
    badgeBg: 'bg-emerald-50',
    badgeText: 'text-emerald-700',
  },
  {
    id: 'bain-blue',
    name: 'Bain Blue',
    label: 'Bain Blue',
    firm: 'Bain Royal Navy',
    hex: '#0F4C81',
    hoverHex: '#0A3258',
    lightHex: '#F0F7FF',
    borderHex: '#BAE6FD',
    badgeBg: 'bg-sky-50',
    badgeText: 'text-sky-700',
  },
  {
    id: 'charcoal',
    name: 'Executive Slate',
    label: 'Executive Slate',
    firm: 'Monochrome / Strategy',
    hex: '#1E293B',
    hoverHex: '#0F172A',
    lightHex: '#F8FAFC',
    borderHex: '#CBD5E1',
    badgeBg: 'bg-slate-100',
    badgeText: 'text-slate-800',
  },
  {
    id: 'imperial',
    name: 'Imperial Plum',
    label: 'Imperial Plum',
    firm: 'Transformation / Tech',
    hex: '#7C3AED',
    hoverHex: '#5B21B6',
    lightHex: '#FAF5FF',
    borderHex: '#E9D5FF',
    badgeBg: 'bg-purple-50',
    badgeText: 'text-purple-700',
  },
];

export const DOMINANT_COLOR_PRESETS = DOMINANT_COLORS;


export type HeaderFontType = 'serif' | 'sans';
export type TitleVariantType = 'classic' | 'split-hero' | 'modern-minimal';

export interface HeroImagePreset {
  id: string;
  name: string;
  url: string;
  thumbnail: string;
}

export const HERO_IMAGE_PRESETS: HeroImagePreset[] = [
  {
    id: 'arch-monolith',
    name: 'Monolithic Architecture',
    url: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=80',
    thumbnail: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=300&q=80',
  },
  {
    id: 'corporate-skyline',
    name: 'Executive Skyline',
    url: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1600&q=80',
    thumbnail: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=300&q=80',
  },
  {
    id: 'glass-facade',
    name: 'Glass & Steel Geometry',
    url: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=80',
    thumbnail: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=300&q=80',
  },
  {
    id: 'boardroom-perspective',
    name: 'Strategic Atrium',
    url: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1600&q=80',
    thumbnail: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=300&q=80',
  },
];

export interface EngagementInfo {
  clientName: string;
  clientSubtitle: string;
  engagementTeam: string;
  engagementPractice: string;
  presentationDate: string;
  engagementCode: string;
  firmName: string;
  deckTitle: string;
  deckSubtitle: string;
  logoUrl: string | null;
  titleHeroImage: string;
  titleVariant: TitleVariantType;
}

export const DEFAULT_ENGAGEMENT_INFO: EngagementInfo = {
  clientName: '[Client Organization Name]',
  clientSubtitle: '[Board of Directors & Executive Steering Committee]',
  engagementTeam: '[Lead Partner & Engagement Director]',
  engagementPractice: '[Strategy & Corporate Finance Practice]',
  presentationDate: 'September 18, 2026',
  engagementCode: 'STR-2026-X',
  firmName: '[Management Consulting Practice / Firm Name]',
  deckTitle: '[Deck Title: Comprehensive Strategic Transformation & Value Creation Blueprint]',
  deckSubtitle: '[Subtitle / Executive Scope: 3-Year Enterprise Diagnostic, Commercial Repositioning, Operating Model Redesign, and Capital Allocation Roadmap]',
  logoUrl: null,
  titleHeroImage: HERO_IMAGE_PRESETS[0].url,
  titleVariant: 'classic',
};

interface ThemeContextType {
  dominantColor: DominantColorOption;
  setDominantColor: (color: DominantColorOption) => void;
  headerFont: HeaderFontType;
  setHeaderFont: (font: HeaderFontType) => void;
  engagementInfo: EngagementInfo;
  updateEngagementInfo: (info: Partial<EngagementInfo>) => void;
  setLogoUrl: (url: string | null) => void;
  setTitleHeroImage: (url: string) => void;
  setTitleVariant: (variant: TitleVariantType) => void;
  resetEngagementInfo: () => void;
}

const ThemeContext = createContext<ThemeContextType>({
  dominantColor: DOMINANT_COLORS[0],
  setDominantColor: () => {},
  headerFont: 'serif',
  setHeaderFont: () => {},
  engagementInfo: DEFAULT_ENGAGEMENT_INFO,
  updateEngagementInfo: () => {},
  setLogoUrl: () => {},
  setTitleHeroImage: () => {},
  setTitleVariant: () => {},
  resetEngagementInfo: () => {},
});

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [dominantColor, setDominantColor] = useState<DominantColorOption>(DOMINANT_COLORS[0]);
  const [headerFont, setHeaderFont] = useState<HeaderFontType>('serif');
  const [engagementInfo, setEngagementInfo] = useState<EngagementInfo>(DEFAULT_ENGAGEMENT_INFO);

  const updateEngagementInfo = (info: Partial<EngagementInfo>) => {
    setEngagementInfo((prev) => ({ ...prev, ...info }));
  };

  const setLogoUrl = (url: string | null) => {
    setEngagementInfo((prev) => ({ ...prev, logoUrl: url }));
  };

  const setTitleHeroImage = (url: string) => {
    setEngagementInfo((prev) => ({ ...prev, titleHeroImage: url }));
  };

  const setTitleVariant = (variant: TitleVariantType) => {
    setEngagementInfo((prev) => ({ ...prev, titleVariant: variant }));
  };

  const resetEngagementInfo = () => {
    setEngagementInfo(DEFAULT_ENGAGEMENT_INFO);
  };

  return (
    <ThemeContext.Provider
      value={{
        dominantColor,
        setDominantColor,
        headerFont,
        setHeaderFont,
        engagementInfo,
        updateEngagementInfo,
        setLogoUrl,
        setTitleHeroImage,
        setTitleVariant,
        resetEngagementInfo,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useDeckTheme = () => useContext(ThemeContext);
