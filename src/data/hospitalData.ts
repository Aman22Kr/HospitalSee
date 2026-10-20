import { Department, Doctor, Facility, HealthPackage, PatientReview, TpaPartner, BlogPost } from '../types';

export const HOSPITAL_INFO = {
  name: 'HospitalSee',
  tagline: 'Centurial Excellence in Healthcare & Patient Compassion',
  address: '67/1, New Rohtak Road, Karol Bagh, New Delhi, Delhi 110005',
  emergencyPhone: '+91 11 4777 4141',
  ambulanceHotline: '+91 98110 54141',
  opdHelpline: '+91 11 4777 4100',
  tollFree: '1800-102-4141',
  email: 'info@hospitalsee.com',
  appointmentEmail: 'appointments@hospitalsee.com',
  tpaHelpdesk: '+91 11 4777 4125',
  hours: 'Open 24 Hours / 7 Days a Week',
  opdHours: 'Mon - Sat: 8:00 AM - 8:00 PM (Sun: 9:00 AM - 1:00 PM)',
  foundedYear: 1920,
  yearsOfExcellence: '100+',
  bedsCount: '120+',
  icuBedsCount: '30+',
  doctorsCount: '45+',
  surgeriesPerformed: '65,000+',
  happyPatients: '750,000+',
  accreditations: [
    { name: 'NABH Accredited', detail: 'National Accreditation Board for Hospitals & Healthcare' },
    { name: 'NABL Certified Lab', detail: 'Automated Pathology & Molecular Testing' },
    { name: 'ISO 9001:2015', detail: 'Quality Healthcare Management System' },
    { name: 'Govt. Empanelled', detail: 'CGHS, ECHS, DGEHS & All Leading TPAs' }
  ]
};

