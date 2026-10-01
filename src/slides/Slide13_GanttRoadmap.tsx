import React, { useState } from 'react';
import { motion } from 'motion/react';
import { useDeckTheme } from '../context/ThemeContext';
import {
  Calendar,
  CheckCircle2,
  Clock,
  Flag,
  Users,
  Target,
  ChevronRight,
  Filter,
} from 'lucide-react';

/**
 * ==============================================================================
 * SLIDE TEMPLATE: MULTI-WORKSTREAM GANTT EXECUTION SCHEDULE
 * ==============================================================================
 * 
 * WHEN TO USE THIS TEMPLATE:
 * --------------------------
 * 1. Transformation Program Management Office (PMO): Tracking multi-year enterprise
 *    turnaround or operating model restructuring rollouts.
 * 2. Post-Merger Integration (PMI) First 100-Day / Day-1 Execution: Orchestrating
 *    day-1 readiness, cross-company systems migration, and synergy extraction.
 * 3. Technology & ERP Cloud Migrations: Detailed phase sequencing of legacy
 *    decommissioning, data migration waves, pilot testing, and hypercare.
 * 4. Regulatory & Compliance Remediation: Showing supervisory authorities (e.g. Fed,
 *    SEC, ECB) an auditable critical-path milestone plan.
 * 5. Capital Investment & Plant Expansion: Managing EPC engineering phases,
 *    procurement, construction, commissioning, and handover.
 * 
 * CONSULTING GUIDELINES & BEST PRACTICES:
 * ---------------------------------------
 * - MECE Workstream Decomposition: Segment initiatives strictly by functional
 *   ownership (e.g., Commercial, Technology, Operations, People).
 * - Distinct Milestone Diamonds: Clearly flag critical Steering Committee Decision
 *   Gates (Gate 0 through Gate 3) where capital or go-forward approval is required.
 * - Action Title Rule: Quantify velocity or near-term dependencies (e.g., "All 4
 *   workstreams remain on track for Q2 pilot launch, with critical-path dependency
 *   concentrated on ERP data validation in Month 4").
 * ==============================================================================
 */

interface SlideProps {
  totalSlides: number;
}

interface GanttTask {
  id: string;
  name: string;
  startMonth: number; // 1 to 12
  duration: number;   // in months
  progress: number;   // 0 to 100%
  status: 'Complete' | 'On Track' | 'At Risk' | 'Pending';
  milestoneMonth?: number;
  milestoneTitle?: string;
  criticalPath?: boolean;
}

interface Workstream {
  id: string;
  code: string;
  title: string;
  lead: string;
  tasks: GanttTask[];
}

