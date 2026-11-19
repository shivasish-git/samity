import React from 'react';
import { X, MapPin, Award, Calendar, HeartHandshake, BookOpen, ShieldCheck } from 'lucide-react';
import { LocalizedMilestone } from '../data/translations';
import { useLanguage } from '../context/LanguageContext';

interface StoryModalProps {
  milestone: LocalizedMilestone | null;
  onClose: () => void;
  onDonateToCause: (category: string) => void;
}

export const StoryModal: React.FC<StoryModalProps> = ({ milestone, onClose, onDonateToCause }) => {
  const { isBengali } = useLanguage();

  if (!milestone) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 animate-fadeIn">
      <div 
        className="relative bg-[#FAF7F2] rounded-2xl max-w-2xl w-full overflow-hidden shadow-2xl border-2 border-[#8A5A36]/30 text-[#2D241E]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Ribbon */}
        <div className="bg-[#2D6A4F] text-[#FAF7F2] px-6 py-3.5 flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider">
            <Award className="w-4 h-4 text-amber-300" />
            <span>{isBengali ? 'ঐতিহাসিক ইতিবৃত্ত ও দলিল' : 'Historical Chronicle & Archive'}</span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-white/20 text-white transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[80vh] overflow-y-auto">
          
          <div className="space-y-2">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-[#8A5A36]/15 text-[#8A5A36]">
              {milestone.badge}
            </span>
            <h3 className="text-2xl sm:text-3xl font-serif-heading font-bold text-[#2D6A4F]">
              {milestone.title}
            </h3>
            <div className="flex items-center gap-2 text-xs font-medium text-[#6C4A31]">
              <MapPin className="w-3.5 h-3.5 text-[#2D6A4F]" />
              <span>{milestone.location}</span>
              <span>•</span>
              <Calendar className="w-3.5 h-3.5" />
              <span>{milestone.year}</span>
            </div>
          </div>

          {/* Core Historical Record */}
          <div className="p-4 rounded-xl bg-[#F4EFE6] border-l-4 border-[#2D6A4F] text-[#4A3B32]">
            <p className="text-sm sm:text-base font-serif-heading leading-relaxed text-[#2D6A4F]">
              {milestone.description}
            </p>
          </div>

          {/* Historical Significance */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#8A5A36]">
              {isBengali ? 'ঐতিহাসিক তাৎপর্য ও সমাজ সংস্কার' : 'Historical Significance & Impact'}
            </h4>
            <div className="space-y-2 text-xs sm:text-sm text-[#554336] leading-relaxed">
              <p>
                {isBengali
                  ? 'বঙ্গীয় সাহা সমিতি (শুঁড়ি সমাজ)-এর এই ঐতিহাসিক মাইলফলক সমগ্র পশ্চিমবঙ্গে শুঁড়ি সম্প্রদায়ের ঐক্য, সাংবিধানিক মর্যাদা রক্ষা এবং ভবিষ্যৎ প্রজন্মের শিক্ষার ভিত্তি স্থাপন করেছে।'
                  : 'This historic milestone of Bangiya Saha Samity (Sunri Samaj) laid the strong foundation for community unity, defense of constitutional Scheduled Caste reservations, and educational progress across West Bengal.'}
              </p>
              <p>
                {isBengali
                  ? 'প্রতিষ্ঠাতা বিশিষ্ট ও দানশীল ব্যক্তিবর্গ ও শুভানুধ্যায়ীদের ত্যাগ ও দূরদর্শিতা আজও আমাদের গ্রামীণ ছাত্রাবাসের আবাসিক ব্যবস্থা, শুধুমাত্র আমাদের সম্প্রদায়ের জন্য শিক্ষার উদ্দেশ্যে সামাজিক সহায়তা ও সমাজকল্যাণে অনুপ্রেরণা যোগায়।'
                  : 'The dedication and vision of our distinguished and philanthropic founders and patrons continue to inspire our rural student hostel arrangements, Social Help for Educational Purpose (Only for Our Community), and welfare initiatives today.'}
              </p>
            </div>
          </div>

          {/* Institutional Badge */}
          <div className="p-3.5 rounded-lg bg-[#FAF7F2] border border-[#8A5A36]/20 flex items-center justify-between text-xs">
            <div>
              <span className="text-[#8A5A36] font-semibold">{isBengali ? 'সংস্থার নাম:' : 'Organisation:'}</span>{' '}
              <span className="font-bold text-[#2D6A4F]">Bangiya Saha Samity (Sunri Samaj)</span>
            </div>
          </div>
        </div>

        {/* Modal Action Footer */}
        <div className="bg-[#F4EFE6] px-6 py-4 border-t border-[#8A5A36]/20 flex flex-wrap items-center justify-between gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-bold text-[#6C4A31] hover:text-[#2D241E]"
          >
            {isBengali ? 'বন্ধ করুন' : 'Close'}
          </button>

          <button
            onClick={() => {
              onClose();
              onDonateToCause('Rural Student Hostel');
            }}
            className="px-5 py-2.5 rounded-lg text-xs sm:text-sm font-bold text-white bg-[#2D6A4F] hover:bg-[#20513B] shadow-xs flex items-center gap-2"
          >
            <HeartHandshake className="w-4 h-4" />
            <span>{isBengali ? 'ছাত্রাবাস ও শিক্ষার উদ্দেশ্যে সামাজিক সহায়তায় সাহায্য করুন' : 'Support Hostel & Social Help for Educational Purpose'}</span>
          </button>
        </div>

      </div>
    </div>
  );
};