export const DEPARTMENTS: Department[] = [
  {
    id: 'cardiology',
    name: 'Cardiology & Cardiac Sciences',
    tagline: 'Comprehensive Heart Care & Advanced Interventional Cardiology',
    category: 'clinical',
    iconName: 'HeartPulse',
    image: 'https://images.unsplash.com/photo-1628348068343-c6a848d2b6dd?auto=format&fit=crop&w=800&q=80',
    shortDescription: 'Advanced cardiac catheterization, coronary angioplasty, pacemaker implantation, 2D echo, and emergency heart attack management.',
    fullDescription: 'The Department of Cardiology at HospitalSee is equipped with state-of-the-art flat-panel digital catheterization laboratories and cardiac care units (CCU). Led by senior interventional cardiologists, we provide round-the-clock primary angioplasty for acute myocardial infarction (heart attack) with industry-leading door-to-balloon times.',
    keyProcedures: [
      'Coronary Angiography & Angioplasty (PTCA)',
      'Permanent Pacemaker & ICD Implantation',
      '2D/3D Color Doppler Echocardiography',
      'Treadmill Stress Test (TMT) & Holter Monitoring',
      'Heart Failure & Hypertension Clinic',
      'Peripheral Vascular Interventions'
    ],
    conditionsTreated: [
      'Coronary Artery Disease & Angina',
      'Acute Myocardial Infarction',
      'Arrhythmias & Heart Block',
      'Congestive Heart Failure',
      'Valvular Heart Disease'
    ],
    technologies: ['Siemens Artis Flat Panel Cath Lab', 'Philips Affinity 70 Echo Machine', 'Cardiac Telemetry ICU Monitoring'],
    opdTimings: 'Mon - Sat: 9:00 AM - 6:00 PM'
  },
  {
    id: 'orthopaedics',
    name: 'Orthopaedics & Joint Replacement',
    tagline: 'Restoring Mobility with Computer-Navigated Joint Surgeries',
    category: 'surgical',
    iconName: 'Bone',
    image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80',
    shortDescription: 'Total knee and hip replacement, arthroscopic sports injury repair, complex fracture management, and spine surgery.',
    fullDescription: 'Our Orthopaedic Centre of Excellence combines surgical expertise with minimally invasive techniques and rapid-recovery physiotherapy protocols. We specialize in high-flexion total knee replacements, revision arthroplasty, and keyhole shoulder and knee ligament reconstructions.',
    keyProcedures: [
      'Total Knee Replacement (TKR) with Minimally Invasive Protocol',
      'Total Hip Replacement (THR) & Revision Surgeries',
      'Arthroscopic ACL / PCL / Meniscus Repair',
      'Rotator Cuff & Shoulder Arthroscopy',
      'Spine Decompression & Microdiscectomy',
      '24/7 Polytrauma & Fracture Fixation'
    ],
    conditionsTreated: [
      'Severe Osteoarthritis of Knee & Hip',
      'Ligament Tears & Sports Injuries',
      'Cervical & Lumbar Disc Herniation',
      'Complex Fractures & Non-unions',
      'Carpal Tunnel & Frozen Shoulder'
    ],
    technologies: ['Stryker Orthopaedic Navigation System', 'High-Definition Arthroscopy Towers', 'C-Arm Image Intensifiers'],
    opdTimings: 'Mon - Sat: 10:00 AM - 7:00 PM'
  },
  {
    id: 'obstetrics-gynaecology',
    name: 'Obstetrics & Gynaecology',
    tagline: 'Dedicated Women’s Health, Maternity & Laparoscopic Care',
    category: 'surgical',
    iconName: 'Baby',
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=800&q=80',
    shortDescription: 'Painless normal deliveries, high-risk pregnancy care, advanced laparoscopic hysterectomy, and fertility management.',
    fullDescription: 'With a compassionate legacy spanning decades, HospitalSee provides complete obstetrical care from pre-conception counselling to advanced fetal monitoring and postnatal rehabilitation. Our modular labour rooms and level-III NICU guarantee utmost safety for mother and newborn.',
    keyProcedures: [
      'Comprehensive Antenatal & High-Risk Pregnancy Care',
      'Painless Epidural Normal Delivery',
      'Emergency & Elective Lower Segment Caesarean Section (LSCS)',
      'Total Laparoscopic Hysterectomy (TLH)',
      'Fibroid Enucleation (Laparoscopic Myomectomy)',
      'Infertility Workup & Intrauterine Insemination (IUI)'
    ],
    conditionsTreated: [
      'High-Risk Gestational Diabetes & Pre-eclampsia',
      'Uterine Fibroids & Ovarian Cysts',
      'Polycystic Ovarian Syndrome (PCOS)',
      'Endometriosis & Pelvic Pain',
      'Post-menopausal Bleeding & Screening'
    ],
    technologies: ['Advanced CTG Fetal Monitors', 'Karl Storz 4K Laparoscopy System', 'Dedicated Labor Delivery Suites'],
    opdTimings: 'Mon - Sat: 9:00 AM - 8:00 PM'
  },
  {
    id: 'paediatrics-neonatology',
    name: 'Paediatrics & Neonatology',
    tagline: 'Nurturing Healthy Futures with Level-III Neonatal Intensive Care',
    category: 'clinical',
    iconName: 'Stethoscope',
    image: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=800&q=80',
    shortDescription: 'Dedicated child healthcare, newborn intensive care unit (NICU), pediatric emergency, and comprehensive immunization.',
    fullDescription: 'Our team of experienced paediatricians and neonatologists provide gentle, round-the-clock care for premature infants, toddlers, and adolescents. Our Level-III NICU is equipped with advanced warmers, phototherapy, and neonatal ventilators.',
    keyProcedures: [
      'Level-III NICU Care for Preterm & Low Birth Weight Babies',
      'Routine & Optional Pediatric Immunization Schedule',
      'Pediatric Respiratory & Asthma Management',
      'Childhood Growth & Developmental Milestone Assessment',
      'Pediatric Emergency Resuscitation'
    ],
    conditionsTreated: [
      'Neonatal Jaundice & Sepsis',
      'Pediatric Respiratory Distress & Pneumonia',
      'Childhood Allergies & Asthma',
      'Growth Faltering & Malnutrition',
      'Common Febrile Illnesses & Dengue'
    ],
    technologies: ['GE Giraffe Incubators', 'LED Phototherapy Units', 'Neonatal CPAP & High-Frequency Ventilators'],
    opdTimings: 'Mon - Sat: 9:30 AM - 7:30 PM'
  },
  {
    id: 'general-laparoscopic-surgery',
    name: 'General & Laparoscopic Surgery',
    tagline: 'Minimally Invasive Techniques for Faster Healing & Less Pain',
    category: 'surgical',
    iconName: 'Activity',
    image: 'https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=800&q=80',
    shortDescription: 'Keyhole surgeries for gallstones, hernia repair, appendicitis, piles laser surgery, and complex abdominal procedures.',
    fullDescription: 'The surgical team at HospitalSee utilizes state-of-the-art laparoscopic towers to perform complex gastrointestinal and abdominal procedures through tiny incisions. Patients experience minimal blood loss, minimal scarring, and quick return to regular activities.',
    keyProcedures: [
      'Laparoscopic Cholecystectomy (Gallbladder Removal)',
      'Laparoscopic Inguinal & Ventral Hernia Mesh Repair',
      'Laparoscopic Appendectomy',
      'Laser Proctology (Piles, Fistula & Fissure Treatment)',
      'Thyroid & Salivary Gland Surgery',
      'Diabetic Foot Debridement & Limb Salvage'
    ],
    conditionsTreated: [
      'Gallstones & Choledocholithiasis',
      'Abdominal & Groin Hernias',
      'Acute Appendicitis',
      'Anorectal Disorders (Haemorrhoids, Fistula)',
      'Benign & Malignant Soft Tissue Tumours'
    ],
    technologies: ['Olympus 4K Ultra-HD Video Laparoscope', 'Biolitec Diode Laser for Proctology', 'Harmonic Scalpel & LigaSure'],
    opdTimings: 'Mon - Sat: 11:00 AM - 6:00 PM'
  },
  {
    id: 'nephrology-dialysis',
    name: 'Nephrology & Dialysis',
    tagline: '24x7 Modern Dialysis & Kidney Disease Management',
    category: 'clinical',
    iconName: 'Droplets',
    image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=800&q=80',
    shortDescription: 'State-of-the-art dialysis suite with automated reverse osmosis, acute kidney injury management, and chronic renal care.',
    fullDescription: 'HospitalSee operates a dedicated dialysis unit equipped with modern Fresenius haemodialysis machines and an advanced double-pass RO water purification plant. We provide isolated dialysis for sero-positive patients, emergency bedside SLED, and AV fistula surveillance.',
    keyProcedures: [
      '24/7 Haemodialysis with High-Flux Membranes',
      'Slow Low-Efficiency Daily Dialysis (SLED) in ICU',
      'Temporary & Tunneled Permacath Insertion',
      'Arteriovenous (AV) Fistula Creation & Repair',
      'Kidney Biopsy & Glomerulonephritis Workup',
      'Chronic Kidney Disease (CKD) Staging & Retardation'
    ],
    conditionsTreated: [
      'End-Stage Renal Disease (ESRD)',
      'Acute Kidney Injury (AKI)',
      'Diabetic Nephropathy & Hypertensive Renal Disease',
      'Nephrotic Syndrome & Proteinuria',
      'Electrolyte & Acid-Base Imbalances'
    ],
    technologies: ['Fresenius 4008S Dialysis Machines', 'Double RO Water Filtration Plant', 'Continuous Renal Replacement Therapy Ready'],
    opdTimings: 'Mon - Sat: 8:00 AM - 8:00 PM'
  },
  {
    id: 'neurology-neurosurgery',
    name: 'Neurology & Neurosurgery',
    tagline: 'Precision Brain, Spine & Nervous System Therapeutics',
    category: 'clinical',
    iconName: 'Brain',
    image: 'https://images.unsplash.com/photo-1530497610245-94d3c16cda28?auto=format&fit=crop&w=800&q=80',
    shortDescription: 'Rapid stroke thrombolysis protocol, brain tumour resection, spine disc surgery, epilepsy, and neuropathy management.',
    fullDescription: 'Our neurosciences department features high-resolution neuro-imaging, an acute stroke response team, and neuro-ICU care. We manage both medical neurological disorders and critical neurosurgical emergencies around the clock.',
    keyProcedures: [
      'Golden Hour IV Thrombolysis for Ischemic Stroke',
      'Microsurgical Brain Tumour & Aneurysm Surgery',
      'Minimally Invasive Spine Surgery (Spinal Fusion & Discectomy)',
      'Digital Electroencephalogram (EEG) & Nerve Conduction Studies (NCV)',
      'Parkinson’s & Movement Disorder Management',
      'Head Injury & Polytrauma Emergency Care'
    ],
    conditionsTreated: [
      'Acute Ischemic & Haemorrhagic Stroke',
      'Epilepsy & Seizure Disorders',
      'Spinal Disc Prolapse & Sciatica',
      'Migraine, Trigeminal Neuralgia & Headaches',
      'Neuropathy, Myasthenia Gravis & GBS'
    ],
    technologies: ['Zeiss Neuro-Surgical Operating Microscope', 'Cadwell 32-Channel Digital EEG', 'Multi-slice Brain CT Scanner'],
    opdTimings: 'Mon - Sat: 10:00 AM - 5:00 PM'
  },
  {
    id: 'urology-andrology',
    name: 'Urology & Laser Stone Care',
    tagline: 'Advanced Holmium Laser Stone Removal & Prostate Solutions',
    category: 'surgical',
    iconName: 'ShieldAlert',
    image: 'https://images.unsplash.com/photo-1581595220892-b0739db3ba8c?auto=format&fit=crop&w=800&q=80',
    shortDescription: 'No-cut laser kidney stone removal (RIRS / PCNL), prostate TURP, stricture surgery, and male fertility care.',
    fullDescription: 'Our urology department offers minimally invasive laser treatments for urinary stones, enlarged prostate, and urological malignancies. Our high-power Holmium laser allows painless vaporization of stones without open cuts.',
    keyProcedures: [
      'Retrograde Intrarenal Surgery (RIRS) with Flexible Ureteroscope',
      'Percutaneous Nephrolithotomy (Mini-PCNL)',
      'Transurethral Resection of the Prostate (TURP / Laser Enucleation)',
      'Ureteroscopic Stone Removal (URS)',
      'Urethral Stricture Repair (Urethroplasty)',
      'Erectile Dysfunction & Male Factor Infertility Care'
    ],
    conditionsTreated: [
      'Kidney, Ureter & Bladder Stones',
      'Benign Prostatic Hyperplasia (BPH)',
      'Urinary Incontinence & Stricture Disease',
      'Urinary Tract Infections (UTI)',
      'Bladder and Prostate Tumours'
    ],
    technologies: ['Lumenis 100W Holmium Laser', 'Karl Storz Flexible Video Ureteroscope', 'C-Arm Fluoroscopy'],
    opdTimings: 'Mon - Sat: 11:00 AM - 6:00 PM'
  },
  {
    id: 'pulmonology-chest-medicine',
    name: 'Pulmonology & Chest Medicine',
    tagline: 'Comprehensive Respiratory, Sleep Apnea & Critical Chest Care',
    category: 'clinical',
    iconName: 'Wind',
    image: 'https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=800&q=80',
    shortDescription: 'Bronchoscopy, pulmonary function testing (PFT), asthma, COPD, allergy care, and sleep apnea studies.',
    fullDescription: 'Our chest medicine specialists tackle complex lung diseases, post-COVID respiratory complications, and chronic obstructive airway conditions using comprehensive diagnostic tools including spirometry and video bronchoscopy.',
    keyProcedures: [
      'Fiberoptic Video Bronchoscopy with BAL & Biopsy',
      'Computerized Spirometry (Pulmonary Function Test)',
      'Comprehensive Sleep Study (Polysomnography)',
      'Pleural Fluid Aspiration & Intercostal Drainage',
      'Asthma & Allergy Desensitization Clinic',
      'Smoking Cessation & Pulmonary Rehabilitation'
    ],
    conditionsTreated: [
      'Bronchial Asthma & Chronic Bronchitis (COPD)',
      'Pneumonia & Tuberculosis (TB)',
      'Obstructive Sleep Apnea (OSA)',
      'Interstitial Lung Disease (ILD)',
      'Pleural Effusion & Pneumothorax'
    ],
    technologies: ['Schiller Computerized PFT Lab', 'Olympus Flexible Bronchoscope', 'Philips Respironics Sleep Lab'],
    opdTimings: 'Mon - Sat: 10:00 AM - 6:00 PM'
  },
  {
    id: 'ent-head-neck',
    name: 'ENT & Head-Neck Surgery',
    tagline: 'Advanced Microscopic Ear, Endoscopic Sinus & Voice Care',
    category: 'surgical',
    iconName: 'Ear',
    image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80',
    shortDescription: 'Endoscopic sinus surgery (FESS), tympanoplasty, vertigo clinic, voice pathology, and snoring surgery.',
    fullDescription: 'The ENT department offers medical and surgical interventions for ear, nose, throat, head and neck conditions. Our doctors use high-resolution endoscopes and surgical microscopes for precise, delicate procedures.',
    keyProcedures: [
      'Functional Endoscopic Sinus Surgery (FESS)',
      'Microscopic Tympanoplasty & Mastoidectomy',
      'Coblation Tonsillectomy & Adenoidectomy',
      'Microlaryngeal Surgery (MLS) for Vocal Cord Polyps',
      'Pure Tone Audiometry (PTA) & Impedance Testing',
      'Specialized Vertigo & Balance Clinic'
    ],
    conditionsTreated: [
      'Chronic Sinusitis & Nasal Polyps',
      'Eardrum Perforation & Hearing Loss',
      'Deviated Nasal Septum (DNS)',
      'Recurrent Tonsillitis & Snoring',
      'Benign Paroxysmal Positional Vertigo (BPPV)'
    ],
    technologies: ['Leica Surgical ENT Microscope', 'Karl Storz HD Sinus Endoscope', 'Coblation Coblator II System'],
    opdTimings: 'Mon - Sat: 9:00 AM - 5:00 PM'
  },
  {
    id: 'radiology-pathology',
    name: 'Radiology & NABL Diagnostic Lab',
    tagline: 'High-Precision Imaging & 24x7 Automated Laboratory',
    category: 'diagnostic',
    iconName: 'FileSearch',
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80',
    shortDescription: 'Multi-slice CT scanner, digital X-ray, 4D ultrasound, colour Doppler, and 24x7 automated pathology testing.',
    fullDescription: 'Accurate clinical diagnostics form the bedrock of successful medical therapy. HospitalSee houses an advanced multi-slice computed tomography scanner, high-frequency digital radiography, and a fully automated biochemistry and haematology lab.',
    keyProcedures: [
      'Whole Body Multi-slice CT Scans with Contrast',
      '4D Ultrasound & Color Doppler Flow Studies',
      'High-Resolution Digital X-Rays & Barium Studies',
      'Complete Blood Counts (5-Part Cell Counter)',
      'Automated Biochemistry, Liver & Kidney Function Tests',
      'Fine Needle Aspiration Cytology (FNAC) & Histopathology'
    ],
    conditionsTreated: [
      'Acute Abdomen, Trauma & Head Injuries',
      'Infectious Diseases (Typhoid, Dengue, Malaria)',
      'Metabolic & Hormonal Screening (Thyroid, HbA1c)',
      'Vascular Thrombosis & Varicose Veins',
      'Oncological Staging & Biopsies'
    ],
    technologies: ['GE Healthcare Multi-Slice CT Scanner', 'Mindray Resona 7 High-End Ultrasound', 'Roche Cobas Automated Chemistry Analyzer'],
    opdTimings: 'Open 24 Hours / 7 Days a Week'
  },
  {
    id: 'emergency-critical-care',
    name: '24x7 Emergency & Critical Care',
    tagline: 'Round-the-clock Trauma Resuscitation, ICU & ACLS Ambulance',
    category: 'critical-care',
    iconName: 'Ambulance',
    image: 'https://images.unsplash.com/photo-1587745416684-47953f16f02f?auto=format&fit=crop&w=800&q=80',
    shortDescription: 'Dedicated trauma triage, advanced ventilator ICU/CCU, immediate cardiac care, and swift mobile ICU ambulances.',
    fullDescription: 'Our 24x7 Emergency Department is staffed with qualified emergency medicine physicians, intensivists, and trauma nurses ready to intervene in golden-hour emergencies such as road accidents, acute stroke, and cardiac arrests.',
    keyProcedures: [
      'Golden Hour Resuscitation & Multi-trauma Care',
      'Advanced Cardiac Life Support (ACLS / BLS)',
      'Invasive Arterial & Central Venous Line Placement',
      'Mechanical Ventilation & Non-Invasive BiPAP / CPAP',
      'Toxicology & Poisoning Management Protocols',
      'Inter-facility Critical Care Transport'
    ],
    conditionsTreated: [
      'Severe Polytrauma & Head Injury',
      'Septic Shock & Multi-Organ Dysfunction',
      'Acute Respiratory Distress Syndrome (ARDS)',
      'Status Epilepticus & Coma',
      'Cardiac Arrest & Life-Threatening Arrhythmias'
    ],
    technologies: ['Dräger Evita V300 Critical Care Ventilators', 'Zoll Defibrillators with Pacing', 'Point-of-Care Blood Gas (ABG) Analyzers'],
    opdTimings: 'Open 24 Hours / 7 Days a Week'
  }
];

