'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { OFFICIAL_SERVICES } from '@/data/servicesData';
import { 
  Globe, 
  Code2, 
  Cloud, 
  Smartphone, 
  Cpu, 
  Workflow, 
  Palette, 
  Server, 
  ArrowRight, 
  CheckCircle2, 
  Sparkles, 
  ShieldCheck, 
  PhoneCall,
  Laptop,
  Layers,
  ChevronRight,
  ExternalLink,
  MessageSquare
} from 'lucide-react';

const serviceIcons = [Globe, Code2, Cloud, Smartphone, Cpu, Workflow, Palette, Server];

// Rich service mock metrics & deliverables for interactive preview
const serviceDetails = [
  {
    gradient: "from-blue-600 to-cyan-500",
    techStack: ["Next.js 15", "React 19", "Tailwind CSS", "TypeScript", "Shopify/WooCommerce"],
    deliveryTime: "5 - 14 Days",
    idealFor: "Startups, D2C Brands, Corporate Firms, Enterprises",
    previewImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1000&q=80",
    clientQuote: "Delivered a blazing fast, SEO-optimized website that increased our lead generation by 240%."
  },
  {
    gradient: "from-indigo-600 to-blue-500",
    techStack: ["Node.js", "Express", "MongoDB", "PostgreSQL", "Docker", "REST/GraphQL"],
    deliveryTime: "3 - 6 Weeks",
    idealFor: "Schools, Real Estate Societies, Logistics & Multi-branch Businesses",
    previewImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1000&q=80",
    clientQuote: "Replaced 6 manual spreadsheets with a unified ERP that handles daily operations flawlessly."
  },
  {
    gradient: "from-cyan-600 to-teal-500",
    techStack: ["Next.js Multi-Tenant", "Stripe Billing", "AWS DynamoDB", "Redis", "Kafka"],
    deliveryTime: "4 - 8 Weeks",
    idealFor: "SaaS Founders, B2B Platforms, Subscription Businesses",
    previewImage: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1000&q=80",
    clientQuote: "Engineered scalable recurring subscription architecture capable of handling 50k+ active tenants."
  },
  {
    gradient: "from-violet-600 to-indigo-500",
    techStack: ["React Native", "Expo", "Flutter", "Push Notifications", "Biometrics"],
    deliveryTime: "3 - 5 Weeks",
    idealFor: "Customer Apps, Delivery/Field Force, Resident/Student Portals",
    previewImage: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1000&q=80",
    clientQuote: "Smooth 60fps native feel across both iPhone & Android devices with instant biometric lock."
  },
  {
    gradient: "from-fuchsia-600 to-pink-500",
    techStack: ["OpenAI / Anthropic APIs", "Python FastAPI", "LangChain", "Vector DBs", "n8n"],
    deliveryTime: "1 - 3 Weeks",
    idealFor: "Customer Support Teams, Sales Automations, High-Volume Operations",
    previewImage: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1000&q=80",
    clientQuote: "Automated 80% of customer ticket inquiries via AI chatbot with zero human intervention."
  },
  {
    gradient: "from-emerald-600 to-teal-500",
    techStack: ["WhatsApp Cloud API", "Razorpay", "Cashfree", "Twilio", "Stripe", "Zapier"],
    deliveryTime: "3 - 7 Days",
    idealFor: "E-commerce, Invoicing Companies, Alert Broadcasters",
    previewImage: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1000&q=80",
    clientQuote: "Instant WhatsApp payment links boosted our fee collection rate to 98% in the first month."
  },
  {
    gradient: "from-amber-500 to-orange-500",
    techStack: ["Figma", "Design Systems", "Tailwind CSS", "Micro-Interactions", "Framer"],
    deliveryTime: "1 - 2 Weeks",
    idealFor: "SaaS Dashboards, Modern Web Apps, Mobile UI Rebranding",
    previewImage: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1000&q=80",
    clientQuote: "Clean, intuitive UI design that reduced user onboarding time from 30 minutes to 3 minutes."
  },
  {
    gradient: "from-slate-800 to-blue-900",
    techStack: ["AWS / GCP", "Docker", "Cloudflare CDN", "Automated Backups", "SSL & WAF"],
    deliveryTime: "Immediate / Ongoing",
    idealFor: "Mission-Critical Systems, High-Traffic Apps, Compliance-Driven Enterprises",
    previewImage: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1000&q=80",
    clientQuote: "Maintained 99.99% uptime with zero downtime releases and automated daily snapshots."
  }
];

