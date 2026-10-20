import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Search,
  Star,
  Clock,
  MapPin,
  Calendar,
  Heart,
  UserCheck,
  Filter,
  CheckCircle2,
  ChevronRight
} from 'lucide-react';
import { DOCTORS, DEPARTMENTS } from '../data/hospitalData';
import { useHospital } from '../context/HospitalContext';
import { AdBanner } from '../components/layout/AdBanner';

export const DoctorsPage: React.FC = () => {
  const { toggleFavoriteDoctor, isDoctorFavorite, openQuickBook } = useHospital();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDept, setSelectedDept] = useState('all');
  const [selectedDay, setSelectedDay] = useState('all');

  const daysOfWeek = ['all', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  const filteredDoctors = DOCTORS.filter((doc) => {
    const matchesSearch =
      doc.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      doc.departmentName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      doc.specializations.some((s) => s.toLowerCase().includes(searchQuery.toLowerCase()));

    const matchesDept = selectedDept === 'all' || doc.departmentId === selectedDept;

    const matchesDay = selectedDay === 'all' || doc.availableDays.includes(selectedDay);

    return matchesSearch && matchesDept && matchesDay;
  });

  return (
    <div className="w-full bg-[#fffdfa]">
      {/* Banner */}
      <section className="bg-gradient-to-r from-stone-950 via-orange-950 to-stone-900 text-white py-14 px-4 sm:px-6 relative overflow-hidden">
        <div className="absolute -top-16 -right-16 w-80 h-80 rounded-full bg-amber-500/10 blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto text-left relative z-10">
          <span className="inline-block text-xs font-extrabold uppercase tracking-wider text-amber-400 bg-orange-900/40 border border-amber-400/30 px-2.5 py-1 rounded-full mb-2">
            Expert Clinical Faculty
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white mt-1">
            Find a Doctor & OPD Schedule
          </h1>
          <p className="text-stone-300 text-sm sm:text-base mt-2 max-w-2xl leading-relaxed">
            Choose from over 45+ super-specialists across cardiology, orthopaedics, obstetrics, pediatrics, neurosurgery, and nephrology.
          </p>
        </div>
      </section>

      {/* Filters and Search Strip */}
      <section className="bg-white border-b border-orange-100 py-6 sticky top-[69px] z-30 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-3">
          {/* Search by name/keyword */}
          <div className="relative">
            <Search className="w-4 h-4 text-orange-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search by doctor or keyword..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-2.5 rounded-xl text-xs border border-orange-200 focus:border-orange-500 focus:ring-2 focus:ring-amber-200 outline-none bg-white"
            />
          </div>

          {/* Department Filter */}
          <div>
            <select
              value={selectedDept}
              onChange={(e) => setSelectedDept(e.target.value)}
              className="w-full py-2.5 px-3 rounded-xl text-xs border border-orange-200 focus:border-orange-500 focus:ring-2 focus:ring-amber-200 outline-none bg-white font-medium text-stone-700"
            >
              <option value="all">All Specialities ({DEPARTMENTS.length})</option>
              {DEPARTMENTS.map((dept) => (
                <option key={dept.id} value={dept.id}>
                  {dept.name}
                </option>
              ))}
            </select>
          </div>

          {/* Day of Week */}
          <div>
            <select
              value={selectedDay}
              onChange={(e) => setSelectedDay(e.target.value)}
              className="w-full py-2.5 px-3 rounded-xl text-xs border border-orange-200 focus:border-orange-500 focus:ring-2 focus:ring-amber-200 outline-none bg-white font-medium text-stone-700"
            >
              <option value="all">Any Day of the Week</option>
              {daysOfWeek.filter((d) => d !== 'all').map((day) => (
                <option key={day} value={day}>
                  Available on {day}
                </option>
              ))}
            </select>
          </div>

          {/* Reset button */}
          <div className="flex items-center">
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedDept('all');
                setSelectedDay('all');
              }}
              className="w-full py-2.5 px-4 rounded-xl text-xs font-semibold bg-amber-50 hover:bg-amber-100 text-stone-700 border border-amber-200/80 transition-colors cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        </div>
      </section>

      {/* Doctor Cards Grid */}
      <section className="py-12 bg-[#fffaf5] min-h-[500px]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between mb-6 text-xs text-stone-500">
            <span>
              Showing <strong className="text-stone-800">{filteredDoctors.length}</strong> available specialists
            </span>
          </div>

          {filteredDoctors.length === 0 ? (
            <div className="bg-white p-12 text-center rounded-2xl border border-orange-100 max-w-xl mx-auto">
              <p className="text-base font-bold text-stone-800">No doctors match your criteria</p>
              <p className="text-xs text-stone-500 mt-1">Try relaxing your filters or search keywords.</p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedDept('all');
                  setSelectedDay('all');
                }}
                className="mt-4 px-5 py-2 bg-orange-600 hover:bg-orange-700 text-white rounded-xl text-xs font-bold shadow-md shadow-orange-600/20 cursor-pointer"
              >
                Clear Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredDoctors.map((doc) => {
                const isFav = isDoctorFavorite(doc.id);

                return (
                  <div
                    key={doc.id}
                    className="bg-white rounded-2xl p-5 border border-orange-100 hover:border-amber-300 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between relative group"
                  >
                    {/* Favorite toggle button */}
                    <button
                      onClick={() => toggleFavoriteDoctor(doc.id)}
                      title={isFav ? 'Remove from saved doctors' : 'Save doctor to favorites'}
                      className={`absolute top-4 right-4 p-2 rounded-full border transition-all cursor-pointer ${
                        isFav
                          ? 'bg-orange-50 border-orange-200 text-orange-600'
                          : 'bg-white/80 border-stone-200 text-stone-400 hover:text-orange-500'
                      }`}
                    >
                      <Heart className={`w-4 h-4 ${isFav ? 'fill-current' : ''}`} />
                    </button>

                    <div>
                      {/* Doctor header */}
                      <div className="flex items-start gap-4">
                        <img
                          src={doc.image}
                          alt={doc.name}
                          className="w-20 h-20 rounded-2xl object-cover border-2 border-amber-100 shrink-0 group-hover:scale-102 transition-transform"
                          loading="lazy"
                        />
                        <div className="flex-1 min-w-0 pr-6">
                          <div className="flex items-center gap-1 text-amber-500 text-xs font-bold mb-1">
                            <Star className="w-3.5 h-3.5 fill-current" />
                            <span>{doc.rating}</span>
                            <span className="text-stone-400 font-normal">({doc.reviewCount})</span>
                          </div>
                          <h3 className="font-extrabold text-base text-stone-900 truncate">
                            {doc.name}
                          </h3>
                          <p className="text-xs text-orange-700 font-semibold truncate">
                            {doc.designation}
                          </p>
                          <p className="text-[11px] text-stone-500 truncate mt-0.5">
                            {doc.departmentName}
                          </p>
                        </div>
                      </div>

                      {/* Qualifications & Schedule */}
                      <div className="mt-4 p-3 bg-amber-50/60 rounded-xl space-y-1.5 text-xs border border-amber-100">
                        <div className="text-[11px] text-stone-700 font-medium line-clamp-1">
                          🎓 {doc.qualifications}
                        </div>
                        <div className="flex justify-between">
                          <span className="text-stone-500">Experience:</span>
                          <span className="font-bold text-stone-800">{doc.experienceYears}+ Years</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-stone-500">OPD Timings:</span>
                          <span className="font-medium text-stone-800 truncate max-w-[160px]">{doc.opdSchedule}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-stone-500">Room / Suite:</span>
                          <span className="font-medium text-stone-800">{doc.roomNumber}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-stone-500">OPD Fee:</span>
                          <span className="font-bold text-orange-600">₹{doc.consultationFee}</span>
                        </div>
                      </div>

                      {/* Specializations pills */}
                      <div className="mt-3 flex flex-wrap gap-1">
                        {doc.specializations.slice(0, 3).map((spec, i) => (
                          <span
                            key={i}
                            className="text-[10px] bg-amber-50 text-amber-900 border border-amber-200 px-2 py-0.5 rounded font-medium"
                          >
                            {spec}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="mt-5 pt-3 border-t border-orange-50 flex items-center gap-2">
                      <button
                        onClick={() => openQuickBook(doc.id)}
                        className="flex-1 py-2.5 px-3 rounded-xl bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-700 hover:to-amber-700 text-white font-bold text-xs shadow-sm shadow-orange-600/20 transition-all active:scale-98 cursor-pointer"
                      >
                        Book Appointment
                      </button>
                      <Link
                        to={`/doctors/${doc.id}`}
                        className="py-2.5 px-3 rounded-xl bg-amber-50 hover:bg-amber-100 text-stone-700 border border-amber-200 font-semibold text-xs transition-colors"
                      >
                        Full Profile
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* Ad Section */}
      <AdBanner />
    </div>
  );
};