export const DOCTORS: Doctor[] = [
  {
    id: 'dr-rajesh-aggarwal',
    name: 'Dr. Rajesh Aggarwal',
    departmentId: 'cardiology',
    departmentName: 'Cardiology & Cardiac Sciences',
    designation: 'Senior Director & Chief Interventional Cardiologist',
    qualifications: 'MBBS, MD (Medicine), DM (Cardiology), FACC (USA)',
    experienceYears: 24,
    image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=800&q=80',
    opdSchedule: 'Mon, Wed, Fri: 10:00 AM - 2:00 PM',
    consultationFee: 1200,
    languages: ['English', 'Hindi', 'Punjabi'],
    bio: 'Dr. Rajesh Aggarwal is a pioneer in complex coronary angioplasty, transcatheter therapies, and pacemaker implantations with over 15,000 successful interventional procedures performed over 24 years.',
    specializations: ['Primary Angioplasty', 'Complex Bifurcation Stenting', 'Pacemakers & AICD', 'Heart Failure Management'],
    rating: 4.9,
    reviewCount: 342,
    availableDays: ['Monday', 'Wednesday', 'Friday'],
    roomNumber: 'OPD Suite 102'
  },
  {
    id: 'dr-vandana-sharma',
    name: 'Dr. Vandana Sharma',
    departmentId: 'obstetrics-gynaecology',
    departmentName: 'Obstetrics & Gynaecology',
    designation: 'Senior Consultant & Head of Department',
    qualifications: 'MBBS, MS (Obs & Gynae), FICOG, FMAS',
    experienceYears: 21,
    image: 'https://images.unsplash.com/photo-1594824813589-3221fa0cf3e7?auto=format&fit=crop&w=800&q=80',
    opdSchedule: 'Mon to Sat: 10:00 AM - 3:00 PM',
    consultationFee: 1000,
    languages: ['English', 'Hindi'],
    bio: 'With over two decades of experience, Dr. Vandana Sharma has helped deliver over 12,000 healthy babies and specializes in painless normal deliveries, high-risk pregnancies, and laparoscopic myomectomy.',
    specializations: ['High Risk Obstetrics', 'Painless Delivery', 'Laparoscopic Hysterectomy', 'Infertility Management'],
    rating: 4.9,
    reviewCount: 418,
    availableDays: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    roomNumber: 'OPD Suite 201'
  },
  {
    id: 'dr-vikramaditya-malhotra',
    name: 'Dr. Vikramaditya Malhotra',
    departmentId: 'orthopaedics',
    departmentName: 'Orthopaedics & Joint Replacement',
    designation: 'Director - Joint Replacement & Arthroscopy',
    qualifications: 'MBBS, MS (Orthopaedics), M.Ch (Ortho, UK), Fellow AO Trauma (Germany)',
    experienceYears: 22,
    image: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=800&q=80',
    opdSchedule: 'Tue, Thu, Sat: 11:00 AM - 4:00 PM',
    consultationFee: 1200,
    languages: ['English', 'Hindi'],
    bio: 'Renowned for computer-navigated total knee and hip replacements, Dr. Malhotra has restored pain-free mobility to thousands of active adults and athletes with minimal post-operative hospital stay.',
    specializations: ['Total Knee Replacement', 'Hip Arthroplasty', 'Sports Ligament Reconstruction', 'Complex Trauma'],
    rating: 4.8,
    reviewCount: 289,
    availableDays: ['Tuesday', 'Thursday', 'Saturday'],
    roomNumber: 'OPD Suite 108'
  },
  {
    id: 'dr-meenakshi-sundaram',
    name: 'Dr. Meenakshi Sundaram',
    departmentId: 'paediatrics-neonatology',
    departmentName: 'Paediatrics & Neonatology',
    designation: 'Chief Consultant Paediatrician & Neonatologist',
    qualifications: 'MBBS, MD (Paediatrics), DNB, Fellowship Neonatology (IAP)',
    experienceYears: 18,
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=800&q=80',
    opdSchedule: 'Mon to Sat: 9:00 AM - 1:00 PM',
    consultationFee: 900,
    languages: ['English', 'Hindi', 'Tamil'],
    bio: 'A compassionate healer for little ones, Dr. Sundaram oversees the Level-III Neonatal Intensive Care Unit and has extensive expertise in managing critical premature infants and childhood allergies.',
    specializations: ['Neonatal Intensive Care', 'Childhood Asthma', 'Vaccination & Development', 'Pediatric Infectious Diseases'],
    rating: 4.9,
    reviewCount: 312,
    availableDays: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    roomNumber: 'OPD Suite 205'
  },
  {
    id: 'dr-arvind-kejriwal-surgeon',
    name: 'Dr. Arvind K. Saxena',
    departmentId: 'general-laparoscopic-surgery',
    departmentName: 'General & Laparoscopic Surgery',
    designation: 'Senior Consultant & Minimal Access Surgeon',
    qualifications: 'MBBS, MS (General Surgery), FIAGES, FALS (Hernia)',
    experienceYears: 20,
    image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=800&q=80',
    opdSchedule: 'Mon, Wed, Fri: 12:00 PM - 5:00 PM',
    consultationFee: 1000,
    languages: ['English', 'Hindi'],
    bio: 'Dr. Saxena is an authority on laparoscopic abdominal procedures, scarless gallbladder removals, hernia repairs, and advanced laser treatments for haemorrhoids and anal fistulas.',
    specializations: ['Laparoscopic Cholecystectomy', 'Hernioplasty', 'Laser Proctology', 'Thyroid Surgery'],
    rating: 4.8,
    reviewCount: 245,
    availableDays: ['Monday', 'Wednesday', 'Friday'],
    roomNumber: 'OPD Suite 115'
  },
  {
    id: 'dr-sanjay-mittal',
    name: 'Dr. Sanjay Mittal',
    departmentId: 'nephrology-dialysis',
    departmentName: 'Nephrology & Dialysis',
    designation: 'Senior Consultant Nephrologist & Renal Specialist',
    qualifications: 'MBBS, MD (Medicine), DM (Nephrology - AIIMS)',
    experienceYears: 19,
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80',
    opdSchedule: 'Tue, Thu, Sat: 10:00 AM - 3:00 PM',
    consultationFee: 1100,
    languages: ['English', 'Hindi'],
    bio: 'Trained at AIIMS New Delhi, Dr. Mittal leads the dialysis programme and clinical renal medicine unit at HospitalSee, focusing on early intervention to retard kidney disease progression.',
    specializations: ['Chronic Kidney Disease', 'Haemodialysis Protocols', 'Diabetic Nephropathy', 'Hypertension & Renal Failure'],
    rating: 4.8,
    reviewCount: 198,
    availableDays: ['Tuesday', 'Thursday', 'Saturday'],
    roomNumber: 'OPD Suite 112'
  },
  {
    id: 'dr-preeti-singhal',
    name: 'Dr. Preeti Singhal',
    departmentId: 'neurology-neurosurgery',
    departmentName: 'Neurology & Neurosurgery',
    designation: 'Senior Consultant Neurologist',
    qualifications: 'MBBS, MD, DM (Neurology), Member AAN',
    experienceYears: 16,
    image: 'https://images.unsplash.com/photo-1594824813589-3221fa0cf3e7?auto=format&fit=crop&w=800&q=80',
    opdSchedule: 'Mon, Wed, Sat: 11:00 AM - 4:00 PM',
    consultationFee: 1200,
    languages: ['English', 'Hindi'],
    bio: 'Dr. Preeti Singhal has specialized expertise in acute stroke thrombolysis, refractory epilepsy, migraine syndromes, and peripheral neuropathy diagnostics.',
    specializations: ['Acute Stroke Care', 'Epilepsy & Seizures', 'Parkinsonism', 'Headaches & Migraine'],
    rating: 4.9,
    reviewCount: 220,
    availableDays: ['Monday', 'Wednesday', 'Saturday'],
    roomNumber: 'OPD Suite 120'
  },
  {
    id: 'dr-alok-bhargava',
    name: 'Dr. Alok Bhargava',
    departmentId: 'urology-andrology',
    departmentName: 'Urology & Laser Stone Care',
    designation: 'Consultant Urologist & Andrologist',
    qualifications: 'MBBS, MS (Surgery), M.Ch (Urology), USI Fellow',
    experienceYears: 17,
    image: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=800&q=80',
    opdSchedule: 'Mon, Tue, Thu: 2:00 PM - 7:00 PM',
    consultationFee: 1100,
    languages: ['English', 'Hindi'],
    bio: 'Dr. Bhargava is renowned for scarless laser kidney stone surgeries (RIRS), minimally invasive prostate vaporization, and comprehensive treatments for male reproductive wellness.',
    specializations: ['RIRS & Laser Stone Removal', 'TURP Prostate Surgery', 'Stricture Urethra', 'Andrology & Infertility'],
    rating: 4.7,
    reviewCount: 185,
    availableDays: ['Monday', 'Tuesday', 'Thursday'],
    roomNumber: 'OPD Suite 118'
  },
  {
    id: 'dr-amit-verma',
    name: 'Dr. Amit Verma',
    departmentId: 'pulmonology-chest-medicine',
    departmentName: 'Pulmonology & Chest Medicine',
    designation: 'Senior Consultant Pulmonologist & Sleep Specialist',
    qualifications: 'MBBS, MD (Pulmonary Medicine), FCCP (USA), FNCCP',
    experienceYears: 18,
    image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=800&q=80',
    opdSchedule: 'Mon to Fri: 10:00 AM - 2:00 PM',
    consultationFee: 1000,
    languages: ['English', 'Hindi'],
    bio: 'Expert in treating respiratory infections, chronic allergic asthma, obstructive sleep apnea, and managing post-viral pulmonary fibrosis.',
    specializations: ['Bronchoscopy & Biopsy', 'Asthma & COPD Clinic', 'Sleep Apnea Diagnosis', 'Pleural Effusion Treatment'],
    rating: 4.8,
    reviewCount: 176,
    availableDays: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    roomNumber: 'OPD Suite 110'
  },
  {
    id: 'dr-shalini-gupta',
    name: 'Dr. Shalini Gupta',
    departmentId: 'ent-head-neck',
    departmentName: 'ENT & Head-Neck Surgery',
    designation: 'Senior Consultant ENT & Cochlear Surgeon',
    qualifications: 'MBBS, MS (ENT), DNB (Otorhinolaryngology)',
    experienceYears: 15,
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=800&q=80',
    opdSchedule: 'Mon to Sat: 10:00 AM - 2:00 PM',
    consultationFee: 900,
    languages: ['English', 'Hindi'],
    bio: 'Specialist in microscopic ear surgery, endoscopic sinus clearance, vertigo diagnostics, and painless tonsil coblation surgery in children.',
    specializations: ['FESS Sinus Surgery', 'Tympanoplasty', 'Pediatric Coblation', 'Vertigo Assessment'],
    rating: 4.9,
    reviewCount: 231,
    availableDays: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    roomNumber: 'OPD Suite 105'
  },
  {
    id: 'dr-ritu-batra',
    name: 'Dr. Ritu Batra',
    departmentId: 'radiology-pathology',
    departmentName: 'Radiology & NABL Diagnostic Lab',
    designation: 'Director & Chief Radiologist',
    qualifications: 'MBBS, MD (Radiodiagnosis), ICRI Fellow',
    experienceYears: 20,
    image: 'https://images.unsplash.com/photo-1594824813589-3221fa0cf3e7?auto=format&fit=crop&w=800&q=80',
    opdSchedule: 'Mon to Sat: 9:00 AM - 4:00 PM',
    consultationFee: 800,
    languages: ['English', 'Hindi'],
    bio: 'Oversees 24x7 imaging services, whole body CT protocols, fetal ultrasound anomaly screening, and image-guided diagnostic biopsies.',
    specializations: ['Computed Tomography (CT)', '4D Fetal Anomaly Ultrasound', 'Musculoskeletal Doppler', 'Guided Biopsies'],
    rating: 4.9,
    reviewCount: 164,
    availableDays: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    roomNumber: 'Diagnostic Wing Room 1'
  },
  {
    id: 'dr-tariq-mansoor',
    name: 'Dr. Tariq Mansoor',
    departmentId: 'emergency-critical-care',
    departmentName: '24x7 Emergency & Critical Care',
    designation: 'Head of Emergency Medicine & Trauma Services',
    qualifications: 'MBBS, MEM (Emergency Medicine), FACEE, ACLS / ATLS Instructor',
    experienceYears: 14,
    image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=800&q=80',
    opdSchedule: 'Emergency 24x7 Coverage',
    consultationFee: 1000,
    languages: ['English', 'Hindi', 'Urdu'],
    bio: 'Specialist in resuscitation, polytrauma resuscitation, cardiac golden-hour management, and rapid acute emergency triage protocols.',
    specializations: ['Acute Resuscitation', 'Golden Hour Trauma', 'Advanced Airway Management', 'Toxicology Emergency'],
    rating: 4.9,
    reviewCount: 388,
    availableDays: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    roomNumber: 'Emergency Triage Room'
  }
];

