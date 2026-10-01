import React from 'react';
import { SlideMetadata } from '../types';
import { Slide00_TitleCover } from './Slide00_TitleCover';
import { Slide00B_SplitHeroTitleCover } from './Slide00B_SplitHeroTitleCover';
import { Slide00C_FullBleedHeroTitleCover } from './Slide00C_FullBleedHeroTitleCover';
import { Slide00D_PanoramicBandHeroTitleCover } from './Slide00D_PanoramicBandHeroTitleCover';
import { Slide01_ExecutiveSummary } from './Slide01_ExecutiveSummary';
import { Slide25_ExecutiveDashboardSummary } from './Slide25_ExecutiveDashboardSummary';
import { Slide30_MintoPyramidSynthesis } from './Slide30_MintoPyramidSynthesis';
import { Slide26_ThreePillarFramework } from './Slide26_ThreePillarFramework';
import { Slide27_FourPillarFramework } from './Slide27_FourPillarFramework';
import { Slide02_MarketLandscape } from './Slide02_MarketLandscape';
import { Slide08_MarimekkoChart } from './Slide08_MarimekkoChart';
import { Slide23_HundredPercentStackedBar } from './Slide23_HundredPercentStackedBar';
import { Slide21_BarAndColumnChart } from './Slide21_BarAndColumnChart';
import { Slide29_InsightBarColumnSplit } from './Slide29_InsightBarColumnSplit';
import { Slide07_HouseTemplate } from './Slide07_HouseTemplate';
import { Slide03_FinancialTrajectory } from './Slide03_FinancialTrajectory';
import { Slide04_ProfitabilityWaterfall } from './Slide04_ProfitabilityWaterfall';
import { Slide22_TwoByTwoStrategyMatrix } from './Slide22_TwoByTwoStrategyMatrix';
import { Slide05_CompetitivePositioning } from './Slide05_CompetitivePositioning';
import { Slide20_HeatmapTable } from './Slide20_HeatmapTable';
import { Slide31_FullWidthHarveyBallTable } from './Slide31_FullWidthHarveyBallTable';
import { Slide11_HarveyBallMatrix } from './Slide11_HarveyBallMatrix';
import { Slide12_StrategicHeatmap } from './Slide12_StrategicHeatmap';
import { Slide28_ProcessFlowValueChain } from './Slide28_ProcessFlowValueChain';
import { Slide09_ValueChainFlow } from './Slide09_ValueChainFlow';
import { Slide24_PhaseGateGanttRoadmap } from './Slide24_PhaseGateGanttRoadmap';
import { Slide13_GanttRoadmap } from './Slide13_GanttRoadmap';
import { Slide06_StrategicRoadmap } from './Slide06_StrategicRoadmap';
import { Slide14_CategoryTaxonomyTable } from './Slide14_CategoryTaxonomyTable';
import { Slide15_StakeholderCoordinationMatrix } from './Slide15_StakeholderCoordinationMatrix';
import { Slide16_PairedDeltaComparisonBars } from './Slide16_PairedDeltaComparisonBars';
import { Slide17_RankedHorizonShift } from './Slide17_RankedHorizonShift';
import { Slide18_SurveyHighlightBars } from './Slide18_SurveyHighlightBars';
import { Slide19_PairedDeltaClusteredBars } from './Slide19_PairedDeltaClusteredBars';
import { Slide10_EnderSlide } from './Slide10_EnderSlide';

export interface SlideConfigItem {
  id: string;
  metadata: SlideMetadata;
  component: React.ComponentType<{ totalSlides: number }>;
}

