import React from 'react';
import { SlideLayout } from '../components/SlideLayout';
import { MetricBarChart } from '../components/charts/MetricBarChart';
import { CalloutBox } from '../components/CalloutBox';
import { IconBadge } from '../components/IconBadge';
import { useDeckTheme } from '../context/ThemeContext';
import { CheckCircle2, AlertCircle, TrendingUp, BarChart3 } from 'lucide-react';
import { BarDataPoint } from '../types';

/**
 * ==============================================================================
 * SLIDE TEMPLATE: FINANCIAL TRAJECTORY & MULTI-YEAR PROJECTIONS
 * ==============================================================================
 * 
 * WHEN TO USE THIS TEMPLATE:
 * --------------------------
 * 1. Long-Range Financial Planning (LRP): Presenting multi-year revenue growth,
 *    CAGRs, and business unit contributions to senior finance committees.
 * 2. Investor Relations & Capital Allocation: Illustrating how strategic investments
 *    in previous years compound into target-state top-line acceleration.
 * 3. Commercial Due Diligence (CDD): Comparing historical audited trajectory against
 *    management plan estimates and realistic unconstrained market potential.
 * 4. Business Unit Turnaround Reviews: Highlighting inflection points where new
 *    product launches or pricing initiatives inflect revenue growth.
 * 
 * CONSULTING GUIDELINES & BEST PRACTICES:
 * ---------------------------------------
 * - Visual Emphasis on Target State: Highlight the target-state final year using
 *   the firm's dominant accent color while keeping historical actuals in neutral tones.
 * - Explicit Compound Annual Growth Rate (CAGR): Clearly compute and annotate the
 *   historical CAGR versus projected forward CAGR to highlight required inflection.
 * - Key Assumptions Callout: Always accompany financial charts with the 2-3 underlying
 *   operational assumptions required to achieve the trajectory (e.g. churn reduction, ARPU).
 * ==============================================================================
 */

interface SlideProps {
  totalSlides: number;
}

export const Slide03_FinancialTrajectory: React.FC<SlideProps> = ({ totalSlides }) => {
  const { dominantColor } = useDeckTheme();

  const chartData: BarDataPoint[] = [
    { label: '[YYYY-2]', value: 140, formattedValue: '$140M', sublabel: '[Base]' },
    { label: '[YYYY-1]', value: 185, formattedValue: '$185M', sublabel: '[+32%]' },
    { label: '[YYYY (Current)]', value: 230, formattedValue: '$230M', sublabel: '[+24%]' },
    { label: '[YYYY+1 (Est)]', value: 310, formattedValue: '$310M', sublabel: '[+35%]' },
    { label: '[YYYY+2 (Target)]', value: 450, formattedValue: '$450M', highlight: true, sublabel: '[+45%]' },
  ];

  return (
    <SlideLayout
      slideNumber={6}
      totalSlides={totalSlides}
      kicker="[FINANCIAL TRAJECTORY] | REVENUE PROJECTIONS"
      actionTitle="[Action Title: Quantify projected revenue trajectory and identify primary driver behind forecast growth rate]"
      sourceText="Source: [Internal Financial Model / Audited Financials / Industry Benchmarks (YYYY)]"
      categoryTag="FINANCIAL PERFORMANCE"
    >
      <div className="h-full grid grid-cols-1 lg:grid-cols-12 gap-4 items-stretch">
        {/* Left Column: Bar Chart */}
        <div className="lg:col-span-7 bg-white rounded-md border border-neutral-200 p-4 sm:p-5 flex flex-col justify-between">
          <div className="flex items-center justify-between pb-2 border-b border-neutral-100 mb-2">
            <div className="flex items-center gap-2">
              <BarChart3 size={16} style={{ color: dominantColor.hex }} />
              <h2 className="text-xs sm:text-sm font-bold text-neutral-900">
                [Revenue / Financial Metric Trajectory ($ Millions)]
              </h2>
            </div>
            <span className="text-[10px] font-semibold text-neutral-500 bg-neutral-100 px-2 py-0.5 rounded">
              [Audited Historicals vs. 3-Year Strategic Plan]
            </span>
          </div>

          <div className="flex-1 min-h-[170px]">
            <MetricBarChart
              data={chartData}
              unit="$"
              maxValue={500}
              highlightLabel="[YYYY+2 (Target)]"
            />
          </div>
        </div>

        {/* Right Column: Executive Callout & Key Growth Drivers */}
        <div className="lg:col-span-5 flex flex-col justify-between gap-3">
          <CalloutBox
            kicker="[PRIMARY GROWTH DRIVER]"
            metric="[+XX% 3-Yr CAGR]"
            description="[Explain key commercial or pricing driver that generates the majority of incremental top-line revenue over the forecast period.]"
            icon={TrendingUp}
            variant="primary"
          />

          <div className="flex-1 bg-neutral-50/70 border border-neutral-200 rounded-md p-3.5 flex flex-col justify-center gap-3">
            <div className="flex items-start gap-2.5">
              <IconBadge icon={CheckCircle2} size={15} variant="primary" />
              <div>
                <div className="text-xs font-bold text-neutral-900">[Growth Lever 1: Contract Value / ACV Expansion]</div>
                <div className="text-[11px] text-neutral-600 leading-snug mt-0.5">
                  [Detail how packaging, upsell tiers, or enterprise bundling expand average revenue per customer account.]
                </div>
              </div>
            </div>

            <div className="w-full h-[1px] bg-neutral-200/80" />

            <div className="flex items-start gap-2.5">
              <IconBadge icon={AlertCircle} size={15} variant="navy" />
              <div>
                <div className="text-xs font-bold text-neutral-900">[Growth Lever 2: Retention & Cohort Expansion]</div>
                <div className="text-[11px] text-neutral-600 leading-snug mt-0.5">
                  [Detail cohort retention metrics, gross margin expansion, or expansion velocity across installed accounts.]
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
};
