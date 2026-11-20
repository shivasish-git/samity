export interface ArchivePageAsset {
  src: string;
  pageLabel: string;
  bengaliPageLabel: string;
  alt: string;
  bengaliAlt: string;
  downloadName: string;
}

export interface ArchiveDocument {
  id: string;
  sectionId:
    | 'section-registration'
    | 'section-legal'
    | 'section-correspondence'
    | 'section-newspapers'
    | 'section-welfare';
  title: string;
  bengaliTitle: string;
  date: string;
  bengaliDate: string;
  category: string;
  bengaliCategory: string;
  issuingAuthority: string;
  bengaliIssuingAuthority: string;
  referenceNumber?: string;
  bengaliReferenceNumber?: string;
  description: string;
  bengaliDescription: string;
  contextNote?: string;
  bengaliContextNote?: string;
  contextNoteTone?: 'legal' | 'media' | 'reference';
  pages: ArchivePageAsset[];
  isPhotograph?: boolean;
}

export interface ArchiveTimelineMilestone {
  year: string;
  bengaliYear: string;
  label: string;
  bengaliLabel: string;
  targetDocId: string;
}

export interface ArchiveSectionNavItem {
  id: string;
  number: string;
  label: string;
  bengaliLabel: string;
  shortLabel: string;
  bengaliShortLabel: string;
}

export const ARCHIVE_NAV_ITEMS: ArchiveSectionNavItem[] = [
  {
    id: 'archive-overview',
    number: '00',
    label: 'Overview',
    bengaliLabel: 'পরিচিতি',
    shortLabel: 'Overview',
    bengaliShortLabel: 'পরিচিতি',
  },
  {
    id: 'section-registration',
    number: '01',
    label: 'Registration',
    bengaliLabel: 'প্রতিষ্ঠা ও নিবন্ধন',
    shortLabel: 'Registration',
    bengaliShortLabel: 'নিবন্ধন',
  },
  {
    id: 'section-legal',
    number: '02',
    label: 'Legal & Community Records',
    bengaliLabel: 'পরিচিতি ও আইনি নথি',
    shortLabel: 'Legal & Identity',
    bengaliShortLabel: 'আইনি নথি',
  },
  {
    id: 'section-correspondence',
    number: '03',
    label: 'Government Correspondence',
    bengaliLabel: 'সরকারি চিঠিপত্র',
    shortLabel: 'Correspondence',
    bengaliShortLabel: 'চিঠিপত্র',
  },
  {
    id: 'section-newspapers',
    number: '04',
    label: 'Newspaper Archives',
    bengaliLabel: 'সংবাদপত্র সংরক্ষণাগার',
    shortLabel: 'Newspapers',
    bengaliShortLabel: 'সংবাদপত্র',
  },
  {
    id: 'section-welfare',
    number: '05',
    label: 'Social Welfare',
    bengaliLabel: 'সমাজকল্যাণ',
    shortLabel: 'Social Welfare',
    bengaliShortLabel: 'সমাজকল্যাণ',
  },
  {
    id: 'section-appreciation',
    number: '06',
    label: 'Appreciation',
    bengaliLabel: 'কৃতজ্ঞতা ও স্বীকৃতি',
    shortLabel: 'Appreciation',
    bengaliShortLabel: 'স্বীকৃতি',
  },
];

export const ARCHIVE_CHAPTER_INDEX = [
  {
    number: '01',
    id: 'section-registration',
    title: 'Our Foundation & Registration',
    bengaliTitle: 'আমাদের প্রতিষ্ঠা ও নিবন্ধন',
  },
  {
    number: '02',
    id: 'section-legal',
    title: 'Community Identity & Legal Records',
    bengaliTitle: 'সামাজিক পরিচিতি ও আইনি নথি',
  },
  {
    number: '03',
    id: 'section-correspondence',
    title: 'Government Correspondence & Representations',
    bengaliTitle: 'সরকারি চিঠিপত্র ও স্মারকলিপি',
  },
  {
    number: '04',
    id: 'section-newspapers',
    title: 'Historical Activities & Publications',
    bengaliTitle: 'ঐতিহাসিক সংবাদপত্র ও প্রকাশনা',
  },
  {
    number: '05',
    id: 'section-welfare',
    title: 'Social Welfare & Charitable Contributions',
    bengaliTitle: 'সমাজকল্যাণ ও সেবামূলক অবদান',
  },
  {
    number: '06',
    id: 'section-appreciation',
    title: 'Public Recognition & Appreciation',
    bengaliTitle: 'জনস্বীকৃতি ও কৃতজ্ঞতাপত্র',
  },
];

export const ARCHIVE_TIMELINE: ArchiveTimelineMilestone[] = [
  {
    year: '1936',
    bengaliYear: '১৯৩৬',
    label: 'Original registration under Act XXI of 1860',
    bengaliLabel: '১৮৬০ সালের আইনে মূল নিবন্ধন',
    targetDocId: 'doc-1936-registration',
  },
  {
    year: '1973–74',
    bengaliYear: '১৯৭৩–৭৪',
    label: 'Historical Section 12A Income Tax record',
    bengaliLabel: 'আয়কর আইন ধারা ১২এ নিবন্ধন নথি',
    targetDocId: 'doc-1973-12a',
  },
  {
    year: '1983',
    bengaliYear: '১৯৮৩',
    label: 'Govt. of West Bengal Memorandum No. 498-T.W.',
    bengaliLabel: 'পশ্চিমবঙ্গ সরকারের স্মারক নং ৪৯৮-টি.ডব্লিউ.',
    targetDocId: 'doc-1983-memo',
  },
  {
    year: '1996–97',
    bengaliYear: '১৯৯৬–৯৭',
    label: 'Court-related order & Samity circular',
    bengaliLabel: 'আদালতের আদেশ ও সমিতির সার্কুলার',
    targetDocId: 'doc-1996-1997-order',
  },
  {
    year: '2015',
    bengaliYear: '২০১৫',
    label: 'Representation to Backward Classes Welfare Dept.',
    bengaliLabel: 'অনগ্রসর শ্রেণি কল্যাণ দপ্তরে আবেদন',
    targetDocId: 'doc-2015-representation',
  },
  {
    year: '2023',
    bengaliYear: '২০২৩',
    label: "Raj Bhavan / Governor's Secretariat letter",
    bengaliLabel: 'রাজভবন / রাজ্যপাল সচিবালয়ের পত্র',
    targetDocId: 'doc-2023-rajbhavan',
  },
  {
    year: '2025–26',
    bengaliYear: '২০২৫–২৬',
    label: 'Social welfare records & press archives',
    bengaliLabel: 'সমাজসেবার স্বীকৃতি ও সাম্প্রতিক সংবাদ',
    targetDocId: 'doc-2025-bodhipeet',
  },
];

