import React, { useState } from 'react';
import {
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  FileDown,
  Maximize2,
  Minimize2,
  Type,
  Palette,
  Check,
  Briefcase,
  LayoutGrid,
} from 'lucide-react';
import { useDeckTheme, DOMINANT_COLOR_PRESETS, HeaderFontType } from '../context/ThemeContext';
import { EngagementMetadataModal } from './EngagementMetadataModal';
import { SLIDES_REGISTRY } from '../slides/slidesConfig';

interface DeckNavigationProps {
  currentIndex: number;
  totalSlides: number;
  onPrev: () => void;
  onNext: () => void;
  onJumpTo: (index: number) => void;
  onExportPdf: () => void;
  isFullscreen: boolean;
  onToggleFullscreen: () => void;
}

export const DeckNavigation: React.FC<DeckNavigationProps> = ({
  currentIndex,
  totalSlides,
  onPrev,
  onNext,
  onJumpTo,
  onExportPdf,
  isFullscreen,
  onToggleFullscreen,
}) => {
  const { dominantColor, setDominantColor, headerFont, setHeaderFont } = useDeckTheme();
  const [showColorPicker, setShowColorPicker] = useState(false);
  const [isMetadataModalOpen, setIsMetadataModalOpen] = useState(false);
  const [showSlideMenu, setShowSlideMenu] = useState(false);

  return (
    <nav
      aria-label="Deck controls"
      className="no-print flex items-center justify-between gap-2.5 sm:gap-4 px-3 sm:px-4 py-2 bg-white/95 backdrop-blur-md border border-neutral-200/90 rounded-full shadow-lg shadow-neutral-900/5 text-neutral-800 transition-all duration-200 hover:shadow-xl hover:border-neutral-300 relative"
    >
      {/* Slide Stepper Controls */}
      <div className="flex items-center gap-1 relative">
        <button
          id="btn-prev-slide"
          type="button"
          onClick={onPrev}
          disabled={currentIndex === 0}
          title="Previous slide (Left Arrow)"
          className={`p-1.5 rounded-full transition-colors flex items-center justify-center cursor-pointer ${
            currentIndex === 0
              ? 'text-neutral-300 cursor-not-allowed'
              : 'text-neutral-700 hover:bg-neutral-100 active:bg-neutral-200'
          }`}
        >
          <ChevronLeft size={17} strokeWidth={2.2} />
          <span className="sr-only">Previous Slide</span>
        </button>

        {/* Slide Counter & Catalog Trigger */}
        <div className="relative">
          <button
            type="button"
            onClick={() => setShowSlideMenu(!showSlideMenu)}
            title="Browse all 21 slides"
            className="flex items-center gap-1.5 px-2 py-1 rounded-full hover:bg-neutral-100 transition-colors cursor-pointer border border-transparent hover:border-neutral-200"
          >
            <LayoutGrid size={13} className="text-neutral-500" />
            <span className="text-xs font-mono font-bold text-neutral-900 tabular-nums">
              {String(currentIndex + 1).padStart(2, '0')}
            </span>
            <span className="text-xs text-neutral-400">/</span>
            <span className="text-xs font-mono text-neutral-500 tabular-nums">
              {String(totalSlides).padStart(2, '0')}
            </span>
            <ChevronDown size={12} className="text-neutral-400" />
          </button>

          {/* Slide Catalog Popover */}
          {showSlideMenu && (
            <>
              <div
                className="fixed inset-0 z-40"
                onClick={() => setShowSlideMenu(false)}
              />
              <div className="absolute bottom-full left-0 mb-3 w-80 sm:w-96 max-h-[420px] bg-white border border-neutral-200 rounded-xl shadow-2xl z-50 p-3 flex flex-col overflow-hidden animate-in fade-in zoom-in-95 duration-150">
                <div className="flex items-center justify-between pb-2 border-b border-neutral-100 mb-2 shrink-0">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-neutral-900 uppercase tracking-wider font-mono">
                      Executive Slide Library
                    </span>
                    <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-neutral-100 text-neutral-600 font-bold">
                      {totalSlides} Slides
                    </span>
                  </div>
                  <span className="text-[10px] text-neutral-400 font-mono">Click to jump</span>
                </div>

                <div className="flex-1 overflow-y-auto space-y-1 pr-1">
                  {SLIDES_REGISTRY.map((slide, idx) => {
                    const isActive = idx === currentIndex;
                    return (
                      <button
                        key={slide.id}
                        type="button"
                        onClick={() => {
                          onJumpTo(idx);
                          setShowSlideMenu(false);
                        }}
                        className={`w-full text-left p-2 rounded-lg transition-all flex items-start gap-2.5 cursor-pointer text-xs ${
                          isActive
                            ? 'bg-neutral-100 font-semibold shadow-2xs'
                            : 'hover:bg-neutral-50 text-neutral-700'
                        }`}
                      >
                        <span
                          className={`shrink-0 w-5 h-5 rounded flex items-center justify-center font-mono text-[10px] font-bold ${
                            isActive
                              ? 'text-white'
                              : 'bg-neutral-200/80 text-neutral-700'
                          }`}
                          style={isActive ? { backgroundColor: dominantColor.hex } : undefined}
                        >
                          {String(idx + 1).padStart(2, '0')}
                        </span>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between gap-1">
                            <span className="text-[10px] font-mono uppercase font-bold text-neutral-400 truncate">
                              {slide.metadata.category}
                            </span>
                            {isActive && (
                              <span
                                className="text-[9px] font-bold font-mono px-1 rounded uppercase"
                                style={{
                                  backgroundColor: dominantColor.lightHex,
                                  color: dominantColor.hex,
                                }}
                              >
                                Active
                              </span>
                            )}
                          </div>
                          <p className="text-neutral-900 line-clamp-1 text-[11px] font-medium mt-0.5">
                            {slide.metadata.actionTitle.replace(/^\[.*?\]\s*/, '')}
                          </p>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            </>
          )}
        </div>

        <button
          id="btn-next-slide"
          type="button"
          onClick={onNext}
          disabled={currentIndex === totalSlides - 1}
          title="Next slide (Right Arrow or Space)"
          className={`p-1.5 rounded-full transition-colors flex items-center justify-center cursor-pointer ${
            currentIndex === totalSlides - 1
              ? 'text-neutral-300 cursor-not-allowed'
              : 'text-neutral-700 hover:bg-neutral-100 active:bg-neutral-200'
          }`}
        >
          <ChevronRight size={17} strokeWidth={2.2} />
          <span className="sr-only">Next Slide</span>
        </button>
      </div>

      {/* Slide Progress Dots (Clickable) */}
      <div className="hidden lg:flex items-center gap-1 px-2 border-x border-neutral-200">
        {Array.from({ length: totalSlides }).map((_, idx) => (
          <button
            key={idx}
            type="button"
            onClick={() => onJumpTo(idx)}
            title={`Jump to slide ${idx + 1}`}
            className="p-0.5 group cursor-pointer"
          >
            <div
              className={`transition-all duration-200 rounded-full ${
                idx === currentIndex ? 'w-4 h-2 shadow-xs' : 'w-1.5 h-1.5 bg-neutral-300 group-hover:bg-neutral-400'
              }`}
              style={idx === currentIndex ? { backgroundColor: dominantColor.hex } : undefined}
            />
            <span className="sr-only">Slide {idx + 1}</span>
          </button>
        ))}
      </div>

      {/* Customization Controls: Font & Dominant Color */}
      <div className="flex items-center gap-1.5 sm:gap-2 border-l border-neutral-200/80 pl-2">
        {/* 1. Header Font Selector */}
        <div className="flex items-center bg-neutral-100 rounded-full p-0.5 border border-neutral-200/80 text-[11px] font-medium">
          <button
            type="button"
            onClick={() => setHeaderFont('serif')}
            title="Switch header font to Serif (Editorial Consulting)"
            className={`px-2 py-0.5 rounded-full transition-all cursor-pointer ${
              headerFont === 'serif'
                ? 'bg-white text-neutral-950 font-bold shadow-xs'
                : 'text-neutral-600 hover:text-neutral-900'
            }`}
          >
            Serif
          </button>
          <button
            type="button"
            onClick={() => setHeaderFont('sans')}
            title="Switch header font to Inter Family (Modern Sans-Serif)"
            className={`px-2 py-0.5 rounded-full transition-all cursor-pointer ${
              headerFont === 'sans'
                ? 'bg-white text-neutral-950 font-bold shadow-xs'
                : 'text-neutral-600 hover:text-neutral-900'
            }`}
          >
            Inter
          </button>
        </div>

        {/* 2. Dominant Color Selector Popover / Picker */}
        <div className="relative">
          <button
            type="button"
            onClick={() => setShowColorPicker(!showColorPicker)}
            title={`Dominant Color: ${dominantColor.label} (Click to change)`}
            className="flex items-center gap-1.5 px-2 py-1 rounded-full border border-neutral-200 hover:border-neutral-300 bg-white text-xs font-semibold text-neutral-800 transition-colors cursor-pointer shadow-2xs"
          >
            <span
              className="w-3.5 h-3.5 rounded-full shadow-inner border border-black/10 transition-colors shrink-0"
              style={{ backgroundColor: dominantColor.hex }}
            />
            <span className="hidden sm:inline text-[11px] text-neutral-700 font-medium">
              {dominantColor.label}
            </span>
          </button>

          {/* Color Palette Dropdown */}
          {showColorPicker && (
            <>
              <div
                className="fixed inset-0 z-40"
                onClick={() => setShowColorPicker(false)}
              />
              <div className="absolute bottom-full mb-2 right-0 z-50 p-2 bg-white rounded-xl shadow-xl border border-neutral-200 w-52 animate-fadeIn">
                <div className="text-[10px] uppercase font-bold text-neutral-400 px-1.5 pb-1 mb-1 border-b border-neutral-100 flex items-center justify-between">
                  <span>Dominant Brand Color</span>
                  <Palette size={12} />
                </div>
                <div className="grid grid-cols-2 gap-1">
                  {DOMINANT_COLOR_PRESETS.map((preset) => {
                    const isSelected = dominantColor.id === preset.id;
                    return (
                      <button
                        key={preset.id}
                        type="button"
                        onClick={() => {
                          setDominantColor(preset);
                          setShowColorPicker(false);
                        }}
                        className={`flex items-center gap-2 p-1.5 rounded-lg text-left text-xs transition-colors cursor-pointer ${
                          isSelected
                            ? 'bg-neutral-100 font-semibold text-neutral-950'
                            : 'hover:bg-neutral-50 text-neutral-700'
                        }`}
                      >
                        <span
                          className="w-4 h-4 rounded-full shrink-0 shadow-2xs border border-black/10"
                          style={{ backgroundColor: preset.hex }}
                        />
                        <span className="text-[11px] truncate flex-1">{preset.label}</span>
                        {isSelected && <Check size={12} className="text-neutral-900 shrink-0" />}
                      </button>
                    );
                  })}
                </div>
              </div>
            </>
          )}
        </div>

        {/* 3. Engagement Metadata / Client Details Button */}
        <button
          type="button"
          onClick={() => setIsMetadataModalOpen(true)}
          title="Edit Client, Team, Presentation Date, Logo & Title Covers"
          className="flex items-center gap-1 px-2 py-1 rounded-full border border-neutral-200 hover:border-neutral-300 bg-white text-xs font-semibold text-neutral-800 transition-colors cursor-pointer shadow-2xs hover:bg-neutral-50"
        >
          <Briefcase size={13} className="text-neutral-600" />
          <span className="hidden md:inline text-[11px] text-neutral-700 font-medium">
            Client & Details
          </span>
        </button>
      </div>

      {/* Actions: PDF Export & Fullscreen */}
      <div className="flex items-center gap-1.5 sm:gap-2">
        <button
          id="btn-export-pdf"
          type="button"
          onClick={onExportPdf}
          title="Export complete deck to PDF (P)"
          className="flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full text-white transition-all shadow-xs cursor-pointer hover:brightness-110 active:brightness-95"
          style={{ backgroundColor: dominantColor.hex }}
        >
          <FileDown size={13} />
          <span>Export PDF</span>
        </button>

        <button
          id="btn-toggle-fullscreen"
          type="button"
          onClick={onToggleFullscreen}
          title="Toggle presentation fullscreen (F)"
          className="p-1.5 rounded-full text-neutral-600 hover:text-neutral-950 hover:bg-neutral-100 transition-colors cursor-pointer"
        >
          {isFullscreen ? <Minimize2 size={16} /> : <Maximize2 size={16} />}
          <span className="sr-only">Fullscreen</span>
        </button>
      </div>

      {/* Engagement Metadata Modal */}
      <EngagementMetadataModal
        isOpen={isMetadataModalOpen}
        onClose={() => setIsMetadataModalOpen(false)}
      />
    </nav>
  );
};