const GANTT_WORKSTREAMS: Workstream[] = [
  {
    id: 'ws-gov',
    code: 'WS1',
    title: 'Governance & PMO Mobilization',
    lead: 'Engagement Director',
    tasks: [
      {
        id: 't1',
        name: 'TMO Charter & Value Tracking Setup',
        startMonth: 1,
        duration: 2,
        progress: 100,
        status: 'Complete',
        milestoneMonth: 2,
        milestoneTitle: 'Gate 0: Charter Signed',
      },
      {
        id: 't2',
        name: 'Weekly Workstream Pulse & Risk Radar',
        startMonth: 2,
        duration: 9,
        progress: 60,
        status: 'On Track',
      },
      {
        id: 't3',
        name: 'SteerCo Mid-Year Capital Review',
        startMonth: 6,
        duration: 1,
        progress: 0,
        status: 'Pending',
        milestoneMonth: 6,
        milestoneTitle: 'Gate 1: Capex Tranche 2',
      },
    ],
  },
  {
    id: 'ws-com',
    code: 'WS2',
    title: 'Commercial & Pricing Realization',
    lead: 'Chief Commercial Officer',
    tasks: [
      {
        id: 't4',
        name: 'Customer Willingness-to-Pay Diagnostic',
        startMonth: 1,
        duration: 3,
        progress: 90,
        status: 'On Track',
      },
      {
        id: 't5',
        name: 'Tiered Value-Based Pricing Rollout',
        startMonth: 3,
        duration: 4,
        progress: 30,
        status: 'On Track',
        criticalPath: true,
      },
      {
        id: 't6',
        name: 'Sales Incentive & Commission Alignment',
        startMonth: 5,
        duration: 3,
        progress: 0,
        status: 'Pending',
        milestoneMonth: 7,
        milestoneTitle: 'Gate 2: New Plan Active',
      },
    ],
  },
  {
    id: 'ws-ops',
    code: 'WS3',
    title: 'Supply Chain & Manufacturing Agility',
    lead: 'VP Global Operations',
    tasks: [
      {
        id: 't7',
        name: 'Tier-1 Supplier Dual-Sourcing Tender',
        startMonth: 2,
        duration: 4,
        progress: 45,
        status: 'At Risk',
        criticalPath: true,
      },
      {
        id: 't8',
        name: 'Regional DC Inventory Rebalancing',
        startMonth: 4,
        duration: 5,
        progress: 15,
        status: 'On Track',
      },
      {
        id: 't9',
        name: 'Full Automated Warehouse Handover',
        startMonth: 8,
        duration: 4,
        progress: 0,
        status: 'Pending',
        milestoneMonth: 11,
        milestoneTitle: 'Gate 3: Site Commissioned',
      },
    ],
  },
  {
    id: 'ws-tech',
    code: 'WS4',
    title: 'Enterprise Architecture & Cloud Core',
    lead: 'Chief Information Officer',
    tasks: [
      {
        id: 't10',
        name: 'Legacy ERP Data Cleansing & Mapping',
        startMonth: 2,
        duration: 3,
        progress: 70,
        status: 'On Track',
        criticalPath: true,
      },
      {
        id: 't11',
        name: 'Pilot Business Unit Cloud Cutover',
        startMonth: 5,
        duration: 3,
        progress: 0,
        status: 'Pending',
        milestoneMonth: 8,
        milestoneTitle: 'Pilot Go-Live',
      },
      {
        id: 't12',
        name: 'Global Enterprise Rollout & Decommissioning',
        startMonth: 8,
        duration: 5,
        progress: 0,
        status: 'Pending',
      },
    ],
  },
];

const MONTHS = ['M1', 'M2', 'M3', 'M4', 'M5', 'M6', 'M7', 'M8', 'M9', 'M10', 'M11', 'M12'];
const CURRENT_MONTH = 4; // Month 4 current marker

