import { NextRequest, NextResponse } from 'next/server';
import { getDb, saveDb, Product } from '@/lib/db';

export async function GET() {
  try {
    const db = getDb();
    return NextResponse.json(db.products);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch products' }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const db = getDb();
    
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

    db.products.push(newProduct);
    saveDb(db);

    return NextResponse.json(newProduct, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create product' }, { status: 500 });
  }
}
