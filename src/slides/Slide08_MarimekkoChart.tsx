import React from 'react';
import { SlideLayout } from '../components/SlideLayout';
import { MarimekkoChart } from '../components/charts/MarimekkoChart';
import { CalloutBox } from '../components/CalloutBox';
import { MekkoColumn } from '../types';
import { Target, PieChart, Layers, ArrowUpRight } from 'lucide-react';

/**
 * ==============================================================================
 * SLIDE TEMPLATE: 2D MARIMEKKO (MEKKO) MARKET & SHARE-OF-WALLET MATRIX
 * ==============================================================================
 * 
 * WHEN TO USE THIS TEMPLATE:
 * --------------------------
 * 1. Market Capacity & Competitive Sizing: Sizing industry segments in 2 dimensions:
 *    horizontal width = total market volume / dollar spend; vertical height = market share.
 * 2. Customer Tier Profit Pool Mapping: Identifying which customer tiers generate
 *    the highest gross margins versus where competitor market share is vulnerable.
 * 3. Commercial Due Diligence (CDD): Presenting target market position relative to
 *    tier-1 incumbents, point solution challengers, and in-house build alternatives.
 * 4. M&A Synergy & Anti-Trust Analysis: Mapping combined entity market share post-merger
 *    across discrete industry sub-sectors.
 * 
 * CONSULTING GUIDELINES & BEST PRACTICES:
 * ---------------------------------------
 * - Visual Area Proportionality: The total rectangular area of each segment directly
 *   corresponds to absolute dollar revenue, instantly revealing market concentration.
 * - Strategic Focus Highlighting: Apply the client's dominant brand color exclusively
 *   to the focal organization, while shading competitor shares in neutral grays/slates.
 * - Action Title Rule: Focus on the high-value segment (e.g. "Global Enterprise represents
 *   48% of spend where client holds 32% share, offering $4.2B in displacement upside").
 * ==============================================================================
 */

interface SlideProps {
  totalSlides: number;
}

export const Slide08_MarimekkoChart: React.FC<SlideProps> = ({ totalSlides }) => {
  // Sample Marimekko structure with market segment widths and stacked player shares
  const mekkoData: MekkoColumn[] = [
    {
      segmentName: '[Tier 1: Global Enterprise]',
      widthPercent: 48,
      volumeLabel: '$13.6B TAM',
      subSegments: [
        { name: '[Our Platform (Focus)]', sharePercent: 32, isFocus: true, note: 'High retention segment' },
        { name: '[Incumbent Competitor A]', sharePercent: 36, note: 'Legacy architecture' },
        { name: '[Challenger Competitor B]', sharePercent: 18, note: 'Point solution' },
        { name: '[Fragmented / In-house]', sharePercent: 14, note: 'Custom build' },
      ],
    },
    {
      segmentName: '[Tier 2: Upper Mid-Market]',
      widthPercent: 32,
      volumeLabel: '$9.1B TAM',
      subSegments: [
        { name: '[Our Platform (Focus)]', sharePercent: 24, isFocus: true, note: 'Fastest growing cohort' },
        { name: '[Incumbent Competitor A]', sharePercent: 28, note: 'Price discounting' },
        { name: '[Challenger Competitor B]', sharePercent: 26, note: 'Aggressive sales' },
        { name: '[Fragmented / In-house]', sharePercent: 22, note: 'High churn' },
      ],
    },
    {
      segmentName: '[Tier 3: Lower Mid-Market]',
      widthPercent: 20,
      volumeLabel: '$5.7B TAM',
      subSegments: [
        { name: '[Our Platform (Focus)]', sharePercent: 14, isFocus: true, note: 'Partner distribution' },
        { name: '[Incumbent Competitor A]', sharePercent: 22, note: 'Incumbent lock' },
        { name: '[Challenger Competitor B]', sharePercent: 34, note: 'Low-cost self-serve' },
        { name: '[Fragmented / In-house]', sharePercent: 30, note: 'Unorganized' },
      ],
    },
  ];

  return (
    <SlideLayout
      slideNumber={4}
      totalSlides={totalSlides}
      kicker="[MARKET STRUCTURE] | MARIMEKKO SEGMENTATION"
      actionTitle="[Action Title: Quantify market volume and share dynamics across customer tiers using 2D Mekko sizing]"
      sourceText="Source: [Industry Market Sizing Report / Primary Expert Interviews / Benchmark Model (YYYY)]"
      categoryTag="MARKET LANDSCAPE"
    >
      <div className="h-full grid grid-cols-1 lg:grid-cols-12 gap-4 items-stretch">
        {/* Left Column: Marimekko 2D Chart */}
        <div className="lg:col-span-8 bg-white rounded-md border border-neutral-200 p-4 sm:p-5 flex flex-col justify-between">
          <div className="flex-1 min-h-[220px]">
            <MarimekkoChart columns={mekkoData} totalMarketSize="[$28.4B TAM]" />
          </div>
        </div>

        {/* Right Column: Key Takeaways & Sizing Notes */}
        <div className="lg:col-span-4 flex flex-col justify-between gap-3">
          <CalloutBox
            kicker="[STRATEGIC IMPLICATION]"
            metric="[32% Market Share]"
            description="[Insert Primary Strategic Insight: Enterprise tier accounts for ~50% of market profit pool where our platform has structural differentiation.]"
            icon={Target}
            variant="primary"
          />

          <div className="flex-1 bg-neutral-50/70 border border-neutral-200 rounded-md p-3.5 flex flex-col justify-between">
            <div className="text-xs font-bold uppercase tracking-wider text-neutral-800 mb-2 flex items-center gap-1.5">
              <Layers size={14} className="text-neutral-600" />
              <span>[Key Segment Observations]</span>
            </div>

            <div className="space-y-2 text-xs text-neutral-700">
              <div className="flex items-start gap-1.5">
                <ArrowUpRight size={13} className="text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-neutral-900">[Enterprise Concentration]:</strong>
                  <span className="text-[11px] text-neutral-600 block">
                    [Detail how enterprise tier yields highest gross margins and sticky contracts.]
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-1.5">
                <ArrowUpRight size={13} className="text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-neutral-900">[Mid-Market Headroom]:</strong>
                  <span className="text-[11px] text-neutral-600 block">
                    [Detail displacement opportunity against legacy Competitor A point solutions.]
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-2 pt-2 border-t border-neutral-200 text-[10px] text-neutral-500 italic">
              [Note: Segment definitions correspond to client revenue & headcount criteria]
            </div>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
};
