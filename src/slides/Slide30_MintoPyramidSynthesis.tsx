import React from 'react';
import { SlideLayout } from '../components/SlideLayout';
import { useDeckTheme } from '../context/ThemeContext';
import { Target, Layers, CheckCircle2, ChevronDown } from 'lucide-react';

/**
 * ==============================================================================
 * SLIDE TEMPLATE: MINTO PYRAMID SYNTHESIS
 * ==============================================================================
 * 
 * WHEN TO USE THIS TEMPLATE:
 * --------------------------
 * 1. Barbara Minto Pyramid Principle Readouts: Structuring complex executive logic
 *    into: (1) Governing Thought at the Apex, (2) Core Deductive Arguments,
 *    and (3) Inductive Empirical Evidence at the foundation.
 * 2. Board of Directors Approvals & Strategic Sanctioning: Eliminating ambiguity
 *    by demonstrating that every high-level recommendation rests on verifiable data.
 * ==============================================================================
 */

interface SlideProps {
  totalSlides: number;
}

export const Slide30_MintoPyramidSynthesis: React.FC<SlideProps> = ({ totalSlides }) => {
  const { dominantColor, headerFont } = useDeckTheme();
  const fontClass = headerFont === 'sans' ? 'font-sans' : 'font-serif';

  const pyramidBranches = [
    {
      argumentTitle: '[Deductive Argument I: Strategic Urgency & Market Window]',
      evidence: [
        '[Detail primary market catalyst or closing window of competitive opportunity in 1-2 lines.]',
        '[Quantify target segment RFP requirements, enterprise demand surge, or category shift.]',
        '[Detail customer switching barriers or baseline risk of maintaining status quo.]',
      ],
    },
    {
      argumentTitle: '[Deductive Argument II: Operational Feasibility & Delivery Proof]',
      evidence: [
        '[Detail pilot performance metrics, technical validation, or latency compression proof.]',
        '[Quantify pilot customer expansion, Net Revenue Retention (NRR), or quality scores.]',
        '[Detail risk mitigation controls, architectural stability, and delivery governance.]',
      ],
    },
    {
      argumentTitle: '[Deductive Argument III: Economic Payoff & Self-Funding Model]',
      evidence: [
        '[Detail legacy cost harvest, cash generation levers, or capex self-funding capacity.]',
        '[Quantify breakeven horizon, cumulative ROI multiple, and IRR hurdle realization.]',
        '[Detail balance sheet resilience, zero dilution, and cash flow protection measures.]',
      ],
    },
  ];

  return (
    <SlideLayout
      slideNumber={7}
      totalSlides={totalSlides}
      kicker="[EXECUTIVE LOGIC] | MINTO PYRAMID SYNTHESIS"
      actionTitle="[Action Title: Governing executive recommendation supported by three deductive argument branches and empirical proof points]"
      sourceText="Source: [Office of the Chief Strategy Officer / Strategic Deductive Logic Model (YYYY)]"
      categoryTag="STRATEGIC SYNTHESIS"
    >
      <div className="h-full flex flex-col justify-between gap-3">
        {/* LEVEL 1: The Apex Governing Thought */}
        <div
          className="p-4 rounded-xl border shadow-sm relative overflow-hidden shrink-0"
          style={{
            backgroundColor: dominantColor.lightHex,
            borderColor: dominantColor.borderHex,
          }}
        >
          <div className="flex items-center gap-3">
            <div
              className="w-8 h-8 rounded-lg flex items-center justify-center text-white shrink-0 shadow-2xs"
              style={{ backgroundColor: dominantColor.hex }}
            >
              <Target size={16} />
            </div>
            <div>
              <span
                className="text-[10px] font-mono font-bold uppercase tracking-wider block"
                style={{ color: dominantColor.hex }}
              >
                [Level 1: Governing Thought (Bottom Line Up Front)]
              </span>
              <h3 className="text-sm sm:text-base font-bold text-neutral-900 leading-snug">
                [State governing executive recommendation answering 'What should the enterprise do?' in one definitive declarative statement]
              </h3>
            </div>
          </div>
        </div>

        {/* Center Connecting Hierarchy Indicator */}
        <div className="flex items-center justify-center -my-1 shrink-0">
          <ChevronDown size={15} className="text-neutral-400" />
        </div>

        {/* LEVEL 2 & 3: 3 Deductive Branches and Inductive Evidence Cards */}
        <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-3.5 min-h-0">
          {pyramidBranches.map((branch, idx) => (
            <div
              key={idx}
              className="p-3.5 rounded-xl border border-neutral-200 bg-white flex flex-col justify-between shadow-2xs"
            >
              <div className="space-y-2.5">
                {/* Level 2: Core Deductive Argument */}
                <div className="pb-2 border-b border-neutral-100">
                  <h4 className="text-xs sm:text-[13px] font-bold text-neutral-900 leading-snug">
                    {branch.argumentTitle}
                  </h4>
                </div>

                {/* Level 3: Inductive Empirical Evidence Points */}
                <div className="space-y-1.5">
                  <span className="text-[9px] font-mono font-bold uppercase text-neutral-400 block tracking-wider">
                    [Level 3: Inductive Proof Points]
                  </span>

                  {branch.evidence.map((point, pIdx) => (
                    <div
                      key={pIdx}
                      className="p-2 rounded-lg bg-neutral-50 border border-neutral-150 flex items-start gap-2 text-[11px] text-neutral-700 leading-snug"
                    >
                      <CheckCircle2 size={13} className="text-emerald-600 shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="p-2.5 rounded-lg border border-neutral-200 bg-neutral-50 flex items-center justify-between shrink-0 text-xs">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full" style={{ backgroundColor: dominantColor.hex }} />
            <span className="font-bold text-neutral-900">[Pyramid Governance Principle]:</span>
            <span className="text-neutral-600">
              [Ideas at any level in the pyramid must always be summaries of the inductive proof points grouped below them.]
            </span>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
};
