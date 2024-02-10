import * as firebase from "firebase/app";
import "firebase/analytics"

const firebaseConfig = {
    apiKey: "AIzaSyBJdLYa4olp-Dfina4k-xmzXj0HUbm5hOQ",
    authDomain: "blasterhacks-4bafc.firebaseapp.com",
    projectId: "blasterhacks-4bafc",
    storageBucket: "blasterhacks-4bafc.appspot.com",
    messagingSenderId: "221887971719",
    appId: "1:221887971719:web:0429c692f85bd7c7d9d322",
    measurementId: "G-0MBSGDVNYY"
};

firebase.initializeApp(firebaseConfig);
//firebase.analytics();