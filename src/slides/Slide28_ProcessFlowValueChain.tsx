import React, { useState } from 'react';
import { SlideLayout } from '../components/SlideLayout';
import { useDeckTheme } from '../context/ThemeContext';
import {
  Truck,
  Layers,
  Factory,
  Send,
  Headphones,
  ChevronRight,
  AlertCircle,
  Zap,
} from 'lucide-react';

/**
 * ==============================================================================
 * SLIDE TEMPLATE: END-TO-END VALUE CHAIN & PROCESS FLOW
 * ==============================================================================
 * 
 * WHEN TO USE THIS TEMPLATE:
 * --------------------------
 * 1. Operational Diagnostic & Lean Turnarounds: Mapping current friction points
 *    and digital intervention opportunities across the entire enterprise value chain.
 * 2. Supply Chain & Workflow Modernization: Highlighting handoffs, cycle times,
 *    and quantified automation payoffs across functional silos.
 * ==============================================================================
 */

interface SlideProps {
  totalSlides: number;
}

interface ValueChainStage {
  id: string;
  number: string;
  name: string;
  icon: React.ElementType;
  coreActivity: string;
  currentBottleneck: string;
  targetIntervention: string;
  valueUnlock: string;
}

const STAGES: ValueChainStage[] = [
  {
    id: 'sourcing',
    number: '01',
    name: '[Sourcing & Inbound]',
    icon: Truck,
    coreActivity: '[Vendor bidding, raw material procurement & supplier contracts]',
    currentBottleneck: '[Manual invoice reconciliation & multi-week purchase order lead times]',
    targetIntervention: '[Automated contract intelligence & dynamic tier-1 vendor portal]',
    valueUnlock: '[-$XXM Proc. Spend]',
  },
  {
    id: 'rd',
    number: '02',
    name: '[R&D & Engineering]',
    icon: Layers,
    coreActivity: '[Product architecture, design specifications & rapid prototype testing]',
    currentBottleneck: '[Siloed CAD repositories causing multi-week design iteration lags]',
    targetIntervention: '[Unified digital design repository & rapid simulation testing mesh]',
    valueUnlock: '[-XX% Cycle Time]',
  },
  {
    id: 'ops',
    number: '03',
    name: '[Core Operations]',
    icon: Factory,
    coreActivity: '[Assembly, manufacturing throughput & quality assurance controls]',
    currentBottleneck: '[Reactive maintenance downtime & scrap defect rate leakage]',
    targetIntervention: '[Predictive IoT telemetry & automated vision inspection QA]',
    valueUnlock: '[+$XXM Cap. Recovery]',
  },
  {
    id: 'fulfillment',
    number: '04',
    name: '[Omnichannel Logistics]',
    icon: Send,
    coreActivity: '[Regional hub warehousing, order fulfillment & last-mile transit]',
    currentBottleneck: '[Sub-optimal routing and unbalanced regional warehouse buffer stocks]',
    targetIntervention: '[Algorithmic multi-echelon inventory optimization & route balancing]',
    valueUnlock: '[-XX% Freight Cost]',
  },
  {
    id: 'service',
    number: '05',
    name: '[Post-Sale Service]',
    icon: Headphones,
    coreActivity: '[Customer onboarding, SLA warranties & claims escalation workflows]',
    currentBottleneck: '[Manual ticket queues averaging extended resolution times]',
    targetIntervention: '[Autonomous tier-1 resolution workflows with human-in-the-loop escalation]',
    valueUnlock: '[+XX NPS Points]',
  },
];

