import React from 'react';
import { SlideLayout } from '../components/SlideLayout';
import { useDeckTheme } from '../context/ThemeContext';
import { CheckSquare, Flag, ArrowRight, ShieldCheck, Mail, Phone, Calendar } from 'lucide-react';

/**
 * ==============================================================================
 * SLIDE TEMPLATE: EXECUTIVE ENDER, DECISION GATES & 30-DAY MOBILIZATION
 * ==============================================================================
 * 
 * WHEN TO USE THIS TEMPLATE:
 * --------------------------
 * 1. Concluding Board & SteerCo Presentations: Converting high-level strategic findings
 *    into immediate governance decisions, funding approvals, and next-step actions.
 * 2. Stage-Gate Capital Request Readouts: Explicitly articulating the 3 binary decisions
 *    required from executive leadership before the engagement team disperses.
 * 3. 30-60-90 Day Mobilization Kickoff: Laying out week-by-week workstreams for the
 *    immediate post-presentation mobilization phase.
 * 4. Commercial Pitch & Mandate Sign-off: Presenting the advisory partner team contacts,
 *    governance rhythm, and first SteerCo review date.
 * 
 * CONSULTING GUIDELINES & BEST PRACTICES:
 * ---------------------------------------
 * - Action-Oriented Decision Gates: State the specific resolution required (e.g. "Gate 1:
 *   Approve $15M Phase-2 Capital Reinvestment Tranche").
 * - Clear Ownership & Dates: Every 30-day mobilization action item must have an assigned
 *   executive owner and target completion date.
 * - Advisory Team Engagement Contacts: Reiterate lead partner credentials and contact
 *   points for follow-up steering sessions.
 * ==============================================================================
 */

interface SlideProps {
  totalSlides: number;
}

