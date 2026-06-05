import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs, doc, updateDoc, setDoc } from 'firebase/firestore';
import fs from 'fs';
import path from 'path';

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

const __dirname = path.resolve();
const imagesDir = path.join(__dirname, 'public', 'images');
const files = fs.readdirSync(imagesDir).filter(f => f.endsWith('.png') || f.endsWith('.jpg') || f.endsWith('.jpeg') || f.endsWith('.mp4'));

async function fix() {
  console.log("Renaming files and updating DB...");
  let count = 1;
  const fileMap = {}; // oldName -> newName
  
  for (const file of files) {
    const ext = path.extname(file);
    const newName = `img-${count}${ext}`;
    
    // Rename file on disk
    fs.renameSync(path.join(imagesDir, file), path.join(imagesDir, newName));
    fileMap[`/images/${file}`] = `/images/${newName}`;
    
    // Also handle URL encoded versions just in case
    fileMap[`/images/${encodeURIComponent(file)}`] = `/images/${newName}`;
    
    count++;
  }
  
  console.log("Renamed files on disk.");
  
  // Update products in DB
  const productsSnap = await getDocs(collection(db, "products"));
  for (const docSnap of productsSnap.docs) {
    const data = docSnap.data();
    if (data.image && fileMap[data.image]) {
      await updateDoc(docSnap.ref, { image: fileMap[data.image] });
      console.log(`Updated product ${docSnap.id}`);
    }
  }
  
  // Update gallery in DB
  const gallerySnap = await getDocs(collection(db, "gallery"));
  for (const docSnap of gallerySnap.docs) {
    const data = docSnap.data();
    if (data.url && fileMap[data.url]) {
      await updateDoc(docSnap.ref, { url: fileMap[data.url] });
      console.log(`Updated gallery ${docSnap.id}`);
    }
  }
  
  console.log("Done! You can exit.");
  process.exit(0);
}

fix().catch(console.error);
