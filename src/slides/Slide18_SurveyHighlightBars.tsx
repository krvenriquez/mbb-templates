import React, { useState } from 'react';
import { motion } from 'motion/react';
import { useDeckTheme } from '../context/ThemeContext';
import {
  TrendingUp,
  BarChart3,
  Award,
  Sparkles,
  CheckCircle2,
  Filter,
} from 'lucide-react';

/**
 * ==============================================================================
 * SLIDE TEMPLATE: EXECUTIVE SURVEY PRIORITY BAR CHART (MCKINSEY FOCUS HIGHLIGHTS)
 * ==============================================================================
 * 
 * WHEN TO USE THIS TEMPLATE:
 * --------------------------
 * 1. C-Suite & Leadership Surveys: Presenting quantitative leadership priorities
 *    (e.g., CFO, CIO, CEO resilience or strategic focus areas).
 * 2. Strategic Focus Highlighting: Calling out the top 1 or 2 focal recommendations
 *    in bright brand accent colors while shading the remaining choices in dark slate.
 * 3. Voice of the Customer (VoC) Diagnostics: Sizing customer buying criteria,
 *    unmet pain points, or preferred feature sets.
 * 4. Benchmarking Governance & Organizational Enablers: Evaluating which capabilities
 *    executives view as most critical to long-term competitive advantage.
 * 
 * CONSULTING GUIDELINES & BEST PRACTICES:
 * ---------------------------------------
 * - Selective Chromatic Emphasis: Only highlight the 2 key strategic takeaways with
 *   bright accent color; keep all other bars in uniform dark navy or charcoal.
 * - Explicit Baseline Axis & Clean Percentage Labels: Place exact percentage values
 *   directly atop or inside the top of the bars with no unnecessary grid clutter.
 * - Action Title Rule: Directly articulate the core conclusion in the headline.
 * ==============================================================================
 */

interface SlideProps {
  totalSlides: number;
}

interface SurveyBarItem {
  id: string;
  label: string;
  sublabel?: string;
  percentage: number;
  highlighted: boolean;
}

const SURVEY_DATA: SurveyBarItem[] = [
  {
    id: 'b1',
    label: 'Improved capability building',
    percentage: 44,
    highlighted: true,
  },
  {
    id: 'b2',
    label: 'Advanced technologies',
    percentage: 44,
    highlighted: true,
  },
  {
    id: 'b3',
    label: 'Agile ways of working',
    percentage: 33,
    highlighted: false,
  },
  {
    id: 'b4',
    label: 'Advanced scenario planning',
    sublabel: '(eg, more granular scenarios through digital tools)',
    percentage: 30,
    highlighted: false,
  },
  {
    id: 'b5',
    label: 'Contingency plans',
    percentage: 24,
    highlighted: false,
  },
  {
    id: 'b6',
    label: 'Continuous cost optimization',
    percentage: 23,
    highlighted: false,
  },
];

