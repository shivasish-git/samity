import React, { useEffect, useState } from 'react';
import {
  X,
  ZoomIn,
  ZoomOut,
  RotateCcw,
  RotateCw,
  ChevronLeft,
  ChevronRight,
  Download,
} from 'lucide-react';
import { ArchiveDocument } from '../data/archiveDocuments';
import { useLanguage } from '../context/LanguageContext';

interface DocumentLightboxProps {
  document: ArchiveDocument | null;
  initialPageIndex?: number;
  onClose: () => void;
}

const MIN_ZOOM = 1;
const MAX_ZOOM = 3;
const ZOOM_STEP = 0.25;

export const DocumentLightbox: React.FC<DocumentLightboxProps> = ({
  document: doc,
  initialPageIndex = 0,
  onClose,
}) => {
  const { isBengali } = useLanguage();
  const [pageIndex, setPageIndex] = useState(initialPageIndex);
  const [zoom, setZoom] = useState(1);
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    setPageIndex(initialPageIndex);
    setZoom(1);
    setRotation(0);
  }, [doc, initialPageIndex]);

  // Lock body scroll and bind keyboard shortcuts while open
  useEffect(() => {
    if (!doc) return;
    const prevOverflow = window.document.body.style.overflow;
    window.document.body.style.overflow = 'hidden';

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowRight' && doc.pages.length > 1) {
        setPageIndex((prev) => (prev + 1) % doc.pages.length);
        setZoom(1);
        setRotation(0);
      } else if (e.key === 'ArrowLeft' && doc.pages.length > 1) {
        setPageIndex((prev) => (prev - 1 + doc.pages.length) % doc.pages.length);
        setZoom(1);
        setRotation(0);
      } else if (e.key === '+' || e.key === '=') {
        setZoom((z) => Math.min(MAX_ZOOM, +(z + ZOOM_STEP).toFixed(2)));
      } else if (e.key === '-') {
        setZoom((z) => Math.max(MIN_ZOOM, +(z - ZOOM_STEP).toFixed(2)));
      } else if (e.key === '0') {
        setZoom(1);
        setRotation(0);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.document.body.style.overflow = prevOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [doc, onClose]);

  if (!doc) return null;

  const currentPage = doc.pages[pageIndex] || doc.pages[0];
  const hasMultiplePages = doc.pages.length > 1;

  const zoomIn = () => setZoom((z) => Math.min(MAX_ZOOM, +(z + ZOOM_STEP).toFixed(2)));
  const zoomOut = () => setZoom((z) => Math.max(MIN_ZOOM, +(z - ZOOM_STEP).toFixed(2)));
  const resetView = () => {
    setZoom(1);
    setRotation(0);
  };
  const rotateClockwise = () => setRotation((r) => (r + 90) % 360);

  const goPrevPage = () => {
    setPageIndex((prev) => (prev - 1 + doc.pages.length) % doc.pages.length);
    setZoom(1);
    setRotation(0);
  };

  const goNextPage = () => {
    setPageIndex((prev) => (prev + 1) % doc.pages.length);
    setZoom(1);
    setRotation(0);
  };

  return (
    <div
      className="fixed inset-0 z-[70] flex flex-col bg-slate-950/95 backdrop-blur-sm text-white"
      role="dialog"
      aria-modal="true"
      aria-label={isBengali ? doc.bengaliTitle : doc.title}
    >
      {/* Top Toolbar */}
      <div className="shrink-0 border-b border-blue-900/60 bg-blue-950/95 px-4 sm:px-6 py-3">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
          {/* Title & Metadata */}
          <div className="min-w-0 flex-1 pr-2">
            <h2 className="font-serif-heading text-sm sm:text-base font-semibold text-white truncate">
              {isBengali ? doc.bengaliTitle : doc.title}
            </h2>
            <p className="text-xs text-blue-200 flex flex-wrap items-center gap-x-2 gap-y-0.5 mt-0.5">
              <span className="tabular-nums">{isBengali ? doc.bengaliDate : doc.date}</span>
              {hasMultiplePages && (
                <>
                  <span aria-hidden="true">·</span>
                  <span className="text-orange-300 font-medium tabular-nums">
                    {isBengali
                      ? `পৃষ্ঠা ${pageIndex + 1} / ${doc.pages.length}`
                      : `Page ${pageIndex + 1} of ${doc.pages.length}`}
                  </span>
                </>
              )}
              {doc.referenceNumber && (
                <>
                  <span className="hidden md:inline" aria-hidden="true">·</span>
                  <span className="hidden md:inline truncate max-w-md">
                    {isBengali ? doc.bengaliReferenceNumber || doc.referenceNumber : doc.referenceNumber}
                  </span>
                </>
              )}
            </p>
          </div>

          {/* Controls */}
          <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
            <div className="inline-flex items-center rounded-lg border border-white/15 bg-white/5 p-0.5">
              <button
                type="button"
                onClick={zoomOut}
                disabled={zoom <= MIN_ZOOM}
                title={isBengali ? 'ছোট করুন' : 'Zoom out'}
                aria-label={isBengali ? 'ছোট করুন' : 'Zoom out'}
                className="inline-flex items-center justify-center w-9 h-9 rounded-md text-white hover:bg-white/10 disabled:opacity-35 disabled:cursor-not-allowed transition-colors cursor-pointer"
              >
                <ZoomOut className="w-4 h-4" />
              </button>
              <span className="px-2 text-xs font-medium tabular-nums text-blue-100 min-w-[48px] text-center select-none">
                {Math.round(zoom * 100)}%
              </span>
              <button
                type="button"
                onClick={zoomIn}
                disabled={zoom >= MAX_ZOOM}
                title={isBengali ? 'বড় করুন' : 'Zoom in'}
                aria-label={isBengali ? 'বড় করুন' : 'Zoom in'}
                className="inline-flex items-center justify-center w-9 h-9 rounded-md text-white hover:bg-white/10 disabled:opacity-35 disabled:cursor-not-allowed transition-colors cursor-pointer"
              >
                <ZoomIn className="w-4 h-4" />
              </button>
            </div>

            <button
              type="button"
              onClick={rotateClockwise}
              title={isBengali ? 'ঘোরান' : 'Rotate 90°'}
              aria-label={isBengali ? 'ঘোরান' : 'Rotate 90 degrees'}
              className="hidden sm:inline-flex items-center justify-center w-10 h-10 rounded-lg border border-white/15 bg-white/5 text-white hover:bg-white/10 transition-colors cursor-pointer"
            >
              <RotateCw className="w-4 h-4" />
            </button>

            {(zoom !== 1 || rotation !== 0) && (
              <button
                type="button"
                onClick={resetView}
                title={isBengali ? 'রিসেট' : 'Reset view'}
                aria-label={isBengali ? 'রিসেট' : 'Reset zoom and rotation'}
                className="inline-flex items-center justify-center w-10 h-10 rounded-lg border border-white/15 bg-white/5 text-white hover:bg-white/10 transition-colors cursor-pointer"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
            )}

            <a
              href={currentPage.src}
              download={currentPage.downloadName}
              className="inline-flex items-center gap-1.5 px-3 sm:px-4 h-10 rounded-lg bg-orange-500 text-white hover:bg-orange-600 text-xs font-semibold transition-colors whitespace-nowrap shrink-0"
            >
              <Download className="w-4 h-4 shrink-0" />
              <span className="hidden sm:inline">
                {isBengali ? 'মূল কপি ডাউনলোড' : 'Download Original'}
              </span>
            </a>

            <button
              type="button"
              onClick={onClose}
              aria-label={isBengali ? 'বন্ধ করুন' : 'Close viewer'}
              className="inline-flex items-center justify-center w-10 h-10 rounded-lg border border-white/20 bg-white/10 text-white hover:bg-white/20 transition-colors cursor-pointer shrink-0"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Main Scrollable / Zoomable Canvas */}
      <div
        className="relative flex-1 overflow-auto flex items-center justify-center p-4 sm:p-8"
        onClick={(e) => {
          if (e.target === e.currentTarget) onClose();
        }}
      >
        {hasMultiplePages && (
          <>
            <button
              type="button"
              onClick={goPrevPage}
              aria-label={isBengali ? 'পূর্ববর্তী পৃষ্ঠা' : 'Previous page'}
              className="fixed left-3 sm:left-6 top-1/2 -translate-y-1/2 z-10 inline-flex items-center justify-center w-11 h-11 rounded-full bg-blue-950/90 border border-orange-400/60 text-white hover:bg-blue-900 shadow-lg transition-colors cursor-pointer"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={goNextPage}
              aria-label={isBengali ? 'পরবর্তী পৃষ্ঠা' : 'Next page'}
              className="fixed right-3 sm:right-6 top-1/2 -translate-y-1/2 z-10 inline-flex items-center justify-center w-11 h-11 rounded-full bg-blue-950/90 border border-orange-400/60 text-white hover:bg-blue-900 shadow-lg transition-colors cursor-pointer"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </>
        )}

        <div
          className="transition-transform duration-200 ease-out origin-center max-w-full"
          style={{
            transform: `scale(${zoom}) rotate(${rotation}deg)`,
          }}
        >
          <img
            src={currentPage.src}
            alt={isBengali ? currentPage.bengaliAlt : currentPage.alt}
            referrerPolicy="no-referrer"
            className="max-h-[76vh] max-w-[92vw] w-auto h-auto object-contain rounded shadow-2xl bg-white select-none"
          />
        </div>
      </div>

      {/* Bottom Caption & Multi-page Strip */}
      <div className="shrink-0 border-t border-blue-900/60 bg-blue-950/95 px-4 sm:px-6 py-3">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <p className="text-xs text-blue-100 leading-relaxed max-w-3xl">
            <span className="font-semibold text-orange-300">
              {isBengali ? currentPage.bengaliPageLabel : currentPage.pageLabel}
            </span>
            <span className="mx-2 text-white/30" aria-hidden="true">·</span>
            <span>{isBengali ? doc.bengaliIssuingAuthority : doc.issuingAuthority}</span>
          </p>

          {hasMultiplePages && (
            <div className="flex items-center gap-1.5 overflow-x-auto pb-0.5 shrink-0">
              {doc.pages.map((p, idx) => {
                const active = idx === pageIndex;
                return (
                  <button
                    key={p.src}
                    type="button"
                    onClick={() => {
                      setPageIndex(idx);
                      setZoom(1);
                      setRotation(0);
                    }}
                    className={`px-3 py-1.5 rounded-md text-xs font-medium whitespace-nowrap transition-colors cursor-pointer ${
                      active
                        ? 'bg-orange-500 text-white font-semibold'
                        : 'bg-white/10 text-blue-100 hover:bg-white/20'
                    }`}
                  >
                    {isBengali ? `পৃষ্ঠা ${idx + 1}` : `Page ${idx + 1}`}
                  </button>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
