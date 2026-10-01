import React from 'react';
import { SLIDES_REGISTRY, TOTAL_SLIDES } from '../slides/slidesConfig';
import { Printer, X, Download, CheckCircle2 } from 'lucide-react';
import { useDeckTheme } from '../context/ThemeContext';

interface PrintDeckViewProps {
  isOpen: boolean;
  onClose: () => void;
  onTriggerBrowserPrint: () => void;
}

export const PrintDeckView: React.FC<PrintDeckViewProps> = ({
  isOpen,
  onClose,
  onTriggerBrowserPrint,
}) => {
  const { dominantColor, headerFont } = useDeckTheme();
  const fontClass = headerFont === 'sans' ? 'font-sans' : 'font-serif';

  if (!isOpen) {
    // Hidden container for native browser window.print() even when modal is closed
    return (
      <div className="print-only hidden">
        {SLIDES_REGISTRY.map((slideItem) => {
          const SlideComp = slideItem.component;
          return (
            <div
              key={slideItem.id}
              className="print-slide-page w-full bg-white relative overflow-hidden"
              style={{
                pageBreakAfter: 'always',
                breakAfter: 'page',
              }}
            >
              <SlideComp totalSlides={TOTAL_SLIDES} />
            </div>
          );
        })}
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-50 bg-neutral-950/80 backdrop-blur-sm flex flex-col items-center justify-center p-4 sm:p-6">
      {/* Modal Header */}
      <div className="w-full max-w-4xl bg-white rounded-t-xl border-b border-neutral-200 px-6 py-4 flex items-center justify-between shadow-2xl">
        <div className="flex items-center gap-3">
          <div
            className="w-8 h-8 rounded-full flex items-center justify-center font-bold"
            style={{
              backgroundColor: dominantColor.lightHex,
              color: dominantColor.hex,
            }}
          >
            <Download size={16} />
          </div>
          <div>
            <h3 className={`text-sm sm:text-base font-bold text-neutral-900 ${fontClass}`}>
              Export Presentation Deck to PDF
            </h3>
            <p className="text-xs text-neutral-500">
              High-resolution vector print formatting configured for 16:9 landscape export.
            </p>
          </div>
        </div>

        <button
          onClick={onClose}
          className="p-1.5 text-neutral-400 hover:text-neutral-700 rounded-full hover:bg-neutral-100 transition-colors cursor-pointer"
        >
          <X size={20} />
          <span className="sr-only">Close</span>
        </button>
      </div>

      {/* Modal Body & Settings */}
      <div className="w-full max-w-4xl bg-neutral-50 px-6 py-6 border-x border-neutral-200 max-h-[70vh] overflow-y-auto space-y-5">
        <div className="bg-white p-4 rounded-lg border border-neutral-200 space-y-3">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-neutral-800">
            <CheckCircle2 size={15} style={{ color: dominantColor.hex }} />
            <span>Consulting Grade Print Specifications:</span>
          </div>
          <ul className="text-xs text-neutral-600 space-y-1.5 ml-6 list-disc">
            <li><strong>Aspect Ratio:</strong> Widescreen 16:9 landscape standard.</li>
            <li><strong>Page Breaks:</strong> Automated per-slide page split with zero layout clipping.</li>
            <li><strong>Vector Preservation:</strong> High-resolution scalable SVG charts and crisp typography render without pixelation.</li>
            <li><strong>Navigation Elements:</strong> UI buttons and slide controls are automatically hidden via <code className="text-neutral-700 bg-neutral-100 px-1 py-0.5 rounded">.no-print</code> rules.</li>
          </ul>
        </div>

        {/* Thumbnail Preview strip */}
        <div>
          <div className="text-xs font-bold text-neutral-700 mb-2">
            Deck Slides ({TOTAL_SLIDES} Pages Queued):
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {SLIDES_REGISTRY.map((s, idx) => (
              <div
                key={s.id}
                className="p-3 bg-white rounded border border-neutral-200 text-left space-y-1 shadow-xs"
              >
                <div className="flex items-center justify-between text-[10px] font-mono text-neutral-400">
                  <span>PAGE {idx + 1}</span>
                  <span className="font-semibold" style={{ color: dominantColor.hex }}>16:9</span>
                </div>
                <div className="text-[11px] font-bold text-neutral-900 line-clamp-1">
                  {s.metadata.kicker}
                </div>
                <div className="text-[10px] text-neutral-500 line-clamp-1 italic">
                  {s.metadata.actionTitle}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal Footer */}
      <div className="w-full max-w-4xl bg-white rounded-b-xl border-t border-neutral-200 px-6 py-4 flex items-center justify-between shadow-2xl">
        <div className="text-xs text-neutral-500">
          Tip: In the print dialog, select destination <strong className="text-neutral-800">"Save as PDF"</strong>.
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100 rounded-md transition-colors cursor-pointer"
          >
            Cancel
          </button>
          <button
            id="btn-confirm-print"
            onClick={() => {
              onClose();
              setTimeout(() => {
                onTriggerBrowserPrint();
              }, 100);
            }}
            className="flex items-center gap-2 px-5 py-2 text-xs font-bold text-white rounded-md transition-all shadow-sm cursor-pointer hover:brightness-110 active:brightness-95"
            style={{ backgroundColor: dominantColor.hex }}
          >
            <Printer size={15} />
            <span>Open PDF Print Dialog</span>
          </button>
        </div>
      </div>
    </div>
  );
};

