import React from 'react';
import { Metadata } from 'next';
import { constructMetadata } from '@/lib/seo';
import ProductCard from '@/components/ProductCard';
import { getLiveProducts } from '@/lib/productsService';
import Link from 'next/link';
import { Layers, ArrowRight } from 'lucide-react';

export const metadata: Metadata = constructMetadata({
  title: 'Our Software Products | Society, Payroll, School & Travel ERP Solutions',
  description: 'Explore the full suite of Tansur Software Solutions: Housing Society Management, Payroll HRMS, School Automation, Travel Engine, and Enterprise Cloud Solutions.',
});

// Revalidate every 10 seconds or on-demand
export const revalidate = 0;

export default async function ProductsPage() {
  const products = await getLiveProducts();

  return (
    <div className="bg-slate-50 min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100/80 border border-blue-200 text-blue-800 text-xs font-bold uppercase tracking-wider mb-4">
            <Layers className="w-3.5 h-3.5 text-blue-600" />
            Product Portfolio ({products.length})
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-slate-950 tracking-tight">
            Tailored Software Products for High-Growth Industries
          </h1>
          <p className="mt-4 text-slate-600 text-base sm:text-lg leading-relaxed">
            Every product is engineered with modern cloud architecture, intuitive mobile-friendly interfaces, automated WhatsApp messaging, and robust security.
          </p>
        </div>

        {/* Server-Rendered Instant Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((prod) => (
            <ProductCard key={prod.id || prod.slug} product={prod} />
          ))}
        </div>

        {/* Custom Software CTA */}
        <div className="mt-20 bg-gradient-to-r from-blue-700 via-blue-800 to-cyan-600 rounded-3xl p-8 sm:p-12 text-white shadow-xl text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <span className="text-xs font-extrabold uppercase tracking-widest text-cyan-300">
              Need Something Unique?
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold mt-1">
              Looking for a custom software build tailored to your exact workflow?
            </h3>
            <p className="text-blue-100 text-sm mt-2 max-w-2xl">
              We also design custom web & mobile platforms, enterprise APIs, billing engines, and inventory portals from scratch.
            </p>
          </div>
          <Link
            href="/contact"
            className="flex-shrink-0 inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-slate-900 bg-white hover:bg-slate-100 shadow-md transition-all transform hover:scale-105"
          >
            <span>Consult Our Engineers</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </div>
  );
}
