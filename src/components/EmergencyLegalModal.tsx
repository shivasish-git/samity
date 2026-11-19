import React, { useState } from 'react';
import { X, ShieldAlert, PhoneCall, Send, CheckCircle2, Scale, MapPin } from 'lucide-react';
import { NGO_DETAILS } from '../data/ngoData';
import { useLanguage } from '../context/LanguageContext';

interface EmergencyLegalModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const EmergencyLegalModal: React.FC<EmergencyLegalModalProps> = ({ isOpen, onClose }) => {
  const { lang, isBengali } = useLanguage();
  const [submitted, setSubmitted] = useState(false);
  const [victimName, setVictimName] = useState('');
  const [phone, setPhone] = useState('');
  const [district, setDistrict] = useState('');
  const [natureOfIssue, setNatureOfIssue] = useState('FIR Registration Refusal');
  const [details, setDetails] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 animate-fadeIn">
      <div 
        className="relative bg-[#FAF7F2] rounded-2xl max-w-xl w-full overflow-hidden shadow-2xl border-2 border-[#8A5A36]/40 text-[#2D241E]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header */}
        <div className="bg-[#2D6A4F] text-[#FAF7F2] px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <Scale className="w-5 h-5 text-amber-300" />
            <div>
              <h3 className="text-base font-serif-heading font-bold">
                {isBengali ? 'তপশিলি অধিকার ও আইনি সহায়তা ডেস্ক' : 'SC/ST Rights & Legal Assistance Desk'}
              </h3>
              <p className="text-[11px] text-white/80">
                {isBengali ? 'সম্পূর্ণ গোপনীয় • বিনামূল্যে আইনি সহায়তা • দ্রুত প্রতিক্রিয়া' : 'Confidential • Free Pro-Bono Support • Fast Response'}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-white/20 text-white transition-colors"
            aria-label="Close emergency modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-5 max-h-[80vh] overflow-y-auto">
          {submitted ? (
            <div className="text-center py-8 space-y-4">
              <div className="w-14 h-14 rounded-full bg-[#2D6A4F]/15 text-[#2D6A4F] mx-auto flex items-center justify-center">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-serif-heading font-bold text-[#2D6A4F]">
                {isBengali ? 'অভিযোগ সফলভাবে গ্রহণ করা হয়েছে' : 'Grievance Received by Legal Desk'}
              </h4>
              <p className="text-xs sm:text-sm text-[#554336] max-w-md mx-auto leading-relaxed">
                {isBengali 
                  ? `আমাদের আইনি সমন্বয়কারী আগামী ৩০ মিনিটের মধ্যে ${phone} নম্বরে আপনার সাথে যোগাযোগ করবেন। জরুরি বিপদের ক্ষেত্রে অবিলম্বে ১১২ নম্বরে ফোন করুন।`
                  : `Our district paralegal coordinator will reach out to ${phone} within 30 minutes. If there is imminent threat of violence, please dial the national police emergency 112 immediately.`}
              </p>
              <div className="pt-3">
                <button
                  onClick={() => {
                    setSubmitted(false);
                    onClose();
                  }}
                  className="px-5 py-2.5 rounded-lg text-xs font-bold text-white bg-[#2D6A4F]"
                >
                  {isBengali ? 'ডেস্ক বন্ধ করুন' : 'Close Desk'}
                </button>
              </div>
            </div>
          ) : (
            <>
              {/* Emergency Hotline Banner */}
              <div className="p-4 rounded-xl bg-[#F4EFE6] border border-[#8A5A36]/25 flex items-center justify-between gap-3">
                <div>
                  <div className="text-[11px] font-bold text-[#8A5A36] uppercase tracking-wider">
                    {isBengali ? 'সরাসরি হেল্পলাইন' : 'Direct Helpline'}
                  </div>
                  <div className="text-lg font-mono font-bold text-[#2D6A4F]">
                    {isBengali ? '০৩৩-২২২৭১৫৯৯ / ৯৪৩৩০৪১৫৯৭' : NGO_DETAILS.helpline}
                  </div>
                </div>
                <a
                  href={`tel:${NGO_DETAILS.emergencyLegalPhone.replace(/\s+/g, '')}`}
                  className="px-3.5 py-2 rounded-lg text-xs font-bold text-white bg-[#8A5A36] hover:bg-[#6C4A31] flex items-center gap-1.5 shrink-0"
                >
                  <PhoneCall className="w-3.5 h-3.5" />
                  <span>{isBengali ? 'আইনজীবীকে কল করুন' : 'Call Advocate'}</span>
                </a>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-3.5">
                <div className="text-xs font-bold uppercase tracking-wider text-[#8A5A36]">
                  {isBengali ? 'প্যারা-লিগ্যাল সহায়তার জন্য ফর্ম পূরণ করুন:' : 'Request Paralegal Assistance or Report Incident:'}
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#4A3B32] mb-1">
                    {isBengali ? 'আপনার নাম / আবেদনকারী *' : 'Your Name / Contact Person *'}
                  </label>
                  <input
                    type="text"
                    required
                    value={victimName}
                    onChange={(e) => setVictimName(e.target.value)}
                    placeholder={isBengali ? 'উদাঃ অমল সাহা' : 'e.g. Surendra Kumar'}
                    className="w-full px-3 py-2 rounded-lg bg-white border border-[#8A5A36]/30 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#2D6A4F]"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-[#4A3B32] mb-1">
                      {isBengali ? 'ফোন নম্বর *' : 'Phone Number (for callback) *'}
                    </label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder={isBengali ? '+৯১ ৯৮৭৬৫ ৪৩২১০' : '+91 98765 43210'}
                      className="w-full px-3 py-2 rounded-lg bg-white border border-[#8A5A36]/30 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#2D6A4F]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#4A3B32] mb-1">
                      {isBengali ? 'জেলা ও এলাকা *' : 'District & State *'}
                    </label>
                    <input
                      type="text"
                      required
                      value={district}
                      onChange={(e) => setDistrict(e.target.value)}
                      placeholder={isBengali ? 'উদাঃ বর্ধমান, পশ্চিমবঙ্গ' : 'e.g. Burdwan, WB'}
                      className="w-full px-3 py-2 rounded-lg bg-white border border-[#8A5A36]/30 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#2D6A4F]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#4A3B32] mb-1">
                    {isBengali ? 'সমস্যার ধরন' : 'Nature of Grievance'}
                  </label>
                  <select
                    value={natureOfIssue}
                    onChange={(e) => setNatureOfIssue(e.target.value)}
                    className="w-full px-3 py-2 rounded-lg bg-white border border-[#8A5A36]/30 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#2D6A4F]"
                  >
                    <option value="FIR Registration Refusal">
                      {isBengali ? 'থানায় এফআইআর নিতে অস্বীকৃতি' : 'FIR Registration Refusal (Police refusal to apply SC/ST Act)'}
                    </option>
                    <option value="School / College Caste Discrimination">
                      {isBengali ? 'স্কুল/কলেজে বৈষম্য বা সরকারি শিক্ষাবৃত্তি বঞ্চনা' : 'School / College Discrimination or Statutory Aid Denial'}
                    </option>
                    <option value="Physical Atrocity or Threat">
                      {isBengali ? 'শারীরিক নির্যাতন বা ভীতি প্রদর্শন' : 'Physical Atrocity or Caste Abuse Threat'}
                    </option>
                    <option value="Village Social Boycott / Water Denial">
                      {isBengali ? 'সামাজিক বয়কট বা সাধারণ সু্যোগ-সুবিধা অস্বীকার' : 'Social Boycott / Denial of Public Water / Temple Entry'}
                    </option>
                    <option value="Land Encroachment / Eviction">
                      {isBengali ? 'বেআইনি উচ্ছেদ বা জমি দখল' : 'Illegal Eviction or Land Dispossession'}
                    </option>
                    <option value="Other Legal Consultation">
                      {isBengali ? 'অন্যান্য সাংবিধানিক বা আইনি পরামর্শ' : 'Other Constitutional / Legal Consultation'}
                    </option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#4A3B32] mb-1">
                    {isBengali ? 'ঘটনার সংক্ষিপ্ত বিবরণ' : 'Brief Summary of the Situation'}
                  </label>
                  <textarea
                    rows={3}
                    value={details}
                    onChange={(e) => setDetails(e.target.value)}
                    placeholder={isBengali ? 'থানার নাম, গ্রাম, তারিখ বা ঘটনার সংক্ষিপ্ত বিবরণ দিন...' : 'Provide names of police station, village, date, or brief details of what transpired...'}
                    className="w-full px-3 py-2 rounded-lg bg-white border border-[#8A5A36]/30 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#2D6A4F]"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded-xl text-xs sm:text-sm font-bold text-white bg-[#2D6A4F] hover:bg-[#20513B] shadow-xs flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>{isBengali ? 'দায়িত্বপ্রাপ্ত আইনজীবীর নিকট পাঠান' : 'Submit to Duty Paralegal Coordinator'}</span>
                </button>
              </form>

              <p className="text-[11px] text-stone-500 text-center italic">
                {isBengali 
                  ? '* আপনার সমস্ত তথ্য অত্যন্ত গোপনীয় রাখা হবে এবং শুধুমাত্র আমাদের আইনজীবীদের সাথে শেয়ার করা হবে।'
                  : '* All information is strictly confidential and shared only with our verified pro-bono advocates.'}
              </p>
            </>
          )}
        </div>

      </div>
    </div>
  );
};

