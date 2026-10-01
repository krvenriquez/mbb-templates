import React, { useState } from 'react';
import { SlideLayout } from '../components/SlideLayout';
import { useDeckTheme } from '../context/ThemeContext';
import { ArrowUp, ArrowRight, Target, Shield, Zap, RefreshCw } from 'lucide-react';

/**
 * ==============================================================================
 * SLIDE TEMPLATE: 2X2 STRATEGIC PORTFOLIO MATRIX
 * ==============================================================================
 * 
 * WHEN TO USE THIS TEMPLATE:
 * --------------------------
 * 1. Corporate Strategy & Capital Allocation: Classifying business units or product lines
 *    along two strategic dimensions (e.g., Market Attractiveness vs. Competitive Strength).
 * 2. M&A Target Screening & Portfolio Review: Framing acquisitions or divestitures for board review.
 * 3. Product Roadmap Prioritization: Directing R&D investments toward high-conviction quadrants.
 * ==============================================================================
 */

interface SlideProps {
  totalSlides: number;
}

interface PortfolioItem {
  id: string;
  name: string;
  quadrant: 'invest' | 'select' | 'harvest' | 'divest';
  x: number; // 0 to 100 (Competitive Strength)
  y: number; // 0 to 100 (Market Attractiveness)
  revenue: string;
  growth: string;
  strategicAction: string;
}

const ITEMS: PortfolioItem[] = [
  { id: '1', name: 'GenAI Enterprise Engine', quadrant: 'invest', x: 82, y: 88, revenue: '$410M', growth: '+62%', strategicAction: 'Inject $45M growth capex; expand partner ecosystem' },
  { id: '2', name: 'Cloud Security Mesh', quadrant: 'invest', x: 74, y: 78, revenue: '$320M', growth: '+34%', strategicAction: 'Scale global salesforce and enterprise channel tier' },
  { id: '3', name: 'Smart IoT Edge Suite', quadrant: 'select', x: 38, y: 82, revenue: '$180M', growth: '+29%', strategicAction: 'Partner or tuck-in acquisition to fortify distribution' },
  { id: '4', name: 'Core ERP Hosting', quadrant: 'harvest', x: 85, y: 32, revenue: '$680M', growth: '+3%', strategicAction: 'Maximize cash flow; automate tier-1 support operations' },
  { id: '5', name: 'Legacy Mainframe Services', quadrant: 'divest', x: 26, y: 22, revenue: '$220M', growth: '-14%', strategicAction: 'Structure managed carve-out or private equity sale' },
];

