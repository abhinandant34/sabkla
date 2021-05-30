import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAgA5atgTDpfiH4qblsA0tdve330oXhmYY",
  authDomain: "sabkla.firebaseapp.com",
  databaseURL: "https://sabkla-default-rtdb.firebaseio.com",
  projectId: "sabkla",
  storageBucket: "sabkla.appspot.com",
  messagingSenderId: "928475658908",
  appId: "1:928475658908:web:508414d1ff173a45674b59",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db,auth};