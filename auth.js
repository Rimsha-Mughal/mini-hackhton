// // import { auth } from "./firebase.config.js";
// // import {
// //   createUserWithEmailAndPassword,
// //   signInWithEmailAndPassword,
// //   GoogleAuthProvider,
// //   signInWithPopup,
// //   signOut
// // } from "https://www.gstatic.com/firebasejs/12.7.0/firebase-auth.js";

// // const provider = new GoogleAuthProvider();
 
// // const emailInp = document.getElementById("emailInp");
// // const passInp = document.getElementById("passInp");

// // // signup
// // window.signup = function () {
// //   createUserWithEmailAndPassword(auth, emailInp.value, passInp.value)
// //     .then(() => location.href = "profile.html")
// //     .catch(e => alert(e.message));
// // };

// // // login
// // window.login = function () {
// //   signInWithEmailAndPassword(auth, emailInp.value, passInp.value)
// //     .then(() => location.href = "index.html")
// //     .catch(e => alert(e.message));
// // };

// // // googlelogin
// // window.googleLogin = function () {
// //   signInWithPopup(auth, provider)
// //     .then(() => location.href = "index.html")
// //     .catch(e => alert(e.message));
// // };

// // // logout
// // window.logout = function () {
// //   signOut(auth).then(() => location.href = "login.html");
// // };


// import { auth } from "./firebase.config.js";
// import {
//   createUserWithEmailAndPassword,
//   signInWithEmailAndPassword,
//   GoogleAuthProvider,
//   signInWithPopup,
//   updateProfile,
//   signOut
// } from "https://www.gstatic.com/firebasejs/12.7.0/firebase-auth.js";

// const provider = new GoogleAuthProvider();

// // SIGNUP
// window.signup = function(){
//   const name = document.getElementById("nameInp").value;
//   const email = document.getElementById("emailInp").value;
//   const pass = document.getElementById("passInp").value;

//   if(!name || !email || !pass){
//     alert("All fields required");
//     return;
//   }

//   createUserWithEmailAndPassword(auth, email, pass)
//     .then((userCredential)=>{
//       return updateProfile(userCredential.user,{
//         displayName: name
//       });
//     })
//     .then(()=>{
//       location.href="profile.html";
//     })
//     .catch((e)=>{
//       alert(e.message);
//     });
// };

// // LOGIN
// window.login = function(){
//   const email = document.getElementById("emailInp").value;
//   const pass = document.getElementById("passInp").value;

//   signInWithEmailAndPassword(auth,email,pass)
//     .then(()=> location.href="index.html")
//     .catch(e=>alert(e.message));
// };

// // GOOGLE LOGIN
// window.googleLogin = function(){
//   signInWithPopup(auth,provider)
//     .then(()=> location.href="index.html")
//     .catch(e=>alert(e.message));
// };

// // LOGOUT
// window.logout = function(){
//   signOut(auth).then(()=> location.href="login.html");
// };



// // import { auth } from "./firebase.config.js";
// // import {
// //   createUserWithEmailAndPassword,
// //   signInWithEmailAndPassword,
// //   GoogleAuthProvider,
// //   signInWithPopup,
// //   signOut
// // } from "https://www.gstatic.com/firebasejs/12.7.0/firebase-auth.js";

// // const provider = new GoogleAuthProvider();

// // window.signup = function(){
// //   const name = document.getElementById("nameInp").value;
// //   const email = document.getElementById("emailInp").value;
// //   const pass = document.getElementById("passInp").value;

// //   createUserWithEmailAndPassword(auth,email,pass)
// //     .then(()=> location.href="profile.html")
// //     .catch(e=>alert(e.message));
// // };

// // window.login = function(){
// //   const email = document.getElementById("emailInp").value;
// //   const pass = document.getElementById("passInp").value;

// //   signInWithEmailAndPassword(auth,email,pass)
// //     .then(()=> location.href="index.html")
// //     .catch(e=>alert(e.message));
// // };

