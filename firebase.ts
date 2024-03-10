import { initializeApp } from "firebase/app";
import { getAnalytics, logEvent } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB0Bp81VTlPDYFXtieyKAA3Zy0ulkngqyA",
  authDomain: "linkmail-35c34.firebaseapp.com",
  projectId: "linkmail-35c34",
  storageBucket: "linkmail-35c34.appspot.com",
  messagingSenderId: "774259354996",
  appId: "1:774259354996:web:054fd007fcf631f03ad021",
  measurementId: "G-9G7NFENEXL"
};

// TODO: fix permissions config. seems I'm missing this at the moment.

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const analytics = getAnalytics(app); // is this hooked up yet? or just copied from AtNoal

export {
  app,
  db,
  analytics,
  logEvent,
}