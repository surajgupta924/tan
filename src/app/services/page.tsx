import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { constructMetadata } from '@/lib/seo';
import InteractiveServices from '@/components/InteractiveServices';
import { 
  Sparkles, 
  ShieldCheck, 
  ArrowRight, 
  PhoneCall,
  Rocket
} from 'lucide-react';

export const metadata: Metadata = constructMetadata({
  title: 'Our Services | Innovative Technology. Powerful Solutions - Tansur Software',
  description: 'At Tansur Software Solutions, we help businesses grow with modern, scalable, and reliable technology solutions: Web Development, Custom Software, SaaS, Mobile Apps, AI Automation, CRM Integration, UI/UX Design, and Cloud DevOps.',
});

export default function ServicesPage() {
  return (
    <div className="bg-slate-50 min-h-screen py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center max-w-4xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-100/90 border border-blue-200 text-blue-900 text-xs font-bold uppercase tracking-wider mb-4 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-blue-600 animate-spin" />
            <span>Our Services</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-950 tracking-tight leading-tight">
            Innovative Technology.{' '}
            <span className="bg-gradient-to-r from-blue-700 via-blue-600 to-cyan-500 bg-clip-text text-transparent">
              Powerful Solutions.
            </span>
          </h1>

          <p className="mt-5 text-slate-600 text-base sm:text-xl leading-relaxed max-w-3xl mx-auto">
            At <strong>Tansur Software Solutions</strong>, we help businesses grow with modern, scalable, and reliable technology solutions tailored to their exact operational needs.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/book-demo"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-bold text-white bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 shadow-lg shadow-blue-500/25 transition-all transform hover:-translate-y-0.5 text-sm"
            >
              <span>Schedule Free Technology Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              href="/hire-developers"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold text-slate-800 bg-white hover:bg-slate-50 border border-slate-300 shadow-sm transition-all text-sm"
            >
              <span>Hire Dedicated Engineers</span>
            </Link>
          </div>
        </div>

        {/* Master Interactive Services Station */}
        <InteractiveServices />

        {/* Real Workspace Banner */}
        <div className="mt-20 relative rounded-3xl overflow-hidden shadow-xl mb-16 border-4 border-white bg-slate-900">
          <div className="relative h-64 sm:h-80 w-full">
            <Image
              src="/office-tansur.jpg"
              alt="Tansur Software Solutions Services Infrastructure"
              fill
              className="object-cover opacity-85"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/60 to-transparent"></div>
            
            <div className="absolute inset-0 p-8 sm:p-12 flex flex-col justify-center max-w-xl text-white">
              <span className="text-xs font-black uppercase tracking-widest text-cyan-400">
                End-To-End Development Lifecycle
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold mt-2">
                Scalable. Secure. Reliable.
              </h2>
              <p className="text-slate-300 text-xs sm:text-sm mt-3 leading-relaxed">
                From requirement discovery and responsive UI/UX to cloud deployment and ongoing maintenance, our team executes every phase with precision.
              </p>
            </div>
          </div>
        </div>

        {/* Direct Team Trust Section */}
        <div className="bg-white rounded-3xl border border-slate-200/90 p-8 sm:p-12 shadow-sm mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-5 space-y-4">
              <span className="text-xs font-black uppercase tracking-widest text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                Engineering Integrity
              </span>
              <h2 className="text-3xl font-extrabold text-slate-950">
                Direct Communication with Real In-House Developers
              </h2>
              <p className="text-slate-600 text-sm leading-relaxed">
                When you partner with Tansur Software Solutions, you do not talk to call-centers or intermediaries. You speak directly with our senior full-stack architects, designers, and project managers.
              </p>
              <div className="pt-2 space-y-2.5 text-xs font-semibold text-slate-700">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-500" />
                  <span>100% Code Ownership & Signed Legal NDAs</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-500" />
                  <span>Daily Sprint Updates & Dedicated Project Tracker</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-500" />
                  <span>Post-launch warranty & 24/7 emergency support</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="relative rounded-2xl overflow-hidden shadow-xl border-4 border-slate-100 h-72 sm:h-96 w-full">
                <Image
                  src="/team-tansur.jpg"
                  alt="Tansur Software Solutions In-House Engineering Team"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Consultation CTA */}
        <div className="bg-slate-900 rounded-3xl p-8 sm:p-14 text-white text-center max-w-4xl mx-auto shadow-2xl border border-slate-800">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Ready to Build Your Next Digital Product?
          </h2>
          <p className="mt-3 text-slate-300 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            Share your project brief with us. We will analyze your specifications and provide a detailed architecture proposal with transparent timelines within 24 hours.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-slate-900 bg-cyan-400 hover:bg-cyan-300 transition-all transform hover:scale-105 text-sm"
            >
              <span>Get Free Project Estimate</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '919876543210'}?text=${encodeURIComponent('Hi Tansur Software Solutions! I need a consultation for custom software / website development.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-4 rounded-xl font-bold text-white bg-emerald-600 hover:bg-emerald-700 transition-all text-sm"
            >
              <PhoneCall className="w-4 h-4" />
              <span>Connect on WhatsApp</span>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
