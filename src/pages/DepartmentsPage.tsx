import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Activity,
  HeartPulse,
  Search,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Clock,
  Sparkles,
  ChevronRight
} from 'lucide-react';
import { DEPARTMENTS } from '../data/hospitalData';
import { AdBanner } from '../components/layout/AdBanner';

export const DepartmentsPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = [
    { id: 'all', label: 'All Specialities' },
    { id: 'clinical', label: 'Clinical Medicine' },
    { id: 'surgical', label: 'Surgical Excellence' },
    { id: 'diagnostic', label: 'Diagnostics & Lab' },
    { id: 'critical-care', label: 'Emergency & ICU' }
  ];

  const filteredDepts = DEPARTMENTS.filter((dept) => {
    const matchesCat = selectedCategory === 'all' || dept.category === selectedCategory;
    const matchesSearch =
      dept.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      dept.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
      dept.keyProcedures.some((p) => p.toLowerCase().includes(searchQuery.toLowerCase())) ||
      dept.conditionsTreated.some((c) => c.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCat && matchesSearch;
  });

  return (
    <div className="w-full bg-[#fffdfa]">
      {/* Banner */}
      <section className="bg-gradient-to-r from-stone-950 via-orange-950 to-stone-900 text-white py-14 px-4 sm:px-6 relative overflow-hidden">
        <div className="absolute -top-16 -right-16 w-80 h-80 rounded-full bg-amber-500/10 blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto text-left relative z-10">
          <span className="inline-block text-xs font-extrabold uppercase tracking-wider text-amber-400 bg-orange-900/40 border border-amber-400/30 px-2.5 py-1 rounded-full mb-2">
            Comprehensive Medical Care
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white mt-1">
            Clinical Specialities & Surgical Departments
          </h1>
          <p className="text-stone-300 text-sm sm:text-base mt-2 max-w-2xl leading-relaxed">
            From interventional cardiology and joint replacement to advanced neonatal care and 24x7 dialysis, explore our specialized centres.
          </p>
        </div>
      </section>

      {/* Filter & Search Bar */}
      <section className="bg-white border-b border-orange-100 py-6 sticky top-[69px] z-30 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 w-full md:w-auto">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  selectedCategory === cat.id
                    ? 'bg-orange-600 text-white shadow-md shadow-orange-600/20'
                    : 'bg-amber-50/70 hover:bg-amber-100 text-stone-700 border border-amber-200/60'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-orange-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search speciality or procedure..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 rounded-xl text-xs border border-orange-200 focus:border-orange-500 focus:ring-2 focus:ring-amber-200 outline-none bg-white"
            />
          </div>
        </div>
      </section>

      {/* Departments Grid */}
      <section className="py-12 bg-[#fffaf5] min-h-[500px]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between mb-6 text-xs text-stone-500">
            <span>
              Showing <strong className="text-stone-800">{filteredDepts.length}</strong> departments
            </span>
          </div>

          {filteredDepts.length === 0 ? (
            <div className="bg-white p-12 text-center rounded-2xl border border-orange-100">
              <p className="text-base font-bold text-stone-800">No departments match your query</p>
              <p className="text-xs text-stone-500 mt-1">Try resetting the filter or search term.</p>
              <button
                onClick={() => {
                  setSelectedCategory('all');
                  setSearchQuery('');
                }}
                className="mt-4 px-4 py-2 bg-orange-600 hover:bg-orange-700 text-white rounded-xl text-xs font-bold shadow-md shadow-orange-600/20 cursor-pointer"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredDepts.map((dept) => (
                <div
                  key={dept.id}
                  className="bg-white rounded-2xl overflow-hidden border border-orange-100 hover:border-amber-300 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    {/* Image banner */}
                    <div className="w-full h-48 relative overflow-hidden">
                      <img
                        src={dept.image}
                        alt={dept.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-transparent" />
                      <div className="absolute top-3 right-3">
                        <span className="text-[10px] font-bold uppercase tracking-wider bg-white/95 text-stone-800 px-2.5 py-1 rounded-full shadow-sm">
                          {dept.category}
                        </span>
                      </div>
                      <div className="absolute bottom-3 left-4 right-4">
                        <h3 className="font-extrabold text-lg text-white leading-tight">
                          {dept.name}
                        </h3>
                      </div>
                    </div>

                    {/* Card Content */}
                    <div className="p-5">
                      <p className="text-xs text-orange-700 font-semibold mb-2">
                        {dept.tagline}
                      </p>
                      <p className="text-xs text-stone-600 line-clamp-3 leading-relaxed mb-4">
                        {dept.shortDescription}
                      </p>

                      <div className="space-y-2 pt-2 border-t border-orange-50">
                        <span className="text-[11px] font-bold uppercase tracking-wider text-stone-400 block">
                          Key Treatments & Procedures:
                        </span>
                        <ul className="space-y-1 text-xs text-stone-700">
                          {dept.keyProcedures.slice(0, 3).map((proc, i) => (
                            <li key={i} className="flex items-start gap-1.5">
                              <CheckCircle2 className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
                              <span className="truncate">{proc}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Footer actions */}
                  <div className="p-5 pt-0">
                    <div className="pt-3 border-t border-orange-50 flex items-center justify-between gap-3">
                      <span className="text-[11px] text-stone-500 flex items-center gap-1">
                        <Clock className="w-3 h-3 text-orange-600" />
                        OPD Schedule
                      </span>
                      <Link
                        to={`/departments/${dept.id}`}
                        className="inline-flex items-center gap-1 text-xs font-bold text-orange-700 hover:text-orange-800"
                      >
                        <span>Full Department Profile</span>
                        <ChevronRight className="w-4 h-4 text-orange-600" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Ad Banner */}
      <AdBanner />
    </div>
  );
};
