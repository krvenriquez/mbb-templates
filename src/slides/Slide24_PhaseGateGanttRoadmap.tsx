import React, { useState } from 'react';
import { SlideLayout } from '../components/SlideLayout';
import { useDeckTheme } from '../context/ThemeContext';
import { CheckCircle2, Circle, Clock, Diamond, AlertTriangle } from 'lucide-react';

/**
 * ==============================================================================
 * SLIDE TEMPLATE: PHASE-GATE GANTT & IMPLEMENTATION ROADMAP
 * ==============================================================================
 * 
 * WHEN TO USE THIS TEMPLATE:
 * --------------------------
 * 1. Multi-Year Enterprise Transformation Programs: Mapping parallel workstreams
 *    against definitive Phase-Gate governance checkpoints.
 * 2. Steering Committee Program Oversight: Demonstrating delivery cadence, critical
 *    dependencies, and go/no-go investment milestones.
 * 3. Technology Migration & ERP Deployment: Scheduling discovery, build, pilot,
 *    and enterprise cutover across quarterly horizons.
 * ==============================================================================
 */

interface SlideProps {
  totalSlides: number;
}

interface Workstream {
  id: string;
  name: string;
  lead: string;
  status: 'on-track' | 'at-risk' | 'complete';
  bars: {
    label: string;
    startCol: number; // 1 to 6
    span: number;     // 1 to 6
    isMilestone?: boolean;
  }[];
}

const QUARTERS = ['Q1 2026', 'Q2 2026', 'Q3 2026', 'Q4 2026', 'Q1 2027', 'Q2 2027'];

const WORKSTREAMS: Workstream[] = [
  {
    id: 'ws1',
    name: '1. Strategy & Target Architecture',
    lead: 'VP Strategy',
    status: 'complete',
    bars: [
      { label: 'Current State Diagnostic', startCol: 1, span: 1 },
      { label: 'Target Operating Model Blueprint', startCol: 2, span: 2 },
      { label: 'Value Capture Realization', startCol: 4, span: 3 },
    ],
  },
  {
    id: 'ws2',
    name: '2. Cloud & Data Core Engineering',
    lead: 'Chief Architect',
    status: 'on-track',
    bars: [
      { label: 'Data Mesh Foundation', startCol: 2, span: 2 },
      { label: 'AI Platform Deployment', startCol: 3, span: 3 },
      { label: 'Legacy Modernization Wave 1', startCol: 5, span: 2 },
    ],
  },
  {
    id: 'ws3',
    name: '3. Commercial & Go-To-Market Pilot',
    lead: 'Chief Commercial Officer',
    status: 'on-track',
    bars: [
      { label: 'Product Packaging & Pricing', startCol: 2, span: 1 },
      { label: 'Regional Sandbox Pilots (NA & UK)', startCol: 3, span: 2 },
      { label: 'Global Commercial Launch', startCol: 5, span: 2 },
    ],
  },
  {
    id: 'ws4',
    name: '4. Change Management & Talent Upskilling',
    lead: 'Chief People Officer',
    status: 'at-risk',
    bars: [
      { label: 'Role Taxonomy & Capability Gap Audit', startCol: 1, span: 2 },
      { label: 'Enterprise AI Academy Cohort 1-3', startCol: 3, span: 3 },
      { label: 'Incentive & KPI Realignment', startCol: 5, span: 2 },
    ],
  },
];

const PHASE_GATES = [
  { quarterCol: 2, label: 'Gate 1: Blueprint Sign-Off', status: 'approved' },
  { quarterCol: 4, label: 'Gate 2: Pilot Go/No-Go', status: 'pending' },
  { quarterCol: 6, label: 'Gate 3: Global Production Cutover', status: 'scheduled' },
];

