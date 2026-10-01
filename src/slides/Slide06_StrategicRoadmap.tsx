import React from 'react';
import { SlideLayout } from '../components/SlideLayout';
import { useDeckTheme } from '../context/ThemeContext';
import { Calendar, CheckCircle2, ArrowRight, ShieldCheck, Target } from 'lucide-react';

/**
 * ==============================================================================
 * SLIDE TEMPLATE: 3-HORIZON STRATEGIC ROADMAP & PHASING BLUEPRINT
 * ==============================================================================
 * 
 * WHEN TO USE THIS TEMPLATE:
 * --------------------------
 * 1. Enterprise Turnaround & Transformation Sequencing: Balancing quick wins
 *    (Horizon 1: 0-6 months) to self-fund medium-term scale (Horizon 2: 6-18 months)
 *    and long-term market dominance (Horizon 3: 18-36 months).
 * 2. C-Suite Capital Allocation: Allocating operational budgets across tactical
 *    near-term initiatives and strategic multi-year transformation bets.
 * 3. Change Management & Organizational Bandwidth: Preventing organizational fatigue
 *    by staging complex ERP/Cloud/Operating model changes in distinct sequential waves.
 * 4. Mergers & Acquisitions 100-Day to 3-Year Plan: Communicating the journey from
 *    Day-1 operational continuity to multi-year combined entity synergy realization.
 * 
 * CONSULTING GUIDELINES & BEST PRACTICES:
 * ---------------------------------------
 * - Horizon Progression:
 *     (1) Horizon 1: Immediate cash flow, operational stabilization, quick wins.
 *     (2) Horizon 2: Operating model rollout, platform re-architecture, core scaling.
 *     (3) Horizon 3: Market expansion, adjacent M&A, structural industry leadership.
 * - Action Title Rule: Declare the sequencing logic and key milestone transitions.
 * ==============================================================================
 */

interface SlideProps {
  totalSlides: number;
}

