import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCmaUWVXZK2xBZLuUwmnH73Q9AlmY-j7Gg",
  authDomain: "whatsapp-chat-29b7b.firebaseapp.com",
  projectId: "whatsapp-chat-29b7b",
  storageBucket: "whatsapp-chat-29b7b.appspot.com",
  messagingSenderId: "88547971447",
  appId: "1:88547971447:web:4b124fd68094c4af0c1172",
  measurementId: "G-L4L2RQGBYP",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, storage, provider };
export default db;
