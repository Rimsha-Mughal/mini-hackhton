// import { db, auth } from "./firebase.config.js";
// import {
//   collection,
//   addDoc,
//   getDocs,
//   deleteDoc,
//   updateDoc,
//   doc
// } from "https://www.gstatic.com/firebasejs/12.7.0/firebase-firestore.js";

// const blogList = document.getElementById("blogList");
// const titleInp = document.getElementById("titleInp");
// const contentInp = document.getElementById("contentInp");

// const blogRef = collection(db, "blogs");
// let editId = null;

// // Auth check
// auth.onAuthStateChanged((user) => {
//   if(user){
//     getBlogs(); // Home page all blogs
//     if(document.body.id === "profile"){ // Dashboard page check
//       getProfileBlogs();
//     }
//   }
// });

// // ADD / UPDATE BLOG
// window.addBlog = async function(){
//   if(!titleInp.value || !contentInp.value) return alert("Fill both fields");

//   if(editId){
//     await updateDoc(doc(db, "blogs", editId), {
//       title: titleInp.value,
//       content: contentInp.value
//     });
//     editId = null;
//     alert("Blog Updated ✅");
//   } else {
//     await addDoc(blogRef, {
//       title: titleInp.value,
//       content: contentInp.value,
//       uid: auth.currentUser.uid
//     });
//     alert("Blog Posted ✅");
//   }

//   titleInp.value = "";
//   contentInp.value = "";
//   getBlogs();
// };

// // GET ALL BLOGS (Home Page)
// window.getBlogs = async function(){
//   if(!blogList) return;
//   blogList.innerHTML = "";
//   const data = await getDocs(blogRef);

//   data.forEach((docu)=>{
//     const blog = docu.data();
//     const isOwner = auth.currentUser && auth.currentUser.uid === blog.uid;

//     blogList.innerHTML += `
//       <div class="card" id="card-${docu.id}">
//         <div class="blog-view">
//           <h3>${blog.title}</h3>
//           <p>${blog.content}</p>
//           ${isOwner ? `<button onclick="editBlog('${docu.id}', this)">Edit</button> <button onclick="deleteBlog('${docu.id}')">Delete</button>` : ''}
//         </div>
//       </div>
//     `;
//   });
// };

// // EDIT BLOG (Inline form inside card)
// window.editBlog = function(id, btn){
//   const card = btn.closest(".card");
//   const title = card.querySelector("h3").innerText;
//   const content = card.querySelector("p").innerText;

//   // Remove previous view
//   card.querySelector(".blog-view").style.display = "none";

//   // Insert edit form inside card
//   const form = document.createElement("div");
//   form.classList.add("blog-edit");

//   form.innerHTML = `
//     <input type="text" id="titleEdit" value="${title}">
//     <textarea id="contentEdit" rows="4">${content}</textarea>
//     <button id="saveEditBtn">Save</button>
//     <button id="cancelEditBtn">Cancel</button>
//   `;

//   card.appendChild(form);

//   const titleEdit = form.querySelector("#titleEdit");
//   const contentEdit = form.querySelector("#contentEdit");

//   // Save button
//   form.querySelector("#saveEditBtn").onclick = async function(){
//     await updateDoc(doc(db, "blogs", id), {
//       title: titleEdit.value,
//       content: contentEdit.value
//     });
//     getBlogs();
//   };

//   // Cancel button
//   form.querySelector("#cancelEditBtn").onclick = function(){
//     form.remove();
//     card.querySelector(".blog-view").style.display = "block";
//   };
// };

// // DELETE BLOG
// window.deleteBlog = async function(id){
//   await deleteDoc(doc(db, "blogs", id));
//   getBlogs();
// };

// // Profile BLOGS (Current user only)
// window.getProfileBlogs = async function(){
//   if(!blogList) return;
//   blogList.innerHTML = "";
//   const data = await getDocs(blogRef);

