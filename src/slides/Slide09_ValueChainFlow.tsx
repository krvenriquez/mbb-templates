import React from 'react';
import { SlideLayout } from '../components/SlideLayout';
import { useDeckTheme } from '../context/ThemeContext';
import { ChevronRight, CheckCircle2, Flag, Clock, Users, ArrowRight } from 'lucide-react';

/**
 * ==============================================================================
 * SLIDE TEMPLATE: 5-STAGE VALUE CHAIN & GOVERNANCE STAGE-GATE FLOW
 * ==============================================================================
 * 
 * WHEN TO USE THIS TEMPLATE:
 * --------------------------
 * 1. Transformation Governance & Stage-Gate Funding: Establishing formal review gates
 *    (Gate 1 through Gate 5) where Steering Committees authorize subsequent capital tranches.
 * 2. Operating Model & Process Redesign: Mapping end-to-end value delivery from
 *    R&D through Commercialization, Order Fulfillment, and Customer Support.
 * 3. Product Development Life Cycle (PDLC): Structuring stage-gate approval for new
 *    hardware/software features from discovery to pilot to global release.
 * 4. Post-Merger Integration (PMI) Governance: Managing the 5 phases of Day-1 readiness,
 *    stabilization, systems cutover, synergy capture, and steady-state transition.
 * 
 * CONSULTING GUIDELINES & BEST PRACTICES:
 * ---------------------------------------
 * - Horizontal Chevron Sequence: Maintain clear left-to-right temporal continuity.
 * - Tripartite Stage Details: Each stage should outline: (1) Timeframe & Accountable Lead,
 *   (2) Core Transformation Objective, (3) Tangible Audit Deliverable.
 * - Gate Exit Criteria: Specify non-negotiable quantitative exit criteria required to pass
 *   from one stage to the next.
 * ==============================================================================
 */

interface SlideProps {
  totalSlides: number;
}

export const Slide09_ValueChainFlow: React.FC<SlideProps> = ({ totalSlides }) => {
  const { dominantColor, headerFont } = useDeckTheme();
  const fontClass = headerFont === 'sans' ? 'font-sans' : 'font-serif';

  const stages = [
    {
      num: '01',
      name: '[Phase 1: Diagnostic]',
      duration: '[Weeks 1–4]',
      owner: '[Lead: Partner]',
      objective: '[Baseline operational diagnostic & rapid customer interviews]',
      deliverable: '[Diagnostic Report & Baseline Model]',
      status: 'complete',
    },
    {
      num: '02',
      name: '[Phase 2: Target Blueprint]',
      duration: '[Weeks 5–8]',
      owner: '[Lead: Engagement Director]',
      objective: '[Design target operating model and product tiering architecture]',
      deliverable: '[Blueprint Charter & Business Case]',
      status: 'complete',
    },
    {
      num: '03',
      name: '[Phase 3: Pilot & GTM]',
      duration: '[Weeks 9–16]',
      owner: '[Lead: Workstream Lead]',
      objective: '[Deploy pilot sales motion across top 20 accounts & test pricing]',
      deliverable: '[Pilot Readout & Conversion Data]',
      status: 'active',
    },
    {
      num: '04',
      name: '[Phase 4: Full Rollout]',
      duration: '[Months 5–12]',
      owner: '[Lead: VP Operations]',
      objective: '[Scale new pricing and multi-product bundles to all accounts]',
      deliverable: '[Full Enterprise Deployment]',
      status: 'upcoming',
    },
    {
      num: '05',
      name: '[Phase 5: Institutionalize]',
      duration: '[Months 13–18]',
      owner: '[Lead: Steering Committee]',
      objective: '[Continuous KPI governance, TMO handover & long-term audit]',
      deliverable: '[TMO Handover & Final Sign-Off]',
      status: 'upcoming',
    },
  ];

  return (
    <SlideLayout
      slideNumber={9}
      totalSlides={totalSlides}
      kicker="[OPERATING MODEL] | VALUE CHAIN STAGE-GATE"
      actionTitle="[Action Title: Establish phased end-to-end execution flow with rigorous stage gates and accountability]"
      sourceText="Source: [Transformation Management Office (TMO) Governance Framework (YYYY)]"
      categoryTag="EXECUTION ARCHITECTURE"
    >
      <div className="h-full flex flex-col justify-between gap-3">
        {/* Stage Chevrons Row */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-2 flex-1 items-stretch">
          {stages.map((stage, idx) => {
            const isActive = stage.status === 'active';
            const isComplete = stage.status === 'complete';

            return (
              <div
                key={stage.num}
                className={`p-3.5 rounded border flex flex-col justify-between transition-all duration-200 ${
                  isActive
                    ? 'border-2 shadow-sm'
                    : isComplete
                    ? 'bg-neutral-50/80 border-neutral-300'
                    : 'bg-white border-neutral-200'
                }`}
                style={
                  isActive
                    ? {
                        borderColor: dominantColor.hex,
                        backgroundColor: dominantColor.lightHex,
                      }
                    : undefined
                }
              >
                <div>
                  {/* Step header pill */}
                  <div className="flex items-center justify-between pb-2 border-b border-neutral-200/80 mb-2">
                    <span
                      className="text-[10px] font-bold uppercase tracking-wider"
                      style={isActive ? { color: dominantColor.hex } : { color: '#6B7280' }}
                    >
                      Stage {stage.num}
                    </span>
                    <span
                      className={`text-[9px] font-bold px-1.5 py-0.5 rounded uppercase ${
                        isActive
                          ? 'text-white'
                          : isComplete
                          ? 'bg-emerald-100 text-emerald-800'
                          : 'bg-neutral-100 text-neutral-500'
                      }`}
                      style={isActive ? { backgroundColor: dominantColor.hex } : undefined}
                    >
                      {isActive ? 'Current' : isComplete ? 'Complete' : 'Planned'}
                    </span>
                  </div>

                  <div
                    className={`${fontClass} text-xs sm:text-sm font-bold text-neutral-900 mb-1 leading-snug`}
                  >
                    {stage.name}
                  </div>

                  <div className="flex items-center gap-1 text-[10px] text-neutral-500 mb-2.5">
                    <Clock size={11} />
                    <span>{stage.duration}</span>
                  </div>

                  {/* Objective & Description */}
                  <p className="text-[11px] text-neutral-600 leading-snug mb-3">
                    {stage.objective}
                  </p>
                </div>

                {/* Bottom Deliverable & Owner Gate */}
                <div className="pt-2 border-t border-neutral-200/80 space-y-1 text-[10px]">
                  <div className="flex items-start gap-1">
                    <Flag size={11} className="shrink-0 mt-0.5 text-neutral-500" />
                    <span className="font-medium text-neutral-800 truncate">
                      {stage.deliverable}
                    </span>
                  </div>
                  <div className="flex items-start gap-1 text-neutral-500">
                    <Users size={11} className="shrink-0 mt-0.5" />
                    <span className="truncate">{stage.owner}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Governance Gate Bar */}
        <div className="p-3 bg-neutral-900 text-white rounded flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-xs">
          <div className="flex items-center gap-2">
            <span
              className="w-2.5 h-2.5 rounded-full"
              style={{ backgroundColor: dominantColor.hex }}
            />
            <span className="font-bold">[STAGE-GATE CRITERIA]:</span>
            <span className="text-neutral-300">
              [Specify mandatory quantitative hurdle rate required before moving from Phase 3 to Phase 4]
            </span>
          </div>
          <span className="font-mono text-emerald-400 font-semibold shrink-0">
            [Approval Gate: Steering Committee]
          </span>
        </div>
      </div>
    </SlideLayout>
  );
};
