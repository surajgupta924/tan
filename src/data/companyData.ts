export interface WorkProject {
  id: string;
  title: string;
  slug: string;
  category: string;
  client: string;
  tagline: string;
  description: string;
  metric: string;
  metricLabel: string;
  technologies: string[];
  image: string;
}

export const WORK_PROJECTS: WorkProject[] = [
  {
    id: "gated-society-cloud",
    title: "SmartCity Gated Society & Billing Automation",
    slug: "smartcity-society-erp",
    category: "Real Estate ERP",
    client: "Apex Green Heights (1200+ Flats)",
    tagline: "100% Automated Maintenance Collection & Security App",
    description: "Built an integrated ERP managing 1200 residential flats with automatic monthly invoice generation, WhatsApp billing alerts, Razorpay UPI gateways, and digital gatekeeper pass approvals.",
    metric: "98.4%",
    metricLabel: "On-Time Fee Recovery",
    technologies: ["Next.js", "Node.js", "MongoDB", "WhatsApp Cloud API", "Razorpay"],
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "corporate-payroll-hrms",
    title: "Enterprise Multi-Branch Biometric Payroll HRMS",
    slug: "enterprise-payroll-hrms",
    category: "HRTech & Enterprise",
    client: "Global Logistics Ltd (850+ Employees)",
    tagline: "Disburses salaries in 5 minutes with automated PF/ESI/TDS tax deductions",
    description: "Replaced legacy punch-cards with GPS-fenced mobile attendance and biometric machine sync. Enabled one-click payslip generation and automated compliance reporting.",
    metric: "120+ hrs",
    metricLabel: "Saved Every Month",
    technologies: ["Next.js", "PostgreSQL", "Tailwind CSS", "Redis", "Docker"],
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "campus-school-erp",
    title: "Next-Gen 360° Smart Campus School ERP",
    slug: "smart-campus-school-erp",
    category: "EdTech",
    client: "St. Xavier International Academy (3200+ Students)",
    tagline: "Automated Student Lifecycle from Admission to Exam Report Cards",
    description: "Complete educational operating system connecting teachers, students, and parents. Features real-time school bus GPS tracking, instant WhatsApp fee receipts, and digital report card generation.",
    metric: "3,200+",
    metricLabel: "Daily Active Students",
    technologies: ["Next.js", "MongoDB", "Socket.io", "React Native", "AWS"],
    image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "travel-tour-engine",
    title: "B2B / B2C Global Tour Booking Engine",
    slug: "global-tour-booking-engine",
    category: "TravelTech",
    client: "Wanderlust Destinations Global",
    tagline: "Dynamic Tour Itinerary Builder & Automated WhatsApp Vouchers",
    description: "Multi-currency travel portal that dynamically compiles daily hotel, transport, and sightseeing packages with automated PDF and WhatsApp customer travel vouchers.",
    metric: "4.2x",
    metricLabel: "Sales Conversion Growth",
    technologies: ["React", "Next.js", "Express", "Stripe", "MongoDB"],
    image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=1200&q=80"
  }
];

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  category: string;
  readTime: string;
  date: string;
  author: string;
  excerpt: string;
  coverImage: string;
}

export const BLOG_POSTS: BlogPost[] = [
  {
    id: "society-management-automation-guide",
    title: "Why Indian Housing Societies Are Switching to Automated Maintenance ERPs in 2025",
    slug: "why-housing-societies-switch-to-automated-erp",
    category: "Real Estate Tech",
    readTime: "5 min read",
    date: "October 18, 2025",
    author: "Tansur Tech Team",
    excerpt: "Manual registers and delayed maintenance fees cost societies lakhs in unpaid dues. Here is how WhatsApp invoicing and automated UPI reconciliation boost fee collections to 99%.",
    coverImage: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "payroll-hrms-compliance-india",
    title: "The Ultimate Guide to Modern Payroll Automation: PF, ESI, TDS & Biometric Sync",
    slug: "modern-payroll-automation-guide",
    category: "Enterprise HRMS",
    readTime: "7 min read",
    date: "October 10, 2025",
    author: "HR Tech Architect",
    excerpt: "Calculating salary slips across 500+ employees with varying shifts does not have to take days. Discover how cloud-native payroll software automates statutory taxes in clicks.",
    coverImage: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "hiring-dedicated-developers-nextjs",
    title: "Why Growing Startups & Enterprises Hire Dedicated Next.js & Full-Stack Developers",
    slug: "hiring-dedicated-developers-advantages",
    category: "Software Engineering",
    readTime: "4 min read",
    date: "September 28, 2025",
    author: "Lead Architect",
    excerpt: "Discover the cost and velocity advantages of hiring pre-vetted full-time developers from Tansur Software Solutions to accelerate your product roadmap without hiring overhead.",
    coverImage: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80"
  }
];

export interface DeveloperRole {
  title: string;
  experience: string;
  skills: string[];
  engagement: string;
  availability: string;
  description: string;
}

export const DEVELOPER_ROLES: DeveloperRole[] = [
  {
    title: "Senior Full-Stack Next.js / React Engineer",
    experience: "4+ to 7+ Years",
    skills: ["Next.js 15+", "React 19", "TypeScript", "Tailwind CSS", "Node.js", "Server Actions"],
    engagement: "Full-Time / Part-Time / Hourly",
    availability: "Immediate (Within 48 hrs)",
    description: "Specializes in building lightning-fast SSR web applications, interactive enterprise dashboards, and SEO-optimized web portals."
  },
  {
    title: "Backend & Database Architect (Node.js & MongoDB)",
    experience: "5+ Years",
    skills: ["Node.js", "Express", "MongoDB", "PostgreSQL", "Redis", "REST & GraphQL APIs", "Microservices"],
    engagement: "Full-Time / Project Contract",
    availability: "Immediate",
    description: "Builds high-throughput secure backends, robust database indexing, multi-tenant schemas, and third-party API pipelines."
  },
  {
    title: "Mobile App Developer (React Native & Flutter)",
    experience: "4+ Years",
    skills: ["React Native", "Flutter", "iOS & Android", "Offline Sync", "Push Notifications", "Biometrics"],
    engagement: "Full-Time / Milestone Based",
    availability: "Within 3 Days",
    description: "Crafts smooth 60fps cross-platform mobile apps for ERP users, field staff, residents, and customer portals."
  },
  {
    title: "DevOps & Cloud Security Specialist",
    experience: "5+ Years",
    skills: ["AWS", "Docker", "Kubernetes", "CI/CD Pipelines", "SSL/TLS", "PostgreSQL Clustering", "Cloudflare"],
    engagement: "Monthly Retainer / Project",
    availability: "Immediate",
    description: "Automates deployments, sets up zero-downtime production rollouts, load balancing, and ensures 99.99% uptime."
  }
];
