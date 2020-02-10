import firebase from 'firebase';
// Required for side-effects
require("firebase/firestore");

// Initialize Cloud Firestore through Firebase
const firebaseConfig = {
    apiKey: "AIzaSyBCzKH1vx22dZkzzidwVztjJiCYLOV9vS8",
    authDomain: "auction-dashboard.firebaseapp.com",
    databaseURL: "https://auction-dashboard.firebaseio.com",
    projectId: "auction-dashboard",
    storageBucket: "auction-dashboard.appspot.com",
    messagingSenderId: "756176605044",
    appId: "1:756176605044:web:9af28b720266f14fe16621",
    measurementId: "G-SL0FJTB12T"
  };

  firebase.initializeApp(firebaseConfig);
  
  export default firebase;
  export const db = firebase.firestore();