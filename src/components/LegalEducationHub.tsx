import React, { useState } from 'react';
import { Scale, ChevronDown, BookOpen, AlertCircle, Phone, ArrowRight, Shield } from 'lucide-react';
import { NGO_DETAILS } from '../data/ngoData';
import { useLanguage } from '../context/LanguageContext';
import { TRANSLATIONS, LOCALIZED_LEGAL_FAQS } from '../data/translations';
import { IndianPatternDivider } from './IndianPatternDivider';

interface LegalEducationHubProps {
  onContactLegalHelp: () => void;
}

export const LegalEducationHub: React.FC<LegalEducationHubProps> = ({ onContactLegalHelp }) => {
  const { lang, isBengali } = useLanguage();
  const t = TRANSLATIONS[lang];
  const faqs = LOCALIZED_LEGAL_FAQS[lang];

  const [openFaqId, setOpenFaqId] = useState<string>('faq-1');

  const toggleFaq = (id: string) => {
    setOpenFaqId((prev) => (prev === id ? '' : id));
  };

  return (
    <section id="rights-guide" className="py-16 bg-[#FAF7F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#2D6A4F]/10 text-xs font-bold text-[#2D6A4F] uppercase tracking-wider mb-2">
            <span>{t.rightsBadge}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-serif-heading font-bold text-[#2D6A4F]">
            {t.rightsHeading}
          </h2>

          <p className="mt-3 text-base text-[#6C4A31]">
            {t.rightsSubtitle}
          </p>
        </div>

        {/* Two Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Interactive Legal Rights Accordion */}
          <div className="lg:col-span-8 space-y-3.5">
            {faqs.map((faq) => {
              const isOpen = openFaqId === faq.id;
              return (
                <div
                  key={faq.id}
                  className="rounded-xl border border-[#8A5A36]/25 bg-[#FAF7F2] overflow-hidden transition-all shadow-2xs"
                >
                  <button
                    onClick={() => toggleFaq(faq.id)}
                    className="w-full p-4 sm:p-5 text-left flex items-start justify-between gap-4 hover:bg-[#F4EFE6]/40 transition-colors"
                  >
                    <div className="space-y-1">
                      <span className="inline-block text-[11px] font-bold px-2 py-0.5 rounded bg-[#8A5A36]/10 text-[#8A5A36]">
                        {faq.articleOrAct}
                      </span>
                      <h3 className="text-base sm:text-lg font-serif-heading font-bold text-[#2D6A4F]">
                        {faq.question}
                      </h3>
                    </div>

                    <ChevronDown
                      className={`w-5 h-5 text-[#8A5A36] shrink-0 transition-transform duration-200 mt-1 ${
                        isOpen ? 'rotate-180 text-[#2D6A4F]' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 border-t border-[#8A5A36]/15 space-y-3 bg-[#F4EFE6]/30">
                      <p className="text-xs sm:text-sm text-[#4A3B32] leading-relaxed">
                        {faq.answer}
                      </p>

                      <div className="p-3 rounded-lg bg-[#FAF7F2] border-l-3 border-[#2D6A4F] text-xs text-[#2D6A4F]">
                        <span className="font-bold">
                          {isBengali ? 'আমাদের সাহায্য ও করণীয় পদক্ষেপ:' : 'What our village cell does:'}
                        </span>{' '}
                        <span>{faq.practicalStep}</span>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Right Column: Emergency Response & Paralegal Contact Box */}
          <div className="lg:col-span-4 bg-[#F4EFE6] rounded-2xl border-2 border-[#8A5A36]/25 p-6 space-y-5">
            <div className="flex items-center gap-3 pb-3 border-b border-[#8A5A36]/20">
              <div className="w-10 h-10 rounded-xl bg-[#2D6A4F] text-white flex items-center justify-center">
                <Scale className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-base font-serif-heading font-bold text-[#2D6A4F]">
                  {t.legalAidTitle}
                </h4>
                <p className="text-xs text-[#8A5A36]">{t.legalAidSubtitle}</p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[#554336] leading-relaxed">
              {isBengali
                ? 'যদি স্থানীয় থানায় এফআইআর গ্রহণে বাধা দেওয়া হয় অথবা কোনো শিক্ষার্থীকে ন্যায্য ভর্তি বা সরকারি শিক্ষাবৃত্তি থেকে অন্যায়ভাবে বঞ্চিত করা হয়, অবিলম্বে আমাদের দায়িত্বপ্রাপ্ত আইনজীবীর সাথে যোগাযোগ করুন।'
                : 'If an FIR is being refused by local police or a student is being illegally denied admission or statutory student aid, contact our duty advocate directly.'}
            </p>

            <div className="space-y-2.5">
              <div className="p-3 rounded-xl bg-[#FAF7F2] border border-[#8A5A36]/15 text-xs space-y-1">
                <div className="text-[#8A5A36] font-semibold">{t.tollFreeHelpline}</div>
                <div className="text-base font-mono font-bold text-[#2D6A4F]">
                  {NGO_DETAILS.helpline}
                </div>
                <div className="text-[11px] text-stone-500">
                  {isBengali ? 'প্রতিদিন সকাল ৯:০০ - রাত ৯:০০ পর্যন্ত উপলব্ধ' : 'Available 9:00 AM - 9:00 PM Daily'}
                </div>
              </div>

              <div className="p-3 rounded-xl bg-[#FAF7F2] border border-[#8A5A36]/15 text-xs space-y-1">
                <div className="text-[#8A5A36] font-semibold">{t.emergencyResponse}</div>
                <div className="text-sm font-mono font-bold text-[#8A5A36]">
                  {NGO_DETAILS.emergencyLegalPhone}
                </div>
                <div className="text-[11px] text-stone-500">
                  {isBengali ? '২৪ ঘণ্টা জরুরি হোয়াটসঅ্যাপ ও এফআইআর সংক্রান্ত ফোন সেবা' : '24x7 WhatsApp & Call for immediate FIR distress'}
                </div>
              </div>
            </div>

            <button
              onClick={onContactLegalHelp}
              className="w-full py-3 rounded-xl text-xs sm:text-sm font-bold text-white bg-[#8A5A36] hover:bg-[#6C4A31] flex items-center justify-center gap-2 shadow-xs transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>{t.connectParalegal}</span>
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
