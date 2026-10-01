import React, { useState } from 'react';
import { SlideLayout } from '../components/SlideLayout';
import { useDeckTheme } from '../context/ThemeContext';
import { ArrowUpRight, TrendingUp, Layers } from 'lucide-react';

/**
 * ==============================================================================
 * SLIDE TEMPLATE: 100% STACKED BAR MIX SHIFT CHART
 * ==============================================================================
 * 
 * WHEN TO USE THIS TEMPLATE:
 * --------------------------
 * 1. Revenue & Business Model Mix Transformation: Visualizing transition from legacy
 *    perpetual licenses to cloud subscription and AI platforms.
 * 2. Industry Market Share Evolution: Tracking market share capture relative to competitors.
 * 3. Cost Structure Breakdown: Illustrating proportion of fixed vs. variable OPEX over time.
 * ==============================================================================
 */

interface SlideProps {
  totalSlides: number;
}

interface YearMix {
  year: string;
  totalMarket: string;
  slices: {
    id: string;
    label: string;
    percentage: number;
  }[];
}

const STACKED_DATA: YearMix[] = [
  {
    year: '2022',
    totalMarket: '$1.4B',
    slices: [
      { id: 'cloud', label: 'Cloud & AI SaaS', percentage: 22 },
      { id: 'services', label: 'Managed Services', percentage: 25 },
      { id: 'term', label: 'Term Software', percentage: 28 },
      { id: 'legacy', label: 'Legacy Perpetual', percentage: 25 },
    ],
  },
  {
    year: '2023',
    totalMarket: '$1.6B',
    slices: [
      { id: 'cloud', label: 'Cloud & AI SaaS', percentage: 28 },
      { id: 'services', label: 'Managed Services', percentage: 25 },
      { id: 'term', label: 'Term Software', percentage: 26 },
      { id: 'legacy', label: 'Legacy Perpetual', percentage: 21 },
    ],
  },
  {
    year: '2024',
    totalMarket: '$1.9B',
    slices: [
      { id: 'cloud', label: 'Cloud & AI SaaS', percentage: 35 },
      { id: 'services', label: 'Managed Services', percentage: 24 },
      { id: 'term', label: 'Term Software', percentage: 24 },
      { id: 'legacy', label: 'Legacy Perpetual', percentage: 17 },
    ],
  },
  {
    year: '2025',
    totalMarket: '$2.3B',
    slices: [
      { id: 'cloud', label: 'Cloud & AI SaaS', percentage: 42 },
      { id: 'services', label: 'Managed Services', percentage: 25 },
      { id: 'term', label: 'Term Software', percentage: 20 },
      { id: 'legacy', label: 'Legacy Perpetual', percentage: 13 },
    ],
  },
  {
    year: '2026E',
    totalMarket: '$2.8B',
    slices: [
      { id: 'cloud', label: 'Cloud & AI SaaS', percentage: 49 },
      { id: 'services', label: 'Managed Services', percentage: 24 },
      { id: 'term', label: 'Term Software', percentage: 18 },
      { id: 'legacy', label: 'Legacy Perpetual', percentage: 9 },
    ],
  },
];

