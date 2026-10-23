import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { constructMetadata } from '@/lib/seo';
import { BLOG_POSTS } from '@/data/companyData';
import { BookOpen, Clock, Calendar, ArrowRight, User, Sparkles } from 'lucide-react';

export const metadata: Metadata = constructMetadata({
  title: 'Blog & Software Engineering Insights | Tansur Software Solutions',
  description: 'Read in-depth guides, technology trends, payroll automation tutorials, and housing society ERP best practices from Tansur Software Solutions.',
});

export default function BlogPage() {
  return (
    <div className="bg-slate-50 min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-100/90 border border-blue-200 text-blue-900 text-xs font-bold uppercase tracking-wider mb-4">
            <BookOpen className="w-4 h-4 text-blue-600" />
            <span>Knowledge Hub</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-slate-950 tracking-tight">
            Software Engineering Insights & Tech Guides
          </h1>
          <p className="mt-4 text-slate-600 text-base sm:text-lg leading-relaxed">
            Stay updated with expert perspectives on enterprise software automation, Next.js architecture, society ERP innovations, and payroll compliance.
          </p>
        </div>

        {/* Featured Post Card */}
        {BLOG_POSTS.length > 0 && (
          <div className="bg-white rounded-3xl border border-slate-200/90 overflow-hidden shadow-lg mb-16 hover:border-blue-400 transition-all">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 p-8 sm:p-12 space-y-4">
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 rounded-full text-xs font-bold text-white bg-blue-600">
                    Featured Article
                  </span>
                  <span className="text-xs font-semibold text-cyan-600">
                    {BLOG_POSTS[0].category}
                  </span>
                </div>

                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 hover:text-blue-600 transition-colors">
                  {BLOG_POSTS[0].title}
                </h2>

                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  {BLOG_POSTS[0].excerpt}
                </p>

                <div className="flex items-center gap-4 text-xs text-slate-500 pt-2">
                  <span className="flex items-center gap-1.5 font-medium text-slate-800">
                    <User className="w-3.5 h-3.5 text-blue-600" /> {BLOG_POSTS[0].author}
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-slate-400" /> {BLOG_POSTS[0].date}
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-slate-400" /> {BLOG_POSTS[0].readTime}
                  </span>
                </div>

                <div className="pt-4">
                  <Link
                    href={`/contact?subject=${encodeURIComponent(BLOG_POSTS[0].title)}`}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 shadow-md transition-all"
                  >
                    <span>Discuss This Solution With Our Team</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-5 relative h-64 sm:h-96 w-full">
                <Image
                  src={BLOG_POSTS[0].coverImage}
                  alt={BLOG_POSTS[0].title}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        )}

        {/* Regular Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BLOG_POSTS.slice(1).map((post) => (
            <div
              key={post.id}
              className="bg-white rounded-3xl border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-blue-400 transition-all overflow-hidden flex flex-col justify-between"
            >
              <div>
                <div className="relative h-48 w-full bg-slate-100">
                  <Image
                    src={post.coverImage}
                    alt={post.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="px-3 py-1 rounded-full text-[11px] font-bold text-white bg-slate-900/90 backdrop-blur-md">
                      {post.category}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-3 text-[11px] text-slate-400 mb-2">
                    <span>{post.date}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-950 mb-2 line-clamp-2 hover:text-blue-600 transition-colors">
                    {post.title}
                  </h3>

                  <p className="text-slate-600 text-xs line-clamp-3 leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>
              </div>

              <div className="px-6 pb-6 pt-3 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs font-bold text-slate-500">{post.author}</span>
                <Link
                  href="/contact"
                  className="text-xs font-bold text-blue-600 hover:text-blue-700 flex items-center gap-1"
                >
                  <span>Connect</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
