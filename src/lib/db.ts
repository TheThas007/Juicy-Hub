import fs from 'fs';
import path from 'path';

export interface Product {
  id: string;
  name: string;
  desc: string;
  price: string;
  image: string;
  category: string;
  isFeatured: boolean;
  isBestSeller: boolean;
}

export interface GalleryImage {
  id: string;
  url: string;
  alt: string;
}

export interface Database {
  products: Product[];
  gallery: GalleryImage[];
}

const dbFilePath = path.join(process.cwd(), 'src', 'data', 'db.json');

export function getDb(): Database {
  try {
    const data = fs.readFileSync(dbFilePath, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    // If file doesn't exist or is corrupted, return empty default
    return { products: [], gallery: [] };
  }
}

export function saveDb(db: Database): void {
  fs.writeFileSync(dbFilePath, JSON.stringify(db, null, 2), 'utf8');
}
