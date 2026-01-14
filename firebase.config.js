import { initializeApp } from "https://www.gstatic.com/firebasejs/12.7.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.7.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.7.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyACpZNZWMEfs_RE_oZ0zu1SD21Hno_x49M",
  authDomain: "mini-hackhaton-89217.firebaseapp.com",
  projectId: "mini-hackhaton-89217",
  storageBucket: "mini-hackhaton-89217.firebasestorage.app",
  messagingSenderId: "231384110224",
  appId: "1:231384110224:web:91ce8f37ffc68a20613415",
  measurementId: "G-NRSLN6KSTP"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
