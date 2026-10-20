import React, { createContext, useContext, useState, useEffect } from 'react';
import { Appointment, BookedPackage, PatientReview, InquiryMessage } from '../types';
import { PATIENT_REVIEWS } from '../data/hospitalData';

interface HospitalContextType {
  appointments: Appointment[];
  bookedPackages: BookedPackage[];
  favoriteDoctors: string[];
  reviews: PatientReview[];
  inquiries: InquiryMessage[];
  searchModalOpen: boolean;
  emergencyModalOpen: boolean;
  activeQuickBookDoctorId: string | null;
  bookAppointment: (apt: Omit<Appointment, 'id' | 'createdAt' | 'tokenNumber' | 'status'>) => Appointment;
  cancelAppointment: (id: string) => void;
  bookHealthPackage: (pkg: Omit<BookedPackage, 'id' | 'createdAt' | 'bookingRef' | 'status'>) => BookedPackage;
  toggleFavoriteDoctor: (doctorId: string) => void;
  isDoctorFavorite: (doctorId: string) => boolean;
  addReview: (review: Omit<PatientReview, 'id' | 'date' | 'verified'>) => void;
  submitInquiry: (inquiry: Omit<InquiryMessage, 'id' | 'createdAt' | 'status'>) => void;
  openSearchModal: () => void;
  closeSearchModal: () => void;
  openEmergencyModal: () => void;
  closeEmergencyModal: () => void;
  openQuickBook: (doctorId?: string) => void;
  closeQuickBook: () => void;
}

const STORAGE_PREFIX = 'hospitalsee_';

const HospitalContext = createContext<HospitalContextType | undefined>(undefined);

