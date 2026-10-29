import { Metadata } from 'next';

const siteUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://tan-iota.vercel.app';

export function constructMetadata({
  title = 'Tansur Software Solutions | Enterprise Software, Real Estate ERP & Tech Talent',
  description = 'Tansur Software Solutions crafts world-class ERPs, Society Management Software, Real Estate CRM, Payroll HRMS, School Automation, and Travel ERP solutions built for modern businesses.',
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
    'Real Estate CRM Software India',
    'Housing Society Billing Software India',
    'Payroll Management Software India',
    'Biometric HRMS Software',
    'School Management System ERP',
    'Travel Booking Engine Software',
    'Website Development Company',
    'Mobile App Development Company',
    'Digital Marketing Agency',
    'SEO Services Company',
    'UI UX Design Agency',
    'Hire Dedicated Next.js Developers',
    'Enterprise ERP Solutions Noida Bengaluru'
  ];

  const mergedKeywords = Array.from(new Set([...defaultKeywords, ...keywords]));
  const fullImageUrl = image.startsWith('http') ? image : `${siteUrl}${image}`;

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
    icons: {
      icon: [
        { url: '/favicon.ico' },
        { url: '/icon.png', type: 'image/png' },
      ],
      apple: [{ url: '/apple-icon.png' }],
      shortcut: ['/favicon.ico'],
    },
    openGraph: {
      type: 'website',
      locale: 'en_US',
      url: canonicalUrl || siteUrl,
      title: title || 'Tansur Software Solutions | Enterprise Software & ERP',
      description,
      siteName: 'Tansur Software Solutions',
      images: [
        {
          url: fullImageUrl,
          width: 1200,
          height: 630,
          alt: 'Tansur Software Solutions - Innovative Technology. Powerful Solutions.',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: title || 'Tansur Software Solutions',
      description,
      images: [fullImageUrl],
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
