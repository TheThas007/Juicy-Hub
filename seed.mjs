import { initializeApp } from 'firebase/app';
import { getFirestore, collection, setDoc, doc } from 'firebase/firestore';


// We need to compile defaultData.ts first or just use a raw JS script
// Actually I'll just put the data here to avoid TS compilation issues

const firebaseConfig = {
  apiKey: "AIzaSyCy08no1xlIE8GZNGF-IMbVWQyvAs-7AQ0",
  authDomain: "juicyhub-3cfb8.firebaseapp.com",
  projectId: "juicyhub-3cfb8",
  storageBucket: "juicyhub-3cfb8.firebasestorage.app",
  messagingSenderId: "688739235467",
  appId: "1:688739235467:web:19f3b7b156474ff939468e",
  measurementId: "G-CMPY31X5NB"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function seed() {
  console.log("Seeding products...");
  for (const p of defaultProducts) {
    await setDoc(doc(db, "products", p.id), p);
    console.log("Saved product:", p.name);
  }
  
  console.log("Seeding gallery...");
  for (const g of defaultGallery) {
    await setDoc(doc(db, "gallery", g.id), g);
    console.log("Saved gallery image:", g.url);
  }
  
  console.log("Done seeding! You can exit (Ctrl+C).");
  process.exit(0);
}

// Just copy the data directly here to avoid module issues in node
import fs from 'fs';
import path from 'path';

const __dirname = path.resolve();
const imagesDir = path.join(__dirname, 'public', 'images');
const files = fs.readdirSync(imagesDir).filter(f => f.endsWith('.png') || f.endsWith('.jpg') || f.endsWith('.jpeg'));

const juiceNames = [
  "Classic Falooda", "Mango Shake", "Special Burger", "Masala Tea", 
  "Watermelon Juice", "Chocolate Smoothie", "Strawberry Mocktail", "Chicken Sandwich",
  "Fresh Lime Soda", "Cold Coffee", "Pineapple Juice", "Grape Juice",
  "Oreo Milkshake", "Vanilla Shake", "Pomegranate Juice", "Apple Juice",
  "Mixed Fruit Juice", "Papaya Juice", "Carrot Juice", "Beetroot Juice",
  "Lemon Iced Tea", "Peach Iced Tea", "Blue Lagoon Mocktail", "Virgin Mojito",
  "Sweet Lassi", "Salted Lassi", "Rose Milk", "Badam Milk",
  "Veg Club Sandwich", "Cheese Grilled Sandwich", "French Fries", "Potato Wedges",
  "Paneer Wrap", "Chicken Wrap"
];

const categories = ["Juices", "Smoothies", "Milkshakes", "Mocktails", "Desserts", "Hot Beverages", "Snacks"];

const defaultProductsLocal = files.slice(0, 24).map((file, i) => {
  const name = juiceNames[i] || `Special Item ${i+1}`;
  let category = categories[Math.floor(Math.random() * categories.length)];
  if (name.includes("Juice")) category = "Juices";
  if (name.includes("Shake")) category = "Milkshakes";
  if (name.includes("Smoothie")) category = "Smoothies";
  if (name.includes("Mocktail")) category = "Mocktails";
  if (name.includes("Tea") || name.includes("Coffee")) category = "Hot Beverages";
  if (name.includes("Sandwich") || name.includes("Burger") || name.includes("Wrap") || name.includes("Fries")) category = "Snacks";
  
  return {
    id: `dp_${i+1}`,
    name: name,
    desc: `Fresh and delicious ${name.toLowerCase()} made with premium ingredients.`,
    price: `${Math.floor(Math.random() * 10) * 10 + 50}`,
    image: `/images/${file}`,
    category: category,
    isFeatured: i < 8,
    isBestSeller: i % 3 === 0
  };
});

const defaultGalleryLocal = files.slice(24).map((file, i) => ({
  id: `dg_${i+1}`,
  url: `/images/${file}`,
  alt: `Gallery image of our delicious offerings`
}));

// Run it but we must use defaultProductsLocal
// Let's redefine seed using local vars
async function seedLocal() {
  console.log("Seeding products...");
  for (const p of defaultProductsLocal) {
    await setDoc(doc(db, "products", p.id), p);
    console.log("Saved product:", p.name);
  }
  
  console.log("Seeding gallery...");
  for (const g of defaultGalleryLocal) {
    await setDoc(doc(db, "gallery", g.id), g);
    console.log("Saved gallery image:", g.url);
  }
  
  console.log("Done seeding! You can exit (Ctrl+C).");
  process.exit(0);
}

seedLocal().catch(console.error);
