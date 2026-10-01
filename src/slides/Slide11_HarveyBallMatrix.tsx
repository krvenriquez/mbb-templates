import React, { useState } from 'react';
import { motion } from 'motion/react';
import { useDeckTheme } from '../context/ThemeContext';
import {
  CheckCircle2,
  Info,
  Layers,
  ArrowRight,
  Filter,
} from 'lucide-react';

/**
 * ==============================================================================
 * SLIDE TEMPLATE: HARVEY BALL CAPABILITY & VENDOR SCORECARD
 * ==============================================================================
 * 
 * WHEN TO USE THIS TEMPLATE:
 * --------------------------
 * 1. Vendor & Software Selection: Evaluating enterprise ERP, CRM, Cloud, or AI
 *    vendors against weighted client requirements.
 * 2. M&A Target Commercial Due Diligence: Benchmarking acquisition targets against
 *    incumbent competitors across operational, technological, and commercial axes.
 * 3. Enterprise Capability Gap Analysis: Assessing organizational maturity across
 *    business units or functional divisions against top-quartile industry peers.
 * 4. Technology Modernization Architecture: Evaluating build vs. buy vs. partner
 *    options during digital transformation discovery.
 * 5. Target Operating Model (TOM) Feasibility: Scoring organizational readiness
 *    across change dimensions prior to large-scale rollouts.
 * 
 * CONSULTING GUIDELINES & BEST PRACTICES:
 * ---------------------------------------
 * - MECE Criteria: Group evaluation criteria into mutually exclusive, collectively
 *   exhaustive categories (e.g., Strategic Fit, Technical Readiness, Total Cost).
 * - Harvey Ball Semantics: 
 *     Empty (0%) = Absent / High Risk
 *     1/4 (25%)  = Basic / Developing
 *     1/2 (50%)  = Adequate / Meets Standard
 *     3/4 (75%)  = Advanced / Exceeds Standard
 *     Full (100%)= Top-Quartile Industry Benchmark / Optimal
 * - Action Title Rule: The lead headline should synthesize the recommendation
 *   (e.g., "Vendor A leads on technical architecture, but Target Platform provides
 *   the superior total cost and implementation velocity").
 * ==============================================================================
 */

interface SlideProps {
  totalSlides: number;
}

type HarveyScore = 0 | 25 | 50 | 75 | 100;

interface CriteriaItem {
  id: string;
  category: string;
  criteria: string;
  weight: number; // percentage
  targetScore: HarveyScore;
  peerAScore: HarveyScore;
  peerBScore: HarveyScore;
  legacyScore: HarveyScore;
  strategicNote: string;
}

const INITIAL_CRITERIA: CriteriaItem[] = [
  {
    id: 'c1',
    category: 'Architecture & Tech',
    criteria: 'Cloud-Native Scalability & Microservices',
    weight: 20,
    targetScore: 100,
    peerAScore: 75,
    peerBScore: 50,
    legacyScore: 25,
    strategicNote: 'Target platform enables multi-region auto-scaling with zero downtime.',
  },
  {
    id: 'c2',
    category: 'Architecture & Tech',
    criteria: 'Open API Ecosystem & System Integration',
    weight: 15,
    targetScore: 75,
    peerAScore: 100,
    peerBScore: 50,
    legacyScore: 0,
    strategicNote: 'Pre-built connectors reduce systems integration lead times by ~40%.',
  },
  {
    id: 'c3',
    category: 'Security & Governance',
    criteria: 'Zero-Trust Security & Compliance Certification',
    weight: 15,
    targetScore: 100,
    peerAScore: 75,
    peerBScore: 75,
    legacyScore: 25,
    strategicNote: 'Full SOC2 Type II, ISO27001, and HIPAA compliance out of the box.',
  },
  {
    id: 'c4',
    category: 'Economics & Value',
    criteria: 'Total Cost of Ownership (3-Yr TCO Runway)',
    weight: 20,
    targetScore: 75,
    peerAScore: 50,
    peerBScore: 50,
    legacyScore: 25,
    strategicNote: 'Consumption-based license structure minimizes upfront capital commitments.',
  },
  {
    id: 'c5',
    category: 'Operations & GTM',
    criteria: 'Implementation Speed & Time-to-First-Value',
    weight: 15,
    targetScore: 100,
    peerAScore: 50,
    peerBScore: 75,
    legacyScore: 50,
    strategicNote: 'Estimated 90-day pilot deployment vs. 9-month industry average.',
  },
  {
    id: 'c6',
    category: 'Operations & GTM',
    criteria: 'Change Management & Workforce Friction',
    weight: 15,
    targetScore: 75,
    peerAScore: 50,
    peerBScore: 25,
    legacyScore: 25,
    strategicNote: 'Intuitive modern UI lowers employee retraining overhead significantly.',
  },
];

