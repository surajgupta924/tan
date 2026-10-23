'use client';

import React, { useState } from 'react';
import { Send, CheckCircle2, AlertCircle, Loader2, ShieldCheck, ArrowRight } from 'lucide-react';

interface ContactFormProps {
  defaultProduct?: string;
  isDemo?: boolean;
}

export default function ContactForm({ defaultProduct = '', isDemo = false }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: defaultProduct || 'Real Estate & Housing Society Management ERP',
    timeline: 'Within 1-2 Weeks (Urgent)',
    budget: '₹1,00,000 - ₹3,00,000',
    preferredMode: 'WhatsApp',
    message: '',
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          productInterest: formData.projectType,
          subject: `Inquiry for ${formData.projectType} (${formData.timeline})`,
          message: `[Project Type: ${formData.projectType}] [Timeline: ${formData.timeline}] [Budget: ${formData.budget}] [Preferred Mode: ${formData.preferredMode}] - ${formData.message || 'Client requested consultation.'}`,
          type: isDemo ? 'demo' : 'contact',
        }),
      });

      const data = await res.json();
      if (data.success) {
        setSuccess(true);
        const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '919876543210';
        const waMsg = encodeURIComponent(
          `*New Project Inquiry - Tansur Software Solutions*\n\n` +
          `👤 *Name:* ${formData.name}\n` +
          `📞 *Phone:* ${formData.phone}\n` +
          `📧 *Email:* ${formData.email || 'N/A'}\n` +
          `💼 *Project Type:* ${formData.projectType}\n` +
          `⏱️ *Timeline:* ${formData.timeline}\n` +
          `💰 *Budget Range:* ${formData.budget}\n` +
          `💬 *Details:* ${formData.message || 'Please connect for project proposal.'}`
        );

        setTimeout(() => {
          window.open(`https://wa.me/${whatsappNumber}?text=${waMsg}`, '_blank');
        }, 1000);
      } else {
        setError(data.error || 'Failed to submit form. Please try again.');
      }
    } catch (err: any) {
      setError(err.message || 'Network error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <div className="bg-emerald-50 border-2 border-emerald-400 rounded-2xl p-8 text-center animate-in fade-in duration-200">
        <div className="w-16 h-16 bg-emerald-600 text-white rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-md shadow-emerald-500/20">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <span className="text-[11px] font-black uppercase tracking-widest text-emerald-800 bg-emerald-200 px-3 py-1 rounded-full">
          Inquiry Saved to Database
        </span>
        <h3 className="text-2xl font-black text-slate-900 mt-3 mb-2">
          Thank You, {formData.name}!
        </h3>
        <p className="text-slate-600 text-sm max-w-md mx-auto mb-6 leading-relaxed">
          Your project inquiry is recorded in our system. We are also redirecting you to WhatsApp for immediate tech consultation.
        </p>
        <button
          onClick={() => {
            setSuccess(false);
            setFormData({
              name: '',
              email: '',
              phone: '',
              projectType: 'Real Estate & Housing Society Management ERP',
              timeline: 'Within 1-2 Weeks (Urgent)',
              budget: '₹1,00,000 - ₹3,00,000',
              preferredMode: 'WhatsApp',
              message: '',
            });
          }}
          className="px-6 py-2.5 text-xs font-black uppercase tracking-wider text-slate-900 bg-white border border-slate-300 rounded-xl hover:bg-slate-100 transition-colors"
        >
          Submit Another Request
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {error && (
        <div className="p-3.5 bg-red-50 border border-red-200 rounded-xl text-red-700 text-xs flex items-center gap-2">
          <AlertCircle className="w-4 h-4 flex-shrink-0" />
          <span>{error}</span>
        </div>
      )}

      {/* Row 1: Name & Phone with clean rounded borders, NO placeholder */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-800 mb-1.5">
            Full Name <span className="text-blue-600">*</span>
          </label>
          <input
            type="text"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full px-4 py-3 bg-white border border-slate-300 rounded-xl focus:border-blue-600 focus:ring-2 focus:ring-blue-100 focus:outline-none text-slate-900 text-sm font-semibold transition-all"
          />
        </div>

        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-800 mb-1.5">
            Phone / WhatsApp Number <span className="text-blue-600">*</span>
          </label>
          <input
            type="tel"
            required
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className="w-full px-4 py-3 bg-white border border-slate-300 rounded-xl focus:border-blue-600 focus:ring-2 focus:ring-blue-100 focus:outline-none text-slate-900 text-sm font-semibold transition-all"
          />
        </div>
      </div>

      {/* Row 2: Email & Project Type Dropdown */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-800 mb-1.5">
            Official Email Address
          </label>
          <input
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full px-4 py-3 bg-white border border-slate-300 rounded-xl focus:border-blue-600 focus:ring-2 focus:ring-blue-100 focus:outline-none text-slate-900 text-sm font-semibold transition-all"
          />
        </div>

        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-800 mb-1.5">
            Project Type <span className="text-blue-600">*</span>
          </label>
          <select
            value={formData.projectType}
            onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
            className="w-full px-4 py-3 bg-white border border-slate-300 rounded-xl focus:border-blue-600 focus:ring-2 focus:ring-blue-100 focus:outline-none text-slate-900 text-sm font-semibold transition-all cursor-pointer"
          >
            <option value="Real Estate & Housing Society Management ERP">Real Estate & Housing Society Management ERP</option>
            <option value="Payroll & HRMS Management Software">Payroll & HRMS Management Software</option>
            <option value="School & College Campus ERP">School & College Campus ERP</option>
            <option value="Travel & Tour Booking Engine">Travel & Tour Booking Engine</option>
            <option value="Custom CRM & Lead Management System">Custom CRM & Lead Management System</option>
            <option value="Hospital & Clinic Management Suite">Hospital & Clinic Management Suite</option>
            <option value="Full-Stack Web & SaaS Application">Full-Stack Web & SaaS Application</option>
            <option value="Cross-Platform Mobile App (Android/iOS)">Cross-Platform Mobile App (Android/iOS)</option>
            <option value="Hire Dedicated Developers (Next.js/Node.js)">Hire Dedicated Developers (Next.js/Node.js)</option>
            <option value="WhatsApp Business API Integration">WhatsApp Business API Integration</option>
          </select>
        </div>
      </div>

      {/* Row 3: Timeline & Budget Range Dropdowns */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-800 mb-1.5">
            Estimated Timeline
          </label>
          <select
            value={formData.timeline}
            onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
            className="w-full px-4 py-3 bg-white border border-slate-300 rounded-xl focus:border-blue-600 focus:ring-2 focus:ring-blue-100 focus:outline-none text-slate-900 text-sm font-semibold transition-all cursor-pointer"
          >
            <option value="Immediate (Within 1-2 Weeks)">Immediate (Within 1-2 Weeks)</option>
            <option value="Within 1 Month">Within 1 Month</option>
            <option value="Within 2-3 Months">Within 2-3 Months</option>
            <option value="Flexible / Exploring Scope">Flexible / Exploring Scope</option>
          </select>
        </div>

        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-800 mb-1.5">
            Estimated Budget Range
          </label>
          <select
            value={formData.budget}
            onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
            className="w-full px-4 py-3 bg-white border border-slate-300 rounded-xl focus:border-blue-600 focus:ring-2 focus:ring-blue-100 focus:outline-none text-slate-900 text-sm font-semibold transition-all cursor-pointer"
          >
            <option value="₹25,000 - ₹50,000">₹25,000 - ₹50,000</option>
            <option value="₹50,000 - ₹1,50,000">₹50,000 - ₹1,50,000</option>
            <option value="₹1,50,000 - ₹5,00,000">₹1,50,000 - ₹5,00,000</option>
            <option value="₹5,00,000+ (Enterprise Scale)">₹5,00,000+ (Enterprise Scale)</option>
          </select>
        </div>
      </div>

      {/* Row 4: Preferred Communication Mode */}
      <div>
        <label className="block text-xs font-bold uppercase tracking-wider text-slate-800 mb-2">
          Preferred Way To Connect:
        </label>
        <div className="grid grid-cols-3 gap-3">
          {['WhatsApp', 'Direct Phone Call', 'Official Email'].map((mode) => (
            <button
              type="button"
              key={mode}
              onClick={() => setFormData({ ...formData, preferredMode: mode })}
              className={`py-2.5 px-3 text-xs font-bold rounded-xl border transition-all ${
                formData.preferredMode === mode
                  ? 'border-blue-600 bg-blue-600 text-white shadow-md shadow-blue-500/20'
                  : 'border-slate-200 bg-slate-50 text-slate-700 hover:border-slate-300'
              }`}
            >
              {mode}
            </button>
          ))}
        </div>
      </div>

      {/* Row 5: Detailed Message textarea - NO placeholder */}
      <div>
        <label className="block text-xs font-bold uppercase tracking-wider text-slate-800 mb-1.5">
          Project Requirements & Key Features Needed
        </label>
        <textarea
          rows={3}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className="w-full px-4 py-3 bg-white border border-slate-300 rounded-xl focus:border-blue-600 focus:ring-2 focus:ring-blue-100 focus:outline-none text-slate-900 text-sm font-semibold transition-all resize-none"
        ></textarea>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={loading}
        className="w-full py-4 px-6 text-sm font-bold uppercase tracking-wider text-white bg-gradient-to-r from-blue-600 via-blue-700 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 rounded-xl transition-all flex items-center justify-center gap-3 cursor-pointer shadow-lg shadow-blue-500/25 disabled:opacity-60 transform hover:-translate-y-0.5"
      >
        {loading ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin" />
            <span>Saving & Connecting...</span>
          </>
        ) : (
          <>
            <span>Submit Project Inquiry</span>
            <ArrowRight className="w-4 h-4" />
          </>
        )}
      </button>

      <div className="flex items-center justify-between text-[11px] text-slate-500 font-semibold pt-1">
        <span className="flex items-center gap-1.5">
          <ShieldCheck className="w-4 h-4 text-emerald-600" />
          NDA & Data Security Guaranteed
        </span>
        <span>Direct Technical Review within 2 Hours</span>
      </div>
    </form>
  );
}
