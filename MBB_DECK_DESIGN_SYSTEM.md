---
title: MBB Management Consulting Deck — Design System & Deck Architecture for React + Tailwind CSS
description: Design specifications, architectural guidelines, modular slide hierarchy, and desktop deck presentation framework using React, Tailwind CSS, HTML5, and Motion with native PDF export.
version: 3.0.0
target_framework: React 18/19 + Tailwind CSS + HTML5 + Motion (motion/react)
charting_framework: "HTML5 / SVG / Tailwind CSS vector components"
aspect_ratio: 16:9 (1920x1080 canvas standard with responsive viewport scaling)
design_style: Management Consulting (McKinsey / BCG / Bain Standard)
primary_accent: "#C8102E" # Crimson Red
background: "#FFFFFF" # Pure White Canvas
neutral_dark: "#111827" # Deep Ink / Charcoal
neutral_muted: "#6B7280" # Slate Grey Footnotes & Metadata
neutral_light: "#F9FAFB" # Crisp Light Card Fill
border_color: "#E5E7EB" # 1px Solid Divider
font_headline: "Merriweather" # Classic Executive Serif Title
font_body: "Inter" # Modern Clean Sans-Serif
icon_library: "lucide-react"
navigation_style: "Minimalist floating deck controls (Prev, Next, Page X/Y, PDF Export)"
print_export: "Native @media print with 16:9 landscape page-break rules for vector-sharp PDF"
---

# MBB Management Consulting Deck Generator — React & Tailwind CSS Edition

This document provides the complete design system, architectural specification, and modular project structure for building executive-tier MBB (McKinsey, BCG, Bain) presentation decks in **React**, **Tailwind CSS**, and **HTML5**, with subtle, executive-grade animations powered by **Motion** (`motion/react`).

This edition completely supersedes Remotion video rendering with an interactive, fully responsive **desktop presentation application** equipped with a minimal navigation toolbar, single master orchestrator, modular slide components, and vector-sharp PDF export capabilities.

---

## 1. Recommended Project File Hierarchy

To ensure scalability, readability, and testability across multi-slide decks (from a 6-slide briefing to a 50-slide board presentation), the codebase is organized with a **single master deck orchestrator** and isolated, self-contained slide components:

```text
src/
├── types.ts                     # SlideMetadata, DeckState, and chart data interfaces
├── theme.ts                     # MBB tokens (Crimson #C8102E, Navy, Slate, fonts, borders)
│
├── components/
│   ├── MasterDeck.tsx           # Single Master Orchestrator (keyboard events, transitions, PDF)
│   ├── SlideLayout.tsx          # Reusable MBB Master Header/Footer Frame (Kicker, Title, Footer)
│   ├── DeckNavigation.tsx       # Minimalist floating controls: [Prev] [Slide X / Y] [Next] [PDF]
│   ├── CalloutBox.tsx           # BCG/McKinsey executive key takeaway callout box
│   ├── IconBadge.tsx            # Standardized Lucide Icon container with subtle tint
│   ├── PrintDeckView.tsx        # Print-optimized container for instant multi-page PDF generation
│   └── charts/
│       ├── MetricBarChart.tsx   # Clean HTML/Tailwind animated bar chart with metric badges
│       ├── WaterfallChart.tsx   # Value bridge / EBITDA margin waterfall chart
│       └── TrendLineChart.tsx   # Responsive SVG multi-series trend line chart
│
├── slides/
│   ├── slidesConfig.ts          # Central slide registry, metadata, ordering, and lazy loading
│   ├── Slide01_ExecutiveSummary.tsx # Title / Strategic Mandate & core value pillars
│   ├── Slide02_MarketLandscape.tsx  # 3-Column MECE addressable TAM/SAM/SOM breakdown
│   ├── Slide03_FinancialTrajectory.tsx # Revenue expansion with bar chart & BCG callout
│   ├── Slide04_ProfitabilityWaterfall.tsx # Value realization bridge & operational levers
│   ├── Slide05_CompetitivePositioning.tsx # 2x2 Matrix & structural moat defenses
│   └── Slide06_StrategicRoadmap.tsx # 18-month phased horizon execution plan
│
├── App.tsx                      # Root application entry point
├── main.tsx                     # React DOM bootstrap
└── index.css                    # Tailwind CSS imports and @media print PDF rules
```

### Why this hierarchy scales:
1. **Isolated Slide Files**: Adding, removing, or reordering slides requires changing only `slidesConfig.ts` without touching any navigation or layout code.
2. **Single Master Deck (`MasterDeck.tsx`)**: All keyboard shortcuts (`←`/`→`/`Space`/`Home`/`End`), transition physics, fullscreen toggling, and PDF export logic live in one place.
3. **Reusable Frame (`SlideLayout.tsx`)**: The fixed MBB slide anatomy (Kicker, Action Title, Content zone, and Footer) is completely standardized, ensuring **zero layout jitter** across slides.
4. **Independent Chart Modules**: Chart components accept clean data arrays and render with pure HTML/Tailwind/SVG, avoiding bulky charting dependencies while preserving full responsiveness.

