import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCdlLyMG9LrsLLUptCo3nd2B81HkFKl_r8",
  authDomain: "compositeschoollamahi-agrim.firebaseapp.com",
  projectId: "compositeschoollamahi-agrim",
  storageBucket: "compositeschoollamahi-agrim.appspot.com",
  messagingSenderId: "806098241465",
  appId: "1:806098241465:web:8cfd01e8d4f648e68ad868",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