//   data.forEach((docu)=>{
//     const blog = docu.data();
//     if(auth.currentUser.uid === blog.uid){
//       blogList.innerHTML += `
//         <div class="card">
//           <h3>${blog.title}</h3>
//           <p>${blog.content}</p>
//           <button onclick="deleteBlog('${docu.id}')">Delete</button>
//         </div>
//       `;
//     }
//   });
// };






// import { db, auth } from "./firebase.config.js";
// import { collection, addDoc, getDocs, deleteDoc, updateDoc, doc } from "https://www.gstatic.com/firebasejs/12.7.0/firebase-firestore.js";

// const blogList = document.getElementById("blogList");
// const titleInp = document.getElementById("titleInp");
// const contentInp = document.getElementById("contentInp");
// let editId = null;

// const blogRef = collection(db,"blogs");

// // Auth check
// auth.onAuthStateChanged(user=>{
//   if(user){
//     // Profile page
//     if(document.getElementById("profile")){
//       document.getElementById("userName").innerText = localStorage.getItem("name");
//       document.getElementById("userEmail").innerText = localStorage.getItem("email");

//       // Random boy/girl picture
//       const gender = Math.random()>0.5?"men":"women";
//       const num = Math.floor(Math.random()*100);
//       document.getElementById("profilePic").src = `https://randomuser.me/api/portraits/${gender}/${num}.jpg`;

//       getProfileBlogs();
//     } else {
//       getBlogs();
//     }
//   }
// });

// // Add Blog
// window.addBlog = async function(){
//   if(!titleInp.value || !contentInp.value) return alert("Fill both fields");

//   await addDoc(blogRef,{
//     title:titleInp.value,
//     content:contentInp.value,
//     uid:auth.currentUser.uid
//   });

//   titleInp.value="";
//   contentInp.value="";
//   if(document.getElementById("profile")) getProfileBlogs();
//   else getBlogs();
// };

// // Get all blogs
// window.getBlogs = async function(){
//   if(!blogList) return;
//   blogList.innerHTML="";
//   const data = await getDocs(blogRef);
//   data.forEach(docu=>{
//     const blog = docu.data();
//     const isOwner = auth.currentUser && auth.currentUser.uid===blog.uid;

//     blogList.innerHTML+=`
//       <div class="card">
//         <h3>${blog.title}</h3>
//         <p>${blog.content.substring(0,100)}...</p>
//         <a href="detail.html?id=${docu.id}"><button>Details</button></a>
//         ${isOwner? `<button onclick="editBlog('${docu.id}', this)">Edit</button> <button onclick="deleteBlog('${docu.id}')">Delete</button>` : ''}
//       </div>
//     `;
//   });
// };

// // Get profile blogs
// window.getProfileBlogs = async function(){
//   if(!blogList) return;
//   blogList.innerHTML="";
//   const data = await getDocs(blogRef);
//   data.forEach(docu=>{
//     const blog = docu.data();
//     if(auth.currentUser.uid===blog.uid){
//       blogList.innerHTML+=`
//         <div class="card">
//           <h3>${blog.title}</h3>
//           <p>${blog.content}</p>
//           <a href="detail.html?id=${docu.id}"><button>Details</button></a>
//           <button onclick="deleteBlog('${docu.id}')">Delete</button>
//         </div>
//       `;
//     }
//   });
// };

// // Delete
// window.deleteBlog = async function(id){
//   await deleteDoc(doc(db,"blogs",id));
//   if(document.getElementById("profile")) getProfileBlogs();
//   else getBlogs();
// };

// // Edit
// window.editBlog = function(id,btn){
//   const card = btn.closest(".card");
//   const title = card.querySelector("h3").innerText;
//   const content = card.querySelector("p").innerText;

//   card.querySelector("h3").style.display="none";
//   card.querySelector("p").style.display="none";
//   btn.style.display="none";

//   const form = document.createElement("div");
//   form.innerHTML=`
//     <input type="text" id="titleEdit" value="${title}">
//     <textarea id="contentEdit" rows="4">${content}</textarea>
//     <button id="saveBtn">Save</button>
//     <button id="cancelBtn">Cancel</button>
//   `;
//   card.appendChild(form);