export const HEALTH_PACKAGES: HealthPackage[] = [
  {
    id: 'basic-health-checkup',
    title: 'Essential Health Screen',
    subtitle: 'Foundation Preventive Health Profile for All Age Groups',
    category: 'Preventive',
    originalPrice: 2200,
    discountedPrice: 1299,
    totalTests: 38,
    recommendedFor: 'Men & Women aged 18+ for yearly routine screening',
    fastingRequired: true,
    tatHours: 12,
    popular: false,
    testsIncluded: [
      {
        category: 'Haematology (CBC - 16 Parameters)',
        tests: ['Hemoglobin', 'TLC', 'DLC (5 Parts)', 'Platelet Count', 'PCV', 'MCV, MCH, MCHC', 'ESR']
      },
      {
        category: 'Diabetic Screen',
        tests: ['Fasting Blood Sugar (FBS)', 'Urine Routine & Microscopic (12 Parameters)']
      },
      {
        category: 'Kidney Function Test (KFT)',
        tests: ['Blood Urea Nitrogen', 'Serum Creatinine', 'Serum Uric Acid']
      },
      {
        category: 'Lipid Profile Screen',
        tests: ['Total Cholesterol', 'Serum Triglycerides', 'HDL Cholesterol']
      },
      {
        category: 'Consultation & Review',
        tests: ['Physician Consultation & BMI Assessment', 'Blood Pressure & Vitals Record']
      }
    ],
    preparationNotes: ['10-12 hours overnight fasting required. Plain water can be consumed. Avoid heavy meals the previous night.']
  },
  {
    id: 'comprehensive-cardiac-wellness',
    title: 'Advanced Heart Care Profile',
    subtitle: 'Extensive Cardiac Risk Stratification & Screening',
    category: 'Cardiac',
    originalPrice: 6500,
    discountedPrice: 3899,
    totalTests: 52,
    recommendedFor: 'Individuals above 35, high stress, hypertension, or family history of heart disease',
    fastingRequired: true,
    tatHours: 24,
    popular: true,
    testsIncluded: [
      {
        category: 'Advanced Cardiac Diagnostics',
        tests: ['12-Lead Electrocardiogram (ECG)', 'Treadmill Stress Test (TMT) / Stress Echo', '2D Color Doppler Echocardiography', 'Chest X-Ray Digital']
      },
      {
        category: 'Full Lipid Profile',
        tests: ['Total Cholesterol', 'HDL', 'LDL Direct', 'VLDL', 'Serum Triglycerides', 'Atherogenic Index']
      },
      {
        category: 'Inflammatory & Metabolic Markers',
        tests: ['High-Sensitivity CRP (hs-CRP)', 'HbA1c (Glycosylated Hemoglobin)', 'Fasting Blood Sugar']
      },
      {
        category: 'Renal & Liver Profile',
        tests: ['Serum Creatinine', 'Blood Urea', 'Uric Acid', 'Serum Electrolytes (Na/K/Cl)', 'SGOT, SGPT']
      },
      {
        category: 'Specialist Evaluation',
        tests: ['Consultation with Senior Cardiologist', 'Diet & Lifestyle Modification Plan']
      }
    ],
    preparationNotes: ['Fasting of 10-12 hours required. Wear comfortable clothing and walking shoes for treadmill test.']
  },
  {
    id: 'executive-whole-body-checkup',
    title: 'Executive Master Health Package',
    subtitle: 'Comprehensive Whole Body Assessment with Full Ultrasound & Diagnostics',
    category: 'Full Body',
    originalPrice: 8500,
    discountedPrice: 4999,
    totalTests: 68,
    recommendedFor: 'Corporate executives and adults aged 30-65 wanting a thorough annual health check',
    fastingRequired: true,
    tatHours: 24,
    popular: true,
    testsIncluded: [
      {
        category: 'Diagnostic Radiology & Imaging',
        tests: ['Whole Abdomen & Pelvis Ultrasound (USG)', 'Digital Chest X-Ray (PA View)', '12-Lead Resting ECG']
      },
      {
        category: 'Comprehensive Blood Work (60+ Parameters)',
        tests: ['Complete Hemogram (CBC + ESR)', 'Full Lipid Profile', 'Liver Function Tests (LFT - 11 Parameters)', 'Kidney Function Tests (KFT - 7 Parameters)', 'HbA1c & Fasting Glucose', 'Thyroid Profile (TSH)']
      },
      {
        category: 'Vitamins & Bone Health',
        tests: ['Vitamin D3 Level', 'Vitamin B12 Level', 'Serum Calcium & Phosphorus']
      },
      {
        category: 'Consultations',
        tests: ['Senior Physician Comprehensive Check', 'Eye & Vision Evaluation', 'Dentist Checkup']
      }
    ],
    preparationNotes: ['12 hours fasting required. Drink plenty of water before ultrasound to ensure a full bladder.']
  },
  {
    id: 'womens-wellness-cancer-screen',
    title: 'Women’s Complete Wellness & Cancer Screen',
    subtitle: 'Tailored for Women’s Hormonal, Reproductive & Bone Health',
    category: 'Women Health',
    originalPrice: 7200,
    discountedPrice: 4299,
    totalTests: 48,
    recommendedFor: 'Women aged 25+ for breast, cervical, bone and hormonal screening',
    fastingRequired: true,
    tatHours: 24,
    popular: false,
    testsIncluded: [
      {
        category: 'Women Specific Oncology & Diagnostics',
        tests: ['Pelvic & Abdominal Ultrasound', 'Pap Smear Cervical Cytology', 'Clinical Breast Examination & Ultrasound Breast', 'Digital Chest X-Ray']
      },
      {
        category: 'Hormonal & Thyroid Profile',
        tests: ['TSH (Thyroid Stimulating Hormone)', 'Serum Prolactin', 'Complete Blood Count (Anemia Screen)', 'Urine Routine']
      },
      {
        category: 'Metabolic & Bone Wellness',
        tests: ['Fasting Glucose', 'Lipid Profile', 'Serum Calcium', 'Vitamin D3 Level']
      },
      {
        category: 'Consultations',
        tests: ['Senior Gynaecologist Consultation', 'Nutritional Counselling']
      }
    ],
    preparationNotes: ['Fasting for 10 hours required. Best scheduled midway through the menstrual cycle (avoid during menstruation).']
  },
  {
    id: 'senior-citizen-comprehensive-care',
    title: 'Senior Citizen Active Life Package',
    subtitle: 'Holistic Geriatric Evaluation for Healthy Ageing',
    category: 'Senior Citizen',
    originalPrice: 6800,
    discountedPrice: 3999,
    totalTests: 56,
    recommendedFor: 'Seniors aged 60+ to detect age-related cardiovascular, renal, and joint issues',
    fastingRequired: true,
    tatHours: 24,
    popular: false,
    testsIncluded: [
      {
        category: 'Geriatric Imaging & Vitals',
        tests: ['Ultrasound Whole Abdomen (including Prostate for men)', 'Digital Chest X-Ray', '12-Lead ECG']
      },
      {
        category: 'Organ Function Diagnostics',
        tests: ['Complete Hemogram', 'HbA1c & Fasting Sugar', 'Kidney Function (Creatinine, Urea, Uric Acid)', 'Liver Profile (Bilirubin, Enzymes)', 'Lipid Profile', 'Serum Electrolytes (Na/K)']
      },
      {
        category: 'Special Markers',
        tests: ['PSA (Prostate Specific Antigen for men)', 'Serum Calcium & Vitamin D3', 'Urine Microalbuminuria']
      },
      {
        category: 'Consultations',
        tests: ['Consultation with Senior Geriatric Physician', 'Orthopaedic Joint Assessment', 'Complimentary Breakfast at Hospital Cafeteria']
      }
    ],
    preparationNotes: ['10-12 hours fasting. Bring existing medication list. Wheelchair assistance provided upon request.']
  }
];

