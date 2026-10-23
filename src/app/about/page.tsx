import React from 'react';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { constructMetadata } from '@/lib/seo';
import { CheckCircle2, ShieldCheck, Target, HeartHandshake, Award, Sparkles, Building2, Users2, Rocket } from 'lucide-react';

export const metadata: Metadata = constructMetadata({
  title: 'About Us | Tansur Software Solutions - Ideas, Technology, Solutions, Growth',
  description: 'Learn about Tansur Software Solutions: our in-house engineering team, modern tech campus, core leadership values, and scalable enterprise products.',
});

export default function AboutPage() {
  return (
    <div className="bg-slate-50 min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-100/90 border border-blue-200 text-blue-900 text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkles className="w-4 h-4 text-blue-600" />
            <span>Company Overview & Engineering Culture</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-slate-950 tracking-tight">
            About Tansur Software Solutions
          </h1>
          <p className="mt-4 text-slate-600 text-base sm:text-lg leading-relaxed">
            Ideas • Technology • Solutions • Growth. We build resilient enterprise ERP systems and provide elite engineering talent to businesses worldwide.
          </p>
        </div>

        {/* Real Team Picture Spotlight */}
        <div className="bg-white rounded-3xl border border-slate-200/90 shadow-md p-8 sm:p-12 mb-16 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-6 space-y-5">
              <span className="text-xs font-black uppercase tracking-widest text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                Our Story & Vision
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 leading-tight">
                Empowering Businesses With Frictionless Digital Ecosystems
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Tansur Software Solutions was established to bridge the gap between heavy enterprise needs and intuitive, modern web speeds. We eliminate outdated spreadsheets, complex manual registers, and unreliable legacy software.
              </p>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                From our dedicated engineering floors, our full-stack teams build and maintain mission-critical applications: Housing Society automated billing ERPs, corporate biometric HRMS payroll calculation engines, smart educational campus ERPs, and global travel reservation systems.
              </p>

              <div className="pt-2 grid grid-cols-2 gap-4">
                <div className="p-4 rounded-2xl bg-blue-50 border border-blue-100">
                  <div className="text-3xl font-black text-blue-700">100%</div>
                  <div className="text-xs font-semibold text-slate-600 mt-1">In-House Code Rigor</div>
                </div>
                <div className="p-4 rounded-2xl bg-cyan-50 border border-cyan-100">
                  <div className="text-3xl font-black text-cyan-700">24/7</div>
                  <div className="text-xs font-semibold text-slate-600 mt-1">WhatsApp Tech Support</div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-slate-100 h-80 sm:h-[420px] w-full">
                <Image
                  src="/team-tansur.jpg"
                  alt="Tansur Software Solutions Team"
                  fill
                  priority
                  className="object-cover"
                />
              </div>
            </div>

          </div>
        </div>

        {/* Office Infrastructure Showcase */}
        <div className="bg-slate-900 rounded-3xl p-8 sm:p-12 text-white mb-16 shadow-2xl border border-slate-800">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6 relative h-72 sm:h-96 w-full rounded-2xl overflow-hidden shadow-lg border border-slate-700">
              <Image
                src="/office-tansur.jpg"
                alt="Tansur Software Solutions Office Infrastructure"
                fill
                className="object-cover"
              />
            </div>

            <div className="lg:col-span-6 space-y-5">
              <span className="text-xs font-bold uppercase tracking-widest text-cyan-400">
                State-of-the-Art Workspace
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                Scalable, Secure & Reliable Operations
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Our infrastructure is built for high availability and strict data confidentiality. With dedicated server bays, high-speed fiber backbones, and agile meeting rooms, our developers stay focused on building the best code possible.
              </p>

              <div className="space-y-3 pt-2 text-xs text-slate-300">
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>Dual redundant internet connectivity & 100% power backup</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>Continuous security monitoring & encrypted source code repositories</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>Client sprint war-rooms for seamless live product demos</span>
                </div>
              </div>

              <div className="pt-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-slate-900 bg-cyan-400 hover:bg-cyan-300 transition-all text-xs"
                >
                  <span>Visit Our Office / Meet Us</span>
                  <Rocket className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* 3 Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-8 rounded-3xl border border-slate-200/90 shadow-sm">
            <div className="w-12 h-12 rounded-2xl bg-blue-100 text-blue-600 flex items-center justify-center mb-6">
              <Target className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-950 mb-2">Build With Speed</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              We leverage modern Next.js 15, Turbopack, and MongoDB to deliver sub-second response times across every user interface.
            </p>
          </div>

          <div className="bg-white p-8 rounded-3xl border border-slate-200/90 shadow-sm">
            <div className="w-12 h-12 rounded-2xl bg-cyan-100 text-cyan-600 flex items-center justify-center mb-6">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-950 mb-2">Uncompromised Security</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Every database, API endpoint, and authentication layer adheres to 256-bit encryption, role-based controls, and automated backups.
            </p>
          </div>

          <div className="bg-white p-8 rounded-3xl border border-slate-200/90 shadow-sm">
            <div className="w-12 h-12 rounded-2xl bg-indigo-100 text-indigo-600 flex items-center justify-center mb-6">
              <HeartHandshake className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-950 mb-2">Client Partnership</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              We provide continuous post-deployment training, WhatsApp support channels, and dedicated upgrade cycles as your business expands.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
