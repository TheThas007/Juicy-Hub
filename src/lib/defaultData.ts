import { Product, GalleryImage } from './db';

export const defaultProducts: Product[] = [
  {
    "id": "dp_1",
    "name": "Classic Falooda",
    "desc": "Fresh and delicious classic falooda made with premium ingredients.",
    "price": "50",
    "image": "/images/Screenshot 2026-06-05 202442.png",
    "category": "Snacks",
    "isFeatured": true,
    "isBestSeller": true
  },
  {
    "id": "dp_2",
    "name": "Mango Shake",
    "desc": "Fresh and delicious mango shake made with premium ingredients.",
    "price": "60",
    "image": "/images/Screenshot 2026-06-05 202520.png",
    "category": "Milkshakes",
    "isFeatured": true,
    "isBestSeller": false
  },
  {
    "id": "dp_3",
    "name": "Special Burger",
    "desc": "Fresh and delicious special burger made with premium ingredients.",
    "price": "60",
    "image": "/images/Screenshot 2026-06-05 202547.png",
    "category": "Snacks",
    "isFeatured": true,
    "isBestSeller": false
  },
  {
    "id": "dp_4",
    "name": "Masala Tea",
    "desc": "Fresh and delicious masala tea made with premium ingredients.",
    "price": "70",
    "image": "/images/Screenshot 2026-06-05 202559.png",
    "category": "Hot Beverages",
    "isFeatured": true,
    "isBestSeller": true
  },
  {
    "id": "dp_5",
    "name": "Watermelon Juice",
    "desc": "Fresh and delicious watermelon juice made with premium ingredients.",
    "price": "100",
    "image": "/images/Screenshot 2026-06-05 202618.png",
    "category": "Juices",
    "isFeatured": true,
    "isBestSeller": false
  },
  {
    "id": "dp_6",
    "name": "Chocolate Smoothie",
    "desc": "Fresh and delicious chocolate smoothie made with premium ingredients.",
    "price": "110",
    "image": "/images/Screenshot 2026-06-05 202635.png",
    "category": "Smoothies",
    "isFeatured": true,
    "isBestSeller": false
  },
  {
    "id": "dp_7",
    "name": "Strawberry Mocktail",
    "desc": "Fresh and delicious strawberry mocktail made with premium ingredients.",
    "price": "140",
    "image": "/images/Screenshot 2026-06-05 202651.png",
    "category": "Mocktails",
    "isFeatured": true,
    "isBestSeller": true
  },
  {
    "id": "dp_8",
    "name": "Chicken Sandwich",
    "desc": "Fresh and delicious chicken sandwich made with premium ingredients.",
    "price": "60",
    "image": "/images/Screenshot 2026-06-05 202704.png",
    "category": "Snacks",
    "isFeatured": true,
    "isBestSeller": false
  },
  {
    "id": "dp_9",
    "name": "Fresh Lime Soda",
    "desc": "Fresh and delicious fresh lime soda made with premium ingredients.",
    "price": "110",
    "image": "/images/Screenshot 2026-06-05 202725.png",
    "category": "Juices",
    "isFeatured": false,
    "isBestSeller": false
  },
  {
    "id": "dp_10",
    "name": "Cold Coffee",
    "desc": "Fresh and delicious cold coffee made with premium ingredients.",
    "price": "60",
    "image": "/images/Screenshot 2026-06-05 202735.png",
    "category": "Hot Beverages",
    "isFeatured": false,
    "isBestSeller": true
  },
  {
    "id": "dp_11",
    "name": "Pineapple Juice",
    "desc": "Fresh and delicious pineapple juice made with premium ingredients.",
    "price": "80",
    "image": "/images/Screenshot 2026-06-05 202806.png",
    "category": "Juices",
    "isFeatured": false,
    "isBestSeller": false
  },
  {
    "id": "dp_12",
    "name": "Grape Juice",
    "desc": "Fresh and delicious grape juice made with premium ingredients.",
    "price": "110",
    "image": "/images/Screenshot 2026-06-05 202825.png",
    "category": "Juices",
    "isFeatured": false,
    "isBestSeller": false
  },
  {
    "id": "dp_13",
    "name": "Oreo Milkshake",
    "desc": "Fresh and delicious oreo milkshake made with premium ingredients.",
    "price": "130",
    "image": "/images/Screenshot 2026-06-05 202845.png",
    "category": "Smoothies",
    "isFeatured": false,
    "isBestSeller": true
  },
  {
    "id": "dp_14",
    "name": "Vanilla Shake",
    "desc": "Fresh and delicious vanilla shake made with premium ingredients.",
    "price": "50",
    "image": "/images/Screenshot 2026-06-05 202914.png",
    "category": "Milkshakes",
    "isFeatured": false,
    "isBestSeller": false
  },
  {
    "id": "dp_15",
    "name": "Pomegranate Juice",
    "desc": "Fresh and delicious pomegranate juice made with premium ingredients.",
    "price": "60",
    "image": "/images/Screenshot 2026-06-05 202945.png",
    "category": "Juices",
    "isFeatured": false,
    "isBestSeller": false
  },
  {
    "id": "dp_16",
    "name": "Apple Juice",
    "desc": "Fresh and delicious apple juice made with premium ingredients.",
    "price": "80",
    "image": "/images/Screenshot 2026-06-05 203001.png",
    "category": "Juices",
    "isFeatured": false,
    "isBestSeller": true
  },
  {
    "id": "dp_17",
    "name": "Mixed Fruit Juice",
    "desc": "Fresh and delicious mixed fruit juice made with premium ingredients.",
    "price": "50",
    "image": "/images/Screenshot 2026-06-05 203016.png",
    "category": "Juices",
    "isFeatured": false,
    "isBestSeller": false
  },
  {
    "id": "dp_18",
    "name": "Papaya Juice",
    "desc": "Fresh and delicious papaya juice made with premium ingredients.",
    "price": "80",
    "image": "/images/Screenshot 2026-06-05 203035.png",
    "category": "Juices",
    "isFeatured": false,
    "isBestSeller": false
  },
  {
    "id": "dp_19",
    "name": "Carrot Juice",
    "desc": "Fresh and delicious carrot juice made with premium ingredients.",
    "price": "100",
    "image": "/images/Screenshot 2026-06-05 203052.png",
    "category": "Juices",
    "isFeatured": false,
    "isBestSeller": true
  },
  {
    "id": "dp_20",
    "name": "Beetroot Juice",
    "desc": "Fresh and delicious beetroot juice made with premium ingredients.",
    "price": "80",
    "image": "/images/Screenshot 2026-06-05 203145.png",
    "category": "Juices",
    "isFeatured": false,
    "isBestSeller": false
  },
  {
    "id": "dp_21",
    "name": "Lemon Iced Tea",
    "desc": "Fresh and delicious lemon iced tea made with premium ingredients.",
    "price": "70",
    "image": "/images/Screenshot 2026-06-05 203221.png",
    "category": "Hot Beverages",
    "isFeatured": false,
    "isBestSeller": false
  },
  {
    "id": "dp_22",
    "name": "Peach Iced Tea",
    "desc": "Fresh and delicious peach iced tea made with premium ingredients.",
    "price": "90",
    "image": "/images/Screenshot 2026-06-05 203248.png",
    "category": "Hot Beverages",
    "isFeatured": false,
    "isBestSeller": true
  },
  {
    "id": "dp_23",
    "name": "Blue Lagoon Mocktail",
    "desc": "Fresh and delicious blue lagoon mocktail made with premium ingredients.",
    "price": "60",
    "image": "/images/Screenshot 2026-06-05 203305.png",
    "category": "Mocktails",
    "isFeatured": false,
    "isBestSeller": false
  },
  {
    "id": "dp_24",
    "name": "Virgin Mojito",
    "desc": "Fresh and delicious virgin mojito made with premium ingredients.",
    "price": "90",
    "image": "/images/Screenshot 2026-06-05 203319.png",
    "category": "Snacks",
    "isFeatured": false,
    "isBestSeller": false
  }
];

