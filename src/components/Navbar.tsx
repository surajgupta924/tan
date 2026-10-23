'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X, ArrowRight, MessageSquareCode, Sparkles, ChevronDown } from 'lucide-react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  // Hide public navbar on admin pages
  if (pathname.startsWith('/admin')) {
    return null;
  }

  // Updated navigation according to user instructions:
  // Services, Product, Hire Developers, Our Works, About, Blog, Contact
  const navLinks = [
    { name: 'Services', href: '/services' },
    { name: 'Products', href: '/products' },
    { name: 'Hire Developers', href: '/hire-developers', badge: 'Popular' },
    { name: 'Our Works', href: '/our-works' },
    { name: 'About', href: '/about' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-xl bg-white/95 border-b border-slate-200/80 shadow-sm transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo with 3D Brand Badge */}
          <Link href="/" className="flex items-center gap-3.5 group">
            <div className="relative w-12 h-12 flex-shrink-0 transition-transform group-hover:scale-105 duration-200 drop-shadow-sm">
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
            {navLinks.map((link) => {
              const isActive = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href));
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`relative px-3.5 py-2 rounded-xl text-sm font-semibold transition-all duration-200 flex items-center gap-1.5 ${
                    isActive
                      ? 'text-blue-600 bg-blue-50/90 shadow-sm'
                      : 'text-slate-700 hover:text-blue-600 hover:bg-slate-100/70'
                  }`}
                >
                  <span>{link.name}</span>
                  {link.badge && (
                    <span className="px-1.5 py-0.5 text-[10px] font-bold text-white bg-gradient-to-r from-amber-500 to-orange-500 rounded-full leading-none shadow-xs">
                      {link.badge}
                    </span>
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Action CTA - NO LOGIN BUTTON (Protected) */}
          <div className="hidden lg:flex items-center space-x-3">
            <Link
              href="/book-demo"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider text-white bg-gradient-to-r from-blue-600 via-blue-700 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 shadow-md shadow-blue-500/20 hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-200 transform hover:-translate-y-0.5"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Book Demo</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Mobile menu hamburger button */}
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
        <div className="lg:hidden border-b border-slate-200 bg-white/98 px-5 pt-3 pb-6 space-y-1.5 shadow-2xl animate-in slide-in-from-top duration-200">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between px-4 py-3 rounded-xl text-sm font-semibold text-slate-800 hover:text-blue-600 hover:bg-blue-50 transition-colors"
            >
              <span>{link.name}</span>
              {link.badge && (
                <span className="px-2 py-0.5 text-[10px] font-bold text-white bg-amber-500 rounded-full">
                  {link.badge}
                </span>
              )}
            </Link>
          ))}
          <div className="pt-3">
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
