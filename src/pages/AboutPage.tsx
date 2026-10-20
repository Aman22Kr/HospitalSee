import React from 'react';
import { Award, ShieldCheck, HeartPulse, Building2, Users, CheckCircle2, ArrowRight } from 'lucide-react';
import { HOSPITAL_INFO } from '../data/hospitalData';
import { YouTubePlaceholder } from '../components/common/YouTubePlaceholder';
import { AdBanner } from '../components/layout/AdBanner';
import { Link } from 'react-router-dom';

export const AboutPage: React.FC = () => {
  const milestones = [
    {
      year: '1920',
      title: 'Inception & Compassionate Roots',
      description: 'Established in Karol Bagh, New Delhi with a vision to provide accessible, dignified healthcare to families across North India.'
    },
    {
      year: '1965',
      title: 'Surgical & Maternity Expansion',
      description: 'Added dedicated obstetrics and surgical wards, becoming one of Delhi’s most trusted maternity institutions.'
    },
    {
      year: '1998',
      title: 'Multi-Speciality & Critical Care Evolution',
      description: 'Modernized with high-dependency ICU, haemodialysis unit, and automated pathology laboratory.'
    },
    {
      year: '2012',
      title: 'NABH Accreditation & Modular OTs',
      description: 'Earned prestigious NABH accreditation and commissioned positive-pressure laminar airflow operation theatres.'
    },
    {
      year: '2024 - 2026',
      title: 'Advanced Interventional Cath Lab & Digital Care',
      description: 'Upgraded with flat-panel digital catheterization lab, computer-navigated arthroscopy, and paperless cashless TPA integrations.'
    }
  ];

  return (
    <div className="w-full bg-[#fffdfa]">
      {/* Banner */}
      <section className="bg-gradient-to-r from-stone-950 via-orange-950 to-stone-900 text-white py-14 px-4 sm:px-6 relative overflow-hidden">
        <div className="absolute -top-16 -right-16 w-80 h-80 rounded-full bg-amber-500/10 blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto text-left relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/20 text-yellow-300 text-xs font-semibold mb-3 border border-amber-400/30">
            <Award className="w-3.5 h-3.5 text-yellow-300" />
            <span>Over 100 Years of Clinical Trust (1920 - Present)</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white">
            About HospitalSee
          </h1>
          <p className="text-stone-300 text-sm sm:text-base mt-2 max-w-2xl leading-relaxed">
            A centurial institution committed to clinical excellence, compassionate patient outcomes, and continuous medical advancement.
          </p>
        </div>
      </section>

      {/* Main Narrative */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-5">
              <span className="text-xs font-bold uppercase tracking-wider text-orange-600">
                Our Centenary Heritage
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900">
                Healing Delhi NCR with Ethics, Empathy and Modern Science Since 1920
              </h2>
              <p className="text-sm text-stone-600 leading-relaxed">
                HospitalSee has stood as a bastion of trust on New Rohtak Road, Karol Bagh, for more than a century. From its founding days, the hospital has prioritized patient-first principles, ensuring that world-class medical science remains accessible to every layer of society.
              </p>
              <p className="text-sm text-stone-600 leading-relaxed">
                Today, HospitalSee is a 120+ bedded multi-speciality tertiary care hospital equipped with modern intensive care units, modular operation theatres, a 24x7 dialysis wing, advanced diagnostic imaging, and full accreditation from the National Accreditation Board for Hospitals & Healthcare Providers (NABH).
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4">
                <div className="p-3 bg-amber-50/60 rounded-xl border border-amber-200 text-center">
                  <div className="text-2xl font-black text-orange-600">100+</div>
                  <div className="text-[11px] text-stone-500 font-medium">Years Legacy</div>
                </div>
                <div className="p-3 bg-amber-50/60 rounded-xl border border-amber-200 text-center">
                  <div className="text-2xl font-black text-amber-600">120+</div>
                  <div className="text-[11px] text-stone-500 font-medium">Inpatient Beds</div>
                </div>
                <div className="p-3 bg-amber-50/60 rounded-xl border border-amber-200 text-center">
                  <div className="text-2xl font-black text-yellow-600">45+</div>
                  <div className="text-[11px] text-stone-500 font-medium">Specialists</div>
                </div>
                <div className="p-3 bg-amber-50/60 rounded-xl border border-amber-200 text-center">
                  <div className="text-2xl font-black text-orange-700">65k+</div>
                  <div className="text-[11px] text-stone-500 font-medium">Surgeries</div>
                </div>
              </div>
            </div>

            {/* Video Placeholder Area */}
            <div className="lg:col-span-5 bg-amber-50/40 p-6 rounded-3xl border border-amber-200">
              <h3 className="font-bold text-sm text-stone-800 mb-2">
                Hospital Overview & Infrastructure
              </h3>
              <p className="text-xs text-stone-500 mb-4">
                Take a virtual tour through our clinical wards and recovery suites.
              </p>

              {/* The required blank square space */}
              <YouTubePlaceholder aspectRatio="square" label="Centenary Hospital Documentary" />
            </div>
          </div>
        </div>
      </section>

      {/* Vision, Mission, Values */}
      <section className="py-16 bg-[#fffaf5] border-y border-orange-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-7 rounded-2xl border border-orange-100 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-amber-100 text-orange-700 flex items-center justify-center mb-4">
                <HeartPulse className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-lg text-stone-900 mb-2">Our Mission</h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                To deliver comprehensive, compassionate, and evidence-based medical treatment through state-of-the-art technology and dedicated clinical teams, keeping patient safety and human dignity at the core of every intervention.
              </p>
            </div>

            <div className="bg-white p-7 rounded-2xl border border-orange-100 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-amber-100 text-orange-700 flex items-center justify-center mb-4">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-lg text-stone-900 mb-2">Our Vision</h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                To be the foremost patient-preferred healthcare destination in North India, celebrated for clinical innovation, zero-infection surgical suites, transparent medical ethics, and holistic patient rehabilitation.
              </p>
            </div>

            <div className="bg-white p-7 rounded-2xl border border-orange-100 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-amber-100 text-orange-700 flex items-center justify-center mb-4">
                <Award className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-lg text-stone-900 mb-2">Core Values</h3>
              <ul className="text-xs text-stone-600 space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                  <span>Clinical Integrity & Transparent Communication</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                  <span>Compassion & Patient Comfort Above All</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                  <span>Adherence to Global NABH Protocols</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                  <span>Continuous Academic & Technology Advancement</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Historical Milestones */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-orange-600">
              A Journey of Compassion
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 mt-1">
              Historical Milestones
            </h2>
          </div>

          <div className="space-y-6 relative before:absolute before:inset-0 before:left-8 before:w-0.5 before:bg-orange-200">
            {milestones.map((m, idx) => (
              <div key={idx} className="relative flex items-start gap-6 group">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-600 to-amber-600 text-white font-extrabold text-xs flex items-center justify-center shrink-0 shadow-md group-hover:scale-105 transition-transform">
                  {m.year}
                </div>
                <div className="flex-1 bg-amber-50/50 p-5 rounded-2xl border border-amber-200">
                  <h4 className="font-bold text-base text-stone-900">{m.title}</h4>
                  <p className="text-xs text-stone-600 mt-1.5 leading-relaxed">{m.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Box */}
      <section className="py-12 bg-amber-50/80 border-t border-amber-200">
        <div className="max-w-5xl mx-auto px-4 text-center space-y-4">
          <h3 className="text-xl font-bold text-stone-900">
            Need Expert Medical Guidance?
          </h3>
          <p className="text-xs text-stone-600 max-w-xl mx-auto">
            Book an OPD consultation with our experienced specialists or reach our 24x7 helpline for admission queries.
          </p>
          <div className="flex flex-wrap justify-center gap-3 pt-2">
            <Link
              to="/appointments"
              className="px-6 py-2.5 rounded-xl bg-orange-600 hover:bg-orange-700 text-white font-bold text-xs shadow-md shadow-orange-600/20 transition-colors"
            >
              Book an Appointment
            </Link>
            <Link
              to="/contact"
              className="px-6 py-2.5 rounded-xl bg-white hover:bg-amber-50 text-stone-700 font-bold text-xs border border-orange-200 transition-colors"
            >
              Contact Hospital
            </Link>
          </div>
        </div>
      </section>

      {/* Ad Section */}
      <AdBanner />
    </div>
  );
};
