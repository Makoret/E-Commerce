import firebase from "firebase/app";
import "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyD9FfANFl_QFY41mUP6ldMgEiNNGR9oyxg",
    authDomain: "e-commerce-294a5.firebaseapp.com",
    projectId: "e-commerce-294a5",
    storageBucket: "e-commerce-294a5.appspot.com",
    messagingSenderId: "787157324840",
    appId: "1:787157324840:web:3a2bffecc71310f6f2111d"
};

const app = firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore(app)
// firestore.settings({ experimentalForceLongPolling: true });
// firebase.firestore.setLogLevel("debug");
