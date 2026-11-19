import React, { useState } from 'react';
import { BookOpen, ShieldCheck, GraduationCap, Users, CheckCircle, ArrowRight, HeartHandshake, Scale } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { TRANSLATIONS, LOCALIZED_PILLARS } from '../data/translations';

interface MissionHighlightsProps {
  onSponsorPillar: (pillarTitle: string) => void;
}

export const MissionHighlights: React.FC<MissionHighlightsProps> = ({ onSponsorPillar }) => {
  const { lang, isBengali } = useLanguage();
  const t = TRANSLATIONS[lang];
  const pillars = LOCALIZED_PILLARS[lang];

  const [selectedPillarId, setSelectedPillarId] = useState<string>('obj-education');

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'GraduationCap':
      case 'BookOpen':
        return <GraduationCap className="w-5 h-5 text-[#2D6A4F]" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-5 h-5 text-[#8A5A36]" />;
      case 'Scale':
        return <Scale className="w-5 h-5 text-[#8A5A36]" />;
      case 'HeartHandshake':
        return <HeartHandshake className="w-5 h-5 text-[#2D6A4F]" />;
      case 'Users':
      default:
        return <Users className="w-5 h-5 text-[#2D6A4F]" />;
    }
  };

  const selectedPillar = pillars.find((p) => p.id === selectedPillarId) || pillars[0];

  return (
    <section id="objectives" className="py-16 bg-[#FAF7F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with cultural motif */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#8A5A36]/10 text-xs font-bold text-[#8A5A36] uppercase tracking-wider mb-3">
            <span>{t.missionBadge}</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-serif-heading font-bold text-[#2D6A4F] leading-tight">
            {t.missionHeading}
          </h2>
          
          <p className="mt-3 text-base text-[#6C4A31] leading-relaxed">
            {t.missionSubtitle}
          </p>
        </div>

        {/* Tab Selection for the 5 Objectives */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 mb-8">
          {pillars.map((pillar) => {
            const isSelected = pillar.id === selectedPillar.id;
            return (
              <button
                key={pillar.id}
                onClick={() => setSelectedPillarId(pillar.id)}
                className={`p-3.5 rounded-xl text-left transition-all border flex flex-col justify-between ${
                  isSelected
                    ? 'bg-[#F4EFE6] border-[#2D6A4F] shadow-sm ring-1 ring-[#2D6A4F]'
                    : 'bg-[#FAF7F2] border-[#8A5A36]/20 hover:border-[#8A5A36]/60 hover:bg-[#F4EFE6]/50'
                }`}
              >
                <div className="flex items-center justify-between mb-2.5">
                  <div className={`p-2 rounded-lg ${isSelected ? 'bg-[#2D6A4F]/15' : 'bg-stone-100'}`}>
                    {getIcon(pillar.icon)}
                  </div>
                  <span className="text-[11px] font-mono font-bold text-[#8A5A36]">
                    {pillar.impactNumber}
                  </span>
                </div>
                <div>
                  <div className="text-[11px] font-medium text-[#8A5A36]">
                    {pillar.impactLabel}
                  </div>
                  <div className="text-xs sm:text-sm font-bold text-[#2D6A4F] line-clamp-2 mt-0.5">
                    {pillar.title}
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Deep Dive Card for Selected Objective */}
        <div className="bg-[#FAF7F2] rounded-2xl border-2 border-[#8A5A36]/25 p-6 sm:p-8 shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-5">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#8A5A36]">
                  {selectedPillar.impactLabel}
                </span>
                <h3 className="text-2xl sm:text-3xl font-serif-heading font-bold text-[#2D6A4F] mt-1">
                  {selectedPillar.title}
                </h3>
                <p className="text-sm sm:text-base font-medium text-[#8A5A36] italic mt-1">
                  "{selectedPillar.tagline}"
                </p>
              </div>

              <p className="text-sm sm:text-base text-[#554336] leading-relaxed">
                {selectedPillar.description}
              </p>

              {/* Key Initiatives Checklist */}
              <div className="space-y-2.5 pt-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#2D6A4F]">
                  {t.keyInitiativesHeader}
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {selectedPillar.keyInitiatives.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#4A3B32]">
                      <CheckCircle className="w-4 h-4 text-[#2D6A4F] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 flex flex-wrap items-center gap-3">
                <button
                  onClick={() => onSponsorPillar(selectedPillar.title)}
                  className="px-5 py-2.5 rounded-lg text-sm font-bold text-white bg-[#2D6A4F] hover:bg-[#20513B] shadow-xs flex items-center gap-2 transition-all active:scale-[0.98]"
                >
                  <HeartHandshake className="w-4 h-4" />
                  <span>{t.sponsorPillarBtn}</span>
                </button>

                <a
                  href="#history"
                  className="px-4 py-2.5 rounded-lg text-sm font-semibold text-[#8A5A36] hover:text-[#6C4A31] hover:bg-[#8A5A36]/10 border border-[#8A5A36]/30 transition-colors flex items-center gap-1.5"
                >
                  <span>{isBengali ? 'ঐতিহাসিক ইতিবৃত্ত দেখুন' : 'Explore Historic Milestones'}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Right Card: Authentic Field Facts & Testimonial Context */}
            <div className="lg:col-span-5 bg-[#F4EFE6] rounded-xl p-6 border border-[#8A5A36]/20 space-y-5">
              <div className="flex items-center justify-between pb-3 border-b border-[#8A5A36]/20">
                <span className="text-xs font-bold text-[#8A5A36] uppercase tracking-wider">
                  {t.verifiedDirectImpact}
                </span>
                <span className="text-xs px-2.5 py-0.5 rounded-full bg-[#2D6A4F] text-white font-medium">
                  {isBengali ? 'পশ্চিমবঙ্গে সক্রিয়' : 'West Bengal Community Focus'}
                </span>
              </div>

              <div className="space-y-4">
                <div className="p-3.5 rounded-lg bg-[#FAF7F2] border border-[#8A5A36]/15">
                  <div className="text-xs text-[#8A5A36] font-semibold">
                    {isBengali ? 'প্রাতিষ্ঠানিক ভিত্তি' : 'Institutional Heritage'}
                  </div>
                  <div className="text-sm font-bold text-[#2D6A4F] mt-0.5">
                    {isBengali 
                      ? '১৯৩৬-৩৭ সালে প্রতিষ্ঠিত বঙ্গীয় সাহা সমিতি (শুঁড়ি সমাজ)' 
                      : 'Bangiya Saha Samity (Sunri Samaj) • Founded 1936-37'}
                  </div>
                  <div className="text-xs text-[#6C4A31] mt-1">
                    {isBengali 
                      ? 'মা জগৎ জননী মন্দির (মানিকতলা) থেকে ৫২বি ইন্ডিয়ান মিরর স্ট্রিটের কেন্দ্রীয় কার্যালয়, ছাত্রাবাস ও অতিথি কক্ষ।' 
                      : 'From Maa Jagat Janani Temple to our 52B Indian Mirror Street 4-storey Central Office, Hostel & Guest Room.'}
                  </div>
                </div>

                <div className="p-3.5 rounded-lg bg-[#FAF7F2] border border-[#8A5A36]/15">
                  <div className="text-xs text-[#8A5A36] font-semibold">
                    {isBengali ? 'সংবিধানে তপশিলি স্বীকৃতি' : 'Constitutional SC Landmark'}
                  </div>
                  <div className="text-base font-serif-heading font-bold text-[#8A5A36] mt-0.5">
                    {isBengali ? 'ড. বাবাসাহেব আম্বেদকর (১৯৫০)' : 'Dr. Baba Saheb Ambedkar (1950)'}
                  </div>
                  <div className="text-xs text-[#4A3B32] mt-0.5">
                    {isBengali 
                      ? 'ভারতের সংবিধানে তপশিলি জাতি হিসেবে শুঁড়ি সম্প্রদায়ের অন্তর্ভুক্তি।' 
                      : 'Included Sunri as a Scheduled Caste community in the Constitution of India.'}
                  </div>
                </div>

                <div className="text-xs text-[#554336] italic border-l-2 border-[#2D6A4F] pl-3 py-1">
                  {isBengali
                    ? '"শুঁড়ি সমাজের কোনো ব্যক্তি যাতে তাদের সাংবিধানিক ও নাগরিক অধিকার থেকে বঞ্চিত না হয়, সমিতি তার জন্য অবিচল।"'
                    : '"Bangiya Saha Samity moves the Government to retain Sunri Community in the Scheduled Caste list and defend all rights with vigilance."'}
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
