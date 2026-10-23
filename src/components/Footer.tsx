'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Phone, Mail, MapPin, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';
import { INITIAL_PRODUCTS } from '@/data/products';

export default function Footer() {
  const pathname = usePathname();

  if (pathname.startsWith('/admin')) {
    return null;
  }

  const currentYear = 2025;

  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-900 mt-20">
      
      {/* Top Delivery SLA Trust Bar with balanced spacing */}
      <div className="border-b border-slate-800 bg-slate-900/70 py-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-between gap-4 text-xs">
            <div className="flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping"></span>
              <span className="font-bold text-white tracking-wide">
                Tansur Global Delivery:
              </span>
              <span className="text-slate-400">
                Active Client Deployments Across India, UAE & North America
              </span>
            </div>
            <div className="flex items-center gap-6 text-slate-400 font-medium">
              <span className="flex items-center gap-1.5"><ShieldCheck className="w-4 h-4 text-emerald-400" /> ISO & GDPR Architecture</span>
              <span className="flex items-center gap-1.5"><Sparkles className="w-4 h-4 text-cyan-400" /> 99.9% Uptime Guarantee</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links Container with spacious padding */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-14">
          
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-6">
            <Link href="/" className="flex items-center gap-3.5 group">
              <div className="relative w-12 h-12 bg-white/5 p-1 border border-white/10 group-hover:border-blue-500/50 transition-colors">
                <Image
                  src="/logo.png"
                  alt="Tansur Software Solutions"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-black text-2xl text-white tracking-tight">
                  TANSUR
                </span>
                <span className="text-[10px] font-bold text-cyan-400 uppercase tracking-widest -mt-1">
                  Software Solutions
                </span>
              </div>
            </Link>
            
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              Ideas • Technology • Solutions • Growth. We engineer scalable custom software, SaaS platforms, housing society ERPs, and biometric payroll systems with rapid execution.
            </p>

            <div className="flex flex-wrap gap-2 pt-1">
              {['Next.js 15', 'React 19', 'Node.js', 'MongoDB', 'AWS Cloud', 'WhatsApp Cloud API'].map((t) => (
                <span key={t} className="px-2.5 py-1 text-[11px] font-bold bg-slate-900 text-slate-400 border border-slate-800">
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Navigation Links */}
          <div className="space-y-4">
            <h4 className="text-xs font-black text-white uppercase tracking-widest text-cyan-400">Navigation</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/" className="hover:text-cyan-400 transition-colors">Home</Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-cyan-400 transition-colors">Services</Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-cyan-400 transition-colors">Our Products</Link>
              </li>
              <li>
                <Link href="/hire-developers" className="hover:text-cyan-400 transition-colors flex items-center gap-1.5">
                  <span>Hire Developers</span>
                  <span className="px-1.5 py-0.2 text-[9px] font-bold text-amber-400 bg-amber-950/80 border border-amber-800">48h</span>
                </Link>
              </li>
              <li>
                <Link href="/our-works" className="hover:text-cyan-400 transition-colors">Our Works</Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-cyan-400 transition-colors">About Us</Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-cyan-400 transition-colors">Blog & Guides</Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-cyan-400 transition-colors">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Core Software Products */}
          <div className="space-y-4">
            <h4 className="text-xs font-black text-white uppercase tracking-widest text-cyan-400">Software Products</h4>
            <ul className="space-y-3 text-sm">
              {INITIAL_PRODUCTS.slice(0, 5).map((p) => (
                <li key={p.id}>
                  <Link href={`/products/${p.slug}`} className="hover:text-cyan-400 transition-colors line-clamp-1">
                    {p.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Direct Contact info */}
          <div className="space-y-4">
            <h4 className="text-xs font-black text-white uppercase tracking-widest text-cyan-400">Direct Connect</h4>
            <div className="space-y-4 text-sm text-slate-400">
              <div className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-cyan-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-white font-bold">+91 98765 43210</p>
                  <span className="text-xs text-slate-500">Call & WhatsApp Hotline (24/7)</span>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                <span className="text-slate-300">contact@tansursoftware.com</span>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-cyan-400 mt-1 flex-shrink-0" />
                <span className="text-xs leading-relaxed">
                  Tansur Tech Campus, Sector 62, Electronic City, Noida / Bengaluru, India
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar with proper vertical spacing */}
        <div className="mt-16 pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© {currentYear} Tansur Software Solutions. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span>256-Bit SSL Secured</span>
            <span>Zero-Data Retention Policy</span>
            <Link href="/admin/login" className="text-slate-600 hover:text-slate-400 text-[10px]">
              Admin
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
