'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { DeveloperRole, DEVELOPER_ROLES } from '@/data/companyData';
import ContactForm from '@/components/ContactForm';
import { 
  Code2, 
  CheckCircle2, 
  Sparkles, 
  ArrowRight, 
  Clock, 
  ShieldCheck, 
  Laptop, 
  Zap, 
  Users, 
  Loader2 
} from 'lucide-react';

export default function HireDevelopersClient() {
  const [roles, setRoles] = useState<DeveloperRole[]>(DEVELOPER_ROLES);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/developers')
      .then(res => res.json())
      .then(data => {
        if (data.success && Array.isArray(data.data) && data.data.length > 0) {
          setRoles(data.data);
        }
      })
      .catch(e => console.error('Error fetching developers:', e))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="bg-slate-50 min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-100/90 border border-blue-200 text-blue-900 text-xs font-bold uppercase tracking-wider mb-4">
            <Code2 className="w-4 h-4 text-blue-600" />
            <span>Dedicated Tech Talent</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-slate-950 tracking-tight leading-tight">
            Hire World-Class Dedicated Developers in{' '}
            <span className="bg-gradient-to-r from-blue-700 via-blue-600 to-cyan-500 bg-clip-text text-transparent">
              Under 48 Hours
            </span>
          </h1>
          <p className="mt-4 text-slate-600 text-base sm:text-lg leading-relaxed">
            Eliminate traditional hiring friction. Partner directly with Tansur Software Solutions to hire full-time or project-based engineers proficient in Next.js, React, Node.js, MongoDB, and AWS.
          </p>
        </div>

        {/* Real Team Visual Banner */}
        <div className="relative rounded-3xl overflow-hidden shadow-xl mb-16 border-4 border-white bg-slate-900">
          <div className="relative h-72 sm:h-96 w-full">
            <Image
              src="/team-tansur.jpg"
              alt="Tansur Software Solutions Dedicated Developers Team"
              fill
              className="object-cover opacity-90"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/60 to-transparent"></div>
            
            <div className="absolute inset-0 p-8 sm:p-12 flex flex-col justify-center max-w-xl text-white">
              <span className="text-xs font-black uppercase tracking-widest text-cyan-400">
                In-House Engineering Excellence
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold mt-2">
                Top 3% Vetted Full-Stack Talent Working As Your Extended Team
              </h2>
              <p className="text-slate-300 text-xs sm:text-sm mt-3 leading-relaxed">
                Direct Slack/Teams access, daily standups, GitHub pull requests, and automated testing pipelines. No middleman agencies.
              </p>
            </div>
          </div>
        </div>

        {/* Developer Roles List - Dynamic from API/Database */}
        <div className="mb-16">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-blue-600">Available Profiles ({roles.length})</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 mt-1">
                Engineering Roles Available for Immediate Onboarding
              </h2>
            </div>
          </div>

          {loading ? (
            <div className="py-12 flex items-center justify-center gap-3 text-slate-400">
              <Loader2 className="w-6 h-6 animate-spin text-blue-600" />
              <span>Loading developer roster...</span>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {roles.map((role, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-3xl border border-slate-200/90 p-8 shadow-sm hover:shadow-xl hover:border-blue-400 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="px-3 py-1 rounded-full text-xs font-bold text-white bg-blue-600">
                        {role.experience}
                      </span>
                      <span className="px-3 py-0.5 rounded-full text-xs font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200">
                        ● {role.availability}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-slate-950 mb-2">{role.title}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed mb-6">{role.description}</p>

                    <div className="mb-6">
                      <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-2">
                        Core Technology Stack:
                      </span>
                      <div className="flex flex-wrap gap-2">
                        {role.skills.map((skill) => (
                          <span
                            key={skill}
                            className="px-2.5 py-1 rounded-lg text-xs font-semibold bg-slate-100 text-slate-800 border border-slate-200"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="pt-5 border-t border-slate-100 flex items-center justify-between">
                    <div className="text-xs text-slate-500">
                      <strong className="text-slate-800 block">Engagement Model:</strong>
                      {role.engagement}
                    </div>
                    <Link
                      href={`/contact?hire=${encodeURIComponent(role.title)}`}
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 shadow-md transition-all"
                    >
                      <span>Hire This Profile</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Why Hire From Tansur Software */}
        <div className="bg-white rounded-3xl border border-slate-200 p-8 sm:p-12 shadow-sm mb-16">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600">The Tansur Advantage</span>
            <h3 className="text-3xl font-extrabold text-slate-950 mt-1">Why Companies Scale With Our Engineers</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100">
              <Zap className="w-8 h-8 text-blue-600 mb-3" />
              <h4 className="font-bold text-base text-slate-900 mb-1">Zero Overhead & Risk</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                No recruitment fees, payroll complexities, or hardware provisioning costs. We manage everything end-to-end.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100">
              <ShieldCheck className="w-8 h-8 text-emerald-600 mb-3" />
              <h4 className="font-bold text-base text-slate-900 mb-1">Strict IP Protection & NDAs</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                You retain 100% intellectual property rights and code ownership from day one under legal corporate NDAs.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100">
              <Clock className="w-8 h-8 text-cyan-600 mb-3" />
              <h4 className="font-bold text-base text-slate-900 mb-1">Timezone Overlap</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Our developers work seamlessly with teams in India (IST), Middle East (GST), Europe (CET), and US (EST/PST).
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
