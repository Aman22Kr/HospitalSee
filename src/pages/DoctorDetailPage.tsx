import React from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  Star,
  Calendar,
  Clock,
  MapPin,
  CheckCircle2,
  Heart,
  Award,
  ChevronLeft,
  Building,
  Languages,
  ShieldCheck
} from 'lucide-react';
import { DOCTORS } from '../data/hospitalData';
import { useHospital } from '../context/HospitalContext';
import { AdBanner } from '../components/layout/AdBanner';

export const DoctorDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { toggleFavoriteDoctor, isDoctorFavorite, openQuickBook } = useHospital();

  const doctor = DOCTORS.find((d) => d.id === id);

  if (!doctor) {
    return (
      <div className="max-w-4xl mx-auto py-20 px-4 text-center">
        <h2 className="text-2xl font-bold text-stone-800">Doctor Profile Not Found</h2>
        <p className="text-stone-500 text-sm mt-2">
          The requested specialist could not be found in our directory.
        </p>
        <Link
          to="/doctors"
          className="inline-flex items-center gap-2 mt-4 px-5 py-2.5 rounded-xl bg-orange-600 hover:bg-orange-700 text-white text-xs font-bold shadow-md shadow-orange-600/20"
        >
          <ChevronLeft className="w-4 h-4" />
          <span>Back to All Doctors</span>
        </Link>
      </div>
    );
  }

  const isFav = isDoctorFavorite(doctor.id);

  return (
    <div className="w-full bg-[#fffdfa]">
      {/* Top Banner */}
      <section className="bg-gradient-to-r from-stone-950 via-orange-950 to-stone-900 text-white py-12 px-4 sm:px-6 relative overflow-hidden">
        <div className="absolute -top-16 -right-16 w-80 h-80 rounded-full bg-amber-500/10 blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto relative z-10">
          <Link
            to="/doctors"
            className="inline-flex items-center gap-1.5 text-xs text-amber-300 hover:text-white font-semibold mb-4"
          >
            <ChevronLeft className="w-4 h-4 text-yellow-300" />
            <span>All Doctors</span>
          </Link>
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-amber-300 bg-orange-900/40 border border-amber-400/30 px-2.5 py-0.5 rounded-full">
                {doctor.departmentName}
              </span>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-white mt-2">
                {doctor.name}
              </h1>
              <p className="text-sm text-amber-100 mt-0.5">{doctor.designation}</p>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() => toggleFavoriteDoctor(doctor.id)}
                className={`p-2.5 rounded-xl border flex items-center gap-2 text-xs font-bold transition-colors cursor-pointer ${
                  isFav
                    ? 'bg-orange-50 border-orange-200 text-orange-600'
                    : 'bg-white/10 border-white/20 text-white hover:bg-white/20'
                }`}
              >
                <Heart className={`w-4 h-4 ${isFav ? 'fill-current' : ''}`} />
                <span>{isFav ? 'Saved' : 'Save Doctor'}</span>
              </button>

              <button
                onClick={() => openQuickBook(doctor.id)}
                className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-amber-400 to-orange-500 hover:from-amber-300 hover:to-orange-400 text-stone-950 font-bold text-xs shadow-md transition-all active:scale-95 cursor-pointer"
              >
                Book Consultation
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Profile Details Layout */}
      <section className="py-14 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Left Column Profile info */}
            <div className="lg:col-span-8 space-y-8">
              {/* Profile Card */}
              <div className="flex flex-col sm:flex-row items-start gap-6 p-6 rounded-3xl bg-[#fffaf5] border border-orange-100 shadow-sm">
                <img
                  src={doctor.image}
                  alt={doctor.name}
                  className="w-32 h-32 sm:w-40 sm:h-40 rounded-3xl object-cover border-2 border-amber-200 shrink-0 shadow-md"
                />
                <div className="space-y-2">
                  <div className="flex items-center gap-1.5 text-amber-500 text-sm font-bold">
                    <Star className="w-4 h-4 fill-current" />
                    <span>{doctor.rating}</span>
                    <span className="text-stone-400 font-normal">
                      ({doctor.reviewCount} verified patient ratings)
                    </span>
                  </div>

                  <h2 className="text-xl font-extrabold text-stone-900">{doctor.name}</h2>
                  <p className="text-xs text-orange-700 font-semibold">{doctor.designation}</p>
                  <p className="text-xs text-stone-600">{doctor.qualifications}</p>

                  <div className="flex flex-wrap gap-4 pt-2 text-xs text-stone-600">
                    <div>
                      <span className="text-stone-400 block text-[11px]">Experience:</span>
                      <strong className="text-stone-800">{doctor.experienceYears}+ Years</strong>
                    </div>
                    <div>
                      <span className="text-stone-400 block text-[11px]">Languages:</span>
                      <strong className="text-stone-800">{doctor.languages.join(', ')}</strong>
                    </div>
                    <div>
                      <span className="text-stone-400 block text-[11px]">OPD Fee:</span>
                      <strong className="text-orange-600 font-bold">₹{doctor.consultationFee}</strong>
                    </div>
                  </div>
                </div>
              </div>

              {/* Biography */}
              <div>
                <h3 className="font-bold text-lg text-stone-900 mb-3">About the Doctor</h3>
                <p className="text-sm text-stone-600 leading-relaxed">{doctor.bio}</p>
              </div>

              {/* Specializations & Clinical Areas */}
              <div>
                <h3 className="font-bold text-lg text-stone-900 mb-3">
                  Areas of Specialization & Clinical Focus
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {doctor.specializations.map((spec, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2 p-3 bg-amber-50/60 border border-amber-200 rounded-xl text-xs font-semibold text-stone-800"
                    >
                      <CheckCircle2 className="w-4 h-4 text-orange-600 shrink-0" />
                      <span>{spec}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* OPD Schedule by Days */}
              <div>
                <h3 className="font-bold text-lg text-stone-900 mb-3">
                  Weekly OPD Schedule & Availability
                </h3>
                <div className="border border-orange-100 rounded-2xl overflow-hidden text-xs">
                  <div className="bg-amber-50/80 p-3 font-bold text-stone-800 grid grid-cols-3 border-b border-amber-200">
                    <span>Day</span>
                    <span>OPD Timings</span>
                    <span>Location</span>
                  </div>
                  {doctor.availableDays.map((day, idx) => (
                    <div
                      key={idx}
                      className="p-3 border-t border-orange-50 grid grid-cols-3 text-stone-700 font-medium"
                    >
                      <span className="font-semibold text-stone-900">{day}</span>
                      <span>{doctor.opdSchedule}</span>
                      <span>{doctor.roomNumber}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Booking Sidebar */}
            <div className="lg:col-span-4 space-y-6">
              <div className="bg-[#fffaf5] p-6 rounded-3xl border border-orange-100 shadow-sm space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-stone-400">
                    OPD Consultation
                  </span>
                  <span className="text-lg font-black text-orange-600">₹{doctor.consultationFee}</span>
                </div>

                <div className="p-3 bg-white rounded-xl border border-orange-100 text-xs space-y-1">
                  <div className="font-semibold text-stone-800">Room / OPD Location:</div>
                  <div className="text-stone-600">{doctor.roomNumber}, HospitalSee Main OPD Wing</div>
                </div>

                <div className="p-3 bg-white rounded-xl border border-orange-100 text-xs space-y-1">
                  <div className="font-semibold text-stone-800">Days Present:</div>
                  <div className="text-stone-600">{doctor.availableDays.join(', ')}</div>
                </div>

                <button
                  onClick={() => openQuickBook(doctor.id)}
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-orange-600 via-amber-600 to-orange-500 hover:from-orange-700 hover:to-amber-700 text-white font-bold text-sm shadow-md shadow-orange-600/20 transition-all active:scale-98 cursor-pointer flex items-center justify-center gap-2"
                >
                  <Calendar className="w-4 h-4 text-yellow-200" />
                  <span>Reserve Appointment Slot</span>
                </button>

                <p className="text-[11px] text-stone-400 text-center">
                  Instant confirmation • Pay at OPD counter
                </p>
              </div>

              {/* Cashless TPA note */}
              <div className="p-5 bg-amber-50/80 rounded-2xl border border-amber-200 text-xs space-y-2">
                <div className="flex items-center gap-2 font-bold text-stone-900">
                  <ShieldCheck className="w-4 h-4 text-orange-600" />
                  <span>Cashless Insurance Accepted</span>
                </div>
                <p className="text-stone-700">
                  Procedures and surgeries recommended by {doctor.name} are covered under all major insurance networks & CGHS/ECHS.
                </p>
                <Link to="/cashless-tpa" className="text-orange-700 font-bold underline block">
                  Verify Your TPA Card →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ad Section */}
      <AdBanner />
    </div>
  );
};
