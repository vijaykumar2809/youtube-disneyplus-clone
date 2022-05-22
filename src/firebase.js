import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

const firebaseConfig = {
    apiKey: "AIzaSyDYFejWmQ_2L-yRsjDHMeRrmTClK4M2uZ8",
    authDomain: "disneyplus-clone-c4fd4.firebaseapp.com",
    projectId: "disneyplus-clone-c4fd4",
    storageBucket: "disneyplus-clone-c4fd4.appspot.com",
    messagingSenderId: "73746513928",
    appId: "1:73746513928:web:f41c42f8de79d5e6ac11bd",
    measurementId: "G-46G6JE2LBB"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  const storage = firebase.storage();
  
  export { auth, provider, storage };
  export default db;