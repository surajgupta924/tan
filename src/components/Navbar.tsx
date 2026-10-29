'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X, ArrowRight, Sparkles, ChevronDown, Building2, Users2, Layers, Calculator, GraduationCap, Plane, Stethoscope, Briefcase } from 'lucide-react';
import { INITIAL_PRODUCTS } from '@/data/products';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productsDropdownOpen, setProductsDropdownOpen] = useState(false);
  const pathname = usePathname();

  if (pathname.startsWith('/admin')) {
    return null;
  }

  // Icons map for product submenu
  const getProductIcon = (slug: string) => {
    switch (slug) {
      case 'real-estate-crm-software': return Building2;
      case 'society-management-software': return Users2;
      case 'payroll-management-system': return Calculator;
      case 'school-management-system': return GraduationCap;
      case 'travel-management-system': return Plane;
      case 'hospital-clinic-management': return Stethoscope;
      default: return Layers;
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-xl bg-white/95 border-b border-slate-200/80 shadow-xs transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo with 3D Brand Badge */}
          <Link href="/" className="flex items-center gap-3.5 group">
            <div className="relative w-12 h-12 flex-shrink-0 transition-transform group-hover:scale-105 duration-200 drop-shadow-xs">
              <Image
                src="/logo.png"
                alt="Tansur Software Solutions Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="font-black text-xl tracking-tight bg-gradient-to-r from-blue-700 via-blue-600 to-cyan-500 bg-clip-text text-transparent">
                TANSUR
              </span>
              <span className="text-[10px] font-extrabold text-slate-500 tracking-widest uppercase -mt-1">
                Software Solutions
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            
            <Link
              href="/services"
              className={`px-3.5 py-2 rounded-xl text-sm font-semibold transition-all ${
                pathname === '/services' ? 'text-blue-600 bg-blue-50/90' : 'text-slate-700 hover:text-blue-600 hover:bg-slate-100/70'
              }`}
            >
              Services
            </Link>

            {/* Products Mega Dropdown with Multiple Submenus */}
            <div 
              className="relative"
              onMouseEnter={() => setProductsDropdownOpen(true)}
              onMouseLeave={() => setProductsDropdownOpen(false)}
            >
              <Link
                href="/products"
                className={`px-3.5 py-2 rounded-xl text-sm font-semibold transition-all flex items-center gap-1.5 ${
                  pathname.startsWith('/products') ? 'text-blue-600 bg-blue-50/90 font-bold' : 'text-slate-700 hover:text-blue-600 hover:bg-slate-100/70'
                }`}
              >
                <span>Products</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${productsDropdownOpen ? 'rotate-180 text-blue-600' : 'text-slate-400'}`} />
              </Link>

              {/* Mega Dropdown Panel */}
              {productsDropdownOpen && (
                <div className="absolute top-full left-0 w-[580px] -mt-1 pt-2 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                  <div className="bg-white rounded-3xl border border-slate-200 shadow-2xl p-6 grid grid-cols-2 gap-3">
                    <div className="col-span-2 pb-3 mb-1 border-b border-slate-100 flex items-center justify-between">
                      <span className="text-xs font-black uppercase tracking-wider text-slate-500 flex items-center gap-2">
                        <Sparkles className="w-3.5 h-3.5 text-blue-600" />
                        Software Products & Enterprise Solutions
                      </span>
                      <Link 
                        href="/products"
                        onClick={() => setProductsDropdownOpen(false)}
                        className="text-xs font-bold text-blue-600 hover:underline"
                      >
                        View All Catalog &rarr;
                      </Link>
                    </div>

                    {INITIAL_PRODUCTS.map((prod) => {
                      const Icon = getProductIcon(prod.slug);
                      return (
                        <Link
                          key={prod.id}
                          href={`/products/${prod.slug}`}
                          onClick={() => setProductsDropdownOpen(false)}
                          className="flex items-start gap-3 p-3 rounded-2xl hover:bg-blue-50/70 transition-colors group"
                        >
                          <div className="p-2 rounded-xl bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors flex-shrink-0 mt-0.5">
                            <Icon className="w-4 h-4" />
                          </div>
                          <div className="min-w-0">
                            <div className="flex items-center gap-1.5">
                              <h4 className="text-xs font-bold text-slate-900 group-hover:text-blue-600 transition-colors truncate">
                                {prod.title}
                              </h4>
                            </div>
                            <p className="text-[11px] text-slate-500 line-clamp-1 mt-0.5">
                              {prod.tagline}
                            </p>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>

            <Link
              href="/hire-developers"
              className={`px-3.5 py-2 rounded-xl text-sm font-semibold transition-all flex items-center gap-1.5 ${
                pathname === '/hire-developers' ? 'text-blue-600 bg-blue-50/90' : 'text-slate-700 hover:text-blue-600 hover:bg-slate-100/70'
              }`}
            >
              <span>Hire Developers</span>
              <span className="px-1.5 py-0.5 text-[9px] font-bold text-white bg-gradient-to-r from-amber-500 to-orange-500 rounded-full leading-none">
                48h
              </span>
            </Link>

            <Link
              href="/our-works"
              className={`px-3.5 py-2 rounded-xl text-sm font-semibold transition-all ${
                pathname === '/our-works' ? 'text-blue-600 bg-blue-50/90' : 'text-slate-700 hover:text-blue-600 hover:bg-slate-100/70'
              }`}
            >
              Our Works
            </Link>

            <Link
              href="/about"
              className={`px-3.5 py-2 rounded-xl text-sm font-semibold transition-all ${
                pathname === '/about' ? 'text-blue-600 bg-blue-50/90' : 'text-slate-700 hover:text-blue-600 hover:bg-slate-100/70'
              }`}
            >
              About
            </Link>

            <Link
              href="/blog"
              className={`px-3.5 py-2 rounded-xl text-sm font-semibold transition-all ${
                pathname === '/blog' ? 'text-blue-600 bg-blue-50/90' : 'text-slate-700 hover:text-blue-600 hover:bg-slate-100/70'
              }`}
            >
              Blog
            </Link>

            <Link
              href="/contact"
              className={`px-3.5 py-2 rounded-xl text-sm font-semibold transition-all ${
                pathname === '/contact' ? 'text-blue-600 bg-blue-50/90' : 'text-slate-700 hover:text-blue-600 hover:bg-slate-100/70'
              }`}
            >
              Contact
            </Link>
          </nav>

          {/* Action CTA - NO LOGIN BUTTON (Protected) */}
          <div className="hidden lg:flex items-center space-x-3">
            <Link
              href="/book-demo"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider text-white bg-gradient-to-r from-blue-600 via-blue-700 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 shadow-md shadow-blue-500/20 hover:shadow-lg transition-all duration-200 transform hover:-translate-y-0.5"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Book Demo</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Mobile hamburger */}
          <div className="flex lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-slate-700 hover:text-blue-600 hover:bg-slate-100 focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-slate-200 bg-white px-5 pt-3 pb-6 space-y-2 shadow-2xl animate-in slide-in-from-top duration-200 max-h-[85vh] overflow-y-auto">
          <Link
            href="/services"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-4 py-2.5 rounded-xl text-sm font-semibold text-slate-800 hover:bg-blue-50"
          >
            Services
          </Link>

          {/* Mobile Products Submenu Accordion */}
          <div className="border border-slate-100 rounded-2xl p-3 bg-slate-50/70">
            <Link
              href="/products"
              onClick={() => setMobileMenuOpen(false)}
              className="text-xs font-black uppercase tracking-wider text-blue-700 block mb-2"
            >
              Our Software Products ({INITIAL_PRODUCTS.length}):
            </Link>
            <div className="space-y-1.5 pl-2 border-l-2 border-blue-200">
              {INITIAL_PRODUCTS.map((prod) => (
                <Link
                  key={prod.id}
                  href={`/products/${prod.slug}`}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-xs font-medium text-slate-700 hover:text-blue-600 py-1"
                >
                  • {prod.title}
                </Link>
              ))}
            </div>
          </div>

          <Link
            href="/hire-developers"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center justify-between px-4 py-2.5 rounded-xl text-sm font-semibold text-slate-800 hover:bg-blue-50"
          >
            <span>Hire Developers</span>
            <span className="px-2 py-0.5 text-[10px] font-bold text-white bg-amber-500 rounded-full">48h</span>
          </Link>

          <Link
            href="/our-works"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-4 py-2.5 rounded-xl text-sm font-semibold text-slate-800 hover:bg-blue-50"
          >
            Our Works
          </Link>

          <Link
            href="/about"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-4 py-2.5 rounded-xl text-sm font-semibold text-slate-800 hover:bg-blue-50"
          >
            About
          </Link>

          <Link
            href="/blog"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-4 py-2.5 rounded-xl text-sm font-semibold text-slate-800 hover:bg-blue-50"
          >
            Blog
          </Link>

          <Link
            href="/contact"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-4 py-2.5 rounded-xl text-sm font-semibold text-slate-800 hover:bg-blue-50"
          >
            Contact
          </Link>

          <div className="pt-2">
            <Link
              href="/book-demo"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 w-full px-5 py-3 rounded-xl text-center text-sm font-bold text-white bg-gradient-to-r from-blue-600 to-cyan-500 shadow-md"
            >
              <Sparkles className="w-4 h-4" />
              <span>Book Free Live Demo</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
