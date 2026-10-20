import React from 'react';
import { Link } from 'react-router-dom';
import {
  HeartPulse,
  MapPin,
  Phone,
  Mail,
  Clock,
  ShieldCheck,
  Award,
  ChevronRight,
  ExternalLink,
  Ambulance,
  Sparkles
} from 'lucide-react';
import { HOSPITAL_INFO, DEPARTMENTS } from '../../data/hospitalData';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-stone-950 text-stone-300 border-t border-stone-800 text-sm">
      {/* Top Value Ribbon */}
      <div className="bg-gradient-to-r from-orange-600 via-amber-600 to-orange-700 border-b border-orange-500/40 py-8 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6 text-white">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-white/15 flex items-center justify-center shrink-0 border border-white/20">
              <Award className="w-6 h-6 text-yellow-300" />
            </div>
            <div>
              <h4 className="font-bold text-base">Centurial Legacy</h4>
              <p className="text-xs text-amber-100">100+ years of compassionate healing since 1920</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-white/15 flex items-center justify-center shrink-0 border border-white/20">
              <ShieldCheck className="w-6 h-6 text-yellow-300" />
            </div>
            <div>
              <h4 className="font-bold text-base">NABH & NABL</h4>
              <p className="text-xs text-amber-100">National standards of patient safety and clinical rigor</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-white/15 flex items-center justify-center shrink-0 border border-white/20">
              <Ambulance className="w-6 h-6 text-yellow-300" />
            </div>
            <div>
              <h4 className="font-bold text-base">24x7 Critical Care</h4>
              <p className="text-xs text-amber-100">Immediate trauma, stroke, and cardiac resuscitation</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-white/15 flex items-center justify-center shrink-0 border border-white/20">
              <HeartPulse className="w-6 h-6 text-yellow-300" />
            </div>
            <div>
              <h4 className="font-bold text-base">Cashless Hospitalisation</h4>
              <p className="text-xs text-amber-100">Empanelled with CGHS, ECHS & 25+ major TPAs</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Col 1: About HospitalSee */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-orange-600 via-amber-500 to-yellow-400 flex items-center justify-center text-white shadow-md">
                <HeartPulse className="w-6 h-6" />
              </div>
              <div>
                <span className="text-2xl font-extrabold text-white tracking-tight">
                  Hospital<span className="text-orange-400">See</span>
                </span>
                <p className="text-[11px] text-stone-400">Premier Multi-Speciality Hospital</p>
              </div>
            </Link>

            <p className="text-xs text-stone-400 leading-relaxed max-w-md">
              HospitalSee represents a century-old commitment to affordable, ethical, and clinically rigorous healthcare. Located centrally at Karol Bagh, New Delhi, we provide cutting-edge surgical infrastructure, 24x7 emergency response, modular operation theatres, and dedicated intensive care units.
            </p>

            <div className="pt-2">
              <h5 className="text-xs font-bold uppercase tracking-wider text-stone-300 mb-2">
                Accreditations & Quality Standards
              </h5>
              <div className="flex flex-wrap gap-2">
                {HOSPITAL_INFO.accreditations.map((acc, idx) => (
                  <span
                    key={idx}
                    className="text-[11px] font-medium bg-stone-900 border border-stone-800 text-amber-300 px-2.5 py-1 rounded"
                  >
                    {acc.name}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-4 border-b border-stone-800 pb-2">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs text-stone-400">
              <li>
                <Link to="/about" className="hover:text-amber-400 flex items-center gap-1.5 transition-colors">
                  <ChevronRight className="w-3 h-3 text-orange-500" />
                  <span>About Our Legacy</span>
                </Link>
              </li>
              <li>
                <Link to="/doctors" className="hover:text-amber-400 flex items-center gap-1.5 transition-colors">
                  <ChevronRight className="w-3 h-3 text-orange-500" />
                  <span>Find a Doctor & OPD</span>
                </Link>
              </li>
              <li>
                <Link to="/health-packages" className="hover:text-amber-400 flex items-center gap-1.5 transition-colors">
                  <ChevronRight className="w-3 h-3 text-orange-500" />
                  <span>Health Checkup Packages</span>
                </Link>
              </li>
              <li>
                <Link to="/facilities" className="hover:text-amber-400 flex items-center gap-1.5 transition-colors">
                  <ChevronRight className="w-3 h-3 text-orange-500" />
                  <span>Facilities & Critical Care</span>
                </Link>
              </li>
              <li>
                <Link to="/cashless-tpa" className="hover:text-amber-400 flex items-center gap-1.5 transition-colors">
                  <ChevronRight className="w-3 h-3 text-orange-500" />
                  <span>Cashless Insurance & TPA</span>
                </Link>
              </li>
              <li>
                <Link to="/patient-guide" className="hover:text-amber-400 flex items-center gap-1.5 transition-colors">
                  <ChevronRight className="w-3 h-3 text-orange-500" />
                  <span>Patient Guide & Admission</span>
                </Link>
              </li>
              <li>
                <Link to="/my-appointments" className="hover:text-amber-400 flex items-center gap-1.5 transition-colors">
                  <ChevronRight className="w-3 h-3 text-orange-500" />
                  <span>My Appointments & Portal</span>
                </Link>
              </li>
              <li>
                <Link to="/blog-faq" className="hover:text-amber-400 flex items-center gap-1.5 transition-colors">
                  <ChevronRight className="w-3 h-3 text-orange-500" />
                  <span>Health Blog & FAQs</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Key Specialities */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-4 border-b border-stone-800 pb-2">
              Centres of Care
            </h4>
            <ul className="space-y-2 text-xs text-stone-400">
              {DEPARTMENTS.slice(0, 7).map((dept) => (
                <li key={dept.id}>
                  <Link
                    to={`/departments/${dept.id}`}
                    className="hover:text-amber-400 flex items-center gap-1.5 transition-colors"
                  >
                    <ChevronRight className="w-3 h-3 text-orange-500" />
                    <span className="truncate">{dept.name}</span>
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/departments" className="text-amber-400 font-semibold hover:underline">
                  + All Specialities ({DEPARTMENTS.length})
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: 24/7 Helpline & Location */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-4 border-b border-stone-800 pb-2">
              24/7 Helpline & Reach Us
            </h4>
            <div className="space-y-3 text-xs text-stone-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-orange-400 shrink-0 mt-0.5" />
                <span>{HOSPITAL_INFO.address}</span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <div>
                  <span className="text-stone-500 block text-[10px]">Emergency Hotline:</span>
                  <a href={`tel:${HOSPITAL_INFO.emergencyPhone}`} className="text-amber-400 font-bold hover:underline">
                    {HOSPITAL_INFO.emergencyPhone}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <Ambulance className="w-4 h-4 text-yellow-400 shrink-0" />
                <div>
                  <span className="text-stone-500 block text-[10px]">Ambulance Dispatch:</span>
                  <a href={`tel:${HOSPITAL_INFO.ambulanceHotline}`} className="text-white font-bold hover:underline">
                    {HOSPITAL_INFO.ambulanceHotline}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-orange-400 shrink-0" />
                <div>
                  <span className="text-stone-500 block text-[10px]">OPD Consultation:</span>
                  <span className="text-stone-300 font-medium">8:00 AM - 8:00 PM (Mon-Sat)</span>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                <a href={`mailto:${HOSPITAL_INFO.email}`} className="text-stone-300 hover:text-white">
                  {HOSPITAL_INFO.email}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Cashless TPA Badges */}
        <div className="mt-10 pt-6 border-t border-stone-800/80">
          <p className="text-xs font-semibold text-stone-400 uppercase tracking-wider mb-3">
            Major Empanelled Insurers & TPAs:
          </p>
          <div className="flex flex-wrap items-center gap-2 text-[11px] text-stone-400">
            <span className="bg-stone-900 border border-stone-800 px-2.5 py-1 rounded text-stone-300">Star Health</span>
            <span className="bg-stone-900 border border-stone-800 px-2.5 py-1 rounded text-stone-300">CGHS / ECHS</span>
            <span className="bg-stone-900 border border-stone-800 px-2.5 py-1 rounded text-stone-300">HDFC ERGO</span>
            <span className="bg-stone-900 border border-stone-800 px-2.5 py-1 rounded text-stone-300">ICICI Lombard</span>
            <span className="bg-stone-900 border border-stone-800 px-2.5 py-1 rounded text-stone-300">Care Health</span>
            <span className="bg-stone-900 border border-stone-800 px-2.5 py-1 rounded text-stone-300">Niva Bupa</span>
            <span className="bg-stone-900 border border-stone-800 px-2.5 py-1 rounded text-stone-300">Medi Assist TPA</span>
            <span className="bg-stone-900 border border-stone-800 px-2.5 py-1 rounded text-stone-300">Paramount TPA</span>
            <span className="bg-stone-900 border border-stone-800 px-2.5 py-1 rounded text-stone-300">MD India TPA</span>
            <Link to="/cashless-tpa" className="text-amber-400 font-semibold hover:underline px-2">
              View All 25+ Partners →
            </Link>
          </div>
        </div>

        {/* Bottom credits & disclaimer */}
        <div className="mt-8 pt-6 border-t border-stone-900 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <div>
            <p>© {new Date().getFullYear()} HospitalSee. Centurial Healthcare Excellence. All rights reserved.</p>
            <p className="text-[11px] text-stone-600 mt-0.5">
              Re-engineered based on Jeewan Mala Hospital for GitHub username: <span className="text-stone-400 font-mono">Aman22kr</span>.
            </p>
          </div>

          <div className="flex items-center gap-4 text-stone-400 text-xs">
            <Link to="/patient-guide" className="hover:text-white transition-colors">Patient Charter</Link>
            <span>•</span>
            <Link to="/contact" className="hover:text-white transition-colors">Emergency Protocol</Link>
            <span>•</span>
            <Link to="/blog-faq" className="hover:text-white transition-colors">FAQs</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
