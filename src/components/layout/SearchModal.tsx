import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, X, User, Activity, Package, Stethoscope, ArrowRight, Building } from 'lucide-react';
import { DOCTORS, DEPARTMENTS, HEALTH_PACKAGES, FACILITIES } from '../../data/hospitalData';
import { useHospital } from '../../context/HospitalContext';

export const SearchModal: React.FC = () => {
  const { searchModalOpen, closeSearchModal } = useHospital();
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (searchModalOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      setQuery('');
    }
  }, [searchModalOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        searchModalOpen ? closeSearchModal() : null;
      }
      if (e.key === 'Escape' && searchModalOpen) {
        closeSearchModal();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [searchModalOpen, closeSearchModal]);

  if (!searchModalOpen) return null;

  const cleanQuery = query.trim().toLowerCase();

  const matchingDoctors = cleanQuery
    ? DOCTORS.filter(
        (doc) =>
          doc.name.toLowerCase().includes(cleanQuery) ||
          doc.departmentName.toLowerCase().includes(cleanQuery) ||
          doc.specializations.some((s) => s.toLowerCase().includes(cleanQuery))
      ).slice(0, 4)
    : [];

  const matchingDepartments = cleanQuery
    ? DEPARTMENTS.filter(
        (dept) =>
          dept.name.toLowerCase().includes(cleanQuery) ||
          dept.shortDescription.toLowerCase().includes(cleanQuery) ||
          dept.keyProcedures.some((p) => p.toLowerCase().includes(cleanQuery))
      ).slice(0, 4)
    : [];

  const matchingPackages = cleanQuery
    ? HEALTH_PACKAGES.filter(
        (pkg) =>
          pkg.title.toLowerCase().includes(cleanQuery) ||
          pkg.category.toLowerCase().includes(cleanQuery) ||
          pkg.subtitle.toLowerCase().includes(cleanQuery)
      ).slice(0, 3)
    : [];

  const matchingFacilities = cleanQuery
    ? FACILITIES.filter(
        (fac) =>
          fac.name.toLowerCase().includes(cleanQuery) ||
          fac.description.toLowerCase().includes(cleanQuery)
      ).slice(0, 3)
    : [];

  const hasResults =
    matchingDoctors.length > 0 ||
    matchingDepartments.length > 0 ||
    matchingPackages.length > 0 ||
    matchingFacilities.length > 0;

  const handleSelect = (url: string) => {
    closeSearchModal();
    navigate(url);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 px-4 bg-stone-950/60 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white w-full max-w-2xl rounded-2xl shadow-2xl border border-orange-100 overflow-hidden">
        {/* Search Input Bar */}
        <div className="flex items-center px-4 py-3.5 border-b border-orange-100 gap-3">
          <Search className="w-5 h-5 text-orange-600 shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search doctors, specialities (e.g. Cardiology), health checkups, or tests..."
            className="w-full text-stone-800 placeholder-stone-400 text-sm md:text-base outline-none bg-transparent"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="text-stone-400 hover:text-orange-600 p-1 text-xs"
            >
              Clear
            </button>
          )}
          <button
            onClick={closeSearchModal}
            aria-label="Close search"
            className="p-1 rounded-lg hover:bg-orange-50 text-stone-400 hover:text-stone-700 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Results Area */}
        <div className="max-h-[60vh] overflow-y-auto p-4 space-y-5">
          {!cleanQuery && (
            <div className="text-center py-6 text-stone-500">
              <p className="text-sm font-medium">Quick suggestions:</p>
              <div className="flex flex-wrap justify-center gap-2 mt-3">
                {['Cardiology', 'Joint Replacement', 'Gynaecology', 'Dialysis', 'Full Body Checkup', 'Dr. Rajesh Aggarwal'].map(
                  (suggestion) => (
                    <button
                      key={suggestion}
                      onClick={() => setQuery(suggestion)}
                      className="text-xs bg-amber-50/70 hover:bg-orange-100 hover:text-orange-800 text-stone-700 px-3 py-1.5 rounded-full border border-amber-200 transition-colors"
                    >
                      {suggestion}
                    </button>
                  )
                )}
              </div>
            </div>
          )}

          {cleanQuery && !hasResults && (
            <div className="text-center py-10 text-stone-500">
              <p className="text-base font-semibold">No direct results found for &ldquo;{query}&rdquo;</p>
              <p className="text-xs text-stone-400 mt-1">
                Try searching for cardiology, orthopaedics, MRI/CT, packages, or doctor names.
              </p>
            </div>
          )}

          {/* Doctors Results */}
          {matchingDoctors.length > 0 && (
            <div>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-orange-600 mb-2">
                <User className="w-3.5 h-3.5 text-orange-600" />
                <span>Specialist Doctors</span>
              </div>
              <div className="space-y-1.5">
                {matchingDoctors.map((doc) => (
                  <button
                    key={doc.id}
                    onClick={() => handleSelect(`/doctors/${doc.id}`)}
                    className="w-full text-left p-2.5 rounded-xl hover:bg-orange-50/80 flex items-center justify-between group transition-colors cursor-pointer"
                  >
                    <div className="flex items-center gap-3">
                      <img
                        src={doc.image}
                        alt={doc.name}
                        className="w-10 h-10 rounded-full object-cover border border-amber-200"
                      />
                      <div>
                        <div className="text-sm font-bold text-stone-800 group-hover:text-orange-700">
                          {doc.name}
                        </div>
                        <div className="text-xs text-stone-500">{doc.departmentName}</div>
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-stone-400 group-hover:text-orange-600 group-hover:translate-x-1 transition-transform" />
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Departments Results */}
          {matchingDepartments.length > 0 && (
            <div>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-700 mb-2">
                <Activity className="w-3.5 h-3.5 text-amber-600" />
                <span>Departments & Specialities</span>
              </div>
              <div className="space-y-1.5">
                {matchingDepartments.map((dept) => (
                  <button
                    key={dept.id}
                    onClick={() => handleSelect(`/departments/${dept.id}`)}
                    className="w-full text-left p-2.5 rounded-xl hover:bg-amber-50/80 flex items-center justify-between group transition-colors cursor-pointer"
                  >
                    <div>
                      <div className="text-sm font-bold text-stone-800 group-hover:text-orange-700">
                        {dept.name}
                      </div>
                      <div className="text-xs text-stone-500 line-clamp-1">{dept.shortDescription}</div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-stone-400 group-hover:text-amber-600 group-hover:translate-x-1 transition-transform" />
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Health Packages Results */}
          {matchingPackages.length > 0 && (
            <div>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-600 mb-2">
                <Package className="w-3.5 h-3.5 text-amber-500" />
                <span>Preventive Health Packages</span>
              </div>
              <div className="space-y-1.5">
                {matchingPackages.map((pkg) => (
                  <button
                    key={pkg.id}
                    onClick={() => handleSelect('/health-packages')}
                    className="w-full text-left p-2.5 rounded-xl hover:bg-yellow-50/80 flex items-center justify-between group transition-colors cursor-pointer"
                  >
                    <div>
                      <div className="text-sm font-bold text-stone-800 group-hover:text-amber-800">
                        {pkg.title} • ₹{pkg.discountedPrice}
                      </div>
                      <div className="text-xs text-stone-500">{pkg.totalTests} Tests Included</div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-stone-400 group-hover:text-amber-600 group-hover:translate-x-1 transition-transform" />
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Footer shortcuts */}
        <div className="p-3 bg-amber-50/60 border-t border-amber-100 flex items-center justify-between text-xs text-stone-500">
          <span>Press ESC to close</span>
          <span className="font-semibold text-orange-700">HospitalSee Direct Directory</span>
        </div>
      </div>
    </div>
  );
};
