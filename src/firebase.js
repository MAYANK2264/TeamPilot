// Import the functions you need from the SDKs
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// Your Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyB8bkQNWIHsGvuNLDnkQ7gCZnv3yh7saDw",
  authDomain: "teampilot-e9ae5.firebaseapp.com",
  projectId: "teampilot-e9ae5",
  storageBucket: "teampilot-e9ae5.firebasestorage.app",
  messagingSenderId: "377938276598",
  appId: "1:377938276598:web:650b1c2cfb88ac98e7bcd7",
  measurementId: "G-ZSFLR9B4YF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// ✅ Initialize and export auth
const auth = getAuth(app);
export { auth };
