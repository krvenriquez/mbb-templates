import React from 'react';
import { SlideLayout } from '../components/SlideLayout';
import { useDeckTheme } from '../context/ThemeContext';
import { Compass, CheckCircle2, Shield, Layers, Target, Zap, Cpu } from 'lucide-react';

/**
 * ==============================================================================
 * SLIDE TEMPLATE: STRATEGIC TEMPLE / ARCHITECTURAL HOUSE FRAMEWORK
 * ==============================================================================
 * 
 * WHEN TO USE THIS TEMPLATE:
 * --------------------------
 * 1. Target Operating Model (TOM) & Enterprise Blueprinting: Establishing a single-page
 *    cohesive mental model that links corporate vision to functional execution.
 * 2. Organization Redesign & Culture Alignment: Communicating enterprise priorities
 *    across thousands of global employees in a memorable, structured visual format.
 * 3. Board of Directors Governance Overviews: Demonstrating how capital projects,
 *    IT modernizations, and talent programs support the enterprise's north star.
 * 4. Multi-Year Digital Transformation Visions: Defining the foundational enablers
 *    (Cloud, Data, Security) required to sustain business transformation pillars.
 * 
 * CONSULTING GUIDELINES & BEST PRACTICES:
 * ---------------------------------------
 * - Structural Anatomy:
 *     (1) Roof / Pediment: The North Star enterprise vision, mission, and long-term aspirational metric.
 *     (2) Crossbeam / Entablature: The measurable multi-year corporate objective (e.g. EBITDA, CAGR).
 *     (3) Pillars: 3-4 vertical business or operational pillars with designated execution owners.
 *     (4) Foundation / Plinth: Foundational enablers (Culture, Talent, Modern Tech Stack, Governance).
 * - Action Title Rule: Directly articulate how the pillars and foundational enablers
 *   collectively deliver the overarching vision.
 * ==============================================================================
 */

interface SlideProps {
  totalSlides: number;
}

