import React, { useState } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import {
  Package,
  CheckCircle2,
  Clock,
  Sparkles,
  Home,
  FileCheck,
  Calendar,
  AlertCircle,
  ArrowRight,
  ShieldCheck
} from 'lucide-react';
import { HEALTH_PACKAGES } from '../data/hospitalData';
import { useHospital } from '../context/HospitalContext';
import { AdBanner } from '../components/layout/AdBanner';

export const HealthPackagesPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const highlightedPkgId = searchParams.get('pkg');
  const { bookHealthPackage } = useHospital();

  const [selectedPackageId, setSelectedPackageId] = useState<string>(
    highlightedPkgId || HEALTH_PACKAGES[1].id
  );
  const [bookingModalOpen, setBookingModalOpen] = useState(false);

  // Booking form states
  const [patientName, setPatientName] = useState('');
  const [patientPhone, setPatientPhone] = useState('');
  const [patientEmail, setPatientEmail] = useState('');
  const [preferredDate, setPreferredDate] = useState(() => {
    const d = new Date();
    d.setDate(d.getDate() + 1);
    return d.toISOString().split('T')[0];
  });
  const [homeSampleCollection, setHomeSampleCollection] = useState(true);
  const [address, setAddress] = useState('');
  const [bookingConfirmedRef, setBookingConfirmedRef] = useState<string | null>(null);

  const activePackage =
    HEALTH_PACKAGES.find((p) => p.id === selectedPackageId) || HEALTH_PACKAGES[0];

  const handleOpenBooking = (pkgId: string) => {
    setSelectedPackageId(pkgId);
    setBookingConfirmedRef(null);
    setBookingModalOpen(true);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!patientName || !patientPhone) return;

    const res = bookHealthPackage({
      packageId: activePackage.id,
      packageName: activePackage.title,
      packagePrice: activePackage.discountedPrice,
      preferredDate,
      patientName,
      patientPhone,
      patientEmail: patientEmail || 'patient@hospitalsee.com',
      address: homeSampleCollection ? address : 'Hospital OPD Sample Desk',
      homeSampleCollection
    });

    setBookingConfirmedRef(res.bookingRef);
  };

  return (
    <div className="w-full bg-[#fffdfa]">
      {/* Banner */}
      <section className="bg-gradient-to-r from-stone-950 via-orange-950 to-stone-900 text-white py-14 px-4 sm:px-6 relative overflow-hidden">
        <div className="absolute -top-16 -right-16 w-80 h-80 rounded-full bg-amber-500/10 blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto text-left relative z-10">
          <span className="inline-block text-xs font-extrabold uppercase tracking-wider text-amber-400 bg-orange-900/40 border border-amber-400/30 px-2.5 py-1 rounded-full mb-2">
            NABL Certified Preventive Care
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white mt-1">
            Preventive Master Health Checkup Packages
          </h1>
          <p className="text-stone-300 text-sm sm:text-base mt-2 max-w-2xl leading-relaxed">
            Protect yourself and your family with regular diagnostic screenings. Free doorstep home blood collection across Delhi NCR.
          </p>
        </div>
      </section>

      {/* Package Selector Tabs */}
      <section className="bg-white border-b border-orange-100 py-6 sticky top-[69px] z-30 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {HEALTH_PACKAGES.map((pkg) => (
              <button
                key={pkg.id}
                onClick={() => setSelectedPackageId(pkg.id)}
                className={`px-4 py-2 rounded-xl text-xs font-bold shrink-0 transition-all cursor-pointer flex items-center gap-2 ${
                  selectedPackageId === pkg.id
                    ? 'bg-orange-600 text-white shadow-md shadow-orange-600/20'
                    : 'bg-amber-50/70 hover:bg-amber-100 text-stone-700 border border-amber-200/60'
                }`}
              >
                <span>{pkg.title}</span>
                <span
                  className={`text-[10px] px-2 py-0.5 rounded-full font-bold ${
                    selectedPackageId === pkg.id
                      ? 'bg-white/20 text-white'
                      : 'bg-amber-100 text-amber-900'
                  }`}
                >
                  ₹{pkg.discountedPrice}
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Main Selected Package Showcase */}
      <section className="py-12 bg-[#fffaf5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Breakdown */}
            <div className="lg:col-span-8 bg-white p-6 sm:p-8 rounded-3xl border border-orange-100 shadow-sm space-y-6">
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-orange-50 pb-5">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-orange-600">
                    {activePackage.category} Profile
                  </span>
                  <h2 className="text-2xl font-black text-stone-900 mt-1">
                    {activePackage.title}
                  </h2>
                  <p className="text-xs text-stone-500 mt-1">{activePackage.subtitle}</p>
                </div>

                <div className="text-right">
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-black text-stone-900">
                      ₹{activePackage.discountedPrice}
                    </span>
                    <span className="text-sm text-stone-400 line-through">
                      ₹{activePackage.originalPrice}
                    </span>
                  </div>
                  <span className="text-xs font-bold text-amber-800 bg-amber-100 px-2 py-0.5 rounded border border-amber-200">
                    Save {Math.round(((activePackage.originalPrice - activePackage.discountedPrice) / activePackage.originalPrice) * 100)}% Discount
                  </span>
                </div>
              </div>

              {/* Recommended for */}
              <div className="p-4 bg-amber-50/70 border border-amber-200 rounded-2xl flex items-start gap-3">
                <Sparkles className="w-5 h-5 text-orange-600 shrink-0 mt-0.5" />
                <div className="text-xs text-stone-700">
                  <span className="font-bold text-stone-900 block mb-0.5">Recommended For:</span>
                  {activePackage.recommendedFor}
                </div>
              </div>

              {/* Tests Included Breakdown */}
              <div>
                <h3 className="font-bold text-base text-stone-900 mb-4 flex items-center justify-between">
                  <span>Included Tests & Diagnostic Investigations ({activePackage.totalTests} Parameters)</span>
                  <span className="text-xs text-stone-400 font-normal">NABL Certified</span>
                </h3>

                <div className="space-y-4">
                  {activePackage.testsIncluded.map((grp, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-2xl bg-amber-50/50 border border-amber-200/80 space-y-2"
                    >
                      <h4 className="font-bold text-xs uppercase tracking-wider text-orange-900">
                        {grp.category}
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {grp.tests.map((test, i) => (
                          <div key={i} className="flex items-center gap-2 text-xs text-stone-700">
                            <CheckCircle2 className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                            <span>{test}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Preparation guidelines */}
              <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-xs text-amber-900 space-y-1">
                <div className="flex items-center gap-2 font-bold">
                  <AlertCircle className="w-4 h-4 text-orange-600" />
                  <span>Important Preparation Notes</span>
                </div>
                <ul className="list-disc list-inside space-y-0.5 text-amber-800">
                  {activePackage.preparationNotes.map((note, idx) => (
                    <li key={idx}>{note}</li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right Booking Action Box */}
            <div className="lg:col-span-4 space-y-6 sticky top-32">
              <div className="bg-white p-6 rounded-3xl border border-orange-100 shadow-sm space-y-5">
                <h3 className="font-extrabold text-base text-stone-900">
                  Book This Health Checkup
                </h3>

                <div className="space-y-2.5 text-xs text-stone-600">
                  <div className="flex items-center justify-between py-1.5 border-b border-orange-50">
                    <span>Total Parameters:</span>
                    <strong className="text-stone-800">{activePackage.totalTests} Tests</strong>
                  </div>
                  <div className="flex items-center justify-between py-1.5 border-b border-orange-50">
                    <span>Turnaround Time:</span>
                    <strong className="text-stone-800">{activePackage.tatHours} Hours</strong>
                  </div>
                  <div className="flex items-center justify-between py-1.5 border-b border-orange-50">
                    <span>Sample Collection:</span>
                    <strong className="text-amber-700 font-bold">Free Home Visit</strong>
                  </div>
                  <div className="flex items-center justify-between py-1.5 border-b border-orange-50">
                    <span>Fasting Required:</span>
                    <strong className="text-stone-800">
                      {activePackage.fastingRequired ? 'Yes (10-12 hrs)' : 'No'}
                    </strong>
                  </div>
                </div>

                <button
                  onClick={() => handleOpenBooking(activePackage.id)}
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-orange-600 via-amber-600 to-orange-500 hover:from-orange-700 hover:to-amber-700 text-white font-bold text-sm shadow-md shadow-orange-600/20 transition-all active:scale-98 cursor-pointer flex items-center justify-center gap-2"
                >
                  <Calendar className="w-4 h-4 text-yellow-200" />
                  <span>Book Package Now</span>
                </button>

                <p className="text-[11px] text-stone-400 text-center">
                  Instant reservation • Stored in browser local storage
                </p>
              </div>

              {/* Home Sample Collection info */}
              <div className="p-5 bg-amber-50 rounded-2xl border border-amber-200 text-xs space-y-2">
                <div className="flex items-center gap-2 font-bold text-amber-950">
                  <Home className="w-4 h-4 text-orange-600" />
                  <span>Doorstep Blood Collection</span>
                </div>
                <p className="text-stone-700 leading-relaxed">
                  Our certified phlebotomists arrive with vacuum barcoded vials. Reports sent on WhatsApp and Email automatically.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Modal */}
      {bookingModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/70 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white w-full max-w-lg rounded-3xl shadow-2xl border border-orange-100 overflow-hidden">
            <div className="bg-gradient-to-r from-orange-600 via-amber-600 to-orange-500 text-white p-4 flex items-center justify-between">
              <div>
                <h3 className="font-bold text-base">Book {activePackage.title}</h3>
                <p className="text-xs text-yellow-200">Price: ₹{activePackage.discountedPrice}</p>
              </div>
              <button
                onClick={() => setBookingModalOpen(false)}
                className="text-white hover:bg-white/20 p-1 rounded-lg cursor-pointer font-bold"
              >
                ✕
              </button>
            </div>

            <div className="p-6">
              {bookingConfirmedRef ? (
                <div className="text-center py-6 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-amber-100 text-orange-600 flex items-center justify-center mx-auto border border-amber-200">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h4 className="text-xl font-bold text-stone-900">Checkup Booked!</h4>
                  <p className="text-xs text-stone-600 max-w-xs mx-auto">
                    Your appointment reference is <span className="font-mono font-bold text-orange-700">{bookingConfirmedRef}</span>.
                  </p>

                  <div className="p-3 bg-amber-50/60 border border-amber-200 rounded-xl text-left text-xs space-y-1.5 max-w-xs mx-auto">
                    <div className="flex justify-between">
                      <span className="text-stone-500">Package:</span>
                      <span className="font-bold text-stone-800 truncate max-w-[150px]">{activePackage.title}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-stone-500">Date:</span>
                      <span className="font-medium text-stone-800">{preferredDate}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-stone-500">Collection:</span>
                      <span className="font-medium text-amber-700">
                        {homeSampleCollection ? 'Home Sample Visit' : 'At Hospital'}
                      </span>
                    </div>
                  </div>

                  <div className="pt-3 flex gap-2 justify-center">
                    <Link
                      to="/my-appointments"
                      onClick={() => setBookingModalOpen(false)}
                      className="px-4 py-2 bg-orange-600 hover:bg-orange-700 text-white text-xs font-bold rounded-xl shadow-md shadow-orange-600/20"
                    >
                      View My Bookings
                    </Link>
                    <button
                      onClick={() => setBookingModalOpen(false)}
                      className="px-4 py-2 bg-amber-50 hover:bg-amber-100 text-stone-700 border border-amber-200 text-xs font-bold rounded-xl cursor-pointer"
                    >
                      Close
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-stone-700 mb-1">
                      Patient Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ramesh Chandra"
                      value={patientName}
                      onChange={(e) => setPatientName(e.target.value)}
                      className="w-full text-xs p-2.5 rounded-xl border border-orange-200 focus:border-orange-500 focus:ring-2 focus:ring-amber-200 outline-none bg-white"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold text-stone-700 mb-1">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 98765 43210"
                        value={patientPhone}
                        onChange={(e) => setPatientPhone(e.target.value)}
                        className="w-full text-xs p-2.5 rounded-xl border border-orange-200 focus:border-orange-500 focus:ring-2 focus:ring-amber-200 outline-none bg-white"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-stone-700 mb-1">
                        Preferred Date *
                      </label>
                      <input
                        type="date"
                        required
                        value={preferredDate}
                        onChange={(e) => setPreferredDate(e.target.value)}
                        className="w-full text-xs p-2.5 rounded-xl border border-orange-200 focus:border-orange-500 focus:ring-2 focus:ring-amber-200 outline-none bg-white"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-stone-700 mb-1">
                      Email Address (For Digital Reports)
                    </label>
                    <input
                      type="email"
                      placeholder="name@example.com"
                      value={patientEmail}
                      onChange={(e) => setPatientEmail(e.target.value)}
                      className="w-full text-xs p-2.5 rounded-xl border border-orange-200 focus:border-orange-500 focus:ring-2 focus:ring-amber-200 outline-none bg-white"
                    />
                  </div>

                  <div className="p-3 bg-amber-50/60 border border-amber-200 rounded-xl space-y-2">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={homeSampleCollection}
                        onChange={(e) => setHomeSampleCollection(e.target.checked)}
                        className="w-4 h-4 text-orange-600 rounded accent-orange-600"
                      />
                      <span className="text-xs font-bold text-stone-800">
                        Request Free Home Sample Collection
                      </span>
                    </label>

                    {homeSampleCollection && (
                      <input
                        type="text"
                        placeholder="House / Flat No, Street, Landmark in Delhi NCR..."
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        required={homeSampleCollection}
                        className="w-full text-xs p-2 rounded-lg border border-orange-200 bg-white focus:border-orange-500 outline-none"
                      />
                    )}
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 rounded-xl bg-gradient-to-r from-orange-600 via-amber-600 to-orange-500 hover:from-orange-700 hover:to-amber-700 text-white font-bold text-xs shadow-md shadow-orange-600/20 transition-all cursor-pointer"
                  >
                    Confirm Booking (Pay ₹{activePackage.discountedPrice} on Sample Collection)
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Ad Section */}
      <AdBanner />
    </div>
  );
};