export const Slide18_SurveyHighlightBars: React.FC<SlideProps> = ({ totalSlides }) => {
  const { dominantColor, headerFont } = useDeckTheme();
  const fontClass = headerFont === 'sans' ? 'font-sans' : 'font-serif';
  const [activeItem, setActiveItem] = useState<string | null>(null);

  const maxPercentage = 50; // Reference maximum for 100% height scale

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
              [C-SUITE BENCHMARK] | EXECUTIVE RESILIENCE PRIORITIES
            </span>
            <span className="text-neutral-300">|</span>
            <span className="text-[10px] font-mono text-neutral-400">
              MCKINSEY CFO SURVEY
            </span>
          </div>

          <div className="text-xs font-mono text-neutral-400">
            Cohort Sample: n = 136 Global CFOs (298 Total Participants)
          </div>
        </div>

        <h2 className={`${fontClass} text-base sm:text-lg md:text-xl lg:text-[22px] font-bold text-neutral-900 leading-snug mb-1`}>
          CFOs see capability building and advanced technologies as the most effective ways to build their organizations' resilience.
        </h2>

        <p className="text-xs sm:text-[13px] text-neutral-600 font-sans">
          Most valuable step to improve organization's resilience,¹ % of CFO respondents (n = 136)
        </p>
      </div>

      {/* 2. Main Vertical Bar Chart Canvas */}
      <div className="flex-1 py-4 flex flex-col justify-between min-h-0 overflow-hidden">
        {/* Bars Container */}
        <div className="flex-1 flex items-end justify-between gap-3 sm:gap-5 px-4 pt-6 pb-2 relative">
          {/* Subtle Horizontal Reference Guideline (50% & 25%) */}
          <div className="absolute inset-x-4 top-6 border-b border-dashed border-neutral-200/80 pointer-events-none flex justify-end">
            <span className="text-[9px] font-mono text-neutral-400 -mt-3.5">50%</span>
          </div>
          <div className="absolute inset-x-4 top-1/2 border-b border-dashed border-neutral-200/60 pointer-events-none flex justify-end">
            <span className="text-[9px] font-mono text-neutral-400 -mt-3.5">25%</span>
          </div>

          {SURVEY_DATA.map((item) => {
            const heightPercent = (item.percentage / maxPercentage) * 100;
            const isHovered = activeItem === item.id;

            return (
              <div
                key={item.id}
                onMouseEnter={() => setActiveItem(item.id)}
                onMouseLeave={() => setActiveItem(null)}
                className="flex-1 flex flex-col items-center h-full justify-end group cursor-pointer"
              >
                {/* Vertical Bar */}
                <div className="w-full max-w-[85px] sm:max-w-[100px] h-full flex flex-col justify-end items-center relative">
                  <motion.div
                    initial={{ height: 0 }}
                    animate={{ height: `${heightPercent}%` }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                    className={`w-full rounded-t-xs transition-all duration-200 flex items-start justify-center pt-2 relative ${
                      isHovered ? 'brightness-110 shadow-sm' : ''
                    }`}
                    style={{
                      backgroundColor: item.highlighted
                        ? dominantColor.hex
                        : '#0F172A', // Dark slate / navy
                    }}
                  >
                    {/* Exact Percentage Number inside or atop bar */}
                    <span className="text-xs sm:text-sm font-bold text-white font-mono tracking-tight">
                      {item.percentage}
                    </span>

                    {/* Highlight Star Indicator */}
                    {item.highlighted && (
                      <span className="absolute -top-5 text-[10px] font-mono font-bold px-1.5 py-0.2 rounded bg-neutral-900 text-white shadow-2xs">
                        Top 1
                      </span>
                    )}
                  </motion.div>
                </div>

                {/* Bottom Label Block */}
                <div className="w-full pt-2.5 text-center min-h-[50px] flex flex-col items-center">
                  <span
                    className={`text-xs sm:text-[12px] leading-tight font-medium transition-colors ${
                      item.highlighted
                        ? 'font-bold text-neutral-950'
                        : 'text-neutral-700'
                    }`}
                  >
                    {item.label}
                  </span>
                  {item.sublabel && (
                    <span className="text-[10px] text-neutral-400 font-sans leading-tight mt-0.5 block max-w-[110px]">
                      {item.sublabel}
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Baseline Solid Rule */}
        <div className="h-0.5 w-full bg-neutral-900 shrink-0" />

        {/* Summary Takeaway Callout */}
        <div className="shrink-0 pt-2 flex items-center justify-between text-xs text-neutral-600">
          <div className="flex items-center gap-2">
            <span
              className="text-[10px] font-bold uppercase tracking-wider font-mono px-1.5 py-0.2 rounded text-white"
              style={{ backgroundColor: dominantColor.hex }}
            >
              KEY INSIGHT
            </span>
            <span className="text-neutral-800">
              Technology and capability investments tie for top resilience priority at <strong>44%</strong>, outpacing traditional cost optimization (23%) by 2x.
            </span>
          </div>

          <div className="hidden sm:flex items-center gap-3 text-[11px] font-mono text-neutral-400">
            <span>Primary Focus (Bright)</span>
            <span>•</span>
            <span>Secondary Levers (Navy)</span>
          </div>
        </div>
      </div>

      {/* 3. McKinsey Standard Bottom Bar */}
      <div className="shrink-0 pt-2 border-t border-neutral-200 flex items-center justify-between text-[10px] sm:text-[11px] text-neutral-500 font-mono">
        <div>
          ¹Out of 11 areas presented as answer choices. Respondents selected up to 3 choices. Source: McKinsey Global Survey on the CFO's role, 298 participants, 2023.
        </div>
        <div className="italic">Slide 20 / {String(totalSlides).padStart(2, '0')}</div>
      </div>
    </div>
  );
};