export const Slide07_HouseTemplate: React.FC<SlideProps> = ({ totalSlides }) => {
  const { dominantColor, headerFont } = useDeckTheme();
  const fontClass = headerFont === 'sans' ? 'font-sans' : 'font-serif';

  return (
    <SlideLayout
      slideNumber={5}
      totalSlides={totalSlides}
      kicker="[FRAMEWORK ARCHITECTURE] | STRATEGIC HOUSE"
      actionTitle="[Action Title: Articulate the holistic enterprise strategy connecting vision, core execution pillars, and foundation]"
      sourceText="Source: [Internal Strategy Framework / Board Strategic Alignment Blueprint (YYYY)]"
      categoryTag="ENTERPRISE ARCHITECTURE"
    >
      <div className="h-full flex flex-col justify-between gap-2.5">
        {/* ROOF: Overarching Vision & North Star */}
        <div
          className="rounded-t-lg p-3 text-center border relative overflow-hidden transition-all duration-300 shrink-0"
          style={{
            backgroundColor: dominantColor.lightHex,
            borderColor: dominantColor.borderHex,
          }}
        >
          <div className="flex items-center justify-center gap-2 mb-1">
            <Compass size={16} style={{ color: dominantColor.hex }} />
            <span
              className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.16em]"
              style={{ color: dominantColor.hex }}
            >
              [VISION & NORTH STAR ASPIRATION]
            </span>
          </div>
          <h2
            className={`${fontClass} text-sm sm:text-base md:text-lg font-bold text-neutral-950 max-w-4xl mx-auto leading-snug`}
          >
            [Insert Overarching Strategic Ambition: e.g., 'Become the recognized #1 category leader delivering $2B+ ARR at 25% EBITDA margin by 2028']
          </h2>
        </div>

        {/* SUB-HEADER / CROSSBEAM: Strategic Objectives */}
        <div className="bg-neutral-800 text-white rounded-xs px-3 py-1.5 flex items-center justify-between text-xs shrink-0">
          <span className="font-bold uppercase tracking-wider text-[10px] text-neutral-300">
            [CORE STRATEGIC IMPERATIVES]
          </span>
          <div className="flex items-center gap-4 text-[11px]">
            <span>1. [Maximize Customer Value]</span>
            <span className="text-neutral-500">•</span>
            <span>2. [Accelerate Scalable Growth]</span>
            <span className="text-neutral-500">•</span>
            <span>3. [Optimize Operating Leverage]</span>
          </div>
        </div>

        {/* PILLARS GRID (3 or 4 Columns) */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-2.5 flex-1 min-h-0">
          {/* Pillar 1 */}
          <div className="p-3 bg-white rounded border border-neutral-200 flex flex-col justify-between hover:border-neutral-300 transition-colors">
            <div>
              <div className="pb-2 border-b border-neutral-100 mb-2">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold uppercase text-neutral-400">Pillar 01</span>
                  <Target size={14} className="text-neutral-500" />
                </div>
                <div className={`${fontClass} text-xs sm:text-sm font-bold text-neutral-900 mt-0.5`}>
                  [Pillar 1: Commercial & GTM Engine]
                </div>
              </div>

              <div className="space-y-1.5 text-[11px] text-neutral-600">
                <div className="flex items-start gap-1.5">
                  <CheckCircle2 size={12} className="text-emerald-600 shrink-0 mt-0.5" />
                  <span>[Initiative 1.1: Direct enterprise sales force expansion]</span>
                </div>
                <div className="flex items-start gap-1.5">
                  <CheckCircle2 size={12} className="text-emerald-600 shrink-0 mt-0.5" />
                  <span>[Initiative 1.2: Value-based pricing & SKU rationalization]</span>
                </div>
                <div className="flex items-start gap-1.5">
                  <CheckCircle2 size={12} className="text-emerald-600 shrink-0 mt-0.5" />
                  <span>[Initiative 1.3: Strategic partner distribution channel]</span>
                </div>
              </div>
            </div>

            <div className="mt-2 pt-2 border-t border-neutral-100 text-[10px] font-mono text-neutral-500 flex justify-between">
              <span>[Target KPI]</span>
              <span className="font-bold text-neutral-800">[+$180M ARR]</span>
            </div>
          </div>

          {/* Pillar 2: Highlighted Focus Pillar */}
          <div
            className="p-3 rounded border-2 flex flex-col justify-between shadow-xs transition-colors"
            style={{
              borderColor: dominantColor.hex,
              backgroundColor: dominantColor.lightHex,
            }}
          >
            <div>
              <div className="pb-2 border-b mb-2" style={{ borderColor: dominantColor.borderHex }}>
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold uppercase" style={{ color: dominantColor.hex }}>
                    Pillar 02 (Focus)
                  </span>
                  <Zap size={14} style={{ color: dominantColor.hex }} />
                </div>
                <div className={`${fontClass} text-xs sm:text-sm font-bold text-neutral-950 mt-0.5`}>
                  [Pillar 2: Product & Platform Moat]
                </div>
              </div>

              <div className="space-y-1.5 text-[11px] text-neutral-800 font-medium">
                <div className="flex items-start gap-1.5">
                  <CheckCircle2 size={12} className="shrink-0 mt-0.5" style={{ color: dominantColor.hex }} />
                  <span>[Initiative 2.1: Proprietary cloud architecture integration]</span>
                </div>
                <div className="flex items-start gap-1.5">
                  <CheckCircle2 size={12} className="shrink-0 mt-0.5" style={{ color: dominantColor.hex }} />
                  <span>[Initiative 2.2: Automated multi-tenant migration]</span>
                </div>
                <div className="flex items-start gap-1.5">
                  <CheckCircle2 size={12} className="shrink-0 mt-0.5" style={{ color: dominantColor.hex }} />
                  <span>[Initiative 2.3: Enterprise security & compliance audit]</span>
                </div>
              </div>
            </div>

            <div className="mt-2 pt-2 border-t text-[10px] font-mono flex justify-between" style={{ borderColor: dominantColor.borderHex }}>
              <span style={{ color: dominantColor.hex }}>[Target KPI]</span>
              <span className="font-bold text-neutral-950">[128% Net Retention]</span>
            </div>
          </div>

          {/* Pillar 3 */}
          <div className="p-3 bg-white rounded border border-neutral-200 flex flex-col justify-between hover:border-neutral-300 transition-colors">
            <div>
              <div className="pb-2 border-b border-neutral-100 mb-2">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold uppercase text-neutral-400">Pillar 03</span>
                  <Cpu size={14} className="text-neutral-500" />
                </div>
                <div className={`${fontClass} text-xs sm:text-sm font-bold text-neutral-900 mt-0.5`}>
                  [Pillar 3: Operational Rigor]
                </div>
              </div>

              <div className="space-y-1.5 text-[11px] text-neutral-600">
                <div className="flex items-start gap-1.5">
                  <CheckCircle2 size={12} className="text-emerald-600 shrink-0 mt-0.5" />
                  <span>[Initiative 3.1: Shared service center consolidation]</span>
                </div>
                <div className="flex items-start gap-1.5">
                  <CheckCircle2 size={12} className="text-emerald-600 shrink-0 mt-0.5" />
                  <span>[Initiative 3.2: Procurement renegotiation program]</span>
                </div>
                <div className="flex items-start gap-1.5">
                  <CheckCircle2 size={12} className="text-emerald-600 shrink-0 mt-0.5" />
                  <span>[Initiative 3.3: Zero-based budgeting deployment]</span>
                </div>
              </div>
            </div>

            <div className="mt-2 pt-2 border-t border-neutral-100 text-[10px] font-mono text-neutral-500 flex justify-between">
              <span>[Target KPI]</span>
              <span className="font-bold text-neutral-800">[+420 bps Margin]</span>
            </div>
          </div>

          {/* Pillar 4 */}
          <div className="p-3 bg-white rounded border border-neutral-200 flex flex-col justify-between hover:border-neutral-300 transition-colors">
            <div>
              <div className="pb-2 border-b border-neutral-100 mb-2">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold uppercase text-neutral-400">Pillar 04</span>
                  <Layers size={14} className="text-neutral-500" />
                </div>
                <div className={`${fontClass} text-xs sm:text-sm font-bold text-neutral-900 mt-0.5`}>
                  [Pillar 4: Digital & Ecosystem]
                </div>
              </div>

              <div className="space-y-1.5 text-[11px] text-neutral-600">
                <div className="flex items-start gap-1.5">
                  <CheckCircle2 size={12} className="text-emerald-600 shrink-0 mt-0.5" />
                  <span>[Initiative 4.1: API gateway & developer ecosystem]</span>
                </div>
                <div className="flex items-start gap-1.5">
                  <CheckCircle2 size={12} className="text-emerald-600 shrink-0 mt-0.5" />
                  <span>[Initiative 4.2: Automated self-service workflows]</span>
                </div>
                <div className="flex items-start gap-1.5">
                  <CheckCircle2 size={12} className="text-emerald-600 shrink-0 mt-0.5" />
                  <span>[Initiative 4.3: Strategic tuck-in M&A screening]</span>
                </div>
              </div>
            </div>

            <div className="mt-2 pt-2 border-t border-neutral-100 text-[10px] font-mono text-neutral-500 flex justify-between">
              <span>[Target KPI]</span>
              <span className="font-bold text-neutral-800">[15+ Key Partners]</span>
            </div>
          </div>
        </div>

        {/* FOUNDATION (PLINTH): Foundational Enablers */}
        <div className="bg-neutral-100 border border-neutral-300 rounded-b-lg p-2.5 shrink-0">
          <div className="flex items-center gap-2 mb-1">
            <Shield size={13} className="text-neutral-600" />
            <span className="text-[10px] font-bold uppercase tracking-wider text-neutral-700">
              [FOUNDATIONAL ENABLERS & INFRASTRUCTURE]
            </span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-2 text-[11px] text-neutral-600">
            <div className="border-r border-neutral-200 pr-2">
              <strong className="text-neutral-800">[People & Culture]:</strong> [Agile squad re-skilling]
            </div>
            <div className="border-r border-neutral-200 pr-2">
              <strong className="text-neutral-800">[Data & AI Platform]:</strong> [Unified single source of truth]
            </div>
            <div className="border-r border-neutral-200 pr-2">
              <strong className="text-neutral-800">[Governance & PMO]:</strong> [Weekly steering cadence]
            </div>
            <div>
              <strong className="text-neutral-800">[Risk & Capital]:</strong> [De-risked capital milestones]
            </div>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
};
