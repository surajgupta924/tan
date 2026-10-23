
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

export const metadata: Metadata = {
  ...constructMetadata(),
  verification: {
    google: "google4ef2557449badc55",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const schemas = [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "@id": "https://tansursoftware.com/#organization",
      name: "Tansur Software Solutions",
      url: "https://tansursoftware.com",
      logo: {
        "@type": "ImageObject",
        url: "https://tansursoftware.com/logo.png",
        width: 512,
        height: 512,
      },
      slogan: "Ideas • Technology • Solutions • Growth",
      description:
        "Software development, custom business applications, SaaS products, and IT solutions.",
      email: "contact@tansursoftware.com",
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "@id": "https://tansursoftware.com/#website",
      url: "https://tansursoftware.com",
      name: "Tansur Software Solutions",
      publisher: {
        "@id": "https://tansursoftware.com/#organization",
      },
      inLanguage: "en-IN",
    },
  ];

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {schemas.map((schema, index) => (
          <script
            key={index}
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(schema),
            }}
          />
        ))}
      </head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-slate-50 text-slate-900 selection:bg-blue-600 selection:text-white`}
      >
        <Navbar />

        <main className="min-h-screen">{children}</main>

        <Footer />

        <WhatsAppFloatingButton />
      </body>
    </html>
  );
}
