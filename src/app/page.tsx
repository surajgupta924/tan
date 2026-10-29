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
  Star,
  MapPin
} from 'lucide-react';
import ProductCard from '@/components/ProductCard';
import ContactForm from '@/components/ContactForm';
import { INITIAL_PRODUCTS } from '@/data/products';
import { WORK_PROJECTS, DEVELOPER_ROLES } from '@/data/companyData';
import { OFFICIAL_SERVICES } from '@/data/servicesData';

export default function HomePage() {
  return (
    <div className="relative overflow-hidden bg-slate-50">
      
      {/* 1. HERO SECTION OPTIMIZED FOR BEST SOFTWARE DEVELOPMENT COMPANY IN LUCKNOW */}
      <section className="relative pt-8 pb-20 lg:pt-16 lg:pb-28 overflow-hidden bg-gradient-to-b from-blue-50/80 via-white to-slate-50">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[450px] bg-gradient-to-tr from-blue-400/20 via-cyan-300/20 to-indigo-300/10 blur-3xl -z-10 pointer-events-none rounded-full"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-100/90 border border-blue-200 text-blue-900 text-xs font-bold uppercase tracking-wider shadow-xs">
                <MapPin className="w-3.5 h-3.5 text-blue-600" />
                <span>#1 Best Software Development Company in Lucknow</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-950 tracking-tight leading-[1.12]">
                Best Software Development Company in Lucknow —{' '}
                <span className="bg-gradient-to-r from-blue-700 via-blue-600 to-cyan-500 bg-clip-text text-transparent">
                  Tansur Software Solutions
                </span>
              </h1>

              <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
                Recognized as the premier <strong>software development company in Lucknow</strong>, we engineer mission-critical enterprise software: <strong>Real Estate CRM ERP</strong>, <strong>Society Management Software</strong>, <strong>Biometric Payroll HRMS</strong>, <strong>School ERP</strong>, and high-performance Next.js web applications with dedicated full-stack developers.
              </p>

              {/* CTAs */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <Link
                  href="/book-demo"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-2xl text-base font-bold text-white bg-gradient-to-r from-blue-600 via-blue-700 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 shadow-xl shadow-blue-600/30 hover:shadow-2xl transition-all transform hover:-translate-y-0.5"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Book Free Live Demo</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  href="/services"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-2xl text-base font-bold text-slate-800 bg-white hover:bg-slate-50 border border-slate-300/80 shadow-xs hover:border-blue-400 transition-all"
                >
                  <Code className="w-4 h-4 text-blue-600" />
                  <span>Explore All Services</span>
                </Link>
              </div>

              {/* Tech Stack Bar */}
              <div className="pt-6 border-t border-slate-200/80">
                <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-3 text-center lg:text-left">
                  Trusted by 50+ businesses in Lucknow, UP & globally:
                </p>
                <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5">
                  {['Next.js 15', 'React 19', 'Node.js', 'MongoDB', 'PostgreSQL', 'Tailwind CSS', 'WhatsApp Cloud API', 'AWS Cloud'].map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-lg text-xs font-bold bg-white border border-slate-200/90 text-slate-700 shadow-2xs"
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
                    alt="Best Software Development Company in Lucknow - Tansur Software Team"
                    fill
                    priority
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
                  
                  <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-white/95 backdrop-blur-md border border-white/60 shadow-lg text-slate-900">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <div className="w-3 h-3 rounded-full bg-emerald-500 animate-ping"></div>
                        <span className="text-xs font-black uppercase tracking-wider text-slate-800">
                          Tansur Engineering HQ
                        </span>
                      </div>
                      <span className="text-[11px] font-bold text-blue-700 bg-blue-50 px-2 py-0.5 rounded-full">
                        Lucknow & Noida
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

      {/* 2. SERVICES PORTFOLIO HIGHLIGHT (SAME SUBMENU CARDS) */}
      <section className="py-20 bg-white border-y border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <span className="text-xs font-black uppercase tracking-widest text-blue-600">
                End-To-End IT Services in Lucknow
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 mt-2 tracking-tight">
                Complete Technology & Digital Services Under One Roof
              </h2>
            </div>
            <Link
              href="/services"
              className="mt-4 md:mt-0 inline-flex items-center gap-2 text-sm font-bold text-blue-600 hover:text-blue-700 group"
            >
              <span>Explore services breakdown</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {OFFICIAL_SERVICES.map((srv) => (
              <Link
                key={srv.id}
                href={`/services/${srv.slug}`}
                className="group bg-slate-50/80 hover:bg-white rounded-3xl p-6 border border-slate-200/90 hover:border-blue-400 hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-black text-blue-600 bg-blue-50 px-2.5 py-0.5 rounded-full">
                      {srv.number}
                    </span>
                    <span className="text-[10px] font-bold text-cyan-700 bg-cyan-50 px-2 py-0.5 rounded-full">
                      {srv.badge}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                    {srv.title}
                  </h3>

                  <p className="text-xs text-slate-500 mt-2 line-clamp-3 leading-relaxed">
                    {srv.description}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-200/60 flex items-center justify-between text-xs font-bold text-blue-600">
                  <span>Learn More</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 3. PRODUCTS GRID */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <span className="text-xs font-black uppercase tracking-widest text-blue-600">
                Software Products Portfolio
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 mt-2 tracking-tight">
                Ready-to-Deploy Enterprise Software Solutions
              </h2>
            </div>
            <Link
              href="/products"
              className="mt-4 md:mt-0 inline-flex items-center gap-2 text-sm font-bold text-blue-600 hover:text-blue-700 group"
            >
              <span>View all software products</span>
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

      {/* 4. REAL OFFICE COLLAGE & INFRASTRUCTURE */}
      <section className="py-20 bg-white border-y border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-5 space-y-5">
              <span className="text-xs font-black uppercase tracking-widest text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
                State of the Art Facilities
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
                Leading IT Software Innovation from Lucknow & Noida
              </h2>
              <p className="text-slate-600 text-sm leading-relaxed">
                Take a look inside our development center with dedicated cloud server bays, sprint war rooms, and agile dual-monitor engineer desks.
              </p>
              
              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                  <span className="text-xs font-semibold text-slate-800">
                    Full in-house developers with zero third-party outsourcing
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                  <span className="text-xs font-semibold text-slate-800">
                    Daily sprint updates with direct Slack / WhatsApp team access
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                  <span className="text-xs font-semibold text-slate-800">
                    Signed non-disclosure agreements (NDAs) ensuring 100% IP security
                  </span>
                </div>
              </div>

              <div className="pt-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 text-sm font-bold text-blue-600 hover:text-blue-700"
                >
                  <span>Schedule meeting at our Lucknow campus</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="relative rounded-3xl overflow-hidden shadow-xl border-4 border-slate-100">
                <div className="relative h-80 sm:h-[400px] w-full">
                  <Image
                    src="/office-tansur.jpg"
                    alt="Best Software Development Company in Lucknow Workspace - Tansur Software Solutions"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 5. CONTACT & LEAD INTAKE */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-900 rounded-3xl border border-slate-800 shadow-2xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12">
              
              <div className="lg:col-span-5 bg-gradient-to-br from-blue-700 via-blue-800 to-slate-950 p-8 sm:p-12 text-white flex flex-col justify-between">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-cyan-300">
                    Direct Client Partnership
                  </span>
                  <h3 className="text-3xl font-black mt-2 tracking-tight">
                    Partner with the Top Software Company in Lucknow
                  </h3>
                  <p className="mt-4 text-blue-100 text-sm leading-relaxed">
                    Discuss your project specifications with our lead software architects. Receive a detailed architecture roadmap and price quotation within 24 hours.
                  </p>

                  <div className="mt-8 space-y-4 text-sm text-blue-100">
                    <div className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-cyan-300 flex-shrink-0" />
                      <span>Direct WhatsApp coordination & alerts</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-cyan-300 flex-shrink-0" />
                      <span>Custom demo with your sample data</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-cyan-300 flex-shrink-0" />
                      <span>Detailed implementation quote & timeline</span>
                    </div>
                  </div>
                </div>

                <div className="mt-10 pt-6 border-t border-blue-600/50">
                  <p className="text-xs text-blue-200 uppercase font-semibold">Lucknow & National Hotline</p>
                  <p className="text-xl font-extrabold text-white mt-1">+91 98765 43210</p>
                </div>
              </div>

              <div className="lg:col-span-7 p-8 sm:p-12 bg-white">
                <h4 className="text-2xl font-bold text-slate-900 mb-6">
                  Tell Us About Your Project Requirements
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
