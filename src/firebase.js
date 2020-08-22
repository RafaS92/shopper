import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCjOdnZN1hI1W_tKZCwJhjDtR6hVmgV-Ug",
  authDomain: "shopzon-9dc37.firebaseapp.com",
  databaseURL: "https://shopzon-9dc37.firebaseio.com",
  projectId: "shopzon-9dc37",
  storageBucket: "shopzon-9dc37.appspot.com",
  messagingSenderId: "756593632760",
  appId: "1:756593632760:web:3997ce348e37514b63a20d",
});

const auth = firebase.auth();

export { auth, firebaseApp };