export const Slide10_EnderSlide: React.FC<SlideProps> = ({ totalSlides }) => {
  const { dominantColor, headerFont } = useDeckTheme();
  const fontClass = headerFont === 'sans' ? 'font-sans' : 'font-serif';

  return (
    <SlideLayout
      slideNumber={11}
      totalSlides={totalSlides}
      kicker="[EXECUTIVE MANDATE] | DECISION GATES & NEXT STEPS"
      actionTitle="[Action Title: Secure formal Board alignment on three critical decision gates and initiate 30-day mobilization]"
      sourceText="Source: [Steering Committee Charter & Transformation Management Office (TMO) Protocol (YYYY)]"
      categoryTag="STEERING COMMITTEE"
    >
      <div className="h-full flex flex-col justify-between gap-3">
        {/* Top 3 Concrete Decision Gates Required */}
        <div>
          <div className="text-[11px] font-bold uppercase tracking-wider text-neutral-500 mb-2 flex items-center gap-1.5">
            <CheckSquare size={14} style={{ color: dominantColor.hex }} />
            <span>[Three Mandatory Decisions Required From Steering Committee Today]</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <div className="p-3.5 rounded border border-neutral-200 bg-white flex flex-col justify-between hover:border-neutral-300 transition-colors">
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-[10px] font-bold uppercase text-neutral-400">Decision 01</span>
                  <span className="w-2 h-2 rounded-full" style={{ backgroundColor: dominantColor.hex }} />
                </div>
                <div className={`${fontClass} text-xs sm:text-sm font-bold text-neutral-900 mb-1`}>
                  [Decision 1: Budget & Charter]
                </div>
                <p className="text-[11px] text-neutral-600 leading-snug">
                  [Authorize Phase 1 operational enablement budget ($X.XM) and formalize Transformation Office charter.]
                </p>
              </div>
              <div className="mt-2 pt-2 border-t border-neutral-100 flex items-center justify-between text-[10px] text-neutral-500">
                <span>[Sign-off Lead]</span>
                <span className="font-semibold text-neutral-800">[Chief Executive Officer]</span>
              </div>
            </div>

            <div
              className="p-3.5 rounded border-2 flex flex-col justify-between shadow-xs"
              style={{
                borderColor: dominantColor.hex,
                backgroundColor: dominantColor.lightHex,
              }}
            >
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-[10px] font-bold uppercase" style={{ color: dominantColor.hex }}>
                    Decision 02 (Immediate)
                  </span>
                  <span className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: dominantColor.hex }} />
                </div>
                <div className={`${fontClass} text-xs sm:text-sm font-bold text-neutral-950 mb-1`}>
                  [Decision 2: Core Team Mobilization]
                </div>
                <p className="text-[11px] text-neutral-700 leading-snug">
                  [Approve designated senior full-time internal workstream leads and agile squad composition by Friday.]
                </p>
              </div>
              <div className="mt-2 pt-2 border-t text-[10px] flex items-center justify-between" style={{ borderColor: dominantColor.borderHex }}>
                <span style={{ color: dominantColor.hex }}>[Sign-off Lead]</span>
                <span className="font-bold text-neutral-950">[Executive Committee]</span>
              </div>
            </div>

            <div className="p-3.5 rounded border border-neutral-200 bg-white flex flex-col justify-between hover:border-neutral-300 transition-colors">
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-[10px] font-bold uppercase text-neutral-400">Decision 03</span>
                  <span className="w-2 h-2 rounded-full bg-neutral-400" />
                </div>
                <div className={`${fontClass} text-xs sm:text-sm font-bold text-neutral-900 mb-1`}>
                  [Decision 3: Governance Cadence]
                </div>
                <p className="text-[11px] text-neutral-600 leading-snug">
                  [Establish bi-weekly Board Steering review and define automated value-tracking metrics dashboard.]
                </p>
              </div>
              <div className="mt-2 pt-2 border-t border-neutral-100 flex items-center justify-between text-[10px] text-neutral-500">
                <span>[Sign-off Lead]</span>
                <span className="font-semibold text-neutral-800">[Board of Directors]</span>
              </div>
            </div>
          </div>
        </div>

        {/* Immediate 30-Day Mobilization Runway */}
        <div className="p-3 bg-neutral-50 border border-neutral-200 rounded flex-1 flex flex-col justify-between">
          <div className="text-[11px] font-bold uppercase tracking-wider text-neutral-800 mb-2 flex items-center gap-1.5">
            <Calendar size={13} className="text-neutral-500" />
            <span>[Immediate 30-Day Execution Milestones]</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs text-neutral-700">
            <div className="flex items-start gap-2">
              <span className="w-5 h-5 rounded-full bg-neutral-200 text-neutral-800 flex items-center justify-center font-bold text-[10px] shrink-0">
                W1
              </span>
              <div>
                <strong className="text-neutral-900 block">[Charter Finalization]:</strong>
                <span className="text-[11px] text-neutral-600">
                  [Sign engagement agreement and lock workstream scope deliverables.]
                </span>
              </div>
            </div>

            <div className="flex items-start gap-2">
              <span className="w-5 h-5 rounded-full bg-neutral-200 text-neutral-800 flex items-center justify-center font-bold text-[10px] shrink-0">
                W2
              </span>
              <div>
                <strong className="text-neutral-900 block">[TMO Kick-off]:</strong>
                <span className="text-[11px] text-neutral-600">
                  [Initiate weekly tracking dashboard and operational pulse surveys.]
                </span>
              </div>
            </div>

            <div className="flex items-start gap-2">
              <span
                className="w-5 h-5 rounded-full text-white flex items-center justify-center font-bold text-[10px] shrink-0"
                style={{ backgroundColor: dominantColor.hex }}
              >
                W4
              </span>
              <div>
                <strong className="text-neutral-900 block">[First Steering Readout]:</strong>
                <span className="text-[11px] text-neutral-600">
                  [Present initial sprint results and customer pricing feedback.]
                </span>
              </div>
            </div>
          </div>

          <div className="mt-2 pt-2 border-t border-neutral-200 text-[10px] text-neutral-500 italic">
            [Milestone completion verified by Transformation Management Office protocol]
          </div>
        </div>

        {/* Engagement Leadership Contacts & Closing Disclaimers */}
        <div className="pt-2 border-t border-neutral-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-[10px] text-neutral-500">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1">
              <ShieldCheck size={12} className="text-neutral-700" />
              <span className="font-semibold text-neutral-800">[Lead Partner Name]</span>
            </div>
            <span>•</span>
            <div className="flex items-center gap-1">
              <Mail size={12} />
              <span>[partner@consulting-firm.com]</span>
            </div>
            <span>•</span>
            <div className="flex items-center gap-1">
              <Phone size={12} />
              <span>[+1 (555) 019-2831]</span>
            </div>
          </div>

          <div className="text-neutral-400 italic">
            [CONFIDENTIAL & PROPRIETARY — FOR CLIENT INTERNAL USE ONLY]
          </div>
        </div>
      </div>
    </SlideLayout>
  );
};
