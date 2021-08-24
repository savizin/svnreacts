import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  //Objeto de Firebase
  apiKey: "AIzaSyBhh4H24XD_q7NAvMSz3eN35brvmpGvkjQ",
  authDomain: "react-svn-arteencolores.firebaseapp.com",
  projectId: "react-svn-arteencolores",
  storageBucket: "react-svn-arteencolores.appspot.com",
  messagingSenderId: "637287140031",
  appId: "1:637287140031:web:22d95185bbc198ebad140a"
};

const app = firebase.initializeApp(firebaseConfig);
export function getFirebase() {
  return app;
}

export const database = firebase.firestore();