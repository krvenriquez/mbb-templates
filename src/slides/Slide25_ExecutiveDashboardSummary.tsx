import React from 'react';
import { SlideLayout } from '../components/SlideLayout';
import { useDeckTheme } from '../context/ThemeContext';
import { TrendingUp, ShieldAlert, CheckCircle2, ArrowRight, DollarSign } from 'lucide-react';

/**
 * ==============================================================================
 * SLIDE TEMPLATE: EXECUTIVE SYNTHESIS DASHBOARD
 * ==============================================================================
 * 
 * WHEN TO USE THIS TEMPLATE:
 * --------------------------
 * 1. Board & Executive Committee Synthesis: The quintessential slide delivering
 *    the Bottom Line Up Front (BLUF) across diagnostic, strategic imperative, and upside.
 * 2. Steering Committee Gate Approvals: Positioning immediate investment decision
 *    requests alongside empirical return-on-investment guarantees.
 * ==============================================================================
 */

interface SlideProps {
  totalSlides: number;
}

export const Slide25_ExecutiveDashboardSummary: React.FC<SlideProps> = ({ totalSlides }) => {
  const { dominantColor, headerFont } = useDeckTheme();
  const fontClass = headerFont === 'sans' ? 'font-sans' : 'font-serif';

  return (
    <SlideLayout
      slideNumber={6}
      totalSlides={totalSlides}
      kicker="[EXECUTIVE BRIEFING] | STRATEGIC SYNTHESIS & GOVERNANCE GATES"
      actionTitle="[Action Title: Target Operating Model unlocks $XXXM EBITDA run-rate by FYXX; immediate board approval requested for Tranche-1 capital release]"
      sourceText="Source: [Steering Committee Working Model / Comprehensive Diagnostic & Financial Business Case (YYYY)]"
      categoryTag="EXECUTIVE STEERING COMMITTEE"
    >
      <div className="h-full flex flex-col justify-between gap-3">
        {/* Top 4 Key Metric Badges */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 shrink-0">
          <div className="p-3 rounded-xl border border-neutral-200 bg-neutral-50/70 flex flex-col justify-between">
            <span className="text-[10px] font-mono font-bold text-neutral-500 uppercase tracking-wider">
              [Total EBITDA Unlock]
            </span>
            <div className="flex items-baseline gap-1.5 my-1">
              <span className="text-xl sm:text-2xl font-mono font-bold text-neutral-900">
                [+$XXXM]
              </span>
              <span className="text-xs font-mono font-bold text-emerald-600">[Run-rate]</span>
            </div>
            <span className="text-[10px] text-neutral-500">[Target reached by QX FYXXXX]</span>
          </div>

          <div className="p-3 rounded-xl border border-neutral-200 bg-neutral-50/70 flex flex-col justify-between">
            <span className="text-[10px] font-mono font-bold text-neutral-500 uppercase tracking-wider">
              [Program ROI Multiple]
            </span>
            <div className="flex items-baseline gap-1.5 my-1">
              <span className="text-xl sm:text-2xl font-mono font-bold text-neutral-900">
                [X.Xx]
              </span>
              <span className="text-xs font-mono font-bold text-emerald-600">[Net IRR XX%]</span>
            </div>
            <span className="text-[10px] text-neutral-500">[Based on $XXXM cumulative capex]</span>
          </div>

          <div className="p-3 rounded-xl border border-neutral-200 bg-neutral-50/70 flex flex-col justify-between">
            <span className="text-[10px] font-mono font-bold text-neutral-500 uppercase tracking-wider">
              [Capital Payback Horizon]
            </span>
            <div className="flex items-baseline gap-1.5 my-1">
              <span className="text-xl sm:text-2xl font-mono font-bold text-neutral-900">
                [XX Mo.]
              </span>
              <span className="text-xs font-mono font-bold text-neutral-600">[Breakeven]</span>
            </div>
            <span className="text-[10px] text-neutral-500">[Cash positive by Month XX]</span>
          </div>

          <div className="p-3 rounded-xl border border-neutral-200 bg-neutral-50/70 flex flex-col justify-between">
            <span
              className="text-[10px] font-mono font-bold uppercase tracking-wider text-neutral-600"
            >
              [First-Year Tranche Need]
            </span>
            <div className="flex items-baseline gap-1.5 my-1">
              <span className="text-xl sm:text-2xl font-mono font-bold text-neutral-900">
                [$XX.XM]
              </span>
              <span className="text-xs font-mono font-bold text-neutral-700">[Tranche-1]</span>
            </div>
            <span className="text-[10px] text-neutral-600 font-medium">[Pre-allocated in FYXX budget]</span>
          </div>
        </div>

        {/* Center 3 Core Synthesized Pillar Cards */}
        <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-4 min-h-0">
          {/* Card 1: The Diagnostic & Burning Platform */}
          <div className="p-4 rounded-xl border border-neutral-200 bg-white flex flex-col justify-between shadow-2xs">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <ShieldAlert size={16} className="text-neutral-700 shrink-0" />
                <span className="text-xs font-bold font-mono uppercase tracking-wider text-neutral-700">
                  [1. Diagnostic Reality]
                </span>
              </div>
              <h4 className="text-sm font-bold text-neutral-900">
                [Core Diagnostic Headline: Operating Inefficiencies Erode Margins]
              </h4>
              <p className="text-xs text-neutral-600 leading-relaxed">
                [Detail baseline diagnostic findings, operational cost inflation, and legacy system redundancy in 2-3 concise lines.]
              </p>
            </div>
            <div className="pt-3 border-t border-neutral-100 text-[11px] font-mono text-neutral-500">
              [Risk: Detail quantified impact of inaction / margin erosion]
            </div>
          </div>

          {/* Card 2: The Transformation Strategy */}
          <div className="p-4 rounded-xl border border-neutral-200 bg-white flex flex-col justify-between shadow-2xs">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <TrendingUp size={16} style={{ color: dominantColor.hex }} className="shrink-0" />
                <span
                  className="text-xs font-bold font-mono uppercase tracking-wider"
                  style={{ color: dominantColor.hex }}
                >
                  [2. Strategic Pivot]
                </span>
              </div>
              <h4 className="text-sm font-bold text-neutral-900">
                [Target Operating Architecture & Modernization Vector]
              </h4>
              <p className="text-xs text-neutral-600 leading-relaxed">
                [Detail proposed strategic intervention, modern architecture consolidation, and capacity unlock in 2-3 concise lines.]
              </p>
            </div>
            <div className="pt-3 border-t border-neutral-100 text-[11px] font-mono text-neutral-500">
              [Impact: Detail target operating model consolidation / efficiency]
            </div>
          </div>

          {/* Card 3: The Economic Payoff */}
          <div className="p-4 rounded-xl border border-neutral-200 bg-white flex flex-col justify-between shadow-2xs">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-emerald-600 shrink-0" />
                <span className="text-xs font-bold font-mono uppercase tracking-wider text-emerald-700">
                  [3. Sustainable Payoff]
                </span>
              </div>
              <h4 className="text-sm font-bold text-neutral-900">
                [$XXXM Run-Rate Value & Multiple Expansion]
              </h4>
              <p className="text-xs text-neutral-600 leading-relaxed">
                [Detail bottom-line EBITDA expansion, high-margin revenue mix shift, and multiple expansion potential in 2-3 lines.]
              </p>
            </div>
            <div className="pt-3 border-t border-neutral-100 text-[11px] font-mono text-neutral-500">
              [Outcome: Detail breakeven horizon and value creation multiple]
            </div>
          </div>
        </div>

        {/* Bottom Executive Decision Request Dock */}
        <div className="p-3 rounded-xl border border-neutral-200 bg-neutral-900 text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 shrink-0 shadow-md">
          <div className="space-y-0.5">
            <div className="flex items-center gap-2">
              <span
                className="w-2 h-2 rounded-full"
                style={{ backgroundColor: dominantColor.hex }}
              />
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-neutral-200">
                [Steering Committee Action Requested]
              </span>
            </div>
            <p className="text-xs text-neutral-300">
              [1. Authorize $XX.XM Tranche-1 capital allocation for pilot phase &nbsp;|&nbsp; 2. Sanction Program Charter & TMO Governance Mandate]
            </p>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
};
