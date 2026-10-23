import { INITIAL_PRODUCTS, ProductData } from '@/data/products';
import { connectDB } from '@/lib/mongodb';
import Product from '@/models/Product';

let memoryProducts: ProductData[] = [...INITIAL_PRODUCTS];

export async function getLiveProducts(): Promise<ProductData[]> {
  try {
    // Attempt DB with fast timeout
    const dbPromise = (async () => {
      await connectDB();
      return await Product.find().sort({ createdAt: -1 }).lean();
    })();

    // Timeout safety race: if DB takes more than 500ms, immediately return cached products
    const timeoutPromise = new Promise((resolve) => setTimeout(() => resolve(null), 500));
    const result: any = await Promise.race([dbPromise, timeoutPromise]);

    if (result && Array.isArray(result) && result.length > 0) {
      return result.map((p: any) => ({
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
    // Fail silently & instantaneously
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
