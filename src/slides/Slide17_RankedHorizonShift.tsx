import React, { useState } from 'react';
import { motion } from 'motion/react';
import { useDeckTheme } from '../context/ThemeContext';
import {
  ArrowRight,
  TrendingUp,
  AlertTriangle,
  Clock,
  Sparkles,
  Layers,
  ArrowUpDown,
} from 'lucide-react';

/**
 * ==============================================================================
 * SLIDE TEMPLATE: RANKED HORIZON STRATEGIC PRIORITY SHIFT (TOP-5 SHIFT MATRIX)
 * ==============================================================================
 * 
 * WHEN TO USE THIS TEMPLATE:
 * --------------------------
 * 1. Strategic Horizon Risk Analysis: Showing how leadership concerns migrate from
 *    tactical friction today (e.g. Literacy, Capability) to economic constraints
 *    tomorrow (e.g. Ongoing Run Costs, Workflow Redesign).
 * 2. C-Suite & Board Priority Roadmaps: Comparing near-term vs. multi-year challenges
 *    to justify strategic budget reallocation.
 * 3. Change Management Readiness: Highlighting how initial talent resistance gives
 *    way to operational scaling and organizational redeployment difficulties.
 * 4. Technology Cost of Ownership (TCO) Studies: Proving that run-rate OPEX and
 *    infrastructure costs become the dominant concern post-adoption.
 * 
 * CONSULTING GUIDELINES & BEST PRACTICES:
 * ---------------------------------------
 * - Thematic Color Coding: Apply consistent chromatic styling to matching themes
 *   across both columns (e.g. Green for Talent/Literacy, Charcoal for Infrastructure Cost).
 * - Traced Shift Highlighting: Allow the audience to easily visually trace a challenge
 *   moving up (e.g., Cost rising from #4 to #1) or down (Literacy falling from #1 to #5).
 * - Action Title Rule: Summarize the dual tension directly in the headline.
 * ==============================================================================
 */

interface SlideProps {
  totalSlides: number;
}

interface RankedChallenge {
  rank: number;
  title: string;
  themeId: 'literacy' | 'talent' | 'cost' | 'workflow' | 'pilot';
  colorType: 'bright-accent' | 'forest' | 'charcoal';
}

const TODAY_CHALLENGES: RankedChallenge[] = [
  {
    rank: 1,
    title: 'Lack of AI and GenAI literacy in nontech roles',
    themeId: 'literacy',
    colorType: 'bright-accent',
  },
  {
    rank: 2,
    title: 'Uncertainty about when and where to use GenAI',
    themeId: 'talent',
    colorType: 'forest',
  },
  {
    rank: 3,
    title: 'Lack of AI and GenAI technology talent',
    themeId: 'talent',
    colorType: 'forest',
  },
  {
    rank: 4,
    title: 'Cost of implementing and running GenAI',
    themeId: 'cost',
    colorType: 'charcoal',
  },
  {
    rank: 5,
    title: 'Lack of AI/GenAI-specific pilots in the rollout process',
    themeId: 'pilot',
    colorType: 'forest',
  },
];

const FUTURE_CHALLENGES: RankedChallenge[] = [
  {
    rank: 1,
    title: 'Cost of implementing and running GenAI',
    themeId: 'cost',
    colorType: 'charcoal',
  },
  {
    rank: 2,
    title: 'Difficulty redeploying workers effectively',
    themeId: 'workflow',
    colorType: 'forest',
  },
  {
    rank: 3,
    title: 'Difficulty changing end-to-end workflows',
    themeId: 'workflow',
    colorType: 'forest',
  },
  {
    rank: 4,
    title: 'Lack of funds / budget for ongoing innovation investment',
    themeId: 'cost',
    colorType: 'forest',
  },
  {
    rank: 5,
    title: 'Lack of AI and GenAI literacy in nontech roles',
    themeId: 'literacy',
    colorType: 'bright-accent',
  },
];