export const HospitalProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Initialize from LocalStorage with safe fallbacks
  const [appointments, setAppointments] = useState<Appointment[]>(() => {
    try {
      const saved = localStorage.getItem(`${STORAGE_PREFIX}appointments`);
      if (saved) return JSON.parse(saved);
    } catch (e) {
      console.warn('Error reading appointments from localStorage', e);
    }
    // Default sample appointment to make the portal feel active
    return [
      {
        id: 'apt-demo-1',
        doctorId: 'dr-rajesh-aggarwal',
        doctorName: 'Dr. Rajesh Aggarwal',
        departmentName: 'Cardiology & Cardiac Sciences',
        consultationFee: 1200,
        date: '2026-10-25',
        timeSlot: '11:00 AM - 11:30 AM',
        patientName: 'Aman Kumar',
        patientAge: 32,
        patientGender: 'Male',
        patientPhone: '+91 98765 43210',
        patientEmail: 'aman22kr@gmail.com',
        symptoms: 'Annual cardiac screening and preventative checkup',
        appointmentType: 'New Consultation',
        status: 'Confirmed',
        createdAt: '2026-10-18T10:30:00Z',
        tokenNumber: 'HSEE-2026-7892'
      }
    ];
  });

  const [bookedPackages, setBookedPackages] = useState<BookedPackage[]>(() => {
    try {
      const saved = localStorage.getItem(`${STORAGE_PREFIX}packages`);
      if (saved) return JSON.parse(saved);
    } catch (e) {
      console.warn('Error reading packages from localStorage', e);
    }
    return [
      {
        id: 'pkg-demo-1',
        packageId: 'comprehensive-cardiac-wellness',
        packageName: 'Advanced Heart Care Profile',
        packagePrice: 3899,
        preferredDate: '2026-10-27',
        patientName: 'Aman Kumar',
        patientPhone: '+91 98765 43210',
        patientEmail: 'aman22kr@gmail.com',
        homeSampleCollection: true,
        address: 'Sector 14, Rohini, New Delhi',
        status: 'Confirmed',
        createdAt: '2026-10-19T08:00:00Z',
        bookingRef: 'HSEE-PKG-9821'
      }
    ];
  });

  const [favoriteDoctors, setFavoriteDoctors] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem(`${STORAGE_PREFIX}fav_doctors`);
      if (saved) return JSON.parse(saved);
    } catch (e) {
      console.warn('Error reading favorite doctors from localStorage', e);
    }
    return ['dr-rajesh-aggarwal', 'dr-vandana-sharma'];
  });

  const [reviews, setReviews] = useState<PatientReview[]>(() => {
    try {
      const saved = localStorage.getItem(`${STORAGE_PREFIX}reviews`);
      if (saved) return JSON.parse(saved);
    } catch (e) {
      console.warn('Error reading reviews from localStorage', e);
    }
    return PATIENT_REVIEWS;
  });

  const [inquiries, setInquiries] = useState<InquiryMessage[]>(() => {
    try {
      const saved = localStorage.getItem(`${STORAGE_PREFIX}inquiries`);
      if (saved) return JSON.parse(saved);
    } catch (e) {
      console.warn('Error reading inquiries from localStorage', e);
    }
    return [];
  });

  const [searchModalOpen, setSearchModalOpen] = useState(false);
  const [emergencyModalOpen, setEmergencyModalOpen] = useState(false);
  const [activeQuickBookDoctorId, setActiveQuickBookDoctorId] = useState<string | null>(null);

  // Sync to LocalStorage on updates
  useEffect(() => {
    try {
      localStorage.setItem(`${STORAGE_PREFIX}appointments`, JSON.stringify(appointments));
    } catch (e) {
      console.error(e);
    }
  }, [appointments]);

  useEffect(() => {
    try {
      localStorage.setItem(`${STORAGE_PREFIX}packages`, JSON.stringify(bookedPackages));
    } catch (e) {
      console.error(e);
    }
  }, [bookedPackages]);

  useEffect(() => {
    try {
      localStorage.setItem(`${STORAGE_PREFIX}fav_doctors`, JSON.stringify(favoriteDoctors));
    } catch (e) {
      console.error(e);
    }
  }, [favoriteDoctors]);

  useEffect(() => {
    try {
      localStorage.setItem(`${STORAGE_PREFIX}reviews`, JSON.stringify(reviews));
    } catch (e) {
      console.error(e);
    }
  }, [reviews]);

  useEffect(() => {
    try {
      localStorage.setItem(`${STORAGE_PREFIX}inquiries`, JSON.stringify(inquiries));
    } catch (e) {
      console.error(e);
    }
  }, [inquiries]);

  // Appointment actions
  const bookAppointment = (aptData: Omit<Appointment, 'id' | 'createdAt' | 'tokenNumber' | 'status'>) => {
    const tokenNumber = `HSEE-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`;
    const newAppointment: Appointment = {
      ...aptData,
      id: `apt-${Date.now()}`,
      status: 'Confirmed',
      createdAt: new Date().toISOString(),
      tokenNumber
    };
    setAppointments(prev => [newAppointment, ...prev]);
    return newAppointment;
  };

  const cancelAppointment = (id: string) => {
    setAppointments(prev =>
      prev.map(apt => (apt.id === id ? { ...apt, status: 'Cancelled' as const } : apt))
    );
  };

  const bookHealthPackage = (pkgData: Omit<BookedPackage, 'id' | 'createdAt' | 'bookingRef' | 'status'>) => {
    const bookingRef = `HSEE-PKG-${Math.floor(1000 + Math.random() * 9000)}`;
    const newPkg: BookedPackage = {
      ...pkgData,
      id: `pkg-${Date.now()}`,
      status: 'Confirmed',
      createdAt: new Date().toISOString(),
      bookingRef
    };
    setBookedPackages(prev => [newPkg, ...prev]);
    return newPkg;
  };

  const toggleFavoriteDoctor = (doctorId: string) => {
    setFavoriteDoctors(prev =>
      prev.includes(doctorId) ? prev.filter(id => id !== doctorId) : [...prev, doctorId]
    );
  };

  const isDoctorFavorite = (doctorId: string) => {
    return favoriteDoctors.includes(doctorId);
  };

  const addReview = (reviewData: Omit<PatientReview, 'id' | 'date' | 'verified'>) => {
    const newReview: PatientReview = {
      ...reviewData,
      id: `rev-${Date.now()}`,
      date: new Date().toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' }),
      verified: true
    };
    setReviews(prev => [newReview, ...prev]);
  };

  const submitInquiry = (inquiryData: Omit<InquiryMessage, 'id' | 'createdAt' | 'status'>) => {
    const newInquiry: InquiryMessage = {
      ...inquiryData,
      id: `inq-${Date.now()}`,
      createdAt: new Date().toISOString(),
      status: 'Submitted'
    };
    setInquiries(prev => [newInquiry, ...prev]);
  };

  const openSearchModal = () => setSearchModalOpen(true);
  const closeSearchModal = () => setSearchModalOpen(false);
  const openEmergencyModal = () => setEmergencyModalOpen(true);
  const closeEmergencyModal = () => setEmergencyModalOpen(false);

  const openQuickBook = (doctorId?: string) => {
    setActiveQuickBookDoctorId(doctorId || null);
  };
  const closeQuickBook = () => {
    setActiveQuickBookDoctorId(null);
  };

  return (
    <HospitalContext.Provider
      value={{
        appointments,
        bookedPackages,
        favoriteDoctors,
        reviews,
        inquiries,
        searchModalOpen,
        emergencyModalOpen,
        activeQuickBookDoctorId,
        bookAppointment,
        cancelAppointment,
        bookHealthPackage,
        toggleFavoriteDoctor,
        isDoctorFavorite,
        addReview,
        submitInquiry,
        openSearchModal,
        closeSearchModal,
        openEmergencyModal,
        closeEmergencyModal,
        openQuickBook,
        closeQuickBook
      }}
    >
      {children}
    </HospitalContext.Provider>
  );
};

export const useHospital = () => {
  const context = useContext(HospitalContext);
  if (!context) {
    throw new Error('useHospital must be used within a HospitalProvider');
  }
  return context;
};