export const FACILITIES: Facility[] = [
  {
    id: 'emergency-trauma',
    name: '24x7 Emergency & Trauma Centre',
    shortName: 'Emergency',
    tagline: 'Instant Triaging, Golden-Hour Resuscitation & Round-the-Clock Critical Care',
    image: 'https://images.unsplash.com/photo-1587745416684-47953f16f02f?auto=format&fit=crop&w=800&q=80',
    description: 'Our emergency wing is engineered for zero-delay response. Fully equipped with dedicated resuscitation bays, defibrillators, crash carts, mobile X-ray, and staffed by ACLS-certified emergency medicine physicians.',
    features: ['Zero waiting triage protocol', 'Dedicated Minor OT for emergency suturing', 'Immediate access to CT scan & Cath Lab', 'Central oxygen and multi-para monitors on every bed'],
    available24x7: true,
    contactExtension: 'Ext. 101'
  },
  {
    id: 'critical-care-icu',
    name: 'Advanced Intensive Care Units (ICU / CCU / NICU)',
    shortName: 'ICU / CCU',
    tagline: '30+ State-of-the-Art Critical Care Beds with 1:1 Nursing Care',
    image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=800&q=80',
    description: 'Equipped with invasive and non-invasive ventilators, continuous hemodynamic monitoring, isolation cubicles with HEPA filtration, and bedside dialysis capabilities. Supervised 24 hours a day by dedicated intensivists.',
    features: ['1:1 Patient-to-Nurse ratio in critical phases', 'Dräger advanced ICU ventilators', 'Bedside Arterial Blood Gas (ABG) analysis', 'Dedicated Level-III Neonatal ICU for premature infants'],
    available24x7: true,
    contactExtension: 'Ext. 202'
  },
  {
    id: 'modular-operation-theatres',
    name: 'Modular Operation Theatres',
    shortName: 'Modular OT',
    tagline: 'Ultra-Clean Laminar Airflow & Modern Surgical Infrastructure',
    image: 'https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=800&q=80',
    description: 'Our surgical suites are built with seamless anti-microbial wall cladding, positive pressure laminar air flow with HEPA filters, and LED surgical illumination to maintain near-zero surgical infection rates.',
    features: ['Laminar air flow with HEPA grade filtration', 'Integrated 4K endoscopic and laparoscopic towers', 'High-definition C-Arm fluoroscopic imaging', 'Dedicated post-anesthesia recovery unit (PACU)'],
    available24x7: true,
    contactExtension: 'Ext. 303'
  },
  {
    id: 'dialysis-centre',
    name: '24x7 Haemodialysis Centre',
    shortName: 'Dialysis Unit',
    tagline: 'Safe, Infection-Controlled Renal Replacement Therapy',
    image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80',
    description: 'Featuring high-flux dialyzers and computerized Fresenius machines, our dialysis unit offers comfortable reclining chairs, entertainment displays, and separate isolated machines for seropositive patients.',
    features: ['Double-pass RO water purification system', 'Emergency night-shift dialysis available', 'Comfortable recliner stations with TV', 'Managed under supervising nephrologists'],
    available24x7: true,
    contactExtension: 'Ext. 115'
  },
  {
    id: 'nabl-pathology-lab',
    name: 'Fully Automated NABL Pathology Laboratory',
    shortName: 'Pathology Lab',
    tagline: 'Precise, High-Speed Biochemical & Molecular Diagnostics',
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80',
    description: 'Our in-house clinical pathology department processes biochemical, haematological, microbiological, and histopathological tests with automated barcode tracking and rapid digital reporting.',
    features: ['Fully automated chemistry & immunoassay analyzers', 'Rapid stat reporting for ICU and emergency', 'Barcoded sample tracking with zero error rate', 'Home sample collection service within 15 km'],
    available24x7: true,
    contactExtension: 'Ext. 104'
  },
  {
    id: 'radiology-imaging',
    name: 'Advanced Radiology & Imaging Wing',
    shortName: 'Radiology',
    tagline: 'Multi-slice CT, High-Resolution Ultrasound & Digital X-Ray',
    image: 'https://images.unsplash.com/photo-1628348068343-c6a848d2b6dd?auto=format&fit=crop&w=800&q=80',
    description: 'Equipped with cutting-edge multi-slice computed tomography, high-frequency digital radiography, 4D ultrasound, and echocardiography with immediate digital PACS distribution to consulting doctors.',
    features: ['Whole-body low radiation multi-slice CT', 'High-frequency digital radiography (X-Ray)', '4D Color Doppler ultrasound', 'Instant electronic reporting to patient portal'],
    available24x7: true,
    contactExtension: 'Ext. 106'
  },
  {
    id: 'inhouse-pharmacy',
    name: '24x7 In-House Hospital Pharmacy',
    shortName: 'Pharmacy',
    tagline: '100% Genuine Certified Medicines, Surgical Consumables & Vaccines',
    image: 'https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=800&q=80',
    description: 'Stocked with life-saving emergency drugs, oncology medicines, vaccines, orthopaedic braces, and daily prescriptions. Temperature-controlled storage ensures complete pharmacological efficacy.',
    features: ['24-hour round-the-clock dispensing counter', 'Cold-chain vaccine preservation', 'Computerized inventory and billing', 'Home medicine delivery for registered patients'],
    available24x7: true,
    contactExtension: 'Ext. 108'
  },
  {
    id: 'ambulance-fleet',
    name: 'ACLS & BLS Ambulance Services',
    shortName: 'Ambulance',
    tagline: 'Mobile Intensive Care with Ventilator & Defibrillator On-Board',
    image: 'https://images.unsplash.com/photo-1587745416684-47953f16f02f?auto=format&fit=crop&w=800&q=80',
    description: 'Our fleet of Advanced Cardiac Life Support (ACLS) ambulances are equipped with transport ventilators, multi-channel monitors, defibrillators, oxygen cylinders, and accompanied by trained paramedics.',
    features: ['GPS tracking with real-time ETA updates', 'Transport ventilator and suction units', 'Trained emergency medical technicians (EMTs)', 'Dedicated hotline: +91 98110 54141'],
    available24x7: true,
    contactExtension: 'Ext. 100'
  }
];

