import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyB5SShG7WjyfuudC43MZd-lwnpudEbqqTk",
    authDomain: "mi-tenis-ecd38.firebaseapp.com",
    projectId: "mi-tenis-ecd38",
    storageBucket: "mi-tenis-ecd38.appspot.com",
    messagingSenderId: "895286974337",
    appId: "1:895286974337:web:805286412c3f21ee67fa80",
    measurementId: "G-HRDQ9MSFGR"
    };


const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
