import React, { useState } from 'react';
import { motion } from 'motion/react';
import { useDeckTheme } from '../context/ThemeContext';
import {
  Building2,
  Briefcase,
  Landmark,
  Share2,
  ChevronRight,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  Users,
} from 'lucide-react';

/**
 * ==============================================================================
 * SLIDE TEMPLATE: MULTI-STAKEHOLDER COORDINATION MATRIX (BCG ECOSYSTEM MAP)
 * ==============================================================================
 * 
 * WHEN TO USE THIS TEMPLATE:
 * --------------------------
 * 1. Ecosystem & Multi-Party Alignment: Aligning public sector, private enterprise,
 *    financiers, and non-profits around a common strategic imperative.
 * 2. ESG & Sustainability Strategy: Clarifying organizational commitments across
 *    nature-based solutions, decarbonization, and social responsibility.
 * 3. Public-Private Partnerships (PPP): Defining specific accountability charters
 *    and innovation mandates across participating consortium members.
 * 4. Enterprise Change & Coalition Building: Outlining what each internal or external
 *    actor must prioritize across strategic thematic pillars.
 * 
 * CONSULTING GUIDELINES & BEST PRACTICES:
 * ---------------------------------------
 * - Prominent Circular Icon Badges: Top-tier firms (BCG, Bain) use high-contrast
 *   circular icon emblems to establish clear actor recognition at a glance.
 * - Parallel Strategic Pillar Columns: Group coordinated actions under 2-3 bold
 *   uppercase thematic pillars (e.g., "PRIORITIZE RESILIENCE" vs. "FOSTER INNOVATION").
 * - Action Title Rule: Directly declare the coordination requirement and collective unlock.
 * ==============================================================================
 */

interface SlideProps {
  totalSlides: number;
}

interface StakeholderRow {
  id: string;
  name: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  badgeColor: string;
  pillar1Text: string;
  pillar2Text: string;
  tagline: string;
}

const STAKEHOLDERS_DATA: StakeholderRow[] = [
  {
    id: 'public-sector',
    name: 'Public sector',
    icon: Building2,
    badgeColor: '#1B4D3E', // Forest green
    pillar1Text:
      'Value resources correctly through classification systems like the EU taxonomy and sovereign environmental standards.',
    pillar2Text:
      'Create an enabling policy environment for collective action, such as public-private partnerships and local implementation consortiums.',
    tagline: 'Policy & Regulatory Frameworks',
  },
  {
    id: 'private-sector',
    name: 'Private sector',
    icon: Briefcase,
    badgeColor: '#10B981', // Emerald green
    pillar1Text:
      'Develop climate- and water-resilient corporate business models with audited supply chain disclosures.',
    pillar2Text:
      'Harness the power of modern technology, including AI, IoT sensors, and big data, to capture new sustainable growth opportunities.',
    tagline: 'Commercial Value & Agility',
  },
  {
    id: 'financial-institutions',
    name: 'Financial institutions',
    icon: Landmark,
    badgeColor: '#047857', // Deep teal
    pillar1Text:
      'Engage with clients and investee companies on long-term risk underwriting, capital cost adjustments, and resilience strategies.',
    pillar2Text:
      'Prioritize financial innovation to accelerate green bond liquidity, blended finance structures, and market-based pricing mechanisms.',
    tagline: 'Capital Allocation & Green Finance',
  },
  {
    id: 'ngos',
    name: 'NGOs & Civil Society',
    icon: Share2,
    badgeColor: '#34D399', // Mint green
    pillar1Text:
      'Integrate multidimensional resource values and prioritize community security, critical ecosystems, and disaster risk mitigation.',
    pillar2Text:
      'Identify locally led grassroots innovations. Generate standardized impact metrics to benchmark social and environmental ROI.',
    tagline: 'Community Governance & Advocacy',
  },
];

