import { NextRequest, NextResponse } from 'next/server';
export const dynamic = 'force-dynamic';
import { getProducts, saveProduct, Product } from '@/lib/db';

export async function GET() {
  try {
    const products = await getProducts();
    return NextResponse.json(products);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch products' }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  console.log("POST /api/products called!");
  try {
    const body = await request.json();
    console.log("Product Body received:", body);
    
    const newProduct: Product = {
      id: Date.now().toString(),
      name: body.name || '',
      desc: body.desc || '',
      price: body.price || '',
      image: body.image || '',
      category: body.category || 'Uncategorized',
      isFeatured: body.isFeatured || false,
      isBestSeller: body.isBestSeller || false,
    };

    console.log("Attempting to save product to Firebase...");
    await saveProduct(newProduct);
    console.log("Product saved successfully to Firebase!");

    return NextResponse.json(newProduct, { status: 201 });
  } catch (error: any) {
    console.error("Firebase save error in POST /api/products:", error);
    return NextResponse.json({ error: 'Failed to create product', details: error.message }, { status: 500 });
  }
}
