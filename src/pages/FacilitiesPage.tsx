import React from 'react';
import {
  Building2,
  Ambulance,
  HeartPulse,
  Activity,
  Droplets,
  FileSearch,
  Sparkles,
  Phone,
  ShieldCheck,
  CheckCircle2,
  Clock
} from 'lucide-react';
import { FACILITIES, HOSPITAL_INFO } from '../data/hospitalData';
import { YouTubePlaceholder } from '../components/common/YouTubePlaceholder';
import { AdBanner } from '../components/layout/AdBanner';
import { Link } from 'react-router-dom';

export const FacilitiesPage: React.FC = () => {
  const roomTypes = [
    {
      title: 'General Inpatient Ward',
      beds: '6-8 Beds per unit',
      description: 'Air-conditioned, separate male/female wings with dedicated nurse stations and bedside oxygen lines.',
      rate: '₹1,500 / day',
      features: ['Central air conditioning', 'Bedside nurse call buzzer', 'Dedicated attendant chair', 'Nutritious meals included']
    },
    {
      title: 'Semi-Private Sharing Room',
      beds: 'Twin sharing (2 beds)',
      description: 'Privacy curtain dividers, personal storage, television, attached washroom, and comfortable attendant couch.',
      rate: '₹3,200 / day',
      features: ['Attached bathroom', 'LCD television', 'Attendant convertible sofa', 'Individual wardrobe & bedside cabinet']
    },
    {
      title: 'Deluxe Private Room',
      beds: 'Single Occupancy',
      description: 'Private patient suite with en-suite modern bathroom, motorized patient bed, refrigerator, and patient-tailored diet.',
      rate: '₹5,500 / day',
      features: ['Fully motorized electric bed', 'Smart TV with cable & Wi-Fi', 'Mini refrigerator', 'Complimentary attendant sofa bed']
    },
    {
      title: 'Executive Super Deluxe Suite',
      beds: 'Suite (Patient room + Anteroom)',
      description: 'Two-room suite with guest lounge, separate visitors seating area, microwave, dining set, and 24x7 personal nursing attendant.',
      rate: '₹9,500 / day',
      features: ['Two-room suite with guest lounge', 'Dedicated nursing staff', 'Microwave & fruit basket', 'Express discharge processing']
    }
  ];

  return (
    <div className="w-full bg-[#fffdfa]">
      {/* Banner */}
      <section className="bg-gradient-to-r from-stone-950 via-orange-950 to-stone-900 text-white py-14 px-4 sm:px-6 relative overflow-hidden">
        <div className="absolute -top-16 -right-16 w-80 h-80 rounded-full bg-amber-500/10 blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto text-left relative z-10">
          <span className="inline-block text-xs font-extrabold uppercase tracking-wider text-amber-400 bg-orange-900/40 border border-amber-400/30 px-2.5 py-1 rounded-full mb-2">
            World-Class Infrastructure
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white mt-1">
            Hospital Facilities & Critical Infrastructure
          </h1>
          <p className="text-stone-300 text-sm sm:text-base mt-2 max-w-2xl leading-relaxed">
            From positive-pressure modular operation theatres to Level-III neonatal ICUs and 24x7 automated laboratory services.
          </p>
        </div>
      </section>

      {/* Facilities Grid */}
      <section className="py-14 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {FACILITIES.map((facility) => (
              <div
                key={facility.id}
                className="bg-white rounded-3xl overflow-hidden border border-orange-100 hover:border-amber-300 shadow-sm hover:shadow-lg transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-full h-52 relative">
                    <img
                      src={facility.image}
                      alt={facility.name}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute top-3 right-3 flex items-center gap-2">
                      {facility.available24x7 && (
                        <span className="text-[10px] font-bold uppercase tracking-wider bg-orange-600 text-white px-2.5 py-1 rounded-full shadow-sm">
                          24x7 Available
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="p-6">
                    <span className="text-xs font-bold text-orange-700 uppercase tracking-wider block mb-1">
                      {facility.shortName} • {facility.contactExtension}
                    </span>
                    <h3 className="font-extrabold text-lg text-stone-900 mb-1">
                      {facility.name}
                    </h3>
                    <p className="text-xs text-amber-800 font-medium mb-3">
                      {facility.tagline}
                    </p>
                    <p className="text-xs text-stone-600 leading-relaxed mb-4">
                      {facility.description}
                    </p>

                    <div className="space-y-1.5 pt-3 border-t border-orange-50">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-stone-400 block mb-1">
                        Facility Highlights:
                      </span>
                      {facility.features.map((feat, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-xs text-stone-700">
                          <CheckCircle2 className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <div className="pt-4 border-t border-orange-50 flex items-center justify-between">
                    <span className="text-xs text-stone-500 font-medium">NABH Compliant Wing</span>
                    <Link
                      to="/contact"
                      className="text-xs font-bold text-orange-700 hover:text-orange-800 hover:underline"
                    >
                      Inquire with Front Desk →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Room Types & Patient Accommodation */}
      <section className="py-16 bg-[#fffaf5] border-t border-orange-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-orange-600">
              Inpatient Care
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 mt-1">
              Room Categories & Patient Accommodation
            </h2>
            <p className="text-xs sm:text-sm text-stone-600 mt-2">
              All rooms are backed by medical gas pipelines, emergency call systems, and 24x7 nursing vigilance. Cashless coverage applies according to insurance room-rent caps.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {roomTypes.map((room, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 border border-orange-100 hover:border-amber-300 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <span className="text-xs font-bold text-orange-700 uppercase">{room.beds}</span>
                  <h3 className="font-extrabold text-base text-stone-900 mt-1 mb-2">
                    {room.title}
                  </h3>
                  <div className="text-xl font-black text-orange-600 mb-3">
                    {room.rate}
                  </div>
                  <p className="text-xs text-stone-600 leading-relaxed mb-4">
                    {room.description}
                  </p>

                  <div className="space-y-1.5 pt-3 border-t border-orange-50 text-xs text-stone-700">
                    {room.features.map((f, i) => (
                      <div key={i} className="flex items-start gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
                        <span>{f}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-3 border-t border-orange-50">
                  <Link
                    to="/patient-guide"
                    className="w-full py-2.5 rounded-xl bg-amber-50 hover:bg-amber-100 text-stone-800 border border-amber-200 font-bold text-xs text-center block transition-colors"
                  >
                    Admission Guidelines
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Virtual Tour section with REQUIRED YouTube Placeholder */}
      <section className="py-14 bg-white border-t border-orange-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-4">
          <span className="text-xs font-bold uppercase tracking-wider text-orange-600">
            Interactive Showcase
          </span>
          <h2 className="text-2xl font-extrabold text-stone-900">
            Virtual Hospital Walkthrough
          </h2>
          <p className="text-xs text-stone-500 max-w-lg mx-auto">
            Experience our hygienic recovery suites, triage emergency bays, and laminar operation rooms.
          </p>

          <div className="pt-4 max-w-lg mx-auto">
            {/* The required blank square space */}
            <YouTubePlaceholder aspectRatio="square" label="Facility Walkthrough Film" />
          </div>
        </div>
      </section>

      {/* Ad Section */}
      <AdBanner />
    </div>
  );
};
