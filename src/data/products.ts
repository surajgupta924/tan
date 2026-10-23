export interface ProductData {
  id: string;
  title: string;
  slug: string;
  tagline: string;
  category: string;
  description: string;
  features: string[];
  dummyImage: string;
  badge: string;
  isPopular?: boolean;
}

export const INITIAL_PRODUCTS: ProductData[] = [
  {
    id: "real-estate-society",
    title: "Real Estate & Housing Society Management",
    slug: "real-estate-society-management",
    tagline: "Complete Smart Gated Community & Resident Billing ERP",
    category: "Real Estate / Society",
    description: "All-in-one housing society and apartment management software. Automate maintenance bill generation, online payment gateway collection, gatekeeper visitor tracking, complaint management, and parking allocation.",
    badge: "Trending #1",
    isPopular: true,
    dummyImage: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80",
    features: [
      "Automated Maintenance Billing & Invoicing (UPI, Cards, NetBanking)",
      "Smart Security Guard & Visitor Check-In / Check-Out App",
      "Resident Complaint / Helpdesk Ticketing System",
      "Facility & Clubhouse Online Booking System",
      "Notice Board, Polls & Emergency WhatsApp Broadcasting",
      "Accounting & Financial Balance Sheet Generator"
    ]
  },
  {
    id: "payroll-hrms",
    title: "Intelligent Payroll & HRMS Software",
    slug: "payroll-management-system",
    tagline: "Automate Salaries, Biometric Attendance & Compliance in Minutes",
    category: "HR & Enterprise",
    description: "Next-generation human resource management and payroll calculation software. Integrates biometric machines, geo-fenced mobile attendance, statutory deductions (PF, ESI, TDS) and one-click salary disbursement.",
    badge: "Enterprise",
    isPopular: true,
    dummyImage: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1200&q=80",
    features: [
      "One-Click Automated Salary Slip & Direct Bank Transfer",
      "Biometric & GPS Geo-fenced Attendance Tracking",
      "Compliances (PF, ESI, PT, TDS & Form 16 Preparation)",
      "Employee Self-Service Portal (Leave requests, reimbursements)",
      "Performance Appraisal (KPI / OKR tracking)",
      "Role-Based Access Control with Multi-Branch Support"
    ]
  },
  {
    id: "school-erp",
    title: "School & College Management ERP",
    slug: "school-management-system",
    tagline: "Empowering Next-Gen Education with 360° Campus Automation",
    category: "EdTech",
    description: "A comprehensive digital school ERP designed for schools, colleges, and coaching institutes. Connects teachers, parents, students, and administrators with transparent fee collection and student monitoring.",
    badge: "Bestseller",
    isPopular: true,
    dummyImage: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=1200&q=80",
    features: [
      "Student Admission, Enrollment & ID Card Generation",
      "Fee Collection & Instant WhatsApp Fee Reminders",
      "Live Examination, Report Card Generation & Grade Book",
      "Parent Mobile Portal for Homework, Attendance & Bus GPS Tracking",
      "Library, Hostel & Inventory Management System",
      "Timetable Scheduler & Teacher Substitution Engine"
    ]
  },
  {
    id: "travel-tourism-erp",
    title: "Travel & Tourism Booking Management",
    slug: "travel-management-system",
    tagline: "Complete Tour Operator, Flight, Hotel & Itinerary Booking Solution",
    category: "Travel & Hospitality",
    description: "Robust booking engine and travel agency management software. Create dynamic quotes, customizable itineraries, hotel & vehicle reservations, invoice generation, and customer voucher dispatch.",
    badge: "Hot Solution",
    isPopular: false,
    dummyImage: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=1200&q=80",
    features: [
      "Dynamic Tour Package & Day-wise Itinerary Builder",
      "B2B & B2C Booking Engine with Multi-Currency Support",
      "Voucher, Invoice & Visa Status Automation",
      "Hotel & Transport Vendor Rate Card Management",
      "WhatsApp & Email Travel Confirmation & Reminder Alerts",
      "Agent Commission & Profitability Reports"
    ]
  },
  {
    id: "crm-lead-management",
    title: "Omnichannel CRM & Lead Automation",
    slug: "crm-lead-management",
    tagline: "Capture, Nurture & Convert Leads Across Multiple Channels",
    category: "Sales & Marketing",
    description: "High-speed sales pipeline and customer relationship management software. Auto-captures inquiries from Meta, Google Ads, website, and WhatsApp with instant automated salesperson assignment.",
    badge: "High Growth",
    isPopular: false,
    dummyImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
    features: [
      "Instant WhatsApp & Email Auto-responder for Inquiries",
      "Kanban Sales Pipeline & Follow-Up Alert Scheduler",
      "Call Recording & Field Staff Tracking",
      "Multi-Channel Lead Sync (Facebook, Google, IndiaMART)",
      "Comprehensive Sales Conversion & Revenue Analytics"
    ]
  },
  {
    id: "hospital-clinic-erp",
    title: "Hospital & Clinic Healthcare Suite",
    slug: "hospital-clinic-management",
    tagline: "Smart Healthcare Management for Clinics & Multispecialty Hospitals",
    category: "Healthcare",
    description: "Digital OPD, IPD, pharmacy, and diagnostic lab management software. Simplifies patient appointments, electronic health records (EHR), prescription management, and billing.",
    badge: "Enterprise",
    isPopular: false,
    dummyImage: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1200&q=80",
    features: [
      "Doctor Appointment Scheduling & Token Display System",
      "Electronic Medical Records (EMR) & Digital Rx Printing",
      "Integrated Pharmacy Inventory & Expiry Tracking",
      "Pathology Lab Report Automation with Barcoding",
      "Insurance / TPA Claim Management & Cashless Billing"
    ]
  }
];