export const TPA_PARTNERS: TpaPartner[] = [
  {
    id: 'star-health',
    name: 'Star Health & Allied Insurance',
    type: 'Insurance Company',
    logoPlaceholder: 'STAR',
    turnaroundTime: 'Under 2 Hours',
    coverageDetails: 'Cashless hospitalisation across all departments. Pre-authorization desk handles complete documentation.',
    helpline: '1800-425-2255'
  },
  {
    id: 'cghs',
    name: 'Central Government Health Scheme (CGHS)',
    type: 'Government Scheme',
    logoPlaceholder: 'CGHS',
    turnaroundTime: 'Same Day Pre-Auth',
    coverageDetails: 'Empanelled for OPD, IPD, and surgical procedures for serving & retired central government employees.',
    helpline: '1800-208-8900'
  },
  {
    id: 'echs',
    name: 'Ex-Servicemen Contributory Health Scheme (ECHS)',
    type: 'Government Scheme',
    logoPlaceholder: 'ECHS',
    turnaroundTime: 'Immediate Admission',
    coverageDetails: 'Full cashless treatment coverage for armed forces veterans and dependents upon referral letter.',
    helpline: '1800-114-115'
  },
  {
    id: 'hdfc-ergo',
    name: 'HDFC ERGO General Insurance',
    type: 'Insurance Company',
    logoPlaceholder: 'HDFC',
    turnaroundTime: 'Under 1 Hour',
    coverageDetails: 'Seamless digital cashless approvals with my:health Suraksha and Optima Restore policies.',
    helpline: '1800-2666'
  },
  {
    id: 'icici-lombard',
    name: 'ICICI Lombard General Insurance',
    type: 'Insurance Company',
    logoPlaceholder: 'ICICI',
    turnaroundTime: 'Under 2 Hours',
    coverageDetails: 'Direct cashless access for corporate and retail policyholders with minimal co-pay queries.',
    helpline: '1800-2666'
  },
  {
    id: 'care-health',
    name: 'Care Health Insurance (Religare)',
    type: 'Insurance Company',
    logoPlaceholder: 'CARE',
    turnaroundTime: 'Under 2 Hours',
    coverageDetails: 'Covers day-care procedures, surgical hospitalisation, and critical illness treatments.',
    helpline: '1800-102-4455'
  },
  {
    id: 'niva-bupa',
    name: 'Niva Bupa Health Insurance (Max Bupa)',
    type: 'Insurance Company',
    logoPlaceholder: 'NIVA',
    turnaroundTime: 'Under 2 Hours',
    coverageDetails: 'Express pre-authorization for ReAssure and Health Companion policy holders.',
    helpline: '1860-500-8888'
  },
  {
    id: 'medi-assist',
    name: 'Medi Assist TPA',
    type: 'Third Party Administrator (TPA)',
    logoPlaceholder: 'MEDI',
    turnaroundTime: 'Fast Track 90 Mins',
    coverageDetails: 'Servicing major corporate and retail insurance claims with dedicated on-site desk.',
    helpline: '1800-425-9449'
  },
  {
    id: 'paramount-tpa',
    name: 'Paramount Health Services & Insurance TPA',
    type: 'Third Party Administrator (TPA)',
    logoPlaceholder: 'PARAM',
    turnaroundTime: 'Under 2 Hours',
    coverageDetails: 'Comprehensive coverage for leading public sector and private insurance firms.',
    helpline: '022-6662-0808'
  },
  {
    id: 'md-india',
    name: 'MDIndia Health Insurance TPA',
    type: 'Third Party Administrator (TPA)',
    logoPlaceholder: 'MDI',
    turnaroundTime: 'Under 3 Hours',
    coverageDetails: 'Extensive empanelment covering National Insurance, New India Assurance, United India and Oriental.',
    helpline: '1800-233-1166'
  },
  {
    id: 'vidal-health',
    name: 'Vidal Health TPA (TTK Healthcare)',
    type: 'Third Party Administrator (TPA)',
    logoPlaceholder: 'VIDAL',
    turnaroundTime: 'Under 2 Hours',
    coverageDetails: 'Cashless hospitalisation facilitator for leading corporate employee health programs.',
    helpline: '1800-425-8885'
  },
  {
    id: 'heritage-tpa',
    name: 'Heritage Health TPA',
    type: 'Third Party Administrator (TPA)',
    logoPlaceholder: 'HERIT',
    turnaroundTime: 'Under 3 Hours',
    coverageDetails: 'Smooth claims processing for retail families and senior citizen mediclaim cards.',
    helpline: '033-4014-1400'
  },
  {
    id: 'dgehs',
    name: 'Delhi Government Employees Health Scheme (DGEHS)',
    type: 'Government Scheme',
    logoPlaceholder: 'DGEHS',
    turnaroundTime: 'Same Day Pre-Auth',
    coverageDetails: 'Empanelled for OPD consultations, diagnostic investigations, and surgical treatments.',
    helpline: '011-2381-3838'
  },
  {
    id: 'bajaj-allianz',
    name: 'Bajaj Allianz General Insurance',
    type: 'Insurance Company',
    logoPlaceholder: 'BAJAJ',
    turnaroundTime: 'Under 2 Hours',
    coverageDetails: 'Health Guard and Silver Health cashless hospitalization supported with zero hassle.',
    helpline: '1800-209-5858'
  }
];

