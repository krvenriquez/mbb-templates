import React, { useState } from 'react';
import { motion } from 'motion/react';
import { useDeckTheme } from '../context/ThemeContext';
import {
  Layers,
  Radio,
  Wifi,
  Cpu,
  Globe,
  CheckCircle2,
  Info,
  ChevronRight,
  Filter,
} from 'lucide-react';

/**
 * ==============================================================================
 * SLIDE TEMPLATE: GROUPED CATEGORY TAXONOMY TABLE (MCKINSEY SPECTRUM LAYOUT)
 * ==============================================================================
 * 
 * WHEN TO USE THIS TEMPLATE:
 * --------------------------
 * 1. Technology & Architecture Radars: Grouping emerging, frontier, and mature
 *    technological vectors by tier (e.g., Frontier vs. Advanced vs. Legacy).
 * 2. Product Portfolio Rationalization: Mapping discrete product tiers, offerings,
 *    and target customer value propositions across corporate business units.
 * 3. Regulatory & Policy Classifications: Categorizing compliance requirements,
 *    operational risk buckets, and supervisory implications.
 * 4. Vendor & Tool Ecosystem Due Diligence: Grouping market software tools by tier
 *    with standardized value proposition statements.
 * 
 * CONSULTING GUIDELINES & BEST PRACTICES:
 * ---------------------------------------
 * - Segmented Left Grouping Blocks: Use solid vertical category blocks spanning
 *   multiple rows to enforce MECE hierarchy without visual clutter.
 * - Concise Value Propositions: Each row must clearly articulate the distinct
 *   economic or functional unlock (e.g., speed, latency, unit cost, coverage).
 * - Action Title Rule: Directly state the strategic momentum (e.g., "Connectivity
 *   technologies are taking strides forward across frontier and advanced tiers").
 * ==============================================================================
 */

interface SlideProps {
  totalSlides: number;
}

interface TaxonomyItem {
  id: string;
  name: string;
  valueProp: string;
  badge?: string;
  maturity: 'Emerging' | 'Scaling' | 'Mature';
}

interface TaxonomyCategory {
  id: string;
  title: string;
  themeColor?: string;
  description?: string;
  items: TaxonomyItem[];
}

const TAXONOMY_DATA: TaxonomyCategory[] = [
  {
    id: 'frontier',
    title: 'Frontier',
    description: 'Next-gen breakthrough protocols with exponential capability jumps',
    items: [
      {
        id: 't-leo',
        name: 'LEO constellation',
        valueProp: 'Global coverage with significantly reduced latency vs. existing satellite offerings',
        badge: 'High Latency Reduction',
        maturity: 'Emerging',
      },
      {
        id: 't-5g-high',
        name: 'High-band 5G (ie, millimeter wave)',
        valueProp: 'Highest speed, low latency, and highly secure cellular connectivity for mission-critical apps',
        badge: 'Ultra-High Bandwidth',
        maturity: 'Scaling',
      },
    ],
  },
  {
    id: 'advanced',
    title: 'Advanced',
    description: 'Commercial-grade modern connectivity standards scaling across enterprise infrastructure',
    items: [
      {
        id: 't-5g-mid',
        name: 'Low- to mid-band 5G',
        valueProp: 'High-speed, low-latency cellular connectivity overlay on existing 4G infrastructure',
        badge: 'Nationwide Footprint',
        maturity: 'Mature',
      },
      {
        id: 't-wifi6',
        name: 'Wi-Fi 6 / 6E',
        valueProp: 'Next-generation Wi-Fi with improved speed, device density, and features to increase device efficiency',
        badge: 'Campus Density',
        maturity: 'Mature',
      },
      {
        id: 't-fiber',
        name: 'Fiber / DOCSIS 4.0',
        valueProp: 'High-speed, ultra-reliable fixed backbone networks that support all downstream connectivity',
        badge: 'Core Transport',
        maturity: 'Mature',
      },
      {
        id: 't-lpwan',
        name: 'LPWAN (e.g., NB-IoT, LoRaWAN)¹',
        valueProp: 'Low-power and low-maintenance networks that support dense sensor telemetry and smart assets',
        badge: '10+ Yr Battery Life',
        maturity: 'Scaling',
      },
      {
        id: 't-short',
        name: 'Short range (eg, BLE, RFID, UWB)',
        valueProp: 'Short-range and efficient device-to-device connectivity, localized asset tracking, and identification',
        badge: 'Proximity Precision',
        maturity: 'Mature',
      },
    ],
  },
];

