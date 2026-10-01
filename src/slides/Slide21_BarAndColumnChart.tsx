import React, { useState } from 'react';
import { SlideLayout } from '../components/SlideLayout';
import { useDeckTheme } from '../context/ThemeContext';
import { TrendingUp, Percent, ArrowUpRight } from 'lucide-react';

/**
 * ==============================================================================
 * SLIDE TEMPLATE: PAIRED BAR & COLUMN CHART DIAGNOSTIC
 * ==============================================================================
 * 
 * WHEN TO USE THIS TEMPLATE:
 * --------------------------
 * 1. Volume vs. Margin Trade-Off Analysis: Comparing top-line revenue scale (Vertical Columns)
 *    directly against unit profitability and margin density (Horizontal Bars).
 * 2. Strategic Portfolio Rationalization: Identifying high-growth, high-margin products
 *    to prioritize over legacy, low-margin cash cows.
 * 3. Commercial Due Diligence & Segment Performance: Demonstrating that enterprise
 *    mix shift delivers disproportionate EBITDA expansion.
 * ==============================================================================
 */

interface SlideProps {
  totalSlides: number;
}

interface SegmentData {
  id: string;
  name: string;
  revenue: number; // in $ Millions
  yoyGrowth: string;
  grossMargin: number; // Percentage
  nrr: number; // Net Revenue Retention %
}

const SEGMENTS: SegmentData[] = [
  { id: 'ai', name: 'Applied AI & Automation', revenue: 480, yoyGrowth: '+54%', grossMargin: 78, nrr: 132 },
  { id: 'cloud', name: 'Enterprise Cloud Platform', revenue: 920, yoyGrowth: '+28%', grossMargin: 65, nrr: 118 },
  { id: 'data', name: 'Data Engineering & Mesh', revenue: 340, yoyGrowth: '+22%', grossMargin: 61, nrr: 112 },
  { id: 'legacy', name: 'Legacy On-Prem Systems', revenue: 610, yoyGrowth: '-12%', grossMargin: 38, nrr: 89 },
];

