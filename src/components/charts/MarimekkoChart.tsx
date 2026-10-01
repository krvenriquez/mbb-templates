import React, { useState } from 'react';
import { motion } from 'motion/react';
import { MekkoColumn } from '../../types';
import { useDeckTheme } from '../../context/ThemeContext';

interface MarimekkoChartProps {
  columns: MekkoColumn[];
  totalMarketSize?: string;
  className?: string;
}

export const MarimekkoChart: React.FC<MarimekkoChartProps> = ({
  columns,
  totalMarketSize = '$28.4B',
  className = '',
}) => {
  const { dominantColor } = useDeckTheme();
  const [activeSegment, setActiveSegment] = useState<{
    colName: string;
    subName: string;
    sharePercent: number;
    colWidth: number;
    note?: string;
  } | null>(null);

  // Palette for non-focus segments
  const neutralFills = ['#334155', '#64748B', '#94A3B8', '#CBD5E1'];

  return (
    <div className={`w-full h-full flex flex-col justify-between select-none ${className}`}>
      {/* Top Details & Legend Bar */}
      <div className="flex items-center justify-between pb-2 border-b border-neutral-200 mb-2">
        <div className="flex items-center gap-3">
          <span className="text-xs font-bold text-neutral-900 uppercase tracking-wider">
            Market TAM Segmentation (2D Mekko)
          </span>
          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-neutral-100 text-neutral-700 font-semibold">
            Total Market: {totalMarketSize}
          </span>
        </div>

        {/* Dynamic Hover Tooltip Info */}
        <div className="text-[11px] h-5 flex items-center">
          {activeSegment ? (
            <span className="font-medium text-neutral-800 animate-fadeIn">
              <strong style={{ color: dominantColor.hex }}>{activeSegment.subName}</strong> in{' '}
              <strong className="text-neutral-900">{activeSegment.colName}</strong>:{' '}
              <span className="font-mono font-bold text-neutral-900">
                {activeSegment.sharePercent}% Share
              </span>{' '}
              ({activeSegment.colWidth}% of total market)
            </span>
          ) : (
            <span className="text-neutral-400 italic text-[10px]">
              Hover segment slices for detailed volume and share breakdown
            </span>
          )}
        </div>
      </div>

      {/* Chart Canvas: 100% Height x 100% Width */}
      <div className="flex-1 min-h-[220px] relative flex flex-col justify-end pt-2 pb-1">
        {/* Y-axis percentage guide marks */}
        <div className="absolute inset-x-0 inset-y-0 flex flex-col justify-between pointer-events-none opacity-25">
          <div className="border-b border-dashed border-neutral-400 w-full" />
          <div className="border-b border-dashed border-neutral-400 w-full" />
          <div className="border-b border-dashed border-neutral-400 w-full" />
          <div className="border-b border-dashed border-neutral-400 w-full" />
        </div>

        {/* Mekko Columns Row */}
        <div className="w-full h-full flex items-stretch gap-1 relative z-10">
          {columns.map((col, colIdx) => (
            <div
              key={col.segmentName}
              style={{ width: `${col.widthPercent}%` }}
              className="h-full flex flex-col justify-end relative group"
            >
              {/* Stacked Sub-segments */}
              <div className="w-full h-full flex flex-col-reverse rounded-xs overflow-hidden border border-neutral-300 shadow-xs bg-neutral-100">
                {col.subSegments.map((sub, subIdx) => {
                  const isFocus = sub.isFocus;
                  const fillColor = isFocus
                    ? dominantColor.hex
                    : sub.color || neutralFills[subIdx % neutralFills.length];

                  return (
                    <motion.div
                      key={sub.name}
                      initial={{ scaleY: 0 }}
                      animate={{ scaleY: 1 }}
                      transition={{
                        duration: 0.45,
                        delay: colIdx * 0.08 + subIdx * 0.04,
                        ease: 'easeOut',
                      }}
                      style={{
                        height: `${sub.sharePercent}%`,
                        backgroundColor: fillColor,
                        transformOrigin: 'bottom',
                      }}
                      onMouseEnter={() =>
                        setActiveSegment({
                          colName: col.segmentName,
                          subName: sub.name,
                          sharePercent: sub.sharePercent,
                          colWidth: col.widthPercent,
                          note: sub.note,
                        })
                      }
                      onMouseLeave={() => setActiveSegment(null)}
                      className={`relative w-full border-t border-white/40 first:border-t-0 cursor-pointer transition-all duration-150 ${
                        isFocus ? 'hover:brightness-110 ring-1 ring-white/60' : 'hover:brightness-95'
                      }`}
                    >
                      {/* Label inside slice if slice is large enough */}
                      {sub.sharePercent >= 16 && (
                        <div className="absolute inset-0 flex items-center justify-center p-1 text-center pointer-events-none">
                          <span
                            className={`text-[10px] font-bold leading-tight line-clamp-1 ${
                              isFocus ? 'text-white' : 'text-white/95'
                            }`}
                          >
                            {sub.sharePercent}%
                          </span>
                        </div>
                      )}
                    </motion.div>
                  );
                })}
              </div>

              {/* Column Footnote / X-Axis Segment Label */}
              <div className="mt-2 text-center">
                <div className="text-[10px] sm:text-[11px] font-bold text-neutral-900 leading-snug truncate">
                  {col.segmentName}
                </div>
                <div className="text-[9px] font-mono text-neutral-500">
                  {col.volumeLabel} ({col.widthPercent}% TAM)
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer Legend */}
      <div className="flex items-center justify-between mt-3 pt-2 border-t border-neutral-200 text-[10px] text-neutral-500">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1.5">
            <span
              className="w-3 h-3 rounded-xs shadow-xs"
              style={{ backgroundColor: dominantColor.hex }}
            />
            <span className="font-bold text-neutral-900">Our Enterprise Platform (Focus)</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-xs bg-slate-700" />
            <span>Legacy Competitor A</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-xs bg-slate-500" />
            <span>Niche Challenger B</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-xs bg-slate-300" />
            <span>Fragmented Others</span>
          </div>
        </div>

        <span className="italic">
          X-axis width = Segment Market Size | Y-axis height = Segment Player Share %
        </span>
      </div>
    </div>
  );
};
