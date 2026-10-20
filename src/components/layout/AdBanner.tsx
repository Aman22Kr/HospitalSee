import React, { useState } from 'react';
import { Sparkles, ArrowRight, ShieldCheck, Tag, X, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

interface AdItem {
  id: string;
  badge: string;
  title: string;
  description: string;
  ctaText: string;
  ctaLink: string;
  isExternal?: boolean;
  colorScheme: string;
}

const SAMPLE_ADS: AdItem[] = [
  {
    id: 'ad-pharmacy',
    badge: 'HospitalSee 24/7 E-Pharmacy',
    title: 'Order Genuine Prescriptions Online — Flat 20% Off Your First Order',
    description: 'Direct doorstep delivery across Delhi NCR in under 2 hours. Temperature-controlled delivery with certified pharmacists.',
    ctaText: 'Order Medicines',
    ctaLink: '/facilities',
    colorScheme: 'from-orange-950 via-stone-900 to-amber-950'
  },
  {
    id: 'ad-home-sample',
    badge: 'NABL Certified Diagnostic Lab',
    title: 'Free Home Blood Sample Collection within 10 km of Karol Bagh',
    description: 'Get verified digital pathology reports on WhatsApp & email within 6-12 hours. Zero home collection fee this month.',
    ctaText: 'Book Diagnostic Test',
    ctaLink: '/health-packages',
    colorScheme: 'from-amber-950 via-stone-900 to-orange-950'
  },
  {
    id: 'ad-cardiac',
    badge: 'Preventive Health Initiative',
    title: 'World Heart Month Special: Free 12-Lead ECG with Any Senior Citizen OPD',
    description: 'Early cardiac screening prevents acute complications. Comprehensive consultation with Dr. Rajesh Aggarwal.',
    ctaText: 'Claim Free ECG Check',
    ctaLink: '/appointments',
    colorScheme: 'from-amber-950 to-orange-950'
  }
];

export const AdBanner: React.FC = () => {
  const [currentAdIndex, setCurrentAdIndex] = useState(0);
  const [isDismissed, setIsDismissed] = useState(false);

  if (isDismissed) {
    return (
      <div className="bg-amber-50/80 border-t border-amber-200 py-1.5 px-4 text-center">
        <button
          onClick={() => setIsDismissed(false)}
          className="text-xs text-stone-600 hover:text-orange-700 underline font-medium inline-flex items-center gap-1 cursor-pointer"
        >
          <Sparkles className="w-3 h-3 text-orange-600" />
          Show HospitalSee Health & Wellness Offers (Ad)
        </button>
      </div>
    );
  }

  const currentAd = SAMPLE_ADS[currentAdIndex];

  const handleNextAd = () => {
    setCurrentAdIndex((prev) => (prev + 1) % SAMPLE_ADS.length);
  };

  return (
    <aside
      aria-label="Sponsored Health Advertisement"
      className="w-full bg-gradient-to-r from-stone-900 via-amber-950 to-stone-900 text-white border-t border-amber-900/60 py-3.5 px-4 relative overflow-hidden"
    >
      {/* Background ambient glow */}
      <div className="absolute inset-0 bg-radial from-orange-500/15 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 relative z-10">
        <div className="flex items-center gap-3.5 w-full md:w-auto">
          <div className="shrink-0 p-2.5 rounded-xl bg-orange-500/20 backdrop-blur-sm border border-amber-400/30 text-yellow-300">
            <Tag className="w-5 h-5" />
          </div>

          <div className="text-left">
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-bold uppercase tracking-wider bg-amber-400/20 text-yellow-300 border border-yellow-400/30 px-2 py-0.5 rounded-full">
                Advertisement
              </span>
              <span className="text-xs font-semibold text-amber-200">
                {currentAd.badge}
              </span>
            </div>
            <h4 className="text-sm md:text-base font-bold text-white mt-0.5">
              {currentAd.title}
            </h4>
            <p className="text-xs text-stone-300 line-clamp-1 max-w-2xl mt-0.5">
              {currentAd.description}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3 shrink-0 w-full md:w-auto justify-end">
          <button
            onClick={handleNextAd}
            title="Next offer"
            className="text-xs text-stone-400 hover:text-amber-200 px-2.5 py-1.5 rounded-lg border border-stone-700 hover:border-amber-400/50 transition-colors cursor-pointer"
          >
            Next Ad ({currentAdIndex + 1}/{SAMPLE_ADS.length})
          </button>

          <Link
            to={currentAd.ctaLink}
            className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-bold bg-gradient-to-r from-amber-400 to-orange-500 hover:from-amber-300 hover:to-orange-400 text-stone-950 rounded-lg shadow-sm transition-all hover:scale-105 active:scale-95"
          >
            <span>{currentAd.ctaText}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>

          <button
            onClick={() => setIsDismissed(true)}
            title="Hide this ad"
            aria-label="Close advertisement"
            className="text-stone-400 hover:text-stone-200 p-1.5 rounded-lg hover:bg-white/10 transition-colors ml-1 cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>
    </aside>
  );
};
