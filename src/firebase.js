import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyAn9mJkC7XWgCad-58_JHK0h-RxulXPqnI",
  authDomain: "sabkla-final.firebaseapp.com",
  databaseURL: "https://sabkla-final-default-rtdb.firebaseio.com/",
  projectId: "sabkla-final",
  storageBucket: "sabkla-final.appspot.com",
  messagingSenderId: "882656939395",
  appId: "1:882656939395:web:10371351d576ba3cc53ab6",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();


export {db,auth};