const HarveyBallIcon: React.FC<{
  score: HarveyScore;
  size?: number;
  color?: string;
  onClick?: () => void;
}> = ({ score, size = 18, color = '#C8102E', onClick }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      title={`Score: ${score}% (Click to cycle)`}
      className={`inline-flex items-center justify-center transition-transform hover:scale-110 active:scale-95 ${
        onClick ? 'cursor-pointer' : ''
      }`}
      style={{ width: size, height: size }}
    >
      <svg width={size} height={size} viewBox="0 0 24 24" className="shrink-0">
        {/* Background Circle */}
        <circle cx="12" cy="12" r="10" fill="#F1F5F9" stroke="#94A3B8" strokeWidth="1.75" />
        
        {/* Quarter Fills */}
        {score === 25 && (
          <path
            d="M 12 12 L 12 2 A 10 10 0 0 1 22 12 Z"
            fill={color}
          />
        )}
        {score === 50 && (
          <path
            d="M 12 12 L 12 2 A 10 10 0 0 1 12 22 Z"
            fill={color}
          />
        )}
        {score === 75 && (
          <path
            d="M 12 12 L 12 2 A 10 10 0 1 1 2 12 Z"
            fill={color}
          />
        )}
        {score === 100 && (
          <circle cx="12" cy="12" r="10" fill={color} />
        )}
      </svg>
    </button>
  );
};

