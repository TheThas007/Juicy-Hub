import { NextRequest, NextResponse } from 'next/server';
export const dynamic = 'force-dynamic';
import { getGallery, saveGalleryImage, GalleryImage } from '@/lib/db';

export async function GET() {
  try {
    const gallery = await getGallery();
    return NextResponse.json(gallery);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch gallery' }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    const newImage: GalleryImage = {
      id: Date.now().toString(),
      url: body.url || '',
      alt: body.alt || 'Gallery Image',
    };

    await saveGalleryImage(newImage);

    return NextResponse.json(newImage, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to add image' }, { status: 500 });
  }
}
