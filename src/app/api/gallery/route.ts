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
  console.log("POST /api/gallery called!");
  try {
    const body = await request.json();
    console.log("Body received:", body);
    
    if (!body.url || !body.alt) {
      console.log("Missing fields in body");
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    const newImage: GalleryImage = {
      id: Date.now().toString(),
      url: body.url,
      alt: body.alt,
    };

    console.log("Attempting to save image to Firebase...");
    await saveGalleryImage(newImage);
    console.log("Image saved successfully to Firebase!");

    return NextResponse.json(newImage, { status: 201 });
  } catch (error: any) {
    console.error("Firebase save error in POST /api/gallery:", error);
    return NextResponse.json({ error: 'Failed to create image', details: error.message }, { status: 500 });
  }
}
