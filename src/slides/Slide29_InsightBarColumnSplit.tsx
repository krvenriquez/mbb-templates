import React, { useState } from 'react';
import { SlideLayout } from '../components/SlideLayout';
import { useDeckTheme } from '../context/ThemeContext';
import { Quote, TrendingUp, ArrowUpRight, CheckCircle2 } from 'lucide-react';

/**
 * ==============================================================================
 * SLIDE TEMPLATE: QUALITATIVE INSIGHT & COLUMN CHART SPLIT
 * ==============================================================================
 * 
 * WHEN TO USE THIS TEMPLATE:
 * --------------------------
 * 1. Hypothesis Testing & Empirical Proof: Pairing a decisive qualitative executive
 *    deduction directly against empirical quantitative benchmark data.
 * 2. Board & Investor Readouts: Delivering the "So What?" narrative on the left
 *    while providing undisputed visual data proof on the right.
 * ==============================================================================
 */

interface SlideProps {
  totalSlides: number;
}

interface PeerBenchmark {
  name: string;
  margin2023: number;
  margin2026: number;
  isClient?: boolean;
}

const PEERS: PeerBenchmark[] = [
  { name: 'Peer Leader A', margin2023: 24, margin2026: 31 },
  { name: 'Peer Leader B', margin2023: 21, margin2026: 28 },
  { name: 'Enterprise Client', margin2023: 14, margin2026: 26, isClient: true },
  { name: 'Industry Average', margin2023: 16, margin2026: 19 },
  { name: 'Legacy Laggard', margin2023: 12, margin2026: 11 },
];

