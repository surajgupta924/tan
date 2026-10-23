'use client';

import React from 'react';
import { MessageCircle, PhoneCall } from 'lucide-react';

export default function WhatsAppFloatingButton() {
  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '919876543210';
  const defaultMessage = encodeURIComponent(
    'Hello Tansur Software Solutions! I am interested in your software ERP products (Society Management, Payroll, School ERP, Travel ERP) and would like to schedule a quick demo.'
  );

  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${defaultMessage}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3 group">
      {/* Floating tooltip */}
      <div className="hidden md:flex items-center gap-2 bg-slate-900 text-white text-xs font-medium px-3.5 py-1.5 rounded-full shadow-lg border border-slate-700 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-200">
        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
        Chat on WhatsApp with our Product Specialist
      </div>

      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Tansur Software Solutions on WhatsApp"
        className="relative flex items-center justify-center w-14 h-14 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white shadow-xl shadow-emerald-500/40 hover:shadow-2xl hover:shadow-emerald-500/60 transform hover:scale-110 active:scale-95 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-emerald-300"
      >
        <span className="absolute -top-1 -right-1 flex h-4 w-4">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-300 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-4 w-4 bg-emerald-400 border-2 border-white"></span>
        </span>
        <MessageCircle className="w-7 h-7 fill-white text-emerald-500" />
      </a>
    </div>
  );
}
