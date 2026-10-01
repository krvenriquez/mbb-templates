import React, { useState } from 'react';
import { motion } from 'motion/react';
import { useDeckTheme } from '../context/ThemeContext';
import {
  AlertTriangle,
  Flame,
  ShieldAlert,
  CheckCircle2,
  Info,
  Sliders,
  ChevronRight,
} from 'lucide-react';

/**
 * ==============================================================================
 * SLIDE TEMPLATE: 2D STRATEGIC RISK & PRIORITIZATION HEATMAP
 * ==============================================================================
 * 
 * WHEN TO USE THIS TEMPLATE:
 * --------------------------
 * 1. Enterprise Risk Management (ERM) & Vulnerability Audits: Mapping business,
 *    macro, regulatory, and cybersecurity risks across Likelihood vs. Financial Impact.
 * 2. Strategic Portfolio Prioritization: Evaluating new product launches, M&A options,
 *    or capital projects across Strategic Value vs. Implementation Complexity.
 * 3. Board of Directors Governance Overviews: Providing concise visual heatmaps
 *    of enterprise exposure to guide executive resource allocation.
 * 4. Post-Merger Integration (PMI) Synergies: Triaging synergy capture initiatives
 *    by net financial yield versus operational execution friction.
 * 5. Digital Transformation Roadmapping: Identifying high-impact, high-feasibility
 *    quick wins versus high-risk structural transformation bets.
 * 
 * CONSULTING GUIDELINES & BEST PRACTICES:
 * ---------------------------------------
 * - MECE Axes: Both the vertical (e.g. Likelihood / Feasibility) and horizontal
 *   (e.g. Impact / Strategic Value) axes should have defined ordinal gradations.
 * - Discrete Numbered Tokens: Avoid cluttering cells with long sentences; use
 *   distinct numeric identifiers (e.g. R1, R2, R3) and index them in a clear ledger.
 * - Action Title Rule: Directly articulate the governance mandate or key exposure
 *   (e.g. "Three high-severity operational risks require immediate Board mitigation
 *   to safeguard $85M in projected cost synergies").
 * ==============================================================================
 */

interface SlideProps {
  totalSlides: number;
}

interface HeatmapItem {
  id: string;
  code: string;
  title: string;
  category: 'Operational' | 'Regulatory' | 'Commercial' | 'Cybersecurity' | 'Financial';
  likelihood: number; // 1 to 5 (y-axis)
  impact: number;     // 1 to 5 (x-axis)
  exposureValue: string;
  mitigationOwner: string;
  mitigationStatus: 'Active Mitigation' | 'Under Review' | 'Remediated';
  summary: string;
}

