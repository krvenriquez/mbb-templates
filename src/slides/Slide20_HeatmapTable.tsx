import React, { useState } from 'react';
import { SlideLayout } from '../components/SlideLayout';
import { useDeckTheme } from '../context/ThemeContext';
import { CalloutBox } from '../components/CalloutBox';
import { AlertCircle, Filter } from 'lucide-react';

/**
 * ==============================================================================
 * SLIDE TEMPLATE: STRATEGIC HEATMAP TABLE
 * ==============================================================================
 * 
 * WHEN TO USE THIS TEMPLATE:
 * --------------------------
 * 1. Enterprise Maturity & Capability Benchmarking: Assessing operational readiness
 *    across multiple business units or geographic divisions simultaneously.
 * 2. Enterprise Risk & Vulnerability Diagnostics: Highlighting systemic exposure
 *    across regulatory, cyber, supply chain, and credit domains.
 * 3. Post-Merger Synergy & Integration Audits: Comparing departmental alignment
 *    and system harmonization progress across acquiring and target entities.
 * 
 * CONSULTING GUIDELINES & BEST PRACTICES:
 * ---------------------------------------
 * - Visual Intensity Encoding: Utilize subtle, high-contrast tint gradients
 *   calibrated to the firm's dominant accent color rather than chaotic rainbow spectrums.
 * - Marginal Totals & Synthesis: Always provide row and column weighted averages
 *   to help steering committees identify systemic macro themes immediately.
 * - Explicit Numerical & Categorical Anchors: Ensure every cell displays its raw
 *   index (e.g. 1.0 to 5.0) alongside categorical shading.
 * ==============================================================================
 */

interface SlideProps {
  totalSlides: number;
}

interface CapabilityRow {
  category: string;
  capability: string;
  scores: number[]; // 5 business units: [NA, EMEA, APAC, LATAM, Global HQ]
}

const HEATMAP_DATA: CapabilityRow[] = [
  { category: 'Data & Cloud', capability: 'Cloud Native Infrastructure', scores: [4.4, 3.8, 3.2, 2.4, 4.6] },
  { category: 'Data & Cloud', capability: 'Automated Data Governance', scores: [3.9, 3.4, 2.6, 2.1, 4.2] },
  { category: 'AI & Automation', capability: 'Production AI / ML Ops', scores: [4.1, 3.1, 2.8, 1.8, 3.9] },
  { category: 'AI & Automation', capability: 'GenAI Enterprise Tooling', scores: [3.6, 2.8, 2.5, 1.5, 3.7] },
  { category: 'Cyber & Risk', capability: 'Zero-Trust Security Posture', scores: [4.5, 4.2, 3.7, 2.9, 4.8] },
  { category: 'Cyber & Risk', capability: 'Vendor Resilience Auditing', scores: [3.8, 3.5, 3.0, 2.5, 4.0] },
  { category: 'Organization', capability: 'Agile Product Operating Model', scores: [4.0, 3.6, 2.9, 2.2, 4.1] },
];

const COLUMNS = ['North America', 'EMEA', 'APAC', 'LATAM', 'Global Core'];

