import React from 'react';
import { SlideLayout } from '../components/SlideLayout';
import { IconBadge } from '../components/IconBadge';
import { useDeckTheme } from '../context/ThemeContext';
import { Globe, Users, Cpu, ArrowUpRight, CheckCircle2 } from 'lucide-react';

/**
 * ==============================================================================
 * SLIDE TEMPLATE: MECE MARKET SIZING & LANDSCAPE DECOMPOSITION (TAM / SAM / SOM)
 * ==============================================================================
 * 
 * WHEN TO USE THIS TEMPLATE:
 * --------------------------
 * 1. Market Entry & Growth Strategy: Quantifying total market headroom and sizing
 *    the addressable versus serviceable demand pools for new geos or products.
 * 2. Commercial Due Diligence (CDD): Sizing underlying market tailwinds, penetration
 *    rates, and structural CAGRs for investment banking and private equity sponsors.
 * 3. Corporate Portfolio Rebalancing: Evaluating which business units operate in
 *    high-growth addressable segments versus commoditizing legacy markets.
 * 4. Business Case & Investor Roadshows: Validating bottom-up market sizing
 *    methodology with verifiable industry data sources.
 * 
 * CONSULTING GUIDELINES & BEST PRACTICES:
 * ---------------------------------------
 * - MECE Filtering Funnel: Structure sizing from macroeconomic Total Addressable
 *   Market (TAM) to Serviceable Addressable Market (SAM) to Serviceable Obtainable
 *   Market (SOM), articulating explicit exclusion criteria at each step.
 * - Triangulation: Reconcile top-down industry analyst estimates with bottom-up
 *   unit-economics calculations (# of target accounts × annual spend).
 * - Action Title Rule: Directly state the accessible headroom and core growth vector.
 * ==============================================================================
 */

interface SlideProps {
  totalSlides: number;
}

export const Slide02_MarketLandscape: React.FC<SlideProps> = ({ totalSlides }) => {
  const { dominantColor, headerFont } = useDeckTheme();
  const fontClass = headerFont === 'sans' ? 'font-sans' : 'font-serif';

  return (
    <SlideLayout
      slideNumber={3}
      totalSlides={totalSlides}
      kicker="[MARKET OPPORTUNITY] | MECE MARKET BREAKDOWN"
      actionTitle="[Action Title: Quantify the expanding TAM/SAM/SOM opportunity and identify the core addressable customer segment]"
      sourceText="Source: [Industry Research / Market Analysis / Primary Customer Survey (YYYY)]"
      categoryTag="MACRO LANDSCAPE"
    >
      <div className="h-full flex flex-col justify-between gap-3 md:gap-4">
        {/* 3-Column Strategic Market Decomposition (MECE) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4 flex-1">
          {/* Column 1 */}
          <div className="p-4 rounded-md border border-neutral-200 bg-white flex flex-col justify-between hover:border-neutral-300 transition-colors">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-[11px] font-bold uppercase tracking-wider text-neutral-500">
                  [01. Total Market (TAM)]
                </span>
                <IconBadge icon={Globe} size={16} variant="outline" />
              </div>
              <div className={`${fontClass} text-2xl font-bold text-neutral-900 mb-1`}>
                [$XX.XB TAM]
              </div>
              <div className="text-[11px] font-semibold text-emerald-700 flex items-center gap-1 mb-2.5">
                <ArrowUpRight size={13} /> [+XX% YoY Market Growth]
              </div>
              <p className="text-xs text-neutral-600 leading-relaxed">
                [Define total market boundary, customer baseline spending trends, and category consolidation catalysts.]
              </p>
            </div>

            <div className="mt-3 pt-2.5 border-t border-neutral-100">
              <div className="text-[10px] uppercase font-bold text-neutral-400 mb-1">Key Driver</div>
              <div className="flex items-center gap-1.5 text-xs text-neutral-800">
                <CheckCircle2 size={13} className="shrink-0" style={{ color: dominantColor.hex }} />
                <span>[Insert primary market acceleration driver]</span>
              </div>
            </div>
          </div>

          {/* Column 2 */}
          <div className="p-4 rounded-md border border-neutral-200 bg-white flex flex-col justify-between hover:border-neutral-300 transition-colors">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-[11px] font-bold uppercase tracking-wider text-neutral-500">
                  [02. Serviceable Market (SAM)]
                </span>
                <IconBadge icon={Users} size={16} variant="outline" />
              </div>
              <div className={`${fontClass} text-2xl font-bold text-neutral-950 mb-1`}>
                [$X.XB SAM]
              </div>
              <div className="text-[11px] font-semibold text-emerald-700 flex items-center gap-1 mb-2.5">
                <ArrowUpRight size={13} /> [+XX% Target Win Rate]
              </div>
              <p className="text-xs text-neutral-600 leading-relaxed">
                [Define precise sweet-spot customer profile, enterprise requirements, compliance thresholds, and willingness to pay.]
              </p>
            </div>

            <div className="mt-3 pt-2.5 border-t border-neutral-100">
              <div className="text-[10px] uppercase font-bold text-neutral-400 mb-1">Key Driver</div>
              <div className="flex items-center gap-1.5 text-xs text-neutral-800">
                <CheckCircle2 size={13} className="shrink-0" style={{ color: dominantColor.hex }} />
                <span>[Insert proprietary product differentiator]</span>
              </div>
            </div>
          </div>

          {/* Column 3 */}
          <div className="p-4 rounded-md border border-neutral-200 bg-white flex flex-col justify-between hover:border-neutral-300 transition-colors">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-[11px] font-bold uppercase tracking-wider text-neutral-500">
                  [03. Obtainable Share (SOM)]
                </span>
                <IconBadge icon={Cpu} size={16} variant="navy" />
              </div>
              <div className={`${fontClass} text-2xl font-bold text-neutral-900 mb-1`}>
                [$X.XB SOM]
              </div>
              <div className="text-[11px] font-semibold text-neutral-700 flex items-center gap-1 mb-2.5">
                <ArrowUpRight size={13} /> [By Year X Post-Launch]
              </div>
              <p className="text-xs text-neutral-600 leading-relaxed">
                [Define realistic market share capture based on sales capacity, partner channels, and competitor reaction times.]
              </p>
            </div>

            <div className="mt-3 pt-2.5 border-t border-neutral-100">
              <div className="text-[10px] uppercase font-bold text-neutral-400 mb-1">Key Driver</div>
              <div className="flex items-center gap-1.5 text-xs text-neutral-800">
                <CheckCircle2 size={13} className="shrink-0" style={{ color: dominantColor.hex }} />
                <span>[Insert sales motion / channel partner lever]</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Strategic Takeaway Bar */}
        <div className="p-3 bg-neutral-100/70 border border-neutral-200 rounded flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-xs">
          <div className="flex items-center gap-2">
            <span className="font-bold text-neutral-900">[STRATEGIC TAKEAWAY]:</span>
            <span className="text-neutral-700">
              [Summarize strategic window of opportunity, customer demand inflection, or competitor displacement timeline.]
            </span>
          </div>
          <span className="font-mono font-semibold shrink-0" style={{ color: dominantColor.hex }}>
            [Execution Window: XX Months]
          </span>
        </div>
      </div>
    </SlideLayout>
  );
};
