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
  benefits?: string[];
  modules?: { name: string; desc: string }[];
}

export const INITIAL_PRODUCTS: ProductData[] = [
  {
    id: "real-estate-crm",
    title: "Real Estate ERP & CRM Software",
    slug: "real-estate-crm-software",
    tagline: "End-to-End Real Estate Sales, Booking, Inventory & Broker Management",
    category: "Real Estate",
    description: "Built for real estate builders, developers, and channel partners. Manage multi-project inventory unit booking, automated payment milestone reminders, digital demand letters, broker commission tracking, and WhatsApp buyer lead automation.",
    badge: "Enterprise",
    isPopular: true,
    dummyImage: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1200&q=80",
    features: [
      "Dynamic 2D/3D Interactive Unit & Flat Booking Matrix",
      "Automated Milestone Demand Letters & Bank NOC Generator",
      "Channel Partner / Broker Portal with Commission Calculation",
      "Lead Source Attribution (Google, Meta, 99acres, Magicbricks)",
      "Instant WhatsApp Payment Receipts & Cost Sheet PDF Sharing",
      "Comprehensive RERA Compliance & Agreement Audit Logs"
    ],
    benefits: [
      "Boost booking conversion by 45% with instant unit hold lock",
      "Zero manual errors in calculation of floor rise, PLC, and GST",
      "100% automated milestone tracking with payment gateway integrations"
    ],
    modules: [
      { name: "Unit Inventory & Costing", desc: "Real-time blocked, sold, and available inventory dashboard." },
      { name: "Lead Pipeline CRM", desc: "Omnichannel lead capture with auto-assignment to sales agents." },
      { name: "Billing & Receipts", desc: "Automated payment schedules, demand notes, and GST invoices." }
    ]
  },
  {
    id: "housing-society-management",
    title: "Society & Apartment Management ERP",
    slug: "society-management-software",
    tagline: "Complete Smart Gated Community, Resident Billing & Gatekeeper ERP",
    category: "Society Management",
    description: "All-in-one housing society, apartment complex, and RWA management platform. Automate monthly maintenance bill generation, instant UPI payment reconciliation, gatekeeper visitor pass approvals, clubhouse amenity bookings, and resident complaint ticketing.",
    badge: "Trending #1",
    isPopular: true,
    dummyImage: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80",
    features: [
      "Automated Maintenance Billing & Invoicing (UPI, NetBanking, Cards)",
      "Smart Security Guard & Visitor Check-In / Check-Out Mobile App",
      "Resident Helpdesk & Complaint Ticketing Engine",
      "Clubhouse, Party Hall & Sports Facility Online Booking",
      "Notice Board, Polls & Emergency WhatsApp Broadcasting",
      "Accounting & Complete Society Balance Sheet Generator"
    ],
    benefits: [
      "Achieve 99%+ on-time maintenance collection with automated WhatsApp alerts",
      "Strengthen society gate security with digital visitor entry approvals",
      "Transparent financial accounts with zero manual auditing burden"
    ],
    modules: [
      { name: "Maintenance & Invoicing", desc: "Square-foot or flat-rate maintenance with automated late fees." },
      { name: "Smart Gate Pass App", desc: "Visitor, delivery, and daily staff QR-code check-in." },
      { name: "Helpdesk & Facilities", desc: "Track plumber, electrician complaints and facility reservations." }
    ]
  },
  {
    id: "payroll-hrms",
    title: "Intelligent Payroll & HRMS Software",
    slug: "payroll-management-system",
    tagline: "Automate Salaries, Biometric Attendance & Statutory Compliance",
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
    ],
    benefits: [
      "Disburse hundreds of employee salaries in under 5 minutes",
      "Eliminate shift calculation errors with automatic biometric sync",
      "100% compliant with labor laws and tax withholdings"
    ],
    modules: [
      { name: "Salary & Compensation", desc: "Custom CTC structures, allowances, bonuses, and tax deductions." },
      { name: "Attendance & Shifts", desc: "Shift rosters, overtime calculation, and biometric logs." },
      { name: "Employee Self-Service", desc: "Mobile app for payslip download, leave, and tax declarations." }
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
    ],
    benefits: [
      "Automate 100% fee reminders via official WhatsApp notifications",
      "Live bus tracking gives parents peace of mind and school transparency",
      "Generate report cards and marksheets with a single click"
    ],
    modules: [
      { name: "Student Lifecycle", desc: "Admissions, attendance, conduct, and transfer certificates." },
      { name: "Fee Management", desc: "Installments, fines, scholarships, and automated payment receipts." },
      { name: "Academics & Exams", desc: "Syllabus tracking, timetable matrix, and digital grade sheets." }
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
    ],
    benefits: [
      "Send professional PDF & WhatsApp travel itineraries in 2 minutes",
      "Real-time profit tracking per booking and supplier reconciliation",
      "Integrate multiple B2B supplier XML/JSON APIs effortlessly"
    ],
    modules: [
      { name: "Itinerary Builder", desc: "Drag-and-drop daily schedule with photos, hotels, and inclusions." },
      { name: "Voucher Dispatch", desc: "Instant branded hotel vouchers and flight tickets to clients." },
      { name: "Vendor Accounting", desc: "Manage payments to transport, guides, and hotels seamlessly." }
    ]
  },
  {
    id: "crm-lead-management",
    title: "Omnichannel CRM & Lead Automation",
    slug: "crm-lead-management",
    tagline: "Capture, Nurture & Convert Leads Across Multiple Digital Channels",
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
    ],
    benefits: [
      "Zero lead leakage with sub-second CRM ingestion",
      "Automate follow-up messages on WhatsApp to boost conversions by 3x",
      "Track agent performance and monthly closure metrics on live charts"
    ],
    modules: [
      { name: "Lead Pipeline Kanban", desc: "Drag-and-drop stages from New Inquiry to Closed Won." },
      { name: "WhatsApp Automation", desc: "Pre-approved broadcast templates and automated triggers." },
      { name: "Sales Performance", desc: "Conversion analytics, lost deal reasons, and commission sheets." }
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
    ],
    benefits: [
      "Reduce patient waiting time by 60% with smart token queue screens",
      "Digital prescriptions prevent handwriting errors and sync with pharmacy",
      "Manage NABH compliant records and automated diagnostic reports"
    ],
    modules: [
      { name: "OPD & Token Queue", desc: "Digital token screens, slot booking, and patient registration." },
      { name: "Pharmacy & Stock", desc: "Batch tracking, expiry alerts, and barcode billing." },
      { name: "Diagnostics & Labs", desc: "Sample barcode tracking and automated report PDF dispatch." }
    ]
  }
];
