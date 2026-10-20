export interface Doctor {
  id: string;
  name: string;
  departmentId: string;
  departmentName: string;
  designation: string;
  qualifications: string;
  experienceYears: number;
  image: string;
  opdSchedule: string;
  consultationFee: number;
  languages: string[];
  bio: string;
  specializations: string[];
  rating: number;
  reviewCount: number;
  availableDays: string[];
  roomNumber: string;
}

export interface Department {
  id: string;
  name: string;
  tagline: string;
  category: 'clinical' | 'surgical' | 'diagnostic' | 'critical-care';
  iconName: string;
  image: string;
  shortDescription: string;
  fullDescription: string;
  keyProcedures: string[];
  conditionsTreated: string[];
  technologies: string[];
  opdTimings: string;
  headDoctorId?: string;
}

export interface HealthPackage {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  originalPrice: number;
  discountedPrice: number;
  totalTests: number;
  recommendedFor: string;
  fastingRequired: boolean;
  tatHours: number; // Turnaround time
  testsIncluded: {
    category: string;
    tests: string[];
  }[];
  preparationNotes: string[];
  popular?: boolean;
}

export interface Facility {
  id: string;
  name: string;
  shortName: string;
  tagline: string;
  image: string;
  description: string;
  features: string[];
  available24x7: boolean;
  contactExtension: string;
}

export interface TpaPartner {
  id: string;
  name: string;
  type: 'Insurance Company' | 'Third Party Administrator (TPA)' | 'Government Scheme';
  logoPlaceholder: string;
  turnaroundTime: string;
  coverageDetails: string;
  helpline: string;
}

export interface Appointment {
  id: string;
  doctorId: string;
  doctorName: string;
  departmentName: string;
  consultationFee: number;
  date: string;
  timeSlot: string;
  patientName: string;
  patientAge: number;
  patientGender: 'Male' | 'Female' | 'Other';
  patientPhone: string;
  patientEmail: string;
  symptoms?: string;
  appointmentType: 'New Consultation' | 'Follow Up' | 'Second Opinion';
  status: 'Confirmed' | 'Completed' | 'Cancelled';
  createdAt: string;
  tokenNumber: string;
}

export interface BookedPackage {
  id: string;
  packageId: string;
  packageName: string;
  packagePrice: number;
  preferredDate: string;
  patientName: string;
  patientPhone: string;
  patientEmail: string;
  address?: string;
  homeSampleCollection: boolean;
  status: 'Confirmed' | 'Sample Collected' | 'Report Ready';
  createdAt: string;
  bookingRef: string;
}

export interface PatientReview {
  id: string;
  patientName: string;
  treatment: string;
  doctorName?: string;
  rating: number;
  date: string;
  comment: string;
  verified: boolean;
  location?: string;
}

export interface InquiryMessage {
  id: string;
  name: string;
  email: string;
  phone: string;
  department: string;
  subject: string;
  message: string;
  createdAt: string;
  status: 'Submitted' | 'Reviewed';
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  category: string;
  excerpt: string;
  content: string;
  authorName: string;
  authorRole: string;
  date: string;
  readTime: string;
  image: string;
  tags: string[];
}
