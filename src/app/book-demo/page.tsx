'use client';

import React, { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import ContactForm from '@/components/ContactForm';
import { Sparkles, CheckCircle2, ShieldCheck, Zap } from 'lucide-react';

function BookDemoContent() {
  const searchParams = useSearchParams();
  const requestedProduct = searchParams.get('product') || '';

  return (
    <div className="bg-slate-50 min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100/80 border border-blue-200 text-blue-800 text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            Live Guided Experience
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-slate-950 tracking-tight">
            Schedule a Free Interactive Live Demo
          </h1>
          <p className="mt-4 text-slate-600 text-base sm:text-lg leading-relaxed">
            See our software live in action. Discover how Society ERP, Payroll HRMS, School Automation, or Travel ERP can save hours every single week.
          </p>
        </div>

        <div className="max-w-4xl mx-auto bg-white rounded-3xl border border-slate-200/80 shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-12">
            
            {/* Left side benefits */}
            <div className="md:col-span-5 bg-gradient-to-br from-blue-700 to-cyan-700 p-8 text-white flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-black mb-4">What to expect:</h3>
                
                <div className="space-y-4 text-sm text-blue-100">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-cyan-300 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white block">Tailored 20-min session</strong>
                      Focused strictly on your business pain points.
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-cyan-300 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white block">WhatsApp Integration Test</strong>
                      See how automated messages reach you live.
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-cyan-300 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white block">Transparent Pricing</strong>
                      Custom quotes with no hidden charges.
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-blue-500/50">
                <p className="text-xs text-blue-200 uppercase font-semibold">Product Specialist Hotline</p>
                <p className="text-lg font-bold text-white mt-0.5">+91 98765 43210</p>
              </div>
            </div>

            {/* Right side form */}
            <div className="md:col-span-7 p-8 sm:p-10">
              <ContactForm defaultProduct={requestedProduct} isDemo={true} />
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}

export default function BookDemoPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading Demo Scheduler...</div>}>
      <BookDemoContent />
    </Suspense>
  );
}
