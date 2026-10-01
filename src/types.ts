export interface SlideMetadata {
  id: string;
  slideNumber: number;
  kicker: string;
  actionTitle: string;
  sourceText: string;
  category?: string;
}

export interface DeckState {
  currentSlideIndex: number;
  totalSlides: number;
  isExporting: boolean;
  isFullscreen: boolean;
}

export interface BarDataPoint {
  label: string;
  value: number;
  formattedValue?: string;
  highlight?: boolean;
  sublabel?: string;
}

export interface WaterfallStep {
  label: string;
  value: number;
  formattedValue?: string;
  type: 'base' | 'positive' | 'negative' | 'subtotal' | 'total';
  description?: string;
}

export interface TrendPoint {
  label: string;
  actual?: number;
  target?: number;
  benchmark?: number;
}

export interface MekkoSubSegment {
  name: string;
  sharePercent: number; // 0 to 100% within this segment
  isFocus?: boolean;
  color?: string;
  note?: string;
}

export interface MekkoColumn {
  segmentName: string;
  widthPercent: number; // share of total market width (sum to 100%)
  volumeLabel: string;
  subSegments: MekkoSubSegment[];
}

