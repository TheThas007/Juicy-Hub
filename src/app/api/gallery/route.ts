import { NextRequest, NextResponse } from 'next/server';
import { getDb, saveDb, GalleryImage } from '@/lib/db';

export async function GET() {
  try {
    const db = getDb();
    return NextResponse.json(db.gallery);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch gallery' }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const db = getDb();
    
    const newImage: GalleryImage = {
      id: Date.now().toString(),
      url: body.url || '',
      alt: body.alt || 'Gallery Image',
    };

    db.gallery.push(newImage);
    saveDb(db);

    return NextResponse.json(newImage, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to add image' }, { status: 500 });
  }
}
