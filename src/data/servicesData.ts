export interface ServiceItem {
  id: string;
  slug: string;
  number: string;
  title: string;
  shortTitle: string;
  tagline: string;
  description: string;
  points: string[];
  badge: string;
  features: { title: string; desc: string }[];
  deliverables: string[];
  idealFor: string;
}

export const OFFICIAL_SERVICES: ServiceItem[] = [
  {
    id: "website-development",
    slug: "website-development",
    number: "01",
    title: "Website Development",
    shortTitle: "Web Dev",
    tagline: "Fast, responsive, and SEO-friendly corporate web presence",
    description: "We create blazing-fast, responsive, and SEO-friendly websites using Next.js, React, and modern full-stack architectures. Designed to build strong brand trust and maximize client conversions.",
    badge: "Core Service",
    points: [
      "Business & Corporate Websites",
      "E-commerce Platforms & Multi-Vendor Portals",
      "Portfolio & High-Conversion Landing Pages",
      "Website Redesign & Performance Optimization"
    ],
    features: [
      { title: "Sub-Second Loading Speeds", desc: "Engineered with Next.js SSR & SSG for instant 100/100 Core Web Vitals." },
      { title: "Mobile-First Design", desc: "100% fluid responsive experience across mobile phones, tablets, and desktops." },
      { title: "Built-In SEO Architecture", desc: "Clean semantic HTML5, Schema.org rich markup, and dynamic meta indexing." },
      { title: "Easy Content Management", desc: "Custom admin dashboard or headless CMS integration for self-service updates." }
    ],
    deliverables: ["Custom UI/UX Prototypes", "Production Deployment on Cloud", "SSL & Domain Setup", "30-Day Post-Launch Support"],
    idealFor: "Corporate firms, D2C brands, consulting companies, and fast-growing startups."
  },
  {
    id: "mobile-development",
    slug: "mobile-development",
    number: "02",
    title: "Mobile App Development",
    shortTitle: "Mobile Apps",
    tagline: "Cross-platform iOS & Android mobile ecosystems",
    description: "We engineer smooth, user-friendly native and hybrid mobile applications built on React Native and Flutter. Connect with your customers anytime, anywhere with seamless touch experiences and offline sync.",
    badge: "High Demand",
    points: [
      "Android & iOS Mobile Applications",
      "React Native & Expo Ecosystems",
      "Field Staff & Business Management Apps",
      "Real-Time API & Push Notification Integration"
    ],
    features: [
      { title: "Smooth 60fps Native Performance", desc: "Optimized gestures, hardware acceleration, and native component integration." },
      { title: "Offline Data Sync", desc: "Local SQLite/WatermelonDB storage allowing users to operate without internet." },
      { title: "Biometric & Push Notifications", desc: "Fingerprint/FaceID lock and targeted marketing push notifications." },
      { title: "App Store & Play Store Publishing", desc: "Complete support for Google Play Console and Apple App Store review approvals." }
    ],
    deliverables: ["iOS & Android Build Bundles", "Backend API Server", "Admin Management Console", "Store Deployment Assistance"],
    idealFor: "Service businesses, field logistics, resident/student apps, and on-demand platforms."
  },
  {
    id: "digital-marketing",
    slug: "digital-marketing",
    number: "03",
    title: "Digital Marketing",
    shortTitle: "Marketing",
    tagline: "Data-driven performance marketing, PPC, and brand growth",
    description: "Accelerate your inbound customer pipeline with high-ROI digital marketing campaigns. We manage Google Ads, Meta Ads (Facebook & Instagram), LinkedIn B2B campaigns, and automated WhatsApp nurturing funnels.",
    badge: "High ROI",
    points: [
      "Google Search & Display Ads (PPC)",
      "Meta Ads (Facebook & Instagram Lead Generation)",
      "LinkedIn B2B Enterprise Lead Campaigns",
      "Automated WhatsApp & Email Sales Funnels"
    ],
    features: [
      { title: "Precision Audience Targeting", desc: "Reach active buyers looking specifically for your software and services." },
      { title: "Conversion Rate Optimization (CRO)", desc: "A/B test ad creatives, copy, and landing pages to reduce customer acquisition costs." },
      { title: "Real-Time ROI Dashboards", desc: "Transparent tracking of cost per lead, click-through rates, and pipeline revenue." },
      { title: "Remarketing & Retargeting", desc: "Re-engage past website visitors with personalized discount offers." }
    ],
    deliverables: ["Campaign Strategy & Copywriting", "Creative Ad Graphic Design", "Pixel & Tag Manager Setup", "Weekly Performance Reports"],
    idealFor: "Real estate developers, B2B software companies, educational institutes, and local service brands."
  },
  {
    id: "seo-services",
    slug: "seo-services",
    number: "04",
    title: "SEO Services",
    shortTitle: "SEO",
    tagline: "Dominate Google search results and drive continuous organic traffic",
    description: "Rank #1 on Google for high-intent business keywords. Our technical SEO, keyword research, on-page optimization, and authoritative backlink strategies ensure sustainable top-tier search visibility without paid ads.",
    badge: "100% Organic",
    points: [
      "Technical SEO & Core Web Vitals Audits",
      "High-Intent Commercial Keyword Research",
      "On-Page SEO & Content Optimization",
      "High-Authority Backlink Acquisition & Local GMB SEO"
    ],
    features: [
      { title: "Keyword Domination", desc: "Rank for competitive terms like 'real estate software', 'society management erp', and local terms." },
      { title: "Technical Crawlability", desc: "Zero crawl errors, canonical tags, automated XML sitemaps, and Schema structured data." },
      { title: "Google My Business (Local SEO)", desc: "Optimize local Google Map pack rankings to win regional customer searches." },
      { title: "Competitor Gap Analysis", desc: "Outrank competitors by targeting their top traffic-driving queries." }
    ],
    deliverables: ["Comprehensive Site SEO Audit", "Keyword Research Blueprint", "On-Page Optimization Implementation", "Monthly Keyword Ranking Reports"],
    idealFor: "Businesses seeking sustainable, zero-ad-spend customer acquisition and organic dominance."
  },
  {
    id: "ui-ux-design",
    slug: "ui-ux-design",
    number: "05",
    title: "UI/UX Design",
    shortTitle: "UI/UX",
    tagline: "Intuitive, modern interfaces engineered for user retention",
    description: "We craft human-centric UI/UX designs that transform complex workflows into effortless digital experiences. From Figma prototypes to production-ready design systems for SaaS and mobile apps.",
    badge: "Award Winning",
    points: [
      "SaaS Web Application UI/UX",
      "Complex Admin Dashboard Interface Design",
      "iOS & Android Mobile App Wireframing",
      "Design Systems & Interactive Figma Prototypes"
    ],
    features: [
      { title: "User Journey Mapping", desc: "Streamline user funnels to minimize cognitive load and eliminate friction." },
      { title: "Pixel-Perfect Figma Systems", desc: "Organized typography, color palettes, and reusable component libraries." },
      { title: "Clickable Interactive Prototypes", desc: "Experience live screen transitions and user flows before writing a single line of code." },
      { title: "Accessibility (WCAG 2.1)", desc: "High-contrast, accessible designs readable across dark and light modes." }
    ],
    deliverables: ["Figma Source Files", "Interactive Clickable Prototypes", "Exported Vector Assets", "Developer Hand-off Documentation"],
    idealFor: "SaaS founders, product managers, and enterprise applications seeking modern aesthetic elevation."
  },
  {
    id: "custom-software-development",
    slug: "custom-software-development",
    number: "06",
    title: "Custom Software Development",
    shortTitle: "Custom ERP",
    tagline: "Automate operations and boost business productivity",
    description: "We develop customized enterprise software solutions to automate complex business operations, eliminate paperwork friction, and improve overall operational productivity.",
    badge: "Enterprise Grade",
    points: [
      "Custom CRM & ERP Systems",
      "School & College Management Software",
      "Transport & Fleet Management Systems",
      "Real Estate & Inventory Management Portals"
    ],
    features: [
      { title: "Tailored to Your Exact Workflow", desc: "Zero cookie-cutter limitations; built to match your company's operational rules." },
      { title: "Role-Based Access Control", desc: "Granular permissions for management, accountants, staff, and clients." },
      { title: "Automated Reporting Engines", desc: "Instant export of GST invoices, balance sheets, and audit logs to PDF/Excel." },
      { title: "Legacy System Migration", desc: "Seamlessly transition historical spreadsheet registers into cloud databases." }
    ],
    deliverables: ["Full Source Code Ownership", "Cloud Database Configuration", "User Training Sessions", "Dedicated SLA Maintenance"],
    idealFor: "Growing enterprises, educational institutes, housing societies, and multi-branch companies."
  },
  {
    id: "ai-business-automation",
    slug: "ai-business-automation",
    number: "07",
    title: "AI & Business Automation",
    shortTitle: "AI Automation",
    tagline: "Automate repetitive tasks with smart intelligent pipelines",
    description: "We help businesses automate repetitive manual tasks and make smarter, data-backed decisions using modern AI, chatbots, and workflow automation technologies.",
    badge: "AI Powered",
    points: [
      "24/7 AI WhatsApp & Web Chatbot Integration",
      "Workflow Automation (n8n, Zapier & Custom APIs)",
      "Intelligent Data Analytics & Predictive Reports",
      "Document OCR & Automated Invoice Scanning"
    ],
    features: [
      { title: "Instant Customer Inquiry Resolution", desc: "AI chatbots answer customer questions, share brochures, and collect leads 24/7." },
      { title: "Workflow Automation", desc: "Auto-trigger emails, WhatsApp reminders, and accounting entries on event triggers." },
      { title: "Document Processing", desc: "Extract data from scanned paper bills and IDs automatically into database." },
      { title: "Predictive Business Insights", desc: "Discover seasonal demand patterns and churn risks before they happen." }
    ],
    deliverables: ["AI Bot Setup & Training", "Custom Integration Webhooks", "Automation Workflows Documentation", "Testing & Optimization"],
    idealFor: "High-volume customer support teams, e-commerce, sales teams, and back-office operations."
  },
  {
    id: "cloud-deployment-maintenance",
    slug: "cloud-deployment-maintenance",
    number: "08",
    title: "Cloud & DevOps Maintenance",
    shortTitle: "Cloud & DevOps",
    tagline: "Reliable cloud deployment, 24/7 monitoring & technical support",
    description: "We help businesses launch, maintain, and continuously improve their digital products with reliable cloud hosting, automated daily database backups, and emergency support.",
    badge: "99.9% Uptime",
    points: [
      "Website & Web Application Deployment",
      "AWS / GCP Cloud Hosting Architecture",
      "Database Configuration & Automated Daily Backups",
      "Performance Optimization & Bug Fixing Support"
    ],
    features: [
      { title: "Zero-Downtime Deployments", desc: "Roll out new updates and software features without disturbing active users." },
      { title: "Automated Disaster Recovery", desc: "Hourly/daily encrypted snapshots with 1-click restore functionality." },
      { title: "DDoS & Firewall Protection", desc: "Cloudflare integration protecting against bots, brute force, and malicious attacks." },
      { title: "24/7 Emergency Support", desc: "Dedicated phone and WhatsApp escalation channels for mission-critical uptime." }
    ],
    deliverables: ["Cloud Architecture Setup", "CI/CD Deployment Pipelines", "Security Audit Report", "Monthly Server Maintenance"],
    idealFor: "Mission-critical applications, high-traffic portals, and enterprise compliance requirements."
  }
];
