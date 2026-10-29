import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloatingButton from "@/components/WhatsAppFloatingButton";
import { constructMetadata } from "@/lib/seo";

// Premium Enterprise Modern Typography
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  ...constructMetadata({
    title: "Best Software Development Company in Lucknow | Tansur Software Solutions",
    description: "Tansur Software Solutions is the #1 software development company in Lucknow offering enterprise ERPs, Society Management Software, Real Estate CRM, Next.js web applications, mobile apps, and dedicated developer hiring.",
    keywords: [
      "best software development company in lucknow",
      "software development company lucknow",
      "top software company in lucknow",
      "best it company in lucknow",
      "website development company in lucknow",
      "mobile app development company in lucknow",
      "erp software development lucknow",
      "real estate erp software lucknow",
      "society management software lucknow",
      "Tansur Software Solutions Lucknow",
      "best it company gomti nagar lucknow",
      "custom software development uttar pradesh"
    ]
  }),
  verification: {
    google: "google4ef2557449badc55",
  },
  icons: {
    icon: [
      { url: "/logo.png", type: "image/png" },
      { url: "/favicon.png", type: "image/png" },
      { url: "/favicon.ico" }
    ],
    apple: [
      { url: "/logo.png", type: "image/png" }
    ],
    shortcut: ["/logo.png"],
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Rich Schema: LocalBusiness + SoftwareApplication for Lucknow #1 Rank
  const schemas = [
    {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "@id": "https://tansursoftware.com/#localbusiness",
      "name": "Tansur Software Solutions",
      "alternateName": "Best Software Development Company in Lucknow",
      "url": "https://tansursoftware.com",
      "logo": "https://tansursoftware.com/logo.png",
      "image": "https://tansursoftware.com/office-tansur.jpg",
      "telephone": "+91-9876543210",
      "email": "contact@tansursoftware.com",
      "priceRange": "₹₹",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Vibhuti Khand, Gomti Nagar / Sector 62",
        "addressLocality": "Lucknow",
        "addressRegion": "Uttar Pradesh",
        "postalCode": "226010",
        "addressCountry": "IN"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 26.8524,
        "longitude": 80.9992
      },
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "opens": "09:00",
        "closes": "19:00"
      },
      "areaServed": [
        "Lucknow",
        "Noida",
        "Kanpur",
        "Varanasi",
        "Uttar Pradesh",
        "Delhi NCR",
        "India"
      ],
      "sameAs": [
        "https://www.linkedin.com/company/tansursoftware",
        "https://twitter.com/tansursoftware"
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      "name": "Tansur Enterprise ERP Suite",
      "applicationCategory": "BusinessApplication",
      "operatingSystem": "All modern browsers, Cloud, Android, iOS",
      "provider": {
        "@id": "https://tansursoftware.com/#localbusiness"
      }
    }
  ];

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" type="image/png" sizes="32x32" href="/logo.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/logo.png" />
        <link rel="apple-touch-icon" href="/logo.png" />
        <link rel="shortcut icon" href="/logo.png" />
        <meta name="google-site-verification" content="google4ef2557449badc55" />
        {schemas.map((s, idx) => (
          <script
            key={idx}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }}
          />
        ))}
      </head>
      <body className={`${inter.variable} ${plusJakarta.variable} antialiased bg-slate-50 text-slate-900 selection:bg-blue-600 selection:text-white`}>
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
