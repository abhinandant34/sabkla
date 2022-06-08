import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyDVKTx5suWHW0aCRjXH1CUOCWUQyx8Snrg",
  authDomain: "xlmymind.firebaseapp.com",
  databaseURL: "https://xlmymind-default-rtdb.firebaseio.com/",
  projectId: "xlmymind",
  storageBucket: "xlmymind.appspot.com",
  messagingSenderId: "932808522836",
  appId: "1:932808522836:web:4d8329620afc7564e341c1",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();


export {db,auth,storage};