---

## 2. Strict MBB Slide Anatomy & Visual Hierarchy

Every slide strictly adheres to consulting presentation standards:

```text
+---------------------------------------------------------------------------------------+
|  [■] KICKER / TRACKER (11-12px Uppercase, #C8102E Crimson, tracked out 0.14em)        |
|  ACTION TITLE (22-26px Bold Serif, e.g. Merriweather, complete takeaway sentence)     |
|  -----------------------------------------------------------------------------------  |
|                                                                                       |
|  MAIN CONTENT ZONE (~78% of vertical canvas)                                          |
|  - Structured cards (1px #E5E7EB border, #F9FAFB or white fill, 16px padding)         |
|  - Charts (MetricBarChart, WaterfallChart, TrendLineChart, 2x2 Matrix)                |
|  - Executive Callout Boxes (BCG-style with 4px left crimson border)                  |
|                                                                                       |
|  -----------------------------------------------------------------------------------  |
|  Source: Market Diagnostic & Transformation Study        CONFIDENTIAL | Slide 03 / 06 |
+---------------------------------------------------------------------------------------+
```

### 1. Tracker / Kicker (Top-Left)
- Font size: `11px - 12px`, uppercase, `letter-spacing: 0.14em`, font-weight `700`.
- Color: Crimson Accent (`#C8102E`).
- Establishes workstream or functional context (e.g. `MARKET DYNAMICS | ADDRESSABLE OPPORTUNITY`).

### 2. Action Title (Directly below Kicker)
- Font size: `22px - 26px`, font family `Merriweather` (or serif), font-weight `700`, line height `1.25`.
- **Must be a complete declarative sentence** stating the quantitative takeaway or conclusion — never a passive topic label like "Market Overview".

### 3. Main Content Area
- Clean desktop grid: 2-column, 3-column, or split chart/callout layout.
- High visual density without clutter; margins and padding strictly measured (`16px - 24px` gaps).

### 4. Fixed Footer Zone
- Bottom edge, separated by a 1px `#E5E7EB` hairline divider.
- Left: Source attribution in italic slate (`10px - 11px`).
- Right: Bold Crimson `CONFIDENTIAL` marker + Tabular slide counter (`Slide 03 / 06`).

---

## 3. MBB Design Tokens (`src/theme.ts`)

```typescript
export const MBB_THEME = {
  colors: {
    primary: '#C8102E',        // Signature Crimson Red (key highlights, focus metrics)
    primaryDark: '#990000',    // Dark Crimson (hover states, annotations)
    primaryLight: '#FFF1F2',   // Subtle Crimson Tint (badges, container fills)
    primaryBorder: '#FECDD3',  // Border for highlighted cards
    
    navy: '#1E293B',           // Deep Navy Slate (secondary series, headers)
    slate: '#475569',          // Slate Grey (neutral series, baseline bars)
    slateMuted: '#6B7280',     // Muted Slate (axis lines, footnotes, sublabels)
    
    background: '#FFFFFF',     // Pure White (slide canvas)
    backgroundAlt: '#F9FAFB',  // Light Container / Card Background
    cardBorder: '#E5E7EB',     // Crisp 1px card divider
    
    textDark: '#111827',       // Ink Black / Charcoal (body & headings)
    textMuted: '#6B7280',      // Muted metadata & source lines
    
    success: '#059669',        // Positive variance green
    danger: '#DC2626',         // Negative variance red
  },
  fonts: {
    serif: 'Merriweather, Georgia, serif',
    sans: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif',
  },
};
```

---

## 4. Minimal Navigation & PDF Export Architecture

### Minimal Navigation Bar (`DeckNavigation.tsx`)
The user interface is intentionally minimal, unobtrusive, and floating at the bottom center:
- **Previous Button (`<`)**: Decrements slide index; disabled on Slide 1.
- **Slide Indicator**: Tabular counter `01 / 06` with discrete interactive slide dots for jumping.
- **Next Button (`>`)**: Increments slide index; disabled on Slide 6.
- **Export PDF Button**: Triggers the vector print preparation and browser print dialog.
- **Fullscreen Button (`[ ]`)**: Toggles native browser presentation fullscreen mode.
- **Keyboard Shortcuts**:
  - `→`, `↓`, `PageDown`, `Space`: Next slide.
  - `←`, `↑`, `PageUp`: Previous slide.
  - `Home`: First slide.
  - `End`: Last slide.
  - `F`: Toggle Fullscreen.
  - `P`: Export to PDF.

### High-Resolution Vector PDF Export via `@media print`
Unlike rasterized screenshot libraries (`html2canvas`) which produce blurry text and broken margins, the deck leverages browser-native **vector print stylesheets**:

