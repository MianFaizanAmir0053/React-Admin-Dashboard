import {initializeApp} from "firebase/app";
import {getAuth} from "firebase/auth"
import {getFirestore} from "firebase/firestore"
import {getStorage} from "firebase/storage"

const firebaseConfig = {
    apiKey: "AIzaSyCl4D5av4zIl-lHs0CR8VkRqr6PPECFvtY",
    authDomain: "basic-crud-app-10df3.firebaseapp.com",
    projectId: "basic-crud-app-10df3",
    storageBucket: "basic-crud-app-10df3.appspot.com",
    messagingSenderId: "834628106886",
    appId: "1:834628106886:web:02228c6866ed898fb0ef07",
    measurementId: "G-08483Q6WCP"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)

export const storage = getStorage(app)
export default app;

