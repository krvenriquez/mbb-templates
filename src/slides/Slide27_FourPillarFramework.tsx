import React from 'react';
import { SlideLayout } from '../components/SlideLayout';
import { useDeckTheme } from '../context/ThemeContext';
import { Users, Cpu, ShieldCheck, Award, ArrowRight } from 'lucide-react';

/**
 * ==============================================================================
 * SLIDE TEMPLATE: 4-PILLAR ENTERPRISE OPERATING FRAMEWORK
 * ==============================================================================
 * 
 * WHEN TO USE THIS TEMPLATE:
 * --------------------------
 * 1. Comprehensive Corporate Turnaround & Strategy Blueprints: Presenting an
 *    exhaustive 4-dimensional transformation model.
 * 2. Operating Model Redesign: Establishing clear ownership, capability targets,
 *    and quantifiable metrics across the four core enterprise dimensions.
 * ==============================================================================
 */

interface SlideProps {
  totalSlides: number;
}

export const Slide27_FourPillarFramework: React.FC<SlideProps> = ({ totalSlides }) => {
  const { dominantColor, headerFont } = useDeckTheme();
  const fontClass = headerFont === 'sans' ? 'font-sans' : 'font-serif';

  const pillars = [
    {
      id: 'p1',
      number: '01',
      title: '[Pillar I: Commercial & Client Centricity]',
      icon: Users,
      kpi: '[+XX Net Promoter Score]',
      lead: '[Chief Commercial Officer]',
      initiatives: [
        '[Detail commercial capability or client journey enhancement]',
        '[Detail key account expansion and tier-1 retention motion]',
        '[Detail omnichannel go-to-market integration]',
      ],
    },
    {
      id: 'p2',
      number: '02',
      title: '[Pillar II: Operational Excellence]',
      icon: Award,
      kpi: '[-XX% Unit Cost of Delivery]',
      lead: '[Chief Operating Officer]',
      initiatives: [
        '[Detail procurement harmonization or vendor consolidation]',
        '[Detail back-office process automation and workflow efficiency]',
        '[Detail regional logistics and fulfillment optimization]',
      ],
    },
    {
      id: 'p3',
      number: '03',
      title: '[Pillar III: Tech & Data Foundry]',
      icon: Cpu,
      kpi: '[XX.X% Platform Availability]',
      lead: '[Chief Technology Officer]',
      initiatives: [
        '[Detail cloud-native microservices refactoring]',
        '[Detail enterprise data mesh and standard API architecture]',
        '[Detail secure AI tooling and developer enablement]',
      ],
    },
    {
      id: 'p4',
      number: '04',
      title: '[Pillar IV: High-Performance Organization]',
      icon: ShieldCheck,
      kpi: '[XX% Capability Certification]',
      lead: '[Chief People Officer]',
      initiatives: [
        '[Detail agile team restructuring and cross-functional squads]',
        '[Detail value-linked performance incentive schemes]',
        '[Detail enterprise academy curriculum and leadership upskilling]',
      ],
    },
  ];

  return (
    <SlideLayout
      slideNumber={9}
      totalSlides={totalSlides}
      kicker="[OPERATING BLUEPRINT] | 4-PILLAR TRANSFORMATION ARCHITECTURE"
      actionTitle="[Action Title: Balanced transformation across commercial, operational, tech, and cultural pillars ensures durable margin realization]"
      sourceText="Source: [Transformation Management Office / Operating Model Harmonization Blueprint (YYYY)]"
      categoryTag="OPERATING MODEL"
    >
      <div className="h-full flex flex-col justify-between gap-3">
        {/* 4-Pillar Grid */}
        <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 min-h-0">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.id}
                className="p-3.5 rounded-xl border border-neutral-200 bg-white flex flex-col justify-between shadow-2xs hover:border-neutral-300 transition-all"
              >
                <div className="space-y-2.5">
                  {/* Card Header */}
                  <div className="flex items-center justify-between pb-2 border-b border-neutral-100">
                    <span className="text-xs font-mono font-bold text-neutral-500">
                      {pillar.number}
                    </span>
                    <div className="w-7 h-7 rounded-md flex items-center justify-center bg-neutral-100 text-neutral-700">
                      <Icon size={15} />
                    </div>
                  </div>

                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-neutral-900 leading-snug">
                      {pillar.title}
                    </h4>
                    <span className="text-[10px] font-mono text-neutral-500 block">
                      Lead: {pillar.lead}
                    </span>
                  </div>

                  {/* Initiatives List */}
                  <div className="space-y-1.5 pt-1">
                    {pillar.initiatives.map((init, iIdx) => (
                      <div
                        key={iIdx}
                        className="p-2 rounded bg-neutral-50 border border-neutral-150 text-[11px] text-neutral-700 leading-tight"
                      >
                        {init}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Pillar Target Metric Footer */}
                <div className="pt-2.5 border-t border-neutral-200 mt-2">
                  <span className="text-[10px] font-mono font-bold uppercase text-neutral-400 block">
                    [Strategic KPI]
                  </span>
                  <span className="text-xs font-bold font-mono block text-neutral-900">
                    {pillar.kpi}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Enterprise North Star Synthesis */}
        <div className="p-2.5 rounded-lg border border-neutral-200 bg-neutral-50 flex items-center justify-between shrink-0 text-xs text-neutral-700">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full" style={{ backgroundColor: dominantColor.hex }} />
            <span className="font-bold text-neutral-900">[Enterprise North Star Metric]:</span>
            <span>
              [Achieve XX.X% adjusted EBITDA margin while expanding top-line revenue at +XX% CAGR through YYYY.]
            </span>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
};
