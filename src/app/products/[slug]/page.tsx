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
  Users,
  Building2,
  Check,
  Star,
  Award,
  ChevronRight
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
    title: `${product.title} - Enterprise ERP & Software | Tansur Software Solutions`,
    description: `${product.tagline}. ${product.description}. Discover modules, benefits, pricing, and live demo.`,
    image: product.dummyImage,
    keywords: [
      product.title,
      `${product.title} software India`,
      `${product.category} ERP system`,
      'Tansur Software Solutions ERP',
      'automated business software'
    ]
  });
}

export default async function ProductDetailPage({ params }: Props) {
  const { slug } = await params;
  const product = INITIAL_PRODUCTS.find((p) => p.slug === slug);

  if (!product) {
    notFound();
  }

  const waNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '919876543210';
  const waText = encodeURIComponent(
    `Hello Tansur Software! I am interested in getting a live demo and quotation for *${product.title}*.`
  );

  return (
    <div className="bg-slate-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb Navigation */}
        <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 mb-8">
          <Link href="/" className="hover:text-blue-600 transition-colors">Home</Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <Link href="/products" className="hover:text-blue-600 transition-colors">Products</Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <span className="text-blue-600 font-bold truncate">{product.title}</span>
        </div>

        {/* Hero Banner for this Product */}
        <div className="bg-white rounded-3xl border border-slate-200/90 shadow-xl overflow-hidden p-8 sm:p-12 mb-12 relative">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-100/40 to-cyan-100/40 rounded-full blur-3xl -z-10 pointer-events-none"></div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-7 space-y-5">
              <div className="flex flex-wrap items-center gap-2.5">
                <span className="px-3.5 py-1 text-xs font-black text-white bg-blue-600 rounded-full shadow-xs">
                  {product.category}
                </span>
                <span className="px-3 py-1 text-xs font-bold text-cyan-800 bg-cyan-50 border border-cyan-200 rounded-full">
                  ★ {product.badge}
                </span>
                <span className="text-xs font-semibold text-emerald-600 flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span> Live Deployment Ready
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight leading-tight">
                {product.title}
              </h1>

              <p className="text-base sm:text-lg font-bold text-cyan-700">
                {product.tagline}
              </p>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                {product.description}
              </p>

              {/* Action Buttons */}
              <div className="pt-3 flex flex-wrap items-center gap-4">
                <a
                  href={`https://wa.me/${waNumber}?text=${waText}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-bold text-white bg-emerald-600 hover:bg-emerald-700 shadow-lg shadow-emerald-600/25 transition-all transform hover:-translate-y-0.5 text-sm"
                >
                  <MessageSquare className="w-4 h-4 fill-white text-emerald-600" />
                  <span>Ask on WhatsApp</span>
                </a>

                <Link
                  href={`/book-demo?product=${encodeURIComponent(product.title)}`}
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-bold text-white bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 shadow-md transition-all text-sm"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Book Guided 1-on-1 Demo</span>
                </Link>
              </div>

              {/* Quick Trust Highlights */}
              <div className="pt-6 border-t border-slate-100 grid grid-cols-3 gap-3 text-center sm:text-left">
                <div>
                  <div className="text-xl font-black text-blue-700">99.9%</div>
                  <div className="text-[11px] font-semibold text-slate-500">Uptime SLA</div>
                </div>
                <div>
                  <div className="text-xl font-black text-cyan-600">Cloud & Mobile</div>
                  <div className="text-[11px] font-semibold text-slate-500">Android & iOS App</div>
                </div>
                <div>
                  <div className="text-xl font-black text-emerald-600">256-Bit</div>
                  <div className="text-[11px] font-semibold text-slate-500">Data Encryption</div>
                </div>
              </div>
            </div>

            {/* Product Visual Showcase with Real Image */}
            <div className="lg:col-span-5 relative h-72 sm:h-[380px] w-full rounded-3xl overflow-hidden border-4 border-slate-100 shadow-2xl group">
              <Image
                src={product.dummyImage}
                alt={product.title}
                fill
                priority
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent"></div>
              
              <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-2xl bg-white/95 backdrop-blur-md border border-white/60 shadow-lg text-slate-900">
                <span className="text-[10px] font-black uppercase tracking-wider text-blue-600">Verified Solution</span>
                <p className="text-xs font-bold text-slate-900 mt-0.5 line-clamp-1">{product.title}</p>
              </div>
            </div>

          </div>
        </div>

        {/* Benefits & Value Proposition Section */}
        {product.benefits && product.benefits.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {product.benefits.map((benefit, bIdx) => (
              <div key={bIdx} className="bg-white rounded-3xl border border-slate-200/90 p-6 shadow-sm hover:border-blue-400 transition-all flex items-start gap-4">
                <div className="p-2.5 rounded-2xl bg-blue-50 text-blue-600 flex-shrink-0 mt-0.5">
                  <Zap className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-black uppercase tracking-wider text-blue-600">Proven ROI Benefit</span>
                  <p className="text-xs sm:text-sm font-bold text-slate-800 mt-1 leading-snug">{benefit}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Features & Specifications & Contact Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left: Deep feature breakdown & Modules */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Feature Modules if present */}
            {product.modules && product.modules.length > 0 && (
              <div className="bg-white rounded-3xl border border-slate-200/90 p-8 shadow-sm">
                <h3 className="text-xl sm:text-2xl font-black text-slate-900 mb-6 flex items-center gap-2.5">
                  <Layers className="w-5 h-5 text-blue-600" />
                  Included Software Modules
                </h3>
                <div className="grid grid-cols-1 gap-4">
                  {product.modules.map((m, mIdx) => (
                    <div key={mIdx} className="p-4 rounded-2xl bg-slate-50 border border-slate-100 flex items-start gap-3.5">
                      <div className="p-1.5 rounded-xl bg-blue-100 text-blue-600 mt-0.5 flex-shrink-0">
                        <Check className="w-4 h-4 stroke-[3]" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-slate-900">{m.name}</h4>
                        <p className="text-xs text-slate-500 mt-0.5">{m.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Core Capabilities List */}
            <div className="bg-white rounded-3xl border border-slate-200/90 p-8 shadow-sm">
              <h3 className="text-xl sm:text-2xl font-black text-slate-900 mb-6 flex items-center gap-2.5">
                <Sparkles className="w-5 h-5 text-blue-600" />
                Core Capabilities & Workflow Automation
              </h3>

              <div className="grid grid-cols-1 gap-4">
                {product.features.map((feat, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100 hover:border-blue-200 transition-colors"
                  >
                    <div className="p-1.5 rounded-xl bg-emerald-100 text-emerald-600 mt-0.5 flex-shrink-0">
                      <CheckCircle2 className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-900">{feat}</h4>
                      <p className="text-xs text-slate-500 mt-1">
                        Fully customizable workflows, real-time audit logs, role-based controls, and seamless PDF/Excel exports.
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Technical Specifications */}
            <div className="bg-slate-900 text-white rounded-3xl p-8 border border-slate-800 shadow-xl">
              <h3 className="text-lg font-bold mb-4 text-cyan-300">Technical Specifications & Cloud Architecture</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-slate-300">
                <div className="p-3.5 bg-slate-800/80 rounded-2xl border border-slate-700/60">
                  <p className="font-bold text-white text-sm">Database Engine</p>
                  <p className="text-slate-400 mt-0.5">MongoDB Atlas / PostgreSQL Cluster with automated daily snapshots</p>
                </div>
                <div className="p-3.5 bg-slate-800/80 rounded-2xl border border-slate-700/60">
                  <p className="font-bold text-white text-sm">Mobile Readiness</p>
                  <p className="text-slate-400 mt-0.5">React Native mobile application + Progressive Web App (PWA)</p>
                </div>
                <div className="p-3.5 bg-slate-800/80 rounded-2xl border border-slate-700/60">
                  <p className="font-bold text-white text-sm">Security & Compliance</p>
                  <p className="text-slate-400 mt-0.5">256-bit SSL, 2FA Admin Authentication & Role-Based Access Control</p>
                </div>
                <div className="p-3.5 bg-slate-800/80 rounded-2xl border border-slate-700/60">
                  <p className="font-bold text-white text-sm">API Integrations</p>
                  <p className="text-slate-400 mt-0.5">Official WhatsApp Business Cloud API & Razorpay/Stripe Gateways</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Instant Booking Form Sticky */}
          <div className="lg:col-span-5">
            <div className="sticky top-28 bg-white rounded-3xl border border-slate-200/90 p-8 shadow-2xl">
              <div className="mb-6 pb-4 border-b border-slate-100">
                <span className="text-xs font-black uppercase tracking-wider text-blue-600">
                  Quick Inquiry
                </span>
                <h3 className="text-2xl font-black text-slate-950 mt-1">
                  Book a Live Demo
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  Experience {product.title} customized with your team's workflow.
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