export const Slide24_PhaseGateGanttRoadmap: React.FC<SlideProps> = ({ totalSlides }) => {
  const { dominantColor, headerFont } = useDeckTheme();
  const fontClass = headerFont === 'sans' ? 'font-sans' : 'font-serif';
  const [activeBar, setActiveBar] = useState<string | null>(null);

  return (
    <SlideLayout
      slideNumber={17}
      totalSlides={totalSlides}
      kicker="[PROGRAM DELIVERY] | 18-MONTH PHASE-GATE ROADMAP"
      actionTitle="[Action Title: Execution cadence achieves production readiness by QX FYXX, anchoring full global cutover at Gate 3 in QX FYXX]"
      sourceText="Source: [Transformation Management Office (TMO) / Integrated Master Milestone Schedule (YYYY)]"
      categoryTag="IMPLEMENTATION ROADMAP"
    >
      <div className="h-full flex flex-col justify-between gap-3">
        {/* Phase Gates Header Banner */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 p-2 rounded-xl border border-neutral-200 bg-neutral-50 shrink-0">
          {PHASE_GATES.map((gate, idx) => (
            <div
              key={idx}
              className="flex items-center gap-2.5 p-2 rounded-lg bg-white border border-neutral-200"
            >
              <div
                className="w-7 h-7 rounded-md flex items-center justify-center shrink-0"
                style={{
                  backgroundColor:
                    gate.status === 'approved'
                      ? '#DCFCE7'
                      : gate.status === 'pending'
                      ? dominantColor.lightHex
                      : '#F1F5F9',
                  color:
                    gate.status === 'approved'
                      ? '#16A34A'
                      : gate.status === 'pending'
                      ? dominantColor.hex
                      : '#64748B',
                }}
              >
                <Diamond size={15} className="fill-current" />
              </div>
              <div className="min-w-0">
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider block text-neutral-400">
                  {QUARTERS[gate.quarterCol - 1]} Checkpoint
                </span>
                <span className="text-xs font-bold text-neutral-900 truncate block">
                  {gate.label}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Gantt Matrix Grid */}
        <div className="flex-1 flex flex-col border border-neutral-200 rounded-xl bg-white shadow-2xs overflow-hidden min-h-0">
          {/* Header Row: Quarter Columns */}
          <div className="grid grid-cols-12 border-b border-neutral-200 bg-neutral-100/70 py-2 px-3 text-xs font-mono font-bold text-neutral-700">
            <div className="col-span-4 uppercase tracking-wider text-[11px] text-neutral-500">
              Workstream & Lead
            </div>
            <div className="col-span-8 grid grid-cols-6 text-center text-[11px]">
              {QUARTERS.map((q) => (
                <div key={q} className="border-l border-neutral-200 px-1">
                  {q}
                </div>
              ))}
            </div>
          </div>

          {/* Workstream Rows */}
          <div className="flex-1 divide-y divide-neutral-200 flex flex-col justify-around">
            {WORKSTREAMS.map((ws) => (
              <div key={ws.id} className="grid grid-cols-12 items-center py-2 px-3 hover:bg-neutral-50/50 transition-colors">
                {/* Left: Workstream Metadata */}
                <div className="col-span-4 pr-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-neutral-900 line-clamp-1">
                      {ws.name}
                    </span>
                    <span
                      className={`text-[9px] font-mono uppercase font-bold px-1.5 py-0.2 rounded shrink-0 ${
                        ws.status === 'complete'
                          ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                          : ws.status === 'on-track'
                          ? 'bg-sky-50 text-sky-700 border border-sky-200'
                          : 'bg-amber-50 text-amber-700 border border-amber-200'
                      }`}
                    >
                      {ws.status}
                    </span>
                  </div>
                  <span className="text-[10px] font-mono text-neutral-400 block mt-0.5">
                    Owner: {ws.lead}
                  </span>
                </div>

                {/* Right: Gantt Bars in 6-Quarter Grid */}
                <div className="col-span-8 grid grid-cols-6 gap-1.5 relative h-8 items-center border-l border-neutral-200 pl-2">
                  {ws.bars.map((bar, bIdx) => {
                    const colStart = bar.startCol;
                    const span = bar.span;
                    const isHovered = activeBar === `${ws.id}-${bIdx}`;
                    return (
                      <div
                        key={bIdx}
                        onMouseEnter={() => setActiveBar(`${ws.id}-${bIdx}`)}
                        onMouseLeave={() => setActiveBar(null)}
                        className="h-6 rounded-md px-2 flex items-center justify-between text-[10px] font-medium shadow-2xs transition-all duration-150 cursor-pointer overflow-hidden truncate"
                        style={{
                          gridColumnStart: colStart,
                          gridColumnEnd: `span ${span}`,
                          backgroundColor:
                            ws.status === 'at-risk'
                              ? '#FEF3C7'
                              : isHovered
                              ? dominantColor.hex
                              : '#1E293B',
                          color:
                            ws.status === 'at-risk'
                              ? '#92400E'
                              : '#ffffff',
                        }}
                        title={bar.label}
                      >
                        <span className="truncate">{bar.label}</span>
                        <span className="font-mono text-[9px] opacity-75 shrink-0 ml-1">
                          {span}Q
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Steering Action Bar */}
        <div className="p-2.5 rounded-lg border border-neutral-200 bg-neutral-50 flex items-center justify-between shrink-0 text-xs text-neutral-700">
          <div className="flex items-center gap-2">
            <AlertTriangle size={15} className="text-amber-600 shrink-0" />
            <span className="font-bold text-neutral-900">[Critical Path Risk]:</span>
            <span>
              [Workstream requires accelerated staffing / vendor onboarding to avoid pacing delays in upcoming milestone execution.]
            </span>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
};