export const Slide15_StakeholderCoordinationMatrix: React.FC<SlideProps> = ({ totalSlides }) => {
  const { dominantColor, headerFont } = useDeckTheme();
  const fontClass = headerFont === 'sans' ? 'font-sans' : 'font-serif';
  const [highlightedActor, setHighlightedActor] = useState<string | null>(null);

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
              [ECOSYSTEM STRATEGY] | STAKEHOLDER COORDINATION MATRIX
            </span>
            <span className="text-neutral-300">|</span>
            <span className="text-[10px] font-mono text-neutral-400">
              BCG CONSORTIUM MODEL
            </span>
          </div>

          <div className="flex items-center gap-2 text-xs text-neutral-500 font-mono">
            <span>4 Key Actors</span>
            <span>•</span>
            <span>2 Strategic Pillars</span>
          </div>
        </div>

        <h2 className={`${fontClass} text-base sm:text-lg md:text-xl lg:text-[22px] font-bold text-neutral-900 leading-snug`}>
          Key actors need to coordinate efforts to prioritize resilient solutions and foster innovation across the value chain.
        </h2>
      </div>

      {/* 2. Main 3-Column Stakeholder Matrix */}
      <div className="flex-1 py-3 flex flex-col justify-between min-h-0 overflow-hidden">
        {/* Pillar Column Headers */}
        <div className="grid grid-cols-12 gap-4 pb-2 border-b border-neutral-900 text-xs font-bold uppercase tracking-wider shrink-0">
          <div className="col-span-3 text-neutral-400 font-mono text-[11px]">
            KEY ACTORS
          </div>
          <div className="col-span-4 text-[12px] text-neutral-900 font-semibold tracking-wide flex items-center gap-1.5">
            <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: dominantColor.hex }} />
            <span>PRIORITIZE RESILIENCE THROUGH WATER & NATURE</span>
          </div>
          <div className="col-span-5 text-[12px] text-neutral-900 font-semibold tracking-wide flex items-center gap-1.5">
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            <span>FOSTER INNOVATION FOR NBS ACROSS VALUE CHAIN</span>
          </div>
        </div>

        {/* Stakeholder Rows */}
        <div className="flex-1 flex flex-col justify-between divide-y divide-neutral-200/90 py-1 overflow-y-auto pr-1">
          {STAKEHOLDERS_DATA.map((actor) => {
            const IconComponent = actor.icon;
            const isSelected = highlightedActor === actor.id;

            return (
              <div
                key={actor.id}
                onMouseEnter={() => setHighlightedActor(actor.id)}
                onMouseLeave={() => setHighlightedActor(null)}
                className={`grid grid-cols-12 gap-4 items-center py-2.5 px-2 rounded-xs transition-all cursor-pointer ${
                  isSelected ? 'bg-neutral-50 shadow-2xs' : 'hover:bg-neutral-50/70'
                }`}
              >
                {/* Column 1: Actor Badge & Name */}
                <div className="col-span-3 flex items-center gap-3">
                  <div
                    className="w-11 h-11 sm:w-12 sm:h-12 rounded-full flex items-center justify-center text-white shrink-0 shadow-xs transition-transform duration-200"
                    style={{
                      backgroundColor: actor.badgeColor,
                      transform: isSelected ? 'scale(1.08)' : 'scale(1)',
                    }}
                  >
                    <IconComponent size={20} className="stroke-[2]" />
                  </div>
                  <div>
                    <h3 className="text-xs sm:text-sm font-bold text-neutral-900">
                      {actor.name}
                    </h3>
                    <span className="text-[10px] text-neutral-400 font-sans block mt-0.5">
                      {actor.tagline}
                    </span>
                  </div>
                </div>

                {/* Column 2: Strategic Pillar 1 Action */}
                <div className="col-span-4 pr-3">
                  <p className="text-xs sm:text-[12px] text-neutral-700 leading-relaxed font-sans">
                    {actor.pillar1Text}
                  </p>
                </div>

                {/* Column 3: Strategic Pillar 2 Action */}
                <div className="col-span-5 pl-2">
                  <p className="text-xs sm:text-[12px] text-neutral-700 leading-relaxed font-sans">
                    {actor.pillar2Text}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Takeaway / Coordination Charter Callout */}
        <div
          className="shrink-0 p-2.5 rounded-md border flex items-center justify-between text-xs transition-colors"
          style={{
            backgroundColor: dominantColor.lightHex,
            borderColor: dominantColor.borderHex,
          }}
        >
          <div className="flex items-center gap-2">
            <span
              className="text-[10px] font-bold uppercase tracking-wider font-mono px-1.5 py-0.5 rounded text-white"
              style={{ backgroundColor: dominantColor.hex }}
            >
              COORDINATION LEVER
            </span>
            <span className="text-neutral-800 font-medium">
              Multi-stakeholder steering committee meets bi-monthly to unlock sovereign blended financing and synchronize regulatory standards.
            </span>
          </div>
          <div className="hidden sm:flex items-center gap-1 font-mono text-[10px] text-neutral-500">
            <span>Alignment Score: <strong>88%</strong></span>
          </div>
        </div>
      </div>

      {/* 3. BCG Standard Footer */}
      <div className="shrink-0 pt-2 border-t border-neutral-200 flex items-center justify-between text-[11px] text-neutral-500 font-mono">
        <div>Source: BCG and WWF analysis; Nature-Based Solutions (NbS) Global Benchmark, 2026</div>
        <div className="italic">Slide 17 / {String(totalSlides).padStart(2, '0')}</div>
      </div>
    </div>
  );
};