//   form.querySelector("#saveBtn").onclick = async function(){
//     await updateDoc(doc(db,"blogs",id),{
//       title:form.querySelector("#titleEdit").value,
//       content:form.querySelector("#contentEdit").value
//     });
//     if(document.getElementById("profile")) getProfileBlogs();
//     else getBlogs();
//   };
//   form.querySelector("#cancelBtn").onclick = function(){
//     form.remove();
//     card.querySelector("h3").style.display="block";
//     card.querySelector("p").style.display="block";
//     btn.style.display="inline-block";
//   };
// };

// // Blog detail page
// if(document.getElementById("blogDetail")){
//   const params = new URLSearchParams(window.location.search);
//   const id = params.get("id");
//   getDocs(blogRef).then(data=>{
//     data.forEach(docu=>{
//       if(docu.id===id){
//         const blog = docu.data();
//         document.getElementById("blogDetail").innerHTML=`
//           <h2>${blog.title}</h2>
//           <p>${blog.content}</p>
//         `;
//       }
//     });
//   });
// }




import { db, auth } from "./firebase.config.js";
import { collection, addDoc, getDocs, deleteDoc, updateDoc, doc } from "https://www.gstatic.com/firebasejs/12.7.0/firebase-firestore.js";

const blogList = document.getElementById("blogList");
const titleInp = document.getElementById("titleInp");
const contentInp = document.getElementById("contentInp");

const blogRef = collection(db,"blogs");

// Add sample blogs (only once)
async function addSampleBlogs(){
  const data = await getDocs(blogRef);
  if(data.empty){ // If no blogs, add sample
    const sampleBlogs = [
      { title: "Welcome to Our Blog", content: "This is the first sample blog. Enjoy reading!", uid: "sample" },
      { title: "Tech Trends 2026", content: "Discover the latest tech trends shaping the future.", uid: "sample" },
      { title: "Healthy Living Tips", content: "Simple tips to stay healthy every day.", uid: "sample" },
      { title: "Travel Diaries", content: "Explore amazing places around the world with us.", uid: "sample" }
    ];
    for(const blog of sampleBlogs){
      await addDoc(blogRef, blog);
    }
  }
}

// Auth check
auth.onAuthStateChanged(user=>{
  if(user){
    // Add sample blogs on first load
    addSampleBlogs().then(()=>{
      if(document.getElementById("profile")){
        // Profile page setup
        document.getElementById("userName").innerText = localStorage.getItem("name");
        document.getElementById("userEmail").innerText = localStorage.getItem("email");

        // Random profile pic
        const gender = Math.random()>0.5?"men":"women";
        const num = Math.floor(Math.random()*100);
        document.getElementById("profilePic").src = `https://randomuser.me/api/portraits/${gender}/${num}.jpg`;

        getProfileBlogs();
      } else {
        getBlogs();
      }
    });
  }
});

// Add Blog
window.addBlog = async function(){
  if(!titleInp.value || !contentInp.value) return alert("Fill both fields");

  await addDoc(blogRef,{
    title:titleInp.value,
    content:contentInp.value,
    uid:auth.currentUser.uid
  });

  titleInp.value="";
  contentInp.value="";
  if(document.getElementById("profile")) getProfileBlogs();
  else getBlogs();
};

// Get all blogs
window.getBlogs = async function(){
  if(!blogList) return;
  blogList.innerHTML="";
  const data = await getDocs(blogRef);
  data.forEach(docu=>{
    const blog = docu.data();
    const isOwner = auth.currentUser && auth.currentUser.uid===blog.uid;

    blogList.innerHTML+=`
      <div class="card">
        <h3>${blog.title}</h3>
        <p>${blog.content.substring(0,100)}...</p>
        <a href="detail.html?id=${docu.id}"><button>Details</button></a>
        ${isOwner? `<button onclick="editBlog('${docu.id}', this)">Edit</button> <button onclick="deleteBlog('${docu.id}')">Delete</button>` : ''}
      </div>
    `;
  });
};

