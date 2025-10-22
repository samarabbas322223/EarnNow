// =============================================
// FIREBASE CONFIGURATION
// =============================================
// Firebase configuration for EarnNow project
// This configuration connects to your Firebase project

const firebaseConfig = {
  apiKey: "AIzaSyBHNe2PgZJfHviPIgBihIckemNQRtknqXY",
  authDomain: "earnnow-166b8.firebaseapp.com",
  databaseURL: "https://earnnow-166b8-default-rtdb.firebaseio.com",
  projectId: "earnnow-166b8",
  storageBucket: "earnnow-166b8.firebasestorage.app",
  messagingSenderId: "42131166899",
  appId: "1:42131166899:web:d4ceb72b27b0efd90802c6",
  measurementId: "G-0FF9VS6JF9"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Initialize Firebase Authentication and Firestore
const auth = firebase.auth();
const db = firebase.firestore();

// Log initialization for debugging
console.log('Firebase initialized successfully');