export const Slide20_HeatmapTable: React.FC<SlideProps> = ({ totalSlides }) => {
  const { dominantColor, headerFont } = useDeckTheme();
  const fontClass = headerFont === 'sans' ? 'font-sans' : 'font-serif';
  const [selectedFilter, setSelectedFilter] = useState<string>('All');

  const categories = ['All', 'Data & Cloud', 'AI & Automation', 'Cyber & Risk', 'Organization'];

  const filteredData = selectedFilter === 'All'
    ? HEATMAP_DATA
    : HEATMAP_DATA.filter((r) => r.category === selectedFilter);

  // Helper for heatmap cell color intensity
  const getCellBg = (score: number) => {
    if (score >= 4.2) return { bg: dominantColor.hex, text: '#ffffff', label: 'Advanced' };
    if (score >= 3.5) return { bg: dominantColor.borderHex, text: '#0f172a', label: 'Proficient' };
    if (score >= 2.5) return { bg: dominantColor.lightHex, text: dominantColor.hex, label: 'Developing' };
    return { bg: '#F1F5F9', text: '#64748B', label: 'Nascent' };
  };

  // Column Averages
  const colAverages = COLUMNS.map((_, colIdx) => {
    const sum = filteredData.reduce((acc, row) => acc + row.scores[colIdx], 0);
    return (sum / (filteredData.length || 1)).toFixed(1);
  });

  return (
    <SlideLayout
      slideNumber={18}
      totalSlides={totalSlides}
      kicker="[DIAGNOSTIC BENCHMARK] | REGIONAL MATURITY HEATMAP"
      actionTitle="[Action Title: Regional capability audit reveals critical delivery asymmetry across operating hubs and business units]"
      sourceText="Source: [Strategic Transformation Program Office / Capability Maturity Diagnostic (YYYY)]"
      categoryTag="CAPABILITY DIAGNOSTIC"
    >
      <div className="h-full flex flex-col justify-between gap-2.5">
        {/* Top Control Bar & Legend */}
        <div className="flex flex-wrap items-center justify-between gap-2 pb-1 border-b border-neutral-200 shrink-0">
          <div className="flex items-center gap-1.5 text-xs">
            <span className="font-mono font-bold text-neutral-500 uppercase text-[10px] mr-1">
              Domain Filter:
            </span>
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedFilter(cat)}
                className={`px-2 py-0.5 rounded text-[11px] font-medium transition-colors cursor-pointer ${
                  selectedFilter === cat
                    ? 'text-white font-semibold'
                    : 'bg-neutral-100 hover:bg-neutral-200 text-neutral-600'
                }`}
                style={selectedFilter === cat ? { backgroundColor: dominantColor.hex } : undefined}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Scale Legend */}
          <div className="flex items-center gap-2 text-[10px] font-mono">
            <span className="text-neutral-500 font-bold uppercase">Maturity Scale:</span>
            <div className="flex items-center gap-1">
              <span className="w-3 h-3 rounded bg-slate-100 border border-slate-200" />
              <span className="text-neutral-600">&lt;2.5 Nascent</span>
            </div>
            <div className="flex items-center gap-1">
              <span className="w-3 h-3 rounded" style={{ backgroundColor: dominantColor.lightHex }} />
              <span className="text-neutral-600">2.5-3.4 Developing</span>
            </div>
            <div className="flex items-center gap-1">
              <span className="w-3 h-3 rounded" style={{ backgroundColor: dominantColor.borderHex }} />
              <span className="text-neutral-600">3.5-4.1 Proficient</span>
            </div>
            <div className="flex items-center gap-1">
              <span className="w-3 h-3 rounded" style={{ backgroundColor: dominantColor.hex }} />
              <span className="text-neutral-900 font-bold">4.2+ Advanced</span>
            </div>
          </div>
        </div>

        {/* Heatmap Matrix Table */}
        <div className="flex-1 overflow-x-auto min-h-0">
          <table className="w-full border-collapse text-left text-xs">
            <thead>
              <tr className="border-b-2 border-neutral-300 bg-neutral-50/80">
                <th className="py-2 px-3 text-[11px] font-mono font-bold text-neutral-600 uppercase tracking-wider w-[18%]">
                  Domain
                </th>
                <th className="py-2 px-3 text-[11px] font-mono font-bold text-neutral-700 uppercase tracking-wider w-[28%]">
                  Strategic Capability
                </th>
                {COLUMNS.map((col) => (
                  <th
                    key={col}
                    className="py-2 px-2 text-[11px] font-mono font-bold text-neutral-700 uppercase tracking-wider text-center"
                  >
                    {col}
                  </th>
                ))}
                <th className="py-2 px-3 text-[11px] font-mono font-bold text-neutral-900 uppercase tracking-wider text-right w-[12%]">
                  Global Avg
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-neutral-200">
              {filteredData.map((row, idx) => {
                const rowAvg = (row.scores.reduce((a, b) => a + b, 0) / row.scores.length).toFixed(1);
                return (
                  <tr key={idx} className="hover:bg-neutral-50/50 transition-colors">
                    <td className="py-2 px-3 font-mono text-[11px] font-bold text-neutral-500 uppercase">
                      {row.category}
                    </td>
                    <td className="py-2 px-3 font-semibold text-neutral-900 text-xs">
                      {row.capability}
                    </td>
                    {row.scores.map((score, sIdx) => {
                      const style = getCellBg(score);
                      return (
                        <td key={sIdx} className="py-1.5 px-2 text-center">
                          <div
                            className="py-1.5 px-2 rounded font-mono font-bold text-xs transition-all shadow-2xs inline-block w-full max-w-[84px]"
                            style={{ backgroundColor: style.bg, color: style.text }}
                            title={`${score.toFixed(1)} / 5.0 (${style.label})`}
                          >
                            {score.toFixed(1)}
                          </div>
                        </td>
                      );
                    })}
                    <td className="py-2 px-3 text-right font-mono font-bold text-neutral-900 text-xs">
                      {rowAvg}
                    </td>
                  </tr>
                );
              })}
            </tbody>
            <tfoot>
              <tr className="border-t-2 border-neutral-300 bg-neutral-100/70 font-mono font-bold text-xs">
                <td colSpan={2} className="py-2.5 px-3 uppercase tracking-wider text-neutral-800">
                  Regional Composite Index
                </td>
                {colAverages.map((avg, aIdx) => (
                  <td key={aIdx} className="py-2.5 px-2 text-center text-neutral-900 font-bold">
                    {avg} / 5.0
                  </td>
                ))}
                <td className="py-2.5 px-3 text-right text-neutral-900 font-black">
                  {(
                    colAverages.reduce((acc, v) => acc + parseFloat(v), 0) /
                    (colAverages.length || 1)
                  ).toFixed(1)}
                </td>
              </tr>
            </tfoot>
          </table>
        </div>

        {/* Bottom Strategic Takeaway Callout */}
        <div className="shrink-0 pt-1">
          <CalloutBox
            kicker="[STRATEGIC MANDATE: REMEDIATE CAPABILITY DEFICITS PRIOR TO ENTERPRISE SCALE]"
            description="[Operating diagnostic indicates capability variance across business units. Scaling centralized platforms without foundational data governance in lagging units will exacerbate execution friction. Priority recommendation: Allocate dedicated enablement budget directly to regional hubs.]"
            variant="neutral"
          />
        </div>
      </div>
    </SlideLayout>
  );
};