export const ARCHIVE_DOCUMENTS: ArchiveDocument[] = [
  // =========================================================================
  // SECTION 01: OUR FOUNDATION & REGISTRATION
  // =========================================================================
  {
    id: 'doc-1936-registration',
    sectionId: 'section-registration',
    title: 'Original Certificate of Registration of Societies',
    bengaliTitle: 'মূল সোসাইটি নিবন্ধন শংসাপত্র (১৯৩৬–১৯৩৭)',
    date: '22 December 1936',
    bengaliDate: '২২ ডিসেম্বর ১৯৩৬',
    category: 'Foundation Record',
    bengaliCategory: 'প্রতিষ্ঠাকালীন নথি',
    issuingAuthority: 'Registrar of Joint Stock Companies, Calcutta',
    bengaliIssuingAuthority: 'রেজিস্ট্রার অব জয়েন্ট স্টক কোম্পানিজ, কলকাতা',
    referenceNumber: 'No. 4522 of 1936–1937 · Societies Registration Act XXI of 1860',
    bengaliReferenceNumber: 'নং ৪৫২২ (১৯৩৬–১৯৩৭) · সোসাইটি রেজিস্ট্রেশন অ্যাক্ট XXI অব ১৮৬০',
    description:
      'This original ornate registration certificate records the formal incorporation of Bangiya Saha Samity under the Societies Registration Act, XXI of 1860, bearing Registration No. 4522 of 1936–1937. Executed at Calcutta on 22 December 1936 under the seal of the Registrar of Joint Stock Companies, it stands as the foundational documentary record of the Samity’s institutional origin and continuity.',
    bengaliDescription:
      '১৮৬০ সালের সোসাইটি রেজিস্ট্রেশন অ্যাক্ট (XXI অব ১৮৬০)-এর অধীনে বঙ্গীয় সাহা সমিতির আনুষ্ঠানিক নিবন্ধনের মূল ঐতিহাসিক শংসাপত্র এটি। ১৯৩৬ সালের ২২ ডিসেম্বর কলকাতায় রেজিস্ট্রার অব জয়েন্ট স্টক কোম্পানিজ-এর স্বাক্ষর ও সিলসহ প্রদত্ত ৪৫২২ (১৯৩৬–১৯৩৭) নম্বরের এই দলিল সমিতির প্রতিষ্ঠার প্রামাণ্য ভিত্তি।',
    pages: [
      {
        src: '/assets/aistudio/WhatsApp_Image_2026-11-16_at_11.36.25_PM__1__0154cab1.jpeg',
        pageLabel: 'Original Certificate (1936)',
        bengaliPageLabel: 'মূল শংসাপত্র (১৯৩৬)',
        alt: 'Original 1936 Certificate of Registration of Societies for Bangiya Saha Samity under Act XXI of 1860, Registration No. 4522 of 1936-1937',
        bengaliAlt: '১৮৬০ সালের আইনে বঙ্গীয় সাহা সমিতির ১৯৩৬ সালের মূল নিবন্ধন শংসাপত্র, নং ৪৫২২',
        downloadName: 'Bangiya-Saha-Samity-Original-Registration-1936-No-4522.jpg',
      },
    ],
  },
  {
    id: 'doc-1961-wb-registration',
    sectionId: 'section-registration',
    title: 'West Bengal Registration Certificate (Form No. 264)',
    bengaliTitle: 'পশ্চিমবঙ্গ সোসাইটি নিবন্ধন শংসাপত্র (ফর্ম নং ২৬৪)',
    date: 'Original Registration: 22 December 1936',
    bengaliDate: 'মূল নিবন্ধনের তারিখ: ২২ ডিসেম্বর ১৯৩৬',
    category: 'Institutional Registration',
    bengaliCategory: 'প্রাতিষ্ঠানিক নিবন্ধন',
    issuingAuthority: 'Registrar of Firms, Societies & Non-Trading Corporations, West Bengal',
    bengaliIssuingAuthority: 'রেজিস্ট্রার অব ফার্মস, সোসাইটিজ অ্যান্ড নন-ট্রেডিং কর্পোরেশনস, পশ্চিমবঙ্গ',
    referenceNumber: 'Legacy No. 04522 · New Regd. No. SO969057 · West Bengal Act XXVI of 1961',
    bengaliReferenceNumber: 'পূর্বতন নং ০৪৫২২ · নতুন নং SO969057 · পশ্চিমবঙ্গ আইন XXVI অব ১৯৬১',
    description:
      'Issued on West Bengal Form No. 264 under the West Bengal Societies Registration Act, 1961 (Act XXVI of 1961), this digitally authenticated record preserves the unbroken institutional link between Legacy Registration No. 04522 and New Registration No. SO969057. It records the registered address of Bangiya Saha Samity at 52B, Indian Mirror Street, Ward No. 51, Taltala, Kolkata – 700013, while preserving the original registration date of 22 December 1936.',
    bengaliDescription:
      'পশ্চিমবঙ্গ সোসাইটি রেজিস্ট্রেশন অ্যাক্ট, ১৯৬১ (ফর্ম নং ২৬৪)-এর অধীনে ডিজিটাল স্বাক্ষরযুক্ত এই শংসাপত্রে পূর্বতন নিবন্ধন নং ০৪৫২২ ও নতুন নিবন্ধন নং SO969057-এর ধারাবাহিকতা সংরক্ষিত রয়েছে। এতে ৫২বি, ইন্ডিয়ান মিরর স্ট্রিট, তালতলা, কলকাতা–৭০০০১৩ ঠিকানা এবং ২২ ডিসেম্বর ১৯৩৬-এর মূল নিবন্ধন তারিখ নথিভুক্ত আছে।',
    pages: [
      {
        src: '/assets/aistudio/WhatsApp_Image_2026-11-16_at_11.36.32_PM_3dfd5462.jpeg',
        pageLabel: 'West Bengal Form No. 264',
        bengaliPageLabel: 'পশ্চিমবঙ্গ ফর্ম নং ২৬৪',
        alt: 'West Bengal Form No. 264 Certificate of Registration of Societies for Bangiya Saha Samity showing Legacy No. 04522 and New Registration No. SO969057',
        bengaliAlt: 'বঙ্গীয় সাহা সমিতির পশ্চিমবঙ্গ ফর্ম নং ২৬৪ নিবন্ধন শংসাপত্র, নতুন নং SO969057',
        downloadName: 'Bangiya-Saha-Samity-WB-Registration-SO969057.jpg',
      },
    ],
  },
  {
    id: 'doc-1973-12a',
    sectionId: 'section-registration',
    title: 'Historical Section 12A Registration Certificate',
    bengaliTitle: 'ঐতিহাসিক ধারা ১২এ (আয়কর আইন) নিবন্ধন শংসাপত্র',
    date: '30 November 1973 (Memo: 4 December 1973)',
    bengaliDate: '৩০ নভেম্বর ১৯৭৩ (স্মারক: ৪ ডিসেম্বর ১৯৭৩)',
    category: 'Income Tax Record',
    bengaliCategory: 'আয়কর নিবন্ধন নথি',
    issuingAuthority: 'Commissioner of Income Tax, West Bengal-VI',
    bengaliIssuingAuthority: 'আয়কর কমিশনার, পশ্চিমবঙ্গ-VI',
    referenceNumber: 'No. 62-S/WB. VI of 1973–74 · Memo No. Assmnt/18538/C.T.',
    bengaliReferenceNumber: 'নং ৬২-এস/ডব্লিউ.বি. VI (১৯৭৩–৭৪) · স্মারক নং Assmnt/18538/C.T.',
    description:
      'Preserved from 1973–74, this historical certificate confirms the registration of Bangiya Saha Samity (Calcutta-13) under Section 12A of the Income Tax Act, 1961, referencing its 22 December 1936 Memorandum of Association registration. Issued at Calcutta on 30 November 1973 and forwarded via memo dated 4 December 1973 to the Secretary at 52B, Indian Mirror Street, it documents an important regulatory milestone in the Samity’s charitable history.',
    bengaliDescription:
      '১৯৭৩–৭৪ সালের এই ঐতিহাসিক নথিটি আয়কর আইন, ১৯৬১-এর ধারা ১২এ-এর অধীনে বঙ্গীয় সাহা সমিতির নিবন্ধনের সাক্ষ্য বহন করে। ৩০ নভেম্বর ১৯৭৩ তারিখে কলকাতায় প্রদত্ত এবং ৪ ডিসেম্বর ১৯৭৩-এর স্মারকপত্রের মাধ্যমে ৫২বি ইন্ডিয়ান মিরর স্ট্রিটের সম্পাদকের নিকট প্রেরিত এই শংসাপত্র সমিতির দাতব্য কার্যক্রমের এক গুরুত্বপূর্ণ মাইলফলক।',
    pages: [
      {
        src: '/assets/aistudio/WhatsApp_Image_2026-11-16_at_11.36.32_PM__1__0ee17308.jpeg',
        pageLabel: 'Section 12A Certificate (1973–74)',
        bengaliPageLabel: 'ধারা ১২এ শংসাপত্র (১৯৭৩–৭৪)',
        alt: 'Historical 1973-74 Certificate of Registration under Section 12A of the Income Tax Act, 1961 for Bangiya Saha Samity, No. 62-S/WB. VI of 1973-74',
        bengaliAlt: 'আয়কর আইন ১৯৬১-এর ধারা ১২এ অধীনে বঙ্গীয় সাহা সমিতির ১৯৭৩–৭৪ সালের নিবন্ধন শংসাপত্র',
        downloadName: 'Bangiya-Saha-Samity-Section-12A-Certificate-1973-74.jpg',
      },
    ],
  },

  // =========================================================================
  // SECTION 02: COMMUNITY IDENTITY & LEGAL RECORDS
  // =========================================================================
  {
    id: 'doc-1983-memo',
    sectionId: 'section-legal',
    title: 'Government of West Bengal Memorandum No. 498-T.W.',
    bengaliTitle: 'পশ্চিমবঙ্গ সরকারের স্মারকপত্র নং ৪৯৮-টি.ডব্লিউ.',
    date: '28 February 1983',
    bengaliDate: '২৮ ফেব্রুয়ারি ১৯৮৩',
    category: 'Government Record',
    bengaliCategory: 'সরকারি স্মারকপত্র',
    issuingAuthority:
      "Scheduled Castes & Tribes Welfare Department, Government of West Bengal (Writers' Buildings)",
    bengaliIssuingAuthority:
      'তপশিলি জাতি ও উপজাতি কল্যাণ দপ্তর, পশ্চিমবঙ্গ সরকার (মহাকরণ)',
    referenceNumber: 'Memorandum No. 498-T.W. · Signed: M. K. Bose, Secretary',
    bengaliReferenceNumber: 'স্মারক নং ৪৯৮-টি.ডব্লিউ. · স্বাক্ষর: এম. কে. বসু, সচিব',
    description:
      'This official West Bengal Government memorandum conveys a clarification obtained from the Ministry of Home Affairs, Government of India, concerning Scheduled Caste certificates issued to members of the Sunri community. It records that under the Constitution (Scheduled Castes) Order, 1950 (as amended), a person certified by a competent authority as belonging to the "Sunri (excluding Saha)" community is recognised as a Scheduled Caste and "may be using any surname including \'Saha\'", directing competent authorities to use the statutory wording on certificates to avoid anomalies.',
    bengaliDescription:
      'পশ্চিমবঙ্গ সরকারের এই সরকারি স্মারকপত্রে ভারত সরকারের স্বরাষ্ট্র মন্ত্রকের একটি গুরুত্বপূর্ণ ব্যাখ্যা নথিভুক্ত হয়েছে। এতে উল্লেখ করা হয় যে, সংবিধান (তপশিলি জাতি) আদেশ, ১৯৫০ অনুযায়ী উপযুক্ত কর্তৃপক্ষ কর্তৃক "Sunri (excluding Saha)" সম্প্রদায়ভুক্ত হিসেবে প্রত্যয়িত ব্যক্তি "সাহা" সহ যে কোনো পদবি ব্যবহার করলেও তপশিলি জাতি হিসেবে স্বীকৃত হবেন এবং শংসাপত্রে বিধিবদ্ধ নাম ব্যবহারের নির্দেশ দেওয়া হয়।',
    contextNote:
      'Government Record: Official administrative memorandum issued by the Government of West Bengal communicating the Ministry of Home Affairs clarification.',
    bengaliContextNote:
      'সরকারি নথি: ভারত সরকারের স্বরাষ্ট্র মন্ত্রকের ব্যাখ্যা জানিয়ে পশ্চিমবঙ্গ সরকার কর্তৃক প্রকাশিত আনুষ্ঠানিক স্মারকপত্র।',
    contextNoteTone: 'legal',
    pages: [
      {
        src: '/assets/aistudio/WhatsApp_Image_2026-11-16_at_11.36.28_PM__2__c398a1a8.jpeg',
        pageLabel: 'Memorandum No. 498-T.W. (1983)',
        bengaliPageLabel: 'স্মারক নং ৪৯৮-টি.ডব্লিউ. (১৯৮৩)',
        alt: 'Government of West Bengal Scheduled Castes and Tribes Welfare Department Memorandum No. 498-T.W. dated 28 February 1983 regarding Sunri (excluding Saha) Scheduled Caste certificates',
        bengaliAlt: '২৮ ফেব্রুয়ারি ১৯৮৩ তারিখের পশ্চিমবঙ্গ সরকারের স্মারকপত্র নং ৪৯৮-টি.ডব্লিউ.',
        downloadName: 'WB-Govt-Memorandum-498-TW-28-Feb-1983.jpg',
      },
    ],
  },
  {
    id: 'doc-1996-1997-order',
    sectionId: 'section-legal',
    title: 'Supreme Court Order Extract (1996) & Samity Circular Appeal (1997)',
    bengaliTitle: 'সুপ্রিম কোর্টের আদেশের উদ্ধৃতি (১৯৯৬) ও সমিতির আবেদন সার্কুলার (১৯৯৭)',
    date: 'Court Order: 12 February 1996 · Circular: 26 August 1997',
    bengaliDate: 'আদালতের আদেশ: ১২ ফেব্রুয়ারি ১৯৯৬ · সার্কুলার: ২৬ আগস্ট ১৯৯৭',
    category: 'Court Order & Samity Communication',
    bengaliCategory: 'আদালতের আদেশ ও সমিতির বিজ্ঞপ্তি',
    issuingAuthority:
      'Supreme Court of India (quoted order) · Bangiya Saha Samity (Circular by Sri Debkumar Saha, President)',
    bengaliIssuingAuthority:
      'ভারতের সুপ্রিম কোর্ট (উদ্ধৃত আদেশ) · বঙ্গীয় সাহা সমিতি (সার্কুলার: শ্রী দেবকুমার সাহা, সভাপতি)',
    referenceNumber:
      'C.C. No. 113/96 (Pankaj Kumar Saha vs. SDO, Islampur & Ors.) · Ref. No. 454(166)-TWEC · Circular No. 97/01',
    bengaliReferenceNumber:
      'সি.সি. নং ১১৩/৯৬ (পঙ্কজ কুমার সাহা বনাম এস.ডি.ও., ইসলামপুর) · সার্কুলার নং ৯৭/০১',
    description:
      'This archival circular (No. 97/01, carrying the handwritten date 26/8/97 on the scan) preserves two distinct records on a single sheet. The upper portion reproduces the 12 February 1996 Supreme Court order in C.C. No. 113/96 (Pankaj Kumar Saha vs. Sub-Divisional Officer, Islampur & Others, circulated via No. 454(166)-TWEC), which noted that "Sunri (excluding Saha)" is a Scheduled Caste in West Bengal and recorded the authority’s finding in that petition. Below it, the Samity’s Bengali appeal, signed by President Sri Debkumar Saha, seeks community cooperation and funding to pursue legal representation for clarification before the Supreme Court.',
    bengaliDescription:
      'সার্কুলার নং ৯৭/০১ (স্ক্যানে হাতে লেখা তারিখ ২৬/৮/৯৭)-এর এই ঐতিহাসিক পত্রে দুটি পৃথক নথি একত্রে সংরক্ষিত রয়েছে। উপরের অংশে C.C. No. 113/96 (পঙ্কজ কুমার সাহা বনাম এস.ডি.ও., ইসলামপুর ও অন্যান্য) মামলায় ১২ ফেব্রুয়ারি ১৯৯৬-এর সুপ্রিম কোর্টের আদেশ উদ্ধৃত করা হয়েছে। নিচের অংশে সভাপতি শ্রী দেবকুমার সাহা স্বাক্ষরিত বাংলা আবেদনে উক্ত আদেশ সংশোধনের আইনি উদ্যোগের জন্য সমাজের সহযোগিতা ও অর্থসাহায্য কামনা করা হয়েছে।',
    contextNote:
      'Important Distinction: The 12 February 1996 judicial order and Bangiya Saha Samity’s 1997 circular appeal are separate—the Samity’s appeal documents its proposed legal effort and does not itself modify the court order.',
    bengaliContextNote:
      'গুরুত্বপূর্ণ পার্থক্য: ১২ ফেব্রুয়ারি ১৯৯৬-এর আদালতের আদেশ এবং ১৯৯৭ সালের সমিতির আবেদন দুটি পৃথক বিষয়; সমিতির সার্কুলারটি কেবল আইনি উদ্যোগের আবেদন নথিভুক্ত করে।',
    contextNoteTone: 'legal',
    pages: [
      {
        src: '/assets/aistudio/WhatsApp_Image_2026-11-16_at_11.36.25_PM_830b3a01.jpeg',
        pageLabel: 'Circular 97/01 with 1996 Court Order',
        bengaliPageLabel: 'সার্কুলার ৯৭/০১ ও ১৯৯৬-এর আদেশ',
        alt: 'Bangiya Saha Samity Circular No. 97/01 dated 26/8/97 quoting Supreme Court Order dated 12 February 1996 in C.C. No. 113/96 Pankaj Kumar Saha vs. Sub-Divisional Officer, Islampur and Others',
        bengaliAlt: '১২ ফেব্রুয়ারি ১৯৯৬-এর সুপ্রিম কোর্টের আদেশ উদ্ধৃত বঙ্গীয় সাহা সমিতির সার্কুলার নং ৯৭/০১ (২৬/৮/৯৭)',
        downloadName: 'Bangiya-Saha-Samity-Circular-97-01-and-1996-Order.jpg',
      },
    ],
  },
  {
    id: 'doc-2015-representation',
    sectionId: 'section-legal',
    title: 'Representation to the Backward Classes Welfare Department (4 Pages)',
    bengaliTitle: 'অনগ্রসর শ্রেণি কল্যাণ দপ্তরে সমিতির স্মারকলিপি ও আবেদন (৪ পৃষ্ঠা)',
    date: '11 August 2015',
    bengaliDate: '১১ আগস্ট ২০১৫',
    category: 'Samity Representation',
    bengaliCategory: 'সমিতির স্মারকলিপি',
    issuingAuthority:
      'Bangiya Saha Samity (Signed: Subir Saha, Hony. General Secretary) · Addressed to Hon’ble Minister-in-Charge, Backward Classes Welfare Dept., Govt. of West Bengal',
    bengaliIssuingAuthority:
      'বঙ্গীয় সাহা সমিতি (স্বাক্ষর: সুবীর সাহা, অবৈতনিক সাধারণ সম্পাদক) · প্রাপক: মাননীয় ভারপ্রাপ্ত মন্ত্রী, অনগ্রসর শ্রেণি কল্যাণ দপ্তর, পশ্চিমবঙ্গ সরকার',
    referenceNumber: 'Ref. No. B.S.S./2015-16/10 · Receipt Stamp: B.C.W. Dept., 11.8.15',
    bengaliReferenceNumber: 'সূত্র নং B.S.S./2015-16/10 · প্রাপ্তিস্বীকার স্ট্যাম্প: ১১.৮.১৫',
    description:
      'This complete four-page formal representation submitted by Bangiya Saha Samity on 11 August 2015 (bearing the Backward Classes Welfare Department’s receipt stamp of the same date) presents the Samity’s historical overview of the 1936 Government of India Order, the 1950 Constitution (Scheduled Castes) Order, the 1956 Modification Order, and West Bengal circulars of 1965, 1983, and 1992. It outlines the practical difficulties faced by Sunri students bearing the surname "Saha" and requests consideration of an explicit amendment reading "Sunri" in lieu of "Sunri (excluding Saha)".',
    bengaliDescription:
      '১১ আগস্ট ২০১৫ তারিখে পশ্চিমবঙ্গ সরকারের অনগ্রসর শ্রেণি কল্যাণ দপ্তরের মাননীয় মন্ত্রীর নিকট পেশ করা চার পৃষ্ঠার এই পূর্ণাঙ্গ স্মারকলিপিতে ১৯৩৬, ১৯৫০ ও ১৯৫৬ সালের সরকারি আদেশ এবং ১৯৬৫, ১৯৮৩ ও ১৯৯২ সালের সার্কুলারের ঐতিহাসিক প্রেক্ষাপট তুলে ধরা হয়েছে। "সাহা" পদবিধারী শুঁড়ি সম্প্রদায়ের শিক্ষার্থীদের শংসাপত্র প্রাপ্তির বাস্তব অসুবিধার কথা জানিয়ে সমিতি "Sunri (excluding Saha)"-এর পরিবর্তে "Sunri" সংশোধনের আবেদন জানায়।',
    contextNote:
      'Representation Record: This document preserves Bangiya Saha Samity’s formal submission and interpretation addressed to state authorities; it does not imply that the requested statutory amendment was enacted.',
    bengaliContextNote:
      'আবেদন নথি: এটি রাজ্য সরকারের নিকট পেশ করা বঙ্গীয় সাহা সমিতির আনুষ্ঠানিক আবেদন ও ব্যাখ্যা নথিভুক্ত করে; এতে উক্ত আইনগত সংশোধনী অনুমোদিত হয়েছে এমন কোনো দাবি করা হচ্ছে না।',
    contextNoteTone: 'legal',
    pages: [
      {
        src: '/assets/aistudio/WhatsApp_Image_2026-11-16_at_11.36.27_PM_f903cb89.jpeg',
        pageLabel: 'Page 1 of 4 — Cover & Receipt Stamp',
        bengaliPageLabel: 'পৃষ্ঠা ১/৪ — মূল আবেদন ও প্রাপ্তিস্বীকার',
        alt: 'Page 1 of Bangiya Saha Samity representation dated 11 August 2015 (Ref. B.S.S./2015-16/10) to Backward Classes Welfare Department with official receipt stamp',
        bengaliAlt: '১১ আগস্ট ২০১৫ তারিখের বঙ্গীয় সাহা সমিতির আবেদনের প্রথম পৃষ্ঠা (প্রাপ্তিস্বীকার স্ট্যাম্পসহ)',
        downloadName: 'Bangiya-Saha-Samity-BCW-Representation-2015-Page-1.jpg',
      },
      {
        src: '/assets/aistudio/WhatsApp_Image_2026-11-16_at_11.36.27_PM__1__3da283a2.jpeg',
        pageLabel: 'Page 2 of 4 — 1936, 1950 & 1956 Orders',
        bengaliPageLabel: 'পৃষ্ঠা ২/৪ — ১৯৩৬, ১৯৫০ ও ১৯৫৬-এর আদেশ',
        alt: 'Page 2 of Bangiya Saha Samity 11 August 2015 representation citing 1936 Order, Article 341, 1950 Order, and 1956 Modification Order',
        bengaliAlt: '১১ আগস্ট ২০১৫-এর আবেদনের দ্বিতীয় পৃষ্ঠা — ১৯৩৬, ১৯৫০ ও ১৯৫৬ সালের সরকারি আদেশের উল্লেখ',
        downloadName: 'Bangiya-Saha-Samity-BCW-Representation-2015-Page-2.jpg',
      },
      {
        src: '/assets/aistudio/WhatsApp_Image_2026-11-16_at_11.36.27_PM__2__90cb1269.jpeg',
        pageLabel: 'Page 3 of 4 — Surname & Circular History',
        bengaliPageLabel: 'পৃষ্ঠা ৩/৪ — পদবি ও সার্কুলারের বিবরণ',
        alt: 'Page 3 of Bangiya Saha Samity 11 August 2015 representation discussing Sunri surname Saha, Baishya Saha distinction, and 1965 and 1983 circulars',
        bengaliAlt: '১১ আগস্ট ২০১৫-এর আবেদনের তৃতীয় পৃষ্ঠা — পদবি ও সরকারি সার্কুলারের বিবরণ',
        downloadName: 'Bangiya-Saha-Samity-BCW-Representation-2015-Page-3.jpg',
      },
      {
        src: '/assets/aistudio/WhatsApp_Image_2026-11-16_at_11.36.28_PM_20fd44c1.jpeg',
        pageLabel: 'Page 4 of 4 — Closing & Secretary Signature',
        bengaliPageLabel: 'পৃষ্ঠা ৪/৪ — উপসংহার ও সম্পাদকের স্বাক্ষর',
        alt: 'Page 4 of Bangiya Saha Samity 11 August 2015 representation citing 1992 circular and signed by Subir Saha, Hony. General Secretary',
        bengaliAlt: '১১ আগস্ট ২০১৫-এর আবেদনের চতুর্থ পৃষ্ঠা — অবৈতনিক সাধারণ সম্পাদক সুবীর সাহার স্বাক্ষরসহ',
        downloadName: 'Bangiya-Saha-Samity-BCW-Representation-2015-Page-4.jpg',
      },
    ],
  },
  {
    id: 'doc-sunri-certificate-format',
    sectionId: 'section-legal',
    title: 'Historical Samity Community Certificate Format',
    bengaliTitle: 'শুঁড়ি সমাজ পরিচিতি শংসাপত্রের ঐতিহাসিক ফর্ম',
    date: 'Undated (1980s Printed Format)',
    bengaliDate: 'অনির্দিষ্ট তারিখ (১৯৮০-এর দশকের মুদ্রিত ফর্ম)',
    category: 'Archival Form',
    bengaliCategory: 'ঐতিহাসিক প্রাতিষ্ঠানিক ফর্ম',
    issuingAuthority: 'Bangiya Saha Samity, 52-B, Indian Mirror Street, Calcutta – 700 013',
    bengaliIssuingAuthority: 'বঙ্গীয় সাহা সমিতি, ৫২-বি, ইন্ডিয়ান মিরর স্ট্রিট, কলকাতা – ৭০০ ০১৩',
    referenceNumber: 'Form Series No. BSS/1/ · Registered under Act XXI of 1860',
    bengaliReferenceNumber: 'ফর্ম ক্রমিক নং BSS/1/ · ১৮৬০ সালের আইনে নিবন্ধিত',
    description:
      'An unused original copy of the Samity’s historical printed certificate format (series No. BSS/1/, printed for the 1980s with the "198_" date line) from 52-B, Indian Mirror Street, Calcutta. Designed for signature by the Secretary, the form certified that an individual belongs to the "SUNRI" community recognised as a Scheduled Caste of West Bengal, illustrating how the organisation documented community membership during that era.',
    bengaliDescription:
      '১৯৮০-এর দশকে কলকাতার ৫২-বি, ইন্ডিয়ান মিরর স্ট্রিট থেকে মুদ্রিত বঙ্গীয় সাহা সমিতির একটি অব্যবহৃত মূল পরিচিতি শংসাপত্রের নমুনা (ক্রমিক নং BSS/1/)। সম্পাদকের স্বাক্ষরের জন্য নির্ধারিত এই ফর্মটি পশ্চিমবঙ্গের তপশিলি জাতি হিসেবে স্বীকৃত "SUNRI" সম্প্রদায়ের সদস্যদের পরিচিতি নথিভুক্ত করার ঐতিহাসিক রীতির নিদর্শন।',
    pages: [
      {
        src: '/assets/aistudio/WhatsApp_Image_2026-11-16_at_11.36.32_PM__2__d6b6023c.jpeg',
        pageLabel: 'Original Blank Certificate Format',
        bengaliPageLabel: 'মূল মুদ্রিত শংসাপত্র ফর্ম',
        alt: 'Historical printed certificate format No. BSS/1/ from Bangiya Saha Samity, 52-B Indian Mirror Street, Calcutta identifying the Sunri community as a Scheduled Caste of West Bengal',
        bengaliAlt: 'বঙ্গীয় সাহা সমিতির ঐতিহাসিক শুঁড়ি সমাজ পরিচিতি শংসাপত্রের মুদ্রিত ফর্ম (নং BSS/1/)',
        downloadName: 'Bangiya-Saha-Samity-Sunri-Certificate-Format-BSS-1.jpg',
      },
    ],
  },

  // =========================================================================
  // SECTION 03: GOVERNMENT CORRESPONDENCE & REPRESENTATIONS
  // =========================================================================
  {
    id: 'doc-2023-rajbhavan',
    sectionId: 'section-correspondence',
    title: "Raj Bhavan / Governor's Secretariat Correspondence",
    bengaliTitle: 'রাজভবন / পশ্চিমবঙ্গ রাজ্যপাল সচিবালয়ের সরকারি পত্র',
    date: '13 April 2023',
    bengaliDate: '১৩ এপ্রিল ২০২৩',
    category: 'Government Correspondence',
    bengaliCategory: 'সরকারি চিঠিপত্র',
    issuingAuthority:
      "Suman Paul, Assistant Secretary to the Govt. of West Bengal, Governor's Secretariat, Raj Bhavan, Kolkata – 700 062",
    bengaliIssuingAuthority:
      'সুমন পাল, সহকারী সচিব, পশ্চিমবঙ্গ সরকার, রাজ্যপাল সচিবালয়, রাজভবন, কলকাতা – ৭০০ ০৬২',
    referenceNumber: 'No. 926-G · Ref: Samity Letter No. B/S/S/57-2023 dated 20.03.2023',
    bengaliReferenceNumber: 'নং ৯২৬-জি · সূত্র: সমিতির পত্র নং B/S/S/57-2023 (২০.০৩.২০২৩)',
    description:
      'An official communication issued from the Governor’s Secretariat, Raj Bhavan, Kolkata, addressed to Sri Subir Saha, Secretary of Bangiya Saha Samity. Responding to the Samity’s letter dated 20 March 2023 concerning the celebration of the 132nd Birth Anniversary of Baba Saheb Dr. Bhim Rao Ambedkar, the Secretariat requests programme details and the measurement of the statue for the perusal of the Hon’ble Governor of West Bengal.',
    bengaliDescription:
      'পশ্চিমবঙ্গের রাজ্যপাল সচিবালয় (রাজভবন, কলকাতা) থেকে বঙ্গীয় সাহা সমিতির সম্পাদক শ্রী সুবীর সাহার নিকট প্রেরিত সরকারি চিঠি। বাবাসাহেব ড. ভীমরাও আম্বেদকরের ১৩২তম জন্মজয়ন্তী উদযাপন উপলক্ষে সমিতির ২০ মার্চ ২০২৩ তারিখের পত্রের প্রত্যুত্তরে মাননীয় রাজ্যপালের অবগতির জন্য অনুষ্ঠানের বিবরণ ও মূর্তির পরিমাপ চাওয়া হয়েছে।',
    pages: [
      {
        src: '/assets/aistudio/WhatsApp_Image_2026-11-16_at_11.36.28_PM__1__63cd88cd.jpeg',
        pageLabel: 'Raj Bhavan Letter No. 926-G',
        bengaliPageLabel: 'রাজভবনের পত্র নং ৯২৬-জি',
        alt: "Official letter No. 926-G dated 13 April 2023 from the Governor's Secretariat, Raj Bhavan, Kolkata to Bangiya Saha Samity regarding Dr. B. R. Ambedkar's 132nd Birth Anniversary",
        bengaliAlt: 'ড. বি. আর. আম্বেদকরের ১৩২তম জন্মজয়ন্তী উপলক্ষে ১৩ এপ্রিল ২০২৩ তারিখের রাজভবনের পত্র নং ৯২৬-জি',
        downloadName: 'Raj-Bhavan-Letter-926-G-13-Apr-2023.jpg',
      },
    ],
  },
  {
    id: 'doc-1959-invitation',
    sectionId: 'section-correspondence',
    title: 'Historical Bengali Invitation — Felicitation of Arati Saha & Dr. Bimal Chandra',
    bengaliTitle: 'ঐতিহাসিক বাংলা নিমন্ত্রণপত্র — আরতী সাহা ও ডা. বিমল চন্দ্রের সংবর্ধনা',
    date: '6 Agrahayan 1366 BS (Event: 12 Agrahayan 1366 BS / Nov 1959)',
    bengaliDate: '৬ই অগ্রহায়ণ, ১৩৬৬ সাল (অনুষ্ঠান: ১২ই অগ্রহায়ণ ১৩৬৬ / নভেম্বর ১৯৫৯)',
    category: 'Historical Invitation',
    bengaliCategory: 'ঐতিহাসিক নিমন্ত্রণপত্র',
    issuingAuthority:
      'Bangiya Saha Samity, 52B Indian Mirror Street, Kolkata – 13 (Secretary: Sri Mahitosh Saha, B.Sc., B.E., C.E.)',
    bengaliIssuingAuthority:
      'বঙ্গীয় সাহা সমিতি, ৫২বি ইন্ডিয়ান মিরর স্ট্রিট, কলকাতা–১৩ (সম্পাদক: শ্রী মহীতোষ সাহা)',
    referenceNumber: 'Venue: 77 Maniktala Street, Kolkata – 6 (Maa Jagat Janani Temple)',
    bengaliReferenceNumber: 'স্থান: ৭৭ মানিকতলা স্ট্রিট, কলকাতা–৬ (শ্রীশ্রীজগজ্জননী মাতাঠাকুরাণীর মন্দির)',
    description:
      'A remarkably preserved Bengali calligraphic invitation from November 1959 (12 Agrahayan 1366 BS) announcing Bangiya Saha Samity’s public felicitation of Miss Arati Saha and Dr. Bimal Chandra at 77 Maniktala Street following their historic crossing of the English Channel. The card notes that Samity President Sri Arabinda Saha presided over the ceremony, with Hon’ble Sri Ashutosh Mullick, Deputy Speaker of the West Bengal Legislative Assembly, serving as Chief Guest.',
    bengaliDescription:
      '১৩৬৬ বঙ্গাব্দের অগ্রহায়ণ মাসে (নভেম্বর ১৯৫৯) মুদ্রিত এই দুষ্প্রাপ্য বাংলা নিমন্ত্রণপত্রে ইংলিশ চ্যানেল অতিক্রমের ঐতিহাসিক সাফল্যের জন্য কুমারী আরতী সাহা ও ডা. বিমল চন্দ্রকে ৭৭ মানিকতলা স্ট্রিটে শ্রীশ্রীজগজ্জননী মন্দির প্রাঙ্গণে বঙ্গীয় সাহা সমিতির পক্ষ থেকে সংবর্ধনার ঘোষণা করা হয়। এতে সভাপতি শ্রী অরবিন্দ সাহা এবং প্রধান অতিথি পশ্চিমবঙ্গ বিধানসভার ডেপুটি স্পিকার মাননীয় শ্রী আশুতোষ মল্লিকের নাম উল্লিখিত রয়েছে।',
    pages: [
      {
        src: '/assets/aistudio/WhatsApp_Image_2026-11-16_at_11.36.31_PM__2__bc34d5d6.jpeg',
        pageLabel: '1959 Felicitation Invitation',
        bengaliPageLabel: '১৯৫৯-এর সংবর্ধনা নিমন্ত্রণপত্র',
        alt: 'Historical 1959 Bengali invitation card from Bangiya Saha Samity dated 6 Agrahayan 1366 BS for the felicitation of Arati Saha and Dr. Bimal Chandra at 77 Maniktala Street',
        bengaliAlt: 'আরতী সাহা ও ডা. বিমল চন্দ্রের সংবর্ধনা উপলক্ষে বঙ্গীয় সাহা সমিতির ১৩৬৬ বঙ্গাব্দের ঐতিহাসিক নিমন্ত্রণপত্র',
        downloadName: 'Bangiya-Saha-Samity-Invitation-1366BS-1959.jpg',
      },
    ],
  },
  {
    id: 'doc-1943-congratulatory',
    sectionId: 'section-correspondence',
    title: 'Historical Congratulatory Address to Shri Banku Bihari Mondal, M.L.A.',
    bengaliTitle: 'শ্রীযুক্ত বঙ্কুবিহারী মণ্ডল (এম.এল.এ.)-কে প্রদত্ত ঐতিহাসিক অভিনন্দন পত্র',
    date: '8 Shravan 1350 BS (Annotated 1944 on Print)',
    bengaliDate: '৮ই শ্রাবণ, ১৩৫০ সাল (মুদ্রণে ১৯৪৪ উল্লিখিত)',
    category: 'Historical Address',
    bengaliCategory: 'ঐতিহাসিক অভিনন্দন পত্র',
    issuingAuthority: 'Members of Bangiya Saha Samity, Calcutta',
    bengaliIssuingAuthority: 'বঙ্গীয় সাহা সমিতির সভ্যবৃন্দ, কলিকাতা',
    referenceNumber:
      'Addressed to: Shri Banku Bihari Mondal, B.L., M.L.A., Parliamentary Secretary to the Government of Bengal',
    bengaliReferenceNumber:
      'প্রাপক: শ্রীযুক্ত বঙ্কুবিহারী মণ্ডল, বি.এল., এম.এল.এ., বাঙ্গলা গভর্ণমেন্টের পার্লামেন্টারী সেক্রেটারী',
    description:
      'Framed in a classic Bengali decorative border, this historical congratulatory address ("Abhinandan Patra") was presented by the members of Bangiya Saha Samity to Shri Banku Bihari Mondal, B.L., M.L.A., upon his appointment as Parliamentary Secretary to the Government of Bengal. The text recalls that the Samity had once awarded him its very first gold medal as a meritorious student and honours his lifelong service as President and dedicated servant of the community.',
    bengaliDescription:
      'কারুকার্যময় ঐতিহাসিক বর্ডারযুক্ত এই বাংলা অভিনন্দন পত্রটি বাঙ্গলা গভর্ণমেন্টের পার্লামেন্টারী সেক্রেটারী পদে নিযুক্ত হওয়ার পর শ্রীযুক্ত বঙ্কুবিহারী মণ্ডল, বি.এল., এম.এল.এ.-কে বঙ্গীয় সাহা সমিতির সভ্যবৃন্দের পক্ষ থেকে নিবেদন করা হয়েছিল। এতে উল্লেখ আছে, সমাজের কৃতী ছাত্র হিসেবে সমিতি একদিন তাঁকে সর্বপ্রথম স্বর্ণপদক প্রদান করেছিল এবং সভাপতি ও সেবক রূপে সমাজের কল্যাণে তাঁর অসামান্য অবদান চিরস্মরণীয়।',
    pages: [
      {
        src: '/assets/aistudio/WhatsApp_Image_2026-11-16_at_11.36.26_PM_76ac1dcb.jpeg',
        pageLabel: 'Congratulatory Address (1350 BS)',
        bengaliPageLabel: 'অভিনন্দন পত্র (১৩৫০ বঙ্গাব্দ)',
        alt: 'Historical Bengali congratulatory address dated 8 Shravan 1350 BS from the members of Bangiya Saha Samity to Shri Banku Bihari Mondal, B.L., M.L.A., Parliamentary Secretary to the Government of Bengal',
        bengaliAlt: '৮ই শ্রাবণ ১৩৫০ সালে শ্রীযুক্ত বঙ্কুবিহারী মণ্ডলকে বঙ্গীয় সাহা সমিতির প্রদত্ত ঐতিহাসিক অভিনন্দন পত্র',
        downloadName: 'Bangiya-Saha-Samity-Address-Banku-Bihari-Mondal-1350BS.jpg',
      },
    ],
  },

  // =========================================================================
  // SECTION 04: HISTORICAL ACTIVITIES, NEWSPAPER ARCHIVES & PUBLICATIONS
  // =========================================================================
  {
    id: 'doc-2026-anandabazar',
    sectionId: 'section-newspapers',
    title: 'Anandabazar Patrika — "Biplabike Smaran" (Remembering the Revolutionary)',
    bengaliTitle: 'আনন্দবাজার পত্রিকা — "বিপ্লবীকে স্মরণ" (গোপীনাথ সাহা স্মরণ)',
    date: '2 March 2026 (Monday, Page 8)',
    bengaliDate: '২রা মার্চ, ২০২৬ (সোমবার, পৃষ্ঠা ৮)',
    category: 'Newspaper Clipping',
    bengaliCategory: 'সংবাদপত্র প্রতিবেদন',
    issuingAuthority: 'Anandabazar Patrika (Kolkata City Edition)',
    bengaliIssuingAuthority: 'আনন্দবাজার পত্রিকা (কলকাতা শহর সংস্করণ)',
    referenceNumber: '17 Falgun 1432 · Page 8',
    bengaliReferenceNumber: '১৭ ফাল্গুন ১৪৩২ · পৃষ্ঠা ৮',
    description:
      'A highlighted newspaper clipping from Anandabazar Patrika dated 2 March 2026 reporting Bangiya Saha Samity’s observance of the 102nd martyrdom anniversary of young revolutionary Gopinath Saha at its 52B, Indian Mirror Street office. Attended by family members of Gopinath Saha and relatives of contemporary revolutionaries, the report quotes Samity Secretary Subir Saha emphasizing the shared responsibility of passing the legacy of freedom fighters to future generations.',
    bengaliDescription:
      '২রা মার্চ ২০২৬ তারিখের আনন্দবাজার পত্রিকার কলকাতা সংস্করণে প্রকাশিত "বিপ্লবীকে স্মরণ" শীর্ষক সংবাদ প্রতিবেদন। এতে ৫২বি ইন্ডিয়ান মিরর স্ট্রিটে বঙ্গীয় সাহা সমিতির কার্যালয়ে বিপ্লবী গোপীনাথ সাহার ১০২তম প্রয়াণ দিবস উদযাপন, গোপীনাথ সাহা ও সমসাময়িক বিপ্লবীদের পরিজনদের উপস্থিতি এবং সম্পাদক সুবীর সাহার বক্তব্য নথিভুক্ত হয়েছে।',
    pages: [
      {
        src: '/assets/aistudio/WhatsApp_Image_2026-11-16_at_11.36.26_PM__1__f1018556.jpeg',
        pageLabel: 'Anandabazar Patrika (2 Mar 2026)',
        bengaliPageLabel: 'আনন্দবাজার পত্রিকা (২ মার্চ ২০২৬)',
        alt: 'Anandabazar Patrika clipping dated 2 March 2026 titled Biplabike Smaran covering Bangiya Saha Samity observance of the 102nd martyrdom anniversary of revolutionary Gopinath Saha',
        bengaliAlt: '২রা মার্চ ২০২৬ আনন্দবাজার পত্রিকায় প্রকাশিত বিপ্লবী গোপীনাথ সাহার ১০২তম প্রয়াণ দিবসের সংবাদ প্রতিবেদন',
        downloadName: 'Anandabazar-Patrika-Gopinath-Saha-2-Mar-2026.jpg',
      },
    ],
  },
  {
    id: 'doc-2021-eisamay-allegations',
    sectionId: 'section-newspapers',
    title: 'Ei Samay (Young Bengal) — Newspaper Report of Occupancy Allegations',
    bengaliTitle: 'এই সময় (ইয়ং বেঙ্গল) — "দলিত বাড়ি জবরদখলের অভিযোগ"',
    date: '23 March 2021 (Tuesday, Page 6)',
    bengaliDate: '২৩ মার্চ ২০২১ (মঙ্গলবার, পৃষ্ঠা ৬)',
    category: 'Media Archive · Report of Allegations',
    bengaliCategory: 'সংবাদপত্র সংরক্ষণাগার · অভিযোগ সংক্রান্ত প্রতিবেদন',
    issuingAuthority: 'Ei Samay — Young Bengal / Global Bengali (Byline: Parthasarathi Sengupta)',
    bengaliIssuingAuthority: 'এই সময় — ইয়ং বেঙ্গল / গ্লোবাল বেঙ্গলি (প্রতিবেদক: পার্থসারথি সেনগুপ্ত)',
    referenceNumber: '9 Chaitra 1427 · Kolkata City Edition, Page 6',
    bengaliReferenceNumber: '৯ চৈত্র ১৪২৭ · কলকাতা শহর সংস্করণ, পৃষ্ঠা ৬',
    description:
      'Published in Ei Samay on 23 March 2021, this newspaper article reports allegations raised by Bangiya Saha Samity regarding the occupancy and operation of a printing press on the ground floor of the 52B, Indian Mirror Street premises, where the Samity runs its student hostel. The report records statements from General Secretary Subir Saha regarding representations made to the National Commission for Scheduled Castes as well as the response from the political organisation named in the report.',
    bengaliDescription:
      '২৩ মার্চ ২০২১ তারিখে "এই সময়" পত্রিকায় প্রকাশিত পার্থসারথি সেনগুপ্তের সংবাদ প্রতিবেদন। এতে ৫২বি ইন্ডিয়ান মিরর স্ট্রিটে বঙ্গীয় সাহা সমিতির ভবনের একতলার একাংশে ভাড়ার শর্ত ও ছাপাখানা পরিচালনা সংক্রান্ত অভিযোগ, ন্যাশনাল কমিশন ফর শিডিউল্ড কাস্টস-এ আবেদনের কথা এবং সংশ্লিষ্ট রাজনৈতিক দলের প্রতিনিধির বক্তব্য প্রকাশিত হয়েছে।',
    contextNote:
      'Editorial Note: This clipping is preserved strictly as a historical newspaper report documenting public allegations and counter-statements at the time of publication, and must not be read as an established judicial finding.',
    bengaliContextNote:
      'সম্পাদকীয় দ্রষ্টব্য: এটি শুধুমাত্র সংবাদপত্রে প্রকাশিত অভিযোগ ও উভয় পক্ষের বক্তব্যের ঐতিহাসিক মিডিয়া নথি হিসেবে সংরক্ষিত—একে কোনো প্রতিষ্ঠিত আদালতি রায় হিসেবে গণ্য করা উচিত নয়।',
    contextNoteTone: 'media',
    pages: [
      {
        src: '/assets/aistudio/WhatsApp_Image_2026-11-16_at_11.36.30_PM__2__bb00d4df.jpeg',
        pageLabel: 'Ei Samay Clipping (23 Mar 2021)',
        bengaliPageLabel: 'এই সময় প্রতিবেদন (২৩ মার্চ ২০২১)',
        alt: 'Ei Samay Young Bengal newspaper clipping dated 23 March 2021 reporting allegations regarding occupancy at Bangiya Saha Samity building at 52B Indian Mirror Street',
        bengaliAlt: '২৩ মার্চ ২০২১ তারিখের এই সময় পত্রিকার প্রতিবেদন — দলিত বাড়ি জবরদখলের অভিযোগ',
        downloadName: 'Ei-Samay-Report-23-Mar-2021.jpg',
      },
    ],
  },
  {
    id: 'doc-2019-eisamay-reservation',
    sectionId: 'section-newspapers',
    title: 'Ei Samay (Young Bengal) — "Sangrakshane Satarka Banger Sangathan"',
    bengaliTitle: 'এই সময় (ইয়ং বেঙ্গল) — "সংরক্ষণে সতর্ক বঙ্গের সংগঠন"',
    date: '7 May 2019 (Tuesday, Page 9)',
    bengaliDate: '৭ই মে ২০১৯ (মঙ্গলবার, নবম পাতা)',
    category: 'Newspaper Clipping',
    bengaliCategory: 'সংবাদপত্র প্রতিবেদন',
    issuingAuthority: 'Ei Samay — Young Bengal / Global Bengali (Byline: Parthasarathi Sengupta)',
    bengaliIssuingAuthority: 'এই সময় — ইয়ং বেঙ্গল / গ্লোবাল বেঙ্গলি (প্রতিবেদক: পার্থসারথি সেনগুপ্ত)',
    referenceNumber: '23 Baishakh 1426 · Election Series "Vote-r Samay 2019", Page 9',
    bengaliReferenceNumber: '২৩ বৈশাখ ১৪২৬ · "ভোটের সময় ২০১৯", নবম পাতা',
    description:
      'A May 2019 public-affairs feature in Ei Samay examining how Bengal’s social organisations view reservation policies and economic vulnerability. The article quotes Bangiya Saha Samity Secretary Subir Saha emphasizing fair, transparent implementation of reservation alongside compassion across communities, and highlights how the Samity’s Indian Mirror Street student hostel—once restricted to Sunri students—has opened its doors to students of all backgrounds.',
    bengaliDescription:
      '৭ই মে ২০১৯ তারিখে "এই সময়" পত্রিকায় প্রকাশিত সামাজিক ও জনস্বার্থমূলক প্রতিবেদন। এতে সংরক্ষণ নীতির সুষ্ঠু রূপায়ণ ও আর্থিক অনগ্রসরতা নিয়ে বঙ্গীয় সাহা সমিতির সম্পাদক সুবীর সাহার বক্তব্য এবং ইন্ডিয়ান মিরর স্ট্রিটে সমিতির ছাত্রাবাসে বর্তমানে সকল বর্গের শিক্ষার্থীদের থাকার সুযোগের কথা তুলে ধরা হয়েছে।',
    pages: [
      {
        src: '/assets/aistudio/WhatsApp_Image_2026-11-16_at_11.36.26_PM__2__a9580bb1.jpeg',
        pageLabel: 'Ei Samay Clipping (7 May 2019)',
        bengaliPageLabel: 'এই সময় প্রতিবেদন (৭ মে ২০১৯)',
        alt: 'Ei Samay Young Bengal newspaper clipping dated 7 May 2019 titled Sangrakshane Satarka Banger Sangathan quoting Bangiya Saha Samity Secretary Subir Saha',
        bengaliAlt: '৭ই মে ২০১৯ এই সময় পত্রিকায় প্রকাশিত প্রতিবেদন — সংরক্ষণে সতর্ক বঙ্গের সংগঠন',
        downloadName: 'Ei-Samay-Sangrakshane-Satarka-7-May-2019.jpg',
      },
    ],
  },
  {
    id: 'doc-martyrs-publication',
    sectionId: 'section-newspapers',
    title: 'Historical Reference List of Bengali Revolutionaries Martyred on the Gallows',
    bengaliTitle: 'ফাঁসিতে প্রাণ বিসর্জনকারী বাঙালি বিপ্লবীদের ঐতিহাসিক তালিকা',
    date: 'Archival Reference Publication',
    bengaliDate: 'ঐতিহাসিক তথ্যসূত্র প্রকাশনা',
    category: 'Related Historical Publication',
    bengaliCategory: 'সংশ্লিষ্ট ঐতিহাসিক প্রকাশনা',
    issuingAuthority: "Cited Source: Who's Who of Indian Martyrs, Ed. by P. N. Chopra, Vol. I",
    bengaliIssuingAuthority: "তথ্যসূত্র: Who's Who of Indian Martyrs, সম্পাদনা: পি. এন. চোপড়া, প্রথম খণ্ড",
    referenceNumber: 'Lists 41 Bengali Revolutionaries (1908–1944) · Includes Entry No. 10: Gopinath Saha',
    bengaliReferenceNumber: '৪১ জন বাঙালি বিপ্লবীর তালিকা (১৯০৮–১৯৪৪) · ক্রমিক ১০: গোপীনাথ সাহা',
    description:
      'Preserved in the Samity’s reference collection, this printed Bengali roll documents 41 Bengali revolutionaries who laid down their lives on the gallows between 1908 and 1944, citing P. N. Chopra’s "Who’s Who of Indian Martyrs, Vol. I". It records each martyr’s name, age, date of execution, and prison—including Entry No. 10, revolutionary Gopinath Saha (aged 18, 1 March 1924, Alipore), whose legacy is commemorated annually by the community.',
    bengaliDescription:
      'পি. এন. চোপড়া সম্পাদিত "Who’s Who of Indian Martyrs, Vol. I" অবলম্বনে মুদ্রিত এই ঐতিহাসিক তালিকায় ১৯০৮ থেকে ১৯৪৪ সালের মধ্যে ফাঁসিতে প্রাণ বিসর্জনকারী ৪১ জন বাঙালি বিপ্লবীর নাম, বয়স, ফাঁসির তারিখ ও জেলের বিবরণ নথিভুক্ত আছে—যার ১০ নং ক্রমিকে ১৮ বছর বয়সী বিপ্লবী গোপীনাথ সাহার (০১.০৩.২৪, আলিপুর) নাম রয়েছে।',
    contextNote:
      'Archival Context: Included solely as a related historical reference publication preserved by the Samity for educational remembrance, not as a record of Samity institutional operations.',
    bengaliContextNote:
      'সংরক্ষণ প্রসঙ্গ: এটি শুধুমাত্র শিক্ষামূলক স্মরণ ও ঐতিহাসিক তথ্যসূত্র হিসেবে সংরক্ষিত একটি প্রকাশনা, সমিতির প্রাতিষ্ঠানিক কার্যক্রমের দলিল নয়।',
    contextNoteTone: 'reference',
    pages: [
      {
        src: '/assets/aistudio/WhatsApp_Image_2026-11-16_at_11.36.31_PM_4a4abbba.jpeg',
        pageLabel: 'Published Roll of 41 Martyrs',
        bengaliPageLabel: '৪১ জন শহিদ বিপ্লবীর তালিকা',
        alt: 'Historical Bengali published list of 41 Bengali revolutionaries executed between 1908 and 1944 citing Who is Who of Indian Martyrs by P. N. Chopra, including Gopinath Saha at entry 10',
        bengaliAlt: 'ফাঁসিতে প্রাণ বিসর্জনকারী ৪১ জন বাঙালি বিপ্লবীর ঐতিহাসিক তালিকা',
        downloadName: 'Bengali-Revolutionaries-Martyrs-Reference-List.jpg',
      },
    ],
  },

  // =========================================================================
  // SECTION 05: SOCIAL WELFARE & CHARITABLE CONTRIBUTIONS
  // =========================================================================
  {
    id: 'doc-2025-bodhipeet',
    sectionId: 'section-welfare',
    title: 'Bodhi Peet — Letter of Appreciation',
    bengaliTitle: 'বোধি পীঠ — কৃতজ্ঞতা ও প্রশংসাপত্র',
    date: '22 March 2025',
    bengaliDate: '২২ মার্চ ২০২৫',
    category: 'Appreciation Letter',
    bengaliCategory: 'কৃতজ্ঞতাপত্র',
    issuingAuthority:
      'Bodhi Peet — Home for the Differently Abled Persons (Estd. 1951, Salt Lake City, Kolkata – 700 091)',
    bengaliIssuingAuthority:
      'বোধি পীঠ — বিশেষভাবে সক্ষম ব্যক্তিদের আবাস (স্থাপিত ১৯৫১, সল্টলেক, কলকাতা–৭০০ ০৯১)',
    referenceNumber: 'Regd. No. SO036131 of 1982–83 · Signed: Debmalya Ray, Secretary',
    bengaliReferenceNumber: 'নিবন্ধন নং SO036131 (১৯৮২–৮৩) · স্বাক্ষর: দেবমাল্য রায়, সম্পাদক',
    description:
      'Dated 22 March 2025, this formal Letter of Appreciation from Bodhi Peet—a long-established home for differently abled persons in Salt Lake City, Kolkata—expresses deep gratitude to Bangiya Saha Samity for generous donations of food and other essential support throughout the year. Signed by Secretary Debmalya Ray, the letter acknowledges the Samity’s consistent contribution toward caring for orphaned and intellectually disabled residents.',
    bengaliDescription:
      '২২ মার্চ ২০২৫ তারিখে সল্টলেক স্থিত "বোধি পীঠ" (বিশেষভাবে সক্ষম ও অনাথ শিশুদের আবাস)-এর সম্পাদক দেবমাল্য রায় কর্তৃক প্রদত্ত এই প্রশংসাপত্রে সারা বছর ধরে খাদ্য ও অন্যান্য প্রয়োজনীয় সহায়তার জন্য বঙ্গীয় সাহা সমিতির প্রতি গভীর কৃতজ্ঞতা প্রকাশ করা হয়েছে।',
    pages: [
      {
        src: '/assets/aistudio/WhatsApp_Image_2026-11-16_at_11.36.29_PM__1__b1f0c6b0.jpeg',
        pageLabel: 'Bodhi Peet Letter (22 Mar 2025)',
        bengaliPageLabel: 'বোধি পীঠ প্রশংসাপত্র (২২ মার্চ ২০২৫)',
        alt: 'Letter of Appreciation dated 22 March 2025 from Bodhi Peet, Kolkata addressed to the Secretary of Bangiya Saha Samity acknowledging donations of food and support for orphaned and intellectually disabled residents',
        bengaliAlt: '২২ মার্চ ২০২৫ তারিখে বোধি পীঠ কর্তৃক বঙ্গীয় সাহা সমিতিকে প্রদত্ত কৃতজ্ঞতাপত্র',
        downloadName: 'Bodhi-Peet-Letter-of-Appreciation-22-Mar-2025.jpg',
      },
    ],
  },
  {
    id: 'doc-mangalam-thanks',
    sectionId: 'section-welfare',
    title: 'Mangalam Foundation — Letter of Thanks ("DEB-ABAS")',
    bengaliTitle: 'মঙ্গলম ফাউন্ডেশন — ধন্যবাদপত্র ("দেব-আবাস")',
    date: 'Archival Acknowledgement (Undated)',
    bengaliDate: 'প্রাতিষ্ঠানিক স্বীকৃতি (তারিখ অনুল্লিখিত)',
    category: 'Appreciation Letter',
    bengaliCategory: 'ধন্যবাদপত্র',
    issuingAuthority:
      'Mangalam Foundation (Regd. Office: 62/1, Girish Park North, Kolkata – 700 006)',
    bengaliIssuingAuthority:
      'মঙ্গলম ফাউন্ডেশন (নিবন্ধিত কার্যালয়: ৬২/১, গিরিশ পার্ক নর্থ, কলকাতা – ৭০০ ০০৬)',
    referenceNumber: 'Regd. No. IV-190303623/18 · Signed: Goutam Burman, Chairman',
    bengaliReferenceNumber: 'নিবন্ধন নং IV-190303623/18 · স্বাক্ষর: গৌতম বর্মণ, চেয়ারম্যান',
    description:
      'Addressed to Bangiya Saha Samity at 52B, Indian Mirror Street, Kolkata – 700013, this official Letter of Thanks from the Board of Trustees of Mangalam Foundation expresses heartfelt gratitude for the Samity’s support and co-operation towards "DEB-ABAS"—a free residential home serving 25 distressed and helpless elderly women. Signed by Chairman Goutam Burman, it documents the Samity’s humanitarian outreach beyond its own community.',
    bengaliDescription:
      'মঙ্গলম ফাউন্ডেশনের ট্রাস্টি বোর্ডের চেয়ারম্যান গৌতম বর্মণ স্বাক্ষরিত এই ধন্যবাদপত্রে ২৫ জন অসহায় ও দুস্থ প্রবীণ মহিলার জন্য বিনামূল্যে পরিচালিত আবাস "দেব-আবাস"-এ বঙ্গীয় সাহা সমিতির সদয় সহায়তা ও সহযোগিতার জন্য আন্তরিক কৃতজ্ঞতা জানানো হয়েছে।',
    pages: [
      {
        src: '/assets/aistudio/WhatsApp_Image_2026-11-16_at_11.36.29_PM__2__e553f04e.jpeg',
        pageLabel: 'Mangalam Foundation Letter of Thanks',
        bengaliPageLabel: 'মঙ্গলম ফাউন্ডেশনের ধন্যবাদপত্র',
        alt: 'Letter of Thanks from Mangalam Foundation signed by Chairman Goutam Burman addressed to Bangiya Saha Samity acknowledging support for DEB-ABAS, a free home for 25 distressed and helpless elderly women',
        bengaliAlt: '২৫ জন দুস্থ প্রবীণ মহিলার আবাস দেব-আবাসে সহায়তার জন্য মঙ্গলম ফাউন্ডেশনের ধন্যবাদপত্র',
        downloadName: 'Mangalam-Foundation-Letter-of-Thanks-Deb-Abas.jpg',
      },
    ],
  },
  {
    id: 'doc-photo-tv-donation',
    sectionId: 'section-welfare',
    title: 'Documentary Photograph — Television Donation Handover',
    bengaliTitle: 'প্রামাণ্য আলোকচিত্র — টেলিভিশন প্রদান অনুষ্ঠান',
    date: 'Community Welfare Archive Photograph',
    bengaliDate: 'সমাজকল্যাণ সংরক্ষণাগার আলোকচিত্র',
    category: 'Activity Photograph',
    bengaliCategory: 'কার্যক্রমের আলোকচিত্র',
    issuingAuthority: 'Bangiya Saha Samity Social Welfare Archive',
    bengaliIssuingAuthority: 'বঙ্গীয় সাহা সমিতি সমাজকল্যাণ সংরক্ষণাগার',
    description:
      'An original photograph from Bangiya Saha Samity’s social welfare archive capturing representatives formally presenting a new Lloyd Android TV during a community programme. Visual records such as this stand alongside written acknowledgements to document hands-on material support extended by members of the Samity.',
    bengaliDescription:
      'বঙ্গীয় সাহা সমিতির সমাজকল্যাণ সংরক্ষণাগার থেকে সংগৃহীত এই মূল আলোকচিত্রে এক সামাজিক অনুষ্ঠানে প্রতিনিধিদের একটি নতুন লয়েড অ্যান্ড্রয়েড টিভি (Lloyd Android TV) হস্তান্তর করার মুহূর্ত ধারণ করা হয়েছে, যা সমিতির প্রত্যক্ষ সেবামূলক উদ্যোগের সাক্ষ্য বহন করে।',
    isPhotograph: true,
    pages: [
      {
        src: '/assets/aistudio/WhatsApp_Image_2026-11-16_at_11.36.30_PM__1__dd5dcb45.jpeg',
        pageLabel: 'Television Donation Photograph',
        bengaliPageLabel: 'টেলিভিশন হস্তান্তরের আলোকচিত্র',
        alt: 'Photograph showing Bangiya Saha Samity representatives handing over a Lloyd Android TV box during a charitable donation event',
        bengaliAlt: 'বঙ্গীয় সাহা সমিতির প্রতিনিধিদের লয়েড অ্যান্ড্রয়েড টিভি হস্তান্তরের আলোকচিত্র',
        downloadName: 'Bangiya-Saha-Samity-TV-Donation-Photo.jpg',
      },
    ],
  },
  {
    id: 'doc-photo-supplies-donation',
    sectionId: 'section-welfare',
    title: 'Documentary Photograph — Packaged Supplies Handover',
    bengaliTitle: 'প্রামাণ্য আলোকচিত্র — খাদ্যসামগ্রী ও ত্রাণ হস্তান্তর',
    date: 'Community Welfare Archive Photograph',
    bengaliDate: 'সমাজকল্যাণ সংরক্ষণাগার আলোকচিত্র',
    category: 'Activity Photograph',
    bengaliCategory: 'কার্যক্রমের আলোকচিত্র',
    issuingAuthority: 'Bangiya Saha Samity, 52B Indian Mirror Street, Kolkata',
    bengaliIssuingAuthority: 'বঙ্গীয় সাহা সমিতি, ৫২বি ইন্ডিয়ান মিরর স্ট্রিট, কলকাতা',
    description:
      'Photographed in front of the Bangiya Saha Samity (West Bengal Sunri Samaj) central office banner at 52B, Indian Mirror Street, this original image documents representatives handing over cartons of packaged food supplies (Anmol Marie Plus) for charitable distribution, capturing the organisation’s grassroots relief work.',
    bengaliDescription:
      'কলকাতার ৫২বি, ইন্ডিয়ান মিরর স্ট্রিটে বঙ্গীয় সাহা সমিতির (পঃবঃ শুঁড়ি সমাজ) ব্যানারের সামনে ধারণকৃত এই মূল আলোকচিত্রে প্রতিনিধিদের খাদ্যসামগ্রীর (প্যাকেটজাত বিস্কুটের কার্টন) হস্তান্তরের দৃশ্য দেখা যাচ্ছে, যা সমিতির ধারাবাহিক মানবিক সহায়তার নিদর্শন।',
    isPhotograph: true,
    pages: [
      {
        src: '/assets/aistudio/WhatsApp_Image_2026-11-16_at_11.36.30_PM_81fad599.jpeg',
        pageLabel: 'Supplies Handover Photograph',
        bengaliPageLabel: 'খাদ্যসামগ্রী হস্তান্তরের আলোকচিত্র',
        alt: 'Photograph showing representatives handing over a carton of packaged supplies in front of the Bangiya Saha Samity banner at 52B Indian Mirror Street, Kolkata',
        bengaliAlt: '৫২বি ইন্ডিয়ান মিরর স্ট্রিটে বঙ্গীয় সাহা সমিতির ব্যানারের সামনে খাদ্যসামগ্রী হস্তান্তরের আলোকচিত্র',
        downloadName: 'Bangiya-Saha-Samity-Supplies-Handover-Photo.jpg',
      },
    ],
  },
  {
    id: 'doc-2025-ashram-request',
    sectionId: 'section-welfare',
    title: 'Ghosherchak Shibalay Mandir Ashram — Community Assistance Request',
    bengaliTitle: 'ঘোষেরচক শিবালয় মন্দির আশ্রম — ২৫০ জন শিক্ষার্থীর জন্য সহায়তা আবেদন',
    date: '1 December 2025',
    bengaliDate: '১ ডিসেম্বর ২০২৫',
    category: 'Community Assistance Request',
    bengaliCategory: 'সামাজিক সহায়তার আবেদনপত্র',
    issuingAuthority:
      'Rajmohan Bairagi, Maharaj & Treasurer, Ghosherchak Shibalay Mandir (Joynagar / Bakultala, South 24 Parganas – 743338)',
    bengaliIssuingAuthority:
      'শ্রী রাজমোহন বৈরাগী, মহারাজ ও কোষাধ্যক্ষ, ঘোষেরচক শিবালয় মন্দির (জয়নগর / বকুলতলা, দক্ষিণ ২৪ পরগনা)',
    referenceNumber: 'Dated 01-12-2025 · Addressed to The Secretary, Bangiya Saha Samity, Kolkata',
    bengaliReferenceNumber: 'তারিখ: ০১-১২-২০২৫ · প্রাপক: সম্পাদক, বঙ্গীয় সাহা সমিতি, কলকাতা',
    description:
      'A handwritten Bengali letter dated 1 December 2025 from Ghosherchak Shibalay Mandir in Joynagar, South 24 Parganas, requesting pens, notebooks, pencils, and fruit cakes for 250 boys and girls who gather at the village temple ashram for study and prayer. The letter gratefully notes that Secretary Sri Subir Saha had visited the previous year with cakes and biscuits, and mentions that the ashram respectfully observes the anniversaries of 200 luminaries including revolutionary Gopinath Saha.',
    bengaliDescription:
      '১ ডিসেম্বর ২০২৫ তারিখে দক্ষিণ ২৪ পরগনার জয়নগরের ঘোষেরচক শিবালয় মন্দিরের মহারাজ শ্রী রাজমোহন বৈরাগী কর্তৃক বঙ্গীয় সাহা সমিতির সম্পাদকের নিকট প্রেরিত হস্তলিখিত বাংলা পত্র। এতে আশ্রমে আগত ২৫০ জন ছেলেমেয়ের জন্য পেন, খাতা, পেন্সিল ও ফ্রুট কেকের অনুরোধ জানানো হয়েছে এবং গত বছর সম্পাদক শ্রী সুবীর সাহার কেক ও বিস্কুট প্রদানের কথা কৃতজ্ঞতার সাথে স্মরণ করা হয়েছে।',
    pages: [
      {
        src: '/assets/aistudio/WhatsApp_Image_2026-11-16_at_11.36.29_PM_9e754b4c.jpeg',
        pageLabel: 'Handwritten Bengali Request (01-12-2025)',
        bengaliPageLabel: 'হস্তলিখিত বাংলা আবেদনপত্র (০১-১২-২০২৫)',
        alt: 'Handwritten Bengali letter dated 1 December 2025 from Rajmohan Bairagi of Ghosherchak Shibalay Mandir, Joynagar to Bangiya Saha Samity requesting pens, notebooks, pencils, and fruit cakes for 250 children',
        bengaliAlt: '১ ডিসেম্বর ২০২৫ তারিখে ঘোষেরচক শিবালয় মন্দির থেকে ২৫০ জন ছেলেমেয়ের জন্য শিক্ষা ও খাদ্য সহায়তার হস্তলিখিত বাংলা আবেদনপত্র',
        downloadName: 'Ghosherchak-Shibalay-Mandir-Request-01-Dec-2025.jpg',
      },
    ],
  },
];

