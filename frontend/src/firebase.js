/* eslint-disable no-unused-vars */
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getStorage} from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA9yY9XnZLmN_D3bsV3amLXPCVCf3f9hR4",
  authDomain: "swapi-images.firebaseapp.com",
  projectId: "swapi-images",
  storageBucket: "swapi-images.appspot.com",
  messagingSenderId: "776522726221",
  appId: "1:776522726221:web:18e0233f0d87daa97f9504"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);