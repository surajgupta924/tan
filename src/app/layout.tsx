import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloatingButton from "@/components/WhatsAppFloatingButton";
import { constructMetadata } from "@/lib/seo";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = constructMetadata();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Enhanced 100% Comprehensive JSON-LD Schema: Organization, SoftwareApplication & WebSite
  const schemas = [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "@id": "https://tansursoftware.com/#organization",
      "name": "Tansur Software Solutions",
      "url": "https://tansursoftware.com",
      "logo": {
        "@type": "ImageObject",
        "url": "https://tansursoftware.com/logo.png",
        "width": 512,
        "height": 512
      },
      "slogan": "Ideas • Technology • Solutions • Growth",
      "description": "Enterprise software company engineering Housing Society ERP, Payroll HRMS, School Automation, Travel Engines, and providing dedicated Next.js & Full-Stack developer hiring.",
      "telephone": "+91-9876543210",
      "email": "contact@tansursoftware.com",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Sector 62, Electronic City",
        "addressLocality": "Noida",
        "addressRegion": "Uttar Pradesh",
        "postalCode": "201309",
        "addressCountry": "IN"
      },
      "sameAs": [
        "https://www.linkedin.com/company/tansursoftware",
        "https://twitter.com/tansursoftware"
      ],
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+91-9876543210",
        "contactType": "Customer Support & Sales",
        "areaServed": ["IN", "US", "AE", "GB"],
        "availableLanguage": ["English", "Hindi"]
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "@id": "https://tansursoftware.com/#website",
      "url": "https://tansursoftware.com",
      "name": "Tansur Software Solutions",
      "publisher": {
        "@id": "https://tansursoftware.com/#organization"
      },
      "inLanguage": "en-US"
    },
    {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      "name": "Tansur ERP & Cloud Suite",
      "applicationCategory": "BusinessApplication",
      "operatingSystem": "Web, Cloud, Android, iOS",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "INR"
      },
      "author": {
        "@id": "https://tansursoftware.com/#organization"
      }
    }
  ];

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {schemas.map((s, idx) => (
          <script
            key={idx}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }}
          />
        ))}
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-slate-50 text-slate-900 selection:bg-blue-600 selection:text-white`}>
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <WhatsAppFloatingButton />
      </body>
    </html>
  );
}
