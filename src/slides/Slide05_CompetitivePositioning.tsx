import React from 'react';
import { SlideLayout } from '../components/SlideLayout';
import { CalloutBox } from '../components/CalloutBox';
import { useDeckTheme } from '../context/ThemeContext';
import { Award, Shield, Check } from 'lucide-react';

/**
 * ==============================================================================
 * SLIDE TEMPLATE: 2x2 COMPETITIVE POSITIONING & STRUCTURAL MOAT ANALYSIS
 * ==============================================================================
 * 
 * WHEN TO USE THIS TEMPLATE:
 * --------------------------
 * 1. Strategic Differentiation & Moat Analysis: Proving to executive boards and
 *    investors why the firm enjoys defensible pricing power and customer retention.
 * 2. Product Portfolio & Brand Architecture: Evaluating where products sit across
 *    Enterprise Sophistication versus Time-to-Value or Cost.
 * 3. Commercial Due Diligence (CDD): Mapping the target asset in the "Upper-Right
 *    Leadership Quadrant" versus legacy slow-moving incumbents and low-feature point tools.
 * 4. Competitive Disruption War-Gaming: Anticipating competitor counter-moves
 *    and identifying unserved white-space quadrants.
 * 
 * CONSULTING GUIDELINES & BEST PRACTICES:
 * ---------------------------------------
 * - MECE Axes: Both axes must be strategically meaningful and independent (e.g.
 *   "Platform Completeness" on X and "Execution Velocity / Delivery Agility" on Y).
 * - Defensibility Pillars: Pair the visual 2x2 with 3 concrete structural moats
 *   (e.g., Proprietary IP/Algorithms, High Switching Costs, Network Effects).
 * - Action Title Rule: Declare the specific competitive advantage and moat durability.
 * ==============================================================================
 */

interface SlideProps {
  totalSlides: number;
}

