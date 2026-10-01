import React, { useState } from 'react';
import { motion } from 'motion/react';
import { useDeckTheme } from '../context/ThemeContext';
import {
  ArrowRight,
  TrendingUp,
  Clock,
  Sparkles,
  Users,
  Target,
  CheckCircle2,
} from 'lucide-react';

/**
 * ==============================================================================
 * SLIDE TEMPLATE: PAIRED COMPARISON HORIZONTAL BARS WITH DELTA CALLOUTS
 * ==============================================================================
 * 
 * WHEN TO USE THIS TEMPLATE:
 * --------------------------
 * 1. Transformation Payoff Diagnostics: Demonstrating that leaders who invest in
 *    deep operating model redesign capture significantly higher business returns
 *    than those pursuing shallow tool rollouts.
 * 2. Before-and-After & A/B Strategic Cohorts: Benchmarking high-performing cohorts
 *    against average peers across input efforts (training, support) and output payoffs.
 * 3. Commercial Due Diligence (CDD): Comparing best-in-class customer cohorts vs.
 *    legacy churn-prone accounts.
 * 4. Human Capital & Talent Upskilling: Proving the quantified ROI of comprehensive
 *    enablement programs.
 * 
 * CONSULTING GUIDELINES & BEST PRACTICES:
 * ---------------------------------------
 * - Paired Horizontal Stacked Bars: Display benchmark cohort (dark) directly adjacent
 *   to or stacked above leader cohort (bright accent).
 * - Explicit Percentage-Point (+pp) Callouts: Top-tier strategy firms (BCG, McKinsey)
 *   always annotate the exact gap in percentage points with connector brackets.
 * - Cause-and-Effect Two-Panel Narrative: "Input investments on the left lead to
 *   tangible employee and enterprise outcomes on the right."
 * ==============================================================================
 */

interface SlideProps {
  totalSlides: number;
}

interface BarComparisonItem {
  id: string;
  title: string;
  subtitle: string;
  baselineValue: number; // in %
  leaderValue: number;   // in %
}

const LEFT_PANEL_ITEMS: BarComparisonItem[] = [
  {
    id: 'l1',
    title: 'Offer proper training',
    subtitle: 'Share who received more than five hours of upskilling',
    baselineValue: 49,
    leaderValue: 67,
  },
  {
    id: 'l2',
    title: 'Provide more support',
    subtitle: 'Share who had strong leadership support and coaching',
    baselineValue: 40,
    leaderValue: 59,
  },
  {
    id: 'l3',
    title: 'Track value creation better',
    subtitle: 'Share who see value created in terms of financial outcomes properly tracked',
    baselineValue: 36,
    leaderValue: 59,
  },
];

const RIGHT_PANEL_ITEMS: BarComparisonItem[] = [
  {
    id: 'r1',
    title: 'Save more time daily',
    subtitle: 'Share who save more than one hour per day across primary workflows',
    baselineValue: 29,
    leaderValue: 55,
  },
  {
    id: 'r2',
    title: 'Shift to strategic tasks',
    subtitle: 'Share who ranked strategic reallocation a top three impact of GenAI',
    baselineValue: 35,
    leaderValue: 44,
  },
  {
    id: 'r3',
    title: 'Enable higher-quality decisions',
    subtitle: 'Share who think their company will make superior decisions thanks to data',
    baselineValue: 76,
    leaderValue: 89,
  },
];