export const Slide06_StrategicRoadmap: React.FC<SlideProps> = ({ totalSlides }) => {
  const { dominantColor, headerFont } = useDeckTheme();
  const fontClass = headerFont === 'sans' ? 'font-sans' : 'font-serif';

  return (
    <SlideLayout
      slideNumber={10}
      totalSlides={totalSlides}
      kicker="[IMPLEMENTATION PLAN] | 3-HORIZON ROADMAP"
      actionTitle="[Action Title: Structure execution into 3 disciplined horizons balancing immediate quick-wins with long-term enterprise value]"
      sourceText="Source: [Program Management Office (PMO) Execution Playbook & Resource Plan (YYYY)]"
      categoryTag="ROADMAP & EXECUTION"
    >
      <div className="h-full flex flex-col justify-between gap-3">
        {/* 3 Horizon Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 flex-1 min-h-0">
          {/* Horizon 1 */}
          <div className="p-3.5 rounded border border-neutral-200 bg-white flex flex-col justify-between hover:border-neutral-300 transition-colors">
            <div>
              <div className="pb-2 border-b border-neutral-100 mb-2 flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-neutral-400">
                    [Horizon 1: Months 0–6]
                  </span>
                  <div className={`${fontClass} text-sm sm:text-base font-bold text-neutral-900 mt-0.5`}>
                    [Quick Wins & Alignment]
                  </div>
                </div>
                <div className="w-6 h-6 rounded bg-neutral-100 text-neutral-600 flex items-center justify-center font-bold text-xs">
                  H1
                </div>
              </div>

              <div className="space-y-2 text-xs text-neutral-600">
                <div className="flex items-start gap-1.5">
                  <CheckCircle2 size={13} className="text-emerald-600 shrink-0 mt-0.5" />
                  <span>[Initiative 1.1: Stand up Program Management Office (PMO) & weekly cadence]</span>
                </div>
                <div className="flex items-start gap-1.5">
                  <CheckCircle2 size={13} className="text-emerald-600 shrink-0 mt-0.5" />
                  <span>[Initiative 1.2: Plug discounting leakage across direct sales renewals]</span>
                </div>
                <div className="flex items-start gap-1.5">
                  <CheckCircle2 size={13} className="text-emerald-600 shrink-0 mt-0.5" />
                  <span>[Initiative 1.3: Launch pilot packaging tier across top 20 accounts]</span>
                </div>
              </div>
            </div>

            <div className="mt-3 pt-2 border-t border-neutral-100 flex items-center justify-between text-[11px]">
              <span className="text-neutral-500 font-medium">[Milestone Target]</span>
              <span className="font-bold text-neutral-800">[+$XXM Immediate Run-Rate]</span>
            </div>
          </div>

          {/* Horizon 2 (Focus / Acceleration) */}
          <div
            className="p-3.5 rounded border-2 flex flex-col justify-between shadow-xs transition-colors"
            style={{
              borderColor: dominantColor.hex,
              backgroundColor: dominantColor.lightHex,
            }}
          >
            <div>
              <div className="pb-2 border-b mb-2 flex items-center justify-between" style={{ borderColor: dominantColor.borderHex }}>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider" style={{ color: dominantColor.hex }}>
                    [Horizon 2: Months 6–18]
                  </span>
                  <div className={`${fontClass} text-sm sm:text-base font-bold text-neutral-950 mt-0.5`}>
                    [Core Scaling & Efficiency]
                  </div>
                </div>
                <div
                  className="w-6 h-6 rounded text-white flex items-center justify-center font-bold text-xs"
                  style={{ backgroundColor: dominantColor.hex }}
                >
                  H2
                </div>
              </div>

              <div className="space-y-2 text-xs text-neutral-800 font-medium">
                <div className="flex items-start gap-1.5">
                  <Target size={13} className="shrink-0 mt-0.5" style={{ color: dominantColor.hex }} />
                  <span>[Initiative 2.1: Full rollout of value-based packaging to entire customer base]</span>
                </div>
                <div className="flex items-start gap-1.5">
                  <Target size={13} className="shrink-0 mt-0.5" style={{ color: dominantColor.hex }} />
                  <span>[Initiative 2.2: Cloud migration & automated infrastructure rightsizing]</span>
                </div>
                <div className="flex items-start gap-1.5">
                  <Target size={13} className="shrink-0 mt-0.5" style={{ color: dominantColor.hex }} />
                  <span>[Initiative 2.3: Channel partner enablement program across EMEA & APAC]</span>
                </div>
              </div>
            </div>

            <div className="mt-3 pt-2 border-t flex items-center justify-between text-[11px]" style={{ borderColor: dominantColor.borderHex }}>
              <span className="font-medium" style={{ color: dominantColor.hex }}>[Milestone Target]</span>
              <span className="font-bold text-neutral-950">[+XXX bps Operating Margin]</span>
            </div>
          </div>

          {/* Horizon 3 */}
          <div className="p-3.5 rounded border border-neutral-200 bg-white flex flex-col justify-between hover:border-neutral-300 transition-colors">
            <div>
              <div className="pb-2 border-b border-neutral-100 mb-2 flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-neutral-400">
                    [Horizon 3: Months 18–36]
                  </span>
                  <div className={`${fontClass} text-sm sm:text-base font-bold text-neutral-900 mt-0.5`}>
                    [Ecosystem Leadership]
                  </div>
                </div>
                <div className="w-6 h-6 rounded bg-neutral-100 text-neutral-600 flex items-center justify-center font-bold text-xs">
                  H3
                </div>
              </div>

              <div className="space-y-2 text-xs text-neutral-600">
                <div className="flex items-start gap-1.5">
                  <ArrowRight size={13} className="text-neutral-500 shrink-0 mt-0.5" />
                  <span>[Initiative 3.1: Developer API marketplace & third-party integrations]</span>
                </div>
                <div className="flex items-start gap-1.5">
                  <ArrowRight size={13} className="text-neutral-500 shrink-0 mt-0.5" />
                  <span>[Initiative 3.2: Strategic tuck-in M&A targeting complementary capabilities]</span>
                </div>
                <div className="flex items-start gap-1.5">
                  <ArrowRight size={13} className="text-neutral-500 shrink-0 mt-0.5" />
                  <span>[Initiative 3.3: International market entry in Tier-1 territories]</span>
                </div>
              </div>
            </div>

            <div className="mt-3 pt-2 border-t border-neutral-100 flex items-center justify-between text-[11px]">
              <span className="text-neutral-500 font-medium">[Milestone Target]</span>
              <span className="font-bold text-neutral-800">[$XXXM ARR Run-Rate]</span>
            </div>
          </div>
        </div>

        {/* Bottom Governance Banner */}
        <div className="p-3 bg-neutral-100/80 border border-neutral-200 rounded flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-xs">
          <div className="flex items-center gap-2">
            <ShieldCheck size={14} className="text-neutral-700" />
            <span className="font-bold text-neutral-900">[GOVERNANCE PROTOCOL]:</span>
            <span className="text-neutral-700">
              [Detail weekly PMO status reporting, monthly Steering Committee approvals, and quarterly capital allocations.]
            </span>
          </div>
          <span className="font-mono text-neutral-600 font-semibold shrink-0">
            [Review Cadence: Bi-Weekly]
          </span>
        </div>
      </div>
    </SlideLayout>
  );
};