// Get profile blogs
window.getProfileBlogs = async function(){
  if(!blogList) return;
  blogList.innerHTML="";
  const data = await getDocs(blogRef);
  data.forEach(docu=>{
    const blog = docu.data();
    if(auth.currentUser.uid===blog.uid){
      blogList.innerHTML+=`
        <div class="card">
          <h3>${blog.title}</h3>
          <p>${blog.content}</p>
          <a href="detail.html?id=${docu.id}"><button>Details</button></a>
          <button onclick="deleteBlog('${docu.id}')">Delete</button>
        </div>
      `;
    }
  });
};

// Delete
window.deleteBlog = async function(id){
  await deleteDoc(doc(db,"blogs",id));
  if(document.getElementById("profile")) getProfileBlogs();
  else getBlogs();
};

// Edit
window.editBlog = function(id,btn){
  const card = btn.closest(".card");
  const title = card.querySelector("h3").innerText;
  const content = card.querySelector("p").innerText;

  card.querySelector("h3").style.display="none";
  card.querySelector("p").style.display="none";
  btn.style.display="none";

  const form = document.createElement("div");
  form.innerHTML=`
    <input type="text" id="titleEdit" value="${title}">
    <textarea id="contentEdit" rows="4">${content}</textarea>
    <button id="saveBtn">Save</button>
    <button id="cancelBtn">Cancel</button>
  `;
  card.appendChild(form);

  form.querySelector("#saveBtn").onclick = async function(){
    await updateDoc(doc(db,"blogs",id),{
      title:form.querySelector("#titleEdit").value,
      content:form.querySelector("#contentEdit").value
    });
    if(document.getElementById("profile")) getProfileBlogs();
    else getBlogs();
  };
  form.querySelector("#cancelBtn").onclick = function(){
    form.remove();
    card.querySelector("h3").style.display="block";
    card.querySelector("p").style.display="block";
    btn.style.display="inline-block";
  };
};

// Blog detail page
if(document.getElementById("blogDetail")){
  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");
  getDocs(blogRef).then(data=>{
    data.forEach(docu=>{
      if(docu.id===id){
        const blog = docu.data();
        document.getElementById("blogDetail").innerHTML=`
          <h2>${blog.title}</h2>
          <p>${blog.content}</p>
        `;
      }
    });
  });
}



// Blog detail page with author info
if(document.getElementById("blogDetail")){
  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");

  getDocs(blogRef).then(data=>{
    let blogFound = false;

    data.forEach(docu=>{
      if(docu.id===id){
        blogFound = true;
        const blog = docu.data();

        // Determine author name and profile pic
        let authorName = "Anonymous";
        let authorPic = "";

        if(blog.uid === "sample"){
          // Sample blogs: random name and picture
          const names = ["Alice","Bob","Clara","David"];
          authorName = names[Math.floor(Math.random()*names.length)];
          const gender = Math.random()>0.5?"men":"women";
          const num = Math.floor(Math.random()*100);
          authorPic = `https://randomuser.me/api/portraits/${gender}/${num}.jpg`;
        } else if(localStorage.getItem("uid") === blog.uid){
          // Current logged-in user
          authorName = localStorage.getItem("name");
          authorPic = document.getElementById("profilePic")?.src || `https://randomuser.me/api/portraits/men/1.jpg`;
        } else {
          // Other users (show generic)
          authorName = "User";
          const gender = Math.random()>0.5?"men":"women";
          const num = Math.floor(Math.random()*100);
          authorPic = `https://randomuser.me/api/portraits/${gender}/${num}.jpg`;
        }

        document.getElementById("blogDetail").innerHTML=`
          <div class="blog-full-card">
            <h2>${blog.title}</h2>
            <div class="author-info">
              <img src="${authorPic}" class="profile-pic" alt="Author">
              <p>Author: ${authorName}</p>
            </div>
            <p>${blog.content}</p>
          </div>
        `;
      }
    });

    if(!blogFound){
      document.getElementById("blogDetail").innerHTML="<p>Blog not found!</p>";
    }
  });
}