export const Slide23_HundredPercentStackedBar: React.FC<SlideProps> = ({ totalSlides }) => {
  const { dominantColor, headerFont } = useDeckTheme();
  const fontClass = headerFont === 'sans' ? 'font-sans' : 'font-serif';
  const [highlightId, setHighlightId] = useState<string>('cloud');

  const sliceColors: Record<string, { bg: string; text: string; border: string }> = {
    cloud: { bg: dominantColor.hex, text: '#ffffff', border: dominantColor.hoverHex },
    services: { bg: '#334155', text: '#ffffff', border: '#1E293B' },
    term: { bg: '#94A3B8', text: '#0f172a', border: '#64748B' },
    legacy: { bg: '#E2E8F0', text: '#334155', border: '#CBD5E1' },
  };

  return (
    <SlideLayout
      slideNumber={12}
      totalSlides={totalSlides}
      kicker="[REVENUE MODEL TRANSFORMATION] | 100% STACKED MIX SHIFT"
      actionTitle="[Action Title: Cloud & AI SaaS expands from 22% to 49% of corporate revenue, replacing low-multiple perpetual maintenance]"
      sourceText="Source: [Historical Financial Disclosures & Management Operating Plan (YYYY)]"
      categoryTag="PORTFOLIO TRANSFORMATION"
    >
      <div className="h-full flex flex-col justify-between gap-3">
        {/* Legend and Interactive Toggles */}
        <div className="flex flex-wrap items-center justify-between gap-3 pb-2 border-b border-neutral-200 shrink-0">
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-mono font-bold text-neutral-500 uppercase">
              Revenue Mix Segments:
            </span>
            <div className="flex items-center gap-1.5">
              {[
                { id: 'cloud', label: 'Cloud & AI SaaS (+27pp)' },
                { id: 'services', label: 'Managed Services (-1pp)' },
                { id: 'term', label: 'Term Software (-10pp)' },
                { id: 'legacy', label: 'Legacy Perpetual (-16pp)' },
              ].map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setHighlightId(item.id)}
                  className={`px-2 py-0.5 rounded text-[11px] font-medium transition-all cursor-pointer flex items-center gap-1.5 ${
                    highlightId === item.id
                      ? 'ring-1 ring-neutral-900 font-bold'
                      : 'hover:bg-neutral-100 text-neutral-600'
                  }`}
                >
                  <span
                    className="w-2.5 h-2.5 rounded-sm"
                    style={{ backgroundColor: sliceColors[item.id].bg }}
                  />
                  <span>{item.label}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-2 text-[10px] font-mono font-bold text-neutral-500">
            <span>TOTAL UNIVERSE: 100% NORMALIZED</span>
          </div>
        </div>

        {/* 100% Stacked Chart Canvas */}
        <div className="flex-1 grid grid-cols-1 lg:grid-cols-12 gap-4 min-h-0">
          {/* Main 5-Year Columns (75% Width) */}
          <div className="lg:col-span-9 flex flex-col justify-between p-4 rounded-xl border border-neutral-200 bg-white shadow-2xs">
            <div className="flex-1 flex items-stretch justify-around gap-6 pt-2 pb-1">
              {STACKED_DATA.map((yearData) => (
                <div key={yearData.year} className="flex-1 flex flex-col items-center max-w-[96px]">
                  {/* Total Top Marker */}
                  <span className="text-[11px] font-mono font-bold text-neutral-800 mb-1.5">
                    {yearData.totalMarket}
                  </span>

                  {/* 100% Vertical Bar Stack */}
                  <div className="w-full flex-1 flex flex-col rounded-lg overflow-hidden border border-neutral-300 shadow-2xs">
                    {yearData.slices.map((slice) => {
                      const isHighlighted = highlightId === slice.id;
                      const conf = sliceColors[slice.id];
                      return (
                        <div
                          key={slice.id}
                          className="relative flex items-center justify-center transition-all duration-200 border-b last:border-b-0"
                          style={{
                            height: `${slice.percentage}%`,
                            backgroundColor: conf.bg,
                            color: conf.text,
                            borderColor: conf.border,
                            opacity: highlightId && !isHighlighted ? 0.75 : 1,
                            transform: isHighlighted ? 'scale(1.02)' : 'none',
                            zIndex: isHighlighted ? 10 : 1,
                          }}
                          title={`${slice.label}: ${slice.percentage}%`}
                        >
                          <span className="text-[11px] font-mono font-bold drop-shadow-xs">
                            {slice.percentage}%
                          </span>
                        </div>
                      );
                    })}
                  </div>

                  {/* Year Footer Label */}
                  <div className="mt-2 text-center">
                    <span className="text-xs font-mono font-bold text-neutral-900 block">
                      {yearData.year}
                    </span>
                    <span className="text-[9px] font-mono text-neutral-400 uppercase">
                      Fiscal Year
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-[10px] text-neutral-400 font-mono text-center pt-2 border-t border-neutral-100">
              Columns normalized to 100% total revenue base. Hover/select segment tags above to isolate layer dynamics.
            </div>
          </div>

          {/* Right 25%: Strategic Synthesis & Multiple Expansion */}
          <div className="lg:col-span-3 flex flex-col justify-between p-3.5 rounded-xl border border-neutral-200 bg-neutral-50">
            <div className="space-y-3">
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-neutral-500 block">
                Valuation Multiplier Impact
              </span>

              <div className="p-3 rounded-lg bg-white border border-neutral-200 space-y-1">
                <span className="text-[10px] font-mono text-neutral-400 block">EV / NTM Revenue Multiple</span>
                <div className="flex items-baseline gap-2">
                  <span className="text-xl font-mono font-bold text-neutral-900">7.8x</span>
                  <span className="text-xs font-bold text-emerald-600">+3.2x expansion</span>
                </div>
                <p className="text-[11px] text-neutral-600 pt-1">
                  High recurring SaaS mix drives re-rating against pure-play software peers.
                </p>
              </div>

              <div className="p-3 rounded-lg bg-white border border-neutral-200 space-y-1.5">
                <span className="text-[10px] font-mono font-bold uppercase text-neutral-600 block">
                  Mix Shift Summary
                </span>
                <div className="text-xs space-y-1 text-neutral-700">
                  <div className="flex justify-between">
                    <span>Cloud SaaS Delta:</span>
                    <span className="font-mono font-bold text-emerald-600">+27 pp</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Legacy Erosion:</span>
                    <span className="font-mono font-bold text-rose-600">-16 pp</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-2 rounded bg-neutral-200/50 text-[10px] font-mono text-neutral-600">
              Status: 2026 plan on track to exceed 50% ARR milestone by Q3.
            </div>
          </div>
        </div>

        {/* Bottom Callout */}
        <div className="p-2.5 rounded-lg border border-neutral-200 bg-neutral-50 flex items-center justify-between shrink-0 text-xs">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full" style={{ backgroundColor: dominantColor.hex }} />
            <span className="font-bold text-neutral-900">[Capital Markets Takeaway]:</span>
            <span className="text-neutral-600">
              [Each 10 percentage point migration from Perpetual into Cloud SaaS unlocks an estimated $XXXM incremental enterprise value in public market re-rating.]
            </span>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
};