export const Slide29_InsightBarColumnSplit: React.FC<SlideProps> = ({ totalSlides }) => {
  const { dominantColor, headerFont } = useDeckTheme();
  const fontClass = headerFont === 'sans' ? 'font-sans' : 'font-serif';
  const [hoveredPeer, setHoveredPeer] = useState<string | null>(null);

  const maxVal = 35;

  return (
    <SlideLayout
      slideNumber={14}
      totalSlides={totalSlides}
      kicker="[EMPIRICAL DIAGNOSTIC] | QUALITATIVE SYNTHESIS & BENCHMARK PROOF"
      actionTitle="[Action Title: Targeted operational turnaround closes historical profitability gap, catapulting enterprise into top-quartile margin parity]"
      sourceText="Source: [Market Intelligence & Financial Disclosures / Enterprise Peer Benchmarking Analysis (YYYY)]"
      categoryTag="BENCHMARK SYNTHESIS"
    >
      <div className="h-full grid grid-cols-1 lg:grid-cols-12 gap-4 min-h-0">
        {/* Left 45%: Qualitative Narrative, Executive Quote & Deductions */}
        <div className="lg:col-span-5 flex flex-col justify-between p-4 rounded-xl border border-neutral-200 bg-white shadow-2xs">
          <div className="space-y-3">
            {/* Executive Quote Box */}
            <div
              className="p-3 rounded-lg border space-y-1.5"
              style={{
                backgroundColor: dominantColor.lightHex,
                borderColor: dominantColor.borderHex,
              }}
            >
              <Quote size={18} style={{ color: dominantColor.hex }} />
              <p className="text-xs sm:text-[13px] font-medium text-neutral-800 italic leading-snug">
                "[Quote: Operating margin underperformance was driven by legacy cost friction; modernizing the operating model restores tier-1 profitability.]"
              </p>
              <span className="text-[10px] font-mono font-bold text-neutral-500 block text-right">
                [— Executive Sponsor / Strategic Readout]
              </span>
            </div>

            {/* Strategic Deductions */}
            <div className="space-y-2 pt-1">
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-neutral-400 block">
                [Key Strategic Deductions]
              </span>

              <div className="flex items-start gap-2 text-xs text-neutral-700">
                <CheckCircle2 size={15} className="text-emerald-600 shrink-0 mt-0.5" />
                <span>
                  <strong>[Structural Margin Compression]:</strong> [Detail baseline diagnostic gap, peer comparison, and core operational cost drivers in 1-2 lines.]
                </span>
              </div>

              <div className="flex items-start gap-2 text-xs text-neutral-700">
                <CheckCircle2 size={15} className="text-emerald-600 shrink-0 mt-0.5" />
                <span>
                  <strong>[Accelerated Improvement Trajectory]:</strong> [Detail quantified margin uplift, transformation timeline, and peer outperformance.]
                </span>
              </div>

              <div className="flex items-start gap-2 text-xs text-neutral-700">
                <CheckCircle2 size={15} className="text-emerald-600 shrink-0 mt-0.5" />
                <span>
                  <strong>[Sustainable Valuation Impact]:</strong> [Detail multiple expansion potential, earnings quality, and long-term enterprise value creation.]
                </span>
              </div>
            </div>
          </div>

          <div className="pt-2 border-t border-neutral-200 flex items-center justify-between text-[11px] font-mono text-neutral-500">
            <span>[Hypothesis Status: VALIDATED]</span>
            <span className="font-bold text-emerald-600">[+X,XXX bps Uplift]</span>
          </div>
        </div>

        {/* Right 55%: High-Contrast Vertical Column Chart */}
        <div className="lg:col-span-7 flex flex-col justify-between p-4 rounded-xl border border-neutral-200 bg-white shadow-2xs">
          <div className="flex items-center justify-between pb-2 border-b border-neutral-100 shrink-0">
            <div>
              <h4 className="text-xs font-bold text-neutral-900 uppercase tracking-wide">
                [EBITDA Margin Progression: Baseline vs. Target (%)]
              </h4>
              <p className="text-[11px] text-neutral-500">
                [Peer benchmark comparison highlighting enterprise delta expansion]
              </p>
            </div>
            <div className="flex items-center gap-3 text-[10px] font-mono">
              <div className="flex items-center gap-1">
                <span className="w-2.5 h-2.5 rounded bg-slate-300" />
                <span className="text-neutral-500">[Baseline]</span>
              </div>
              <div className="flex items-center gap-1">
                <span className="w-2.5 h-2.5 rounded" style={{ backgroundColor: dominantColor.hex }} />
                <span className="text-neutral-900 font-bold">[Target]</span>
              </div>
            </div>
          </div>

          {/* Bar Chart Area */}
          <div className="flex-1 flex items-end justify-between gap-3 pt-6 pb-2 border-b border-neutral-200 min-h-[160px]">
            {PEERS.map((peer) => {
              const h23 = (peer.margin2023 / maxVal) * 100;
              const h26 = (peer.margin2026 / maxVal) * 100;
              const isTarget = peer.isClient;
              const isHovered = hoveredPeer === peer.name;

              return (
                <div
                  key={peer.name}
                  onMouseEnter={() => setHoveredPeer(peer.name)}
                  onMouseLeave={() => setHoveredPeer(null)}
                  className="flex-1 flex flex-col items-center h-full justify-end group cursor-pointer"
                >
                  {/* Delta Marker */}
                  <div className="text-center mb-1">
                    <span
                      className={`text-[10px] font-mono font-bold block ${
                        isTarget ? 'text-emerald-600 bg-emerald-50 px-1 rounded border border-emerald-200' : 'text-neutral-500'
                      }`}
                    >
                      +{peer.margin2026 - peer.margin2023}%
                    </span>
                  </div>

                  {/* Paired Columns */}
                  <div className="flex items-end gap-1.5 w-full justify-center">
                    {/* 2023 Baseline Bar */}
                    <div
                      className="w-4 sm:w-6 rounded-t transition-all bg-slate-300 group-hover:brightness-95"
                      style={{ height: `${h23}%` }}
                      title={`2023: ${peer.margin2023}%`}
                    />
                    {/* 2026E Target Bar */}
                    <div
                      className="w-4 sm:w-6 rounded-t transition-all duration-200 group-hover:brightness-110"
                      style={{
                        height: `${h26}%`,
                        backgroundColor: isTarget ? dominantColor.hex : '#1E293B',
                      }}
                      title={`2026E: ${peer.margin2026}%`}
                    />
                  </div>

                  {/* Peer Label */}
                  <div className="mt-2 text-center w-full">
                    <span
                      className={`text-[10px] block line-clamp-1 ${
                        isTarget
                          ? 'font-bold text-neutral-900 underline decoration-2'
                          : 'font-medium text-neutral-600'
                      }`}
                    >
                      {peer.name}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="pt-2 flex items-center justify-between text-[10px] font-mono text-neutral-500 shrink-0">
            <span>Values expressed as % of Net Revenues</span>
            <span className="font-bold text-neutral-900">Median Peer Growth: +3.2pp vs Client: +12.0pp</span>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
};
