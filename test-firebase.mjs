import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, doc, setDoc } from "firebase/firestore";

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

async function testFirebase() {
  try {
    console.log("Testing read...");
    const snapshot = await getDocs(collection(db, "products"));
    console.log("Read success. Found items:", snapshot.docs.length);

    console.log("Testing write...");
    await setDoc(doc(db, "products", "test_id"), { name: "Test" });
    console.log("Write success.");
    process.exit(0);
  } catch (error) {
    console.error("Firebase Error:", error.message);
    process.exit(1);
  }
}

testFirebase();
