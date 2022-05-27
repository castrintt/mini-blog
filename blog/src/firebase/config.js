import { initializeApp } from "firebase/app";
import { getFireStore } from 'firebase/firebase'

const firebaseConfig = {
  apiKey: "AIzaSyDMHohsDhX2Yz_yLa4N8D6XOa12AM3jVsY",
  authDomain: "blog-react-dbab0.firebaseapp.com",
  projectId: "blog-react-dbab0",
  storageBucket: "blog-react-dbab0.appspot.com",
  messagingSenderId: "989226337886",
  appId: "1:989226337886:web:dfde4437a1a73d79a756cf"
};

const app = initializeApp(firebaseConfig);

const db = getFireStore(app)

export { db }