// // window.googleLogin = function(){
// //   signInWithPopup(auth,provider)
// //     .then(()=> location.href="index.html")
// //     .catch(e=>alert(e.message));
// // };

// // window.logout = function(){
// //   signOut(auth).then(()=> location.href="login.html");
// // };

// // Update Navbar based on login
// auth.onAuthStateChanged(user=>{
//   if(user){
//     document.getElementById("loginBtn")?.style.display="none";
//     document.getElementById("logoutBtn")?.style.display="inline";
//     localStorage.setItem("uid", user.uid);
//     localStorage.setItem("email", user.email);
//     localStorage.setItem("name", user.displayName || user.email.split("@")[0]);
//   } else {
//     document.getElementById("loginBtn")?.style.display="inline";
//     document.getElementById("logoutBtn")?.style.display="none";
//   }
// });

// import { auth } from "./firebase.config.js";
// import {
//   createUserWithEmailAndPassword,
//   signInWithEmailAndPassword,
//   signOut,
//   onAuthStateChanged
// } from "https://www.gstatic.com/firebasejs/12.7.0/firebase-auth.js";

// /* ================= SIGNUP ================= */
// window.signup = function () {
//   const email = document.getElementById("emailInp").value;
//   const pass = document.getElementById("passInp").value;

//   createUserWithEmailAndPassword(auth, email, pass)
//     .then(() => location.href = "index.html")
//     .catch(e => alert(e.message));
// };

// /* ================= LOGIN ================= */
// window.login = function () {
//   const email = document.getElementById("emailInp").value;
//   const pass = document.getElementById("passInp").value;

//   signInWithEmailAndPassword(auth, email, pass)
//     .then(() => location.href = "index.html")
//     .catch(e => alert(e.message));
// };

// /* ================= LOGOUT ================= */
// document.addEventListener("click", (e) => {
//   if (e.target.id === "logoutBtn") {
//     signOut(auth).then(() => location.href = "login.html");
//   }
// });

// /* ================= NAVBAR CONTROL ================= */
// onAuthStateChanged(auth, (user) => {
//   const loginBtn = document.getElementById("loginBtn");
//   const logoutBtn = document.getElementById("logoutBtn");

//   if (user) {
//     loginBtn.style.display = "none";
//     logoutBtn.style.display = "inline";
//   } else {
//     loginBtn.style.display = "inline";
//     logoutBtn.style.display = "none";
//   }
// });



import { auth } from "./firebase.config.js";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/12.7.0/firebase-auth.js";

const provider = new GoogleAuthProvider();

/* ================= EMAIL SIGNUP ================= */
window.signup = function () {
  const email = emailInp.value;
  const pass = passInp.value;

  createUserWithEmailAndPassword(auth, email, pass)
    .then(() => location.href = "index.html")
    .catch(e => alert(e.message));
};

/* ================= EMAIL LOGIN ================= */
window.login = function () {
  const email = emailInp.value;
  const pass = passInp.value;

  signInWithEmailAndPassword(auth, email, pass)
    .then(() => location.href = "index.html")
    .catch(e => alert(e.message));
};

/* ================= GOOGLE LOGIN ================= */
window.googleLogin = function () {
  signInWithPopup(auth, provider)
    .then(() => location.href = "index.html")
    .catch(e => alert(e.message));
};

/* ================= LOGOUT ================= */
document.addEventListener("click", (e) => {
  if (e.target.id === "logoutBtn") {
    signOut(auth).then(() => location.href = "login.html");
  }
});

/* ================= NAVBAR ================= */
onAuthStateChanged(auth, (user) => {
  const loginBtn = document.getElementById("loginBtn");
  const logoutBtn = document.getElementById("logoutBtn");

  if (user) {
    loginBtn.style.display = "none";
    logoutBtn.style.display = "inline";
  } else {
    loginBtn.style.display = "inline";
    logoutBtn.style.display = "none";
  }
});
