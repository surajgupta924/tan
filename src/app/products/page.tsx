import React from 'react';
import { Metadata } from 'next';
import { constructMetadata } from '@/lib/seo';
import ProductsClient from './ProductsClient';

export const metadata: Metadata = constructMetadata({
  title: 'Our Software Products | Society, Payroll, School & Travel ERP Solutions',
  description: 'Explore the full suite of Tansur Software Solutions: Housing Society Management, Payroll HRMS, School Automation, Travel Engine, and Enterprise Cloud Solutions.',
});

export default function ProductsPage() {
  return <ProductsClient />;
}
