import React from 'react';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { INITIAL_PRODUCTS } from '@/data/products';
import { constructMetadata } from '@/lib/seo';
import ContactForm from '@/components/ContactForm';
import { 
  CheckCircle2, 
  ArrowLeft, 
  ShieldCheck, 
  Zap, 
  Sparkles, 
  Layers, 
  Clock, 
  MessageSquare,
  Users
} from 'lucide-react';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return INITIAL_PRODUCTS.map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = INITIAL_PRODUCTS.find((p) => p.slug === slug);
  if (!product) return constructMetadata({ title: 'Product Not Found' });

  return constructMetadata({
    title: `${product.title} | Tansur Software Solutions`,
    description: `${product.tagline}. ${product.description}`,
    image: product.dummyImage,
  });
}

export default async function ProductDetailPage({ params }: Props) {
  const { slug } = await params;
  const product = INITIAL_PRODUCTS.find((p) => p.slug === slug);

  if (!product) {
    notFound();
  }

  // WhatsApp click handler data
  const waNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '919876543210';
  const waText = encodeURIComponent(
    `Hello Tansur Software! I am interested in getting a live demo and quotation for *${product.title}*.`
  );

  return (
    <div className="bg-slate-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb / Back button */}
        <div className="mb-8">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 text-sm font-semibold text-slate-500 hover:text-blue-600 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Products</span>
          </Link>
        </div>

        {/* Hero Banner for this Product */}
        <div className="bg-white rounded-3xl border border-slate-200/80 shadow-md overflow-hidden p-8 sm:p-12 mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-7 space-y-5">
              <div className="flex items-center gap-3">
                <span className="px-3.5 py-1 text-xs font-bold text-white bg-blue-600 rounded-full">
                  {product.category}
                </span>
                <span className="px-3 py-0.5 text-xs font-bold text-cyan-700 bg-cyan-50 border border-cyan-200 rounded-full">
                  {product.badge}
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight">
                {product.title}
              </h1>

              <p className="text-lg font-medium text-cyan-600">
                {product.tagline}
              </p>

              <p className="text-slate-600 text-base leading-relaxed">
                {product.description}
              </p>

              <div className="pt-4 flex flex-wrap gap-4">
                <a
                  href={`https://wa.me/${waNumber}?text=${waText}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-bold text-white bg-emerald-600 hover:bg-emerald-700 shadow-lg shadow-emerald-600/20 transition-all transform hover:-translate-y-0.5"
                >
                  <MessageSquare className="w-4 h-4 fill-white text-emerald-600" />
                  <span>Ask on WhatsApp</span>
                </a>

                <Link
                  href={`/book-demo?product=${encodeURIComponent(product.title)}`}
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-bold text-white bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 shadow-md transition-all"
                >
                  <span>Schedule Live Demo</span>
                </Link>
              </div>
            </div>

            {/* Product Image Preview */}
            <div className="lg:col-span-5 relative h-72 sm:h-96 w-full rounded-2xl overflow-hidden border border-slate-100 shadow-lg bg-slate-100">
              <Image
                src={product.dummyImage}
                alt={product.title}
                fill
                priority
                className="object-cover"
              />
            </div>

          </div>
        </div>

        {/* Features & Specifications */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left: Deep feature breakdown */}
          <div className="lg:col-span-7 space-y-8">
            <div className="bg-white rounded-3xl border border-slate-200/80 p-8 shadow-sm">
              <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                <Sparkles className="w-6 h-6 text-blue-600" />
                Core Capabilities & Modules
              </h3>

              <div className="grid grid-cols-1 gap-4">
                {product.features.map((feat, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 p-4 rounded-xl bg-slate-50 border border-slate-100 hover:border-blue-200 transition-colors"
                  >
                    <div className="p-1.5 rounded-lg bg-emerald-100 text-emerald-600 mt-0.5">
                      <CheckCircle2 className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-slate-800">{feat}</h4>
                      <p className="text-xs text-slate-500 mt-1">
                        Fully customizable workflows, real-time audit logs, role-based controls, and seamless PDF/Excel exports.
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Architecture Highlights */}
            <div className="bg-slate-900 text-white rounded-3xl p-8 border border-slate-800">
              <h3 className="text-xl font-bold mb-4 text-cyan-300">Technical Specifications</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-slate-300">
                <div className="p-3 bg-slate-800/60 rounded-xl">
                  <p className="font-semibold text-white">Database Support</p>
                  <p className="text-xs text-slate-400">MongoDB / PostgreSQL / Cloud AWS</p>
                </div>
                <div className="p-3 bg-slate-800/60 rounded-xl">
                  <p className="font-semibold text-white">Mobile Readiness</p>
                  <p className="text-xs text-slate-400">Responsive PWA & Native Apps</p>
                </div>
                <div className="p-3 bg-slate-800/60 rounded-xl">
                  <p className="font-semibold text-white">Security</p>
                  <p className="text-xs text-slate-400">SSL 256-bit, 2FA & Role Permissions</p>
                </div>
                <div className="p-3 bg-slate-800/60 rounded-xl">
                  <p className="font-semibold text-white">Integration</p>
                  <p className="text-xs text-slate-400">WhatsApp Business API & Razorpay/Stripe</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Instant Booking Form Sticky */}
          <div className="lg:col-span-5">
            <div className="sticky top-28 bg-white rounded-3xl border border-slate-200/80 p-8 shadow-xl">
              <div className="mb-6">
                <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
                  Quick Inquiry
                </span>
                <h3 className="text-2xl font-black text-slate-950 mt-1">
                  Book a Live Demo
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  Experience {product.title} configured for your specific operational scale.
                </p>
              </div>

              <ContactForm defaultProduct={product.title} isDemo={true} />
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
