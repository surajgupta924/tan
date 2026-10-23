import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  ArrowRight, 
  ShieldCheck, 
  Zap, 
  Cpu, 
  Users, 
  Building2, 
  GraduationCap, 
  PlaneTakeoff, 
  Calculator, 
  CheckCircle2, 
  Clock, 
  Award,
  Sparkles,
  Code,
  Laptop,
  Check,
  Star
} from 'lucide-react';
import ProductCard from '@/components/ProductCard';
import ContactForm from '@/components/ContactForm';
import { INITIAL_PRODUCTS } from '@/data/products';
import { WORK_PROJECTS, DEVELOPER_ROLES } from '@/data/companyData';

export default function HomePage() {
  return (
    <div className="relative overflow-hidden bg-slate-50">
      
      {/* 1. HERO SECTION WITH PROMINENT TANSUR SOFTWARE REAL BRANDING & PHOTO */}
      <section className="relative pt-8 pb-20 lg:pt-16 lg:pb-28 overflow-hidden bg-gradient-to-b from-blue-50/80 via-white to-slate-50">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[450px] bg-gradient-to-tr from-blue-400/20 via-cyan-300/20 to-indigo-300/10 blur-3xl -z-10 pointer-events-none rounded-full"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-100/90 border border-blue-200 text-blue-900 text-xs font-bold uppercase tracking-wider shadow-sm">
                <Sparkles className="w-3.5 h-3.5 text-blue-600 animate-spin" />
                <span>Next-Gen Enterprise Software & ERP Systems</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-950 tracking-tight leading-[1.12]">
                Build, Innovate & Grow with{' '}
                <span className="bg-gradient-to-r from-blue-700 via-blue-600 to-cyan-500 bg-clip-text text-transparent">
                  Tansur Software Solutions
                </span>
              </h1>

              <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
                We design and engineer enterprise-grade software products — from <strong>Real Estate Society ERP</strong> and <strong>Biometric Payroll HRMS</strong> to <strong>School ERP</strong> and <strong>Travel Booking Engines</strong>. Hire dedicated developers or deploy turnkey cloud solutions.
              </p>

              {/* CTAs */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <Link
                  href="/book-demo"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-2xl text-base font-bold text-white bg-gradient-to-r from-blue-600 via-blue-700 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 shadow-xl shadow-blue-600/30 hover:shadow-2xl hover:shadow-blue-600/40 transition-all transform hover:-translate-y-0.5"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Book Free Live Demo</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  href="/hire-developers"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-2xl text-base font-bold text-slate-800 bg-white hover:bg-slate-50 border border-slate-300/80 shadow-sm hover:border-blue-400 transition-all"
                >
                  <Code className="w-4 h-4 text-blue-600" />
                  <span>Hire Dedicated Developers</span>
                </Link>
              </div>

              {/* Tech Stack Bar matching the real photo */}
              <div className="pt-6 border-t border-slate-200/80">
                <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-3 text-center lg:text-left">
                  Engineered using industry-leading stacks:
                </p>
                <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5">
                  {['Next.js 15', 'React 19', 'Node.js', 'MongoDB', 'PostgreSQL', 'Tailwind CSS', 'WhatsApp Cloud API', 'AWS Cloud'].map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-lg text-xs font-bold bg-white border border-slate-200/90 text-slate-700 shadow-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

            </div>

            {/* Right: Actual Tansur Software Office & Team Visual */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto rounded-3xl overflow-hidden shadow-2xl border-4 border-white/80 group">
                <div className="relative h-80 sm:h-[420px] w-full">
                  <Image
                    src="/team-tansur.jpg"
                    alt="Tansur Software Solutions Team at Office"
                    fill
                    priority
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
                  
                  {/* Floating Overlay Badge */}
                  <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-white/95 backdrop-blur-md border border-white/60 shadow-lg text-slate-900">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <div className="w-3 h-3 rounded-full bg-emerald-500 animate-ping"></div>
                        <span className="text-xs font-black uppercase tracking-wider text-slate-800">
                          Tansur Core Engineering Team
                        </span>
                      </div>
                      <span className="text-[11px] font-bold text-blue-700 bg-blue-50 px-2 py-0.5 rounded-full">
                        In-House HQ
                      </span>
                    </div>
                    <p className="text-xs text-slate-600 mt-1 font-medium">
                      Ideas • Technology • Solutions • Growth
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. REAL TANSUR OFFICE & WORKSPACE COLLAGE SHOWCASE */}
      <section className="py-16 bg-white border-y border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-5 space-y-5">
              <span className="text-xs font-black uppercase tracking-widest text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
                Inside Tansur Software
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
                Scalable, Secure, Reliable Technology Delivered
              </h2>
              <p className="text-slate-600 text-sm leading-relaxed">
                Take a look at our state-of-the-art office infrastructure, dedicated server racks, sprint meeting rooms, and high-performance developer setups.
              </p>
              
              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                  <span className="text-xs font-semibold text-slate-800">
                    Dedicated agile development desks with dual-monitor workstation environments
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                  <span className="text-xs font-semibold text-slate-800">
                    Enterprise server hosting with cloud-powered scalable architectures
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                  <span className="text-xs font-semibold text-slate-800">
                    Collaborative conference rooms for sprint planning & product walkthroughs
                  </span>
                </div>
              </div>

              <div className="pt-4">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 text-sm font-bold text-blue-600 hover:text-blue-700"
                >
                  <span>Learn more about our company culture</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="relative rounded-3xl overflow-hidden shadow-xl border-4 border-slate-100">
                <div className="relative h-80 sm:h-[400px] w-full">
                  <Image
                    src="/office-tansur.jpg"
                    alt="Tansur Software Solutions Office Collage"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. OUR SOFTWARE PRODUCTS GRID */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <span className="text-xs font-black uppercase tracking-widest text-blue-600">
                Ready-to-Deploy Products
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 mt-2 tracking-tight">
                Turnkey Software Solutions for Your Business
              </h2>
            </div>
            <Link
              href="/products"
              className="mt-4 md:mt-0 inline-flex items-center gap-2 text-sm font-bold text-blue-600 hover:text-blue-700 group"
            >
              <span>Explore all enterprise products</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {INITIAL_PRODUCTS.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* 4. HIRE DEDICATED DEVELOPERS SECTION */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 rounded-3xl p-8 sm:p-14 text-white shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-400/20 text-cyan-300 text-xs font-bold uppercase tracking-wider border border-cyan-400/30">
                  <Code className="w-3.5 h-3.5" />
                  Staff Augmentation & Dedicated Hiring
                </div>

                <h3 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                  Hire Pre-Vetted Next.js & Full-Stack Developers in 48 Hours
                </h3>

                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  Scale your product team without the friction of lengthy hiring cycles. Our senior in-house developers work in your time zone with daily standups and transparent git commits.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div className="flex items-center gap-2 text-xs font-semibold text-slate-200">
                    <Check className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                    <span>Risk-Free 7-Day Trial Period</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-semibold text-slate-200">
                    <Check className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                    <span>Direct Slack / Teams Communication</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-semibold text-slate-200">
                    <Check className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                    <span>Strict Non-Disclosure Agreement (NDA)</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-semibold text-slate-200">
                    <Check className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                    <span>Full Code Ownership from Day 1</span>
                  </div>
                </div>

                <div className="pt-4 flex flex-wrap gap-4">
                  <Link
                    href="/hire-developers"
                    className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-bold text-slate-900 bg-cyan-400 hover:bg-cyan-300 shadow-lg shadow-cyan-400/20 transition-all transform hover:scale-105 text-sm"
                  >
                    <span>Hire Dedicated Engineers</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>

                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 text-sm"
                  >
                    <span>Request Developer Resumes</span>
                  </Link>
                </div>
              </div>

              {/* Roles Summary Cards */}
              <div className="lg:col-span-5 space-y-3">
                {DEVELOPER_ROLES.slice(0, 3).map((role, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-cyan-400/50 transition-all"
                  >
                    <div className="flex items-center justify-between">
                      <h4 className="text-sm font-bold text-white">{role.title}</h4>
                      <span className="text-[10px] font-bold text-cyan-300 bg-cyan-950/80 px-2 py-0.5 rounded-full border border-cyan-800">
                        {role.experience}
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-1.5 mt-2.5">
                      {role.skills.slice(0, 4).map((s) => (
                        <span key={s} className="text-[10px] bg-slate-800 text-slate-300 px-2 py-0.5 rounded-md">
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* 5. CASE STUDIES / OUR WORKS PREVIEW */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <span className="text-xs font-black uppercase tracking-widest text-blue-600">
                Track Record of Success
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 mt-2 tracking-tight">
                Featured Works & Enterprise Case Studies
              </h2>
            </div>
            <Link
              href="/our-works"
              className="mt-4 md:mt-0 inline-flex items-center gap-2 text-sm font-bold text-blue-600 hover:text-blue-700"
            >
              <span>View all client case studies</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {WORK_PROJECTS.slice(0, 2).map((work) => (
              <div
                key={work.id}
                className="bg-white rounded-3xl border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-blue-400 transition-all overflow-hidden flex flex-col justify-between"
              >
                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-extrabold text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                      {work.category}
                    </span>
                    <span className="text-xs font-bold text-slate-500">{work.client}</span>
                  </div>

                  <h3 className="text-2xl font-bold text-slate-950 mb-2">{work.title}</h3>
                  <p className="text-xs font-semibold text-cyan-600 mb-3">{work.tagline}</p>
                  <p className="text-slate-600 text-sm leading-relaxed mb-6">{work.description}</p>

                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-between">
                    <div>
                      <div className="text-2xl font-black text-blue-700">{work.metric}</div>
                      <div className="text-xs font-semibold text-slate-500">{work.metricLabel}</div>
                    </div>
                    <div className="flex flex-wrap gap-1.5 max-w-[200px] justify-end">
                      {work.technologies.slice(0, 3).map((t) => (
                        <span key={t} className="text-[10px] bg-white border border-slate-200 px-2 py-0.5 rounded-md text-slate-700">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="px-8 pb-6 pt-2 border-t border-slate-100 flex items-center justify-between">
                  <Link
                    href="/our-works"
                    className="text-xs font-bold text-blue-600 hover:text-blue-700 flex items-center gap-1"
                  >
                    <span>Read full case study</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                  <Link
                    href="/book-demo"
                    className="text-xs font-bold text-cyan-600 hover:underline"
                  >
                    Request similar build
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. BOOK DEMO & CONTACT SECTION */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-900 rounded-3xl border border-slate-800 shadow-2xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12">
              
              <div className="lg:col-span-5 bg-gradient-to-br from-blue-700 via-blue-800 to-slate-950 p-8 sm:p-12 text-white flex flex-col justify-between">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-cyan-300">
                    Direct Client Partnership
                  </span>
                  <h3 className="text-3xl font-black mt-2 tracking-tight">
                    Schedule a Free 1-on-1 Product Walkthrough
                  </h3>
                  <p className="mt-4 text-blue-100 text-sm leading-relaxed">
                    Choose any software product or tell us your custom project needs. Our senior consultants will give you an interactive live screen walkthrough.
                  </p>

                  <div className="mt-8 space-y-4 text-sm text-blue-100">
                    <div className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-cyan-300 flex-shrink-0" />
                      <span>Direct WhatsApp coordination & alerts</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-cyan-300 flex-shrink-0" />
                      <span>Custom demo setup with your sample data</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-cyan-300 flex-shrink-0" />
                      <span>Detailed implementation quote & timeline</span>
                    </div>
                  </div>
                </div>

                <div className="mt-10 pt-6 border-t border-blue-600/50">
                  <p className="text-xs text-blue-200 uppercase font-semibold">Instant Inquiries Hotline</p>
                  <p className="text-xl font-extrabold text-white mt-1">+91 98765 43210</p>
                </div>
              </div>

              <div className="lg:col-span-7 p-8 sm:p-12 bg-white">
                <h4 className="text-2xl font-bold text-slate-900 mb-6">
                  Tell Us About Your Requirement
                </h4>
                <ContactForm isDemo={true} />
              </div>

            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
