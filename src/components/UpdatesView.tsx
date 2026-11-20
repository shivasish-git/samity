import React, { useEffect, useMemo, useState } from 'react';
import { ArrowDown, ArrowUpRight, Maximize2, BookOpen } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { PageId } from '../types';
import {
  ARCHIVE_CHAPTER_INDEX,
  ARCHIVE_DOCUMENTS,
  ARCHIVE_NAV_ITEMS,
  ARCHIVE_TIMELINE,
  APPRECIATION_CROSS_LINKS,
  ArchiveDocument,
} from '../data/archiveDocuments';
import { ArchiveDocumentRow } from './ArchiveDocumentRow';
import { DocumentLightbox } from './DocumentLightbox';

interface UpdatesViewProps {
  onNavigate: (page: PageId) => void;
}

export const UpdatesView: React.FC<UpdatesViewProps> = ({ onNavigate }) => {
  const { isBengali } = useLanguage();
  const [activeSection, setActiveSection] = useState<string>('archive-overview');
  const [readingProgress, setReadingProgress] = useState<number>(0);
  const [viewerState, setViewerState] = useState<{
    doc: ArchiveDocument | null;
    pageIndex: number;
  }>({ doc: null, pageIndex: 0 });

  const docsBySection = useMemo(() => {
    return {
      registration: ARCHIVE_DOCUMENTS.filter((d) => d.sectionId === 'section-registration'),
      legal: ARCHIVE_DOCUMENTS.filter((d) => d.sectionId === 'section-legal'),
      correspondence: ARCHIVE_DOCUMENTS.filter((d) => d.sectionId === 'section-correspondence'),
      newspapers: ARCHIVE_DOCUMENTS.filter((d) => d.sectionId === 'section-newspapers'),
      welfare: ARCHIVE_DOCUMENTS.filter((d) => d.sectionId === 'section-welfare'),
    };
  }, []);

  const docById = useMemo(() => {
    const map: Record<string, ArchiveDocument> = {};
    for (const d of ARCHIVE_DOCUMENTS) {
      map[d.id] = d;
    }
    return map;
  }, []);

  // Scroll-spy for sticky section nav and subtle reading progress bar
  useEffect(() => {
    const sectionIds = ARCHIVE_NAV_ITEMS.map((item) => item.id);

    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const pct = docHeight > 0 ? Math.min(100, Math.max(0, (scrollTop / docHeight) * 100)) : 0;
      setReadingProgress(pct);

      const offset = 180;
      let current = sectionIds[0];
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= offset) {
            current = id;
          }
        }
      }
      setActiveSection(current);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToElement = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const openViewer = (doc: ArchiveDocument, pageIndex = 0) => {
    setViewerState({ doc, pageIndex });
  };

  const closeViewer = () => {
    setViewerState({ doc: null, pageIndex: 0 });
  };

  const registrationStart = 1;
  const legalStart = registrationStart + docsBySection.registration.length;
  const correspondenceStart = legalStart + docsBySection.legal.length;
  const newspapersStart = correspondenceStart + docsBySection.correspondence.length;
  const welfareStart = newspapersStart + docsBySection.newspapers.length;

  return (
    <div className="bg-slate-50 text-slate-900">
      {/* =====================================================================
          SECTION 1: HERO BAND (MATCHES SITE BLUE, WHITE & SAFFRON PALETTE)
         ===================================================================== */}
      <section className="relative bg-gradient-to-r from-blue-900 via-blue-950 to-blue-900 text-white border-b-4 border-orange-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-12 sm:pt-16 sm:pb-14">
          <div className="max-w-3xl space-y-5">
            {/* Clean unboxed institutional kicker */}
            <p className="text-xs sm:text-[13px] font-semibold tracking-wide text-orange-300 flex flex-wrap items-center gap-x-2 gap-y-1">
              <span>{isBengali ? 'বঙ্গীয় সাহা সমিতি' : 'Bangiya Saha Samity'}</span>
              <span className="text-orange-400/60" aria-hidden="true">·</span>
              <span>{isBengali ? 'ইতিহাস' : 'Our History'}</span>
              <span className="text-orange-400/60" aria-hidden="true">·</span>
              <span>{isBengali ? 'প্রামাণ্য নথি' : 'Documents'}</span>
              <span className="text-orange-400/60" aria-hidden="true">·</span>
              <span>{isBengali ? 'সমাজ' : 'Community'}</span>
              <span className="text-orange-400/60" aria-hidden="true">·</span>
              <span>{isBengali ? 'সামাজিক অবদান' : 'Social Contributions'}</span>
            </p>

            <h1 className="font-serif-heading text-3xl sm:text-5xl font-bold text-white leading-[1.15] tracking-tight text-balance">
              {isBengali
                ? 'সমাজ, আত্মপরিচয় ও সেবার এক ঐতিহাসিক উত্তরাধিকার'
                : 'A Legacy of Community, Identity & Social Service'}
            </h1>

            <p className="text-base sm:text-lg text-blue-100 leading-relaxed max-w-2xl">
              {isBengali
                ? 'মূল নিবন্ধন শংসাপত্র, সরকারি নথি, সামাজিক আবেদন, সংবাদপত্র সংরক্ষণাগার এবং সমাজকল্যাণমূলক উদ্যোগের মাধ্যমে বঙ্গীয় সাহা সমিতির ঐতিহাসিক যাত্রাপথ অন্বেষণ করুন।'
                : 'Explore the historical journey of Bangiya Saha Samity through original registration records, government documents, community representations, newspaper archives and social welfare initiatives.'}
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                type="button"
                onClick={() => scrollToElement('section-registration')}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 min-h-[44px] rounded-lg bg-orange-500 text-white hover:bg-orange-600 text-sm font-semibold transition-colors whitespace-nowrap shrink-0 cursor-pointer shadow-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-300"
              >
                <span>{isBengali ? 'নথিপত্র অন্বেষণ করুন' : 'Explore Our Documents'}</span>
                <ArrowDown className="w-4 h-4 shrink-0" aria-hidden="true" />
              </button>

              <button
                type="button"
                onClick={() => scrollToElement('archive-overview')}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 min-h-[44px] rounded-lg border border-blue-200/35 text-white hover:bg-white/10 text-sm font-medium transition-colors whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-300"
              >
                <BookOpen className="w-4 h-4 shrink-0" aria-hidden="true" />
                <span>{isBengali ? 'আমাদের ইতিহাস জানুন' : 'Discover Our History'}</span>
              </button>
            </div>
          </div>

          {/* 6-Chapter Institutional Directory Strip */}
          <div className="mt-12 pt-8 border-t border-white/15 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-4">
            {ARCHIVE_CHAPTER_INDEX.map((chapter) => (
              <button
                key={chapter.id}
                type="button"
                onClick={() => scrollToElement(chapter.id)}
                className="group flex items-baseline gap-3 text-left py-1.5 border-b border-white/10 hover:border-orange-400/80 transition-colors cursor-pointer"
              >
                <span className="font-serif-heading text-sm font-bold text-orange-400 tabular-nums shrink-0">
                  {chapter.number}
                </span>
                <span className="text-sm text-blue-100 group-hover:text-white transition-colors truncate">
                  {isBengali ? chapter.bengaliTitle : chapter.title}
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================================
          STICKY ARCHIVE SECTION NAVIGATION
         ===================================================================== */}
      <nav
        aria-label={isBengali ? 'সংরক্ষণাগার সূচিপত্র' : 'Document archive sections'}
        className="sticky top-[68px] sm:top-[76px] z-30 bg-white/95 backdrop-blur-md border-b border-slate-200"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-1 sm:gap-2 overflow-x-auto py-2.5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {ARCHIVE_NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => scrollToElement(item.id)}
                  className={`px-3 py-1.5 rounded-lg text-xs sm:text-[13px] font-medium whitespace-nowrap shrink-0 transition-colors cursor-pointer ${
                    isActive
                      ? 'bg-blue-950 text-white shadow-xs'
                      : 'text-slate-600 hover:text-blue-950 hover:bg-slate-100'
                  }`}
                >
                  <span className="hidden md:inline">
                    {isBengali ? item.bengaliLabel : item.label}
                  </span>
                  <span className="md:hidden">
                    {isBengali ? item.bengaliShortLabel : item.shortLabel}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
        {/* Thin reading progress bar in brand saffron */}
        <div className="h-[2px] w-full bg-slate-200" aria-hidden="true">
          <div
            className="h-full bg-orange-500 transition-[width] duration-150 ease-out"
            style={{ width: `${readingProgress}%` }}
          />
        </div>
      </nav>

      {/* =====================================================================
          SECTION 2: INTRODUCTION & CHRONOLOGICAL TIMELINE (1936–2026)
         ===================================================================== */}
      <section
        id="archive-overview"
        className="scroll-mt-36 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          <div className="lg:col-span-5 space-y-2.5">
            <p className="text-xs font-bold tracking-wider text-orange-600">
              {isBengali ? 'ডিজিটাল নথি সংরক্ষণাগার · ১৯৩৬–২০২৬' : 'Digital Documentary Archive · 1936–2026'}
            </p>
            <h2 className="font-serif-heading text-3xl sm:text-4xl font-bold text-blue-950 leading-tight text-balance">
              {isBengali
                ? '১৯৩৬ সাল থেকে আমাদের ঐতিহ্য সংরক্ষণ'
                : 'Preserving Our Heritage Since 1936'}
            </h2>
          </div>

          <div className="lg:col-span-7 space-y-4 text-[15px] sm:text-base text-slate-700 leading-[1.8] max-w-prose">
            <p className="first-letter:font-serif-heading first-letter:text-5xl first-letter:font-bold first-letter:text-blue-950 first-letter:float-left first-letter:mr-3 first-letter:leading-[0.9] first-letter:mt-1">
              {isBengali
                ? 'বঙ্গীয় সাহা সমিতির ১৯৩৬ সাল থেকে নথিভুক্ত প্রাতিষ্ঠানিক ইতিহাস রয়েছে। দীর্ঘ কয়েক দশক ধরে সমিতি ঐতিহাসিক নিবন্ধন দলিল, সরকারি চিঠিপত্র, সামাজিক আবেদন এবং সমাজকল্যাণমূলক কর্মকাণ্ডের প্রামাণ্য নথি সযত্নে সংরক্ষণ করে এসেছে।'
                : 'Bangiya Saha Samity has a documented institutional history dating back to 1936. Over the years, the organisation has maintained historical records, government correspondence, community-related representations and documentation of social welfare activities.'}
            </p>
            <p>
              {isBengali
                ? 'সদস্য, গবেষক, দর্শনার্থী এবং বৃহত্তর জনসাধারণের কাছে এই গুরুত্বপূর্ণ মূল নথিগুলি সহজলভ্য ও পাঠযোগ্য করে তোলার উদ্দেশ্যে এই ডিজিটাল সংরক্ষণাগারটি তৈরি করা হয়েছে।'
                : 'This digital archive has been created to preserve these important records and make them accessible to members, researchers, visitors and the wider public.'}
            </p>
          </div>
        </div>

        {/* Chronological Timeline (1936–2026) */}
        <div className="mt-12 pt-10 border-t border-slate-200">
          <div className="flex flex-wrap items-baseline justify-between gap-2 mb-6">
            <h3 className="font-serif-heading text-lg sm:text-xl font-bold text-blue-950">
              {isBengali ? 'নথিভুক্ত কালানুক্রমিক ইতিহাস (১৯৩৬–২০২৬)' : 'Chronological Record Timeline (1936–2026)'}
            </h3>
            <p className="text-xs text-slate-500">
              {isBengali
                ? 'যেকোনো বর্ষে ক্লিক করে সরাসরি সংশ্লিষ্ট নথিতে যান'
                : 'Select any milestone to jump directly to its original document'}
            </p>
          </div>

          <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 gap-3">
            {ARCHIVE_TIMELINE.map((milestone) => (
              <li key={milestone.year}>
                <button
                  type="button"
                  onClick={() => scrollToElement(milestone.targetDocId)}
                  className="group w-full h-full text-left bg-white border border-slate-200 hover:border-blue-900 rounded-xl p-4 transition-colors flex flex-col justify-between gap-2 cursor-pointer shadow-xs"
                >
                  <span className="font-serif-heading text-lg font-bold text-blue-900 group-hover:text-orange-600 transition-colors tabular-nums">
                    {isBengali ? milestone.bengaliYear : milestone.year}
                  </span>
                  <span className="text-xs text-slate-600 leading-snug">
                    {isBengali ? milestone.bengaliLabel : milestone.label}
                  </span>
                </button>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* =====================================================================
          SECTION 3 (CHAPTER 01): OUR FOUNDATION & REGISTRATION
         ===================================================================== */}
      <section
        id="section-registration"
        className="scroll-mt-36 border-t border-slate-200 bg-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20">
          <header className="max-w-3xl space-y-3 pb-8">
            <p className="text-xs font-bold text-orange-600 tabular-nums">
              {isBengali ? 'অধ্যায় ০১ · প্রাতিষ্ঠানিক ভিত্তি' : '01 · Institutional History'}
            </p>
            <h2 className="font-serif-heading text-3xl sm:text-4xl font-bold text-blue-950 text-balance">
              {isBengali
                ? 'আমাদের প্রতিষ্ঠা ও প্রাতিষ্ঠানিক নিবন্ধন নথি'
                : 'Our Foundation & Institutional Records'}
            </h2>
            <p className="text-[15px] sm:text-base text-slate-600 leading-[1.78]">
              {isBengali
                ? 'বঙ্গীয় সাহা সমিতির ১৯৩৬ সাল থেকে নথিভুক্ত প্রাতিষ্ঠানিক ইতিহাস রয়েছে। ১৮৬০ সালের সোসাইটি রেজিস্ট্রেশন আইনের অধীনে মূল নিবন্ধন, ১৯৬১ সালের পশ্চিমবঙ্গ সোসাইটি নিবন্ধন আইনের পরবর্তী নথি এবং আয়কর আইন ধারা ১২এ-এর ঐতিহাসিক শংসাপত্র সমিতির প্রাতিষ্ঠানিক ধারাবাহিকতার প্রামাণ্য দলিল।'
                : 'Bangiya Saha Samity has a documented institutional history dating back to 1936. Its original registration records under the Societies Registration Act, XXI of 1860, subsequent certification under the West Bengal Societies Registration Act, 1961, and historical Section 12A Income Tax record preserve key milestones of its organisational archive.'}
            </p>
          </header>

          <div>
            {docsBySection.registration.map((doc, idx) => (
              <ArchiveDocumentRow
                key={doc.id}
                document={doc}
                figureNumber={registrationStart + idx}
                reversed={idx % 2 === 1}
                onOpenViewer={openViewer}
              />
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================================
          SECTION 4 (CHAPTER 02): COMMUNITY IDENTITY & LEGAL RECORDS
         ===================================================================== */}
      <section
        id="section-legal"
        className="scroll-mt-36 border-t border-slate-200 bg-slate-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20">
          <header className="max-w-3xl space-y-4 pb-8">
            <p className="text-xs font-bold text-orange-600 tabular-nums">
              {isBengali ? 'অধ্যায় ০২ · গুরুত্বপূর্ণ প্রামাণ্য সংকলন' : '02 · Documentary & Legal Archive'}
            </p>
            <h2 className="font-serif-heading text-3xl sm:text-4xl font-bold text-blue-950 text-balance">
              {isBengali
                ? 'শুঁড়ি সমাজের পরিচিতি সংক্রান্ত ঐতিহাসিক নথিপত্র'
                : 'Historical Records Concerning Sunri Community Identity'}
            </h2>
            <p className="text-[15px] sm:text-base text-slate-600 leading-[1.78]">
              {isBengali
                ? 'পশ্চিমবঙ্গে শুঁড়ি সম্প্রদায়ের স্বীকৃতি ও শ্রেণিবিন্যাস সংক্রান্ত গুরুত্বপূর্ণ ঐতিহাসিক দলিল এই সংরক্ষণাগারে রয়েছে—যার মধ্যে ২৮ ফেব্রুয়ারি ১৯৮৩-এর পশ্চিমবঙ্গ সরকারের স্মারকপত্র নং ৪৯৮-টি.ডব্লিউ., ১২ ফেব্রুয়ারি ১৯৯৬-এর সি.সি. নং ১১৩/৯৬ মামলার আদেশ এবং "Sunri (excluding Saha)" ও "সাহা" পদবি ব্যবহার সংক্রান্ত বিষয়ে সরকারের নিকট সমিতির পেশ করা আবেদনপত্রসমূহ অন্তর্ভুক্ত।'
                : 'Bangiya Saha Samity’s archive contains key historical documents concerning the recognition and classification of the Sunri community in West Bengal—including Government of West Bengal Memorandum No. 498-T.W. (28 February 1983), the court order dated 12 February 1996 in C.C. No. 113/96, and subsequent representations submitted by the Samity concerning the wording "Sunri (excluding Saha)" and surname-related difficulties.'}
            </p>
            <div className="rounded-xl border border-blue-200 bg-blue-50/70 px-4 py-3.5 text-xs sm:text-sm text-slate-700 leading-relaxed">
              <strong className="font-semibold text-blue-950">
                {isBengali ? 'পাঠকদের জন্য ঐতিহাসিক দ্রষ্টব্য: ' : 'Archival Reading Note: '}
              </strong>
              {isBengali
                ? 'নিম্নলিখিত নথিগুলি কালানুক্রমিকভাবে সাজানো হয়েছে যাতে সরকারি স্মারকপত্র, আদালতের আদেশ এবং সমিতির নিজস্ব আবেদনগুলির মধ্যে স্পষ্ট পার্থক্য বোঝা যায়। সমিতির কোনো আবেদন নথিভুক্ত করার অর্থ এই নয় যে প্রস্তাবিত সংশোধনীটি সরকারিভাবে কার্যকর হয়েছে।'
                : 'The records below are arranged chronologically to distinguish official government memoranda and judicial orders from representations submitted by Bangiya Saha Samity. Presenting the Samity’s representations preserves historical context and does not imply that any requested statutory amendment was granted.'}
            </div>
          </header>

          <div>
            {docsBySection.legal.map((doc, idx) => (
              <ArchiveDocumentRow
                key={doc.id}
                document={doc}
                figureNumber={legalStart + idx}
                reversed={idx % 2 === 1}
                onOpenViewer={openViewer}
              />
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================================
          SECTION 5 (CHAPTER 03): GOVERNMENT CORRESPONDENCE & REPRESENTATIONS
         ===================================================================== */}
      <section
        id="section-correspondence"
        className="scroll-mt-36 border-t border-slate-200 bg-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20">
          <header className="max-w-3xl space-y-3 pb-8">
            <p className="text-xs font-bold text-orange-600 tabular-nums">
              {isBengali ? 'অধ্যায় ০৩ · সরকারি ও প্রাতিষ্ঠানিক যোগাযোগ' : '03 · Public Correspondence'}
            </p>
            <h2 className="font-serif-heading text-3xl sm:text-4xl font-bold text-blue-950 text-balance">
              {isBengali
                ? 'প্রাতিষ্ঠানিক সম্পৃক্ততা ও সরকারি চিঠিপত্র'
                : 'Institutional Engagement & Public Correspondence'}
            </h2>
            <p className="text-[15px] sm:text-base text-slate-600 leading-[1.78]">
              {isBengali
                ? 'দীর্ঘ প্রাতিষ্ঠানিক পথচলায় বঙ্গীয় সাহা সমিতি সরকারি দপ্তর, জনপ্রতিনিধি ও বিভিন্ন প্রতিষ্ঠানের সাথে নিরবচ্ছিন্ন যোগাযোগ রক্ষা করেছে। ড. বি. আর. আম্বেদকরের ১৩২তম জন্মজয়ন্তী উপলক্ষে ১৩ এপ্রিল ২০২৩ তারিখে পশ্চিমবঙ্গের রাজ্যপাল সচিবালয়ের পত্র থেকে শুরু করে ১৯৪০ ও ১৯৫০-এর দশকের ঐতিহাসিক নিমন্ত্রণপত্র ও অভিনন্দন পত্র এই অধ্যায়ে সংরক্ষিত রয়েছে।'
                : 'Throughout its institutional journey, Bangiya Saha Samity has maintained correspondence with government offices, public representatives, and civic institutions. Together, the April 2023 communication from the Governor’s Secretariat at Raj Bhavan alongside vintage mid-twentieth-century invitations and congratulatory addresses preserve a vital record of the Samity’s public life.'}
            </p>
          </header>

          <div>
            {docsBySection.correspondence.map((doc, idx) => (
              <ArchiveDocumentRow
                key={doc.id}
                document={doc}
                figureNumber={correspondenceStart + idx}
                reversed={idx % 2 === 1}
                onOpenViewer={openViewer}
              />
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================================
          SECTION 6 (CHAPTER 04): HISTORICAL NEWSPAPER ARCHIVES & PUBLICATIONS
         ===================================================================== */}
      <section
        id="section-newspapers"
        className="scroll-mt-36 border-t border-slate-200 bg-slate-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20">
          <header className="max-w-3xl space-y-3 pb-8">
            <p className="text-xs font-bold text-orange-600 tabular-nums">
              {isBengali ? 'অধ্যায় ০৪ · সংবাদপত্র ও ঐতিহাসিক প্রকাশনা' : '04 · Press & Reference Publications'}
            </p>
            <h2 className="font-serif-heading text-3xl sm:text-4xl font-bold text-blue-950 text-balance">
              {isBengali
                ? 'সংবাদপত্র সংরক্ষণাগার ও জনসমাজে অংশগ্রহণ'
                : 'Newspaper Archives & Public Engagement'}
            </h2>
            <p className="text-[15px] sm:text-base text-slate-600 leading-[1.78]">
              {isBengali
                ? 'এই সংবাদপত্র প্রতিবেদন ও ঐতিহাসিক প্রকাশনাগুলি বিভিন্ন সময়ে আলোচিত সামাজিক, সাংস্কৃতিক ও সম্প্রদায়-সংশ্লিষ্ট বিষয়গুলির সমকালীন বিবরণ সংরক্ষণ করে। প্রতিটি সংবাদ প্রতিবেদন তার মূল প্রকাশনা ও সাংবাদিকতার প্রেক্ষাপটেই এখানে উপস্থাপিত হয়েছে।'
                : 'These newspaper clippings and reference publications preserve contemporary reporting, public discussions, and historical remembrance associated with the Samity and wider community. Each media clipping is presented strictly within its original publication and reporting context.'}
            </p>
          </header>

          <div>
            {docsBySection.newspapers.map((doc, idx) => (
              <ArchiveDocumentRow
                key={doc.id}
                document={doc}
                figureNumber={newspapersStart + idx}
                reversed={idx % 2 === 1}
                onOpenViewer={openViewer}
              />
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================================
          SECTION 7 (CHAPTER 05): SOCIAL WELFARE & CHARITABLE CONTRIBUTIONS
         ===================================================================== */}
      <section
        id="section-welfare"
        className="scroll-mt-36 border-t border-slate-200 bg-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20">
          <header className="max-w-3xl space-y-3 pb-8">
            <p className="text-xs font-bold text-orange-600 tabular-nums">
              {isBengali ? 'অধ্যায় ০৫ · মানবিক ও সামাজিক অবদান' : '05 · Social Welfare & Humanitarian Outreach'}
            </p>
            <h2 className="font-serif-heading text-3xl sm:text-4xl font-bold text-blue-950 text-balance">
              {isBengali
                ? 'সমাজের গণ্ডি ছাড়িয়ে মানবিক সহায়তার বিস্তার'
                : 'Extending Support Beyond the Community'}
            </h2>
            <p className="text-[15px] sm:text-base text-slate-600 leading-[1.78]">
              {isBengali
                ? 'সমাজকল্যাণ ও মানবিক সহায়তা বঙ্গীয় সাহা সমিতির নথিভুক্ত কর্মকাণ্ডের এক গুরুত্বপূর্ণ দিক। বোধি পীঠ ও মঙ্গলম ফাউন্ডেশনের মতো সেবামূলক প্রতিষ্ঠানের কৃতজ্ঞতাপত্র, সরাসরি অনুদান হস্তান্তরের আলোকচিত্র এবং গ্রামীণ আশ্রমের সহায়তার আবেদনপত্র সমিতির মানবিক অংশগ্রহণের জীবন্ত প্রমাণ।'
                : 'Social welfare and humanitarian assistance form an important chapter of Bangiya Saha Samity’s archive. Institutional appreciation letters from Bodhi Peet and Mangalam Foundation, documentary handover photographs, and grassroots correspondence record the Samity’s support for vulnerable members of society.'}
            </p>
          </header>

          <div>
            {docsBySection.welfare.map((doc, idx) => (
              <ArchiveDocumentRow
                key={doc.id}
                document={doc}
                figureNumber={welfareStart + idx}
                reversed={idx % 2 === 1}
                onOpenViewer={openViewer}
              />
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================================
          SECTION 8 (CHAPTER 06): PUBLIC RECOGNITION & APPRECIATION
         ===================================================================== */}
      <section
        id="section-appreciation"
        className="scroll-mt-36 border-t border-slate-200 bg-slate-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mb-10">
            <div className="lg:col-span-5 space-y-2.5">
              <p className="text-xs font-bold text-orange-600 tabular-nums">
                {isBengali ? 'অধ্যায় ০৬ · স্বীকৃতি ও কৃতজ্ঞতা' : '06 · Acknowledgements & Recognition'}
              </p>
              <h2 className="font-serif-heading text-3xl sm:text-4xl font-bold text-blue-950 text-balance">
                {isBengali
                  ? 'আমাদের সামাজিক অবদানের স্বীকৃতি'
                  : 'Recognising Our Social Contributions'}
              </h2>
            </div>
            <p className="lg:col-span-7 text-[15px] sm:text-base text-slate-600 leading-[1.78] max-w-prose">
              {isBengali
                ? 'সমাজকল্যাণমূলক কর্মকাণ্ডে যুক্ত বিভিন্ন প্রতিষ্ঠান থেকে প্রাপ্ত প্রশংসাপত্র ও ঐতিহাসিক জনস্বীকৃতিগুলি এখানে একত্রে সংকলিত হয়েছে। প্রতিটি নথি পূর্ববর্তী অধ্যায়গুলির মূল প্রামাণ্য নথির সাথে সরাসরি সংযুক্ত।'
                : 'The Samity’s archive preserves appreciation letters and institutional acknowledgements received from partner organisations and civic occasions. Each item below links directly to its full archival entry and original high-resolution viewer.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {APPRECIATION_CROSS_LINKS.map((item) => {
              const linkedDoc = docById[item.docId];
              if (!linkedDoc) return null;
              const thumb = linkedDoc.pages[0];

              return (
                <article
                  key={item.docId}
                  className="bg-white border border-slate-200 hover:border-blue-900 rounded-2xl overflow-hidden flex flex-col justify-between shadow-sm transition-colors"
                >
                  <div>
                    <button
                      type="button"
                      onClick={() => openViewer(linkedDoc, 0)}
                      className="group relative w-full h-56 bg-slate-100 border-b border-slate-200 flex items-center justify-center p-3 overflow-hidden cursor-pointer focus-visible:outline-2 focus-visible:outline-inset focus-visible:outline-blue-900"
                      aria-label={
                        isBengali
                          ? `${linkedDoc.bengaliTitle} দেখুন`
                          : `View ${linkedDoc.title}`
                      }
                    >
                      <img
                        src={thumb.src}
                        alt={isBengali ? thumb.bengaliAlt : thumb.alt}
                        loading="lazy"
                        referrerPolicy="no-referrer"
                        className="max-h-full max-w-full w-auto h-auto object-contain bg-white shadow-xs transition-transform duration-200 group-hover:scale-[1.03]"
                      />
                    </button>

                    <div className="p-5 space-y-2.5">
                      <p className="text-xs font-semibold text-orange-600 tabular-nums">
                        {isBengali ? item.bengaliSubtitle : item.subtitle}
                      </p>
                      <h3 className="font-serif-heading text-lg font-bold text-blue-950 leading-snug">
                        {isBengali ? linkedDoc.bengaliTitle : linkedDoc.title}
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        {isBengali ? item.bengaliSummary : item.summary}
                      </p>
                    </div>
                  </div>

                  <div className="px-5 py-3.5 border-t border-slate-100 bg-slate-50 flex items-center justify-between gap-2 text-xs font-semibold">
                    <button
                      type="button"
                      onClick={() => openViewer(linkedDoc, 0)}
                      className="inline-flex items-center gap-1.5 text-blue-900 hover:text-blue-950 cursor-pointer whitespace-nowrap"
                    >
                      <Maximize2 className="w-3.5 h-3.5" aria-hidden="true" />
                      <span>{isBengali ? 'মূল পত্র দেখুন' : 'View Letter'}</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => scrollToElement(linkedDoc.id)}
                      className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 cursor-pointer whitespace-nowrap"
                    >
                      <span>{isBengali ? 'বিস্তারিত পড়ুন' : 'Full Record'}</span>
                      <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
                    </button>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================================================
          SECTION 9: CLOSING ARCHIVAL STATEMENT (BLUE & SAFFRON BRAND BAND)
         ===================================================================== */}
      <section className="bg-gradient-to-r from-blue-900 via-blue-950 to-blue-900 text-white border-t-4 border-orange-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 text-center space-y-6">
          <p className="text-xs font-semibold tracking-wide text-orange-300">
            {isBengali
              ? 'বঙ্গীয় সাহা সমিতি · ৫২বি, ইন্ডিয়ান মিরর স্ট্রিট, কলকাতা – ৭০০০১৩'
              : 'Bangiya Saha Samity · 52B, Indian Mirror Street, Kolkata – 700013'}
          </p>

          <h2 className="font-serif-heading text-3xl sm:text-4xl font-bold text-white text-balance">
            {isBengali
              ? 'ইতিহাস সংরক্ষণ। সমাজের সেবা।'
              : 'Preserving History. Serving Society.'}
          </h2>

          <p className="text-base text-blue-100 leading-[1.8] max-w-2xl mx-auto">
            {isBengali
              ? 'এই সংরক্ষণাগারের প্রতিটি নথি আমাদের প্রাতিষ্ঠানিক যাত্রাপথের এক একটি গুরুত্বপূর্ণ অধ্যায়কে তুলে ধরে। ঐতিহাসিক দলিল, সামাজিক আবেদন এবং মানবিক অবদানগুলি সংরক্ষণের মাধ্যমে বঙ্গীয় সাহা সমিতি বর্তমান ও আগামী প্রজন্মের জন্য তার উত্তরাধিকার রক্ষা করতে প্রতিশ্রুতিবদ্ধ।'
              : 'Every document in this archive represents an important part of our institutional journey. Through the preservation of historical records, community representations and social contributions, Bangiya Saha Samity seeks to maintain its heritage for present and future generations.'}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <button
              type="button"
              onClick={() => scrollToElement('section-registration')}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 min-h-[44px] rounded-lg bg-orange-500 text-white hover:bg-orange-600 text-sm font-semibold transition-colors whitespace-nowrap shrink-0 cursor-pointer shadow-sm"
            >
              <span>{isBengali ? 'নথি সংরক্ষণাগার দেখুন' : 'Explore Our Document Archive'}</span>
            </button>

            <button
              type="button"
              onClick={() => onNavigate('contact')}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 min-h-[44px] rounded-lg border border-blue-200/35 text-white hover:bg-white/10 text-sm font-medium transition-colors whitespace-nowrap shrink-0 cursor-pointer"
            >
              <span>{isBengali ? 'কেন্দ্রীয় কার্যালয়ে যোগাযোগ' : 'Contact Central Office'}</span>
            </button>
          </div>
        </div>
      </section>

      {/* Full-Screen Zoomable Multi-Page Document Viewer */}
      <DocumentLightbox
        document={viewerState.doc}
        initialPageIndex={viewerState.pageIndex}
        onClose={closeViewer}
      />
    </div>
  );
};
