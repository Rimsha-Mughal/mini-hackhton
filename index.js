 const blogContainer = document.getElementById('blogContainer');
  const addBlogBtn = document.getElementById('addBlogBtn');

  function createBlog(title, content) {
    const blogItem = document.createElement('div');
    blogItem.className = 'blog-item';

    const summaryDiv = document.createElement('div');
    summaryDiv.className = 'blog-summary';

    const infoDiv = document.createElement('div');
    infoDiv.className = 'blog-info';

    const titleElem = document.createElement('h3');
    titleElem.className = 'blog-title';
    titleElem.textContent = title;

    const contentPara = document.createElement('p');
    contentPara.textContent = content;

    infoDiv.appendChild(titleElem);
    infoDiv.appendChild(contentPara);

    // Generate a random image URL from Unsplash
    const imgUrl = `https://source.unsplash.com/random/100x100?sig=${Math.floor(Math.random() * 1000)}`;
    const img = document.createElement('img');
    img.src = imgUrl;
    img.className = 'blog-image';
    img.alt = 'Generated Image';

    // Buttons: Edit, Delete, Details
    const buttonsDiv = document.createElement('div');

    const editBtn = document.createElement('button');
    editBtn.textContent = 'Edit';
    editBtn.className = 'edit';

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.className = 'delete';

    const detailsBtn = document.createElement('button');
    detailsBtn.textContent = 'Details';
    detailsBtn.className = 'details';

    // Edit functionality
    editBtn.onclick = () => {
      const newTitle = prompt('Edit Title:', titleElem.textContent);
      if (newTitle !== null && newTitle.trim() !== '') {
        titleElem.textContent = newTitle;
      }
      const newContent = prompt('Edit Content:', contentPara.textContent);
      if (newContent !== null) {
        contentPara.textContent = newContent;
      }
    };

    // Delete functionality
    deleteBtn.onclick = () => {
      blogContainer.removeChild(blogItem);
    };

    // Details button functionality - redirect to detail page
    detailsBtn.onclick = () => {
      // Save data in local storage or pass via URL params
      const blogData = {
        title: titleElem.textContent,
        content: contentPara.textContent
      };
      localStorage.setItem('blogDetail', JSON.stringify(blogData));
      window.location.href = 'detail.html';
    };

    buttonsDiv.appendChild(editBtn);
    buttonsDiv.appendChild(deleteBtn);
    buttonsDiv.appendChild(detailsBtn);

    summaryDiv.appendChild(infoDiv);
    summaryDiv.appendChild(img);
    summaryDiv.appendChild(buttonsDiv);

    blogItem.appendChild(summaryDiv);
    blogContainer.appendChild(blogItem);
  }

  addBlogBtn.onclick = () => {
    const title = prompt('Enter Blog Title:', 'New Blog Title');
    if (title !== null && title.trim() !== '') {
      const content = prompt('Enter Blog Content:', 'This is the content of the blog.');
      if (content !== null) {
        createBlog(title, content);
      }
    }
  };

  // Optional initial post
  createBlog('Welcome to My Blog', 'This is the first post.');