export const defaultGallery: GalleryImage[] = [
  {
    "id": "dg_1",
    "url": "/images/Screenshot 2026-06-05 203341.png",
    "alt": "Gallery image of our delicious offerings"
  },
  {
    "id": "dg_2",
    "url": "/images/Screenshot 2026-06-05 203358.png",
    "alt": "Gallery image of our delicious offerings"
  },
  {
    "id": "dg_3",
    "url": "/images/Screenshot 2026-06-05 203408.png",
    "alt": "Gallery image of our delicious offerings"
  },
  {
    "id": "dg_4",
    "url": "/images/Screenshot 2026-06-05 203421.png",
    "alt": "Gallery image of our delicious offerings"
  },
  {
    "id": "dg_5",
    "url": "/images/Screenshot 2026-06-05 203440.png",
    "alt": "Gallery image of our delicious offerings"
  },
  {
    "id": "dg_6",
    "url": "/images/Screenshot 2026-06-05 203620.png",
    "alt": "Gallery image of our delicious offerings"
  },
  {
    "id": "dg_7",
    "url": "/images/Screenshot 2026-06-05 203638.png",
    "alt": "Gallery image of our delicious offerings"
  },
  {
    "id": "dg_8",
    "url": "/images/Screenshot 2026-06-05 203650.png",
    "alt": "Gallery image of our delicious offerings"
  },
  {
    "id": "dg_9",
    "url": "/images/Screenshot 2026-06-05 203701.png",
    "alt": "Gallery image of our delicious offerings"
  }
];
