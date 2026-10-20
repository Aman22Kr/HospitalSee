import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import {
  Calendar,
  Clock,
  User,
  Phone,
  Mail,
  ShieldCheck,
  CheckCircle2,
  Stethoscope,
  Building,
  AlertCircle,
  FileText,
  Printer
} from 'lucide-react';
import { DEPARTMENTS, DOCTORS, HOSPITAL_INFO } from '../data/hospitalData';
import { useHospital } from '../context/HospitalContext';
import { Appointment } from '../types';
import { AdBanner } from '../components/layout/AdBanner';

export const AppointmentBookingPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const initialDeptQuery = searchParams.get('dept');
  const initialDoctorQuery = searchParams.get('doctor');
  const initialDateQuery = searchParams.get('date');

  const { bookAppointment } = useHospital();

  // Wizard state
  const [selectedDeptId, setSelectedDeptId] = useState<string>(() => {
    if (initialDeptQuery) {
      const match = DEPARTMENTS.find(
        (d) => d.name.toLowerCase() === initialDeptQuery.toLowerCase() || d.id === initialDeptQuery
      );
      if (match) return match.id;
    }
    return DEPARTMENTS[0].id;
  });

  const availableDoctorsInDept = DOCTORS.filter((d) => d.departmentId === selectedDeptId);

  const [selectedDoctorId, setSelectedDoctorId] = useState<string>(() => {
    if (initialDoctorQuery) {
      const match = DOCTORS.find((d) => d.id === initialDoctorQuery);
      if (match) return match.id;
    }
    return availableDoctorsInDept[0]?.id || DOCTORS[0].id;
  });

  useEffect(() => {
    if (availableDoctorsInDept.length > 0) {
      const currentValid = availableDoctorsInDept.some((d) => d.id === selectedDoctorId);
      if (!currentValid) {
        setSelectedDoctorId(availableDoctorsInDept[0].id);
      }
    }
  }, [selectedDeptId]);

  const [appointmentDate, setAppointmentDate] = useState(() => {
    if (initialDateQuery) return initialDateQuery;
    const d = new Date();
    d.setDate(d.getDate() + 1);
    return d.toISOString().split('T')[0];
  });

  const [timeSlot, setTimeSlot] = useState('11:00 AM - 11:30 AM');
  const [appointmentType, setAppointmentType] = useState<'New Consultation' | 'Follow Up' | 'Second Opinion'>('New Consultation');

  // Patient Info
  const [patientName, setPatientName] = useState('');
  const [patientAge, setPatientAge] = useState<number>(32);
  const [patientGender, setPatientGender] = useState<'Male' | 'Female' | 'Other'>('Male');
  const [patientPhone, setPatientPhone] = useState('');
  const [patientEmail, setPatientEmail] = useState('');
  const [symptoms, setSymptoms] = useState('');

  // Result
  const [confirmedAppointment, setConfirmedAppointment] = useState<Appointment | null>(null);

  const currentDoctor = DOCTORS.find((d) => d.id === selectedDoctorId) || DOCTORS[0];
  const currentDept = DEPARTMENTS.find((d) => d.id === selectedDeptId) || DEPARTMENTS[0];

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!patientName || !patientPhone) return;

    const apt = bookAppointment({
      doctorId: currentDoctor.id,
      doctorName: currentDoctor.name,
      departmentName: currentDept.name,
      consultationFee: currentDoctor.consultationFee,
      date: appointmentDate,
      timeSlot,
      patientName,
      patientAge: Number(patientAge) || 30,
      patientGender,
      patientPhone,
      patientEmail: patientEmail || 'patient@hospitalsee.com',
      symptoms,
      appointmentType
    });

    setConfirmedAppointment(apt);
  };

  return (
    <div className="w-full bg-[#fffdfa]">
      {/* Banner */}
      <section className="bg-gradient-to-r from-stone-950 via-orange-950 to-stone-900 text-white py-14 px-4 sm:px-6 relative overflow-hidden">
        <div className="absolute -top-16 -right-16 w-80 h-80 rounded-full bg-amber-500/10 blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto text-left relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/20 text-yellow-300 text-xs font-semibold mb-3 border border-amber-400/30">
            <Calendar className="w-3.5 h-3.5 text-yellow-300" />
            <span>Official Online OPD Registration</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white">
            Book an OPD Doctor Consultation
          </h1>
          <p className="text-stone-300 text-sm sm:text-base mt-2 max-w-2xl leading-relaxed">
            Zero online booking fee. Reserve your appointment with our leading specialists and skip long queues at the counter.
          </p>
        </div>
      </section>

      {/* Main Booking Container */}
      <section className="py-14 bg-[#fffaf5] min-h-[600px]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          {confirmedAppointment ? (
            /* Confirmation Screen */
            <div className="bg-white rounded-3xl p-8 border border-orange-100 shadow-xl text-center max-w-2xl mx-auto space-y-6 animate-fadeIn">
              <div className="w-20 h-20 rounded-full bg-amber-100 text-orange-600 flex items-center justify-center mx-auto border border-amber-300">
                <CheckCircle2 className="w-12 h-12" />
              </div>

              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-orange-800 bg-amber-100 px-3 py-1 rounded-full border border-amber-200">
                  Appointment Confirmed
                </span>
                <h2 className="text-2xl font-black text-stone-900 mt-3">
                  Thank You, {confirmedAppointment.patientName}
                </h2>
                <p className="text-xs text-stone-500 mt-1">
                  Your appointment slot has been successfully reserved in our OPD schedule.
                </p>
              </div>

              {/* Printable Appointment Pass */}
              <div className="p-6 bg-amber-50/50 border-2 border-dashed border-amber-300 rounded-2xl text-left text-xs space-y-3 font-sans">
                <div className="flex items-center justify-between border-b border-amber-200 pb-3">
                  <div>
                    <h3 className="font-extrabold text-sm text-stone-900">HospitalSee OPD Slip</h3>
                    <p className="text-[11px] text-stone-500">67/1, New Rohtak Road, Karol Bagh, New Delhi</p>
                  </div>
                  <div className="text-right">
                    <span className="text-[10px] text-stone-400 block">Token Number:</span>
                    <span className="font-mono font-black text-base text-orange-600">
                      {confirmedAppointment.tokenNumber}
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <span className="text-stone-400 block text-[10px]">Consulting Doctor:</span>
                    <strong className="text-stone-900 text-xs">{confirmedAppointment.doctorName}</strong>
                    <div className="text-[11px] text-orange-700 font-semibold">{confirmedAppointment.departmentName}</div>
                  </div>
                  <div>
                    <span className="text-stone-400 block text-[10px]">Date & Time Slot:</span>
                    <strong className="text-stone-900 text-xs">{confirmedAppointment.date}</strong>
                    <div className="text-[11px] text-amber-700 font-semibold">{confirmedAppointment.timeSlot}</div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 pt-2 border-t border-amber-200">
                  <div>
                    <span className="text-stone-400 block text-[10px]">Patient Name & Age:</span>
                    <span className="font-medium text-stone-800">
                      {confirmedAppointment.patientName} ({confirmedAppointment.patientAge}y, {confirmedAppointment.patientGender})
                    </span>
                  </div>
                  <div>
                    <span className="text-stone-400 block text-[10px]">Consultation Fee:</span>
                    <span className="font-bold text-orange-600">₹{confirmedAppointment.consultationFee} (Pay at counter)</span>
                  </div>
                </div>

                <div className="p-2.5 bg-amber-100/70 rounded-lg text-amber-950 text-[11px] border border-amber-200">
                  📌 <strong>Arrival instructions:</strong> Please report to Reception Counter B 15 minutes before your time slot with this Token Number.
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
                <Link
                  to="/my-appointments"
                  className="px-6 py-3 rounded-xl bg-orange-600 hover:bg-orange-700 text-white font-bold text-xs shadow-md shadow-orange-600/20 transition-colors"
                >
                  View All My Appointments
                </Link>
                <button
                  onClick={() => window.print()}
                  className="px-6 py-3 rounded-xl bg-amber-50 hover:bg-amber-100 text-stone-700 font-bold text-xs border border-amber-200 transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <Printer className="w-4 h-4 text-orange-600" />
                  <span>Print Slip</span>
                </button>
                <button
                  onClick={() => setConfirmedAppointment(null)}
                  className="px-6 py-3 rounded-xl bg-white hover:bg-amber-50 text-stone-700 font-semibold text-xs border border-orange-200 cursor-pointer"
                >
                  Book Another Appointment
                </button>
              </div>
            </div>
          ) : (
            /* Booking Form */
            <div className="bg-white rounded-3xl p-6 sm:p-10 border border-orange-100 shadow-xl shadow-orange-500/5">
              <form onSubmit={handleBookingSubmit} className="space-y-8">
                {/* Step 1: Speciality & Doctor */}
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 rounded-full bg-amber-100 text-orange-700 font-black text-xs flex items-center justify-center border border-amber-200">
                      1
                    </div>
                    <h3 className="font-bold text-base text-stone-900">
                      Select Department & Specialist
                    </h3>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-stone-700 mb-1.5 uppercase">
                        Department / Speciality *
                      </label>
                      <select
                        value={selectedDeptId}
                        onChange={(e) => setSelectedDeptId(e.target.value)}
                        className="w-full text-xs p-3 rounded-xl border border-orange-200 focus:border-orange-500 focus:ring-2 focus:ring-amber-200 outline-none bg-amber-50/30 font-medium"
                      >
                        {DEPARTMENTS.map((dept) => (
                          <option key={dept.id} value={dept.id}>
                            {dept.name}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-stone-700 mb-1.5 uppercase">
                        Doctor / Specialist *
                      </label>
                      <select
                        value={selectedDoctorId}
                        onChange={(e) => setSelectedDoctorId(e.target.value)}
                        className="w-full text-xs p-3 rounded-xl border border-orange-200 focus:border-orange-500 focus:ring-2 focus:ring-amber-200 outline-none bg-amber-50/30 font-medium"
                      >
                        {availableDoctorsInDept.length > 0 ? (
                          availableDoctorsInDept.map((doc) => (
                            <option key={doc.id} value={doc.id}>
                              {doc.name} ({doc.designation}) - ₹{doc.consultationFee}
                            </option>
                          ))
                        ) : (
                          <option value={DOCTORS[0].id}>{DOCTORS[0].name}</option>
                        )}
                      </select>
                    </div>
                  </div>

                  {/* Selected doctor preview strip */}
                  <div className="mt-4 p-4 bg-amber-50/70 border border-amber-200 rounded-2xl flex items-center gap-4">
                    <img
                      src={currentDoctor.image}
                      alt={currentDoctor.name}
                      className="w-14 h-14 rounded-2xl object-cover border border-amber-300 shrink-0"
                    />
                    <div className="flex-1 min-w-0 text-xs">
                      <div className="font-extrabold text-sm text-stone-900 truncate">
                        {currentDoctor.name}
                      </div>
                      <div className="text-orange-700 font-semibold truncate">
                        {currentDoctor.qualifications}
                      </div>
                      <div className="text-stone-500 mt-0.5">
                        {currentDoctor.roomNumber} • OPD Schedule: {currentDoctor.opdSchedule}
                      </div>
                    </div>
                    <div className="text-right shrink-0">
                      <span className="text-[10px] text-stone-400 block">Consultation Fee</span>
                      <span className="text-base font-black text-orange-600">
                        ₹{currentDoctor.consultationFee}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Step 2: Date & Slot */}
                <div className="pt-6 border-t border-orange-50">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 rounded-full bg-amber-100 text-orange-700 font-black text-xs flex items-center justify-center border border-amber-200">
                      2
                    </div>
                    <h3 className="font-bold text-base text-stone-900">
                      Choose Date & OPD Time Slot
                    </h3>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-stone-700 mb-1.5 uppercase">
                        Preferred Date *
                      </label>
                      <input
                        type="date"
                        required
                        value={appointmentDate}
                        onChange={(e) => setAppointmentDate(e.target.value)}
                        className="w-full text-xs p-3 rounded-xl border border-orange-200 focus:border-orange-500 focus:ring-2 focus:ring-amber-200 outline-none bg-white"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-stone-700 mb-1.5 uppercase">
                        Available Time Slot *
                      </label>
                      <select
                        value={timeSlot}
                        onChange={(e) => setTimeSlot(e.target.value)}
                        className="w-full text-xs p-3 rounded-xl border border-orange-200 focus:border-orange-500 focus:ring-2 focus:ring-amber-200 outline-none bg-white font-medium"
                      >
                        <option value="09:00 AM - 09:30 AM">09:00 AM - 09:30 AM</option>
                        <option value="10:00 AM - 10:30 AM">10:00 AM - 10:30 AM</option>
                        <option value="11:00 AM - 11:30 AM">11:00 AM - 11:30 AM</option>
                        <option value="12:00 PM - 12:30 PM">12:00 PM - 12:30 PM</option>
                        <option value="02:30 PM - 03:00 PM">02:30 PM - 03:00 PM</option>
                        <option value="04:00 PM - 04:30 PM">04:00 PM - 04:30 PM</option>
                        <option value="05:30 PM - 06:00 PM">05:30 PM - 06:00 PM</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-stone-700 mb-1.5 uppercase">
                        Consultation Type *
                      </label>
                      <select
                        value={appointmentType}
                        onChange={(e) => setAppointmentType(e.target.value as any)}
                        className="w-full text-xs p-3 rounded-xl border border-orange-200 focus:border-orange-500 focus:ring-2 focus:ring-amber-200 outline-none bg-white font-medium"
                      >
                        <option value="New Consultation">First Visit / New Consultation</option>
                        <option value="Follow Up">Follow-up Review</option>
                        <option value="Second Opinion">Second Medical Opinion</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Step 3: Patient Information */}
                <div className="pt-6 border-t border-orange-50">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 rounded-full bg-amber-100 text-orange-700 font-black text-xs flex items-center justify-center border border-amber-200">
                      3
                    </div>
                    <h3 className="font-bold text-base text-stone-900">
                      Patient Details & Medical Reason
                    </h3>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div className="sm:col-span-2">
                      <label className="block text-xs font-bold text-stone-700 mb-1.5 uppercase">
                        Patient Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Aman Kumar"
                        value={patientName}
                        onChange={(e) => setPatientName(e.target.value)}
                        className="w-full text-xs p-3 rounded-xl border border-orange-200 focus:border-orange-500 focus:ring-2 focus:ring-amber-200 outline-none bg-white"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-stone-700 mb-1.5 uppercase">
                        Age *
                      </label>
                      <input
                        type="number"
                        min="1"
                        max="115"
                        value={patientAge}
                        onChange={(e) => setPatientAge(Number(e.target.value))}
                        className="w-full text-xs p-3 rounded-xl border border-orange-200 focus:border-orange-500 focus:ring-2 focus:ring-amber-200 outline-none bg-white"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
                    <div>
                      <label className="block text-xs font-bold text-stone-700 mb-1.5 uppercase">
                        Gender *
                      </label>
                      <select
                        value={patientGender}
                        onChange={(e) => setPatientGender(e.target.value as any)}
                        className="w-full text-xs p-3 rounded-xl border border-orange-200 focus:border-orange-500 focus:ring-2 focus:ring-amber-200 outline-none bg-white font-medium"
                      >
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-stone-700 mb-1.5 uppercase">
                        Contact Mobile *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 98765 43210"
                        value={patientPhone}
                        onChange={(e) => setPatientPhone(e.target.value)}
                        className="w-full text-xs p-3 rounded-xl border border-orange-200 focus:border-orange-500 focus:ring-2 focus:ring-amber-200 outline-none bg-white"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-stone-700 mb-1.5 uppercase">
                        Email Address
                      </label>
                      <input
                        type="email"
                        placeholder="name@example.com"
                        value={patientEmail}
                        onChange={(e) => setPatientEmail(e.target.value)}
                        className="w-full text-xs p-3 rounded-xl border border-orange-200 focus:border-orange-500 focus:ring-2 focus:ring-amber-200 outline-none bg-white"
                      />
                    </div>
                  </div>

                  <div className="mt-4">
                    <label className="block text-xs font-bold text-stone-700 mb-1.5 uppercase">
                      Symptoms / Primary Complaints (Optional)
                    </label>
                    <textarea
                      rows={2}
                      placeholder="Brief description of symptoms, previous investigations, or purpose of visit..."
                      value={symptoms}
                      onChange={(e) => setSymptoms(e.target.value)}
                      className="w-full text-xs p-3 rounded-xl border border-orange-200 focus:border-orange-500 focus:ring-2 focus:ring-amber-200 outline-none resize-none bg-white"
                    />
                  </div>
                </div>

                {/* Submit button */}
                <div className="pt-4 border-t border-orange-50 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="text-xs text-stone-500">
                    🔒 Data persisted securely in your browser&apos;s localStorage
                  </div>
                  <button
                    type="submit"
                    className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-gradient-to-r from-orange-600 via-amber-600 to-orange-500 hover:from-orange-700 hover:to-amber-700 text-white font-extrabold text-sm shadow-md shadow-orange-600/25 transition-all active:scale-98 cursor-pointer flex items-center justify-center gap-2"
                  >
                    <CheckCircle2 className="w-4 h-4 text-yellow-200" />
                    <span>Confirm & Generate Appointment Pass</span>
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>
      </section>

      {/* Ad Section */}
      <AdBanner />
    </div>
  );
};