export const Slide17_RankedHorizonShift: React.FC<SlideProps> = ({ totalSlides }) => {
  const { dominantColor, headerFont } = useDeckTheme();
  const fontClass = headerFont === 'sans' ? 'font-sans' : 'font-serif';
  const [activeTheme, setActiveTheme] = useState<string | null>(null);

  const getColorStyles = (colorType: RankedChallenge['colorType'], isHighlighted: boolean) => {
    if (colorType === 'bright-accent') {
      return {
        bg: '#10B981', // Bright emerald/green
        text: '#06281E',
        numberBg: 'bg-emerald-600/30 text-emerald-950',
      };
    }
    if (colorType === 'charcoal') {
      return {
        bg: '#1E293B', // Dark slate/charcoal
        text: '#FFFFFF',
        numberBg: 'bg-slate-700/50 text-white',
      };
    }
    // Forest / Default Theme
    return {
      bg: '#064E3B', // Dark evergreen
      text: '#FFFFFF',
      numberBg: 'bg-emerald-900/50 text-emerald-100',
    };
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
              [STRATEGIC RISK HORIZON] | LEADERSHIP CHALLENGE SHIFT
            </span>
            <span className="text-neutral-300">|</span>
            <span className="text-[10px] font-mono text-neutral-400">
              5-YEAR PRIORITIES MIGRATION
            </span>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono text-neutral-500">
            <span>Hover items to trace horizon migrations</span>
          </div>
        </div>

        <h2 className={`${fontClass} text-base sm:text-lg md:text-xl lg:text-[22px] font-bold text-neutral-900 leading-snug`}>
          Leaders worry about workers' level of AI literacy today and the cost of implementation tomorrow.
        </h2>
      </div>

      {/* 2. Main Side-by-Side Ranked Lists */}
      <div className="flex-1 py-3 flex flex-col justify-between min-h-0 overflow-hidden">
        {/* Column Headers */}
        <div className="grid grid-cols-12 gap-6 pb-2 shrink-0">
          <div className="col-span-6 flex items-center justify-between">
            <h3 className="text-xs sm:text-sm font-bold text-neutral-900 uppercase tracking-wider">
              Top five challenges today
            </h3>
            <span className="text-[10px] font-mono text-neutral-400">
              NEAR-TERM HORIZON (YEAR 0–1)
            </span>
          </div>
          <div className="col-span-6 flex items-center justify-between">
            <h3 className="text-xs sm:text-sm font-bold text-neutral-900 uppercase tracking-wider">
              Top five challenges in the next five years
            </h3>
            <span className="text-[10px] font-mono text-neutral-400">
              MEDIUM-TERM HORIZON (YEAR 2–5)
            </span>
          </div>
        </div>

        {/* 5-Row Aligned Comparison Grid */}
        <div className="flex-1 grid grid-cols-12 gap-6 min-h-0">
          {/* LEFT COLUMN: Top 5 Today */}
          <div className="col-span-6 flex flex-col justify-between space-y-2">
            {TODAY_CHALLENGES.map((item) => {
              const isMatch = activeTheme === item.themeId;
              const isDimmed = activeTheme !== null && !isMatch;
              const styles = getColorStyles(item.colorType, isMatch);

              return (
                <div
                  key={`today-${item.rank}`}
                  onMouseEnter={() => setActiveTheme(item.themeId)}
                  onMouseLeave={() => setActiveTheme(null)}
                  className={`flex items-stretch rounded-md transition-all duration-200 cursor-pointer overflow-hidden shadow-xs ${
                    isMatch
                      ? 'ring-2 ring-neutral-950 scale-[1.01]'
                      : isDimmed
                      ? 'opacity-40'
                      : 'hover:shadow-md'
                  }`}
                  style={{ backgroundColor: styles.bg }}
                >
                  {/* Rank Number Block */}
                  <div
                    className="w-12 sm:w-14 shrink-0 flex items-center justify-center font-bold text-xl sm:text-2xl font-mono border-r border-black/10"
                    style={{ color: styles.text }}
                  >
                    {item.rank}
                  </div>

                  {/* Challenge Text */}
                  <div
                    className="flex-1 p-2.5 sm:p-3 flex items-center text-xs sm:text-[13px] font-medium leading-snug"
                    style={{ color: styles.text }}
                  >
                    {item.title}
                  </div>
                </div>
              );
            })}
          </div>

          {/* RIGHT COLUMN: Top 5 in Next Five Years */}
          <div className="col-span-6 flex flex-col justify-between space-y-2">
            {FUTURE_CHALLENGES.map((item) => {
              const isMatch = activeTheme === item.themeId;
              const isDimmed = activeTheme !== null && !isMatch;
              const styles = getColorStyles(item.colorType, isMatch);

              return (
                <div
                  key={`future-${item.rank}`}
                  onMouseEnter={() => setActiveTheme(item.themeId)}
                  onMouseLeave={() => setActiveTheme(null)}
                  className={`flex items-stretch rounded-md transition-all duration-200 cursor-pointer overflow-hidden shadow-xs ${
                    isMatch
                      ? 'ring-2 ring-neutral-950 scale-[1.01]'
                      : isDimmed
                      ? 'opacity-40'
                      : 'hover:shadow-md'
                  }`}
                  style={{ backgroundColor: styles.bg }}
                >
                  {/* Rank Number Block */}
                  <div
                    className="w-12 sm:w-14 shrink-0 flex items-center justify-center font-bold text-xl sm:text-2xl font-mono border-r border-black/10"
                    style={{ color: styles.text }}
                  >
                    {item.rank}
                  </div>

                  {/* Challenge Text */}
                  <div
                    className="flex-1 p-2.5 sm:p-3 flex items-center text-xs sm:text-[13px] font-medium leading-snug"
                    style={{ color: styles.text }}
                  >
                    {item.title}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Dynamic Transition Annotation Callout */}
        <div className="shrink-0 pt-2 flex items-center justify-between text-xs text-neutral-600 border-t border-neutral-200 mt-2">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 font-medium">
              <span className="w-3 h-3 rounded-xs bg-emerald-500 inline-block" /> Literacy & Talent (Shifts from #1 to #5)
            </span>
            <span className="flex items-center gap-1.5 font-medium">
              <span className="w-3 h-3 rounded-xs bg-slate-800 inline-block" /> Cost & Run-Rate OPEX (Surges from #4 to #1)
            </span>
          </div>
          <div className="text-[11px] font-mono text-neutral-400">
            Source: BCG Global AI at Work Survey (n = 4,065 leaders)
          </div>
        </div>
      </div>

      {/* 3. Standard Footer */}
      <div className="shrink-0 pt-2 border-t border-neutral-200 flex items-center justify-between text-[11px] text-neutral-500 font-mono">
        <div>
          Sources: AI at Work (2024), n = 4,065 leaders familiar with AI and GenAI; BCG analysis.
        </div>
        <div className="italic">Slide 19 / {String(totalSlides).padStart(2, '0')}</div>
      </div>
    </div>
  );
};
