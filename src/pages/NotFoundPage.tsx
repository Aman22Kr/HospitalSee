import React from 'react';
import { Link } from 'react-router-dom';
import { HeartPulse, Home, Search, Calendar, Phone, ArrowLeft } from 'lucide-react';
import { HOSPITAL_INFO } from '../data/hospitalData';
import { useHospital } from '../context/HospitalContext';
import { AdBanner } from '../components/layout/AdBanner';

export const NotFoundPage: React.FC = () => {
  const { openSearchModal } = useHospital();

  return (
    <div className="w-full min-h-[70vh] flex flex-col justify-between bg-white">
      <div className="max-w-2xl mx-auto px-4 py-20 text-center space-y-6">
        <div className="w-20 h-20 rounded-3xl bg-amber-50 text-orange-600 flex items-center justify-center mx-auto border border-amber-200 shadow-sm">
          <HeartPulse className="w-10 h-10 animate-pulse text-orange-600" />
        </div>

        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-orange-700 bg-amber-100 px-3 py-1 rounded-full border border-amber-300">
            Error 404 • Page Not Found
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-stone-900 mt-3">
            We Couldn&apos;t Locate That Page
          </h1>
          <p className="text-sm text-stone-600 mt-2 max-w-md mx-auto">
            The page you are looking for might have been moved or updated. Use the quick links below to navigate back to HospitalSee services.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          <Link
            to="/"
            className="px-5 py-2.5 rounded-xl bg-orange-600 hover:bg-orange-700 text-white font-bold text-xs shadow-md shadow-orange-600/20 transition-all flex items-center gap-1.5"
          >
            <Home className="w-4 h-4 text-yellow-300" />
            <span>Return to Home</span>
          </Link>

          <Link
            to="/doctors"
            className="px-5 py-2.5 rounded-xl bg-amber-50 hover:bg-amber-100 text-stone-800 border border-amber-200 font-bold text-xs transition-colors flex items-center gap-1.5"
          >
            <Calendar className="w-4 h-4 text-orange-600" />
            <span>Find a Doctor</span>
          </Link>

          <button
            onClick={openSearchModal}
            className="px-5 py-2.5 rounded-xl bg-white hover:bg-orange-50 text-stone-700 font-bold text-xs border border-orange-200 transition-colors flex items-center gap-1.5 cursor-pointer shadow-sm"
          >
            <Search className="w-4 h-4 text-orange-600" />
            <span>Search Hospital Directory</span>
          </button>
        </div>

        <div className="p-4 bg-amber-50/80 rounded-2xl border border-amber-200 text-xs text-amber-950 max-w-sm mx-auto">
          Need urgent medical assistance? Call our 24/7 Emergency Line directly:{' '}
          <a href={`tel:${HOSPITAL_INFO.emergencyPhone}`} className="font-bold text-orange-700 underline block mt-0.5">
            {HOSPITAL_INFO.emergencyPhone}
          </a>
        </div>
      </div>

      <AdBanner />
    </div>
  );
};
