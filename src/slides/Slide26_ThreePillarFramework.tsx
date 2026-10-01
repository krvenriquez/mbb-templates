import React from 'react';
import { SlideLayout } from '../components/SlideLayout';
import { useDeckTheme } from '../context/ThemeContext';
import { Shield, Zap, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';

/**
 * ==============================================================================
 * SLIDE TEMPLATE: 3-PILLAR STRATEGIC FRAMEWORK
 * ==============================================================================
 * 
 * WHEN TO USE THIS TEMPLATE:
 * --------------------------
 * 1. Corporate Strategic Plans & Vision Roadmaps: Structuring long-range growth
 *    into three distinct MECE strategic pillars.
 * 2. Investor Day Strategic Pillars: Providing analysts with a concise 3-part blueprint
 *    of capital allocation and growth horizons.
 * ==============================================================================
 */

interface SlideProps {
  totalSlides: number;
}

export const Slide26_ThreePillarFramework: React.FC<SlideProps> = ({ totalSlides }) => {
  const { dominantColor, headerFont } = useDeckTheme();
  const fontClass = headerFont === 'sans' ? 'font-sans' : 'font-serif';

  return (
    <SlideLayout
      slideNumber={8}
      totalSlides={totalSlides}
      kicker="[STRATEGIC ARCHITECTURE] | 3-PILLAR ENTERPRISE BLUEPRINT"
      actionTitle="[Action Title: Strategic agenda balances core margin optimization with digital adjacencies and frontier platform incubation]"
      sourceText="Source: [Office of the Chief Strategy Officer / Enterprise Strategic Plan (YYYY)]"
      categoryTag="CORPORATE STRATEGY"
    >
      <div className="h-full flex flex-col justify-between gap-3">
        {/* Top 3 Core Strategic Pillar Columns */}
        <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-4 min-h-0">
          {/* Pillar 1: Protect & Optimize Core */}
          <div className="p-4 rounded-xl border border-neutral-200 bg-white flex flex-col justify-between shadow-2xs hover:border-neutral-300 transition-all">
            <div className="space-y-3">
              <div className="flex items-center justify-between pb-2 border-b border-neutral-100">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-neutral-100 flex items-center justify-center">
                    <Shield size={16} className="text-neutral-700" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-neutral-400 block">
                      [Pillar I]
                    </span>
                    <span className="text-xs font-bold text-neutral-900 block">
                      [Fortify the Core Engine]
                    </span>
                  </div>
                </div>
                <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-neutral-100 text-neutral-600">
                  [Defend & Fund]
                </span>
              </div>

              <div className="space-y-2">
                <div className="p-2.5 rounded-lg bg-neutral-50 border border-neutral-150 space-y-0.5">
                  <span className="text-[11px] font-bold text-neutral-900 block">
                    [Zero-Based Cost Redesign]
                  </span>
                  <p className="text-[11px] text-neutral-600">
                    [Eliminate redundant tooling and automate back-office operations to harvest $XXXM run-rate SG&A savings.]
                  </p>
                </div>

                <div className="p-2.5 rounded-lg bg-neutral-50 border border-neutral-150 space-y-0.5">
                  <span className="text-[11px] font-bold text-neutral-900 block">
                    [Pricing & Mix Optimization]
                  </span>
                  <p className="text-[11px] text-neutral-600">
                    [Implement dynamic value-based pricing across top enterprise client accounts to defend contribution margins.]
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-3 border-t border-neutral-200 mt-2">
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-neutral-400 block">
                [Target Realization]
              </span>
              <span className="text-sm font-bold text-neutral-900 font-mono">
                [+$XXXM Margin Unlock (FYXX)]
              </span>
              <span className="text-[10px] text-neutral-500 block">[Sponsor: Chief Operating Officer]</span>
            </div>
          </div>

          {/* Pillar 2: Scale Digital & AI Adjacencies */}
          <div className="p-4 rounded-xl border border-neutral-200 bg-white flex flex-col justify-between shadow-2xs hover:border-neutral-300 transition-all">
            <div className="space-y-3">
              <div className="flex items-center justify-between pb-2 border-b border-neutral-100">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-neutral-100 flex items-center justify-center">
                    <Zap size={16} className="text-neutral-700" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-neutral-400 block">
                      [Pillar II]
                    </span>
                    <span className="text-xs font-bold text-neutral-900 block">
                      [Scale Growth Adjacencies]
                    </span>
                  </div>
                </div>
                <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-neutral-100 text-neutral-600">
                  [Accelerate & Scale]
                </span>
              </div>

              <div className="space-y-2">
                <div className="p-2.5 rounded-lg bg-neutral-50 border border-neutral-150 space-y-0.5">
                  <span className="text-[11px] font-bold text-neutral-900 block">
                    [Enterprise Platform & Cloud Suites]
                  </span>
                  <p className="text-[11px] text-neutral-600">
                    [Deploy native automated workflow modules directly into client environments to boost recurring ARR.]
                  </p>
                </div>

                <div className="p-2.5 rounded-lg bg-neutral-50 border border-neutral-150 space-y-0.5">
                  <span className="text-[11px] font-bold text-neutral-900 block">
                    [Ecosystem & Channel Expansion]
                  </span>
                  <p className="text-[11px] text-neutral-600">
                    [Co-sell through global partner marketplaces to reduce customer acquisition costs by XX%.]
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-3 border-t border-neutral-200 mt-2">
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-neutral-400 block">
                [Target Realization]
              </span>
              <span className="text-sm font-bold text-neutral-900 font-mono">
                [+$XXXM Incremental ARR (FYXX)]
              </span>
              <span className="text-[10px] text-neutral-500 block">[Sponsor: Chief Commercial Officer]</span>
            </div>
          </div>

          {/* Pillar 3: Pioneer Frontier Platforms */}
          <div className="p-4 rounded-xl border border-neutral-200 bg-white flex flex-col justify-between shadow-2xs hover:border-neutral-300 transition-all">
            <div className="space-y-3">
              <div className="flex items-center justify-between pb-2 border-b border-neutral-100">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-neutral-100 flex items-center justify-center">
                    <Sparkles size={16} className="text-neutral-700" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-neutral-400 block">
                      [Pillar III]
                    </span>
                    <span className="text-xs font-bold text-neutral-900 block">
                      [Pioneer Frontier Capabilities]
                    </span>
                  </div>
                </div>
                <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-neutral-100 text-neutral-600">
                  [Incubate & Option]
                </span>
              </div>

              <div className="space-y-2">
                <div className="p-2.5 rounded-lg bg-neutral-50 border border-neutral-150 space-y-0.5">
                  <span className="text-[11px] font-bold text-neutral-900 block">
                    [Autonomous Intelligence Mesh]
                  </span>
                  <p className="text-[11px] text-neutral-600">
                    [Incubate sovereign autonomous workflow systems for high-frequency transactional execution.]
                  </p>
                </div>

                <div className="p-2.5 rounded-lg bg-neutral-50 border border-neutral-150 space-y-0.5">
                  <span className="text-[11px] font-bold text-neutral-900 block">
                    [Strategic Tuck-In M&A / Ventures]
                  </span>
                  <p className="text-[11px] text-neutral-600">
                    [Allocate capital for early-stage capability tuck-ins in cybersecurity and data infrastructure.]
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-3 border-t border-neutral-200 mt-2">
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-neutral-400 block">
                [Target Realization]
              </span>
              <span className="text-sm font-bold text-neutral-900 font-mono">
                [+$XXM Strategic Upside (FYXX)]
              </span>
              <span className="text-[10px] text-neutral-500 block">[Sponsor: Head of Corporate Development]</span>
            </div>
          </div>
        </div>

        {/* Bottom Horizontal Foundational Enablers Ribbon */}
        <div className="p-3 rounded-xl border border-neutral-200 bg-neutral-50 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 shrink-0">
          <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-neutral-600">
            <span
              className="w-2 h-2 rounded-full"
              style={{ backgroundColor: dominantColor.hex }}
            />
            <span>[Cross-Cutting Foundational Enablers]:</span>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-xs text-neutral-700">
            <div className="flex items-center gap-1.5">
              <CheckCircle2 size={13} className="text-emerald-600" />
              <span>[Unified Cloud Data Mesh]</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 size={13} className="text-emerald-600" />
              <span>[Specialized Tech Talent Density]</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 size={13} className="text-emerald-600" />
              <span>[Zero-Trust Security Framework]</span>
            </div>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
};
