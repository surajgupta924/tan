import { INITIAL_PRODUCTS, ProductData } from '@/data/products';
import { connectDB } from '@/lib/mongodb';
import Product from '@/models/Product';

// In-memory runtime cache for dynamically added products if local MongoDB server is not running
let memoryProducts: ProductData[] = [...INITIAL_PRODUCTS];

export async function getLiveProducts(): Promise<ProductData[]> {
  try {
    await connectDB();
    const dbProducts = await Product.find().sort({ createdAt: -1 }).lean();
    if (dbProducts && dbProducts.length > 0) {
      return dbProducts.map((p: any) => ({
        id: p._id ? p._id.toString() : p.slug,
        title: p.title,
        slug: p.slug,
        tagline: p.tagline,
        category: p.category,
        description: p.description,
        features: p.features || [],
        dummyImage: p.dummyImage || 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
        badge: p.badge || 'Enterprise',
        isPopular: !!p.isPopular,
      }));
    }
  } catch (err) {
    // MongoDB is in fallback mode
  }
  return memoryProducts;
}

export function addMemoryProduct(prod: ProductData) {
  memoryProducts = [prod, ...memoryProducts];
  return memoryProducts;
}

export function deleteMemoryProduct(idOrSlug: string) {
  memoryProducts = memoryProducts.filter(p => p.id !== idOrSlug && p.slug !== idOrSlug);
  return memoryProducts;
}
