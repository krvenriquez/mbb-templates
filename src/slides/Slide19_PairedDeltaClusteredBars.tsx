import React, { useState } from 'react';
import { motion } from 'motion/react';
import { useDeckTheme } from '../context/ThemeContext';
import {
  Users,
  TrendingUp,
  HeartHandshake,
  CheckCircle2,
  ShieldCheck,
  Award,
} from 'lucide-react';

/**
 * ==============================================================================
 * SLIDE TEMPLATE: PAIRED CLUSTERED BENCHMARK BARS WITH FLOATING OVERHEAD DELTAS
 * ==============================================================================
 * 
 * WHEN TO USE THIS TEMPLATE:
 * --------------------------
 * 1. Demographic & Leadership Benchmarking: Evaluating organizational performance,
 *    manager effectiveness, or DEI initiatives across distinct leadership cohorts.
 * 2. Product & Segment A/B Testing: Comparing adoption rates or satisfaction scores
 *    between two strategic segments (e.g., Enterprise vs. Mid-Market, Cohort A vs. B).
 * 3. Before-and-After Intervention Analysis: Measuring percentage-point uplifts across
 *    5 independent functional operational areas.
 * 4. Human Capital Studies (McKinsey Women in the Workplace archetype): Demonstrating
 *    consistent cross-category outperformance with floating gap callouts.
 * 
 * CONSULTING GUIDELINES & BEST PRACTICES:
 * ---------------------------------------
 * - Floating Delta Overhead Brackets: Feature prominent bold delta figures (e.g. "+12",
 *   "+7") positioned directly between the bar heights with horizontal alignment guide lines.
 * - Uniform Vertical Cluster Spacing: Separate paired bars with subtle vertical dividers
 *   to preserve clear MECE categorical distinction.
 * - Action Title Rule: Declare the strategic leadership insight in the headline.
 * ==============================================================================
 */

interface SlideProps {
  totalSlides: number;
}

interface ClusteredBenchmarkItem {
  id: string;
  category: string;
  baselineValue: number; // e.g. Men: 19%
  targetValue: number;   // e.g. Women: 31%
  deltaLabel?: string;   // e.g. "+12 percentage points" or "+7"
}

const BENCHMARK_CLUSTERS: ClusteredBenchmarkItem[] = [
  {
    id: 'c1',
    category: 'Provided emotional support',
    baselineValue: 19,
    targetValue: 31,
    deltaLabel: '+12 percentage points',
  },
  {
    id: 'c2',
    category: 'Checked in on overall well-being',
    baselineValue: 54,
    targetValue: 61,
    deltaLabel: '+7',
  },
  {
    id: 'c3',
    category: 'Helped make sure workload was manageable',
    baselineValue: 36,
    targetValue: 42,
    deltaLabel: '+6',
  },
  {
    id: 'c4',
    category: 'Helped navigate work–life challenges',
    baselineValue: 24,
    targetValue: 29,
    deltaLabel: '+5',
  },
  {
    id: 'c5',
    category: 'Helped take actions to prevent or manage burnout',
    baselineValue: 16,
    targetValue: 21,
    deltaLabel: '+5',
  },
];