export const PATIENT_REVIEWS: PatientReview[] = [
  {
    id: 'rev-1',
    patientName: 'Kavita Chawla',
    treatment: 'Total Knee Replacement Surgery',
    doctorName: 'Dr. Vikramaditya Malhotra',
    rating: 5,
    date: '14 Oct 2026',
    comment: 'My mother was suffering from severe knee pain for over 5 years. Dr. Malhotra and the orthopaedic team at HospitalSee performed a bilateral knee replacement. Within two days, she was walking with support. The nursing staff and physiotherapy team are polite and attentive. Cashless approval via Star Health was completed in just 90 minutes!',
    verified: true,
    location: 'Karol Bagh, New Delhi'
  },
  {
    id: 'rev-2',
    patientName: 'Sunil Mathur',
    treatment: 'Emergency Primary Angioplasty (Heart Attack)',
    doctorName: 'Dr. Rajesh Aggarwal',
    rating: 5,
    date: '28 Sep 2026',
    comment: 'HospitalSee saved my life! I experienced acute chest pain at 2 AM. The ambulance arrived in 12 minutes with emergency oxygen. Dr. Rajesh Aggarwal rushed to the cath lab, and an angioplasty stent was placed within 40 minutes of arrival. Clean ICU, world-class equipment, and human touch.',
    verified: true,
    location: 'Rajendra Nagar, New Delhi'
  },
  {
    id: 'rev-3',
    patientName: 'Priyanka & Ankit Verma',
    treatment: 'Normal Delivery & Newborn Care',
    doctorName: 'Dr. Vandana Sharma',
    rating: 5,
    date: '02 Oct 2026',
    comment: 'We welcomed our baby girl at HospitalSee under Dr. Vandana Sharma. The labour room is private, modern, and hygienic. Dr. Vandana provided immense emotional reassurance throughout labor. Dr. Sundaram in the neonatal unit did a thorough checkup. Grateful to the whole team!',
    verified: true,
    location: 'Patel Nagar, New Delhi'
  },
  {
    id: 'rev-4',
    patientName: 'Harcharan Singh',
    treatment: 'Kidney Stone Laser Surgery (RIRS)',
    doctorName: 'Dr. Alok Bhargava',
    rating: 5,
    date: '19 Aug 2026',
    comment: 'Had a 14mm kidney stone that caused severe colic. Dr. Bhargava used holmium laser to powder the stone without any cuts. Discharged the next morning. CGHS cashless process went smoothly without running around.',
    verified: true,
    location: 'Pusa Road, New Delhi'
  },
  {
    id: 'rev-5',
    patientName: 'Suman Lata Gupta',
    treatment: 'Haemodialysis Unit Regular Care',
    doctorName: 'Dr. Sanjay Mittal',
    rating: 5,
    date: '11 Sep 2026',
    comment: 'My father undergoes dialysis twice a week at HospitalSee. The technicians are gentle, machines are modern, and infection control is strictly maintained. Dr. Sanjay Mittal personally reviews his reports every week.',
    verified: true,
    location: 'West Patel Nagar, New Delhi'
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'understanding-cardiac-warning-signs',
    title: 'Recognizing Silent Heart Attack Signs: Why Every Minute Counts',
    slug: 'recognizing-silent-heart-attack-signs',
    category: 'Cardiology',
    excerpt: 'Not all heart attacks begin with dramatic chest pain. Discover the atypical symptoms, golden-hour window, and preventive screenings everyone over 35 needs to know.',
    content: 'Chest discomfort remains the classic sign of coronary ischemia, but in up to 30% of patients—especially women, seniors, and individuals with diabetes—symptoms may manifest as unexplained jaw pain, cold sweats, sudden nausea, or persistent back fatigue. Seeking prompt medical attention at a facility equipped with 24x7 Cath Lab and cardiac triage ensures timely thrombolysis or primary angioplasty.',
    authorName: 'Dr. Rajesh Aggarwal',
    authorRole: 'Senior Director - Interventional Cardiology',
    date: '12 Oct 2026',
    readTime: '4 min read',
    image: 'https://images.unsplash.com/photo-1628348068343-c6a848d2b6dd?auto=format&fit=crop&w=800&q=80',
    tags: ['Heart Care', 'Emergency', 'Cardiology', 'Wellness']
  },
  {
    id: 'advancements-knee-replacement-recovery',
    title: 'Modern Knee Replacement: Walk on Day 1 with Minimally Invasive Surgery',
    slug: 'modern-knee-replacement-day-1-walk',
    category: 'Orthopaedics',
    excerpt: 'How computer-navigated alignment and muscle-sparing approaches have transformed joint replacements from a prolonged ordeal into a rapid recovery journey.',
    content: 'Gone are the days when joint replacement meant weeks in bed. With high-precision bone resection, muscle-sparing subvastus approaches, and modern multimodal analgesia, patients at HospitalSee stand and walk with a walker on the same day as surgery. This dramatically reduces deep vein thrombosis risk and speeds rehabilitation.',
    authorName: 'Dr. Vikramaditya Malhotra',
    authorRole: 'Director - Joint Replacement',
    date: '04 Oct 2026',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80',
    tags: ['Orthopaedics', 'Joint Health', 'Surgery', 'Mobility']
  },
  {
    id: 'prenatal-care-checklist-for-expecting-mothers',
    title: 'The Essential Trimester-by-Trimester Guide for Expecting Parents',
    slug: 'prenatal-care-checklist-expecting-mothers',
    category: 'Obstetrics',
    excerpt: 'Key diagnostic milestones, anomaly scans, gestational diabetes tests, and nutrition essentials for a safe and joyful pregnancy.',
    content: 'A healthy pregnancy starts with structured antenatal consultations. From early viability ultrasound to double marker testing, the 20-week target anomaly scan, and oral glucose tolerance testing, regular checkups protect both mother and developing baby. HospitalSee offers complete birthing classes and round-the-clock emergency obstetric care.',
    authorName: 'Dr. Vandana Sharma',
    authorRole: 'Head of Obstetrics & Gynaecology',
    date: '22 Sep 2026',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=800&q=80',
    tags: ['Maternity', 'Women Health', 'Pregnancy', 'Pediatrics']
  }
];