export default function InteractiveServices() {
  const [activeTab, setActiveTab] = useState(0);
  const activeService = OFFICIAL_SERVICES[activeTab];
  const activeDetail = serviceDetails[activeTab];
  const ActiveIcon = serviceIcons[activeTab] || Code2;

  const waNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '919876543210';

  return (
    <div className="space-y-16">
      
      {/* 1. MASTER INTERACTIVE WORKSTATION (SIDEBAR TABS + LIVE PREVIEW STUDIO) */}
      <div className="bg-white rounded-3xl border border-slate-200/90 shadow-2xl overflow-hidden">
        
        {/* Studio Top bar */}
        <div className="bg-slate-950 px-6 py-4 flex flex-wrap items-center justify-between gap-4 border-b border-slate-800">
          <div className="flex items-center gap-3">
            <span className="flex h-3 w-3 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
            </span>
            <span className="text-xs font-bold uppercase tracking-widest text-slate-300">
              Tansur Services Explorer Studio
            </span>
          </div>
          <div className="flex items-center gap-2 text-xs text-slate-400">
            <span>Select a service below to explore modules & deliverables</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[640px]">
          
          {/* Left Column: Interactive Nav Tabs (All 8 Services) */}
          <div className="lg:col-span-4 bg-slate-900 border-r border-slate-800 p-3 sm:p-4 space-y-1.5 overflow-y-auto max-h-[640px]">
            {OFFICIAL_SERVICES.map((srv, idx) => {
              const Icon = serviceIcons[idx] || Code2;
              const isSelected = activeTab === idx;
              return (
                <button
                  key={srv.id}
                  onClick={() => setActiveTab(idx)}
                  className={`w-full text-left p-3.5 rounded-2xl transition-all duration-200 flex items-center justify-between group ${
                    isSelected
                      ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-lg shadow-blue-500/25 scale-[1.02]'
                      : 'text-slate-400 hover:text-white hover:bg-slate-800/80'
                  }`}
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div className={`p-2 rounded-xl transition-colors ${
                      isSelected ? 'bg-white/20 text-white' : 'bg-slate-800 text-slate-400 group-hover:text-blue-400'
                    }`}>
                      <Icon className="w-5 h-5 flex-shrink-0" />
                    </div>
                    <div className="min-w-0">
                      <div className="flex items-center gap-2">
                        <span className={`text-[10px] font-black uppercase tracking-wider ${
                          isSelected ? 'text-cyan-200' : 'text-slate-500'
                        }`}>
                          {srv.number}
                        </span>
                        <h4 className="font-bold text-sm truncate">{srv.title}</h4>
                      </div>
                      <p className={`text-[11px] truncate mt-0.5 ${
                        isSelected ? 'text-blue-100' : 'text-slate-500'
                      }`}>
                        {srv.tagline}
                      </p>
                    </div>
                  </div>

                  <ChevronRight className={`w-4 h-4 flex-shrink-0 transition-transform ${
                    isSelected ? 'text-white translate-x-0.5' : 'text-slate-600 group-hover:text-slate-400'
                  }`} />
                </button>
              );
            })}
          </div>

          {/* Right Column: Live Interactive Detailed Showcase */}
          <div className="lg:col-span-8 p-6 sm:p-10 flex flex-col justify-between bg-gradient-to-b from-white to-slate-50/50">
            <div>
              {/* Badge & Number */}
              <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                <div className="flex items-center gap-2.5">
                  <span className="px-3.5 py-1 text-xs font-black text-white bg-blue-600 rounded-full shadow-xs">
                    Service {activeService.number}
                  </span>
                  <span className="px-3 py-1 text-xs font-bold text-slate-700 bg-slate-100 rounded-full border border-slate-200">
                    {activeService.badge}
                  </span>
                </div>
                <div className="text-xs font-semibold text-slate-500 flex items-center gap-1.5">
                  <span>Estimated Delivery:</span>
                  <strong className="text-slate-900">{activeDetail.deliveryTime}</strong>
                </div>
              </div>

              {/* Title & Tagline */}
              <h3 className="text-3xl sm:text-4xl font-black text-slate-950 tracking-tight">
                {activeService.title}
              </h3>
              <p className="text-sm sm:text-base font-semibold text-cyan-700 mt-1">
                {activeService.tagline}
              </p>

              {/* Main Description */}
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed mt-4">
                {activeService.description}
              </p>

              {/* What We Deliver - Interactive Checkboxes Grid */}
              <div className="mt-8 bg-white rounded-2xl p-6 border border-slate-200/90 shadow-sm">
                <h4 className="text-xs font-black text-slate-900 uppercase tracking-widest mb-4 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-blue-600" />
                  What We Build & Deliver Under This Service:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {activeService.points.map((point, pIdx) => (
                    <div
                      key={pIdx}
                      className="flex items-start gap-3 p-3 rounded-xl bg-slate-50 border border-slate-100 hover:border-blue-200 transition-colors"
                    >
                      <div className="p-1 rounded-lg bg-emerald-100 text-emerald-600 mt-0.5 flex-shrink-0">
                        <CheckCircle2 className="w-4 h-4" />
                      </div>
                      <span className="text-xs sm:text-sm font-bold text-slate-800 leading-snug">
                        {point}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech Stack Pills & Ideal For */}
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-2xl bg-blue-50/60 border border-blue-100">
                  <span className="text-[11px] font-bold text-blue-900 uppercase tracking-wider block mb-2">
                    Technologies We Leverage:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {activeDetail.techStack.map((tech) => (
                      <span key={tech} className="px-2.5 py-1 text-[11px] font-bold bg-white text-blue-700 rounded-lg border border-blue-200 shadow-2xs">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-slate-100/70 border border-slate-200">
                  <span className="text-[11px] font-bold text-slate-700 uppercase tracking-wider block mb-1">
                    Ideal For:
                  </span>
                  <p className="text-xs text-slate-600 leading-relaxed font-medium">
                    {activeDetail.idealFor}
                  </p>
                  <p className="text-[11px] text-emerald-700 mt-2 font-semibold italic">
                    "{activeDetail.clientQuote}"
                  </p>
                </div>
              </div>

            </div>

            {/* Bottom Actions for Active Service */}
            <div className="mt-8 pt-6 border-t border-slate-200 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <Link
                  href={`/contact?service=${encodeURIComponent(activeService.title)}`}
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 shadow-lg shadow-blue-500/25 transition-all transform hover:-translate-y-0.5"
                >
                  <span>Request Proposal for {activeService.title}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <a
                  href={`https://wa.me/${waNumber}?text=${encodeURIComponent(`Hi Tansur Software! I am interested in your service: *${activeService.title}*. Can we discuss scope and quote?`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl text-xs sm:text-sm font-bold text-emerald-700 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 transition-colors"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>WhatsApp Inquiry</span>
                </a>
              </div>

              <Link
                href="/book-demo"
                className="text-xs font-bold text-slate-500 hover:text-blue-600 flex items-center gap-1"
              >
                <span>Book Live Architecture Demo</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </Link>
            </div>

          </div>

        </div>

      </div>

      {/* 2. ALL 8 SERVICES UNIFIED MATRIX OVERVIEW (FOR QUICK SCANNING) */}
      <div>
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-black uppercase tracking-widest text-blue-600">Unified Services Matrix</span>
          <h3 className="text-3xl font-extrabold text-slate-950 mt-1">
            Complete Capabilities at a Glance
          </h3>
          <p className="text-slate-500 text-xs sm:text-sm mt-2">
            Click on any card to automatically inspect details in the Interactive Studio above.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {OFFICIAL_SERVICES.map((srv, idx) => {
            const Icon = serviceIcons[idx] || Code2;
            const isSelected = activeTab === idx;
            return (
              <div
                key={srv.id}
                onClick={() => {
                  setActiveTab(idx);
                  window.scrollTo({ top: 350, behavior: 'smooth' });
                }}
                className={`cursor-pointer rounded-2xl p-5 border transition-all duration-200 flex flex-col justify-between ${
                  isSelected
                    ? 'bg-blue-600 text-white border-blue-600 shadow-xl shadow-blue-500/20 scale-[1.03]'
                    : 'bg-white text-slate-900 border-slate-200/90 hover:border-blue-400 hover:shadow-lg'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className={`p-2 rounded-xl ${
                      isSelected ? 'bg-white/20 text-white' : 'bg-blue-50 text-blue-600'
                    }`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className={`text-[10px] font-black uppercase tracking-wider ${
                      isSelected ? 'text-cyan-200' : 'text-slate-400'
                    }`}>
                      {srv.number}
                    </span>
                  </div>

                  <h4 className="font-bold text-base leading-snug">{srv.title}</h4>
                  <p className={`text-xs mt-1 line-clamp-2 ${
                    isSelected ? 'text-blue-100' : 'text-slate-500'
                  }`}>
                    {srv.tagline}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100/20 flex items-center justify-between text-[11px] font-bold">
                  <span className={isSelected ? 'text-white' : 'text-blue-600'}>
                    Inspect Service
                  </span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </div>
              </div>
            );
          })}
        </div>
      </div>

    </div>
  );
}