export const Slide05_CompetitivePositioning: React.FC<SlideProps> = ({ totalSlides }) => {
  const { dominantColor } = useDeckTheme();

  return (
    <SlideLayout
      slideNumber={8}
      totalSlides={totalSlides}
      kicker="[COMPETITIVE BENCHMARK] | MOAT & POSITIONING"
      actionTitle="[Action Title: Demonstrate structural defensibility and clear differentiation in the upper-right leadership quadrant]"
      sourceText="Source: [Competitive Capability Diagnostic & Customer Advisory Board Interviews (YYYY)]"
      categoryTag="STRATEGIC POSITIONING"
    >
      <div className="h-full grid grid-cols-1 lg:grid-cols-12 gap-4 items-stretch">
        {/* Left: 2x2 Matrix */}
        <div className="lg:col-span-7 bg-white rounded-md border border-neutral-200 p-4 sm:p-5 flex flex-col justify-between">
          <div className="flex items-center justify-between pb-2 border-b border-neutral-100 mb-2">
            <h2 className="text-xs sm:text-sm font-bold text-neutral-900">
              [2x2 Matrix: Enterprise Capability Depth vs. Platform Breadth]
            </h2>
            <span className="text-[10px] text-neutral-500 italic">
              [Upper-right quadrant represents target leadership positioning]
            </span>
          </div>

          {/* 2x2 Quadrant visualization */}
          <div className="flex-1 relative border border-neutral-300 rounded bg-neutral-50/40 p-4 min-h-[220px] flex flex-col justify-between overflow-hidden">
            {/* Quadrant dividing crosshairs */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-full border-t border-neutral-300" />
            </div>
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="h-full border-l border-neutral-300" />
            </div>

            {/* Quadrant labels */}
            <div className="absolute top-2 left-2 text-[9px] font-bold uppercase text-neutral-400">
              [Niche Specialists]
            </div>
            <div
              className="absolute top-2 right-2 text-[9px] font-bold uppercase px-1.5 py-0.5 rounded border"
              style={{
                backgroundColor: dominantColor.lightHex,
                borderColor: dominantColor.borderHex,
                color: dominantColor.hex,
              }}
            >
              [Transformational Leaders]
            </div>
            <div className="absolute bottom-2 left-2 text-[9px] font-bold uppercase text-neutral-400">
              [Commodity Point Solutions]
            </div>
            <div className="absolute bottom-2 right-2 text-[9px] font-bold uppercase text-neutral-400">
              [Legacy Conglomerates]
            </div>

            {/* Competitor Nodes */}
            {/* Our Position (Dominant Color Leader) */}
            <div className="absolute top-[22%] right-[18%] flex flex-col items-center">
              <div className="relative">
                <span
                  className="absolute -inset-1 rounded-full opacity-30 animate-pulse"
                  style={{ backgroundColor: dominantColor.hex }}
                />
                <div
                  className="w-9 h-9 rounded-full text-white flex items-center justify-center font-bold text-xs shadow-md border-2 border-white"
                  style={{ backgroundColor: dominantColor.hex }}
                >
                  [US]
                </div>
              </div>
              <span
                className="text-[10px] font-bold mt-1 bg-white px-1.5 py-0.5 rounded shadow-xs border"
                style={{
                  color: dominantColor.hex,
                  borderColor: dominantColor.borderHex,
                }}
              >
                [Core Platform]
              </span>
            </div>

            {/* Competitor A */}
            <div className="absolute bottom-[28%] right-[24%] flex flex-col items-center">
              <div className="w-7 h-7 rounded-full bg-slate-600 text-white flex items-center justify-center text-[10px] font-semibold border border-white">
                CA
              </div>
              <span className="text-[9px] text-neutral-600 mt-0.5">[Competitor A]</span>
            </div>

            {/* Competitor B */}
            <div className="absolute top-[34%] left-[28%] flex flex-col items-center">
              <div className="w-7 h-7 rounded-full bg-slate-400 text-white flex items-center justify-center text-[10px] font-semibold border border-white">
                CB
              </div>
              <span className="text-[9px] text-neutral-500 mt-0.5">[Competitor B]</span>
            </div>

            {/* Competitor C */}
            <div className="absolute bottom-[24%] left-[30%] flex flex-col items-center">
              <div className="w-6 h-6 rounded-full bg-neutral-300 text-neutral-700 flex items-center justify-center text-[9px] font-semibold border border-white">
                CC
              </div>
              <span className="text-[9px] text-neutral-400 mt-0.5">[Others]</span>
            </div>
          </div>

          {/* Axis labels */}
          <div className="flex justify-between items-center text-[10px] font-bold uppercase tracking-wider text-neutral-500 mt-2 px-1">
            <span>[← Narrow Point Scope]</span>
            <span>[Comprehensive Platform Breadth →]</span>
          </div>
        </div>

        {/* Right: Moat Analysis */}
        <div className="lg:col-span-5 flex flex-col justify-between gap-3">
          <CalloutBox
            kicker="[SUSTAINABLE ADVANTAGE]"
            metric="[X.Xx LTV / CAC]"
            description="[Explain the structural switching friction, proprietary data assets, or customer workflow lock-in that shields against price competition.]"
            icon={Shield}
            variant="primary"
          />

          <div className="flex-1 bg-white border border-neutral-200 rounded-md p-3.5 flex flex-col justify-between">
            <div className="flex items-center gap-2 mb-2">
              <Award size={15} style={{ color: dominantColor.hex }} />
              <span className="text-xs font-bold uppercase tracking-wider text-neutral-900">
                [Structural Competitive Moats]
              </span>
            </div>

            <div className="space-y-2 text-xs">
              <div className="flex items-start gap-2">
                <div className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0 mt-0.5 text-[10px] font-bold">
                  <Check size={11} />
                </div>
                <div>
                  <strong className="text-neutral-900">[Proprietary Data / IP]:</strong>
                  <span className="text-neutral-600 block text-[11px]">
                    [Describe proprietary algorithms, unique training data, or patented technical IP.]
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <div className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0 mt-0.5 text-[10px] font-bold">
                  <Check size={11} />
                </div>
                <div>
                  <strong className="text-neutral-900">[Enterprise Compliance Barrier]:</strong>
                  <span className="text-neutral-600 block text-[11px]">
                    [Describe regulatory certifications (SOC2, FedRAMP, ISO) requiring multi-year audit history.]
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <div className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0 mt-0.5 text-[10px] font-bold">
                  <Check size={11} />
                </div>
                <div>
                  <strong className="text-neutral-900">[High SLA & Mission-Critical Uptime]:</strong>
                  <span className="text-neutral-600 block text-[11px]">
                    [Describe critical workflow dependence where switching risk exceeds software cost savings.]
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-2 pt-2 border-t border-neutral-100 flex items-center justify-between text-[10px] text-neutral-500">
              <span>[Competitor Response Risk: Low]</span>
              <span className="font-semibold text-neutral-800">[Moat Rating: AAA / Defensible]</span>
            </div>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
};
