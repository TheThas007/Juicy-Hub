import { NextRequest, NextResponse } from 'next/server';
import { getGalleryItem, saveGalleryImage, deleteGalleryImage, GalleryImage } from '@/lib/db';

export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const body = await request.json();
    
    const existingImage = await getGalleryItem(id);
    
    if (!existingImage) {
      return NextResponse.json({ error: 'Image not found' }, { status: 404 });
    }

    const updatedImage: GalleryImage = {
      ...existingImage,
      ...body,
      id: id,
    };

    await saveGalleryImage(updatedImage);

    return NextResponse.json(updatedImage);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to update image' }, { status: 500 });
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    
    const existingImage = await getGalleryItem(id);
    
    if (!existingImage) {
      return NextResponse.json({ error: 'Image not found' }, { status: 404 });
    }

    await deleteGalleryImage(id);

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to delete image' }, { status: 500 });
  }
}
