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
  const snapshot = await getDocs(collection(db, "products"));
  return snapshot.docs.map(doc => doc.data() as Product);
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
  const snapshot = await getDocs(collection(db, "gallery"));
  const gallery = snapshot.docs.map(doc => doc.data() as GalleryImage);
  
  // Seed with default images if empty
  if (gallery.length === 0) {
    const defaultGallery: GalleryImage[] = [
      {
        "id": "g1",
        "url": "https://lh3.googleusercontent.com/aida-public/AB6AXuCNc7mjysQw-pBtuH4QTjNSChAPO9xmD_tC5UdqufnP4dVydgZvjyGratI2XKd4teXdXlmJQ2nohtsAwzIrCXjHIUdDp_OhoMz171nMtmCibCXxSDCSCbKdsUHEJJE9OjeapeEAMLoAzANAUzmI1ud1X_80ZzTwSl5vQuT9B8hm6lDi436eNoWQf4jDj4KQEyHFc9uVOyvetXolYaF1o9HywAmvOstM6E4OAQmphRxzF7qgtdqeL8d7kw_HilyUIdgJ-W6h8ukhvVk",
        "alt": "Classic Falooda"
      },
      {
        "id": "g2",
        "url": "https://lh3.googleusercontent.com/aida-public/AB6AXuAF0ZY4x6XRIqBRFpPi2UlQzoWTr5n21MpPJMK0UawRlHFtKGWgZ5dzwHeXumqS3XrLn95Bri4fE7awQIwLbfd75JZpRtmM_crGWjg5EQSIZse-DNdm2IyDrJviw1wAFyuHkHudGujQcbOKezlF0f1xEfCShxOor6oCur5WTRhp3SjzxYg1BIHGEdbyOOSp0MYXQBcf5OqiH9KJJ3RXelevszTFLHxctBfXjbZZLdV4gPv0t-mQOqalMESgL_CFqL3cbbfVlYcVOiE",
        "alt": "Masala Tea"
      },
      {
        "id": "g3",
        "url": "https://lh3.googleusercontent.com/aida-public/AB6AXuBDNe7cDN668GpET0_Gpb4bkDwBJ62oXT8ZdnIY3lVpwLLvF_1h0UNU86DDpmwBBoxiiJPn5rW2nCbfQGa0G345_lNTLedQUs3Q50J4d-XNx3hP6WiYHif-0EmYGoweAiAwIf3PlgFLMnEcjYPzF9X86ELq728qR5DaVBDZuYs_B2uE5tAQPtj3x0-Br_S9j3Sc7UPeidyw1WvmppGYqO_mJDnbdt0qNdGlaRXZz0EeW2SXAdUh6wa509JObC7lc_V2UcqwdF0q2ng",
        "alt": "Milk Sarbath"
      },
      {
        "id": "g4",
        "url": "https://lh3.googleusercontent.com/aida-public/AB6AXuDLewevG2XDmOiS6cqtGCONpWBiqhMkMBRaEhTBfi9Hy-DI5l2X_fxXEnjawZSj5pvQddL2jam6ad_yd-PcRBTSUuJzhgYY1m_1tvZ4dkqtM1pzbfq8cKZMplhcmnfVKWVm_mu46hsYDGPHio0EqgKuvoeYVDFWZ4mzF9jfmxF03RkZM3wfEdAYn_lcsmfFfM3BpX3kCvozzH8oBfE3aAWn_InyUqYTgwFC3ZwcvpDmh1oN16fGEKDsGTrTbBRz1cXFXIDkOk6siWM",
        "alt": "Watermelon Splash"
      }
    ];
    for (const img of defaultGallery) {
      await saveGalleryImage(img);
    }
    return defaultGallery;
  }
  return gallery;
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
