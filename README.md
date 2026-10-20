# HospitalSee — Premier Multi-Speciality Hospital & Research Centre

> **Re-engineered from**: [Jeewan Mala Hospital](https://jeewanmalahospital.com/)  
> **Brand Name**: **HospitalSee**  
> **GitHub Username**: [Aman22kr](https://github.com/Aman22kr)  
> **Deployment Target**: GitHub Pages (Static deployment via GitHub Actions & `gh-pages`)

---

## 🏥 Overview

**HospitalSee** is a high-fidelity, responsive multi-page web application replicating the comprehensive clinical services, patient resources, and legacy of Jeewan Mala Hospital (established in 1920 in New Delhi, India). 

The platform features modern hospital branding, 24x7 emergency and trauma care workflows, multi-speciality clinical departments, specialist doctor directories, preventive health checkup packages, interactive cashless insurance TPA lookup, and persistent client-side appointment scheduling.

---

## 🚀 Key Features & Pages

- **Centurial Legacy & NABH Standards**:
  - Highlights over 100 years of clinical care, modular laminar operation theatres, 120+ beds, and NABH/NABL accreditations.
- **Multi-Page Architecture**:
  - **Home Page** (`/`): Emergency ribbon, instant appointment widget, clinical centres, doctor showcases, patient testimonials, and health articles.
  - **About Us** (`/about`): Centurial milestone timeline (1920 to Present), hospital leadership, vision, mission, and clinical values.
  - **Specialities & Departments** (`/departments`): Filterable directory of 12+ clinical, surgical, diagnostic, and critical care departments.
  - **Department Detail Pages** (`/departments/:id`): In-depth procedure lists, conditions managed, diagnostic equipment, and faculty doctors.
  - **Find a Doctor** (`/doctors`): Searchable specialist directory with filters by department, day of week, languages, and OPD schedules.
  - **Doctor Detail Profiles** (`/doctors/:id`): Academic qualifications, fellowships, consultation fees, and instant booking modal.
  - **Facilities & Inpatient Care** (`/facilities`): Modular OTs, 24x7 dialysis suite, ICU/NICU, in-house pharmacy, NABL laboratory, and patient room categories.
  - **Preventive Health Packages** (`/health-packages`): 5 customized master checkup profiles with full test breakdowns and home sample collection booking.
  - **Cashless TPA & Insurance** (`/cashless-tpa`): Interactive insurer search tool covering CGHS, ECHS, DGEHS, and 25+ major TPAs (Star Health, HDFC ERGO, ICICI Lombard, Care Health, Medi Assist, etc.).
  - **Patient Guide & Charter** (`/patient-guide`): Visiting hours, admission/discharge flows, international patient desk, and NABH Patient Rights.
  - **Online OPD Booking** (`/appointments`): Multi-step consultation scheduler generating a unique Token Pass with printable slip.
  - **My Bookings / Patient Portal** (`/my-appointments`): Client-side localStorage persistence for booked appointments, diagnostic packages, and bookmarked doctors.
  - **Contact & Emergency** (`/contact`): 24x7 helplines, location map, and interactive inquiry form.
  - **Health Blog & FAQs** (`/blog-faq`): Doctor-authored articles and categorized interactive FAQ accordion.
  - **404 Not Found** (`*`): Graceful error handling with quick navigation recovery.
- **Specific Client Requirements**:
  - **YouTube Video Placeholder**: As requested, in areas where YouTube video links or thumbnails would normally appear, a clean blank square container is displayed.
  - **Bottom Page Ad Banner**: Every page includes a dedicated health and wellness sponsored ad bar with multiple rotating promotions and dismiss/restore controls.
  - **Animation Settings**: NORMAL speed with STRONG, responsive transitions and respect for `prefers-reduced-motion`.

---

## 🛠️ Technology Stack

| Technology | Purpose |
| :--- | :--- |
| **Vite 8** | Modern build tool and development server |
| **React 19** | Component-based reactive UI |
| **Tailwind CSS v4** | Clean, responsive healthcare design system |
| **React Router 7 (`HashRouter`)** | Client-side routing with foolproof GitHub Pages static refresh support |
| **Lucide React** | Medical and interface icons |
| **Browser `localStorage`** | Persistent client-side data (appointments, packages, bookmarks, inquiries) |

---

## 📦 Local Setup & Development

### 1. Clone the repository
```bash
git clone https://github.com/Aman22kr/hospital-see.git
cd hospital-see
```

### 2. Install dependencies
```bash
npm install
```

### 3. Run the development server
```bash
npm run dev
```
Open `http://localhost:3000` to preview the application locally.

### 4. Build for production
```bash
npm run build
```

---

## 🌐 GitHub Pages Deployment

The application is fully configured for static deployment to GitHub Pages.

### Method A: Automated Deployment via GitHub Actions (Recommended)
This repository includes a pre-configured GitHub Actions workflow located at `.github/workflows/deploy.yml`.

1. Push your repository to GitHub under username `Aman22kr`:
   ```bash
   git add .
   git commit -m "feat: complete HospitalSee multi-page healthcare application"
   git branch -M main
   git remote add origin https://github.com/Aman22kr/hospital-see.git
   git push -u origin main
   ```
2. In your GitHub repository settings:
   - Navigate to **Settings** > **Pages**.
   - Under **Build and deployment** > **Source**, choose **GitHub Actions**.
3. Every commit pushed to `main` will automatically build and publish to:
   ```
   https://Aman22kr.github.io/hospital-see/
   ```

### Method B: Manual Deployment via `gh-pages`
You can also deploy manually using the included script:
```bash
npm run deploy
```
This executes `npm run build` and publishes the static `/dist` bundle directly to the `gh-pages` branch.

---

## 💾 LocalStorage Data Persistence

All user interactions persist reliably across browser sessions and page refreshes:
- `hospitalsee_appointments`: Confirmed OPD doctor appointments with unique token numbers.
- `hospitalsee_packages`: Booked health checkup packages with home collection details.
- `hospitalsee_fav_doctors`: Bookmarked specialists for quick access.
- `hospitalsee_inquiries`: Contact form submissions and inquiries.
- `hospitalsee_ambulance_requests`: Dispatched emergency ambulance requests.

> *Note: This application runs client-side without a backend server; data is stored securely in the user's browser localStorage.*

---

## 📄 License & Attribution

Designed and maintained for **Aman22kr**. Re-engineered from the structure and clinical scope of **Jeewan Mala Hospital**, New Delhi.
