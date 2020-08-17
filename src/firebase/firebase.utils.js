import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDMTim1Ukeoah3pbqEe3Tg75gm1jgdjY9c",
  authDomain: "e-shop-702e6.firebaseapp.com",
  databaseURL: "https://e-shop-702e6.firebaseio.com",
  projectId: "e-shop-702e6",
  storageBucket: "e-shop-702e6.appspot.com",
  messagingSenderId: "709940260522",
  appId: "1:709940260522:web:3f3eb6b073794b7012aad3",
  measurementId: "G-Z2GJB8J22N",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

const provider2 = new firebase.auth.FacebookAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithFacebook = () => auth.signInWithPopup(provider2);

export default firebase;
