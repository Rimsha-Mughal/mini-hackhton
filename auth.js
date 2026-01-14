import { auth } from "./firebase.config.js";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  signOut
} from "https://www.gstatic.com/firebasejs/12.7.0/firebase-auth.js";

const provider = new GoogleAuthProvider();
 
const emailInp = document.getElementById("emailInp");
const passInp = document.getElementById("passInp");

// signup
window.signup = function () {
  createUserWithEmailAndPassword(auth, emailInp.value, passInp.value)
    .then(() => location.href = "profile.html")
    .catch(e => alert(e.message));
};

// login
window.login = function () {
  signInWithEmailAndPassword(auth, emailInp.value, passInp.value)
    .then(() => location.href = "index.html")
    .catch(e => alert(e.message));
};

// googlelogin
window.googleLogin = function () {
  signInWithPopup(auth, provider)
    .then(() => location.href = "index.html")
    .catch(e => alert(e.message));
};

// logout
window.logout = function () {
  signOut(auth).then(() => location.href = "login.html");
};