export const Slide16_PairedDeltaComparisonBars: React.FC<SlideProps> = ({ totalSlides }) => {
  const { dominantColor, headerFont } = useDeckTheme();
  const fontClass = headerFont === 'sans' ? 'font-sans' : 'font-serif';
  const [hoveredItemId, setHoveredItemId] = useState<string | null>(null);

  const baselineColor = '#064E3B'; // Dark evergreen
  const leaderColor = '#10B981';   // Emerald / Lime green

  const renderComparisonRow = (item: BarComparisonItem) => {
    const delta = item.leaderValue - item.baselineValue;
    const isHovered = hoveredItemId === item.id;

    return (
      <div
        key={item.id}
        onMouseEnter={() => setHoveredItemId(item.id)}
        onMouseLeave={() => setHoveredItemId(null)}
        className={`p-2 rounded-xs transition-all duration-200 cursor-pointer ${
          isHovered ? 'bg-white shadow-2xs' : 'hover:bg-neutral-50/70'
        }`}
      >
        {/* Metric Label & Subtext */}
        <div className="flex items-baseline justify-between mb-1.5">
          <div className="max-w-[190px] sm:max-w-[210px]">
            <h4 className="text-xs sm:text-[13px] font-bold text-neutral-900 leading-tight">
              {item.title}
            </h4>
            <p className="text-[10px] text-neutral-500 leading-snug font-sans mt-0.5">
              {item.subtitle}
            </p>
          </div>
        </div>

        {/* Dual Horizontal Bars & Connector Delta */}
        <div className="flex items-center gap-3">
          <div className="flex-1 space-y-1">
            {/* Top Bar: Baseline / Tool-Only */}
            <div className="flex items-center gap-2">
              <div className="flex-1 h-4 sm:h-4.5 bg-neutral-100 rounded-2xs overflow-hidden flex">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${item.baselineValue}%` }}
                  transition={{ duration: 0.6, ease: 'easeOut' }}
                  className="h-full rounded-2xs flex items-center justify-end pr-1.5 text-[10px] font-bold text-white font-mono"
                  style={{ backgroundColor: baselineColor }}
                >
                  {item.baselineValue}%
                </motion.div>
              </div>
            </div>

            {/* Bottom Bar: Workflow Redesign Leaders */}
            <div className="flex items-center gap-2">
              <div className="flex-1 h-4 sm:h-4.5 bg-neutral-100 rounded-2xs overflow-hidden flex">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${item.leaderValue}%` }}
                  transition={{ duration: 0.7, ease: 'easeOut' }}
                  className="h-full rounded-2xs flex items-center justify-end pr-1.5 text-[10px] font-bold text-neutral-950 font-mono shadow-xs"
                  style={{ backgroundColor: leaderColor }}
                >
                  {item.leaderValue}%
                </motion.div>
              </div>
            </div>
          </div>

          {/* Delta Callout Bracket (+Xpp) */}
          <div className="shrink-0 flex items-center gap-1 min-w-[55px]">
            <div className="flex flex-col items-center justify-center border-l-2 border-t-2 border-b-2 border-neutral-300 h-9 w-1.5 rounded-l-xs" />
            <span
              className="text-xs sm:text-sm font-bold font-mono tracking-tight"
              style={{ color: '#047857' }}
            >
              +{delta}pp
            </span>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div
      className="relative w-full h-full bg-white text-neutral-900 flex flex-col justify-between overflow-hidden p-6 sm:p-8 md:p-10 select-none"
      style={{ aspectRatio: '16/9' }}
    >
      {/* 1. Header Block with BCG Kicker & Action Title */}
      <div className="shrink-0 pb-3 border-b border-neutral-200">
        <div className="flex items-center justify-between mb-1.5">
          <div className="flex items-center gap-2">
            <span
              className="text-[10px] sm:text-xs font-bold uppercase tracking-widest font-mono"
              style={{ color: dominantColor.hex }}
            >
              [TRANSFORMATION PAYOFF] | PAIRED COHORT DELTA BENCHMARK
            </span>
            <span className="text-neutral-300">|</span>
            <span className="text-[10px] font-mono text-neutral-400">
              BCG WORKFLOW PARADIGM
            </span>
          </div>

          <div className="text-xs font-mono text-neutral-400">
            Cohort Sample: n = 5,350 Global Enterprise Respondents
          </div>
        </div>

        <h2 className={`${fontClass} text-base sm:text-lg md:text-xl lg:text-[22px] font-bold text-neutral-900 leading-snug`}>
          Companies redesigning their workflows invest more in the people transformation—and it pays off.
        </h2>
      </div>

      {/* 2. Main Dual-Panel Comparison Body */}
      <div className="flex-1 py-3 flex flex-col justify-between min-h-0 overflow-hidden">
        {/* Visual Panels Grid */}
        <div className="grid grid-cols-12 gap-4 flex-1 items-stretch min-h-0">
          {/* LEFT PANEL: Input Investment (Light Gray Container with Transition Arrow) */}
          <div className="col-span-6 rounded-lg bg-neutral-100/70 border border-neutral-200/80 p-3 sm:p-4 flex flex-col justify-between relative">
            {/* Subtle Directional Arrow transitioning to right panel */}
            <div className="absolute -right-3 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-white border border-neutral-300 shadow-sm flex items-center justify-center z-10 text-neutral-600">
              <ArrowRight size={13} />
            </div>

            <div className="pb-2 border-b border-neutral-200 shrink-0">
              <h3 className="text-xs sm:text-sm font-bold text-neutral-900">
                Companies reshaping their workflows and functions with AI...
              </h3>
              <span className="text-[10px] text-neutral-500 font-mono">
                INPUT LEVERS: Upskilling, Leadership Support & Governance
              </span>
            </div>

            <div className="flex-1 flex flex-col justify-around py-1">
              {LEFT_PANEL_ITEMS.map(renderComparisonRow)}
            </div>
          </div>

          {/* RIGHT PANEL: Output Result / Tangible Payoff */}
          <div className="col-span-6 rounded-lg bg-white border border-neutral-200/80 p-3 sm:p-4 flex flex-col justify-between">
            <div className="pb-2 border-b border-neutral-200 shrink-0">
              <h3 className="text-xs sm:text-sm font-bold text-neutral-900">
                As a result, their employees...
              </h3>
              <span className="text-[10px] text-neutral-500 font-mono">
                BUSINESS PAYOFF: Time Savings, Strategic Reallocation & Decision Quality
              </span>
            </div>

            <div className="flex-1 flex flex-col justify-around py-1">
              {RIGHT_PANEL_ITEMS.map(renderComparisonRow)}
            </div>
          </div>
        </div>

        {/* Legend Bar */}
        <div className="shrink-0 pt-2 flex items-center justify-center gap-6 text-xs font-medium text-neutral-700">
          <div className="flex items-center gap-2">
            <div className="w-3.5 h-3.5 rounded-xs shadow-2xs" style={{ backgroundColor: baselineColor }} />
            <span>Employees in companies focusing on AI tools roll-out only¹</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3.5 h-3.5 rounded-xs shadow-2xs" style={{ backgroundColor: leaderColor }} />
            <span className="font-semibold text-neutral-950">Employees in companies redesigning workflows²</span>
          </div>
        </div>
      </div>

      {/* 3. BCG Standard Footer */}
      <div className="shrink-0 pt-2 border-t border-neutral-200 flex items-center justify-between text-[11px] text-neutral-500 font-mono">
        <div>
          Sources: AI at Work, 2025; BCG analysis. Note: 1. Deploy only (off-the-shelf tools, n=1,830); 2. Reshape & Invent workflows (n=5,350).
        </div>
        <div className="italic">Slide 18 / {String(totalSlides).padStart(2, '0')}</div>
      </div>
    </div>
  );
};