export const APPRECIATION_CROSS_LINKS = [
  {
    docId: 'doc-2025-bodhipeet',
    anchorSectionId: 'section-welfare',
    subtitle: '22 March 2025 · Salt Lake, Kolkata',
    bengaliSubtitle: '২২ মার্চ ২০২৫ · সল্টলেক, কলকাতা',
    summary:
      'Acknowledges consistent year-round donations of food and essential support for orphaned and intellectually disabled residents.',
    bengaliSummary:
      'অনাথ ও বিশেষভাবে সক্ষম আবাসিকদের জন্য সারা বছর খাদ্য ও প্রয়োজনীয় সহায়তার স্বীকৃতি।',
  },
  {
    docId: 'doc-mangalam-thanks',
    anchorSectionId: 'section-welfare',
    subtitle: 'DEB-ABAS · Free Home for 25 Elderly Women',
    bengaliSubtitle: 'দেব-আবাস · ২৫ জন দুস্থ প্রবীণ মহিলার আবাস',
    summary:
      'Board of Trustees Letter of Thanks recognising Bangiya Saha Samity’s support towards DEB-ABAS.',
    bengaliSummary:
      '২৫ জন অসহায় প্রবীণ মহিলার আবাস "দেব-আবাস"-এ সমিতির সহায়তার জন্য ট্রাস্টি বোর্ডের ধন্যবাদপত্র।',
  },
  {
    docId: 'doc-1943-congratulatory',
    anchorSectionId: 'section-correspondence',
    subtitle: '8 Shravan 1350 BS · Public Representative Record',
    bengaliSubtitle: '৮ই শ্রাবণ ১৩৫০ · জনপ্রতিনিধি সংবর্ধনা নথি',
    summary:
      'Historical congratulatory address presented to Shri Banku Bihari Mondal, B.L., M.L.A., Parliamentary Secretary to the Govt. of Bengal.',
    bengaliSummary:
      'বাঙ্গলা গভর্ণমেন্টের পার্লামেন্টারী সেক্রেটারী শ্রীযুক্ত বঙ্কুবিহারী মণ্ডল, এম.এল.এ.-কে প্রদত্ত ঐতিহাসিক অভিনন্দন পত্র।',
  },
];
