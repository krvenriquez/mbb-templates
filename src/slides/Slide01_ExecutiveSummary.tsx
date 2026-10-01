import React from 'react';
import { SlideLayout } from '../components/SlideLayout';
import { IconBadge } from '../components/IconBadge';
import { CalloutBox } from '../components/CalloutBox';
import { useDeckTheme } from '../context/ThemeContext';
import { ShieldCheck, Target, TrendingUp, Layers, ChevronRight } from 'lucide-react';

/**
 * ==============================================================================
 * SLIDE TEMPLATE: EXECUTIVE SUMMARY & STRATEGIC MANDATE (3-PILLAR SYNTHESIS)
 * ==============================================================================
 * 
 * WHEN TO USE THIS TEMPLATE:
 * --------------------------
 * 1. C-Suite & Board Readouts: Positioned immediately after the title/agenda to deliver
 *    the executive bottom line upfront (BLUF / Minto Pyramid Principle).
 * 2. Strategy Synthesis & Diagnostic Readouts: Summarizing multi-month engagements
 *    into 3 core value pillars, an analytical hypothesis checklist, and key governance takeaways.
 * 3. Commercial Due Diligence (CDD) Executive Memos: Presenting investment thesis,
 *    market conviction, and value creation upside to investment committees.
 * 4. Enterprise Turnaround Mandates: Framing the burning platform and quantifying
 *    the 3 primary levers required for financial recovery.
 * 
 * CONSULTING GUIDELINES & BEST PRACTICES:
 * ---------------------------------------
 * - Action Title Rule: Answer the definitive "So What?" immediately. Do not use
 *   descriptive topic titles like "Executive Summary"; state the quantitative value unlock.
 * - Rule of Three: Standard consulting rigor groups strategic priorities into 3 MECE
 *   pillars (e.g. Growth/Revenue, Margin/Cost, Operating Enablers).
 * - Hypothesis Checklist: Clearly distinguish between validated strategic findings
 *   and initiatives currently undergoing financial modeling.
 * ==============================================================================
 */

interface SlideProps {
  totalSlides: number;
}

export const Slide01_ExecutiveSummary: React.FC<SlideProps> = ({ totalSlides }) => {
  const { dominantColor, headerFont } = useDeckTheme();
  const fontClass = headerFont === 'sans' ? 'font-sans' : 'font-serif';

  return (
    <SlideLayout
      slideNumber={2}
      totalSlides={totalSlides}
      kicker="[EXECUTIVE BRIEFING] | STRATEGIC MANDATE"
      actionTitle="[Action Title: State the primary quantitative conclusion answering 'So What?' in one declarative sentence, e.g., Strategic realignment unlocks $X.XB incremental value by YYYY]"
      sourceText="Source: [Internal Strategic Transformation Study & Board Working Model (YYYY)]"
      categoryTag="EXECUTIVE STEERING COMMITTEE"
    >
      <div className="h-full flex flex-col justify-between gap-3">
        {/* Top 3 Core Value Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 shrink-0">
          <div className="p-3.5 rounded-md border border-neutral-200 bg-neutral-50/50 flex flex-col justify-between">
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-[10px] font-bold uppercase tracking-wider text-neutral-500">
                [Pillar I: Scale & Revenue]
              </span>
              <IconBadge icon={Target} size={15} variant="primary" />
            </div>
            <div className={`${fontClass} text-xl sm:text-2xl font-bold text-neutral-950 mb-1`}>
              [$XXXM Target ARR]
            </div>
            <div className="text-xs text-neutral-600 leading-relaxed">
              [Detail primary growth lever, market capture strategy, or expansion cohort in 1-2 concise lines.]
            </div>
          </div>

          <div className="p-3.5 rounded-md border border-neutral-200 bg-neutral-50/50 flex flex-col justify-between">
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-[10px] font-bold uppercase tracking-wider text-neutral-500">
                [Pillar II: Margin & Cost]
              </span>
              <IconBadge icon={TrendingUp} size={15} variant="navy" />
            </div>
            <div className={`${fontClass} text-xl sm:text-2xl font-bold text-neutral-950 mb-1`}>
              [+XXX bps EBITDA]
            </div>
            <div className="text-xs text-neutral-600 leading-relaxed">
              [Detail operational efficiencies, procurement harmonization, or cloud optimization levers.]
            </div>
          </div>

          <div className="p-3.5 rounded-md border border-neutral-200 bg-neutral-50/50 flex flex-col justify-between">
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-[10px] font-bold uppercase tracking-wider text-neutral-500">
                [Pillar III: Moat & Retention]
              </span>
              <IconBadge icon={ShieldCheck} size={15} variant="outline" />
            </div>
            <div className={`${fontClass} text-xl sm:text-2xl font-bold text-neutral-950 mb-1`}>
              [XXX% Net Retention]
            </div>
            <div className="text-xs text-neutral-600 leading-relaxed">
              [Detail multi-product bundling, customer switching barriers, or structural defensibility.]
            </div>
          </div>
        </div>

        {/* Middle & Bottom: Structured Executive Summary & Callout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-3.5 items-stretch flex-1 min-h-0">
          <div className="md:col-span-8 p-4 rounded-md border border-neutral-200 bg-white flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Layers size={15} style={{ color: dominantColor.hex }} />
                <span className="text-xs font-bold uppercase tracking-wider text-neutral-800">
                  [Core Board Hypotheses & Diagnostic Findings]
                </span>
              </div>
              <ul className="space-y-2 text-xs text-neutral-700">
                <li className="flex items-start gap-2">
                  <ChevronRight size={14} className="shrink-0 mt-0.5" style={{ color: dominantColor.hex }} />
                  <span>
                    <strong>[Hypothesis 1 - Market Tailwinds]:</strong> [Explain the macro catalyst, customer demand shift, or replacement cycle providing near-term tailwind.]
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight size={14} className="shrink-0 mt-0.5" style={{ color: dominantColor.hex }} />
                  <span>
                    <strong>[Hypothesis 2 - Operational Leverage]:</strong> [Explain the cost-structure absorption or contribution margin flow-through from new scale.]
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight size={14} className="shrink-0 mt-0.5" style={{ color: dominantColor.hex }} />
                  <span>
                    <strong>[Hypothesis 3 - Execution Readiness]:</strong> [Explain team organizational readiness, governance oversight, or low-capex implementation feasibility.]
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div className="md:col-span-4 flex flex-col justify-between">
            <CalloutBox
              kicker="[EXECUTIVE TAKEAWAY]"
              metric="[+XX% 3-Yr CAGR]"
              description="[State the single most critical strategic implication the Board must remember from this slide.]"
              variant="primary"
              className="h-full flex flex-col justify-center"
            />
          </div>
        </div>
      </div>
    </SlideLayout>
  );
};
