import React, { useState } from 'react';
import { Maximize2, Download, FileText, ChevronLeft, ChevronRight } from 'lucide-react';
import { ArchiveDocument } from '../data/archiveDocuments';
import { useLanguage } from '../context/LanguageContext';

interface ArchiveDocumentRowProps {
  document: ArchiveDocument;
  figureNumber: number;
  reversed?: boolean;
  onOpenViewer: (doc: ArchiveDocument, pageIndex: number) => void;
}

export const ArchiveDocumentRow: React.FC<ArchiveDocumentRowProps> = ({
  document: doc,
  figureNumber,
  reversed = false,
  onOpenViewer,
}) => {
  const { isBengali } = useLanguage();
  const [activePage, setActivePage] = useState(0);
  const [imageFailed, setImageFailed] = useState(false);

  const page = doc.pages[activePage] || doc.pages[0];
  const hasMultiplePages = doc.pages.length > 1;

  const formattedFigure = String(figureNumber).padStart(2, '0');

  return (
    <article
      id={doc.id}
      className="scroll-mt-36 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start py-10 sm:py-12 border-t border-slate-200 first:border-t-0 first:pt-4"
    >
      {/* Document Preview Column — stacked on top on mobile, alternates left/right on desktop */}
      <div
        className={`lg:col-span-6 ${
          reversed ? 'lg:order-2' : 'lg:order-1'
        }`}
      >
        <div className="bg-white border border-slate-200 rounded-2xl p-3 sm:p-4 shadow-sm">
          {/* Archival Presentation Mat */}
          <button
            type="button"
            onClick={() => onOpenViewer(doc, activePage)}
            className="group relative w-full block rounded-xl bg-slate-100 border border-slate-200 overflow-hidden text-left focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-900 cursor-pointer"
            aria-label={
              isBengali
                ? `${doc.bengaliTitle} — পূর্ণ আকারে দেখুন`
                : `View full document: ${doc.title}`
            }
          >
            <div className="w-full min-h-[300px] sm:min-h-[380px] max-h-[500px] flex items-center justify-center p-2.5 sm:p-4">
              {!imageFailed ? (
                <img
                  src={page.src}
                  alt={isBengali ? page.bengaliAlt : page.alt}
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  onError={() => setImageFailed(true)}
                  className={`max-h-[460px] w-auto max-w-full object-contain transition-transform duration-200 ease-out group-hover:scale-[1.015] ${
                    doc.isPhotograph
                      ? 'rounded shadow-sm'
                      : 'shadow-[0_1px_8px_rgba(15,23,42,0.12)] bg-white'
                  }`}
                />
              ) : (
                <div className="w-full py-16 px-6 flex flex-col items-center justify-center text-center gap-3 text-slate-500">
                  <FileText className="w-10 h-10 text-blue-900" />
                  <p className="font-serif-heading text-sm font-semibold text-blue-950">
                    {isBengali ? doc.bengaliTitle : doc.title}
                  </p>
                  <p className="text-xs">
                    {isBengali ? 'মূল নথি দেখতে ক্লিক করুন' : 'Select to open full document viewer'}
                  </p>
                </div>
              )}
            </div>

            {/* Subtle inspect bar */}
            <div className="flex items-center justify-between px-3.5 py-2.5 border-t border-slate-200 bg-white/95 text-xs text-slate-600">
              <span className="font-serif-heading italic text-slate-500 truncate pr-3">
                {isBengali
                  ? `চিত্র ${formattedFigure} · ${page.bengaliPageLabel}`
                  : `Fig. ${formattedFigure} · ${page.pageLabel}`}
              </span>
              <span className="inline-flex items-center gap-1.5 font-semibold text-blue-900 group-hover:text-orange-600 transition-colors whitespace-nowrap shrink-0">
                <Maximize2 className="w-3.5 h-3.5" aria-hidden="true" />
                <span>{isBengali ? 'বড় করে দেখুন' : 'Inspect'}</span>
              </span>
            </div>
          </button>

          {/* Inline Multi-Page Switcher */}
          {hasMultiplePages && (
            <div className="mt-3 pt-3 border-t border-slate-100 flex flex-wrap items-center justify-between gap-2">
              <div className="flex items-center gap-1 flex-wrap" role="tablist" aria-label={isBengali ? 'পৃষ্ঠা নির্বাচন' : 'Document pages'}>
                {doc.pages.map((p, idx) => {
                  const isCurrent = idx === activePage;
                  return (
                    <button
                      key={p.src}
                      type="button"
                      role="tab"
                      aria-selected={isCurrent}
                      onClick={() => {
                        setActivePage(idx);
                        setImageFailed(false);
                      }}
                      className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors whitespace-nowrap cursor-pointer ${
                        isCurrent
                          ? 'bg-blue-950 text-white'
                          : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                      }`}
                    >
                      {isBengali ? `পৃষ্ঠা ${idx + 1}` : `Page ${idx + 1}`}
                    </button>
                  );
                })}
              </div>

              <div className="inline-flex items-center gap-1">
                <button
                  type="button"
                  onClick={() => {
                    setActivePage((prev) => (prev - 1 + doc.pages.length) % doc.pages.length);
                    setImageFailed(false);
                  }}
                  aria-label={isBengali ? 'পূর্ববর্তী পৃষ্ঠা' : 'Previous page'}
                  className="inline-flex items-center justify-center w-8 h-8 rounded-lg border border-slate-200 text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setActivePage((prev) => (prev + 1) % doc.pages.length);
                    setImageFailed(false);
                  }}
                  aria-label={isBengali ? 'পরবর্তী পৃষ্ঠা' : 'Next page'}
                  className="inline-flex items-center justify-center w-8 h-8 rounded-lg border border-slate-200 text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Explanatory & Accession Metadata Column */}
      <div
        className={`lg:col-span-6 space-y-5 ${
          reversed ? 'lg:order-1 lg:pr-4' : 'lg:order-2 lg:pl-4'
        }`}
      >
        {/* Clean Unboxed Metadata Line */}
        <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs font-semibold text-orange-600">
          <span>{isBengali ? doc.bengaliCategory : doc.category}</span>
          <span className="text-slate-300" aria-hidden="true">·</span>
          <span className="text-slate-500 font-medium tabular-nums">
            {isBengali ? doc.bengaliDate : doc.date}
          </span>
          {hasMultiplePages && (
            <>
              <span className="text-slate-300" aria-hidden="true">·</span>
              <span className="text-slate-500 font-medium tabular-nums">
                {isBengali ? `${doc.pages.length} পৃষ্ঠা` : `${doc.pages.length} Pages`}
              </span>
            </>
          )}
        </div>

        {/* Document Heading */}
        <h3 className="font-serif-heading text-2xl sm:text-[26px] font-bold text-blue-950 leading-snug text-balance">
          {isBengali ? doc.bengaliTitle : doc.title}
        </h3>

        {/* Written Explanation */}
        <p className="text-[15px] sm:text-base text-slate-700 leading-[1.78] max-w-prose">
          {isBengali ? doc.bengaliDescription : doc.description}
        </p>

        {/* Accession Metadata Definition List */}
        <dl className="divide-y divide-slate-200 border-y border-slate-200 text-sm">
          <div className="py-2.5 grid grid-cols-1 sm:grid-cols-12 gap-1 sm:gap-4">
            <dt className="sm:col-span-4 text-xs font-semibold text-slate-500">
              {isBengali ? 'তারিখ' : 'Date'}
            </dt>
            <dd className="sm:col-span-8 text-slate-800 tabular-nums">
              {isBengali ? doc.bengaliDate : doc.date}
            </dd>
          </div>
          <div className="py-2.5 grid grid-cols-1 sm:grid-cols-12 gap-1 sm:gap-4">
            <dt className="sm:col-span-4 text-xs font-semibold text-slate-500">
              {isBengali ? 'প্রদানকারী / উৎস' : 'Issuing Authority / Source'}
            </dt>
            <dd className="sm:col-span-8 text-slate-800">
              {isBengali ? doc.bengaliIssuingAuthority : doc.issuingAuthority}
            </dd>
          </div>
          {doc.referenceNumber && (
            <div className="py-2.5 grid grid-cols-1 sm:grid-cols-12 gap-1 sm:gap-4">
              <dt className="sm:col-span-4 text-xs font-semibold text-slate-500">
                {isBengali ? 'সূত্র / নিবন্ধন নম্বর' : 'Reference / File No.'}
              </dt>
              <dd className="sm:col-span-8 text-slate-800 tabular-nums">
                {isBengali ? doc.bengaliReferenceNumber || doc.referenceNumber : doc.referenceNumber}
              </dd>
            </div>
          )}
        </dl>

        {/* Context / Editorial Distinction Note */}
        {doc.contextNote && (
          <div className="rounded-xl border border-blue-200/80 bg-blue-50/50 px-4 py-3 text-xs sm:text-[13px] text-slate-700 leading-relaxed">
            {isBengali ? doc.bengaliContextNote || doc.contextNote : doc.contextNote}
          </div>
        )}

        {/* Interactive Actions */}
        <div className="flex flex-wrap items-center gap-3 pt-1">
          <button
            type="button"
            onClick={() => onOpenViewer(doc, activePage)}
            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 min-h-[44px] rounded-lg bg-blue-950 text-white hover:bg-blue-900 text-sm font-medium transition-colors whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-900"
          >
            <Maximize2 className="w-4 h-4 shrink-0" aria-hidden="true" />
            <span>{isBengali ? 'সম্পূর্ণ নথি দেখুন' : 'View Full Document'}</span>
          </button>

          <a
            href={page.src}
            download={page.downloadName}
            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 min-h-[44px] rounded-lg border border-slate-300 bg-white text-blue-950 hover:border-orange-500 hover:text-orange-600 text-sm font-medium transition-colors whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-900"
          >
            <Download className="w-4 h-4 shrink-0" aria-hidden="true" />
            <span>
              {hasMultiplePages
                ? isBengali
                  ? `পৃষ্ঠা ${activePage + 1} ডাউনলোড`
                  : `Download Page ${activePage + 1}`
                : isBengali
                ? 'মূল কপি ডাউনলোড'
                : 'Download Original'}
            </span>
          </a>
        </div>
      </div>
    </article>
  );
};
