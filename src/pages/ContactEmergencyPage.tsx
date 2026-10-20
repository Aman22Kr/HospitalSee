import React, { useState } from 'react';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Ambulance,
  Building,
  CheckCircle2,
  Send,
  ShieldCheck,
  Navigation
} from 'lucide-react';
import { HOSPITAL_INFO, DEPARTMENTS } from '../data/hospitalData';
import { useHospital } from '../context/HospitalContext';
import { AdBanner } from '../components/layout/AdBanner';

export const ContactEmergencyPage: React.FC = () => {
  const { submitInquiry, openEmergencyModal } = useHospital();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [department, setDepartment] = useState(DEPARTMENTS[0].name);
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone || !message) return;

    submitInquiry({
      name,
      email: email || 'user@example.com',
      phone,
      department,
      subject: subject || 'General Inquiry',
      message
    });

    setSubmitted(true);
  };

  return (
    <div className="w-full bg-[#fffdfa]">
      {/* Banner */}
      <section className="bg-gradient-to-r from-stone-950 via-orange-950 to-stone-900 text-white py-14 px-4 sm:px-6 relative overflow-hidden">
        <div className="absolute -top-16 -right-16 w-80 h-80 rounded-full bg-amber-500/10 blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto text-left relative z-10">
          <span className="inline-block text-xs font-extrabold uppercase tracking-wider text-amber-400 bg-orange-900/40 border border-amber-400/30 px-2.5 py-1 rounded-full mb-2">
            24x7 Help & Location
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white mt-1">
            Contact HospitalSee & Emergency Hotline
          </h1>
          <p className="text-stone-300 text-sm sm:text-base mt-2 max-w-2xl leading-relaxed">
            Centrally situated on New Rohtak Road, Karol Bagh, New Delhi. Accessible round the clock for emergencies, OPD registrations, and TPA pre-authorizations.
          </p>
        </div>
      </section>

      {/* Emergency Strip */}
      <section className="bg-gradient-to-r from-orange-600 via-amber-600 to-orange-600 text-white py-4 px-4 shadow-sm">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-xs sm:text-sm font-medium">
            <Ambulance className="w-5 h-5 text-yellow-300 animate-pulse" />
            <span>Immediate Trauma or Cardiac Emergency?</span>
            <a href={`tel:${HOSPITAL_INFO.emergencyPhone}`} className="font-extrabold underline text-white hover:text-yellow-200">
              {HOSPITAL_INFO.emergencyPhone}
            </a>
          </div>
          <button
            onClick={openEmergencyModal}
            className="px-4 py-1.5 rounded-xl bg-white text-orange-700 hover:bg-yellow-50 font-extrabold text-xs shadow-md transition-transform active:scale-95 cursor-pointer"
          >
            Dispatch Ambulance Now
          </button>
        </div>
      </section>

      {/* Main Grid: Direct Helplines + Inquiry Form */}
      <section className="py-14 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Left: Contact Directory & Location */}
            <div className="lg:col-span-5 space-y-6">
              <div className="p-7 rounded-3xl bg-[#fffaf5] border border-orange-100 space-y-5">
                <h3 className="font-extrabold text-lg text-stone-900 flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-orange-600 inline-block" />
                  Hospital Directory & Extensions
                </h3>

                <div className="space-y-4 text-xs text-stone-700">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-orange-600 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-stone-900 text-sm block">Address:</strong>
                      <p className="text-stone-600 mt-0.5">{HOSPITAL_INFO.address}</p>
                      <span className="text-[11px] text-amber-700 font-semibold block mt-1">
                        Near Karol Bagh Metro Station (Blue Line)
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 border-t border-orange-100 pt-3">
                    <Phone className="w-5 h-5 text-orange-600 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-stone-900 text-sm block">24/7 Emergency Line:</strong>
                      <a href={`tel:${HOSPITAL_INFO.emergencyPhone}`} className="text-orange-600 font-bold hover:underline">
                        {HOSPITAL_INFO.emergencyPhone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 border-t border-orange-100 pt-3">
                    <Ambulance className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-stone-900 text-sm block">Ambulance Dispatch:</strong>
                      <a href={`tel:${HOSPITAL_INFO.ambulanceHotline}`} className="text-stone-800 font-bold hover:underline">
                        {HOSPITAL_INFO.ambulanceHotline}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 border-t border-orange-100 pt-3">
                    <Clock className="w-5 h-5 text-orange-600 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-stone-900 text-sm block">OPD Appointments Helpline:</strong>
                      <a href={`tel:${HOSPITAL_INFO.opdHelpline}`} className="text-orange-700 font-bold hover:underline">
                        {HOSPITAL_INFO.opdHelpline}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 border-t border-orange-100 pt-3">
                    <ShieldCheck className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-stone-900 text-sm block">Cashless TPA Desk:</strong>
                      <span className="text-stone-800 font-bold">{HOSPITAL_INFO.tpaHelpdesk}</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 border-t border-orange-100 pt-3">
                    <Mail className="w-5 h-5 text-orange-600 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-stone-900 text-sm block">Official Email:</strong>
                      <a href={`mailto:${HOSPITAL_INFO.email}`} className="text-orange-700 hover:underline">
                        {HOSPITAL_INFO.email}
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map Preview Card */}
              <div className="p-6 rounded-3xl bg-amber-50 border border-amber-200 space-y-3">
                <div className="flex items-center justify-between">
                  <h4 className="font-bold text-sm text-stone-900 flex items-center gap-2">
                    <Navigation className="w-4 h-4 text-orange-600" />
                    <span>How to Reach HospitalSee</span>
                  </h4>
                  <span className="text-[10px] font-bold bg-white text-orange-800 border border-amber-200 px-2 py-0.5 rounded-full">
                    Central Delhi
                  </span>
                </div>
                <p className="text-xs text-stone-700 leading-relaxed">
                  Located directly on New Rohtak Road. 15 minutes drive from New Delhi Railway Station (NDLS) and 35 minutes from Indira Gandhi International Airport (IGI).
                </p>
                <div className="pt-1">
                  <a
                    href="https://maps.google.com/?q=67/1+New+Rohtak+Road+Karol+Bagh+New+Delhi"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-orange-700 hover:text-orange-800 hover:underline"
                  >
                    <span>Open in Google Maps</span>
                    <Navigation className="w-3 h-3 text-orange-600" />
                  </a>
                </div>
              </div>
            </div>

            {/* Right: Interactive Inquiry Form */}
            <div className="lg:col-span-7 bg-white p-7 sm:p-10 rounded-3xl border border-orange-100 shadow-xl shadow-orange-500/5">
              <div className="mb-6">
                <span className="text-xs font-bold uppercase tracking-wider text-orange-600">Patient Desk</span>
                <h3 className="font-extrabold text-xl text-stone-900 mt-1">
                  Send an Inquiry or Feedback
                </h3>
                <p className="text-xs text-stone-500 mt-1">
                  Have a question about clinical treatments, hospitalisation estimates, or doctor availability? Write to us directly.
                </p>
              </div>

              {submitted ? (
                <div className="p-8 text-center bg-amber-50 rounded-2xl border border-amber-200 space-y-3">
                  <div className="w-12 h-12 rounded-full bg-amber-100 text-orange-600 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="font-bold text-base text-stone-900">
                    Message Submitted Successfully!
                  </h4>
                  <p className="text-xs text-stone-700 max-w-sm mx-auto leading-relaxed">
                    Thank you, {name}. Our Patient Helpdesk team has received your query and will get back to you at {phone} within 4 working hours.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setMessage('');
                      setSubject('');
                    }}
                    className="mt-3 px-5 py-2.5 bg-orange-600 hover:bg-orange-700 text-white rounded-xl text-xs font-bold shadow-md shadow-orange-600/20 cursor-pointer"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-stone-700 mb-1 uppercase">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Aman Kumar"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full text-xs p-3 rounded-xl border border-orange-200 focus:border-orange-500 focus:ring-2 focus:ring-amber-200 outline-none bg-white"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-stone-700 mb-1 uppercase">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 98765 43210"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full text-xs p-3 rounded-xl border border-orange-200 focus:border-orange-500 focus:ring-2 focus:ring-amber-200 outline-none bg-white"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-stone-700 mb-1 uppercase">
                        Email Address
                      </label>
                      <input
                        type="email"
                        placeholder="name@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full text-xs p-3 rounded-xl border border-orange-200 focus:border-orange-500 focus:ring-2 focus:ring-amber-200 outline-none bg-white"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-stone-700 mb-1 uppercase">
                        Related Department *
                      </label>
                      <select
                        value={department}
                        onChange={(e) => setDepartment(e.target.value)}
                        className="w-full text-xs p-3 rounded-xl border border-orange-200 focus:border-orange-500 focus:ring-2 focus:ring-amber-200 outline-none bg-white font-medium"
                      >
                        {DEPARTMENTS.map((dept) => (
                          <option key={dept.id} value={dept.name}>
                            {dept.name}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-stone-700 mb-1 uppercase">
                      Subject
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Knee replacement surgery cost inquiry, TPA query..."
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      className="w-full text-xs p-3 rounded-xl border border-orange-200 focus:border-orange-500 focus:ring-2 focus:ring-amber-200 outline-none bg-white"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-stone-700 mb-1 uppercase">
                      Your Message / Medical Concern *
                    </label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Please elaborate on your medical query, symptoms, or requested information..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="w-full text-xs p-3 rounded-xl border border-orange-200 focus:border-orange-500 focus:ring-2 focus:ring-amber-200 outline-none resize-none bg-white"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl bg-gradient-to-r from-orange-600 via-amber-600 to-orange-500 hover:from-orange-700 hover:to-amber-700 text-white font-extrabold text-sm shadow-md shadow-orange-600/25 transition-all active:scale-98 flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Send className="w-4 h-4 text-yellow-200" />
                    <span>Submit Inquiry</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Ad Section */}
      <AdBanner />
    </div>
  );
};