export const Slide28_ProcessFlowValueChain: React.FC<SlideProps> = ({ totalSlides }) => {
  const { dominantColor, headerFont } = useDeckTheme();
  const fontClass = headerFont === 'sans' ? 'font-sans' : 'font-serif';
  const [selectedStage, setSelectedStage] = useState<string>('ops');

  return (
    <SlideLayout
      slideNumber={15}
      totalSlides={totalSlides}
      kicker="[OPERATIONS DIAGNOSTIC] | END-TO-END VALUE CHAIN FLOW"
      actionTitle="[Action Title: Process automation across core operations and logistics unlocks $XXXM in trapped capital and compresses lead times by XX%]"
      sourceText="Source: [Supply Chain & Operations Practice / End-to-End Operational Flow Audit (YYYY)]"
      categoryTag="OPERATIONS DIAGNOSTIC"
    >
      <div className="h-full flex flex-col justify-between gap-3">
        {/* Connected 5-Stage Value Chain Horizontal Flow */}
        <div className="grid grid-cols-1 sm:grid-cols-5 gap-2 shrink-0">
          {STAGES.map((stage, idx) => {
            const Icon = stage.icon;
            const isSelected = selectedStage === stage.id;
            return (
              <button
                key={stage.id}
                type="button"
                onClick={() => setSelectedStage(stage.id)}
                className={`p-2.5 rounded-xl border text-left transition-all cursor-pointer relative ${
                  isSelected
                    ? 'ring-2 ring-offset-1 ring-neutral-900 bg-white shadow-md'
                    : 'bg-neutral-50 hover:bg-white border-neutral-200'
                }`}
              >
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-[10px] font-mono font-bold text-neutral-400">
                    STAGE {stage.number}
                  </span>
                  <div
                    className="w-6 h-6 rounded-md flex items-center justify-center"
                    style={{
                      backgroundColor: isSelected ? dominantColor.hex : '#F1F5F9',
                      color: isSelected ? '#ffffff' : '#475569',
                    }}
                  >
                    <Icon size={13} />
                  </div>
                </div>

                <h4 className="text-xs font-bold text-neutral-900 truncate">
                  {stage.name}
                </h4>

                <div className="mt-2 pt-1.5 border-t border-neutral-200 flex items-center justify-between">
                  <span
                    className="text-[10px] font-mono font-bold truncate"
                    style={{ color: dominantColor.hex }}
                  >
                    {stage.valueUnlock}
                  </span>
                  {idx < STAGES.length - 1 && (
                    <ChevronRight size={13} className="text-neutral-300 hidden sm:inline shrink-0" />
                  )}
                </div>
              </button>
            );
          })}
        </div>

        {/* Detailed Stage Deep-Dive Canvas */}
        {(() => {
          const current = STAGES.find((s) => s.id === selectedStage) || STAGES[2];
          const CurrentIcon = current.icon;
          return (
            <div className="flex-1 grid grid-cols-1 lg:grid-cols-12 gap-4 min-h-0">
              {/* Left 45%: As-Is Friction vs To-Be Intervention */}
              <div className="lg:col-span-6 flex flex-col justify-between p-4 rounded-xl border border-neutral-200 bg-white shadow-2xs">
                <div className="space-y-3">
                  <div className="flex items-center gap-2 pb-2 border-b border-neutral-100">
                    <div
                      className="w-8 h-8 rounded-lg flex items-center justify-center text-white shrink-0"
                      style={{ backgroundColor: dominantColor.hex }}
                    >
                      <CurrentIcon size={16} />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono text-neutral-400 uppercase font-bold block">
                        Stage {current.number} Detailed Diagnostic
                      </span>
                      <h3 className="text-sm font-bold text-neutral-900">{current.name}</h3>
                    </div>
                  </div>

                  <div className="p-3 rounded-lg bg-rose-50/60 border border-rose-200 space-y-1">
                    <div className="flex items-center gap-1.5 text-rose-700 text-xs font-bold font-mono uppercase">
                      <AlertCircle size={14} />
                      <span>Current State Bottleneck</span>
                    </div>
                    <p className="text-xs text-neutral-700 leading-relaxed">
                      {current.currentBottleneck}
                    </p>
                  </div>

                  <div
                    className="p-3 rounded-lg border space-y-1"
                    style={{
                      backgroundColor: dominantColor.lightHex,
                      borderColor: dominantColor.borderHex,
                    }}
                  >
                    <div
                      className="flex items-center gap-1.5 text-xs font-bold font-mono uppercase"
                      style={{ color: dominantColor.hex }}
                    >
                      <Zap size={14} />
                      <span>Target State Automation & AI Lever</span>
                    </div>
                    <p className="text-xs text-neutral-800 leading-relaxed">
                      {current.targetIntervention}
                    </p>
                  </div>
                </div>

                <div className="pt-2 border-t border-neutral-100 text-[10px] font-mono text-neutral-400">
                  Click any top stage button to evaluate specific value chain interventions
                </div>
              </div>

              {/* Right 55%: Economic Unlock & Operational KPIs */}
              <div className="lg:col-span-6 flex flex-col justify-between p-4 rounded-xl border border-neutral-200 bg-neutral-50">
                <div className="space-y-3">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-neutral-500 block">
                    Financial & Operational Realization Targets
                  </span>

                  <div className="grid grid-cols-2 gap-3">
                    <div className="p-3 rounded-lg bg-white border border-neutral-200">
                      <span className="text-[10px] font-mono text-neutral-400 block">
                        Quantified Value Unlock
                      </span>
                      <span
                        className="text-xl font-mono font-bold block mt-0.5"
                        style={{ color: dominantColor.hex }}
                      >
                        {current.valueUnlock}
                      </span>
                      <span className="text-[10px] text-neutral-500">Run-rate annual impact</span>
                    </div>

                    <div className="p-3 rounded-lg bg-white border border-neutral-200">
                      <span className="text-[10px] font-mono text-neutral-400 block">
                        Implementation Horizon
                      </span>
                      <span className="text-xl font-mono font-bold text-neutral-900 block mt-0.5">
                        6 - 9 Months
                      </span>
                      <span className="text-[10px] text-neutral-500">Pilot ready in Q3 2026</span>
                    </div>
                  </div>

                  <div className="p-3 rounded-lg bg-white border border-neutral-200 space-y-1.5">
                    <span className="text-[10px] font-mono font-bold text-neutral-600 uppercase block">
                      Core Functional Activity
                    </span>
                    <p className="text-xs text-neutral-700">
                      {current.coreActivity}
                    </p>
                  </div>
                </div>

                <div className="p-2 rounded bg-neutral-200/60 text-[10px] font-mono text-neutral-700 flex items-center justify-between">
                  <span>Transformation Readiness: HIGH</span>
                  <span className="font-bold">Lead: Operational Steering Committee</span>
                </div>
              </div>
            </div>
          );
        })()}

        {/* Bottom Bar */}
        <div className="p-2.5 rounded-lg border border-neutral-200 bg-neutral-50 flex items-center justify-between shrink-0 text-xs">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full" style={{ backgroundColor: dominantColor.hex }} />
            <span className="font-bold text-neutral-900">[Total Program Value Creation]:</span>
            <span className="text-neutral-600">
              [Harmonizing the 5 value chain stages yields $XXXM cumulative EBITDA upside with 100% full-year payback in XX months.]
            </span>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
};
