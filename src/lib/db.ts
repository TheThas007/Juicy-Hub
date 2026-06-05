import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore, collection, getDocs, doc, setDoc, deleteDoc, getDoc } from "firebase/firestore";

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

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore(app);

// Products
export async function getProducts(): Promise<Product[]> {
  try {
    const snapshot = await getDocs(collection(db, "products"));
    return snapshot.docs.map(doc => doc.data() as Product);
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
}

export async function getProduct(id: string): Promise<Product | null> {
  const docSnap = await getDoc(doc(db, "products", id));
  return docSnap.exists() ? docSnap.data() as Product : null;
}

export async function saveProduct(product: Product): Promise<void> {
  await setDoc(doc(db, "products", product.id), product);
}

export async function deleteProduct(id: string): Promise<void> {
  await deleteDoc(doc(db, "products", id));
}

// Gallery
export async function getGallery(): Promise<GalleryImage[]> {
  try {
    const snapshot = await getDocs(collection(db, "gallery"));
    return snapshot.docs.map(doc => doc.data() as GalleryImage);
  } catch (error) {
    console.error("Error fetching gallery:", error);
    return [];
  }
}

export async function getGalleryItem(id: string): Promise<GalleryImage | null> {
  const docSnap = await getDoc(doc(db, "gallery", id));
  return docSnap.exists() ? docSnap.data() as GalleryImage : null;
}

export async function saveGalleryImage(image: GalleryImage): Promise<void> {
  await setDoc(doc(db, "gallery", image.id), image);
}

export async function deleteGalleryImage(id: string): Promise<void> {
  await deleteDoc(doc(db, "gallery", id));
}
