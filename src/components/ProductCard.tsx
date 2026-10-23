import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { ProductData } from '@/data/products';

interface ProductCardProps {
  product: ProductData;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="group relative flex flex-col bg-white rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-xl hover:border-blue-400 transition-all duration-300 overflow-hidden transform hover:-translate-y-1">
      {/* Product Image Preview */}
      <div className="relative h-52 w-full overflow-hidden bg-slate-100">
        <Image
          src={product.dummyImage}
          alt={product.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent"></div>
        
        {/* Badges */}
        <div className="absolute top-3 left-3 flex items-center gap-2">
          <span className="px-3 py-1 text-xs font-bold text-white bg-blue-600/90 backdrop-blur-md rounded-full shadow-sm">
            {product.category}
          </span>
          {product.badge && (
            <span className="px-2.5 py-0.5 text-[11px] font-semibold text-cyan-200 bg-slate-900/80 backdrop-blur-md rounded-full border border-cyan-500/30">
              {product.badge}
            </span>
          )}
        </div>
      </div>

      {/* Product Details */}
      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors line-clamp-1">
          {product.title}
        </h3>
        <p className="text-xs font-medium text-cyan-600 mt-1 line-clamp-1">
          {product.tagline}
        </p>
        <p className="text-slate-600 text-sm mt-3 line-clamp-2 leading-relaxed">
          {product.description}
        </p>

        {/* Feature Highlights */}
        <div className="mt-5 space-y-2 border-t border-slate-100 pt-4 flex-1">
          <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
            Key Features:
          </div>
          {product.features.slice(0, 3).map((feat, i) => (
            <div key={i} className="flex items-start gap-2 text-xs text-slate-700">
              <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
              <span className="line-clamp-1">{feat}</span>
            </div>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
          <Link
            href={`/products/${product.slug}`}
            className="text-sm font-semibold text-blue-600 hover:text-blue-700 flex items-center gap-1 group-hover:gap-1.5 transition-all"
          >
            <span>Learn More</span>
            <ArrowRight className="w-4 h-4" />
          </Link>

          <Link
            href={`/book-demo?product=${encodeURIComponent(product.title)}`}
            className="px-4 py-2 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 shadow-md shadow-blue-500/15 transition-all"
          >
            Book Demo
          </Link>
        </div>
      </div>
    </div>
  );
}
