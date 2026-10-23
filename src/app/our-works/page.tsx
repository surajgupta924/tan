import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { constructMetadata } from '@/lib/seo';
import { WORK_PROJECTS } from '@/data/companyData';
import { Briefcase, ArrowRight, CheckCircle2, Sparkles, ExternalLink, ShieldCheck } from 'lucide-react';

export const metadata: Metadata = constructMetadata({
  title: 'Our Works & Case Studies | Tansur Software Solutions',
  description: 'Explore successful enterprise software implementations by Tansur Software Solutions: Housing Society ERPs, Payroll HRMS, School Campus Portals, and Travel Engines.',
});

export default function OurWorksPage() {
  return (
    <div className="bg-slate-50 min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-100/90 border border-blue-200 text-blue-900 text-xs font-bold uppercase tracking-wider mb-4">
            <Briefcase className="w-4 h-4 text-blue-600" />
            <span>Proven Track Record</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-slate-950 tracking-tight">
            Our Works & Enterprise Case Studies
          </h1>
          <p className="mt-4 text-slate-600 text-base sm:text-lg leading-relaxed">
            Discover how Tansur Software Solutions automates daily operations, eliminates revenue leakages, and scales digital infrastructure for organizations across India and globally.
          </p>
        </div>

        {/* Office Showcase Banner */}
        <div className="bg-white rounded-3xl border border-slate-200/90 p-8 sm:p-10 shadow-sm mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5 space-y-4">
              <span className="text-xs font-black text-blue-600 uppercase tracking-widest">Built In-House</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950">
                100% Engineering Rigor in Every Line of Code
              </h2>
              <p className="text-slate-600 text-sm leading-relaxed">
                From high-speed database queries to responsive mobile portals, all our systems undergo automated regression tests, security penetration audits, and load handling before deployment.
              </p>
              <div className="pt-2 flex items-center gap-4 text-xs font-bold text-slate-700">
                <span className="flex items-center gap-1.5"><ShieldCheck className="w-4 h-4 text-emerald-500" /> Zero Data Loss</span>
                <span className="flex items-center gap-1.5"><Sparkles className="w-4 h-4 text-cyan-500" /> Instant Cloud Rollouts</span>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="relative h-64 sm:h-80 w-full rounded-2xl overflow-hidden shadow-md">
                <Image
                  src="/office-tansur.jpg"
                  alt="Tansur Software Engineering Infrastructure"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Detailed Projects Grid */}
        <div className="space-y-12">
          {WORK_PROJECTS.map((proj, idx) => (
            <div
              key={proj.id}
              className="bg-white rounded-3xl border border-slate-200/90 shadow-md overflow-hidden hover:border-blue-400 transition-all p-8 sm:p-12"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                
                <div className="lg:col-span-7 space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="px-3.5 py-1 text-xs font-bold text-white bg-blue-600 rounded-full">
                      {proj.category}
                    </span>
                    <span className="text-xs font-semibold text-slate-500">
                      Client: {proj.client}
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-950">
                    {proj.title}
                  </h3>

                  <p className="text-xs font-bold text-cyan-600 uppercase tracking-wide">
                    {proj.tagline}
                  </p>

                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                    {proj.description}
                  </p>

                  {/* Impact Metric Card */}
                  <div className="p-4 rounded-2xl bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-100/80 flex items-center justify-between max-w-md">
                    <div>
                      <div className="text-3xl font-black text-blue-700">{proj.metric}</div>
                      <div className="text-xs font-semibold text-slate-600 mt-0.5">{proj.metricLabel}</div>
                    </div>
                    <div className="text-right">
                      <span className="text-[11px] font-bold text-emerald-600 uppercase tracking-wider block">Impact Achieved</span>
                      <span className="text-xs text-slate-500">Verified Client KPI</span>
                    </div>
                  </div>

                  {/* Tech stack */}
                  <div className="pt-2">
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-2">Technologies Used:</span>
                    <div className="flex flex-wrap gap-2">
                      {proj.technologies.map((t) => (
                        <span key={t} className="px-3 py-1 rounded-lg text-xs font-medium bg-slate-100 text-slate-700 border border-slate-200">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 flex items-center gap-4">
                    <Link
                      href={`/book-demo?product=${encodeURIComponent(proj.title)}`}
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 shadow-md transition-all"
                    >
                      <span>Request Live Architecture Demo</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>

                <div className="lg:col-span-5 relative h-72 sm:h-96 w-full rounded-2xl overflow-hidden shadow-lg border border-slate-100 bg-slate-100">
                  <Image
                    src={proj.image}
                    alt={proj.title}
                    fill
                    className="object-cover"
                  />
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 bg-slate-900 rounded-3xl p-8 sm:p-12 text-white text-center max-w-4xl mx-auto shadow-2xl">
          <h2 className="text-3xl font-extrabold text-white">Have a high-scale project in mind?</h2>
          <p className="mt-3 text-slate-300 text-sm sm:text-base max-w-xl mx-auto">
            Our technology team has built solutions managing thousands of users and millions in transactions. Let’s bring your concept to reality.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-slate-900 bg-cyan-400 hover:bg-cyan-300 transition-all transform hover:scale-105 text-sm"
            >
              <span>Discuss Your Software Idea</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
