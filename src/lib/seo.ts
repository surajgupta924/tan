import { Metadata } from 'next';

const siteUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://tansursoftware.com';

export function constructMetadata({
  title = 'Tansur Software Solutions | Next-Gen Enterprise Software, ERP & Tech Talent',
  description = 'Tansur Software Solutions builds scalable custom software, multi-tenant SaaS, Housing Society ERP, Biometric Payroll HRMS, School Automation, and Travel Engines. Hire dedicated developers in 48 hours.',
  image = '/logo.png',
  canonicalUrl,
  keywords = [],
  noIndex = false,
}: {
  title?: string;
  description?: string;
  image?: string;
  canonicalUrl?: string;
  keywords?: string[];
  noIndex?: boolean;
} = {}): Metadata {
  const defaultKeywords = [
    'Tansur Software Solutions',
    'Tansur Software',
    'Custom Software Development Company',
    'Society Management ERP Software',
    'Housing Society Billing Software India',
    'Payroll Management Software India',
    'Biometric HRMS Software',
    'School Management System ERP',
    'Travel Booking Engine Software',
    'Hire Dedicated Next.js Developers',
    'Hire Full Stack Developers India',
    'WhatsApp Business API Integration Services',
    'SaaS Product Development Agency',
    'Enterprise ERP Solutions Noida Bengaluru'
  ];

  const mergedKeywords = Array.from(new Set([...defaultKeywords, ...keywords]));

  return {
    title: {
      default: title,
      template: `%s | Tansur Software Solutions`,
    },
    description,
    keywords: mergedKeywords,
    authors: [{ name: 'Tansur Software Solutions', url: siteUrl }],
    creator: 'Tansur Software Solutions',
    publisher: 'Tansur Software Solutions',
    formatDetection: {
      email: true,
      address: true,
      telephone: true,
    },
    metadataBase: new URL(siteUrl),
    alternates: {
      canonical: canonicalUrl || siteUrl,
    },
    openGraph: {
      type: 'website',
      locale: 'en_US',
      url: canonicalUrl || siteUrl,
      title,
      description,
      siteName: 'Tansur Software Solutions',
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: 'Tansur Software Solutions - Innovative Technology. Powerful Solutions.',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image],
      creator: '@tansursoftware',
      site: '@tansursoftware',
    },
    robots: {
      index: !noIndex,
      follow: !noIndex,
      nocache: false,
      googleBot: {
        index: !noIndex,
        follow: !noIndex,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
}
