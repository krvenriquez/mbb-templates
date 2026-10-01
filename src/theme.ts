/**
 * MBB Management Consulting Design Tokens (McKinsey / BCG / Bain Standard)
 * Crimson-on-White palette with high-contrast typography and subtle elevation.
 */

export const MBB_THEME = {
  colors: {
    primary: '#C8102E',        // Signature Crimson Red (key highlights, focus metrics)
    primaryDark: '#990000',    // Dark Crimson
    primaryLight: '#FFF1F2',   // Subtle Crimson Tint (cards, badges)
    primaryBorder: '#FECDD3',  // Border for highlighted cards
    
    navy: '#1E293B',           // Deep Navy Slate (secondary metrics, dark accents)
    slate: '#475569',          // Slate Grey (neutral series)
    slateMuted: '#6B7280',     // Muted Slate (axis lines, footnotes, sublabels)
    
    background: '#FFFFFF',     // Pure White (slide canvas)
    backgroundAlt: '#F9FAFB',  // Light Container / Card Background
    cardBorder: '#E5E7EB',     // Crisp 1px card divider
    
    textDark: '#111827',       // Ink Black / Charcoal (high readability body & titles)
    textMuted: '#6B7280',      // Muted metadata & source lines
    
    success: '#059669',        // Positive variance green
    danger: '#DC2626',         // Negative variance red
  },
  fonts: {
    serif: 'Merriweather, Georgia, serif',
    sans: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif',
  },
  animation: {
    subtleFade: {
      initial: { opacity: 0, y: 6 },
      animate: { opacity: 1, y: 0 },
      exit: { opacity: 0, y: -6 },
      transition: { duration: 0.24, ease: [0.16, 1, 0.3, 1] },
    },
    staggerItem: {
      initial: { opacity: 0, y: 10 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 0.3, ease: 'easeOut' },
    },
  },
};
