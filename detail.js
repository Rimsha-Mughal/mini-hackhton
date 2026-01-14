// detail.js
  // Retrieve blog data from local storage
  const dataStr = localStorage.getItem('blogDetail');
  if (dataStr) {
    const data = JSON.parse(dataStr);
    document.getElementById('postTitle').textContent = data.title;
    document.getElementById('postContent').textContent = data.content;

    // Fetch an image from Google (via Unsplash or Google Images API)
    // For simplicity, we'll use Unsplash with the blog title as query
    const query = encodeURIComponent(data.title);
    const imageUrl = `https://source.unsplash.com/600x400/?${query}`;
    document.getElementById('blogImage').src = imageUrl;
  } else {
    document.getElementById('postTitle').textContent = 'No Blog Data Found.';
  }

  document.getElementById('backBtn').onclick = () => {
    window.location.href = 'index.html';
  };
