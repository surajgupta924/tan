import mongoose, { Schema, Document } from 'mongoose';

export interface IProduct extends Document {
  title: string;
  slug: string;
  tagline: string;
  category: string;
  description: string;
  features: string[];
  dummyImage: string;
  badge?: string;
  demoUrl?: string;
  isPopular?: boolean;
}

const ProductSchema: Schema = new Schema(
  {
    title: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    tagline: { type: String, required: true },
    category: { type: String, required: true },
    description: { type: String, required: true },
    features: [{ type: String }],
    dummyImage: { type: String, default: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80' },
    badge: { type: String, default: 'Enterprise' },
    demoUrl: { type: String, default: '' },
    isPopular: { type: Boolean, default: false },
  },
  { timestamps: true }
);

export default mongoose.models.Product || mongoose.model<IProduct>('Product', ProductSchema);