export const FAQS = [
  {
    question: 'How do I book an OPD consultation at HospitalSee?',
    answer: 'You can book an appointment directly through our online booking portal by selecting your preferred doctor and time slot, or by calling our OPD Helpline at +91 11 4777 4100. Walk-in registrations are also available at the ground floor registration desk.',
    category: 'Appointments'
  },
  {
    question: 'How does the Cashless TPA / Mediclaim process work?',
    answer: 'Bring your health insurance card, government ID proof (Aadhaar/PAN), and doctor’s admission advice note to our 24x7 TPA Helpdesk on the Ground Floor. Our team will submit the pre-authorization request directly to your insurance company or TPA and track it until approval.',
    category: 'Insurance'
  },
  {
    question: 'What are the visiting hours for admitted patients?',
    answer: 'To ensure restful patient recovery and infection control, visiting hours are: Morning: 10:00 AM to 11:30 AM | Evening: 5:00 PM to 7:00 PM. In the ICU/CCU, only one designated attendant is permitted for 15 minutes during visiting hours.',
    category: 'Hospital Stay'
  },
  {
    question: 'Is the Emergency Department open 24/7?',
    answer: 'Yes, our Emergency and Trauma Centre operates 24 hours a day, 365 days a year. We have an on-duty team of emergency physicians, anaesthesiologists, trauma nurses, and 24x7 operation theatre, CT scan, and blood storage support.',
    category: 'Emergency'
  },
  {
    question: 'Does HospitalSee offer home sample collection for diagnostic tests?',
    answer: 'Yes! Our NABL certified pathology laboratory provides trained phlebotomists for doorstep blood and urine sample collection across New Delhi. You can request home collection when booking a Health Checkup package or by calling Ext. 104.',
    category: 'Diagnostics'
  },
  {
    question: 'Which government health schemes are empanelled at HospitalSee?',
    answer: 'HospitalSee is proudly empanelled with the Central Government Health Scheme (CGHS), Ex-Servicemen Contributory Health Scheme (ECHS), Delhi Government Employees Health Scheme (DGEHS), Delhi Police, and all major public & private health insurance networks.',
    category: 'Insurance'
  }
];