const HEATMAP_ITEMS: HeatmapItem[] = [
  {
    id: 'r1',
    code: 'R1',
    title: 'Tier-1 Supplier Semiconductor Bottleneck',
    category: 'Operational',
    likelihood: 5,
    impact: 5,
    exposureValue: '$42M / yr',
    mitigationOwner: 'Chief Operating Officer',
    mitigationStatus: 'Active Mitigation',
    summary: 'Single-source dependency across APAC assembly line creates catastrophic shipment halts if disruption persists.',
  },
  {
    id: 'r2',
    code: 'R2',
    title: 'Cross-Border Data Compliance Penalty (GDPR/CCPA)',
    category: 'Regulatory',
    likelihood: 4,
    impact: 5,
    exposureValue: '$28M fine',
    mitigationOwner: 'General Counsel & DPO',
    mitigationStatus: 'Active Mitigation',
    summary: 'Legacy data lakes lack automated retention controls, exposing the firm to statutory regulatory penalties.',
  },
  {
    id: 'r3',
    code: 'R3',
    title: 'Ransomware Vector on Legacy SCADA Systems',
    category: 'Cybersecurity',
    likelihood: 4,
    impact: 4,
    exposureValue: '$18M downtime',
    mitigationOwner: 'Chief Information Security Officer',
    mitigationStatus: 'Under Review',
    summary: 'Unpatched firmware at manufacturing facilities poses high operational and reputational disruption risk.',
  },
  {
    id: 'r4',
    code: 'R4',
    title: 'Key Enterprise Account Churn During ERP Migration',
    category: 'Commercial',
    likelihood: 3,
    impact: 4,
    exposureValue: '$15M ARR',
    mitigationOwner: 'Chief Commercial Officer',
    mitigationStatus: 'Active Mitigation',
    summary: 'Billing transition glitches could spur customer defections during Q3 contract renewal cycle.',
  },
  {
    id: 'r5',
    code: 'R5',
    title: 'Foreign Exchange (FX) Volatility in Emerging Markets',
    category: 'Financial',
    likelihood: 5,
    impact: 2,
    exposureValue: '$8M margin',
    mitigationOwner: 'Corporate Treasurer',
    mitigationStatus: 'Remediated',
    summary: 'Currency fluctuations in Latin America partially offset by dynamic treasury hedging instruments.',
  },
  {
    id: 'r6',
    code: 'R6',
    title: 'Engineering Talent Attrition to Tech Incumbents',
    category: 'Operational',
    likelihood: 3,
    impact: 3,
    exposureValue: '$6M recruiting',
    mitigationOwner: 'Chief People Officer',
    mitigationStatus: 'Under Review',
    summary: 'Competitive salary pressure requires adjusted retention bonuses for senior software architects.',
  },
];

