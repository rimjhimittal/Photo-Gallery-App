  import * as firebase from  'firebase/app';
  import 'firebase/storage';
  import 'firebase/firestore';
  
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyBjPHXVl0vp21T9hO-FD5yOZywfow6eGUk",
    authDomain: "photo-gallery-app-77eed.firebaseapp.com",
    projectId: "photo-gallery-app-77eed",
    storageBucket: "photo-gallery-app-77eed.appspot.com",
    messagingSenderId: "82285679573",
    appId: "1:82285679573:web:47f1ec7cae60663b4ea35c"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);


  const projectStorage = firebase.storage();
  const projectFirestore = firebase.firestore();

  export { projectFirestore, projectStorage };