const fs = require('fs');
const path = require('path');

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

const defaultProducts = files.slice(0, 24).map((file, i) => {
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

const defaultGallery = files.slice(24).map((file, i) => ({
  id: `dg_${i+1}`,
  url: `/images/${file}`,
  alt: `Gallery image of our delicious offerings`
}));

const fileContent = `import { Product, GalleryImage } from './db';

export const defaultProducts: Product[] = ${JSON.stringify(defaultProducts, null, 2)};

export const defaultGallery: GalleryImage[] = ${JSON.stringify(defaultGallery, null, 2)};
`;

fs.writeFileSync(path.join(__dirname, 'src', 'lib', 'defaultData.ts'), fileContent);
console.log('defaultData.ts generated with ' + defaultProducts.length + ' products and ' + defaultGallery.length + ' gallery images.');