export const Slide21_BarAndColumnChart: React.FC<SlideProps> = ({ totalSlides }) => {
  const { dominantColor, headerFont } = useDeckTheme();
  const fontClass = headerFont === 'sans' ? 'font-sans' : 'font-serif';
  const [activeSegment, setActiveSegment] = useState<string | null>(null);

  const maxRevenue = 1000;
  const maxMargin = 100;

  return (
    <SlideLayout
      slideNumber={13}
      totalSlides={totalSlides}
      kicker="[PORTFOLIO ECONOMICS] | VOLUME VS. MARGIN DIVERGENCE"
      actionTitle="[Action Title: Revenue mix shift towards modern platforms expands gross margins from XX% to XX% despite legacy attrition]"
      sourceText="Source: [Finance & Strategy Management Accounts / Segment Unit Economics Review (YYYY)]"
      categoryTag="COMMERCIAL DIAGNOSTIC"
    >
      <div className="h-full flex flex-col justify-between gap-3">
        {/* Top Highlight Summary Banner */}
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-2.5 shrink-0">
          <div className="p-2.5 rounded-lg border border-neutral-200 bg-neutral-50 flex items-center justify-between">
            <div>
              <span className="text-[10px] font-mono text-neutral-500 uppercase font-bold block">
                Total Portfolio ARR
              </span>
              <span className="text-base sm:text-lg font-mono font-bold text-neutral-900">
                $2,350M
              </span>
            </div>
            <span className="text-xs font-mono font-bold text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-200">
              +19% YoY
            </span>
          </div>

          <div className="p-2.5 rounded-lg border border-neutral-200 bg-neutral-50 flex items-center justify-between">
            <div>
              <span className="text-[10px] font-mono text-neutral-500 uppercase font-bold block">
                Blended Gross Margin
              </span>
              <span className="text-base sm:text-lg font-mono font-bold text-neutral-900">
                62.4%
              </span>
            </div>
            <span className="text-xs font-mono font-bold text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-200">
              +480 bps
            </span>
          </div>

          <div className="p-2.5 rounded-lg border border-neutral-200 bg-neutral-50 flex items-center justify-between">
            <div>
              <span className="text-[10px] font-mono text-neutral-500 uppercase font-bold block">
                Average NRR
              </span>
              <span className="text-base sm:text-lg font-mono font-bold text-neutral-900">
                116%
              </span>
            </div>
            <span className="text-xs font-mono font-bold text-neutral-600 bg-neutral-200/60 px-1.5 py-0.5 rounded">
              Top Quartile
            </span>
          </div>

          <div
            className="p-2.5 rounded-lg border flex items-center justify-between"
            style={{
              backgroundColor: dominantColor.lightHex,
              borderColor: dominantColor.borderHex,
            }}
          >
            <div>
              <span
                className="text-[10px] font-mono uppercase font-bold block"
                style={{ color: dominantColor.hex }}
              >
                Primary Growth Engine
              </span>
              <span className="text-xs sm:text-sm font-bold text-neutral-900">
                Applied AI (+54% YoY)
              </span>
            </div>
            <ArrowUpRight size={18} style={{ color: dominantColor.hex }} />
          </div>
        </div>

        {/* Dual Chart Canvas */}
        <div className="flex-1 grid grid-cols-1 lg:grid-cols-12 gap-4 min-h-0">
          {/* LEFT 50%: Vertical Column Chart (Top-Line Revenue Scale) */}
          <div className="lg:col-span-6 flex flex-col justify-between p-3.5 rounded-xl border border-neutral-200 bg-white shadow-2xs">
            <div className="flex items-center justify-between mb-2">
              <div>
                <h4 className="text-xs font-bold text-neutral-900 uppercase tracking-wide">
                  Top-Line Revenue Scale ($M ARR)
                </h4>
                <p className="text-[11px] text-neutral-500">
                  Annual recurring revenue with YoY trajectory
                </p>
              </div>
              <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-neutral-100 text-neutral-600">
                Vertical Columns
              </span>
            </div>

            {/* Column Bars Area */}
            <div className="flex-1 flex items-end justify-between gap-3 pt-6 pb-2 border-b border-neutral-200">
              {SEGMENTS.map((s) => {
                const heightPct = (s.revenue / maxRevenue) * 100;
                const isSelected = activeSegment === s.id;
                return (
                  <div
                    key={s.id}
                    onMouseEnter={() => setActiveSegment(s.id)}
                    onMouseLeave={() => setActiveSegment(null)}
                    className="flex-1 flex flex-col items-center gap-1.5 h-full justify-end cursor-pointer group"
                  >
                    {/* Top Data Tag */}
                    <div className="text-center">
                      <span className="text-xs font-mono font-bold text-neutral-900 block">
                        ${s.revenue}M
                      </span>
                      <span
                        className={`text-[10px] font-mono font-bold ${
                          s.yoyGrowth.startsWith('+') ? 'text-emerald-600' : 'text-rose-600'
                        }`}
                      >
                        {s.yoyGrowth}
                      </span>
                    </div>

                    {/* Column Pillar */}
                    <div
                      className="w-full rounded-t-md transition-all duration-200 relative group-hover:brightness-110"
                      style={{
                        height: `${heightPct}%`,
                        backgroundColor:
                          isSelected || !activeSegment
                            ? s.id === 'ai'
                              ? dominantColor.hex
                              : '#1E293B'
                            : '#94A3B8',
                      }}
                    >
                      {s.id === 'ai' && (
                        <span className="absolute -top-3 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full animate-ping bg-rose-400" />
                      )}
                    </div>

                    {/* Segment Label */}
                    <span className="text-[10px] font-semibold text-neutral-700 text-center line-clamp-1 group-hover:text-neutral-900">
                      {s.name.split(' ')[0]}
                    </span>
                  </div>
                );
              })}
            </div>
            <div className="text-[10px] text-neutral-400 font-mono text-center pt-1.5">
              Hover over segments to synchronize cross-chart diagnostics
            </div>
          </div>

          {/* RIGHT 50%: Horizontal Bar Chart (Margin & Economics Density) */}
          <div className="lg:col-span-6 flex flex-col justify-between p-3.5 rounded-xl border border-neutral-200 bg-white shadow-2xs">
            <div className="flex items-center justify-between mb-2">
              <div>
                <h4 className="text-xs font-bold text-neutral-900 uppercase tracking-wide">
                  Profitability & Retention Metrics (%)
                </h4>
                <p className="text-[11px] text-neutral-500">
                  Gross Margin % (filled bar) & Net Retention % (tag)
                </p>
              </div>
              <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-neutral-100 text-neutral-600">
                Horizontal Bars
              </span>
            </div>

            {/* Horizontal Bars Stack */}
            <div className="flex-1 flex flex-col justify-around py-1">
              {SEGMENTS.map((s) => {
                const widthPct = (s.grossMargin / maxMargin) * 100;
                const isSelected = activeSegment === s.id;
                return (
                  <div
                    key={s.id}
                    onMouseEnter={() => setActiveSegment(s.id)}
                    onMouseLeave={() => setActiveSegment(null)}
                    className={`p-1.5 rounded-lg transition-all cursor-pointer ${
                      isSelected ? 'bg-neutral-100/80' : 'hover:bg-neutral-50'
                    }`}
                  >
                    <div className="flex items-center justify-between text-xs mb-1">
                      <span className="font-semibold text-neutral-800 text-[11px] truncate">
                        {s.name}
                      </span>
                      <div className="flex items-center gap-2 font-mono text-[11px]">
                        <span className="font-bold text-neutral-900">{s.grossMargin}% GM</span>
                        <span className="text-[10px] px-1.5 py-0.2 rounded bg-neutral-200/80 text-neutral-700">
                          {s.nrr}% NRR
                        </span>
                      </div>
                    </div>

                    {/* Bar Track */}
                    <div className="h-4 w-full bg-neutral-100 rounded-full overflow-hidden p-0.5">
                      <div
                        className="h-full rounded-full transition-all duration-300"
                        style={{
                          width: `${widthPct}%`,
                          backgroundColor:
                            isSelected || !activeSegment
                              ? s.id === 'ai'
                                ? dominantColor.hex
                                : '#334155'
                              : '#CBD5E1',
                        }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="pt-2 border-t border-neutral-100 flex items-center justify-between text-[11px] text-neutral-600">
              <span className="font-mono text-[10px] text-neutral-400">Target Threshold: 65% GM</span>
              <span className="font-semibold text-emerald-700">
                2 of 4 segments currently meet enterprise threshold
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Strategic Takeaway */}
        <div className="p-2.5 rounded-lg border border-neutral-200 bg-neutral-50/70 flex items-center justify-between shrink-0 text-xs text-neutral-700">
          <div className="flex items-center gap-2">
            <span
              className="w-2 h-2 rounded-full shrink-0"
              style={{ backgroundColor: dominantColor.hex }}
            />
            <span className="font-semibold text-neutral-900">
              [Executive Steering Recommendation]:
            </span>
            <span>
              [Reallocate XX% of maintenance R&D from legacy systems into core growth platforms to capture $XXXM margin expansion by QX YYYY.]
            </span>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
};
