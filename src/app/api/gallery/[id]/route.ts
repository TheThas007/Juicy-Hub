import { NextRequest, NextResponse } from 'next/server';
import { getDb, saveDb } from '@/lib/db';

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const db = getDb();
    
    const initialLength = db.gallery.length;
    db.gallery = db.gallery.filter(img => img.id !== id);
    
    if (db.gallery.length === initialLength) {
      return NextResponse.json({ error: 'Image not found' }, { status: 404 });
    }

    saveDb(db);

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to delete image' }, { status: 500 });
  }
}
