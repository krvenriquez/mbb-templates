import React, { useState } from 'react';
import { SlideLayout } from '../components/SlideLayout';
import { useDeckTheme } from '../context/ThemeContext';
import { Check, Info } from 'lucide-react';

/**
 * ==============================================================================
 * SLIDE TEMPLATE: FULL-WIDTH HARVEY BALL EVALUATION TABLE (WITHOUT INSIGHT SPLIT)
 * ==============================================================================
 * 
 * WHEN TO USE THIS TEMPLATE:
 * --------------------------
 * 1. Vendor Selection & RFP Solution Scoring: Providing an exhaustive, multi-criteria
 *    comparison across competing software platforms, operating models, or M&A targets.
 * 2. Enterprise Architecture Trade-Off Matrices: Evaluating technical feasibility,
 *    security posture, latency, and cost across the full width of the slide.
 * 3. Board Selection & Procurement Governance: Delivering an uncrowded, dense,
 *    comprehensive matrix without compressing the table into a narrow sidebar split.
 * ==============================================================================
 */

interface SlideProps {
  totalSlides: number;
}

// Harvey Ball Fill: 0, 25, 50, 75, 100
type FillLevel = 0 | 25 | 50 | 75 | 100;

interface CriteriaRow {
  domain: string;
  criterion: string;
  weight: number; // percentage
  scores: Record<string, FillLevel>;
}

const CRITERIA_DATA: CriteriaRow[] = [
  {
    domain: 'Architecture',
    criterion: 'Cloud-Native Scalability & Multi-Region Resilience',
    weight: 20,
    scores: { client: 100, hyperscaler: 100, bestOfBreed: 75, legacy: 25 },
  },
  {
    domain: 'Architecture',
    criterion: 'Autonomous AI Agent Orchestration & Low-Latency Mesh',
    weight: 15,
    scores: { client: 100, hyperscaler: 75, bestOfBreed: 50, legacy: 0 },
  },
  {
    domain: 'Security',
    criterion: 'Zero-Trust Cyber Posture & Sovereign Data Compliance',
    weight: 15,
    scores: { client: 100, hyperscaler: 100, bestOfBreed: 50, legacy: 50 },
  },
  {
    domain: 'Financial',
    criterion: 'Total Cost of Ownership (TCO) & Capital Payback Speed',
    weight: 20,
    scores: { client: 75, hyperscaler: 50, bestOfBreed: 75, legacy: 25 },
  },
  {
    domain: 'Delivery',
    criterion: 'Speed to MVP Deployment & Integration Complexity',
    weight: 15,
    scores: { client: 75, hyperscaler: 50, bestOfBreed: 100, legacy: 25 },
  },
  {
    domain: 'Operational',
    criterion: 'Internal Team Skill Uplift & Organizational Ease of Adoption',
    weight: 15,
    scores: { client: 75, hyperscaler: 75, bestOfBreed: 50, legacy: 50 },
  },
];

const VENDORS = [
  { id: 'client', name: 'Proposed Target Architecture (Platform Core)', isRecommended: true },
  { id: 'hyperscaler', name: 'Monolithic Hyperscaler Suite (Option B)', isRecommended: false },
  { id: 'bestOfBreed', name: 'Fragmented Best-of-Breed Point Tools (Option C)', isRecommended: false },
  { id: 'legacy', name: 'Status Quo Legacy Extension (Option D)', isRecommended: false },
];