export const Slide14_CategoryTaxonomyTable: React.FC<SlideProps> = ({ totalSlides }) => {
  const { dominantColor, headerFont } = useDeckTheme();
  const fontClass = headerFont === 'sans' ? 'font-sans' : 'font-serif';
  const [activeFilter, setActiveFilter] = useState<string>('ALL');
  const [selectedItemId, setSelectedItemId] = useState<string | null>(null);

  const filteredCategories = TAXONOMY_DATA.map((cat) => {
    if (activeFilter === 'ALL') return cat;
    return {
      ...cat,
      items: cat.items.filter((item) => item.maturity === activeFilter),
    };
  }).filter((cat) => cat.items.length > 0);

  return (
    <div
      className="relative w-full h-full bg-white text-neutral-900 flex flex-col justify-between overflow-hidden p-6 sm:p-8 md:p-10 select-none"
      style={{ aspectRatio: '16/9' }}
    >
      {/* 1. Header Block with McKinsey Kicker & Action Title */}
      <div className="shrink-0 pb-3 border-b border-neutral-200">
        <div className="flex items-center justify-between mb-1.5">
          <div className="flex items-center gap-2">
            <span
              className="text-[10px] sm:text-xs font-bold uppercase tracking-widest font-mono"
              style={{ color: dominantColor.hex }}
            >
              [TECHNOLOGY ARCHITECTURE] | CONNECTIVITY TAXONOMY & SPECTRUM
            </span>
            <span className="text-neutral-300">|</span>
            <span className="text-[10px] font-mono text-neutral-400">
              SPECTRUM EVALUATION
            </span>
          </div>

          <div className="flex items-center gap-1.5 text-xs">
            <span className="text-[10px] uppercase font-bold text-neutral-400 mr-1">Maturity Filter:</span>
            {['ALL', 'Emerging', 'Scaling', 'Mature'].map((tier) => (
              <button
                key={tier}
                type="button"
                onClick={() => setActiveFilter(tier)}
                className={`px-2 py-0.5 rounded-full text-[10px] font-medium transition-colors cursor-pointer ${
                  activeFilter === tier
                    ? 'text-white font-semibold'
                    : 'text-neutral-600 bg-neutral-100 hover:bg-neutral-200'
                }`}
                style={activeFilter === tier ? { backgroundColor: dominantColor.hex } : undefined}
              >
                {tier}
              </button>
            ))}
          </div>
        </div>

        <h2 className={`${fontClass} text-base sm:text-lg md:text-xl lg:text-[22px] font-bold text-neutral-900 leading-snug`}>
          Connectivity technologies are taking strides forward across frontier and advanced tiers.
        </h2>
      </div>

      {/* 2. Main McKinsey-Style Segmented Category Table */}
      <div className="flex-1 py-3 flex flex-col justify-between min-h-0 overflow-hidden">
        {/* Table Column Headers */}
        <div className="grid grid-cols-12 gap-4 pb-2 border-b border-neutral-900 text-xs font-bold text-neutral-900 uppercase tracking-wider shrink-0">
          <div className="col-span-2 text-neutral-400 font-mono text-[11px]">
            TIER LEVEL
          </div>
          <div className="col-span-4 text-[13px] font-semibold">
            Connectivity spectrum
          </div>
          <div className="col-span-6 text-[13px] font-semibold flex items-center justify-between">
            <span>Value proposition</span>
            <span className="text-[10px] font-mono text-neutral-400 font-normal uppercase">
              Strategic Impact
            </span>
          </div>
        </div>

        {/* Table Rows Body with Category Vertical Span */}
        <div className="flex-1 flex flex-col justify-between overflow-y-auto divide-y divide-neutral-200/90 py-1 pr-1">
          {filteredCategories.map((category) => (
            <div
              key={category.id}
              className="grid grid-cols-12 gap-4 items-stretch py-2 hover:bg-neutral-50/60 transition-colors"
            >
              {/* Grouped Vertical Category Block */}
              <div className="col-span-2 flex flex-col justify-center">
                <div
                  className="w-full h-full min-h-[54px] rounded-xs text-white p-3 flex flex-col justify-center items-start shadow-xs transition-transform duration-200"
                  style={{
                    backgroundColor:
                      category.id === 'frontier'
                        ? '#0B192C'
                        : dominantColor.hex,
                  }}
                >
                  <span className="text-xs sm:text-sm font-bold tracking-tight">
                    {category.title}
                  </span>
                  <span className="text-[9px] font-mono text-white/70 uppercase mt-0.5">
                    {category.items.length} {category.items.length === 1 ? 'Standard' : 'Standards'}
                  </span>
                </div>
              </div>

              {/* Sub-Rows inside Category */}
              <div className="col-span-10 divide-y divide-neutral-200/70 flex flex-col justify-around">
                {category.items.map((item) => {
                  const isSelected = selectedItemId === item.id;
                  return (
                    <div
                      key={item.id}
                      onClick={() => setSelectedItemId(isSelected ? null : item.id)}
                      className={`grid grid-cols-10 gap-4 py-2 px-2 rounded-xs transition-all cursor-pointer items-center ${
                        isSelected
                          ? 'bg-neutral-100 shadow-2xs'
                          : 'hover:bg-neutral-100/50'
                      }`}
                    >
                      {/* Sub-technology / Spectrum Name */}
                      <div className="col-span-4 text-xs sm:text-[13px] font-bold text-neutral-900 flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-neutral-300 shrink-0" />
                        <span className="truncate">{item.name}</span>
                      </div>

                      {/* Value Proposition Description */}
                      <div className="col-span-6 flex items-center justify-between gap-3">
                        <p className="text-xs sm:text-[12px] text-neutral-700 leading-relaxed font-sans">
                          {item.valueProp}
                        </p>

                        {item.badge && (
                          <span
                            className="shrink-0 text-[10px] font-mono font-semibold px-2 py-0.5 rounded-full border whitespace-nowrap"
                            style={{
                              backgroundColor: dominantColor.lightHex,
                              borderColor: dominantColor.borderHex,
                              color: dominantColor.hex,
                            }}
                          >
                            {item.badge}
                          </span>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Footnotes & Legend Box */}
        <div className="shrink-0 pt-2 border-t border-neutral-200/80 text-[10px] text-neutral-500 font-sans space-y-0.5">
          <div>
            1. LPWAN are low-power, wide-area networks; NB-IoT refers to narrow-band Internet of Things; BLE is Bluetooth Low Energy.
          </div>
          <div className="font-mono text-neutral-400">
            Methodology: Evaluated on 10-year total cost of ownership (TCO), latency overhead, and spectrum availability.
          </div>
        </div>
      </div>

      {/* 3. McKinsey Standard Bottom Bar */}
      <div className="shrink-0 pt-2 border-t border-neutral-200 flex items-center justify-between text-[11px] text-neutral-500 font-mono">
        <div>Source: McKinsey Global Institute analysis; Expert & Carrier Survey, 2026</div>
        <div className="italic">Slide 16 / {String(totalSlides).padStart(2, '0')}</div>
      </div>
    </div>
  );
};
