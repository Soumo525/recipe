import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";
const firebaseConfig = {
  apiKey: "AIzaSyAtF4tc8kgpsYcjMpxNGqYKvajEM2p5zGY",
  authDomain: "photo-76f2d.firebaseapp.com",
  databaseURL: "https://photo-76f2d-default-rtdb.firebaseio.com",
  projectId: "photo-76f2d",
  storageBucket: "photo-76f2d.appspot.com",
  messagingSenderId: "626495407921",
  appId: "1:626495407921:web:8f384954e06a350baad210",
  measurementId: "G-DHXBSJ7DGZ"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const firestore = getFirestore(app);
export const storage = getStorage(app);
export const database = getDatabase(app);
export default app;
