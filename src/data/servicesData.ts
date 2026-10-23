export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  points: string[];
  badge: string;
}

export const OFFICIAL_SERVICES: ServiceItem[] = [
  {
    id: "website-development",
    number: "01",
    title: "Website Development",
    tagline: "Fast, responsive, and SEO-friendly web presence",
    description: "We create fast, responsive, and SEO-friendly websites that help businesses build a strong online presence and convert visitors into loyal clients.",
    points: [
      "Business & Corporate Websites",
      "E-commerce Websites",
      "Portfolio & Landing Pages",
      "Website Redesign & Optimization"
    ],
    badge: "Core Service"
  },
  {
    id: "custom-software-development",
    number: "02",
    title: "Custom Software Development",
    tagline: "Automate operations and boost business productivity",
    description: "We develop customized software solutions to automate business operations, eliminate paperwork friction, and improve overall operational productivity.",
    points: [
      "CRM & ERP Systems",
      "School Management Software",
      "Transport Management Systems",
      "Real Estate & Inventory Management Software"
    ],
    badge: "Enterprise Grade"
  },
  {
    id: "saas-product-development",
    number: "03",
    title: "SaaS Product Development",
    tagline: "Scalable cloud-based recurring subscription platforms",
    description: "We build scalable cloud-based software products that businesses and end-customers can access seamlessly through subscription-based multi-tenant platforms.",
    points: [
      "Multi-Tenant SaaS Applications",
      "Cloud-Based Business Solutions",
      "Subscription Management Systems",
      "Custom SaaS Platforms"
    ],
    badge: "High Growth"
  },
  {
    id: "mobile-app-development",
    number: "04",
    title: "Mobile App Development",
    tagline: "User-friendly iOS & Android mobile ecosystems",
    description: "We develop user-friendly mobile applications that connect businesses with their customers anytime, anywhere with seamless touch experiences.",
    points: [
      "Android Applications",
      "React Native & Expo Apps",
      "Business Management Apps",
      "API Integration for Mobile Apps"
    ],
    badge: "Mobile First"
  },
  {
    id: "ai-business-automation",
    number: "05",
    title: "AI & Business Automation",
    tagline: "Automate repetitive tasks with smart intelligent pipelines",
    description: "We help businesses automate repetitive tasks and make smarter, data-backed decisions using modern AI, machine learning, and workflow automation technologies.",
    points: [
      "AI Chatbot Integration",
      "Workflow Automation",
      "Data Analytics & Reporting",
      "Machine Learning Solutions"
    ],
    badge: "AI Powered"
  },
  {
    id: "crm-api-integration",
    number: "06",
    title: "CRM & API Integration",
    tagline: "Streamline customer communication, payments & sales",
    description: "We connect your business applications and streamline customer communication, sales pipelines, and daily operations with official API gateways.",
    points: [
      "WhatsApp Business API Integration",
      "Payment Gateway Integration",
      "SMS & OTP Integration",
      "Third-Party API Integration"
    ],
    badge: "High Conversion"
  },
  {
    id: "ui-ux-design",
    number: "07",
    title: "UI/UX Design",
    tagline: "Intuitive, modern interfaces for smooth digital experiences",
    description: "We design intuitive, modern, and user-friendly interfaces that deliver a smooth digital experience and maximize user retention across devices.",
    points: [
      "Website UI/UX Design",
      "Admin Dashboard Design",
      "SaaS Application Interfaces",
      "Responsive Web Design"
    ],
    badge: "Modern Aesthetics"
  },
  {
    id: "cloud-deployment-maintenance",
    number: "08",
    title: "Cloud, Deployment & Maintenance",
    tagline: "Reliable deployment, 24/7 monitoring & technical support",
    description: "We help businesses launch, maintain, and continuously improve their digital products with reliable cloud deployment, database backups, and ongoing support.",
    points: [
      "Website & Application Deployment",
      "Cloud Hosting Setup",
      "Database Configuration & Backup",
      "Bug Fixing & Performance Optimization",
      "Ongoing Technical Support"
    ],
    badge: "99.9% Uptime"
  }
];