export const SLIDES_REGISTRY: SlideConfigItem[] = [
  {
    id: 'slide-0a',
    metadata: {
      id: 'slide-0a',
      slideNumber: 1,
      kicker: '[TITLE SLIDE] | ENGAGEMENT COVER A (EDITORIAL)',
      actionTitle: '[Title Slide: Strategic Transformation & Value Creation Blueprint]',
      sourceText: 'Confidential | Prepared for Executive Board',
      category: 'ENGAGEMENT COVER',
    },
    component: Slide00_TitleCover,
  },
  {
    id: 'slide-0b',
    metadata: {
      id: 'slide-0b',
      slideNumber: 2,
      kicker: '[TITLE SLIDE] | ENGAGEMENT COVER B (SPLIT HERO)',
      actionTitle: '[Title Slide: Comprehensive Strategic Transformation Blueprint - Split Hero]',
      sourceText: 'Confidential | Architectural Executive Cover',
      category: 'ENGAGEMENT COVER',
    },
    component: Slide00B_SplitHeroTitleCover,
  },
  {
    id: 'slide-0c',
    metadata: {
      id: 'slide-0c',
      slideNumber: 3,
      kicker: '[TITLE SLIDE] | ENGAGEMENT COVER C (FULL BLEED HERO)',
      actionTitle: '[Title Slide: Global Vision & Strategic Masterplan - Full Bleed Dark Canvas]',
      sourceText: 'Confidential | Executive Board Deliverable',
      category: 'ENGAGEMENT COVER',
    },
    component: Slide00C_FullBleedHeroTitleCover,
  },
  {
    id: 'slide-0d',
    metadata: {
      id: 'slide-0d',
      slideNumber: 4,
      kicker: '[TITLE SLIDE] | ENGAGEMENT COVER D (PANORAMIC BAND HERO)',
      actionTitle: '[Title Slide: Strategic Portfolio Review & Governance Readout - Panoramic Band]',
      sourceText: 'Confidential | Steering Committee Readout',
      category: 'ENGAGEMENT COVER',
    },
    component: Slide00D_PanoramicBandHeroTitleCover,
  },
  {
    id: 'slide-1',
    metadata: {
      id: 'slide-1',
      slideNumber: 5,
      kicker: '[EXECUTIVE BRIEFING] | STRATEGIC MANDATE',
      actionTitle: '[Action Title: State primary value unlock and 3 core strategic pillars]',
      sourceText: 'Source: [Strategic Study & Board Working Model]',
      category: 'EXECUTIVE BRIEFING',
    },
    component: Slide01_ExecutiveSummary,
  },
  {
    id: 'slide-25',
    metadata: {
      id: 'slide-25',
      slideNumber: 6,
      kicker: '[EXECUTIVE BRIEFING] | STRATEGIC SYNTHESIS DASHBOARD',
      actionTitle: 'Target Operating Model unlocks $480M EBITDA run-rate by FY28; immediate board approval requested for Tranche-1',
      sourceText: 'Source: Steering Committee Working Model; Diagnostic & Business Case (v3.0)',
      category: 'EXECUTIVE DASHBOARD',
    },
    component: Slide25_ExecutiveDashboardSummary,
  },
  {
    id: 'slide-30',
    metadata: {
      id: 'slide-30',
      slideNumber: 7,
      kicker: '[EXECUTIVE LOGIC] | MINTO PYRAMID SYNTHESIS',
      actionTitle: 'Strategic logic proves urgency, operational feasibility, and self-funding capacity for immediate transformation',
      sourceText: 'Source: Office of the Chief Strategy Officer; Strategic Deductive Logic Tree',
      category: 'MINTO PYRAMID',
    },
    component: Slide30_MintoPyramidSynthesis,
  },
  {
    id: 'slide-26',
    metadata: {
      id: 'slide-26',
      slideNumber: 8,
      kicker: '[STRATEGIC ARCHITECTURE] | 3-PILLAR ENTERPRISE BLUEPRINT',
      actionTitle: 'Strategic agenda balances core margin optimization with digital adjacencies and frontier platform incubation',
      sourceText: 'Source: Office of the Chief Strategy Officer; Enterprise Strategic Plan 2026-2030',
      category: '3 PILLAR STRATEGY',
    },
    component: Slide26_ThreePillarFramework,
  },
  {
    id: 'slide-27',
    metadata: {
      id: 'slide-27',
      slideNumber: 9,
      kicker: '[OPERATING BLUEPRINT] | 4-PILLAR TRANSFORMATION ARCHITECTURE',
      actionTitle: 'Balanced transformation across commercial, operational, tech, and cultural pillars ensures durable margin realization',
      sourceText: 'Source: Transformation Management Office; Operating Model Blueprint (FY2026-FY2028)',
      category: '4 PILLAR FRAMEWORK',
    },
    component: Slide27_FourPillarFramework,
  },
  {
    id: 'slide-2',
    metadata: {
      id: 'slide-2',
      slideNumber: 10,
      kicker: '[MARKET DYNAMICS] | MECE MARKET BREAKDOWN',
      actionTitle: '[Action Title: Quantify addressable TAM/SAM/SOM market segments]',
      sourceText: 'Source: [Market Research & Customer Survey]',
      category: 'MACRO LANDSCAPE',
    },
    component: Slide02_MarketLandscape,
  },
  {
    id: 'slide-3',
    metadata: {
      id: 'slide-3',
      slideNumber: 11,
      kicker: '[MARKET STRUCTURE] | MARIMEKKO 2D SIZING',
      actionTitle: '[Action Title: Sizing market volume and competitive share via 2D Mekko chart]',
      sourceText: 'Source: [Market Benchmark & Competitive Intelligence Report]',
      category: 'MARKET LANDSCAPE',
    },
    component: Slide08_MarimekkoChart,
  },
  {
    id: 'slide-23',
    metadata: {
      id: 'slide-23',
      slideNumber: 12,
      kicker: '[REVENUE MODEL TRANSFORMATION] | 100% STACKED MIX SHIFT',
      actionTitle: 'Cloud & AI SaaS expands from 22% to 49% of corporate revenue, replacing low-multiple perpetual maintenance',
      sourceText: 'Source: Historical Financial Disclosures & Management Operating Plan (2026E)',
      category: '100% STACKED BAR',
    },
    component: Slide23_HundredPercentStackedBar,
  },
  {
    id: 'slide-21',
    metadata: {
      id: 'slide-21',
      slideNumber: 13,
      kicker: '[PORTFOLIO ECONOMICS] | VOLUME VS. MARGIN DIVERGENCE',
      actionTitle: 'Revenue mix shift towards Applied AI & Cloud platforms expands gross margins from 44% to 68%',
      sourceText: 'Source: Finance & Strategy Management Accounts; Segment Unit Economics Review',
      category: 'BAR & COLUMN CHART',
    },
    component: Slide21_BarAndColumnChart,
  },
  {
    id: 'slide-29',
    metadata: {
      id: 'slide-29',
      slideNumber: 14,
      kicker: '[EMPIRICAL DIAGNOSTIC] | QUALITATIVE SYNTHESIS & BENCHMARK PROOF',
      actionTitle: 'Targeted operational turnaround closes the historic 1,000 bps profitability gap into top-quartile parity',
      sourceText: 'Source: Capital IQ & S&P Global Market Intelligence; Enterprise Peer Benchmarking',
      category: 'INSIGHT & CHART SPLIT',
    },
    component: Slide29_InsightBarColumnSplit,
  },
  {
    id: 'slide-4',
    metadata: {
      id: 'slide-4',
      slideNumber: 15,
      kicker: '[FRAMEWORK ARCHITECTURE] | STRATEGIC HOUSE',
      actionTitle: '[Action Title: Connect north-star vision with core pillars and foundational enablers]',
      sourceText: 'Source: [Internal Strategic Architecture Framework]',
      category: 'ENTERPRISE ARCHITECTURE',
    },
    component: Slide07_HouseTemplate,
  },
  {
    id: 'slide-5',
    metadata: {
      id: 'slide-5',
      slideNumber: 16,
      kicker: '[FINANCIAL TRAJECTORY] | REVENUE PROJECTIONS',
      actionTitle: '[Action Title: Project multi-year top-line financial performance and growth levers]',
      sourceText: 'Source: [Internal Financial Model & Audited Financials]',
      category: 'FINANCIAL PERFORMANCE',
    },
    component: Slide03_FinancialTrajectory,
  },
  {
    id: 'slide-6',
    metadata: {
      id: 'slide-6',
      slideNumber: 17,
      kicker: '[PROFITABILITY BRIDGE] | EBITDA ACCELERATION',
      actionTitle: '[Action Title: Bridge EBITDA trajectory from baseline to target state through concrete levers]',
      sourceText: 'Source: [Margin Diagnostic & Value Realization Model]',
      category: 'VALUE CREATION',
    },
    component: Slide04_ProfitabilityWaterfall,
  },
  {
    id: 'slide-22',
    metadata: {
      id: 'slide-22',
      slideNumber: 18,
      kicker: '[PORTFOLIO RATIONALIZATION] | 2X2 STRATEGIC POSITIONING',
      actionTitle: 'Strategic capital allocation prioritizes GenAI and Cloud Security while initiating managed carve-out of legacy services',
      sourceText: 'Source: Executive Committee Portfolio Review; Market Sizing & Competitive Benchmark Study',
      category: '2X2 STRATEGY',
    },
    component: Slide22_TwoByTwoStrategyMatrix,
  },
  {
    id: 'slide-7',
    metadata: {
      id: 'slide-7',
      slideNumber: 19,
      kicker: '[COMPETITIVE BENCHMARK] | MOAT & POSITIONING',
      actionTitle: '[Action Title: Map structural differentiation in 2x2 leadership quadrant]',
      sourceText: 'Source: [Capability Diagnostic & Customer Advisory Interviews]',
      category: 'STRATEGIC POSITIONING',
    },
    component: Slide05_CompetitivePositioning,
  },
  {
    id: 'slide-20',
    metadata: {
      id: 'slide-20',
      slideNumber: 20,
      kicker: '[DIAGNOSTIC BENCHMARK] | REGIONAL MATURITY HEATMAP',
      actionTitle: 'Regional capability audit reveals critical delivery asymmetry: North America leads while LATAM and APAC face debt',
      sourceText: 'Source: Strategic Transformation Program Office; Regional Operating Diagnostic (Q3 2026)',
      category: 'HEATMAP TABLE',
    },
    component: Slide20_HeatmapTable,
  },
  {
    id: 'slide-31',
    metadata: {
      id: 'slide-31',
      slideNumber: 21,
      kicker: '[EVALUATION MATRIX] | FULL-WIDTH VENDOR & ARCHITECTURE COMPARISON',
      actionTitle: 'Comprehensive evaluation across 6 weighted criteria confirms Proposed Target Architecture achieves 88.8% score',
      sourceText: 'Source: Technical Evaluation Committee; Architecture RFP Benchmark & TCO Model (FY2026)',
      category: 'HARVEY BALL (FULL)',
    },
    component: Slide31_FullWidthHarveyBallTable,
  },
  {
    id: 'slide-8',
    metadata: {
      id: 'slide-8',
      slideNumber: 22,
      kicker: '[CAPABILITY ASSESSMENT] | HARVEY BALL SCORECARD',
      actionTitle: '[Action Title: Rigorous benchmark of 4 peer competitors across critical functional capabilities]',
      sourceText: 'Source: [Expert Interviews & Customer Capability Benchmarking]',
      category: 'BENCHMARKING',
    },
    component: Slide11_HarveyBallMatrix,
  },
  {
    id: 'slide-9',
    metadata: {
      id: 'slide-9',
      slideNumber: 23,
      kicker: '[PORTFOLIO RISK & OPPORTUNITY] | 2D STRATEGIC HEATMAP',
      actionTitle: '[Action Title: Prioritize 12 strategic initiatives across implementation difficulty and financial impact]',
      sourceText: 'Source: [Steering Committee Risk Assessment & Financial Underwriting]',
      category: 'RISK & PORTFOLIO',
    },
    component: Slide12_StrategicHeatmap,
  },
  {
    id: 'slide-28',
    metadata: {
      id: 'slide-28',
      slideNumber: 24,
      kicker: '[OPERATIONS DIAGNOSTIC] | END-TO-END VALUE CHAIN FLOW',
      actionTitle: 'Process automation across Core Operations and Logistics unlocks $140M in trapped capital and compresses lead times',
      sourceText: 'Source: Supply Chain & Manufacturing Practice; End-to-End Operational Flow Audit (Q2 2026)',
      category: 'VALUE CHAIN FLOW',
    },
    component: Slide28_ProcessFlowValueChain,
  },
  {
    id: 'slide-11',
    metadata: {
      id: 'slide-11',
      slideNumber: 25,
      kicker: '[OPERATING MODEL] | VALUE CHAIN STAGE-GATE',
      actionTitle: '[Action Title: Phased 5-stage value realization journey with strict decision gates]',
      sourceText: 'Source: [Transformation Management Office (TMO) Playbook]',
      category: 'EXECUTION ARCHITECTURE',
    },
    component: Slide09_ValueChainFlow,
  },
  {
    id: 'slide-24',
    metadata: {
      id: 'slide-24',
      slideNumber: 26,
      kicker: '[PROGRAM DELIVERY] | 18-MONTH PHASE-GATE ROADMAP',
      actionTitle: 'Execution cadence achieves production readiness by Q4 2026, anchoring full global cutover at Gate 3 in Q2 2027',
      sourceText: 'Source: Transformation Management Office (TMO); Integrated Master Milestone Schedule',
      category: 'GANTT & ROADMAP',
    },
    component: Slide24_PhaseGateGanttRoadmap,
  },
  {
    id: 'slide-10',
    metadata: {
      id: 'slide-10',
      slideNumber: 27,
      kicker: '[PROGRAM MANAGEMENT OFFICE] | 12-MONTH GANTT SCHEDULE',
      actionTitle: '[Action Title: Orchestrate 4 workstreams with defined steering committee decision gates]',
      sourceText: 'Source: [Transformation Management Office (TMO) Execution Tracker]',
      category: 'PMO & GOVERNANCE',
    },
    component: Slide13_GanttRoadmap,
  },
  {
    id: 'slide-12',
    metadata: {
      id: 'slide-12',
      slideNumber: 28,
      kicker: '[IMPLEMENTATION PLAN] | 3-HORIZON ROADMAP',
      actionTitle: '[Action Title: Sequence implementation across 3 horizons with designated milestone targets]',
      sourceText: 'Source: [Program Management Office (PMO) Resource Plan]',
      category: 'ROADMAP & EXECUTION',
    },
    component: Slide06_StrategicRoadmap,
  },
  {
    id: 'slide-14',
    metadata: {
      id: 'slide-14',
      slideNumber: 29,
      kicker: '[TECHNOLOGY SPECTRUM] | CATEGORY TAXONOMY TABLE',
      actionTitle: 'Connectivity technologies are taking strides forward across frontier and advanced tiers',
      sourceText: 'Source: McKinsey Global Institute analysis; Expert Survey, 2026',
      category: 'TAXONOMY TABLE',
    },
    component: Slide14_CategoryTaxonomyTable,
  },
  {
    id: 'slide-15',
    metadata: {
      id: 'slide-15',
      slideNumber: 30,
      kicker: '[ECOSYSTEM STRATEGY] | STAKEHOLDER COORDINATION MATRIX',
      actionTitle: 'Key actors need to coordinate efforts to prioritize resilient solutions and foster innovation',
      sourceText: 'Source: BCG and WWF analysis; Nature-Based Solutions Benchmark, 2026',
      category: 'STAKEHOLDER MATRIX',
    },
    component: Slide15_StakeholderCoordinationMatrix,
  },
  {
    id: 'slide-16',
    metadata: {
      id: 'slide-16',
      slideNumber: 31,
      kicker: '[TRANSFORMATION PAYOFF] | PAIRED HORIZONTAL DELTA BARS',
      actionTitle: 'Companies redesigning their workflows invest more in people transformation—and it pays off',
      sourceText: 'Sources: AI at Work, 2025; BCG analysis',
      category: 'DELTA COMPARISON',
    },
    component: Slide16_PairedDeltaComparisonBars,
  },
  {
    id: 'slide-17',
    metadata: {
      id: 'slide-17',
      slideNumber: 32,
      kicker: '[STRATEGIC HORIZON] | RANKED CHALLENGE SHIFT MATRIX',
      actionTitle: "Leaders worry about workers' level of AI literacy today and the cost of implementation tomorrow",
      sourceText: 'Sources: AI at Work (2024), n = 4,065 leaders; BCG analysis',
      category: 'PRIORITY SHIFT',
    },
    component: Slide17_RankedHorizonShift,
  },
  {
    id: 'slide-18',
    metadata: {
      id: 'slide-18',
      slideNumber: 33,
      kicker: '[EXECUTIVE SURVEY] | C-SUITE PRIORITY FOCUS BARS',
      actionTitle: "CFOs see capability building and advanced technologies as most effective for resilience",
      sourceText: "Source: McKinsey Global Survey on the CFO's role (n = 136), 2023",
      category: 'SURVEY BENCHMARK',
    },
    component: Slide18_SurveyHighlightBars,
  },
  {
    id: 'slide-19',
    metadata: {
      id: 'slide-19',
      slideNumber: 34,
      kicker: '[ORGANIZATIONAL EFFECTIVENESS] | PAIRED CLUSTER DELTA BARS',
      actionTitle: 'Employees with women managers are more likely to report receiving critical leadership support',
      sourceText: 'Source: Women in the Workplace 2021, LeanIn.Org and McKinsey & Company',
      category: 'CLUSTERED DELTAS',
    },
    component: Slide19_PairedDeltaClusteredBars,
  },
  {
    id: 'slide-13',
    metadata: {
      id: 'slide-13',
      slideNumber: 35,
      kicker: '[EXECUTIVE MANDATE] | DECISION GATES & NEXT STEPS',
      actionTitle: '[Action Title: Confirm 3 mandatory Board decisions and immediate 30-day mobilization]',
      sourceText: 'Source: [Steering Committee Protocol & Governance Charter]',
      category: 'STEERING COMMITTEE',
    },
    component: Slide10_EnderSlide,
  },
];

export const TOTAL_SLIDES = SLIDES_REGISTRY.length;


