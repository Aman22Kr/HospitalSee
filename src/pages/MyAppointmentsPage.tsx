import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Calendar,
  Clock,
  User,
  CheckCircle2,
  XCircle,
  FileText,
  Heart,
  Package,
  Printer,
  Trash2,
  ArrowRight,
  ShieldCheck,
  Stethoscope
} from 'lucide-react';
import { useHospital } from '../context/HospitalContext';
import { DOCTORS } from '../data/hospitalData';
import { AdBanner } from '../components/layout/AdBanner';

export const MyAppointmentsPage: React.FC = () => {
  const {
    appointments,
    cancelAppointment,
    bookedPackages,
    favoriteDoctors,
    toggleFavoriteDoctor,
    openQuickBook
  } = useHospital();

  const [activeTab, setActiveTab] = useState<'appointments' | 'packages' | 'doctors'>('appointments');

  const savedDoctorProfiles = DOCTORS.filter((d) => favoriteDoctors.includes(d.id));

  return (
    <div className="w-full bg-[#fffdfa]">
      {/* Banner */}
      <section className="bg-gradient-to-r from-stone-950 via-orange-950 to-stone-900 text-white py-14 px-4 sm:px-6 relative overflow-hidden">
        <div className="absolute -top-16 -right-16 w-80 h-80 rounded-full bg-amber-500/10 blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto text-left relative z-10">
          <span className="inline-block text-xs font-extrabold uppercase tracking-wider text-amber-400 bg-orange-900/40 border border-amber-400/30 px-2.5 py-1 rounded-full mb-2">
            Patient Portal & Records
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white mt-1">
            My Bookings & Saved Records
          </h1>
          <p className="text-stone-300 text-sm sm:text-base mt-2 max-w-2xl leading-relaxed">
            Track your upcoming doctor consultations, scheduled diagnostic checkups, and bookmarked specialists in one place.
          </p>
        </div>
      </section>

      {/* Tabs */}
      <section className="bg-white border-b border-orange-100 sticky top-[69px] z-30 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center gap-2 py-4 overflow-x-auto">
          <button
            onClick={() => setActiveTab('appointments')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-2 shrink-0 ${
              activeTab === 'appointments'
                ? 'bg-orange-600 text-white shadow-md shadow-orange-600/20'
                : 'bg-amber-50/70 hover:bg-amber-100 text-stone-700 border border-amber-200/60'
            }`}
          >
            <Calendar className="w-3.5 h-3.5" />
            <span>OPD Appointments ({appointments.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('packages')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-2 shrink-0 ${
              activeTab === 'packages'
                ? 'bg-orange-600 text-white shadow-md shadow-orange-600/20'
                : 'bg-amber-50/70 hover:bg-amber-100 text-stone-700 border border-amber-200/60'
            }`}
          >
            <Package className="w-3.5 h-3.5" />
            <span>Health Packages ({bookedPackages.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('doctors')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-2 shrink-0 ${
              activeTab === 'doctors'
                ? 'bg-orange-600 text-white shadow-md shadow-orange-600/20'
                : 'bg-amber-50/70 hover:bg-amber-100 text-stone-700 border border-amber-200/60'
            }`}
          >
            <Heart className="w-3.5 h-3.5" />
            <span>Saved Specialists ({savedDoctorProfiles.length})</span>
          </button>
        </div>
      </section>

      {/* Main Body */}
      <section className="py-12 bg-[#fffaf5] min-h-[500px]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {/* TAB 1: OPD Appointments */}
          {activeTab === 'appointments' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="font-extrabold text-base text-stone-900">
                  Scheduled OPD Appointments
                </h3>
                <Link
                  to="/appointments"
                  className="px-4 py-2 rounded-xl bg-orange-600 hover:bg-orange-700 text-white text-xs font-bold shadow-sm shadow-orange-600/20"
                >
                  + Book New Appointment
                </Link>
              </div>

              {appointments.length === 0 ? (
                <div className="bg-white p-12 text-center rounded-3xl border border-orange-100 max-w-lg mx-auto space-y-3">
                  <div className="w-14 h-14 rounded-full bg-amber-50 text-orange-600 flex items-center justify-center mx-auto border border-amber-200">
                    <Calendar className="w-7 h-7" />
                  </div>
                  <h4 className="font-bold text-base text-stone-800">No Appointments Booked Yet</h4>
                  <p className="text-xs text-stone-500">
                    You have not reserved any doctor consultations. Choose a specialist to get started.
                  </p>
                  <Link
                    to="/appointments"
                    className="inline-block mt-2 px-5 py-2.5 rounded-xl bg-orange-600 hover:bg-orange-700 text-white font-bold text-xs shadow-md shadow-orange-600/20"
                  >
                    Browse & Book Doctor
                  </Link>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {appointments.map((apt) => (
                    <div
                      key={apt.id}
                      className="bg-white p-6 rounded-3xl border border-orange-100 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
                    >
                      <div className="space-y-4">
                        <div className="flex items-start justify-between">
                          <div>
                            <span className="text-[10px] font-bold uppercase tracking-wider text-stone-400 block">
                              Token Pass
                            </span>
                            <span className="text-sm font-mono font-black text-orange-600">
                              {apt.tokenNumber}
                            </span>
                          </div>
                          <span
                            className={`text-xs font-bold px-2.5 py-1 rounded-full ${
                              apt.status === 'Confirmed'
                                ? 'bg-amber-100 text-amber-900 border border-amber-300'
                                : 'bg-stone-100 text-stone-600'
                            }`}
                          >
                            {apt.status}
                          </span>
                        </div>

                        <div className="border-t border-orange-50 pt-3">
                          <h4 className="font-extrabold text-base text-stone-900">
                            {apt.doctorName}
                          </h4>
                          <p className="text-xs text-orange-700 font-semibold">{apt.departmentName}</p>
                        </div>

                        <div className="grid grid-cols-2 gap-2 p-3 bg-amber-50/60 rounded-2xl text-xs text-stone-700 border border-amber-100">
                          <div>
                            <span className="text-stone-400 block text-[10px]">Date:</span>
                            <strong className="text-stone-800">{apt.date}</strong>
                          </div>
                          <div>
                            <span className="text-stone-400 block text-[10px]">Slot:</span>
                            <strong className="text-stone-800">{apt.timeSlot}</strong>
                          </div>
                          <div>
                            <span className="text-stone-400 block text-[10px]">Patient:</span>
                            <span className="font-medium">{apt.patientName} ({apt.patientAge}y)</span>
                          </div>
                          <div>
                            <span className="text-stone-400 block text-[10px]">OPD Fee:</span>
                            <span className="font-bold text-orange-600">₹{apt.consultationFee}</span>
                          </div>
                        </div>

                        {apt.symptoms && (
                          <p className="text-xs text-stone-500 italic">
                            &ldquo;{apt.symptoms}&rdquo;
                          </p>
                        )}
                      </div>

                      <div className="mt-5 pt-3 border-t border-orange-50 flex items-center justify-between">
                        <button
                          onClick={() => window.print()}
                          className="text-xs font-semibold text-stone-600 hover:text-orange-600 flex items-center gap-1 cursor-pointer"
                        >
                          <Printer className="w-3.5 h-3.5" />
                          <span>Print Slip</span>
                        </button>

                        {apt.status === 'Confirmed' && (
                          <button
                            onClick={() => cancelAppointment(apt.id)}
                            className="text-xs font-semibold text-stone-400 hover:text-red-600 flex items-center gap-1 cursor-pointer"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                            <span>Cancel Booking</span>
                          </button>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* TAB 2: Booked Health Packages */}
          {activeTab === 'packages' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="font-extrabold text-base text-stone-900">
                  Booked Diagnostic Packages
                </h3>
                <Link
                  to="/health-packages"
                  className="px-4 py-2 rounded-xl bg-orange-600 hover:bg-orange-700 text-white text-xs font-bold shadow-sm shadow-orange-600/20"
                >
                  + Explore More Packages
                </Link>
              </div>

              {bookedPackages.length === 0 ? (
                <div className="bg-white p-12 text-center rounded-3xl border border-orange-100 max-w-lg mx-auto space-y-3">
                  <div className="w-14 h-14 rounded-full bg-amber-50 text-orange-600 flex items-center justify-center mx-auto border border-amber-200">
                    <Package className="w-7 h-7" />
                  </div>
                  <h4 className="font-bold text-base text-stone-800">No Health Packages Booked</h4>
                  <p className="text-xs text-stone-500">
                    Book a comprehensive master health checkup with free doorstep sample collection.
                  </p>
                  <Link
                    to="/health-packages"
                    className="inline-block mt-2 px-5 py-2.5 rounded-xl bg-orange-600 hover:bg-orange-700 text-white font-bold text-xs shadow-md shadow-orange-600/20"
                  >
                    View Available Packages
                  </Link>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {bookedPackages.map((pkg) => (
                    <div
                      key={pkg.id}
                      className="bg-white p-6 rounded-3xl border border-orange-100 shadow-sm flex flex-col justify-between"
                    >
                      <div className="space-y-3">
                        <div className="flex items-start justify-between">
                          <div>
                            <span className="text-[10px] font-bold uppercase tracking-wider text-stone-400 block">
                              Booking Ref
                            </span>
                            <span className="font-mono font-bold text-sm text-orange-700">
                              {pkg.bookingRef}
                            </span>
                          </div>
                          <span className="text-xs font-bold bg-amber-100 text-amber-900 border border-amber-300 px-2.5 py-0.5 rounded-full">
                            {pkg.status}
                          </span>
                        </div>

                        <h4 className="font-extrabold text-base text-stone-900">
                          {pkg.packageName}
                        </h4>

                        <div className="p-3 bg-amber-50/60 rounded-2xl text-xs space-y-1.5 text-stone-700 border border-amber-100">
                          <div className="flex justify-between">
                            <span className="text-stone-400">Scheduled Date:</span>
                            <span className="font-bold text-stone-800">{pkg.preferredDate}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-stone-400">Patient:</span>
                            <span>{pkg.patientName}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-stone-400">Sample Collection:</span>
                            <span className="font-bold text-amber-700">
                              {pkg.homeSampleCollection ? 'Home Visit' : 'Hospital Lab'}
                            </span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-stone-400">Package Amount:</span>
                            <span className="font-black text-orange-600">₹{pkg.packagePrice}</span>
                          </div>
                        </div>

                        {pkg.address && (
                          <p className="text-[11px] text-stone-500">
                            <strong>Collection Address:</strong> {pkg.address}
                          </p>
                        )}
                      </div>

                      <div className="mt-5 pt-3 border-t border-orange-50 flex items-center justify-between text-xs text-stone-500">
                        <span>Report on WhatsApp / Email</span>
                        <span className="text-orange-700 font-semibold">Phlebotomist Assigned</span>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* TAB 3: Saved Doctors */}
          {activeTab === 'doctors' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="font-extrabold text-base text-stone-900">
                  Bookmarked Doctors ({savedDoctorProfiles.length})
                </h3>
                <Link
                  to="/doctors"
                  className="text-xs font-bold text-orange-600 hover:underline"
                >
                  Browse Full Faculty Directory →
                </Link>
              </div>

              {savedDoctorProfiles.length === 0 ? (
                <div className="bg-white p-12 text-center rounded-3xl border border-orange-100 max-w-lg mx-auto space-y-3">
                  <div className="w-14 h-14 rounded-full bg-amber-50 text-orange-600 flex items-center justify-center mx-auto border border-amber-200">
                    <Heart className="w-7 h-7" />
                  </div>
                  <h4 className="font-bold text-base text-stone-800">No Saved Doctors</h4>
                  <p className="text-xs text-stone-500">
                    Click the bookmark icon on any doctor&apos;s card to bookmark them for easy repeat appointments.
                  </p>
                  <Link
                    to="/doctors"
                    className="inline-block mt-2 px-5 py-2.5 rounded-xl bg-orange-600 hover:bg-orange-700 text-white font-bold text-xs shadow-md shadow-orange-600/20"
                  >
                    View All Doctors
                  </Link>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {savedDoctorProfiles.map((doc) => (
                    <div
                      key={doc.id}
                      className="bg-white p-5 rounded-3xl border border-orange-100 shadow-sm flex flex-col justify-between"
                    >
                      <div>
                        <div className="flex items-start gap-3 mb-3">
                          <img
                            src={doc.image}
                            alt={doc.name}
                            className="w-14 h-14 rounded-2xl object-cover border border-orange-100 shrink-0"
                          />
                          <div className="flex-1 min-w-0">
                            <h4 className="font-extrabold text-sm text-stone-900 truncate">
                              {doc.name}
                            </h4>
                            <p className="text-xs text-orange-700 font-semibold truncate">
                              {doc.departmentName}
                            </p>
                            <p className="text-[11px] text-stone-500 mt-0.5">
                              Fee: ₹{doc.consultationFee}
                            </p>
                          </div>
                        </div>

                        <div className="p-2.5 bg-amber-50/70 rounded-xl text-[11px] text-stone-700 mb-3 border border-amber-100">
                          {doc.opdSchedule}
                        </div>
                      </div>

                      <div className="flex gap-2 pt-2 border-t border-orange-50">
                        <button
                          onClick={() => openQuickBook(doc.id)}
                          className="flex-1 py-2 rounded-xl bg-orange-600 hover:bg-orange-700 text-white font-bold text-xs cursor-pointer shadow-sm shadow-orange-600/20"
                        >
                          Book OPD
                        </button>
                        <button
                          onClick={() => toggleFavoriteDoctor(doc.id)}
                          className="p-2 rounded-xl bg-stone-100 hover:bg-orange-50 text-stone-400 hover:text-orange-600 transition-colors cursor-pointer"
                          title="Remove bookmark"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </section>

      {/* Ad Section */}
      <AdBanner />
    </div>
  );
};
