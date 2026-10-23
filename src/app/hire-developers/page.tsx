import React from 'react';
import { Metadata } from 'next';
import { constructMetadata } from '@/lib/seo';
import HireDevelopersClient from './HireDevelopersClient';

export const metadata: Metadata = constructMetadata({
  title: 'Hire Dedicated Developers | Next.js, React, Node.js & Full-Stack Engineers',
  description: 'Hire pre-vetted full-stack developers, Next.js engineers, React experts, and mobile app developers from Tansur Software Solutions. Scale your engineering team rapidly.',
});

export default function HireDevelopersPage() {
  return <HireDevelopersClient />;
}
