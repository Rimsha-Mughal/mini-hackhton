import { db, auth } from "./firebase.config.js";
import {
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  updateDoc,
  doc
} from "https://www.gstatic.com/firebasejs/12.7.0/firebase-firestore.js";

const blogList = document.getElementById("blogList");
const titleInp = document.getElementById("titleInp");
const contentInp = document.getElementById("contentInp");

const blogRef = collection(db, "blogs");
let editId = null;

// Auth check
auth.onAuthStateChanged((user) => {
  if(user){
    getBlogs(); // Home page all blogs
    if(document.body.id === "profile"){ // Dashboard page check
      getProfileBlogs();
    }
  }
});

// ADD / UPDATE BLOG
window.addBlog = async function(){
  if(!titleInp.value || !contentInp.value) return alert("Fill both fields");

  if(editId){
    await updateDoc(doc(db, "blogs", editId), {
      title: titleInp.value,
      content: contentInp.value
    });
    editId = null;
    alert("Blog Updated ✅");
  } else {
    await addDoc(blogRef, {
      title: titleInp.value,
      content: contentInp.value,
      uid: auth.currentUser.uid
    });
    alert("Blog Posted ✅");
  }

  titleInp.value = "";
  contentInp.value = "";
  getBlogs();
};

// GET ALL BLOGS (Home Page)
window.getBlogs = async function(){
  if(!blogList) return;
  blogList.innerHTML = "";
  const data = await getDocs(blogRef);

  data.forEach((docu)=>{
    const blog = docu.data();
    const isOwner = auth.currentUser && auth.currentUser.uid === blog.uid;

    blogList.innerHTML += `
      <div class="card" id="card-${docu.id}">
        <div class="blog-view">
          <h3>${blog.title}</h3>
          <p>${blog.content}</p>
          ${isOwner ? `<button onclick="editBlog('${docu.id}', this)">Edit</button> <button onclick="deleteBlog('${docu.id}')">Delete</button>` : ''}
        </div>
      </div>
    `;
  });
};

// EDIT BLOG (Inline form inside card)
window.editBlog = function(id, btn){
  const card = btn.closest(".card");
  const title = card.querySelector("h3").innerText;
  const content = card.querySelector("p").innerText;

  // Remove previous view
  card.querySelector(".blog-view").style.display = "none";

  // Insert edit form inside card
  const form = document.createElement("div");
  form.classList.add("blog-edit");

  form.innerHTML = `
    <input type="text" id="titleEdit" value="${title}">
    <textarea id="contentEdit" rows="4">${content}</textarea>
    <button id="saveEditBtn">Save</button>
    <button id="cancelEditBtn">Cancel</button>
  `;

  card.appendChild(form);

  const titleEdit = form.querySelector("#titleEdit");
  const contentEdit = form.querySelector("#contentEdit");

  // Save button
  form.querySelector("#saveEditBtn").onclick = async function(){
    await updateDoc(doc(db, "blogs", id), {
      title: titleEdit.value,
      content: contentEdit.value
    });
    getBlogs();
  };

  // Cancel button
  form.querySelector("#cancelEditBtn").onclick = function(){
    form.remove();
    card.querySelector(".blog-view").style.display = "block";
  };
};

// DELETE BLOG
window.deleteBlog = async function(id){
  await deleteDoc(doc(db, "blogs", id));
  getBlogs();
};

// Profile BLOGS (Current user only)
window.getProfileBlogs = async function(){
  if(!blogList) return;
  blogList.innerHTML = "";
  const data = await getDocs(blogRef);

  data.forEach((docu)=>{
    const blog = docu.data();
    if(auth.currentUser.uid === blog.uid){
      blogList.innerHTML += `
        <div class="card">
          <h3>${blog.title}</h3>
          <p>${blog.content}</p>
          <button onclick="deleteBlog('${docu.id}')">Delete</button>
        </div>
      `;
    }
  });
};