```css
/* src/index.css */
@media print {
  @page {
    size: 297mm 167mm; /* Exact 16:9 Widescreen Landscape Ratio */
    margin: 0;
  }
  html, body {
    background-color: #ffffff !important;
    color: #111827 !important;
    margin: 0 !important;
    padding: 0 !important;
    print-color-adjust: exact;
    -webkit-print-color-adjust: exact;
  }
  .no-print {
    display: none !important;
  }
  .print-only {
    display: block !important;
  }
  .print-slide-page {
    width: 297mm !important;
    height: 167mm !important;
    page-break-after: always !important;
    break-after: page !important;
    overflow: hidden !important;
    box-shadow: none !important;
    border: none !important;
  }
}
```

When the user clicks **Export PDF**, all slides are rendered sequentially into the print container, instantly formatted into multi-page landscape PDF with zero UI chrome.

---

## 5. Master Deck Orchestrator Pattern (`src/components/MasterDeck.tsx`)

```tsx
import React, { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { SLIDES_REGISTRY, TOTAL_SLIDES } from '../slides/slidesConfig';
import { DeckNavigation } from './DeckNavigation';
import { PrintDeckView } from './PrintDeckView';

export const MasterDeck: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isExportModalOpen, setIsExportModalOpen] = useState<boolean>(false);
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handlePrev = useCallback(() => setCurrentIndex((p) => Math.max(0, p - 1)), []);
  const handleNext = useCallback(() => setCurrentIndex((p) => Math.min(TOTAL_SLIDES - 1, p + 1)), []);
  const handleJumpTo = useCallback((i: number) => setCurrentIndex(i), []);

  const CurrentSlide = SLIDES_REGISTRY[currentIndex].component;

  return (
    <div ref={containerRef} className="relative w-screen h-screen bg-[#0F172A] flex items-center justify-center overflow-hidden">
      {/* 16:9 Desktop Presentation Canvas */}
      <main className="relative w-full h-full max-w-[1720px] max-h-[960px] p-4 md:p-6 lg:p-8 flex items-center justify-center">
        <div className="relative w-full aspect-[16/9] max-h-full bg-white shadow-2xl rounded-sm border border-neutral-300/40 overflow-hidden flex flex-col">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.24, ease: [0.16, 1, 0.3, 1] }}
              className="w-full h-full flex-1"
            >
              <CurrentSlide totalSlides={TOTAL_SLIDES} />
            </motion.div>
          </AnimatePresence>
        </div>
      </main>

      {/* Minimal Floating Navigation */}
      <div className="no-print absolute bottom-4 sm:bottom-6 z-40">
        <DeckNavigation
          currentIndex={currentIndex}
          totalSlides={TOTAL_SLIDES}
          onPrev={handlePrev}
          onNext={handleNext}
          onJumpTo={handleJumpTo}
          onExportPdf={() => setIsExportModalOpen(true)}
          isFullscreen={isFullscreen}
          onToggleFullscreen={() => {
            if (!document.fullscreenElement) containerRef.current?.requestFullscreen?.();
            else document.exitFullscreen?.();
          }}
        />
      </div>

      {/* Print / PDF Engine */}
      <PrintDeckView
        isOpen={isExportModalOpen}
        onClose={() => setIsExportModalOpen(false)}
        onTriggerBrowserPrint={() => window.print()}
      />
    </div>
  );
};
```

---

## 6. Motion & Animation Principles

All animations adhere to **Executive Subtlety**:
- **Slide Transitions**: Smooth cross-fade with a tiny 6px vertical drift (`opacity: 0 → 1`, `y: 6 → 0`, `duration: 0.24s`).
- **Charts / Bars Reveal**: Smooth height expansion (`ease: [0.16, 1, 0.3, 1]`, duration `0.45s`).
- **Forbidden**: No bouncy springs, 3D rotations, zoom explosions, or playful wobbles.

---

## 7. Migration Checklist (Remotion → React + Tailwind)

| Feature | Remotion Video Edition | React + Tailwind Desktop Edition |
| :--- | :--- | :--- |
| **Runtime** | Headless video rendering engine | Live desktop React web application |
| **Slide Navigation** | Video scrubber / timestamp frames | Interactive minimal toolbar + keyboard (`←`/`→`/`Space`) |
| **Slide Isolation** | One video sequence composition | Modular TSX components (`src/slides/SlideXX_*.tsx`) |
| **Master Orchestrator** | Remotion `<Series>` / `<Sequence>` | `MasterDeck.tsx` + `slidesConfig.ts` registry |
| **Styling** | Inline CSS objects | Tailwind CSS utility classes |
| **Animation Engine** | `useCurrentFrame()` + `interpolate()` | `motion/react` subtle layout transitions |
| **Export Format** | MP4 Video / WebM | Native High-Resolution 16:9 PDF (`@media print`) |
| **Responsiveness** | Fixed 1920x1080 canvas | Fully responsive desktop stage with locked 16:9 aspect ratio |
| **Icons** | `lucide-react` | `lucide-react` with standardized `IconBadge` |
