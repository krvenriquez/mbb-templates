import React from 'react';
import { SlideLayout } from '../components/SlideLayout';
import { WaterfallChart } from '../components/charts/WaterfallChart';
import { CalloutBox } from '../components/CalloutBox';
import { useDeckTheme } from '../context/ThemeContext';
import { WaterfallStep } from '../types';
import { ArrowRight, Sparkles, SlidersHorizontal } from 'lucide-react';

/**
 * ==============================================================================
 * SLIDE TEMPLATE: PROFITABILITY WATERFALL (EBITDA WALK / VALUE REALIZATION BRIDGE)
 * ==============================================================================
 * 
 * WHEN TO USE THIS TEMPLATE:
 * --------------------------
 * 1. Operational Turnaround & Cost Reduction: Explaining the bridge from current
 *    depressed margins to target profitability through discrete operational levers.
 * 2. M&A Synergy Walk: Demonstrating how run-rate synergies (SG&A rationalization,
 *    procurement savings) offset integration costs to expand pro-forma EBITDA.
 * 3. Board Budget Reviews: Reconciling annual budget variances (Volume, Price,
 *    Mix, Inflation, Capex Reinvestment) between fiscal years.
 * 4. Value Creation Plan (VCP) in Private Equity: Presenting the 100-day underwriting
 *    thesis connecting entry EBITDA to planned exit enterprise valuation.
 * 
 * CONSULTING GUIDELINES & BEST PRACTICES:
 * ---------------------------------------
 * - MECE Floating Bars: Every step must represent an independent, quantified value driver
 *   (Green for positive EBITDA contributions, Red/Amber for reinvestments or headwinds).
 * - Honest Reinvestment Accounting: Credible consulting models always include negative
 *   reinvestment bars (e.g. Sales Headcount, R&D Capex) required to achieve the upside.
 * - Action Title Rule: Quantify both the baseline, total delta, and net target EBITDA.
 * ==============================================================================
 */

interface SlideProps {
  totalSlides: number;
}

export const Slide04_ProfitabilityWaterfall: React.FC<SlideProps> = ({ totalSlides }) => {
  const { dominantColor } = useDeckTheme();

  const steps: WaterfallStep[] = [
    { label: '[Current Base]', value: 42, formattedValue: '$42M', type: 'base', description: 'Baseline operating EBITDA' },
    { label: '[Pricing Realization]', value: 24, formattedValue: '+$24M', type: 'positive', description: 'Value-based packaging tiers' },
    { label: '[Account Expansion]', value: 38, formattedValue: '+$38M', type: 'positive', description: 'Seat expansion in enterprise' },
    { label: '[COGS / Cloud Efficiency]', value: 14, formattedValue: '+$14M', type: 'positive', description: 'Infrastructure optimization' },
    { label: '[Strategic Reinvestment]', value: -16, formattedValue: '-$16M', type: 'negative', description: 'Sales headcount & compliance' },
    { label: '[Target EBITDA]', value: 102, formattedValue: '$102M', type: 'total', description: 'Target operating EBITDA' },
  ];

  return (
    <SlideLayout
      slideNumber={7}
      totalSlides={totalSlides}
      kicker="[PROFITABILITY BRIDGE] | EBITDA VALUE REALIZATION"
      actionTitle="[Action Title: Bridge the path from baseline profitability to target EBITDA through concrete revenue and cost levers]"
      sourceText="Source: [Internal Value Creation Diagnostic & Finance Workstream Model (YYYY)]"
      categoryTag="VALUE CREATION"
    >
      <div className="h-full grid grid-cols-1 lg:grid-cols-12 gap-4 items-stretch">
        {/* Waterfall Chart Container */}
        <div className="lg:col-span-8 bg-white rounded-md border border-neutral-200 p-4 sm:p-5 flex flex-col justify-between">
          <div className="flex items-center justify-between pb-2 border-b border-neutral-100 mb-2">
            <div className="flex items-center gap-2">
              <SlidersHorizontal size={15} style={{ color: dominantColor.hex }} />
              <h2 className="text-xs sm:text-sm font-bold text-neutral-900">
                [EBITDA Value Realization Bridge ($ Millions)]
              </h2>
            </div>
            <span className="text-[10px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
              [Net EBITDA Expansion: +$XXM (+XX%)]
            </span>
          </div>

          <div className="flex-1 min-h-[170px]">
            <WaterfallChart steps={steps} unit="$" />
          </div>
        </div>

        {/* Right Levers Diagnostic */}
        <div className="lg:col-span-4 flex flex-col justify-between gap-3">
          <CalloutBox
            kicker="[MARGIN EXPANSION THESIS]"
            metric="[XX.X% Target EBITDA]"
            description="[Summarize how pricing discipline and operational rightsizing unlock margin expansion while funding strategic headcount reinvestment.]"
            icon={Sparkles}
            variant="navy"
          />

          <div className="flex-1 bg-neutral-50/70 border border-neutral-200 rounded-md p-3.5 flex flex-col justify-between">
            <div className="text-xs font-bold uppercase tracking-wider text-neutral-800 mb-2">
              [Key Value Levers]
            </div>

            <div className="space-y-2 text-xs text-neutral-700">
              <div className="flex items-start gap-2">
                <ArrowRight size={13} className="shrink-0 mt-0.5" style={{ color: dominantColor.hex }} />
                <div>
                  <span className="font-semibold text-neutral-900">[Lever 1 - Pricing Modernization]:</span>
                  <span className="text-[11px] text-neutral-600 block">[Eliminate discount leakage and deploy value-based price tiers.]</span>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <ArrowRight size={13} className="shrink-0 mt-0.5" style={{ color: dominantColor.hex }} />
                <div>
                  <span className="font-semibold text-neutral-900">[Lever 2 - COGS Optimization]:</span>
                  <span className="text-[11px] text-neutral-600 block">[Renegotiate vendor terms and optimize cloud architecture workloads.]</span>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <ArrowRight size={13} className="shrink-0 mt-0.5" style={{ color: dominantColor.hex }} />
                <div>
                  <span className="font-semibold text-neutral-900">[Lever 3 - Overhead Containment]:</span>
                  <span className="text-[11px] text-neutral-600 block">[Centralize administrative workflows via shared service delivery.]</span>
                </div>
              </div>
            </div>

            <div className="mt-2 pt-2 border-t border-neutral-200/80 text-[10px] text-neutral-500 italic">
              [Sensitivity Analysis: ±10% variation maintains hurdle rate &gt;$XXM outcome]
            </div>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
};
