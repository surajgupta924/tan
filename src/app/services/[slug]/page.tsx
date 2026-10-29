import React from 'react';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { OFFICIAL_SERVICES } from '@/data/servicesData';
import { constructMetadata } from '@/lib/seo';
import ContactForm from '@/components/ContactForm';
import { 
  CheckCircle2, 
  ArrowLeft, 
  ShieldCheck, 
  Zap, 
  Sparkles, 
  Layers, 
  Clock, 
  MessageSquare,
  Users,
  ChevronRight,
  Check,
  PhoneCall,
  Rocket
} from 'lucide-react';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return OFFICIAL_SERVICES.map((srv) => ({
    slug: srv.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const srv = OFFICIAL_SERVICES.find((s) => s.slug === slug);
  if (!srv) return constructMetadata({ title: 'Service Not Found' });

  return constructMetadata({
    title: `${srv.title} - Innovative Technology & Engineering | Tansur Software Solutions`,
    description: `${srv.tagline}. ${srv.description}`,
    keywords: [
      srv.title,
      `${srv.title} company India`,
      `${srv.title} Noida Bengaluru`,
      'Tansur Software Solutions services',
      'enterprise digital transformation'
    ]
  });
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const srv = OFFICIAL_SERVICES.find((s) => s.slug === slug);

  if (!srv) {
    notFound();
  }

  const waNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '919876543210';
  const waText = encodeURIComponent(
    `Hello Tansur Software! I am interested in getting a project proposal and quotation for *${srv.title}*.`
  );

  return (
    <div className="bg-slate-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb Navigation */}
        <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 mb-8">
          <Link href="/" className="hover:text-blue-600 transition-colors">Home</Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <Link href="/services" className="hover:text-blue-600 transition-colors">Services</Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <span className="text-blue-600 font-bold truncate">{srv.title}</span>
        </div>

        {/* Hero Banner for this Service */}
        <div className="bg-white rounded-3xl border border-slate-200/90 shadow-xl overflow-hidden p-8 sm:p-12 mb-12 relative">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-100/40 to-cyan-100/40 rounded-full blur-3xl -z-10 pointer-events-none"></div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-7 space-y-5">
              <div className="flex flex-wrap items-center gap-2.5">
                <span className="px-3.5 py-1 text-xs font-black text-white bg-blue-600 rounded-full shadow-xs">
                  Service {srv.number}
                </span>
                <span className="px-3 py-1 text-xs font-bold text-cyan-800 bg-cyan-50 border border-cyan-200 rounded-full">
                  ★ {srv.badge}
                </span>
                <span className="text-xs font-semibold text-emerald-600 flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span> Active Engineering Desk
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight leading-tight">
                {srv.title}
              </h1>

              <p className="text-base sm:text-lg font-bold text-cyan-700">
                {srv.tagline}
              </p>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                {srv.description}
              </p>

              {/* Action Buttons */}
              <div className="pt-3 flex flex-wrap items-center gap-4">
                <a
                  href={`https://wa.me/${waNumber}?text=${waText}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-bold text-white bg-emerald-600 hover:bg-emerald-700 shadow-lg shadow-emerald-600/25 transition-all transform hover:-translate-y-0.5 text-sm"
                >
                  <MessageSquare className="w-4 h-4 fill-white text-emerald-600" />
                  <span>Discuss on WhatsApp</span>
                </a>

                <Link
                  href={`/contact?service=${encodeURIComponent(srv.title)}`}
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-bold text-white bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 shadow-md transition-all text-sm"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Request Custom Proposal</span>
                </Link>
              </div>

              <div className="pt-4 text-xs font-medium text-slate-500">
                <strong className="text-slate-800 font-bold">Ideal For:</strong> {srv.idealFor}
              </div>
            </div>

            {/* Right: Authentic Workspace Image */}
            <div className="lg:col-span-5 relative h-72 sm:h-[360px] w-full rounded-3xl overflow-hidden border-4 border-slate-100 shadow-2xl group">
              <Image
                src="/office-tansur.jpg"
                alt="Tansur Software Engineering Infrastructure"
                fill
                priority
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent"></div>
              
              <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-2xl bg-white/95 backdrop-blur-md border border-white/60 shadow-lg text-slate-900">
                <span className="text-[10px] font-black uppercase tracking-wider text-blue-600">Engineering Rigor</span>
                <p className="text-xs font-bold text-slate-900 mt-0.5 line-clamp-1">{srv.title}</p>
              </div>
            </div>

          </div>
        </div>

        {/* Feature Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {srv.features.map((feat, fIdx) => (
            <div key={fIdx} className="bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-8 shadow-sm hover:border-blue-400 transition-all">
              <div className="flex items-start gap-4">
                <div className="p-2.5 rounded-2xl bg-blue-50 text-blue-600 flex-shrink-0 mt-0.5">
                  <Zap className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900 mb-1">{feat.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{feat.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Deliverables & Form Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          <div className="lg:col-span-7 space-y-8">
            {/* Deliverables Card */}
            <div className="bg-white rounded-3xl border border-slate-200/90 p-8 shadow-sm">
              <h3 className="text-xl font-black text-slate-900 mb-6 flex items-center gap-2.5">
                <Layers className="w-5 h-5 text-blue-600" />
                Key Deliverables & What We Build:
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {srv.points.map((p, pIdx) => (
                  <div key={pIdx} className="flex items-start gap-3 p-3.5 rounded-2xl bg-slate-50 border border-slate-100">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                    <span className="text-xs font-bold text-slate-800 leading-snug">{p}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-slate-100">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-3">Project Deliverables Included:</span>
                <div className="flex flex-wrap gap-2">
                  {srv.deliverables.map((item, dIdx) => (
                    <span key={dIdx} className="px-3 py-1 bg-blue-50 text-blue-800 font-semibold rounded-lg text-xs border border-blue-200/60">
                      ✓ {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* In-House Guarantee */}
            <div className="bg-slate-900 text-white rounded-3xl p-8 border border-slate-800 shadow-xl flex items-center gap-6">
              <ShieldCheck className="w-12 h-12 text-cyan-400 flex-shrink-0" />
              <div>
                <h4 className="text-base font-bold text-white">100% In-House Developers & Strict NDA</h4>
                <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                  Your project is executed exclusively by our in-house engineering team with zero third-party outsourcing. Full code ownership transferred upon project milestone completion.
                </p>
              </div>
            </div>
          </div>

          {/* Right Form Sticky */}
          <div className="lg:col-span-5">
            <div className="sticky top-28 bg-white rounded-3xl border border-slate-200/90 p-8 shadow-2xl">
              <div className="mb-6 pb-4 border-b border-slate-100">
                <span className="text-xs font-black uppercase tracking-wider text-blue-600">
                  Quick Consultation
                </span>
                <h3 className="text-2xl font-black text-slate-950 mt-1">
                  Request {srv.shortTitle} Proposal
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  Get a tailored technical plan and price estimate within 24 hours.
                </p>
              </div>

              <ContactForm defaultProduct={srv.title} isDemo={false} />
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
