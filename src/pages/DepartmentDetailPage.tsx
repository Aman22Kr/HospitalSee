import React from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  HeartPulse,
  Clock,
  CheckCircle2,
  Calendar,
  Phone,
  User,
  ArrowRight,
  ShieldCheck,
  Award,
  ChevronLeft
} from 'lucide-react';
import { DEPARTMENTS, DOCTORS, HOSPITAL_INFO } from '../data/hospitalData';
import { useHospital } from '../context/HospitalContext';
import { AdBanner } from '../components/layout/AdBanner';

export const DepartmentDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { openQuickBook } = useHospital();

  const department = DEPARTMENTS.find((d) => d.id === id);

  if (!department) {
    return (
      <div className="max-w-4xl mx-auto py-20 px-4 text-center">
        <h2 className="text-2xl font-bold text-stone-800">Department Not Found</h2>
        <p className="text-stone-500 text-sm mt-2">
          The requested medical department could not be located.
        </p>
        <Link
          to="/departments"
          className="inline-flex items-center gap-2 mt-4 px-5 py-2.5 rounded-xl bg-orange-600 hover:bg-orange-700 text-white text-xs font-bold shadow-md shadow-orange-600/20"
        >
          <ChevronLeft className="w-4 h-4" />
          <span>Back to All Specialities</span>
        </Link>
      </div>
    );
  }

  // Find doctors working in this department
  const associatedDoctors = DOCTORS.filter((doc) => doc.departmentId === department.id);

  return (
    <div className="w-full bg-[#fffdfa]">
      {/* Hero Header */}
      <section className="bg-gradient-to-r from-stone-950 via-orange-950 to-stone-900 text-white py-14 px-4 sm:px-6 relative overflow-hidden">
        <div className="absolute -top-16 -right-16 w-80 h-80 rounded-full bg-amber-500/10 blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto relative z-10">
          <Link
            to="/departments"
            className="inline-flex items-center gap-1.5 text-xs text-amber-300 hover:text-white font-semibold mb-4"
          >
            <ChevronLeft className="w-4 h-4 text-yellow-300" />
            <span>All Specialities</span>
          </Link>
          <div className="flex flex-wrap items-center gap-2 mb-2">
            <span className="text-[10px] font-bold uppercase tracking-wider bg-orange-500/20 text-yellow-300 border border-amber-400/30 px-2.5 py-0.5 rounded-full">
              {department.category}
            </span>
            <span className="text-xs text-amber-200">• NABH Standard Care</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white">
            {department.name}
          </h1>
          <p className="text-amber-100 text-sm sm:text-base mt-2 max-w-2xl font-medium leading-relaxed">
            {department.tagline}
          </p>
        </div>
      </section>

      {/* Main Content Layout */}
      <section className="py-14 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Left Main Information */}
            <div className="lg:col-span-8 space-y-10">
              {/* Department Image & Overview */}
              <div>
                <img
                  src={department.image}
                  alt={department.name}
                  className="w-full h-80 object-cover rounded-3xl border border-orange-100 shadow-sm mb-6"
                />
                <h2 className="text-xl font-bold text-stone-900 mb-3">Clinical Overview</h2>
                <p className="text-sm text-stone-600 leading-relaxed">
                  {department.fullDescription}
                </p>
              </div>

              {/* Procedures & Surgeries */}
              <div className="p-6 bg-[#fffaf5] rounded-2xl border border-orange-100">
                <h3 className="font-bold text-base text-stone-900 mb-4 flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-orange-600" />
                  <span>Key Procedures & Interventions</span>
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {department.keyProcedures.map((proc, idx) => (
                    <div key={idx} className="flex items-start gap-2 bg-white p-3 rounded-xl border border-orange-100">
                      <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                      <span className="text-xs font-semibold text-stone-800">{proc}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Conditions Treated */}
              <div>
                <h3 className="font-bold text-base text-stone-900 mb-3">
                  Conditions & Diseases Managed
                </h3>
                <div className="flex flex-wrap gap-2">
                  {department.conditionsTreated.map((cond, idx) => (
                    <span
                      key={idx}
                      className="text-xs font-medium bg-amber-50 text-amber-900 border border-amber-200 px-3 py-1.5 rounded-lg"
                    >
                      {cond}
                    </span>
                  ))}
                </div>
              </div>

              {/* Technologies */}
              <div>
                <h3 className="font-bold text-base text-stone-900 mb-3">
                  Diagnostic Equipment & Infrastructure
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {department.technologies.map((tech, idx) => (
                    <div key={idx} className="p-3 bg-amber-50/50 rounded-xl border border-amber-200 text-xs text-stone-700 font-medium text-center">
                      {tech}
                    </div>
                  ))}
                </div>
              </div>

              {/* Doctors in this Department */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-bold text-lg text-stone-900">
                    Faculty Specialists ({associatedDoctors.length})
                  </h3>
                  <Link to="/doctors" className="text-xs font-bold text-orange-600 hover:underline">
                    View All Doctors
                  </Link>
                </div>

                <div className="space-y-4">
                  {associatedDoctors.map((doc) => (
                    <div
                      key={doc.id}
                      className="p-5 rounded-2xl border border-orange-100 bg-white flex flex-col sm:flex-row items-center justify-between gap-4 hover:shadow-md transition-shadow"
                    >
                      <div className="flex items-center gap-4 text-center sm:text-left">
                        <img
                          src={doc.image}
                          alt={doc.name}
                          className="w-16 h-16 rounded-2xl object-cover border border-amber-200"
                        />
                        <div>
                          <h4 className="font-extrabold text-base text-stone-900">{doc.name}</h4>
                          <p className="text-xs text-orange-700 font-semibold">{doc.designation}</p>
                          <p className="text-[11px] text-stone-500 mt-0.5">{doc.qualifications}</p>
                          <p className="text-[11px] text-stone-500">{doc.opdSchedule}</p>
                        </div>
                      </div>

                      <div className="flex sm:flex-col gap-2 w-full sm:w-auto">
                        <button
                          onClick={() => openQuickBook(doc.id)}
                          className="flex-1 sm:flex-none px-4 py-2 bg-orange-600 hover:bg-orange-700 text-white font-bold text-xs rounded-xl shadow-sm shadow-orange-600/20 cursor-pointer"
                        >
                          Book OPD Slot
                        </button>
                        <Link
                          to={`/doctors/${doc.id}`}
                          className="flex-1 sm:flex-none px-4 py-2 bg-amber-50 hover:bg-amber-100 text-stone-700 font-semibold text-xs rounded-xl text-center border border-amber-200"
                        >
                          View Bio
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Sticky Sidebar */}
            <div className="lg:col-span-4 space-y-6">
              {/* OPD Schedule Box */}
              <div className="bg-[#fffaf5] p-6 rounded-2xl border border-orange-100 space-y-4">
                <h3 className="font-extrabold text-base text-stone-900">
                  OPD Consultation Timings
                </h3>
                <div className="flex items-center gap-2 text-xs text-stone-700">
                  <Clock className="w-4 h-4 text-orange-600 shrink-0" />
                  <span>{department.opdTimings}</span>
                </div>

                <div className="pt-2">
                  <Link
                    to={`/appointments?dept=${encodeURIComponent(department.name)}`}
                    className="w-full py-3 rounded-xl bg-gradient-to-r from-orange-600 via-amber-600 to-orange-500 hover:from-orange-700 hover:to-amber-700 text-white font-bold text-xs shadow-md shadow-orange-600/20 text-center block"
                  >
                    Book Appointment in this Dept
                  </Link>
                </div>
              </div>

              {/* TPA Cashless Assurance */}
              <div className="p-5 bg-amber-50/70 border border-amber-200 rounded-2xl text-xs space-y-2">
                <div className="flex items-center gap-2 font-bold text-amber-900">
                  <ShieldCheck className="w-4 h-4 text-orange-600" />
                  <span>Cashless Hospitalisation Available</span>
                </div>
                <p className="text-stone-700">
                  This speciality is fully covered under CGHS, ECHS, DGEHS, and 25+ private insurance TPAs.
                </p>
                <Link to="/cashless-tpa" className="text-orange-700 font-bold underline block pt-1">
                  Check Your Insurance Eligibility →
                </Link>
              </div>

              {/* Emergency Hotline */}
              <div className="p-5 bg-orange-50 border border-orange-200 rounded-2xl text-xs space-y-2">
                <span className="font-bold text-orange-950 block">Acute Emergency?</span>
                <p className="text-stone-600">
                  Direct line to on-call emergency room specialist:
                </p>
                <a
                  href={`tel:${HOSPITAL_INFO.emergencyPhone}`}
                  className="font-extrabold text-sm text-orange-700 hover:underline block"
                >
                  {HOSPITAL_INFO.emergencyPhone}
                </a>
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
