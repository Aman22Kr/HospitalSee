import React from 'react';
import {
  Clock,
  ShieldCheck,
  Globe,
  FileCheck,
  CheckCircle2,
  AlertCircle,
  Plane,
  HeartHandshake,
  UserCheck,
  Building,
  HelpCircle
} from 'lucide-react';
import { HOSPITAL_INFO } from '../data/hospitalData';
import { AdBanner } from '../components/layout/AdBanner';
import { Link } from 'react-router-dom';

export const PatientGuidePage: React.FC = () => {
  return (
    <div className="w-full">
      {/* Banner */}
      <section className="bg-gradient-to-r from-stone-950 via-orange-950 to-stone-900 text-white py-14 px-4 sm:px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-orange-600/10 via-transparent to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto text-left relative z-10">
          <span className="text-xs font-bold uppercase tracking-wider text-amber-300 bg-amber-400/10 px-3 py-1 rounded-full border border-amber-400/20 inline-block">
            Care & Protocols
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white mt-3">
            Patient Guide & Hospital Information
          </h1>
          <p className="text-stone-300 text-sm sm:text-base mt-2 max-w-2xl">
            Everything you and your family need to know regarding admissions, visiting hours, patient charter, and international care services.
          </p>
        </div>
      </section>

      {/* Visiting Hours & Inpatient Rules */}
      <section className="py-14 bg-[#fffdfa]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Visiting Hours Card */}
            <div className="p-7 rounded-3xl bg-white border border-stone-200 shadow-sm space-y-4">
              <div className="w-10 h-10 rounded-xl bg-orange-100 text-orange-600 flex items-center justify-center">
                <Clock className="w-5 h-5" />
              </div>
              <h3 className="font-extrabold text-lg text-stone-900">
                Visitor Timings & Attendant Guidelines
              </h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                Quiet resting environments are crucial for clinical recuperation. Please strictly observe the visiting hours below:
              </p>

              <div className="space-y-2.5 text-xs text-stone-700">
                <div className="p-3 bg-stone-50 rounded-xl border border-stone-200 flex justify-between items-center">
                  <span className="font-semibold text-stone-900">Morning Visiting Slot:</span>
                  <span className="font-bold text-orange-600">10:00 AM – 11:30 AM</span>
                </div>
                <div className="p-3 bg-stone-50 rounded-xl border border-stone-200 flex justify-between items-center">
                  <span className="font-semibold text-stone-900">Evening Visiting Slot:</span>
                  <span className="font-bold text-orange-600">05:00 PM – 07:00 PM</span>
                </div>
                <div className="p-3 bg-rose-50/70 rounded-xl border border-rose-200 flex justify-between items-center">
                  <span className="font-semibold text-rose-800">ICU / CCU Visitation:</span>
                  <span className="font-bold text-rose-700">1 Attendant for 15 Mins</span>
                </div>
              </div>

              <div className="p-3 bg-amber-50 rounded-xl border border-amber-200 text-xs text-amber-900 flex items-start gap-2">
                <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                <span>
                  Children under 12 years are not allowed in inpatient wards to prevent hospital-acquired infections.
                </span>
              </div>
            </div>

            {/* Admission & Discharge Steps */}
            <div className="p-7 rounded-3xl bg-white border border-stone-200 shadow-sm space-y-4">
              <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-600 flex items-center justify-center">
                <FileCheck className="w-5 h-5" />
              </div>
              <h3 className="font-extrabold text-lg text-stone-900">
                Admission & Discharge Protocols
              </h3>
              <div className="space-y-3 text-xs text-stone-600">
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-orange-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-stone-800 block font-bold">Planned Admission:</strong>
                    Report to the Admission Desk (Ground Floor) by 8:00 AM on the day of surgery with fasting as advised.
                  </div>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-orange-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-stone-800 block font-bold">Emergency Admission:</strong>
                    Admitted immediately through triage without delay. Paperwork completed by attendant while patient is resuscitated.
                  </div>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-orange-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-stone-800 block font-bold">Discharge Process:</strong>
                    The consultant initiates discharge during morning rounds. Billing and insurance pre-authorization settlement takes approximately 2-3 hours.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* International Patients Wing */}
      <section className="py-16 bg-white border-t border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold">
                <Globe className="w-3.5 h-3.5 text-orange-600" />
                <span>Global Patient Support</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900">
                International Patient Care Services
              </h2>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                HospitalSee welcomes overseas patients from over 20 countries. Our dedicated International Patient Lounge provides personalized assistance from pre-travel consultations to visa invitation letters and post-recovery tele-follow-ups.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="p-3 bg-stone-50 rounded-xl border border-stone-200 text-xs flex items-center gap-2">
                  <Plane className="w-4 h-4 text-orange-600 shrink-0" />
                  <span className="font-medium text-stone-800">Complimentary Airport Transfers</span>
                </div>
                <div className="p-3 bg-stone-50 rounded-xl border border-stone-200 text-xs flex items-center gap-2">
                  <FileCheck className="w-4 h-4 text-amber-600 shrink-0" />
                  <span className="font-medium text-stone-800">Medical Visa Invitation Assistance</span>
                </div>
                <div className="p-3 bg-stone-50 rounded-xl border border-stone-200 text-xs flex items-center gap-2">
                  <Globe className="w-4 h-4 text-orange-600 shrink-0" />
                  <span className="font-medium text-stone-800">Multi-Language Interpreters</span>
                </div>
                <div className="p-3 bg-stone-50 rounded-xl border border-stone-200 text-xs flex items-center gap-2">
                  <HeartHandshake className="w-4 h-4 text-amber-600 shrink-0" />
                  <span className="font-medium text-stone-800">Dedicated Relationship Manager</span>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-orange-600 hover:bg-orange-700 text-white font-bold text-xs shadow-md shadow-orange-600/20 transition-all hover:scale-105 active:scale-95"
                >
                  <span>Connect with International Desk</span>
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5 bg-stone-50 p-6 rounded-3xl border border-stone-200 shadow-sm space-y-3 text-xs">
              <h4 className="font-bold text-sm text-stone-900 flex items-center gap-2">
                <Building className="w-4 h-4 text-orange-600" />
                International Desk Contact
              </h4>
              <p className="text-stone-600">
                Email your medical reports for a preliminary opinion and treatment cost estimate within 24 hours:
              </p>
              <div className="p-3 bg-white rounded-xl border border-stone-200 space-y-1 font-mono text-stone-800">
                <div>Email: international@hospitalsee.com</div>
                <div>WhatsApp: +91 98110 54141</div>
              </div>
              <p className="text-[11px] text-stone-500">
                Assistance with guest houses and nearby hotel accommodations within walking distance of Karol Bagh.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Patient Rights & Responsibilities (NABH) */}
      <section className="py-14 bg-[#fffdfa] border-t border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-orange-600">
              NABH Charter
            </span>
            <h2 className="text-2xl font-extrabold text-stone-900 mt-1">
              Patient Rights & Responsibilities
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-6 rounded-2xl bg-orange-50/60 border border-orange-200/60 space-y-3">
              <h4 className="font-bold text-sm text-orange-950 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-orange-600" />
                <span>Your Rights as a Patient:</span>
              </h4>
              <ul className="space-y-2 text-xs text-stone-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-orange-600 shrink-0 mt-0.5" />
                  <span>Right to compassionate, respectful and dignified care without discrimination.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-orange-600 shrink-0 mt-0.5" />
                  <span>Right to complete privacy during examination, consultation, and treatment.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-orange-600 shrink-0 mt-0.5" />
                  <span>Right to informed consent and full explanation of diagnosis and risks.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-orange-600 shrink-0 mt-0.5" />
                  <span>Right to request a second medical opinion from another specialist.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-orange-600 shrink-0 mt-0.5" />
                  <span>Right to an itemized financial estimate and transparent billing.</span>
                </li>
              </ul>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-stone-200 shadow-sm space-y-3">
              <h4 className="font-bold text-sm text-stone-900 flex items-center gap-2">
                <UserCheck className="w-4 h-4 text-amber-600" />
                <span>Your Responsibilities as a Patient:</span>
              </h4>
              <ul className="space-y-2 text-xs text-stone-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
                  <span>Provide accurate and complete personal health history and current medications.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
                  <span>Comply with the mutually agreed clinical treatment and medication schedule.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
                  <span>Respect hospital visiting hours and observe quietness in inpatient areas.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
                  <span>Maintain zero-smoking and clean environment rules within premises.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
                  <span>Fulfill financial obligations in a timely manner.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Ad Section */}
      <AdBanner />
    </div>
  );
};