export const Slide13_GanttRoadmap: React.FC<SlideProps> = ({ totalSlides }) => {
  const { dominantColor, headerFont } = useDeckTheme();
  const fontClass = headerFont === 'sans' ? 'font-sans' : 'font-serif';

  const [selectedWorkstreamId, setSelectedWorkstreamId] = useState<string>('ALL');

  const filteredWorkstreams = selectedWorkstreamId === 'ALL'
    ? GANTT_WORKSTREAMS
    : GANTT_WORKSTREAMS.filter((ws) => ws.id === selectedWorkstreamId);

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
              [PROGRAM MANAGEMENT OFFICE] | 12-MONTH GANTT SCHEDULE
            </span>
            <span className="text-neutral-300">|</span>
            <span className="text-[10px] font-mono text-neutral-400">
              MULTI-WORKSTREAM DELIVERY
            </span>
          </div>

          <div className="flex items-center gap-3 text-[10px] font-medium text-neutral-600">
            <span className="flex items-center gap-1">
              <span className="w-2.5 h-2.5 rounded-xs bg-emerald-500 inline-block" /> Complete
            </span>
            <span className="flex items-center gap-1">
              <span className="w-2.5 h-2.5 rounded-xs inline-block" style={{ backgroundColor: dominantColor.hex }} /> Active / On Track
            </span>
            <span className="flex items-center gap-1">
              <span className="w-2.5 h-2.5 rounded-xs bg-amber-500 inline-block" /> At Risk
            </span>
            <span className="flex items-center gap-1">
              <span className="w-2 h-2 rotate-45 border-2 border-neutral-900 bg-white inline-block" /> SteerCo Decision Gate
            </span>
          </div>
        </div>

        <h2 className={`${fontClass} text-base sm:text-lg md:text-xl lg:text-[22px] font-bold text-neutral-900 leading-snug`}>
          [Action Title: Program is executing at planned pace entering Month 4, with critical-path focus on supplier dual-sourcing agreements]
        </h2>
      </div>

      {/* 2. Main Gantt Chart Grid */}
      <div className="flex-1 flex flex-col justify-between py-2 min-h-0 overflow-hidden">
        {/* Workstream Filter Bar */}
        <div className="flex items-center justify-between pb-1.5 border-b border-neutral-200/80 text-xs shrink-0">
          <div className="flex items-center gap-1.5">
            <Filter size={12} className="text-neutral-400" />
            <span className="text-[10px] uppercase font-bold text-neutral-500 mr-1">Workstream:</span>
            <button
              type="button"
              onClick={() => setSelectedWorkstreamId('ALL')}
              className={`px-2 py-0.5 rounded-full text-[10px] font-medium transition-colors cursor-pointer ${
                selectedWorkstreamId === 'ALL'
                  ? 'text-white font-semibold'
                  : 'text-neutral-600 bg-neutral-100 hover:bg-neutral-200'
              }`}
              style={selectedWorkstreamId === 'ALL' ? { backgroundColor: dominantColor.hex } : undefined}
            >
              All Workstreams (4)
            </button>
            {GANTT_WORKSTREAMS.map((ws) => (
              <button
                key={ws.id}
                type="button"
                onClick={() => setSelectedWorkstreamId(ws.id)}
                className={`px-2 py-0.5 rounded-full text-[10px] font-medium transition-colors cursor-pointer ${
                  selectedWorkstreamId === ws.id
                    ? 'text-white font-semibold'
                    : 'text-neutral-600 bg-neutral-100 hover:bg-neutral-200'
                }`}
                style={selectedWorkstreamId === ws.id ? { backgroundColor: dominantColor.hex } : undefined}
              >
                {ws.code}: {ws.title.split('&')[0].trim()}
              </button>
            ))}
          </div>

          <div className="text-[10px] font-mono text-neutral-400">
            Current Position: Month 4 (Q2 Sprint)
          </div>
        </div>

        {/* Gantt Timeline Container */}
        <div className="flex-1 border border-neutral-200 rounded-lg bg-neutral-50/40 p-2.5 flex flex-col justify-between overflow-hidden my-1">
          {/* Timeline Header (Months & Quarters) */}
          <div className="grid grid-cols-12 gap-1 text-[10px] font-mono font-bold text-neutral-500 border-b border-neutral-200 pb-1 shrink-0">
            <div className="col-span-4 uppercase text-neutral-700 tracking-wider">
              Workstream & Strategic Initiatives
            </div>
            <div className="col-span-8 grid grid-cols-12 gap-0 text-center">
              {MONTHS.map((m, idx) => {
                const monthNum = idx + 1;
                const isCurrent = monthNum === CURRENT_MONTH;
                return (
                  <div
                    key={m}
                    className={`py-0.5 rounded-xs transition-colors ${
                      isCurrent
                        ? 'bg-neutral-900 text-white font-bold'
                        : 'text-neutral-500 hover:bg-neutral-200/50'
                    }`}
                  >
                    {m}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Workstream Task Rows */}
          <div className="flex-1 overflow-y-auto divide-y divide-neutral-200/60 pr-1">
            {filteredWorkstreams.map((ws) => (
              <div key={ws.id} className="py-1.5 space-y-1">
                {/* Workstream Banner */}
                <div className="flex items-center justify-between text-[11px] font-bold text-neutral-900 bg-white/70 px-2 py-0.5 rounded border border-neutral-200/60">
                  <div className="flex items-center gap-1.5">
                    <span
                      className="px-1.5 py-0.2 rounded text-[9px] font-mono text-white"
                      style={{ backgroundColor: dominantColor.hex }}
                    >
                      {ws.code}
                    </span>
                    <span>{ws.title}</span>
                  </div>
                  <span className="text-[10px] font-mono font-normal text-neutral-500">
                    Lead: {ws.lead}
                  </span>
                </div>

                {/* Individual Tasks */}
                {ws.tasks.map((task) => {
                  // Calculate grid column positioning for month 1-12
                  // In a 12-column sub-grid, col-start is task.startMonth, span is task.duration
                  const leftPercent = ((task.startMonth - 1) / 12) * 100;
                  const widthPercent = (task.duration / 12) * 100;

                  return (
                    <div
                      key={task.id}
                      className="grid grid-cols-12 gap-1 items-center hover:bg-white/80 p-0.5 rounded transition-colors text-xs"
                    >
                      {/* Task Label */}
                      <div className="col-span-4 truncate text-[11px] text-neutral-700 pl-3 flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-neutral-300 shrink-0" />
                        <span className="truncate">{task.name}</span>
                        {task.criticalPath && (
                          <span className="text-[8px] font-mono uppercase px-1 py-0.2 rounded bg-rose-50 text-rose-700 border border-rose-200 font-bold shrink-0">
                            Critical
                          </span>
                        )}
                      </div>

                      {/* 12-Month Gantt Bar Canvas */}
                      <div className="col-span-8 relative h-5 bg-neutral-100/60 rounded-xs flex items-center overflow-hidden border border-neutral-200/40">
                        {/* Month grid guideline lines */}
                        <div className="absolute inset-0 grid grid-cols-12 pointer-events-none">
                          {MONTHS.map((_, i) => (
                            <div
                              key={i}
                              className={`border-r border-neutral-200/40 h-full ${
                                i + 1 === CURRENT_MONTH ? 'bg-neutral-900/5' : ''
                              }`}
                            />
                          ))}
                        </div>

                        {/* Today Marker Line */}
                        <div
                          className="absolute top-0 bottom-0 w-0.5 bg-neutral-900 z-10 pointer-events-none"
                          style={{ left: `${((CURRENT_MONTH - 0.5) / 12) * 100}%` }}
                        />

                        {/* Gantt Bar */}
                        <div
                          className="absolute h-3.5 rounded-xs transition-all flex items-center px-1 shadow-2xs z-5"
                          style={{
                            left: `${leftPercent}%`,
                            width: `${widthPercent}%`,
                            backgroundColor:
                              task.status === 'Complete'
                                ? '#10B981'
                                : task.status === 'At Risk'
                                ? '#F59E0B'
                                : dominantColor.hex,
                          }}
                          title={`${task.name}: Month ${task.startMonth} to ${task.startMonth + task.duration - 1} (${task.progress}% complete)`}
                        >
                          {/* Inner Progress Fill */}
                          <div
                            className="absolute left-0 top-0 bottom-0 bg-black/15 rounded-xs"
                            style={{ width: `${task.progress}%` }}
                          />
                          <span className="relative z-10 text-[9px] font-mono text-white font-bold truncate">
                            {task.progress}%
                          </span>
                        </div>

                        {/* Milestone Diamond (if defined) */}
                        {task.milestoneMonth && (
                          <div
                            className="absolute top-1/2 -translate-y-1/2 z-20 flex items-center gap-1"
                            style={{ left: `${((task.milestoneMonth - 0.5) / 12) * 100}%` }}
                            title={`Milestone: ${task.milestoneTitle}`}
                          >
                            <div className="w-3.5 h-3.5 rotate-45 border-2 border-neutral-950 bg-amber-400 shadow-xs shrink-0" />
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            ))}
          </div>

          {/* Bottom Summary Bar */}
          <div className="pt-1.5 border-t border-neutral-200 flex items-center justify-between text-[10px] text-neutral-500 font-mono shrink-0">
            <div className="flex items-center gap-3">
              <span>Sprint Velocity: <strong>94% on-time milestone delivery</strong></span>
              <span>•</span>
              <span>Next SteerCo Gate: <strong>Month 6 (Capex Tranche 2)</strong></span>
            </div>
            <div className="text-neutral-400 italic">
              Critical path denoted in red badge
            </div>
          </div>
        </div>
      </div>

      {/* 3. Standard Footer */}
      <div className="shrink-0 pt-2 border-t border-neutral-200 flex items-center justify-between text-[11px] text-neutral-500 font-mono">
        <div>Source: [Transformation Management Office (TMO) Execution Tracker, 2026]</div>
        <div className="italic">Slide 14 / {String(totalSlides).padStart(2, '0')}</div>
      </div>
    </div>
  );
};