export const Slide31_FullWidthHarveyBallTable: React.FC<SlideProps> = ({ totalSlides }) => {
  const { dominantColor, headerFont } = useDeckTheme();
  const fontClass = headerFont === 'sans' ? 'font-sans' : 'font-serif';

  // Helper to render Harvey Ball SVG
  const renderHarveyBall = (fill: FillLevel, isSelected: boolean) => {
    const size = 18;
    const color = isSelected ? dominantColor.hex : '#334155';

    if (fill === 100) {
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" className="inline-block">
          <circle cx="12" cy="12" r="10" fill={color} stroke={color} strokeWidth="1.5" />
        </svg>
      );
    }
    if (fill === 75) {
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" className="inline-block">
          <circle cx="12" cy="12" r="10" fill="none" stroke={color} strokeWidth="1.5" />
          <path d="M 12 2 A 10 10 0 1 1 2 12 L 12 12 Z" fill={color} />
        </svg>
      );
    }
    if (fill === 50) {
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" className="inline-block">
          <circle cx="12" cy="12" r="10" fill="none" stroke={color} strokeWidth="1.5" />
          <path d="M 12 2 A 10 10 0 0 1 12 22 L 12 12 Z" fill={color} />
        </svg>
      );
    }
    if (fill === 25) {
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" className="inline-block">
          <circle cx="12" cy="12" r="10" fill="none" stroke={color} strokeWidth="1.5" />
          <path d="M 12 2 A 10 10 0 0 1 22 12 L 12 12 Z" fill={color} />
        </svg>
      );
    }
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" className="inline-block">
        <circle cx="12" cy="12" r="10" fill="none" stroke="#94A3B8" strokeWidth="1.5" />
      </svg>
    );
  };

  // Calculate Weighted Scores
  const calculateWeightedScore = (vendorId: string) => {
    const total = CRITERIA_DATA.reduce((acc, row) => {
      const scoreFraction = row.scores[vendorId] / 100;
      return acc + scoreFraction * row.weight;
    }, 0);
    return total.toFixed(1);
  };

  return (
    <SlideLayout
      slideNumber={19}
      totalSlides={totalSlides}
      kicker="[EVALUATION MATRIX] | FULL-WIDTH VENDOR & ARCHITECTURE COMPARISON"
      actionTitle="[Action Title: Multi-criteria evaluation across weighted dimensions confirms proposed option achieves highest compliance score]"
      sourceText="Source: [Evaluation Committee / Architecture RFP Benchmark & Evaluation Model (YYYY)]"
      categoryTag="VENDOR & ARCHITECTURE SCORING"
    >
      <div className="h-full flex flex-col justify-between gap-2.5">
        {/* Top Legend Bar */}
        <div className="flex items-center justify-between pb-1.5 border-b border-neutral-200 shrink-0">
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-mono font-bold text-neutral-500 uppercase">
              Harvey Ball Scoring Legend:
            </span>
            <div className="flex items-center gap-3 text-[10px] font-mono text-neutral-600">
              <div className="flex items-center gap-1">
                {renderHarveyBall(100, false)}
                <span>100% Fully Meets</span>
              </div>
              <div className="flex items-center gap-1">
                {renderHarveyBall(75, false)}
                <span>75% Substantially Meets</span>
              </div>
              <div className="flex items-center gap-1">
                {renderHarveyBall(50, false)}
                <span>50% Partially Meets</span>
              </div>
              <div className="flex items-center gap-1">
                {renderHarveyBall(25, false)}
                <span>25% Marginally Meets</span>
              </div>
              <div className="flex items-center gap-1">
                {renderHarveyBall(0, false)}
                <span>0% Fails / Non-Compliant</span>
              </div>
            </div>
          </div>

          <span className="text-[10px] font-mono font-bold text-neutral-500 uppercase">
            Total Criteria Weight: 100%
          </span>
        </div>

        {/* Full-Width Harvey Ball Table */}
        <div className="flex-1 overflow-x-auto min-h-0">
          <table className="w-full border-collapse text-left text-xs">
            <thead>
              <tr className="border-b-2 border-neutral-300 bg-neutral-50/90">
                <th className="py-2.5 px-3 text-[11px] font-mono font-bold text-neutral-600 uppercase tracking-wider w-[14%]">
                  Domain
                </th>
                <th className="py-2.5 px-3 text-[11px] font-mono font-bold text-neutral-800 uppercase tracking-wider w-[32%]">
                  Evaluation Criteria
                </th>
                <th className="py-2.5 px-2 text-[11px] font-mono font-bold text-neutral-500 uppercase tracking-wider text-center w-[8%]">
                  Weight
                </th>
                {VENDORS.map((v) => (
                  <th
                    key={v.id}
                    className="py-2.5 px-2 text-[11px] font-mono font-bold uppercase tracking-wider text-center"
                    style={
                      v.isRecommended
                        ? {
                            backgroundColor: dominantColor.lightHex,
                            color: dominantColor.hex,
                            borderTop: `3px solid ${dominantColor.hex}`,
                          }
                        : { color: '#334155' }
                    }
                  >
                    <div className="flex flex-col items-center">
                      <span className="truncate max-w-[140px]">{v.name.split('(')[0]}</span>
                      {v.isRecommended && (
                        <span
                          className="text-[9px] font-bold px-1.5 py-0.2 rounded mt-0.5 text-white"
                          style={{ backgroundColor: dominantColor.hex }}
                        >
                          Recommended
                        </span>
                      )}
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-neutral-200">
              {CRITERIA_DATA.map((row, idx) => (
                <tr key={idx} className="hover:bg-neutral-50/60 transition-colors">
                  <td className="py-2 px-3 font-mono text-[11px] font-bold text-neutral-500 uppercase">
                    {row.domain}
                  </td>
                  <td className="py-2 px-3 font-semibold text-neutral-900 text-xs">
                    {row.criterion}
                  </td>
                  <td className="py-2 px-2 text-center font-mono text-neutral-500 text-xs">
                    {row.weight}%
                  </td>
                  {VENDORS.map((v) => {
                    const score = row.scores[v.id];
                    return (
                      <td
                        key={v.id}
                        className="py-2 px-2 text-center"
                        style={v.isRecommended ? { backgroundColor: `${dominantColor.lightHex}66` } : undefined}
                      >
                        {renderHarveyBall(score, v.isRecommended)}
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr className="border-t-2 border-neutral-300 bg-neutral-100/90 font-mono font-bold text-xs">
                <td colSpan={2} className="py-2.5 px-3 uppercase tracking-wider text-neutral-900">
                  Weighted Composite Score
                </td>
                <td className="py-2.5 px-2 text-center text-neutral-700">100%</td>
                {VENDORS.map((v) => {
                  const score = calculateWeightedScore(v.id);
                  return (
                    <td
                      key={v.id}
                      className="py-2.5 px-2 text-center font-bold text-xs"
                      style={
                        v.isRecommended
                          ? {
                              backgroundColor: dominantColor.lightHex,
                              color: dominantColor.hex,
                              fontSize: '13px',
                            }
                          : { color: '#0F172A' }
                      }
                    >
                      {score}%
                    </td>
                  );
                })}
              </tr>
            </tfoot>
          </table>
        </div>

        {/* Bottom Recommendation Bar */}
        <div className="p-2.5 rounded-lg border border-neutral-200 bg-neutral-50 flex items-center justify-between shrink-0 text-xs text-neutral-700">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full" style={{ backgroundColor: dominantColor.hex }} />
            <span className="font-bold text-neutral-900">[Steering Committee Determination]:</span>
            <span>
              [Proposed target architecture achieves clear differentiation across strategic priorities while preserving favorable total cost of ownership.]
            </span>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
};
