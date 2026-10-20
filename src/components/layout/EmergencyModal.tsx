import React, { useState } from 'react';
import {
  PhoneCall,
  Ambulance,
  AlertTriangle,
  X,
  MapPin,
  Clock,
  CheckCircle2,
  HeartPulse,
  Flame,
  ShieldAlert
} from 'lucide-react';
import { HOSPITAL_INFO } from '../../data/hospitalData';
import { useHospital } from '../../context/HospitalContext';

export const EmergencyModal: React.FC = () => {
  const { emergencyModalOpen, closeEmergencyModal } = useHospital();
  const [patientName, setPatientName] = useState('');
  const [patientPhone, setPatientPhone] = useState('');
  const [pickupAddress, setPickupAddress] = useState('');
  const [emergencyType, setEmergencyType] = useState('Cardiac / Chest Pain');
  const [isDispatched, setIsDispatched] = useState(false);
  const [dispatchRef, setDispatchRef] = useState('');

  if (!emergencyModalOpen) return null;

  const handleAmbulanceDispatch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!patientPhone || !pickupAddress) return;

    const ref = `AMB-${Math.floor(1000 + Math.random() * 9000)}`;
    setDispatchRef(ref);
    setIsDispatched(true);

    // Save dispatch to localStorage
    try {
      const existing = JSON.parse(localStorage.getItem('hospitalsee_ambulance_requests') || '[]');
      existing.unshift({
        ref,
        patientName: patientName || 'Emergency Patient',
        patientPhone,
        pickupAddress,
        emergencyType,
        timestamp: new Date().toISOString(),
        etaMinutes: 14,
        status: 'Dispatched'
      });
      localStorage.setItem('hospitalsee_ambulance_requests', JSON.stringify(existing));
    } catch (err) {
      console.error(err);
    }
  };

  const resetForm = () => {
    setIsDispatched(false);
    setPatientName('');
    setPatientPhone('');
    setPickupAddress('');
    closeEmergencyModal();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white w-full max-w-xl rounded-2xl shadow-2xl border-2 border-rose-500 overflow-hidden">
        {/* Header Ribbon */}
        <div className="bg-gradient-to-r from-rose-700 via-red-600 to-rose-700 text-white p-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-white/20">
              <Ambulance className="w-6 h-6 animate-pulse" />
            </div>
            <div>
              <h3 className="font-extrabold text-lg flex items-center gap-2">
                24x7 Emergency & Trauma Response
              </h3>
              <p className="text-xs text-rose-100">HospitalSee Golden Hour Resuscitation Unit</p>
            </div>
          </div>
          <button
            onClick={resetForm}
            className="p-1 rounded-lg hover:bg-white/20 text-white transition-colors cursor-pointer"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Quick Dial Buttons */}
        <div className="p-4 bg-rose-50 border-b border-rose-100 grid grid-cols-1 sm:grid-cols-2 gap-3">
          <a
            href={`tel:${HOSPITAL_INFO.emergencyPhone}`}
            className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-rose-600 hover:bg-rose-700 text-white font-bold text-sm shadow-md transition-all active:scale-95"
          >
            <PhoneCall className="w-4 h-4" />
            <span>Call ER: {HOSPITAL_INFO.emergencyPhone}</span>
          </a>

          <a
            href={`tel:${HOSPITAL_INFO.ambulanceHotline}`}
            className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-bold text-sm shadow-md transition-all active:scale-95"
          >
            <Ambulance className="w-4 h-4" />
            <span>Ambulance: {HOSPITAL_INFO.ambulanceHotline}</span>
          </a>
        </div>

        {/* Content Body */}
        <div className="p-6">
          {isDispatched ? (
            <div className="text-center py-6 space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h4 className="text-xl font-bold text-slate-800">
                ACLS Ambulance Dispatched!
              </h4>
              <p className="text-sm text-slate-600 max-w-md mx-auto">
                Tracking Reference: <span className="font-mono font-bold text-rose-600">{dispatchRef}</span>.
                The nearest critical care mobile unit has been notified with ventilator and paramedic support.
              </p>

              <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 max-w-sm mx-auto text-left text-xs space-y-2">
                <div className="flex justify-between">
                  <span className="text-slate-500">Estimated Arrival Time:</span>
                  <span className="font-bold text-emerald-600">~12 to 15 Mins</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Pickup Destination:</span>
                  <span className="font-medium text-slate-800 truncate max-w-[180px]">{pickupAddress}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Emergency Protocol:</span>
                  <span className="font-semibold text-rose-700">{emergencyType}</span>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={resetForm}
                  className="px-6 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs transition-colors cursor-pointer"
                >
                  Close & Keep Line Clear
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleAmbulanceDispatch} className="space-y-4">
              <div className="flex items-center gap-2 p-3 bg-amber-50 border border-amber-200 rounded-xl text-amber-900 text-xs">
                <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0" />
                <span>
                  Immediate life-threatening triage? Please call directly or submit your address below for instant GPS dispatch.
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Emergency Condition / Type *
                  </label>
                  <select
                    value={emergencyType}
                    onChange={(e) => setEmergencyType(e.target.value)}
                    className="w-full text-xs p-2.5 rounded-lg border border-slate-300 focus:border-rose-500 focus:ring-1 focus:ring-rose-500 outline-none"
                  >
                    <option value="Cardiac / Chest Pain">Cardiac / Severe Chest Pain</option>
                    <option value="Stroke / Paralysis">Stroke (Face Droop, Arm Weakness)</option>
                    <option value="Road Accident / Polytrauma">Road Accident / Polytrauma</option>
                    <option value="Severe Breathing Difficulty">Severe Breathing Distress</option>
                    <option value="Obstetric / Labour Emergency">Maternity / Active Labour</option>
                    <option value="Pediatric Critical">Pediatric Emergency</option>
                    <option value="Unconscious / Other">Unconscious Patient / Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Contact Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={patientPhone}
                    onChange={(e) => setPatientPhone(e.target.value)}
                    className="w-full text-xs p-2.5 rounded-lg border border-slate-300 focus:border-rose-500 focus:ring-1 focus:ring-rose-500 outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Patient Name (Optional)
                </label>
                <input
                  type="text"
                  placeholder="e.g. Ramesh Chandra"
                  value={patientName}
                  onChange={(e) => setPatientName(e.target.value)}
                  className="w-full text-xs p-2.5 rounded-lg border border-slate-300 focus:border-rose-500 focus:ring-1 focus:ring-rose-500 outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Pickup Location / Landmark Address *
                </label>
                <textarea
                  required
                  rows={2}
                  placeholder="Enter house/building number, street, nearby landmark in Delhi NCR..."
                  value={pickupAddress}
                  onChange={(e) => setPickupAddress(e.target.value)}
                  className="w-full text-xs p-2.5 rounded-lg border border-slate-300 focus:border-rose-500 focus:ring-1 focus:ring-rose-500 outline-none resize-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3 px-4 rounded-xl bg-rose-600 hover:bg-rose-700 text-white font-bold text-sm shadow-md shadow-rose-600/30 transition-all hover:shadow-lg active:scale-98 cursor-pointer flex items-center justify-center gap-2"
                >
                  <Ambulance className="w-5 h-5" />
                  <span>Request Urgent Ambulance Dispatch</span>
                </button>
              </div>

              {/* FAST Stroke Warning */}
              <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
                <span>HospitalSee Emergency Ward • Karol Bagh</span>
                <span className="font-semibold text-rose-600">Zero Triage Delay</span>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