export const Slide22_TwoByTwoStrategyMatrix: React.FC<SlideProps> = ({ totalSlides }) => {
  const { dominantColor, headerFont } = useDeckTheme();
  const fontClass = headerFont === 'sans' ? 'font-sans' : 'font-serif';
  const [activeItem, setActiveItem] = useState<PortfolioItem | null>(null);

  return (
    <SlideLayout
      slideNumber={16}
      totalSlides={totalSlides}
      kicker="[PORTFOLIO RATIONALIZATION] | 2X2 STRATEGIC POSITIONING"
      actionTitle="[Action Title: Strategic capital allocation prioritizes high-growth platforms while harvesting legacy infrastructure lines]"
      sourceText="Source: [Executive Committee Portfolio Review / Market Sizing & Strategic Positioning Study (YYYY)]"
      categoryTag="PORTFOLIO STRATEGY"
    >
      <div className="h-full flex flex-col justify-between gap-3">
        {/* Matrix Container */}
        <div className="flex-1 grid grid-cols-1 lg:grid-cols-12 gap-4 min-h-0">
          {/* Left 68%: Interactive 2x2 Canvas */}
          <div className="lg:col-span-8 relative flex flex-col p-4 rounded-xl border border-neutral-200 bg-white shadow-2xs">
            {/* Top Y-Axis Label */}
            <div className="flex items-center gap-1.5 text-[11px] font-mono font-bold text-neutral-500 uppercase pb-1">
              <ArrowUp size={14} className="text-neutral-400" />
              <span>Market Attractiveness & Addressable Growth</span>
            </div>

            {/* Matrix Board */}
            <div className="relative flex-1 grid grid-cols-2 grid-rows-2 gap-2 bg-neutral-50/70 p-2 rounded-lg border border-neutral-200 min-h-[220px]">
              {/* Quadrant 2: Top-Left (Select / Transform) */}
              <div className="p-3 rounded-md border border-dashed border-amber-200 bg-amber-50/40 flex flex-col justify-between">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-amber-700">
                    Selective Acceleration
                  </span>
                  <Zap size={14} className="text-amber-500" />
                </div>
                <span className="text-[10px] text-neutral-500">
                  High market upside; partner or acquire to close capability gap
                </span>
              </div>

              {/* Quadrant 1: Top-Right (Invest to Lead) */}
              <div
                className="p-3 rounded-md border flex flex-col justify-between"
                style={{
                  backgroundColor: dominantColor.lightHex,
                  borderColor: dominantColor.borderHex,
                }}
              >
                <div className="flex items-center justify-between">
                  <span
                    className="text-[10px] font-mono font-bold uppercase tracking-wider"
                    style={{ color: dominantColor.hex }}
                  >
                    Invest to Lead & Scale
                  </span>
                  <Target size={14} style={{ color: dominantColor.hex }} />
                </div>
                <span className="text-[10px] text-neutral-600 font-medium">
                  Core value drivers; aggressive organic investment & global expansion
                </span>
              </div>

              {/* Quadrant 3: Bottom-Left (Divest / Exit) */}
              <div className="p-3 rounded-md border border-dashed border-rose-200 bg-rose-50/40 flex flex-col justify-between">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-rose-700">
                    Restructure / Divest
                  </span>
                  <RefreshCw size={14} className="text-rose-500" />
                </div>
                <span className="text-[10px] text-neutral-500">
                  Sub-scale and contracting; execute managed carve-out or harvest
                </span>
              </div>

              {/* Quadrant 4: Bottom-Right (Harvest / Cash Cow) */}
              <div className="p-3 rounded-md border border-neutral-200 bg-neutral-100/60 flex flex-col justify-between">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-neutral-700">
                    Harvest & Defend
                  </span>
                  <Shield size={14} className="text-neutral-500" />
                </div>
                <span className="text-[10px] text-neutral-500">
                  High market share in stable market; optimize margins to fund growth
                </span>
              </div>

              {/* Plotted Strategic Initiative Nodes */}
              {ITEMS.map((item) => {
                const isSelected = activeItem?.id === item.id;
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setActiveItem(item)}
                    className={`absolute -translate-x-1/2 -translate-y-1/2 rounded-full flex items-center justify-center cursor-pointer transition-all duration-200 shadow-md ${
                      isSelected ? 'ring-3 ring-neutral-900 z-30 scale-110' : 'hover:scale-105 z-20'
                    }`}
                    style={{
                      left: `${item.x}%`,
                      top: `${100 - item.y}%`,
                      width: item.quadrant === 'invest' ? '44px' : '36px',
                      height: item.quadrant === 'invest' ? '44px' : '36px',
                      backgroundColor:
                        item.quadrant === 'invest'
                          ? dominantColor.hex
                          : item.quadrant === 'select'
                          ? '#D97706'
                          : item.quadrant === 'harvest'
                          ? '#1E293B'
                          : '#E11D48',
                    }}
                    title={`${item.name} (${item.revenue})`}
                  >
                    <span className="text-white text-[10px] font-mono font-bold">
                      {item.revenue.replace('M', '')}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Bottom X-Axis Label */}
            <div className="flex items-center justify-end gap-1.5 text-[11px] font-mono font-bold text-neutral-500 uppercase pt-1">
              <span>Relative Competitive Position & Strength</span>
              <ArrowRight size={14} className="text-neutral-400" />
            </div>
          </div>

          {/* Right 32%: Selected Entity Strategic Dossier */}
          <div className="lg:col-span-4 flex flex-col justify-between p-4 rounded-xl border border-neutral-200 bg-neutral-50">
            <div>
              <div className="flex items-center justify-between pb-2 border-b border-neutral-200 mb-3">
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-neutral-500">
                  Strategic Profile
                </span>
                <span className="text-[10px] font-mono text-neutral-400">Click circle to inspect</span>
              </div>

              {activeItem ? (
                <div className="space-y-3">
                  <div>
                    <h4 className="text-sm font-bold text-neutral-900">{activeItem.name}</h4>
                    <span
                      className="text-[10px] font-mono font-bold uppercase px-2 py-0.5 rounded inline-block mt-1"
                      style={{
                        backgroundColor: dominantColor.lightHex,
                        color: dominantColor.hex,
                      }}
                    >
                      Quadrant: {activeItem.quadrant.toUpperCase()}
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-2 pt-1">
                    <div className="p-2 rounded bg-white border border-neutral-200">
                      <span className="text-[10px] font-mono text-neutral-400 block">Annual Revenue</span>
                      <span className="text-sm font-mono font-bold text-neutral-900">{activeItem.revenue}</span>
                    </div>
                    <div className="p-2 rounded bg-white border border-neutral-200">
                      <span className="text-[10px] font-mono text-neutral-400 block">Trajectory</span>
                      <span className="text-sm font-mono font-bold text-emerald-600">{activeItem.growth} YoY</span>
                    </div>
                  </div>

                  <div className="p-2.5 rounded-lg bg-white border border-neutral-200 space-y-1">
                    <span className="text-[10px] font-mono font-bold text-neutral-500 uppercase block">
                      Steering Mandate
                    </span>
                    <p className="text-xs text-neutral-700 leading-relaxed">
                      {activeItem.strategicAction}
                    </p>
                  </div>
                </div>
              ) : (
                <div className="text-center py-8 space-y-2 text-neutral-400">
                  <Target size={28} className="mx-auto text-neutral-300" />
                  <p className="text-xs">Select any node on the 2x2 matrix to view unit economics and strategic guidance.</p>
                </div>
              )}
            </div>

            <div className="pt-3 border-t border-neutral-200">
              <span className="text-[10px] font-mono text-neutral-400 block">
                Total Plotted Assets: 5 BUs ($1,810M ARR)
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="p-2.5 rounded-lg border border-neutral-200 bg-white flex items-center justify-between shrink-0 text-xs">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full" style={{ backgroundColor: dominantColor.hex }} />
            <span className="font-bold text-neutral-900">[Capital Deployment Thesis]:</span>
            <span className="text-neutral-600">
              [Funding 100% of the $XXM strategic innovation capex via cash generated from legacy harvest without expanding corporate debt.]
            </span>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
};
