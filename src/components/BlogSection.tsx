import React, { useState } from 'react';
import { BookOpen, Calendar, ArrowRight, FileText, Users, Bookmark, Sparkles } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const BlogSection: React.FC = () => {
  const { isBengali } = useLanguage();

  const publications = [
    {
      id: 'pub-1',
      title: isBengali
        ? '১৯৫০ সালে ভারতের সংবিধানে ড. বাবাসাহেব আম্বেদকর কর্তৃক শুঁড়ি সমাজের তপশিলি জাতি অন্তর্ভুক্তি'
        : 'Historic 1950 Constitutional Inclusion of Sunri Community by Dr. Baba Saheb Ambedkar',
      category: isBengali ? 'সাংবিধানিক ইতিবৃত্ত' : 'Constitutional Archive',
      date: isBengali ? 'ঐতিহাসিক নথিপত্র' : 'Historical Record',
      readTime: isBengali ? '৬ মিনিট পাঠ' : '6 min read',
      excerpt: isBengali
        ? '১৯৫০ সালে ভারতের সংবিধানে খসড়া কমিটির সভাপতি ড. বাবাসাহেব আম্বেদকর শুঁড়ি সম্প্রদায়কে তপশিলি জাতি হিসেবে অন্তর্ভুক্ত করেন। সংরক্ষণ, সমতা ও মর্যাদা সুরক্ষায় এর তাৎপর্য অপরিসীম।'
        : 'An in-depth analysis of how Dr. Baba Saheb Ambedkar included the Sunri community in the 1950 Constitution of India, safeguarding representation in the legislature, employment, and education.',
      source: isBengali ? 'বঙ্গীয় সাহা সমিতি প্রকাশনা সেল' : 'BSS Constitutional Research Wing'
    },
    {
      id: 'pub-2',
      title: isBengali
        ? '৫২বি ইন্ডিয়ান মিরর স্ট্রিটের ৩য় তলায় গ্রামীণ ছাত্রদের জন্য ছাত্রাবাস ও অতিথি কক্ষ ব্যবস্থা'
        : 'Rural Students Hostel & Guest Room at 52B Indian Mirror Street (Central Office)',
      category: isBengali ? 'শিক্ষা, ছাত্রাবাস ও অতিথি কক্ষ' : 'Student Welfare & Hostel',
      date: isBengali ? 'বার্ষিক বুলেটিন' : 'Annual Bulletin',
      readTime: isBengali ? '৪ মিনিট পাঠ' : '4 min read',
      excerpt: isBengali
        ? '১৯৫৬ সালে জমি ক্রয়ের পর পুনর্নির্মিত চারতলা কেন্দ্রীয় কার্যালয় ভবনে গ্রামীণ ছাত্রছাত্রীদের আবাসিক ব্যবস্থা করা হয় এবং সমাজের সদস্যদের জন্য অতিথি কক্ষ (Guest Room) সুবিধা রয়েছে।'
        : 'Established in our four-storeyed Central Office purchased in 1956, residential hostel arrangements are made for rural students pursuing higher degrees in Kolkata, along with a Guest Room facility for community members.',
      source: isBengali ? 'ছাত্রকল্যাণ ও ছাত্রাবাস উপ-সমিতি' : 'Student Hostel Sub-Committee'
    },
    {
      id: 'pub-3',
      title: isBengali
        ? 'নারী উচ্চশিক্ষায় বিশেষ অগ্রাধিকার, শিক্ষাপ্রতিষ্ঠান ও পাঠাগার প্রতিষ্ঠা: শুঁড়ি সমাজের প্রধান লক্ষ্য'
        : 'Educational Support with Special Priority for Female Higher Education & Community Libraries',
      category: isBengali ? 'সমাজ সংস্কার ও শিক্ষা' : 'Social Reform & Education',
      date: isBengali ? 'সাময়িক পত্রিকা' : 'Periodical Journal',
      readTime: isBengali ? '৫ মিনিট পাঠ' : '5 min read',
      excerpt: isBengali
        ? 'আমাদের প্রতিষ্ঠাকালীন সংবিধানের প্রথম উদ্দেশ্য অনুসারে সমাজে কুপ্রথা দূর করে নারী উচ্চশিক্ষায় বিশেষ অগ্রাধিকার, শুধুমাত্র আমাদের সম্প্রদায়ের জন্য শিক্ষার উদ্দেশ্যে সামাজিক সহায়তা এবং জেলায় জেলায় অধ্যয়ন কেন্দ্র ও পাঠাগার স্থাপন।'
        : 'Following Objective 1 of our society constitution: educational support with special priority for female higher education, Social Help for Educational Purpose (Only for Our Community), establishing libraries, and eradicating harmful customs.',
      source: isBengali ? 'সাময়িকী ও পুস্তিকা প্রকাশনা' : 'Periodical Pamphlet Division'
    }
  ];

  const [activeArticle, setActiveArticle] = useState<string | null>(null);

  return (
    <section id="blog" className="py-16 bg-[#FAF7F2] border-b border-[#8A5A36]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#8A5A36]/10 text-xs font-bold text-[#8A5A36] uppercase tracking-wider mb-2">
            <BookOpen className="w-3.5 h-3.5" />
            <span>{isBengali ? 'সাময়িকী, পুস্তিকা ও প্রকাশনা' : 'Journals, Periodicals & Blog'}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-serif-heading font-bold text-[#2D6A4F]">
            {isBengali
              ? 'বঙ্গীয় সাহা সমিতি বার্তা ও গবেষণা সাময়িকী'
              : 'Bangiya Saha Samity Journal & Publications'}
          </h2>

          <p className="mt-3 text-base text-[#6C4A31]">
            {isBengali
              ? 'সংবিধানের উদ্দেশ্য অনুসারে নিয়মিত সাময়িকী, পুস্তিকা ও গ্রন্থ প্রকাশনা, সম্মেলন এবং শুঁড়ি সমাজের অগ্রগতিমূলক বার্তা।'
              : 'As mandated by our constitution: controlling publication of journals, periodicals, pamphlets, and books, and holding community assemblies across West Bengal.'}
          </p>
        </div>

        {/* Blog Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {publications.map((pub) => (
            <article
              key={pub.id}
              className="rounded-2xl bg-[#FAF7F2] border-2 border-[#8A5A36]/20 p-6 flex flex-col justify-between hover:shadow-md hover:border-[#2D6A4F] transition-all group"
            >
              <div className="space-y-3.5">
                <div className="flex items-center justify-between text-xs">
                  <span className="px-2.5 py-0.5 rounded-full bg-[#2D6A4F]/10 text-[#2D6A4F] font-bold">
                    {pub.category}
                  </span>
                  <span className="text-[#8A5A36] flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {pub.date}
                  </span>
                </div>

                <h3 className="text-lg font-serif-heading font-bold text-[#2D6A4F] group-hover:text-[#1B4332] leading-snug transition-colors">
                  {pub.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#554336] leading-relaxed line-clamp-3">
                  {pub.excerpt}
                </p>
              </div>

              <div className="pt-5 mt-4 border-t border-[#8A5A36]/15 flex items-center justify-between text-xs">
                <span className="text-[#8A5A36] font-medium">{pub.source}</span>
                <button
                  onClick={() => setActiveArticle(pub.id)}
                  className="font-bold text-[#2D6A4F] hover:text-[#1B4332] flex items-center gap-1 transition-colors"
                >
                  <span>{isBengali ? 'পড়ুন' : 'Read'}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* Active Article Modal */}
        {activeArticle && (
          <div 
            className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 animate-fadeIn"
            onClick={() => setActiveArticle(null)}
          >
            <div 
              className="bg-[#FAF7F2] rounded-2xl max-w-2xl w-full p-6 sm:p-8 border-2 border-[#2D6A4F] shadow-2xl relative space-y-4"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-start">
                <span className="text-xs font-bold px-3 py-1 rounded-full bg-[#2D6A4F]/10 text-[#2D6A4F]">
                  {publications.find((p) => p.id === activeArticle)?.category}
                </span>
                <button
                  onClick={() => setActiveArticle(null)}
                  className="text-stone-400 hover:text-stone-700 font-bold text-lg"
                >
                  ✕
                </button>
              </div>

              <h3 className="text-2xl font-serif-heading font-bold text-[#2D6A4F]">
                {publications.find((p) => p.id === activeArticle)?.title}
              </h3>

              <div className="text-xs text-[#8A5A36] flex items-center gap-3 border-b border-[#8A5A36]/15 pb-3">
                <span>{publications.find((p) => p.id === activeArticle)?.source}</span>
                <span>•</span>
                <span>{publications.find((p) => p.id === activeArticle)?.readTime}</span>
              </div>

              <div className="space-y-3 text-sm text-[#4A3B32] leading-relaxed">
                <p>
                  {publications.find((p) => p.id === activeArticle)?.excerpt}
                </p>
                <p>
                  {isBengali
                    ? 'বঙ্গীয় সাহা সমিতি (শুঁড়ি সমাজ) ১৯৩৬-৩৭ সালে প্রতিষ্ঠার পর থেকে অবিচলভাবে সমাজের স্বার্থে কাজ করে চলেছে। ১৯৫০ সালে ড. আম্বেদকর কর্তৃক সংবিধানে তপশিলি জাতিতে অন্তর্ভুক্তি এবং ১৯৫৬ সালে ৫২বি ইন্ডিয়ান মিরর স্ট্রিটে স্থায়ী কেন্দ্রীয় কার্যালয় ভবন ক্রয়ের পর থেকে সমাজ সংস্কার, প্রকাশনা ও গ্রামীণ ছাত্রাবাসে আবাসিক ব্যবস্থা করা এবং সমাজের সদস্যদের জন্য অতিথি কক্ষ (Guest Room) পরিচালনার ধারাবাহিকতা বজায় রয়েছে।'
                    : 'Since its foundation in 1936-37, Bangiya Saha Samity (Sunri Samaj) has relentlessly served the community. Following constitutional inclusion in 1950 by Dr. Ambedkar and acquiring 52B Indian Mirror Street in 1956, our 4-storeyed Central Office continues to publish periodicals, make residential arrangements for the rural student hostel, make Guest Room facilities available for community members, and advance female higher education.'}
                </p>
              </div>

              <div className="pt-4 border-t border-[#8A5A36]/15 flex justify-end">
                <button
                  onClick={() => setActiveArticle(null)}
                  className="px-5 py-2 rounded-lg bg-[#2D6A4F] text-white text-xs font-bold hover:bg-[#1B4332]"
                >
                  {isBengali ? 'বন্ধ করুন' : 'Close'}
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
