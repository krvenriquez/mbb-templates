import React, { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { SLIDES_REGISTRY, TOTAL_SLIDES } from '../slides/slidesConfig';
import { DeckNavigation } from './DeckNavigation';
import { PrintDeckView } from './PrintDeckView';

export const MasterDeck: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isExportModalOpen, setIsExportModalOpen] = useState<boolean>(false);
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Navigation handlers
  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  }, []);

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => Math.min(TOTAL_SLIDES - 1, prev + 1));
  }, []);

  const handleJumpTo = useCallback((index: number) => {
    if (index >= 0 && index < TOTAL_SLIDES) {
      setCurrentIndex(index);
    }
  }, []);

  const handleTriggerPrint = useCallback(() => {
    window.print();
  }, []);

  const handleToggleFullscreen = useCallback(() => {
    if (!document.fullscreenElement) {
      containerRef.current?.requestFullscreen?.().catch(() => {});
      setIsFullscreen(true);
    } else {
      document.exitFullscreen?.().catch(() => {});
      setIsFullscreen(false);
    }
  }, []);

  // Listen to fullscreen changes
  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(Boolean(document.fullscreenElement));
    };
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
  }, []);

  // Keyboard navigation shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Ignore if user is typing in an input
      if (['INPUT', 'TEXTAREA', 'SELECT'].includes((e.target as HTMLElement).tagName)) {
        return;
      }

      switch (e.key) {
        case 'ArrowRight':
        case 'ArrowDown':
        case 'PageDown':
        case ' ': // Spacebar advances
          e.preventDefault();
          handleNext();
          break;
        case 'ArrowLeft':
        case 'ArrowUp':
        case 'PageUp':
          e.preventDefault();
          handlePrev();
          break;
        case 'Home':
          e.preventDefault();
          setCurrentIndex(0);
          break;
        case 'End':
          e.preventDefault();
          setCurrentIndex(TOTAL_SLIDES - 1);
          break;
        case 'f':
        case 'F':
          e.preventDefault();
          handleToggleFullscreen();
          break;
        case 'p':
        case 'P':
          if (!e.metaKey && !e.ctrlKey) {
            e.preventDefault();
            setIsExportModalOpen(true);
          }
          break;
        case 'Escape':
          setIsExportModalOpen(false);
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleNext, handlePrev, handleToggleFullscreen]);

  const CurrentSlideComponent = SLIDES_REGISTRY[currentIndex].component;

  return (
    <div
      ref={containerRef}
      className="relative w-screen h-screen bg-[#0F172A] flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Presentation Stage Container (Maintains 16:9 Widescreen Ratio on Desktop) */}
      <main className="relative w-full h-full max-w-[1720px] max-h-[960px] p-2 sm:p-4 md:p-6 lg:p-8 flex items-center justify-center">
        <div className="relative w-full aspect-[16/9] max-h-full bg-white shadow-2xl rounded-sm border border-neutral-300/40 overflow-hidden flex flex-col">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.24, ease: [0.16, 1, 0.3, 1] }}
              className="w-full h-full flex-1"
            >
              <CurrentSlideComponent totalSlides={TOTAL_SLIDES} />
            </motion.div>
          </AnimatePresence>
        </div>
      </main>

      {/* Floating Minimal Navigation Bar (Anchored at bottom center) */}
      <div className="no-print absolute bottom-4 sm:bottom-6 z-40">
        <DeckNavigation
          currentIndex={currentIndex}
          totalSlides={TOTAL_SLIDES}
          onPrev={handlePrev}
          onNext={handleNext}
          onJumpTo={handleJumpTo}
          onExportPdf={() => setIsExportModalOpen(true)}
          isFullscreen={isFullscreen}
          onToggleFullscreen={handleToggleFullscreen}
        />
      </div>

      {/* Print / PDF Export System */}
      <PrintDeckView
        isOpen={isExportModalOpen}
        onClose={() => setIsExportModalOpen(false)}
        onTriggerBrowserPrint={handleTriggerPrint}
      />
    </div>
  );
};
