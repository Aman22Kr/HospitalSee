import React, { useState, useEffect } from 'react';
import { X, Calendar, Clock, User, Phone, Mail, CheckCircle2, HeartPulse } from 'lucide-react';
import { DOCTORS } from '../../data/hospitalData';
import { useHospital } from '../../context/HospitalContext';
import { Link } from 'react-router-dom';

export const QuickBookModal: React.FC = () => {
  const { activeQuickBookDoctorId, closeQuickBook, bookAppointment } = useHospital();
  const [selectedDoctorId, setSelectedDoctorId] = useState<string>('');
  const [appointmentDate, setAppointmentDate] = useState('');
  const [timeSlot, setTimeSlot] = useState('11:00 AM - 11:30 AM');
  const [patientName, setPatientName] = useState('');
  const [patientAge, setPatientAge] = useState<number>(30);
  const [patientGender, setPatientGender] = useState<'Male' | 'Female' | 'Other'>('Male');
  const [patientPhone, setPatientPhone] = useState('');
  const [patientEmail, setPatientEmail] = useState('');
  const [symptoms, setSymptoms] = useState('');
  const [confirmedToken, setConfirmedToken] = useState<string | null>(null);

  useEffect(() => {
    if (activeQuickBookDoctorId) {
      setSelectedDoctorId(activeQuickBookDoctorId);
    } else if (DOCTORS.length > 0) {
      setSelectedDoctorId(DOCTORS[0].id);
    }
    // Set default tomorrow date
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    setAppointmentDate(tomorrow.toISOString().split('T')[0]);
    setConfirmedToken(null);
  }, [activeQuickBookDoctorId]);

  if (!activeQuickBookDoctorId) return null;

  const currentDoctor = DOCTORS.find((d) => d.id === selectedDoctorId) || DOCTORS[0];

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    if (!patientName || !patientPhone) return;

    const apt = bookAppointment({
      doctorId: currentDoctor.id,
      doctorName: currentDoctor.name,
      departmentName: currentDoctor.departmentName,
      consultationFee: currentDoctor.consultationFee,
      date: appointmentDate,
      timeSlot,
      patientName,
      patientAge: Number(patientAge) || 30,
      patientGender,
      patientPhone,
      patientEmail: patientEmail || 'patient@hospitalsee.com',
      symptoms,
      appointmentType: 'New Consultation'
    });

    setConfirmedToken(apt.tokenNumber);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/70 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white w-full max-w-lg rounded-2xl shadow-2xl border border-orange-100 overflow-hidden max-h-[90vh] flex flex-col">
        {/* Modal Header */}
        <div className="bg-gradient-to-r from-orange-600 via-amber-600 to-orange-500 text-white p-4 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2.5">
            <Calendar className="w-5 h-5 text-yellow-200" />
            <h3 className="font-bold text-base">Quick OPD Appointment</h3>
          </div>
          <button
            onClick={closeQuickBook}
            className="p-1 rounded-lg hover:bg-white/20 text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-5 overflow-y-auto">
          {confirmedToken ? (
            <div className="text-center py-6 space-y-4">
              <div className="w-14 h-14 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold text-stone-900">Appointment Confirmed!</h4>
              <p className="text-xs text-stone-600 max-w-xs mx-auto">
                Your appointment with <span className="font-semibold text-stone-800">{currentDoctor.name}</span> is scheduled.
              </p>

              <div className="p-3.5 bg-amber-50/60 border border-amber-200 rounded-xl max-w-xs mx-auto text-left text-xs space-y-1.5">
                <div className="flex justify-between">
                  <span className="text-stone-500">Token ID:</span>
                  <span className="font-mono font-bold text-orange-700">{confirmedToken}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-stone-500">Date & Slot:</span>
                  <span className="font-medium text-stone-800">{appointmentDate} • {timeSlot}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-stone-500">Room / Suite:</span>
                  <span className="font-medium text-stone-800">{currentDoctor.roomNumber}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-stone-500">Fee at Counter:</span>
                  <span className="font-bold text-stone-900">₹{currentDoctor.consultationFee}</span>
                </div>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row gap-2 justify-center">
                <Link
                  to="/my-appointments"
                  onClick={closeQuickBook}
                  className="px-4 py-2 rounded-xl bg-orange-600 hover:bg-orange-700 text-white text-xs font-semibold"
                >
                  View My Appointments
                </Link>
                <button
                  onClick={closeQuickBook}
                  className="px-4 py-2 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-700 text-xs font-semibold cursor-pointer"
                >
                  Done
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleBooking} className="space-y-4">
              {/* Doctor selected highlight */}
              <div className="p-3 bg-amber-50/70 border border-amber-200 rounded-xl flex items-center gap-3">
                <img
                  src={currentDoctor.image}
                  alt={currentDoctor.name}
                  className="w-12 h-12 rounded-full object-cover border border-amber-300 shrink-0"
                />
                <div className="flex-1 min-w-0">
                  <h4 className="font-bold text-sm text-stone-900 truncate">{currentDoctor.name}</h4>
                  <p className="text-xs text-orange-700 truncate">{currentDoctor.designation}</p>
                  <p className="text-[11px] text-stone-500 mt-0.5">
                    {currentDoctor.roomNumber} • OPD Fee: ₹{currentDoctor.consultationFee}
                  </p>
                </div>
              </div>

              {/* Date & Slot selection */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">
                    Appointment Date *
                  </label>
                  <input
                    type="date"
                    required
                    value={appointmentDate}
                    onChange={(e) => setAppointmentDate(e.target.value)}
                    className="w-full text-xs p-2.5 rounded-lg border border-stone-300 focus:border-orange-500 outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">
                    Time Slot *
                  </label>
                  <select
                    value={timeSlot}
                    onChange={(e) => setTimeSlot(e.target.value)}
                    className="w-full text-xs p-2.5 rounded-lg border border-stone-300 focus:border-orange-500 outline-none"
                  >
                    <option value="09:30 AM - 10:00 AM">09:30 AM - 10:00 AM</option>
                    <option value="10:30 AM - 11:00 AM">10:30 AM - 11:00 AM</option>
                    <option value="11:30 AM - 12:00 PM">11:30 AM - 12:00 PM</option>
                    <option value="01:00 PM - 01:30 PM">01:00 PM - 01:30 PM</option>
                    <option value="04:00 PM - 04:30 PM">04:00 PM - 04:30 PM</option>
                    <option value="05:30 PM - 06:00 PM">05:30 PM - 06:00 PM</option>
                  </select>
                </div>
              </div>

              {/* Patient Details */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="sm:col-span-2">
                  <label className="block text-xs font-semibold text-stone-700 mb-1">
                    Patient Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Full Name"
                    value={patientName}
                    onChange={(e) => setPatientName(e.target.value)}
                    className="w-full text-xs p-2.5 rounded-lg border border-stone-300 focus:border-orange-500 outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">Age *</label>
                  <input
                    type="number"
                    min="1"
                    max="110"
                    value={patientAge}
                    onChange={(e) => setPatientAge(Number(e.target.value))}
                    className="w-full text-xs p-2.5 rounded-lg border border-stone-300 focus:border-orange-500 outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={patientPhone}
                    onChange={(e) => setPatientPhone(e.target.value)}
                    className="w-full text-xs p-2.5 rounded-lg border border-stone-300 focus:border-orange-500 outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">
                    Gender *
                  </label>
                  <select
                    value={patientGender}
                    onChange={(e) => setPatientGender(e.target.value as any)}
                    className="w-full text-xs p-2.5 rounded-lg border border-stone-300 focus:border-orange-500 outline-none"
                  >
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-stone-700 mb-1">
                  Reason / Symptoms (Optional)
                </label>
                <input
                  type="text"
                  placeholder="e.g. Chest tightness, joint pain, routine checkup..."
                  value={symptoms}
                  onChange={(e) => setSymptoms(e.target.value)}
                  className="w-full text-xs p-2.5 rounded-lg border border-stone-300 focus:border-orange-500 outline-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-700 hover:to-amber-700 text-white font-bold text-sm shadow-md transition-all active:scale-98 cursor-pointer"
                >
                  Confirm & Reserve OPD Slot
                </button>
              </div>

              <p className="text-[11px] text-stone-400 text-center">
                Appointment will be saved securely to your browser storage. Pay consultation fee directly at the OPD counter.
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
