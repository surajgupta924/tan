import { NextResponse } from 'next/server';
import { connectDB } from '@/lib/mongodb';
import Product from '@/models/Product';
import { getLiveProducts, addMemoryProduct, deleteMemoryProduct } from '@/lib/productsService';

export async function GET() {
  try {
    const products = await getLiveProducts();
    return NextResponse.json({ success: true, data: products });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { title, slug, tagline, category, description, features, dummyImage, badge, isPopular } = body;

    if (!title || !tagline) {
      return NextResponse.json(
        { success: false, error: 'Title and Tagline are required' },
        { status: 400 }
      );
    }

    const finalSlug = (slug || title).toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');
    const featureList = Array.isArray(features) 
      ? features 
      : (typeof features === 'string' ? features.split('\n').map((s: string) => s.trim()).filter(Boolean) : []);

    const productPayload = {
      id: 'prod-' + Date.now(),
      title,
      slug: finalSlug,
      tagline,
      category: category || 'Custom ERP Solution',
      description: description || 'High-performance scalable software built for automated operations.',
      features: featureList.length > 0 ? featureList : ['Automated Cloud Dashboard', 'WhatsApp Trigger Alerts', '24/7 Security & Support'],
      dummyImage: dummyImage || 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
      badge: badge || 'New Launch',
      isPopular: !!isPopular,
    };

    // 1. Try saving in MongoDB
    try {
      await connectDB();
      const createdInDB = await Product.create(productPayload);
      productPayload.id = createdInDB._id.toString();
    } catch (dbErr) {
      console.warn("MongoDB offline, adding to memory fallback store");
    }

    // 2. Also save in memory store so public page instantly displays it
    addMemoryProduct(productPayload);

    return NextResponse.json({
      success: true,
      message: 'Product successfully added and is now live on the public website!',
      data: productPayload,
    });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

export async function DELETE(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get('id');

    if (!id) {
      return NextResponse.json({ success: false, error: 'Product ID required' }, { status: 400 });
    }

    try {
      await connectDB();
      await Product.findByIdAndDelete(id);
    } catch (err) {}

    deleteMemoryProduct(id);

    return NextResponse.json({ success: true, message: 'Product deleted' });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