export const Slide12_StrategicHeatmap: React.FC<SlideProps> = ({ totalSlides }) => {
  const { dominantColor, headerFont } = useDeckTheme();
  const fontClass = headerFont === 'sans' ? 'font-sans' : 'font-serif';

  const [selectedItem, setSelectedItem] = useState<HeatmapItem>(HEATMAP_ITEMS[0]);
  const [filterCategory, setFilterCategory] = useState<string>('ALL');

  const filteredItems = filterCategory === 'ALL'
    ? HEATMAP_ITEMS
    : HEATMAP_ITEMS.filter((item) => item.category === filterCategory);

  // Compute cell background color based on coordinates (x: Impact 1-5, y: Likelihood 1-5)
  const getCellSeverity = (x: number, y: number) => {
    const score = x * y;
    if (score >= 16) return { bg: 'bg-rose-600', text: 'text-white', label: 'CRITICAL' };
    if (score >= 10) return { bg: 'bg-amber-500', text: 'text-white', label: 'HIGH' };
    if (score >= 5) return { bg: 'bg-amber-200', text: 'text-neutral-900', label: 'MEDIUM' };
    return { bg: 'bg-emerald-100', text: 'text-emerald-950', label: 'LOW' };
  };

  const categories = ['ALL', 'Operational', 'Regulatory', 'Commercial', 'Cybersecurity', 'Financial'];

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
              [ENTERPRISE RISK GOVERNANCE] | 2D HEATMAP MATRIX
            </span>
            <span className="text-neutral-300">|</span>
            <span className="text-[10px] font-mono text-neutral-400">
              SEVERITY & FINANCIAL EXPOSURE
            </span>
          </div>

          <div className="flex items-center gap-2 text-[10px] font-semibold">
            <span className="flex items-center gap-1">
              <span className="w-2.5 h-2.5 rounded-xs bg-rose-600 inline-block" /> Critical (16-25)
            </span>
            <span className="flex items-center gap-1">
              <span className="w-2.5 h-2.5 rounded-xs bg-amber-500 inline-block" /> High (10-15)
            </span>
            <span className="flex items-center gap-1">
              <span className="w-2.5 h-2.5 rounded-xs bg-amber-200 inline-block" /> Medium (5-9)
            </span>
            <span className="flex items-center gap-1">
              <span className="w-2.5 h-2.5 rounded-xs bg-emerald-100 border border-emerald-300 inline-block" /> Low (1-4)
            </span>
          </div>
        </div>

        <h2 className={`${fontClass} text-base sm:text-lg md:text-xl lg:text-[22px] font-bold text-neutral-900 leading-snug`}>
          [Action Title: 3 critical exposures concentrated in supply chain and data governance represent $70M+ in immediate financial exposure]
        </h2>
      </div>

      {/* 2. Main 2D Heatmap Grid + Risk Ledger */}
      <div className="flex-1 grid grid-cols-12 gap-4 py-3 min-h-0 overflow-hidden">
        {/* Left 5x5 Heatmap Matrix */}
        <div className="col-span-12 lg:col-span-7 flex flex-col justify-between border border-neutral-200 rounded-lg p-3 bg-neutral-50/50">
          <div className="flex items-center justify-between pb-1.5 border-b border-neutral-200 text-xs">
            <span className="text-[10px] font-bold uppercase tracking-wider text-neutral-500">
              Likelihood vs. Financial Impact Matrix
            </span>
            <span className="text-[10px] font-mono text-neutral-400">
              5x5 Calibrated Scale
            </span>
          </div>

          <div className="relative flex-1 flex items-center justify-center my-1">
            {/* Y-Axis Label */}
            <div className="absolute -left-6 top-1/2 -translate-y-1/2 -rotate-90 text-[10px] font-bold uppercase tracking-wider text-neutral-500 font-mono whitespace-nowrap">
              Likelihood / Probability →
            </div>

            {/* Matrix Grid Container */}
            <div className="w-full max-w-[420px] aspect-square grid grid-rows-5 gap-1 pl-4 pb-4">
              {[5, 4, 3, 2, 1].map((yVal) => (
                <div key={yVal} className="grid grid-cols-5 gap-1">
                  {[1, 2, 3, 4, 5].map((xVal) => {
                    const severity = getCellSeverity(xVal, yVal);
                    // Find items residing in this cell
                    const itemsInCell = filteredItems.filter(
                      (item) => item.likelihood === yVal && item.impact === xVal
                    );

                    return (
                      <div
                        key={`${yVal}-${xVal}`}
                        className={`relative rounded-sm transition-all flex flex-wrap items-center justify-center p-1 gap-1 border border-black/5 ${severity.bg}`}
                      >
                        {/* Token Markers */}
                        {itemsInCell.map((item) => {
                          const isSelected = selectedItem.id === item.id;
                          return (
                            <button
                              key={item.id}
                              type="button"
                              onClick={() => setSelectedItem(item)}
                              title={`${item.code}: ${item.title}`}
                              className={`w-6 h-6 rounded-full text-[10px] font-bold font-mono flex items-center justify-center shadow-md transition-all cursor-pointer ${
                                isSelected
                                  ? 'bg-neutral-950 text-white ring-2 ring-white scale-110 z-10'
                                  : 'bg-white text-neutral-900 hover:scale-105'
                              }`}
                            >
                              {item.code}
                            </button>
                          );
                        })}
                      </div>
                    );
                  })}
                </div>
              ))}
            </div>

            {/* X-Axis Label */}
            <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 text-[10px] font-bold uppercase tracking-wider text-neutral-500 font-mono">
              Business & Financial Impact →
            </div>
          </div>

          <div className="flex items-center justify-between pt-1 border-t border-neutral-200 text-[10px] text-neutral-400 font-mono">
            <span>[1: Minor / &lt;$1M]</span>
            <span>[3: Moderate / $5M-$15M]</span>
            <span>[5: Catastrophic / &gt;$30M]</span>
          </div>
        </div>

        {/* Right Detail Pane: Selected Item + Ledger */}
        <div className="col-span-12 lg:col-span-5 flex flex-col justify-between space-y-3">
          {/* Active Item Deep Dive */}
          <div className="p-3.5 rounded-lg border border-neutral-200 bg-white shadow-xs space-y-2">
            <div className="flex items-center justify-between border-b border-neutral-100 pb-1.5">
              <div className="flex items-center gap-1.5">
                <span
                  className="w-5 h-5 rounded-full text-white text-[10px] font-mono font-bold flex items-center justify-center"
                  style={{ backgroundColor: dominantColor.hex }}
                >
                  {selectedItem.code}
                </span>
                <span className="text-[10px] font-bold uppercase tracking-wider text-neutral-500">
                  {selectedItem.category} Exposure
                </span>
              </div>
              <span className="text-[10px] font-bold font-mono px-2 py-0.5 rounded bg-rose-50 text-rose-700 border border-rose-200">
                Exposure: {selectedItem.exposureValue}
              </span>
            </div>

            <h3 className="text-xs font-bold text-neutral-950">
              {selectedItem.title}
            </h3>

            <p className="text-[11px] text-neutral-600 leading-relaxed">
              {selectedItem.summary}
            </p>

            <div className="grid grid-cols-2 gap-2 pt-2 border-t border-neutral-100 text-[10px]">
              <div>
                <span className="block uppercase text-neutral-400 font-bold">Mitigation Owner</span>
                <span className="font-semibold text-neutral-900">{selectedItem.mitigationOwner}</span>
              </div>
              <div>
                <span className="block uppercase text-neutral-400 font-bold">Governance Status</span>
                <span className="font-semibold text-neutral-900 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  {selectedItem.mitigationStatus}
                </span>
              </div>
            </div>
          </div>

          {/* Quick Ledger List */}
          <div className="p-3 rounded-lg border border-neutral-200 bg-neutral-50 flex-1 flex flex-col justify-between overflow-hidden">
            <div className="flex items-center justify-between pb-1.5 border-b border-neutral-200 text-xs">
              <span className="text-[10px] font-bold uppercase tracking-wider text-neutral-700">
                Enterprise Exposure Register
              </span>
              <span className="text-[10px] font-mono text-neutral-400">
                {HEATMAP_ITEMS.length} Key Vectors
              </span>
            </div>

            <div className="overflow-y-auto space-y-1.5 my-1.5 flex-1 pr-1">
              {HEATMAP_ITEMS.map((item) => {
                const isSelected = selectedItem.id === item.id;
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setSelectedItem(item)}
                    className={`w-full text-left p-1.5 rounded flex items-center justify-between transition-colors cursor-pointer text-xs ${
                      isSelected ? 'bg-white shadow-2xs font-semibold' : 'hover:bg-white/60 text-neutral-700'
                    }`}
                  >
                    <div className="flex items-center gap-2 truncate">
                      <span className="w-5 font-mono text-[10px] font-bold text-neutral-400">
                        {item.code}
                      </span>
                      <span className="truncate text-[11px]">{item.title}</span>
                    </div>
                    <span className="text-[10px] font-mono font-bold text-neutral-900 shrink-0 ml-2">
                      {item.exposureValue}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Bottom Recommendation Ribbon */}
            <div
              className="p-2 rounded border text-[11px] flex items-center gap-2"
              style={{
                backgroundColor: dominantColor.lightHex,
                borderColor: dominantColor.borderHex,
                color: dominantColor.hex,
              }}
            >
              <CheckCircle2 size={13} className="shrink-0" />
              <span className="font-semibold text-neutral-800 truncate">
                Steering Mandate: Prioritize immediate Capex authorization for R1 dual-sourcing
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* 3. Standard Footer */}
      <div className="shrink-0 pt-2 border-t border-neutral-200 flex items-center justify-between text-[11px] text-neutral-500 font-mono">
        <div>Source: [Enterprise Risk Committee & Internal Audit Working Model, 2026]</div>
        <div className="italic">Slide 13 / {String(totalSlides).padStart(2, '0')}</div>
      </div>
    </div>
  );
};
