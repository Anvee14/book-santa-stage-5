import firebase from 'firebase';
require('@firebase/firestore')

const firebaseConfig = {
  apiKey: "AIzaSyBOwVa_l4aUtNr7efkB-PFOMaZJtPp3C18",
  authDomain: "booksanta-2e0b4.firebaseapp.com",
  databaseURL: "https://booksanta-2e0b4.firebaseio.com",
  projectId: "booksanta-2e0b4",
  storageBucket: "booksanta-2e0b4.appspot.com",
  messagingSenderId: "666966721637",
  appId: "1:666966721637:web:c770201a412b1ce9cb328c"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
