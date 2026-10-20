import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  Calendar,
  Clock,
  MapPin,
  Phone,
  ShieldCheck,
  Award,
  ArrowRight,
  HeartPulse,
  UserCheck,
  CheckCircle2,
  Ambulance,
  Building2,
  Sparkles,
  Stethoscope,
  Search,
  Star,
  Quote,
  Activity,
  Layers,
  ChevronRight
} from 'lucide-react';
import {
  HOSPITAL_INFO,
  DEPARTMENTS,
  DOCTORS,
  HEALTH_PACKAGES,
  PATIENT_REVIEWS,
  BLOG_POSTS,
  TPA_PARTNERS
} from '../data/hospitalData';
import { useHospital } from '../context/HospitalContext';
import { YouTubePlaceholder } from '../components/common/YouTubePlaceholder';
import { AdBanner } from '../components/layout/AdBanner';

export const HomePage: React.FC = () => {
  const navigate = useNavigate();
  const { openEmergencyModal, openQuickBook, openSearchModal } = useHospital();

  // Quick Hero widget state
  const [selectedDept, setSelectedDept] = useState(DEPARTMENTS[0].name);
  const [selectedDate, setSelectedDate] = useState(() => {
    const d = new Date();
    d.setDate(d.getDate() + 1);
    return d.toISOString().split('T')[0];
  });

  // TPA search in home
  const [tpaQuery, setTpaQuery] = useState('');

  const filteredTpas = tpaQuery
    ? TPA_PARTNERS.filter((t) => t.name.toLowerCase().includes(tpaQuery.toLowerCase()))
    : TPA_PARTNERS.slice(0, 8);

  const handleHeroQuickSearch = (e: React.FormEvent) => {
    e.preventDefault();
    navigate(`/appointments?dept=${encodeURIComponent(selectedDept)}&date=${selectedDate}`);
  };

  return (
    <div className="w-full">
      {/* 1. Hero Section */}
      <section className="relative bg-gradient-to-br from-stone-950 via-amber-950 to-stone-900 text-white overflow-hidden py-14 sm:py-20 lg:py-24">
        {/* Decorative backdrop elements */}
        <div className="absolute inset-0 opacity-15 pointer-events-none bg-[radial-gradient(#f59e0b_1px,transparent_1px)] [background-size:24px_24px]" />
        <div className="absolute top-1/4 -right-20 w-96 h-96 bg-orange-500/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-amber-500/15 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-500/20 border border-amber-400/30 text-yellow-300 text-xs font-semibold backdrop-blur-sm">
                <Award className="w-3.5 h-3.5 text-yellow-300" />
                <span>100+ Years of Healthcare Excellence (Estd. 1920)</span>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                <span>NABH Accredited</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight text-white">
                Comprehensive Healthcare with a Century of{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-amber-300 to-orange-400">
                  Trust & Compassion
                </span>
              </h1>

              <p className="text-stone-300 text-sm sm:text-base leading-relaxed max-w-2xl">
                HospitalSee is a premier tertiary care hospital in Karol Bagh, New Delhi. Featuring 24x7 emergency & trauma response, computer-navigated joint replacements, modular laminar OTs, and seamless cashless TPA facilities.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <Link
                  to="/appointments"
                  className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-orange-600 via-amber-600 to-orange-500 hover:from-orange-500 hover:to-amber-500 text-white font-bold text-sm shadow-lg shadow-orange-600/25 transition-all hover:scale-105 active:scale-95 flex items-center gap-2"
                >
                  <Calendar className="w-4 h-4 text-yellow-200" />
                  <span>Book OPD Consultation</span>
                </Link>

                <button
                  onClick={openEmergencyModal}
                  className="px-6 py-3.5 rounded-xl bg-orange-600/90 hover:bg-orange-600 text-white font-bold text-sm border border-orange-400/40 shadow-lg shadow-orange-950/30 transition-all hover:scale-105 active:scale-95 flex items-center gap-2 cursor-pointer"
                >
                  <Phone className="w-4 h-4 text-yellow-300" />
                  <span>24x7 Emergency SOS</span>
                </button>

                <Link
                  to="/doctors"
                  className="px-5 py-3.5 rounded-xl bg-white/10 hover:bg-white/15 text-stone-200 font-semibold text-sm border border-white/15 transition-all"
                >
                  Find a Doctor
                </Link>
              </div>

              {/* Trust badges */}
              <div className="pt-4 grid grid-cols-3 gap-4 border-t border-stone-800/80 max-w-lg">
                <div>
                  <div className="text-2xl font-black text-white">{HOSPITAL_INFO.yearsOfExcellence}</div>
                  <div className="text-[11px] text-stone-400">Years of Care</div>
                </div>
                <div>
                  <div className="text-2xl font-black text-yellow-400">{HOSPITAL_INFO.bedsCount}</div>
                  <div className="text-[11px] text-stone-400">Advanced Beds</div>
                </div>
                <div>
                  <div className="text-2xl font-black text-amber-400">{HOSPITAL_INFO.doctorsCount}</div>
                  <div className="text-[11px] text-stone-400">Super Specialists</div>
                </div>
              </div>
            </div>

            {/* Right Card: Quick OPD Scheduler Card */}
            <div className="lg:col-span-5">
              <div className="bg-white text-stone-800 rounded-3xl p-6 sm:p-7 shadow-2xl border border-orange-100 relative">
                <div className="absolute -top-3.5 right-6 bg-gradient-to-r from-orange-600 to-amber-600 text-white text-[11px] font-bold uppercase tracking-wider px-3.5 py-1 rounded-full shadow-sm">
                  Instant Confirmation
                </div>

                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-xl bg-amber-100 text-orange-700 flex items-center justify-center">
                    <UserCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-extrabold text-base text-stone-900">
                      Book Doctor Consultation
                    </h3>
                    <p className="text-xs text-stone-500">
                      Select department & preferred date for OPD
                    </p>
                  </div>
                </div>

                <form onSubmit={handleHeroQuickSearch} className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-stone-700 mb-1.5 uppercase tracking-wider">
                      Department / Speciality
                    </label>
                    <select
                      value={selectedDept}
                      onChange={(e) => setSelectedDept(e.target.value)}
                      className="w-full text-xs sm:text-sm p-3 rounded-xl border border-stone-200 bg-amber-50/30 focus:bg-white focus:border-orange-500 focus:ring-1 focus:ring-orange-500 outline-none text-stone-800 font-medium"
                    >
                      {DEPARTMENTS.map((dept) => (
                        <option key={dept.id} value={dept.name}>
                          {dept.name}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-stone-700 mb-1.5 uppercase tracking-wider">
                      Preferred Date
                    </label>
                    <input
                      type="date"
                      value={selectedDate}
                      onChange={(e) => setSelectedDate(e.target.value)}
                      className="w-full text-xs sm:text-sm p-3 rounded-xl border border-stone-200 bg-amber-50/30 focus:bg-white focus:border-orange-500 focus:ring-1 focus:ring-orange-500 outline-none text-stone-800 font-medium"
                    />
                  </div>

                  <div className="p-3 bg-amber-50/70 rounded-xl border border-amber-200 text-xs text-amber-900 space-y-1">
                    <div className="flex items-center gap-1.5 font-bold">
                      <Clock className="w-3.5 h-3.5 text-orange-600" />
                      <span>OPD Timings: 8:00 AM - 8:00 PM</span>
                    </div>
                    <p className="text-[11px] text-amber-800">
                      Zero registration fee for online reservations. Pay consultation directly at OPD desk.
                    </p>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-700 hover:to-amber-700 text-white font-bold text-sm shadow-md shadow-orange-600/20 transition-all hover:shadow-lg active:scale-98 flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>Proceed to Doctor Selection</span>
                    <ArrowRight className="w-4 h-4 text-yellow-200" />
                  </button>
                </form>

                <div className="mt-4 pt-3 border-t border-stone-100 flex items-center justify-between text-xs text-stone-500">
                  <span className="flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-amber-600" />
                    Verified Specialists
                  </span>
                  <Link to="/cashless-tpa" className="text-orange-700 font-semibold hover:underline">
                    Check TPA Insurance →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. 24x7 Emergency Contact Strip */}
      <section className="bg-gradient-to-r from-orange-600 via-amber-600 to-orange-700 text-white py-4 px-4 shadow-inner">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3.5 text-center md:text-left">
            <div className="p-2.5 rounded-full bg-white/20 shrink-0">
              <Ambulance className="w-6 h-6 animate-pulse text-yellow-200" />
            </div>
            <div>
              <h3 className="font-bold text-base">
                Medical Emergency, Trauma, or Cardiac Chest Pain?
              </h3>
              <p className="text-xs text-amber-100">
                Round-the-clock emergency triage, ACLS ambulance dispatch, and immediate OT/Cath Lab readiness.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <a
              href={`tel:${HOSPITAL_INFO.emergencyPhone}`}
              className="px-4 py-2 rounded-xl bg-white text-orange-700 font-extrabold text-xs shadow hover:bg-amber-50 transition-colors flex items-center gap-1.5"
            >
              <Phone className="w-3.5 h-3.5 text-orange-600" />
              <span>{HOSPITAL_INFO.emergencyPhone}</span>
            </a>
            <button
              onClick={openEmergencyModal}
              className="px-4 py-2 rounded-xl bg-stone-900/60 hover:bg-stone-900 text-white font-bold text-xs border border-amber-300/40 transition-colors cursor-pointer"
            >
              Dispatch Ambulance
            </button>
          </div>
        </div>
      </section>

      {/* 3. Core Specialities Grid */}
      <section className="py-16 bg-[#fffdfa]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-orange-600">
                Centres of Excellence
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 mt-1">
                Clinical & Surgical Specialities
              </h2>
              <p className="text-sm text-stone-600 mt-1 max-w-xl">
                Equipped with cutting-edge medical technologies and handled by senior specialists with decades of clinical experience.
              </p>
            </div>
            <Link
              to="/departments"
              className="inline-flex items-center gap-1.5 text-orange-700 hover:text-orange-800 font-bold text-sm group"
            >
              <span>Explore All {DEPARTMENTS.length} Specialities</span>
              <ArrowRight className="w-4 h-4 text-orange-600 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {DEPARTMENTS.slice(0, 8).map((dept) => (
              <div
                key={dept.id}
                className="bg-white rounded-2xl p-5 shadow-sm hover:shadow-xl border border-orange-100 hover:border-amber-300 transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between group"
              >
                <div>
                  <div className="w-full h-40 rounded-xl overflow-hidden mb-4 relative">
                    <img
                      src={dept.image}
                      alt={dept.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-stone-950/70 via-transparent to-transparent" />
                    <span className="absolute bottom-2.5 left-2.5 text-[10px] font-bold uppercase tracking-wider bg-white/95 text-stone-800 px-2 py-0.5 rounded shadow-sm">
                      {dept.category}
                    </span>
                  </div>

                  <h3 className="font-extrabold text-base text-stone-900 group-hover:text-orange-600 transition-colors">
                    {dept.name}
                  </h3>
                  <p className="text-xs text-stone-500 mt-1.5 line-clamp-2">
                    {dept.shortDescription}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-stone-100 flex items-center justify-between">
                  <span className="text-[11px] font-semibold text-stone-400">
                    OPD Available
                  </span>
                  <Link
                    to={`/departments/${dept.id}`}
                    className="inline-flex items-center gap-1 text-xs font-bold text-orange-600 group-hover:text-orange-700"
                  >
                    <span>Details</span>
                    <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Why Choose HospitalSee Section */}
      <section className="py-16 bg-white border-y border-orange-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Narrative */}
            <div className="lg:col-span-6 space-y-5">
              <span className="text-xs font-bold uppercase tracking-wider text-orange-600">
                Why Patients Trust Us
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 leading-tight">
                A Legacy Built on Accurate Diagnostics, Ethical Medicine & Patient Well-being
              </h2>
              <p className="text-stone-600 text-sm leading-relaxed">
                Founded in 1920 in the heart of Delhi, HospitalSee has evolved into a premier tertiary health institution. We combine the warmth of family-centric healing with state-of-the-art medical technology.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-amber-50/50 border border-amber-100">
                  <div className="w-8 h-8 rounded-lg bg-orange-100 text-orange-700 flex items-center justify-center mb-2.5">
                    <Award className="w-4 h-4" />
                  </div>
                  <h4 className="font-bold text-sm text-stone-800">NABH Accredited</h4>
                  <p className="text-xs text-stone-500 mt-1">
                    Stringent compliance with national patient safety and clinical protocols.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-amber-50/50 border border-amber-100">
                  <div className="w-8 h-8 rounded-lg bg-amber-100 text-amber-800 flex items-center justify-center mb-2.5">
                    <Activity className="w-4 h-4" />
                  </div>
                  <h4 className="font-bold text-sm text-stone-800">Modular Laminar OTs</h4>
                  <p className="text-xs text-stone-500 mt-1">
                    HEPA-filtered positive pressure theatres ensuring near-zero infection rates.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-amber-50/50 border border-amber-100">
                  <div className="w-8 h-8 rounded-lg bg-yellow-100 text-yellow-800 flex items-center justify-center mb-2.5">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <h4 className="font-bold text-sm text-stone-800">Cashless TPA Desk</h4>
                  <p className="text-xs text-stone-500 mt-1">
                    Empanelled with CGHS, ECHS and 25+ insurance networks with fast-track approval.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-amber-50/50 border border-amber-100">
                  <div className="w-8 h-8 rounded-lg bg-orange-100 text-orange-700 flex items-center justify-center mb-2.5">
                    <HeartPulse className="w-4 h-4" />
                  </div>
                  <h4 className="font-bold text-sm text-stone-800">24x7 Critical Support</h4>
                  <p className="text-xs text-stone-500 mt-1">
                    Round-the-clock emergency room, multi-bed ICU, dialysis, and in-house pharmacy.
                  </p>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-stone-900 hover:bg-stone-800 text-white font-bold text-xs transition-colors"
                >
                  <span>Read Our Century History</span>
                  <ArrowRight className="w-3.5 h-3.5 text-yellow-300" />
                </Link>
              </div>
            </div>

            {/* Right Media / Feature Area with the REQUIRED YouTube Placeholder */}
            <div className="lg:col-span-6 space-y-4">
              <div className="bg-amber-50/50 p-6 rounded-3xl border border-amber-200">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="font-extrabold text-base text-stone-800">
                      Hospital Facility Tour & Patient Stories
                    </h3>
                    <p className="text-xs text-stone-500">
                      Inside look at our modular OTs, Cath Lab, and patient suites
                    </p>
                  </div>
                  <span className="text-[10px] font-bold bg-amber-100 text-orange-800 px-2.5 py-1 rounded-full uppercase">
                    Virtual Showcase
                  </span>
                </div>

                {/* THE REQUIRED YOUTUBE PLACEHOLDER AS A BLANK SQUARE SPACE */}
                <YouTubePlaceholder
                  aspectRatio="square"
                  label="HospitalSee Video Documentary & Patient Recovery Film"
                />

                <p className="text-[11px] text-stone-500 text-center mt-3">
                  Documentary highlighting HospitalSee&apos;s centenary clinical milestones and modern patient rehabilitation facilities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Featured Doctors Section */}
      <section className="py-16 bg-[#fffdfa]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-orange-600">
                Experienced Medical Leadership
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 mt-1">
                Consult With Renowned Specialists
              </h2>
              <p className="text-sm text-stone-600 mt-1 max-w-xl">
                Our senior clinicians hold national and international fellowships, bringing patient-focused expertise to every consultation.
              </p>
            </div>
            <Link
              to="/doctors"
              className="inline-flex items-center gap-1.5 text-orange-700 hover:text-orange-800 font-bold text-sm group"
            >
              <span>View All Doctors ({DOCTORS.length})</span>
              <ArrowRight className="w-4 h-4 text-orange-600 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {DOCTORS.slice(0, 6).map((doc) => (
              <div
                key={doc.id}
                className="bg-white rounded-2xl p-5 shadow-sm hover:shadow-lg border border-orange-100 hover:border-amber-300 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start gap-4">
                    <img
                      src={doc.image}
                      alt={doc.name}
                      className="w-20 h-20 rounded-2xl object-cover border-2 border-amber-100 shrink-0"
                      loading="lazy"
                    />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-1 text-amber-500 text-xs font-bold mb-1">
                        <Star className="w-3.5 h-3.5 fill-current" />
                        <span>{doc.rating}</span>
                        <span className="text-stone-400 font-normal">({doc.reviewCount})</span>
                      </div>
                      <h3 className="font-extrabold text-base text-stone-900 truncate">
                        {doc.name}
                      </h3>
                      <p className="text-xs text-orange-700 font-semibold truncate">
                        {doc.designation}
                      </p>
                      <p className="text-[11px] text-stone-500 mt-0.5 truncate">
                        {doc.departmentName}
                      </p>
                    </div>
                  </div>

                  <div className="mt-4 p-3 bg-amber-50/50 rounded-xl space-y-1 text-xs">
                    <div className="flex justify-between">
                      <span className="text-stone-500">Experience:</span>
                      <span className="font-bold text-stone-800">{doc.experienceYears}+ Years</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-stone-500">OPD Timings:</span>
                      <span className="font-medium text-stone-800 truncate max-w-[170px]">{doc.opdSchedule}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-stone-500">OPD Fee:</span>
                      <span className="font-bold text-orange-700">₹{doc.consultationFee}</span>
                    </div>
                  </div>
                </div>

                <div className="mt-5 pt-3 border-t border-stone-100 flex items-center gap-2">
                  <button
                    onClick={() => openQuickBook(doc.id)}
                    className="flex-1 py-2.5 px-3 rounded-xl bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-700 hover:to-amber-700 text-white font-bold text-xs shadow-sm transition-colors text-center cursor-pointer"
                  >
                    Book Appointment
                  </button>
                  <Link
                    to={`/doctors/${doc.id}`}
                    className="py-2.5 px-3 rounded-xl bg-amber-50 hover:bg-amber-100 text-stone-700 font-semibold text-xs transition-colors"
                  >
                    Profile
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Health Packages Section */}
      <section className="py-16 bg-white border-t border-orange-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-orange-600">
              Preventive Healthcare
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 mt-1">
              Affordable Master Health Checkup Packages
            </h2>
            <p className="text-sm text-stone-600 mt-2">
              Early diagnosis preserves longevity. Comprehensive health profiles with free home sample collection across Delhi NCR.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {HEALTH_PACKAGES.slice(0, 3).map((pkg) => (
              <div
                key={pkg.id}
                className={`rounded-3xl p-6 border transition-all flex flex-col justify-between relative ${
                  pkg.popular
                    ? 'border-orange-500 bg-amber-50/40 shadow-xl ring-2 ring-orange-500/20'
                    : 'border-stone-200 bg-white shadow-sm hover:shadow-md'
                }`}
              >
                {pkg.popular && (
                  <span className="absolute -top-3 left-6 bg-orange-600 text-white text-[10px] font-bold uppercase tracking-wider px-3 py-0.5 rounded-full shadow">
                    Most Recommended
                  </span>
                )}

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-semibold text-stone-500 uppercase">
                      {pkg.category}
                    </span>
                    <span className="text-xs font-bold text-orange-800 bg-amber-100 px-2 py-0.5 rounded">
                      {pkg.totalTests} Tests Included
                    </span>
                  </div>

                  <h3 className="font-extrabold text-lg text-stone-900">
                    {pkg.title}
                  </h3>
                  <p className="text-xs text-stone-500 mt-1 line-clamp-2">
                    {pkg.subtitle}
                  </p>

                  <div className="mt-4 flex items-baseline gap-2">
                    <span className="text-2xl font-black text-stone-900">
                      ₹{pkg.discountedPrice}
                    </span>
                    <span className="text-xs text-stone-400 line-through">
                      ₹{pkg.originalPrice}
                    </span>
                    <span className="text-xs font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                      Save {Math.round(((pkg.originalPrice - pkg.discountedPrice) / pkg.originalPrice) * 100)}%
                    </span>
                  </div>

                  <div className="mt-5 space-y-2 text-xs text-stone-600">
                    <p className="font-semibold text-stone-800">Key Parameters Covered:</p>
                    <ul className="space-y-1.5">
                      {pkg.testsIncluded.slice(0, 3).map((testGrp, idx) => (
                        <li key={idx} className="flex items-start gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
                          <span>{testGrp.category}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-stone-100 space-y-2">
                  <Link
                    to={`/health-packages?pkg=${pkg.id}`}
                    className="w-full py-3 rounded-xl bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-700 hover:to-amber-700 text-white font-bold text-xs shadow-md transition-all text-center block"
                  >
                    Book This Health Checkup
                  </Link>
                  <p className="text-[11px] text-stone-400 text-center">
                    Reports in {pkg.tatHours} hrs • Free Home Sample Collection
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link
              to="/health-packages"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-orange-700 hover:text-orange-800 hover:underline"
            >
              <span>Compare All Health Packages & Full Test Lists</span>
              <ArrowRight className="w-3.5 h-3.5 text-orange-600" />
            </Link>
          </div>
        </div>
      </section>

      {/* 7. Cashless TPA / Insurance Finder Strip */}
      <section className="py-14 bg-gradient-to-br from-stone-950 via-amber-950 to-stone-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5 space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-yellow-300">
                100% Cashless Treatment
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold leading-tight">
                Empanelled with CGHS, ECHS & All Major TPAs
              </h2>
              <p className="text-stone-300 text-xs sm:text-sm">
                Our in-house 24x7 TPA Helpdesk coordinates approvals directly with your insurance provider, allowing you to focus purely on recovery without out-of-pocket stress.
              </p>
              <div className="pt-2">
                <Link
                  to="/cashless-tpa"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-amber-400 to-orange-500 hover:from-amber-300 hover:to-orange-400 text-stone-950 font-bold text-xs transition-colors"
                >
                  <ShieldCheck className="w-4 h-4" />
                  <span>View All Empanelled Partners</span>
                </Link>
              </div>
            </div>

            <div className="lg:col-span-7 bg-white/10 backdrop-blur-md rounded-2xl p-5 border border-white/15">
              <div className="flex items-center gap-3 mb-4">
                <Search className="w-4 h-4 text-yellow-300" />
                <input
                  type="text"
                  placeholder="Quick check your insurer (e.g. Star, HDFC, CGHS, Medi Assist)..."
                  value={tpaQuery}
                  onChange={(e) => setTpaQuery(e.target.value)}
                  className="w-full bg-transparent text-white placeholder-stone-400 text-xs sm:text-sm outline-none"
                />
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                {filteredTpas.map((tpa) => (
                  <div
                    key={tpa.id}
                    className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-center hover:bg-white/10 transition-colors"
                  >
                    <span className="text-[10px] font-bold text-yellow-300 uppercase block truncate">
                      {tpa.type}
                    </span>
                    <h4 className="text-xs font-bold text-white mt-1 truncate">
                      {tpa.name}
                    </h4>
                    <span className="text-[10px] text-amber-300 block mt-0.5">
                      {tpa.turnaroundTime}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Patient Testimonials & Google Ratings */}
      <section className="py-16 bg-[#fffdfa]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-orange-600">
                Stories of Healing
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 mt-1">
                Real Patient Recoveries
              </h2>
              <p className="text-sm text-stone-600 mt-1 max-w-xl">
                Read how our doctors and nursing staff delivered life-changing interventions for patients across Delhi NCR.
              </p>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex items-center text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <span className="text-xs font-bold text-stone-800">4.9 / 5.0 (1,200+ Verified Reviews)</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {PATIENT_REVIEWS.slice(0, 3).map((review) => (
              <div
                key={review.id}
                className="bg-white rounded-2xl p-6 shadow-sm border border-orange-100 hover:border-amber-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center text-amber-500">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-current" />
                      ))}
                    </div>
                    <span className="text-[11px] text-stone-400">{review.date}</span>
                  </div>

                  <p className="text-xs text-stone-700 leading-relaxed italic">
                    &ldquo;{review.comment}&rdquo;
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-stone-100">
                  <h4 className="font-bold text-xs text-stone-900">{review.patientName}</h4>
                  <p className="text-[11px] text-orange-700 font-medium">{review.treatment}</p>
                  <p className="text-[10px] text-stone-400">{review.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. Health Blog & Preventative Tips */}
      <section className="py-16 bg-white border-t border-orange-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-orange-600">
                Doctor Authored Insights
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 mt-1">
                Health & Wellness Articles
              </h2>
            </div>
            <Link
              to="/blog-faq"
              className="inline-flex items-center gap-1.5 text-orange-700 hover:text-orange-800 font-bold text-sm"
            >
              <span>View All Articles & FAQs</span>
              <ArrowRight className="w-4 h-4 text-orange-600" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {BLOG_POSTS.map((post) => (
              <div
                key={post.id}
                className="bg-amber-50/40 rounded-2xl overflow-hidden border border-amber-200/80 flex flex-col justify-between hover:shadow-md transition-shadow"
              >
                <div>
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-44 object-cover"
                    loading="lazy"
                  />
                  <div className="p-5">
                    <div className="flex items-center justify-between text-[11px] text-stone-500 mb-2">
                      <span className="font-bold text-orange-800 bg-amber-100 px-2 py-0.5 rounded">
                        {post.category}
                      </span>
                      <span>{post.readTime}</span>
                    </div>

                    <h3 className="font-bold text-sm text-stone-900 line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-xs text-stone-600 mt-2 line-clamp-3">
                      {post.excerpt}
                    </p>
                  </div>
                </div>

                <div className="p-5 pt-0">
                  <Link
                    to="/blog-faq"
                    className="text-xs font-bold text-orange-600 hover:text-orange-700 flex items-center gap-1"
                  >
                    <span>Read Article</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. The required Ad banner at the bottom of the page */}
      <AdBanner />
    </div>
  );
};
