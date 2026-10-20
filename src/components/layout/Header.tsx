import React, { useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import {
  Phone,
  PhoneCall,
  Clock,
  MapPin,
  Search,
  Calendar,
  Menu,
  X,
  ShieldCheck,
  ChevronDown,
  Ambulance,
  HeartPulse,
  UserCheck,
  Activity,
  Award
} from 'lucide-react';
import { HOSPITAL_INFO, DEPARTMENTS } from '../../data/hospitalData';
import { useHospital } from '../../context/HospitalContext';

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [departmentsDropdownOpen, setDepartmentsDropdownOpen] = useState(false);
  const { appointments, bookedPackages, openSearchModal, openEmergencyModal } = useHospital();
  const location = useLocation();

  const totalBookingsCount = appointments.length + bookedPackages.length;

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setDepartmentsDropdownOpen(false);
  };

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'About Us', path: '/about' },
    { label: 'Specialities', path: '/departments', hasDropdown: true },
    { label: 'Find a Doctor', path: '/doctors' },
    { label: 'Facilities', path: '/facilities' },
    { label: 'Health Packages', path: '/health-packages' },
    { label: 'Cashless TPA', path: '/cashless-tpa' },
    { label: 'Patient Guide', path: '/patient-guide' },
    { label: 'Contact Us', path: '/contact' }
  ];

  return (
    <header className="w-full sticky top-0 z-40 bg-white shadow-sm border-b border-orange-100">
      {/* Top Emergency & Information Bar */}
      <div className="bg-stone-900 text-stone-200 text-xs py-2 px-4 border-b border-stone-800">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-y-2">
          {/* Left contact info */}
          <div className="flex flex-wrap items-center gap-x-6 gap-y-1">
            <div className="flex items-center gap-1.5 text-amber-400 font-bold">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
              </span>
              <span>24x7 Emergency:</span>
              <a href={`tel:${HOSPITAL_INFO.emergencyPhone}`} className="hover:underline text-white">
                {HOSPITAL_INFO.emergencyPhone}
              </a>
            </div>

            <div className="hidden sm:flex items-center gap-1.5 text-yellow-300 font-semibold">
              <Ambulance className="w-3.5 h-3.5 text-amber-400" />
              <span>Ambulance:</span>
              <a href={`tel:${HOSPITAL_INFO.ambulanceHotline}`} className="hover:underline text-white">
                {HOSPITAL_INFO.ambulanceHotline}
              </a>
            </div>

            <div className="hidden md:flex items-center gap-1.5 text-stone-400">
              <MapPin className="w-3.5 h-3.5 text-orange-400" />
              <span>Karol Bagh, New Delhi (Est. 1920)</span>
            </div>
          </div>

          {/* Right quick actions */}
          <div className="flex items-center gap-3 ml-auto">
            <Link
              to="/cashless-tpa"
              className="hidden lg:flex items-center gap-1 text-amber-200 hover:text-white transition-colors"
            >
              <ShieldCheck className="w-3.5 h-3.5 text-yellow-400" />
              <span>Cashless TPA Helpdesk</span>
            </Link>

            <span className="hidden lg:inline text-stone-700">|</span>

            <button
              onClick={openEmergencyModal}
              className="flex items-center gap-1 px-2.5 py-1 rounded bg-orange-600 hover:bg-orange-700 text-white font-bold text-[11px] shadow-sm transition-transform active:scale-95 cursor-pointer"
            >
              <PhoneCall className="w-3 h-3 text-yellow-300" />
              <span>SOS Emergency</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3.5 flex items-center justify-between gap-4">
        {/* Brand Logo */}
        <Link
          to="/"
          onClick={closeMobileMenu}
          className="flex items-center gap-3 shrink-0 group focus:outline-none"
        >
          <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-orange-600 via-amber-500 to-yellow-400 flex items-center justify-center text-white shadow-md shadow-orange-500/25 group-hover:scale-105 transition-transform">
            <HeartPulse className="w-6 h-6 stroke-[2.3]" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-2xl font-extrabold tracking-tight text-stone-900 group-hover:text-orange-600 transition-colors">
                Hospital<span className="text-orange-600">See</span>
              </span>
              <span className="text-[10px] font-bold uppercase tracking-wider bg-amber-50 text-amber-800 border border-amber-300/80 px-1.5 py-0.5 rounded">
                NABH
              </span>
            </div>
            <p className="text-[11px] font-medium text-stone-500 leading-tight">
              Premier Multi-Speciality Care • Estd. 1920
            </p>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden xl:flex items-center gap-1 text-[14px] font-semibold text-stone-700">
          {navLinks.map((link) => {
            if (link.hasDropdown) {
              return (
                <div
                  key={link.path}
                  className="relative group"
                  onMouseEnter={() => setDepartmentsDropdownOpen(true)}
                  onMouseLeave={() => setDepartmentsDropdownOpen(false)}
                >
                  <NavLink
                    to={link.path}
                    className={({ isActive }) =>
                      `flex items-center gap-1 px-3 py-2 rounded-lg transition-colors ${
                        isActive
                          ? 'text-orange-700 bg-orange-50 font-bold'
                          : 'hover:text-orange-600 hover:bg-orange-50/60'
                      }`
                    }
                  >
                    <span>{link.label}</span>
                    <ChevronDown className="w-3.5 h-3.5 text-stone-400 group-hover:rotate-180 transition-transform" />
                  </NavLink>

                  {/* Mega dropdown menu for Specialities */}
                  {departmentsDropdownOpen && (
                    <div className="absolute top-full left-0 w-80 bg-white rounded-xl shadow-xl border border-orange-100 p-2.5 z-50 animate-fadeIn">
                      <div className="p-2 border-b border-orange-100 mb-1 flex items-center justify-between">
                        <span className="text-xs font-bold text-stone-400 uppercase tracking-wider">
                          Centres of Excellence
                        </span>
                        <Link
                          to="/departments"
                          onClick={() => setDepartmentsDropdownOpen(false)}
                          className="text-xs text-orange-600 hover:underline font-semibold"
                        >
                          View All ({DEPARTMENTS.length})
                        </Link>
                      </div>
                      <div className="grid grid-cols-1 gap-1 max-h-80 overflow-y-auto">
                        {DEPARTMENTS.slice(0, 8).map((dept) => (
                          <Link
                            key={dept.id}
                            to={`/departments/${dept.id}`}
                            onClick={() => setDepartmentsDropdownOpen(false)}
                            className="flex items-center gap-2.5 p-2 rounded-lg hover:bg-orange-50 text-stone-800 hover:text-orange-800 transition-colors text-xs font-medium"
                          >
                            <div className="w-2 h-2 rounded-full bg-amber-500" />
                            <span className="truncate">{dept.name}</span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            }

            return (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `px-3 py-2 rounded-lg transition-colors ${
                    isActive
                      ? 'text-orange-700 bg-orange-50 font-bold'
                      : 'hover:text-orange-600 hover:bg-orange-50/60'
                  }`
                }
              >
                {link.label}
              </NavLink>
            );
          })}
        </nav>

        {/* Right CTA Actions */}
        <div className="flex items-center gap-2.5">
          {/* Search Trigger */}
          <button
            onClick={openSearchModal}
            title="Search doctors, departments, checkups..."
            aria-label="Search"
            className="p-2.5 rounded-xl text-stone-600 hover:text-orange-600 hover:bg-orange-50/70 transition-colors cursor-pointer"
          >
            <Search className="w-5 h-5" />
          </button>

          {/* My Appointments / Portal shortcut */}
          <Link
            to="/my-appointments"
            title="My Bookings & Records"
            className="relative p-2.5 rounded-xl text-stone-600 hover:text-orange-600 hover:bg-orange-50/70 transition-colors hidden sm:flex items-center gap-1.5"
          >
            <Calendar className="w-5 h-5" />
            <span className="text-xs font-semibold hidden md:inline">My Bookings</span>
            {totalBookingsCount > 0 && (
              <span className="absolute -top-1 -right-1 flex h-4.5 w-4.5 items-center justify-center rounded-full bg-orange-600 text-[10px] font-bold text-white shadow">
                {totalBookingsCount}
              </span>
            )}
          </Link>

          {/* Primary Book Appointment CTA */}
          <Link
            to="/appointments"
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-orange-600 via-amber-600 to-orange-500 hover:from-orange-700 hover:to-amber-700 text-white font-bold text-xs shadow-md shadow-orange-600/20 transition-all hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0"
          >
            <UserCheck className="w-4 h-4 text-yellow-200" />
            <span>Book Appointment</span>
          </Link>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle mobile menu"
            className="xl:hidden p-2.5 rounded-xl text-stone-700 hover:bg-orange-50 focus:outline-none cursor-pointer"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-white border-t border-orange-100 px-4 pt-3 pb-6 max-h-[85vh] overflow-y-auto animate-fadeIn shadow-2xl">
          <div className="flex items-center justify-between pb-3 mb-3 border-b border-orange-100">
            <span className="text-xs font-bold uppercase tracking-wider text-stone-400">
              HospitalSee Quick Menu
            </span>
            <Link
              to="/my-appointments"
              onClick={closeMobileMenu}
              className="text-xs font-semibold text-orange-600 flex items-center gap-1"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>My Bookings ({totalBookingsCount})</span>
            </Link>
          </div>

          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                onClick={closeMobileMenu}
                className={({ isActive }) =>
                  `px-3.5 py-2.5 rounded-lg text-sm font-semibold transition-colors flex items-center justify-between ${
                    isActive
                      ? 'bg-orange-50 text-orange-700 font-bold'
                      : 'text-stone-700 hover:bg-orange-50/50'
                  }`
                }
              >
                <span>{link.label}</span>
                {link.hasDropdown && (
                  <span className="text-[10px] text-orange-700 bg-amber-100 px-2 py-0.5 rounded-full font-bold">
                    {DEPARTMENTS.length} Depts
                  </span>
                )}
              </NavLink>
            ))}
          </div>

          <div className="mt-5 pt-4 border-t border-orange-100 space-y-2.5">
            <Link
              to="/appointments"
              onClick={closeMobileMenu}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-700 hover:to-amber-700 text-white font-bold text-sm shadow-md"
            >
              <Calendar className="w-4 h-4 text-yellow-200" />
              <span>Book Doctor Appointment</span>
            </Link>

            <button
              onClick={() => {
                closeMobileMenu();
                openEmergencyModal();
              }}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-orange-600 hover:bg-orange-700 text-white font-bold text-sm shadow-md cursor-pointer"
            >
              <PhoneCall className="w-4 h-4 text-yellow-300" />
              <span>Emergency SOS Call</span>
            </button>
          </div>

          {/* Quick contact numbers */}
          <div className="mt-4 p-3 bg-amber-50/60 border border-amber-100 rounded-xl text-xs space-y-1.5 text-stone-600">
            <div className="flex justify-between">
              <span className="font-medium text-stone-500">24x7 Emergency:</span>
              <a href={`tel:${HOSPITAL_INFO.emergencyPhone}`} className="font-bold text-orange-700">
                {HOSPITAL_INFO.emergencyPhone}
              </a>
            </div>
            <div className="flex justify-between">
              <span className="font-medium text-stone-500">OPD Helpline:</span>
              <a href={`tel:${HOSPITAL_INFO.opdHelpline}`} className="font-bold text-amber-700">
                {HOSPITAL_INFO.opdHelpline}
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
