import firebase from 'firebase';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBDISs1hcsEAn8Lffv0mQ7gwA9GS29B5dk",
    authDomain: "texnomart-f69fb.firebaseapp.com",
    projectId: "texnomart-f69fb",
    storageBucket: "texnomart-f69fb.appspot.com",
    messagingSenderId: "512895569717",
    appId: "1:512895569717:web:fc74013a97a9c981ba467c",
    measurementId: "G-1YDHCP7CVE"
};

  
const app = firebase.initializeApp(firebaseConfig)
const auth = app.auth();
const googleProvider = new firebase.auth.GoogleAuthProvider();

export {app , auth, googleProvider}