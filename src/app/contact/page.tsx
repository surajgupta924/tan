import React from 'react';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { constructMetadata } from '@/lib/seo';
import ContactForm from '@/components/ContactForm';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  MessageSquare, 
  ShieldCheck, 
  Sparkles, 
  CheckCircle2, 
  ArrowRight,
  Navigation
} from 'lucide-react';

export const metadata: Metadata = constructMetadata({
  title: 'Contact Us | Tansur Software Solutions - Connect With Our Engineers',
  description: 'Get in touch with Tansur Software Solutions. Connect for custom software inquiries, Society ERP demonstrations, Payroll HRMS pricing, or hiring dedicated developers.',
});

export default function ContactPage() {
  const waNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '919876543210';

  return (
    <div className="bg-slate-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-100 text-blue-900 text-xs font-black uppercase tracking-widest mb-3">
            <Sparkles className="w-3.5 h-3.5 text-blue-700" />
            <span>Direct Client Desk</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-black text-slate-950 tracking-tight">
            Contact Tansur Software Solutions
          </h1>

          <p className="mt-3 text-slate-600 text-base leading-relaxed">
            Discuss your software architecture, custom ERP workflows, pricing estimates, or hire dedicated developers directly from our engineering team.
          </p>
        </div>

        {/* 3 Quick Direct Contact Bars (Sharp, no rounded corners) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
          <a
            href={`https://wa.me/${waNumber}?text=${encodeURIComponent('Hi Tansur Software! I am looking for software solutions and would like to chat.')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="p-5 bg-emerald-600 text-white flex items-center justify-between hover:bg-emerald-700 transition-colors shadow-sm"
          >
            <div>
              <span className="text-[10px] font-black uppercase tracking-widest text-emerald-200 block">Instant Chat</span>
              <h3 className="text-lg font-black mt-0.5">WhatsApp Specialist</h3>
              <p className="text-xs text-emerald-100">Live 24/7 for project queries</p>
            </div>
            <MessageSquare className="w-7 h-7 flex-shrink-0" />
          </a>

          <a
            href="tel:+919876543210"
            className="p-5 bg-blue-600 text-white flex items-center justify-between hover:bg-blue-700 transition-colors shadow-sm"
          >
            <div>
              <span className="text-[10px] font-black uppercase tracking-widest text-blue-200 block">Direct Calling</span>
              <h3 className="text-lg font-black mt-0.5">+91 98765 43210</h3>
              <p className="text-xs text-blue-100">Mon - Sat (9:00 AM - 7:00 PM)</p>
            </div>
            <Phone className="w-7 h-7 flex-shrink-0" />
          </a>

          <a
            href="mailto:contact@tansursoftware.com"
            className="p-5 bg-slate-900 text-white flex items-center justify-between hover:bg-slate-800 transition-colors shadow-sm"
          >
            <div>
              <span className="text-[10px] font-black uppercase tracking-widest text-cyan-400 block">Official Email</span>
              <h3 className="text-sm font-black mt-0.5 truncate">contact@tansursoftware.com</h3>
              <p className="text-xs text-slate-400">Response within 2 hours</p>
            </div>
            <Mail className="w-7 h-7 flex-shrink-0" />
          </a>
        </div>

        {/* Main Workstation: Left Details & Right Form */}
        <div className="border-2 border-slate-300 bg-white grid grid-cols-1 lg:grid-cols-12 mb-16 shadow-lg">
          
          {/* Left Details Panel */}
          <div className="lg:col-span-5 bg-slate-950 p-8 sm:p-10 text-white flex flex-col justify-between border-b lg:border-b-0 lg:border-r-2 border-slate-800">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="relative w-12 h-12 bg-white/10 p-1 border border-white/20">
                  <Image
                    src="/logo.png"
                    alt="Tansur Software Logo"
                    fill
                    className="object-contain"
                  />
                </div>
                <div>
                  <h3 className="font-black text-xl text-white">TANSUR</h3>
                  <span className="text-[10px] font-bold text-cyan-400 uppercase tracking-widest -mt-1 block">
                    Software Solutions
                  </span>
                </div>
              </div>

              <h4 className="text-2xl font-black text-white mb-3">
                Direct Engineering Collaboration
              </h4>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-6">
                Connect directly with lead solutions architects. Every submission is analyzed to produce realistic timelines and enterprise-grade software roadmaps.
              </p>

              {/* In-House Team Preview */}
              <div className="relative h-44 w-full border border-slate-700 mb-6 overflow-hidden">
                <Image
                  src="/team-tansur.jpg"
                  alt="Tansur Software Team"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Office Details */}
              <div className="space-y-4 text-xs text-slate-300 border-t border-slate-800 pt-5">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-cyan-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong className="text-white block font-bold">Registered Office:</strong>
                    <span>Tansur Tech Campus, Sector 62, Electronic City, Noida / Bengaluru, India</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-cyan-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong className="text-white block font-bold">Operating Hours:</strong>
                    <span>Mon - Sat: 9:00 AM – 7:00 PM IST (Support 24/7)</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-5 border-t border-slate-800 text-xs text-slate-400 flex items-center justify-between">
              <span>● Confidentiality Guaranteed</span>
              <span className="text-cyan-400 font-bold">In-House HQ</span>
            </div>
          </div>

          {/* Right Form Panel (Dropdown for project type, no placeholders, no border-radius) */}
          <div className="lg:col-span-7 p-8 sm:p-10 bg-white">
            <div className="mb-6 pb-4 border-b border-slate-200">
              <span className="text-xs font-black uppercase tracking-widest text-blue-600 block mb-1">
                Project Intake
              </span>
              <h2 className="text-2xl font-black text-slate-950">
                Send Your Project Specifications
              </h2>
            </div>

            <ContactForm />
          </div>

        </div>

        {/* Google Maps Location Section (Embedded directly below contact) */}
        <div className="border-2 border-slate-300 bg-white p-8 sm:p-10 shadow-lg">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-6 pb-4 border-b border-slate-200">
            <div>
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-blue-600 mb-1">
                <Navigation className="w-4 h-4 text-blue-600" />
                <span>Our Physical Location</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-950">
                Tansur Software Solutions Tech Campus
              </h2>
              <p className="text-slate-600 text-xs sm:text-sm mt-1">
                Sector 62, Electronic City, Noida / Bengaluru, India — Visitors welcome with prior appointment.
              </p>
            </div>

            <a
              href="https://maps.google.com/?q=Sector+62+Noida+Electronic+City"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 md:mt-0 inline-flex items-center gap-2 px-5 py-2.5 text-xs font-black uppercase tracking-wider text-white bg-slate-950 hover:bg-blue-600 transition-colors"
            >
              <span>Open in Google Maps App</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Interactive Google Map Iframe */}
          <div className="w-full h-80 sm:h-96 border-2 border-slate-300 overflow-hidden bg-slate-100 relative">
            <iframe
              title="Tansur Software Solutions Office Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14010.51868351545!2d77.35926344558085!3d28.62512613149806!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5456ef36d9f%3A0x3b7191b1286136c8!2sSector%2062%2C%20Noida%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full grayscale-[15%] hover:grayscale-0 transition-all duration-300"
            ></iframe>
          </div>
        </div>

      </div>
    </div>
  );
}