export const Slide19_PairedDeltaClusteredBars: React.FC<SlideProps> = ({ totalSlides }) => {
  const { dominantColor, headerFont } = useDeckTheme();
  const fontClass = headerFont === 'sans' ? 'font-sans' : 'font-serif';
  const [activeCluster, setActiveCluster] = useState<string | null>(null);

  const maxVal = 70; // Benchmark height ceiling

  return (
    <div
      className="relative w-full h-full bg-white text-neutral-900 flex flex-col justify-between overflow-hidden p-6 sm:p-8 md:p-10 select-none"
      style={{ aspectRatio: '16/9' }}
    >
      {/* 1. Header Block with McKinsey Kicker, Subtitle & Action Title */}
      <div className="shrink-0 pb-2.5 border-b border-neutral-200">
        <div className="flex items-center justify-between mb-1">
          <div className="flex items-center gap-2">
            <span
              className="text-[10px] sm:text-xs font-bold uppercase tracking-widest font-mono"
              style={{ color: dominantColor.hex }}
            >
              [ORGANIZATIONAL EFFECTIVENESS] | PAIRED BENCHMARK DELTA CLUSTERS
            </span>
            <span className="text-neutral-300">|</span>
            <span className="text-[10px] font-mono text-neutral-400">
              MCKINSEY DIVERSITY BENCHMARK
            </span>
          </div>

          <div className="text-xs font-mono text-neutral-400">
            5 Critical Manager Behaviors Evaluated
          </div>
        </div>

        <h2 className={`${fontClass} text-base sm:text-lg md:text-xl lg:text-[22px] font-bold text-neutral-900 leading-snug mb-1`}>
          Employees with women managers are more likely to say that their manager has supported and helped them over the past year.
        </h2>

        <p className="text-xs sm:text-[13px] text-neutral-600 font-sans">
          Actions taken by managers to support employees, by manager's gender, % of respondents
        </p>
      </div>

      {/* 2. Main 5-Cluster Clustered Bar Canvas */}
      <div className="flex-1 py-3 flex flex-col justify-between min-h-0 overflow-hidden">
        {/* 5 Paired Columns Grid with Vertical Dividers */}
        <div className="flex-1 grid grid-cols-5 divide-x divide-neutral-200/80 items-stretch min-h-0">
          {BENCHMARK_CLUSTERS.map((cluster) => {
            const baselineHeight = (cluster.baselineValue / maxVal) * 100;
            const targetHeight = (cluster.targetValue / maxVal) * 100;
            const isHovered = activeCluster === cluster.id;
            const delta = cluster.targetValue - cluster.baselineValue;

            return (
              <div
                key={cluster.id}
                onMouseEnter={() => setActiveCluster(cluster.id)}
                onMouseLeave={() => setActiveCluster(null)}
                className={`flex flex-col justify-between px-2 sm:px-3 transition-colors cursor-pointer ${
                  isHovered ? 'bg-neutral-50/80' : ''
                }`}
              >
                {/* Category Header Label (Fixed Top Height) */}
                <div className="text-center pb-2 h-11 flex items-center justify-center shrink-0">
                  <span className="text-[11px] sm:text-xs font-semibold text-neutral-900 leading-snug line-clamp-2">
                    {cluster.category}
                  </span>
                </div>

                {/* Paired Bar Area with Floating Overhead Delta Lines */}
                <div className="flex-1 flex flex-col justify-end relative pb-1">
                  {/* Floating Delta Callout at Top */}
                  <div
                    className="absolute inset-x-0 flex flex-col items-center pointer-events-none transition-transform"
                    style={{
                      bottom: `${targetHeight}%`,
                      transform: 'translateY(-10px)',
                    }}
                  >
                    <span className="text-lg sm:text-xl font-bold font-mono tracking-tight text-neutral-950">
                      +{delta}
                    </span>
                    {cluster.deltaLabel && cluster.deltaLabel.includes('percentage') && (
                      <span className="text-[9px] font-mono italic text-neutral-500 -mt-0.5">
                        percentage points
                      </span>
                    )}
                  </div>

                  {/* Dual Bars Container */}
                  <div className="flex items-end justify-center gap-2 sm:gap-3 h-full pt-12 relative">
                    {/* Left Bar (Men / Baseline) */}
                    <div className="w-8 sm:w-10 flex flex-col items-center justify-end h-full relative">
                      {/* Horizontal Alignment Guideline on top of Men Bar */}
                      <div
                        className="absolute w-14 sm:w-16 border-t border-neutral-300 pointer-events-none z-10"
                        style={{ bottom: `${baselineHeight}%` }}
                      />

                      <motion.div
                        initial={{ height: 0 }}
                        animate={{ height: `${baselineHeight}%` }}
                        transition={{ duration: 0.6, ease: 'easeOut' }}
                        className="w-full bg-[#111827] rounded-t-2xs flex items-start justify-center pt-1.5 shadow-2xs"
                      >
                        <span className="text-[11px] font-mono text-white font-bold">
                          {cluster.baselineValue}
                        </span>
                      </motion.div>
                    </div>

                    {/* Right Bar (Women / Target) */}
                    <div className="w-8 sm:w-10 flex flex-col items-center justify-end h-full relative">
                      {/* Horizontal Alignment Guideline on top of Women Bar */}
                      <div
                        className="absolute w-14 sm:w-16 border-t border-neutral-400 pointer-events-none z-10"
                        style={{ bottom: `${targetHeight}%` }}
                      />

                      <motion.div
                        initial={{ height: 0 }}
                        animate={{ height: `${targetHeight}%` }}
                        transition={{ duration: 0.7, ease: 'easeOut' }}
                        className="w-full rounded-t-2xs flex items-start justify-center pt-1.5 shadow-xs"
                        style={{
                          backgroundColor: isHovered
                            ? dominantColor.hex
                            : '#041E42', // McKinsey Midnight Navy
                        }}
                      >
                        <span className="text-[11px] font-mono text-white font-bold">
                          {cluster.targetValue}
                        </span>
                      </motion.div>
                    </div>
                  </div>
                </div>

                {/* Sub-Legend Labels Under Each Bar */}
                <div className="flex justify-around pt-1 border-t border-neutral-900 text-[10px] sm:text-[11px] font-mono font-medium text-neutral-600 shrink-0">
                  <span>Men</span>
                  <span>Women</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Legend and Insight Bar */}
        <div className="shrink-0 pt-2 border-t border-neutral-200 mt-2 flex items-center justify-between text-xs text-neutral-600">
          <div className="flex items-center gap-2">
            <span
              className="text-[10px] font-bold uppercase tracking-wider font-mono px-1.5 py-0.2 rounded text-white"
              style={{ backgroundColor: dominantColor.hex }}
            >
              FINDING
            </span>
            <span className="text-neutral-800">
              Women leaders consistently score higher across all 5 supportive behaviors, peaking at a <strong>+12 percentage-point</strong> lead in emotional support.
            </span>
          </div>

          <div className="hidden sm:flex items-center gap-4 text-xs font-medium">
            <span className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-2xs bg-[#111827] inline-block" /> Men Managers
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-2xs bg-[#041E42] inline-block" /> Women Managers
            </span>
          </div>
        </div>
      </div>

      {/* 3. McKinsey Standard Bottom Bar */}
      <div className="shrink-0 pt-2 border-t border-neutral-200 flex items-center justify-between text-[11px] text-neutral-500 font-mono">
        <div>
          Source: Women in the Workplace 2021, LeanIn.Org and McKinsey & Company, 2021.
        </div>
        <div className="italic">Slide 21 / {String(totalSlides).padStart(2, '0')}</div>
      </div>
    </div>
  );
};
