import firebase from "firebase/app"
import "firebase/auth"
import "firebase/firestore"

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAc6lBxe1UUjcQIgrCBFGn9HZUJM68IcFA",
  authDomain: "jobsheet11-c7816.firebaseapp.com",
  projectId: "jobsheet11-c7816",
  storageBucket: "jobsheet11-c7816.appspot.com",
  messagingSenderId: "343659776338",
  appId: "1:343659776338:web:d3b6408af610693418d28b",
  measurementId: "G-RWHLZ0Y19P"
};export const myFirebase = firebase.initializeApp(firebaseConfig)
const baseDb = myFirebase.firestore()
export const db = baseDb