export const Slide11_HarveyBallMatrix: React.FC<SlideProps> = ({ totalSlides }) => {
  const { dominantColor, headerFont } = useDeckTheme();
  const fontClass = headerFont === 'sans' ? 'font-sans' : 'font-serif';

  const [criteriaList, setCriteriaList] = useState<CriteriaItem[]>(INITIAL_CRITERIA);
  const [selectedRow, setSelectedRow] = useState<CriteriaItem>(INITIAL_CRITERIA[0]);
  const [categoryFilter, setCategoryFilter] = useState<string>('ALL');

  // Cycle score on click
  const cycleScore = (score: HarveyScore): HarveyScore => {
    const sequence: HarveyScore[] = [0, 25, 50, 75, 100];
    const currentIndex = sequence.indexOf(score);
    return sequence[(currentIndex + 1) % sequence.length];
  };

  const handleScoreChange = (id: string, field: 'targetScore' | 'peerAScore' | 'peerBScore' | 'legacyScore') => {
    setCriteriaList((prev) =>
      prev.map((item) => {
        if (item.id === id) {
          const updated = { ...item, [field]: cycleScore(item[field]) };
          if (selectedRow.id === id) setSelectedRow(updated);
          return updated;
        }
        return item;
      })
    );
  };

  // Calculate weighted scores (out of 100)
  const calcWeightedScore = (field: 'targetScore' | 'peerAScore' | 'peerBScore' | 'legacyScore') => {
    const totalWeight = criteriaList.reduce((sum, item) => sum + item.weight, 0);
    const weightedSum = criteriaList.reduce((sum, item) => sum + item[field] * (item.weight / 100), 0);
    return Math.round((weightedSum / totalWeight) * 100);
  };

  const filteredCriteria = categoryFilter === 'ALL'
    ? criteriaList
    : criteriaList.filter((c) => c.category === categoryFilter);

  const categories = ['ALL', 'Architecture & Tech', 'Security & Governance', 'Economics & Value', 'Operations & GTM'];

  return (
    <div
      className="relative w-full h-full bg-white text-neutral-900 flex flex-col justify-between overflow-hidden p-6 sm:p-8 md:p-10 select-none"
      style={{ aspectRatio: '16/9' }}
    >
      {/* 1. Header Block with Kicker and Action Title */}
      <div className="shrink-0 pb-2.5 border-b border-neutral-200">
        <div className="flex items-center justify-between mb-1">
          <div className="flex items-center gap-2">
            <span
              className="text-[10px] sm:text-xs font-bold uppercase tracking-widest font-mono"
              style={{ color: dominantColor.hex }}
            >
              [CAPABILITY DIAGNOSTIC] | HARVEY BALL SCORECARD
            </span>
            <span className="text-neutral-300">|</span>
            <span className="text-[10px] font-mono text-neutral-400">
              STRATEGIC BENCHMARK MATRIX
            </span>
          </div>

          <div className="flex items-center gap-3 text-[11px] text-neutral-500 font-medium">
            <span className="hidden sm:inline text-neutral-400">Harvey Ball Legend:</span>
            <div className="flex items-center gap-1.5">
              <HarveyBallIcon score={0} size={14} color={dominantColor.hex} />
              <span className="text-[10px]">0%</span>
            </div>
            <div className="flex items-center gap-1.5">
              <HarveyBallIcon score={25} size={14} color={dominantColor.hex} />
              <span className="text-[10px]">25%</span>
            </div>
            <div className="flex items-center gap-1.5">
              <HarveyBallIcon score={50} size={14} color={dominantColor.hex} />
              <span className="text-[10px]">50%</span>
            </div>
            <div className="flex items-center gap-1.5">
              <HarveyBallIcon score={75} size={14} color={dominantColor.hex} />
              <span className="text-[10px]">75%</span>
            </div>
            <div className="flex items-center gap-1.5">
              <HarveyBallIcon score={100} size={14} color={dominantColor.hex} />
              <span className="text-[10px]">100%</span>
            </div>
          </div>
        </div>

        <h2 className={`${fontClass} text-base sm:text-lg md:text-xl lg:text-[22px] font-bold text-neutral-900 leading-snug`}>
          [Action Title: Target platform establishes clear dominance across scalability and TCO, outperforming legacy peers by +38% overall]
        </h2>
      </div>

      {/* 2. Main Body Grid: Table + Side Diagnostic Detail */}
      <div className="flex-1 grid grid-cols-12 gap-4 py-3 min-h-0 overflow-hidden">
        {/* Left Table Section */}
        <div className="col-span-12 lg:col-span-8 flex flex-col justify-between border border-neutral-200 rounded-lg bg-neutral-50/40 p-3 overflow-hidden">
          {/* Category Filter Pills */}
          <div className="flex items-center gap-1.5 pb-2 overflow-x-auto shrink-0 border-b border-neutral-200/80">
            <Filter size={12} className="text-neutral-400 ml-1 shrink-0" />
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setCategoryFilter(cat)}
                className={`px-2 py-0.5 rounded-full text-[10px] font-medium transition-colors cursor-pointer shrink-0 ${
                  categoryFilter === cat
                    ? 'text-white font-semibold'
                    : 'text-neutral-600 hover:text-neutral-900 bg-white hover:bg-neutral-100 border border-neutral-200'
                }`}
                style={categoryFilter === cat ? { backgroundColor: dominantColor.hex } : undefined}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Table Container */}
          <div className="flex-1 overflow-y-auto mt-1">
            <table className="w-full text-left border-collapse text-xs">
              <thead>
                <tr className="border-b border-neutral-200 text-[10px] uppercase font-bold text-neutral-500 tracking-wider">
                  <th className="py-2 px-2 font-semibold">Evaluation Criteria</th>
                  <th className="py-2 px-1 text-center font-semibold w-12">Weight</th>
                  <th className="py-2 px-2 text-center font-bold text-neutral-900 bg-neutral-100/80 rounded-t w-20">
                    Target
                  </th>
                  <th className="py-2 px-2 text-center font-semibold w-20">Peer A</th>
                  <th className="py-2 px-2 text-center font-semibold w-20">Peer B</th>
                  <th className="py-2 px-2 text-center font-semibold w-20">Legacy</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-200/70">
                {filteredCriteria.map((item) => {
                  const isSelected = selectedRow.id === item.id;
                  return (
                    <tr
                      key={item.id}
                      onClick={() => setSelectedRow(item)}
                      className={`cursor-pointer transition-colors ${
                        isSelected ? 'bg-white shadow-2xs font-medium' : 'hover:bg-neutral-100/60'
                      }`}
                    >
                      <td className="py-2 px-2">
                        <div className="text-[11px] font-semibold text-neutral-900 leading-tight">
                          {item.criteria}
                        </div>
                        <div className="text-[9px] text-neutral-400 uppercase font-mono">
                          {item.category}
                        </div>
                      </td>
                      <td className="py-2 px-1 text-center font-mono text-[10px] text-neutral-500">
                        {item.weight}%
                      </td>
                      <td className="py-2 px-2 text-center bg-neutral-100/50">
                        <HarveyBallIcon
                          score={item.targetScore}
                          size={18}
                          color={dominantColor.hex}
                          onClick={() => handleScoreChange(item.id, 'targetScore')}
                        />
                      </td>
                      <td className="py-2 px-2 text-center">
                        <HarveyBallIcon
                          score={item.peerAScore}
                          size={18}
                          color="#64748B"
                          onClick={() => handleScoreChange(item.id, 'peerAScore')}
                        />
                      </td>
                      <td className="py-2 px-2 text-center">
                        <HarveyBallIcon
                          score={item.peerBScore}
                          size={18}
                          color="#64748B"
                          onClick={() => handleScoreChange(item.id, 'peerBScore')}
                        />
                      </td>
                      <td className="py-2 px-2 text-center">
                        <HarveyBallIcon
                          score={item.legacyScore}
                          size={18}
                          color="#94A3B8"
                          onClick={() => handleScoreChange(item.id, 'legacyScore')}
                        />
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          {/* Weighted Score Summary Bar */}
          <div className="pt-2 mt-1 border-t border-neutral-300 grid grid-cols-12 gap-1 items-center bg-white p-2 rounded-md shadow-2xs text-xs">
            <div className="col-span-4 text-[10px] uppercase font-bold text-neutral-600">
              Weighted Capability Index
            </div>
            <div className="col-span-1 text-center font-mono text-[10px] text-neutral-400">
              100%
            </div>
            <div className="col-span-2 text-center font-bold text-neutral-950 font-mono text-sm" style={{ color: dominantColor.hex }}>
              {calcWeightedScore('targetScore')}%
            </div>
            <div className="col-span-2 text-center font-bold text-neutral-700 font-mono text-xs">
              {calcWeightedScore('peerAScore')}%
            </div>
            <div className="col-span-2 text-center font-bold text-neutral-600 font-mono text-xs">
              {calcWeightedScore('peerBScore')}%
            </div>
            <div className="col-span-1 text-center font-bold text-neutral-400 font-mono text-xs">
              {calcWeightedScore('legacyScore')}%
            </div>
          </div>
        </div>

        {/* Right Side: Detailed Diagnostic Panel & Takeaway */}
        <div className="col-span-12 lg:col-span-4 flex flex-col justify-between space-y-3">
          {/* Inspected Criterion Deep Dive */}
          <div className="p-3.5 rounded-lg border border-neutral-200 bg-white shadow-xs space-y-2.5">
            <div className="flex items-center justify-between border-b border-neutral-100 pb-1.5">
              <span
                className="text-[10px] font-bold uppercase tracking-wider"
                style={{ color: dominantColor.hex }}
              >
                Diagnostic Deep Dive
              </span>
              <span className="text-[10px] font-mono text-neutral-400">
                Weight: {selectedRow.weight}%
              </span>
            </div>

            <div className="text-xs font-bold text-neutral-950">
              {selectedRow.criteria}
            </div>

            <p className="text-[11px] text-neutral-600 leading-relaxed">
              {selectedRow.strategicNote}
            </p>

            <div className="grid grid-cols-2 gap-2 pt-2 border-t border-neutral-100 text-[11px]">
              <div className="p-2 rounded bg-neutral-50 border border-neutral-200">
                <span className="block text-[9px] uppercase font-bold text-neutral-400">Target Maturity</span>
                <div className="flex items-center gap-1.5 mt-0.5">
                  <HarveyBallIcon score={selectedRow.targetScore} size={15} color={dominantColor.hex} />
                  <span className="font-bold text-neutral-900">{selectedRow.targetScore}% Full</span>
                </div>
              </div>

              <div className="p-2 rounded bg-neutral-50 border border-neutral-200">
                <span className="block text-[9px] uppercase font-bold text-neutral-400">Peer A Benchmark</span>
                <div className="flex items-center gap-1.5 mt-0.5">
                  <HarveyBallIcon score={selectedRow.peerAScore} size={15} color="#64748B" />
                  <span className="font-bold text-neutral-700">{selectedRow.peerAScore}% Full</span>
                </div>
              </div>
            </div>
          </div>

          {/* Strategic Synthesis Callout */}
          <div
            className="p-3.5 rounded-lg border flex flex-col justify-between flex-1"
            style={{
              backgroundColor: dominantColor.lightHex,
              borderColor: dominantColor.borderHex,
            }}
          >
            <div>
              <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider mb-1" style={{ color: dominantColor.hex }}>
                <CheckCircle2 size={14} />
                <span>Executive Steering Recommendation</span>
              </div>
              <p className="text-[11px] text-neutral-700 leading-relaxed">
                [Synthesize core recommendation: Target platform satisfies all tier-1 non-negotiable security requirements and offers a 3-year TCO advantage of ~$14.2M over legacy alternatives. Recommend proceeding to commercial contracting.]
              </p>
            </div>

            <div className="mt-2 pt-2 border-t border-neutral-200/40 text-[10px] font-mono text-neutral-500 flex items-center justify-between">
              <span>Interactive: Click any Harvey Ball to update state</span>
              <ArrowRight size={12} />
            </div>
          </div>
        </div>
      </div>

      {/* 3. Standard Footer */}
      <div className="shrink-0 pt-2 border-t border-neutral-200 flex items-center justify-between text-[11px] text-neutral-500 font-mono">
        <div>Source: [Vendor Due Diligence Audit & Enterprise Architecture Scorecard, 2026]</div>
        <div className="italic">Slide 12 / {String(totalSlides).padStart(2, '0')}</div>
      </div>
    </div>
  );
};
