import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore/lite";
// Follow this pattern to import other Firebase services
// import { } from 'firebase/<service>';

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyCVhc-NNhyudS0w_jmXhQQfbiTb7mza6S0",
  authDomain: "todo-93df6.firebaseapp.com",
  projectId: "todo-93df6",
  storageBucket: "todo-93df6.appspot.com",
  messagingSenderId: "357623839087",
  appId: "1:357623839087:web:5dd29f2ef13a4f73a0509a",
  measurementId: "G-MLLEMXRWY6",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Get a list of cities from your database
async function getCities(db) {
  const citiesCol = collection(db, "cities");
  const citySnapshot = await getDocs(citiesCol);
  const cityList = citySnapshot.docs.map((doc) => doc.data());
  return cityList;
}
