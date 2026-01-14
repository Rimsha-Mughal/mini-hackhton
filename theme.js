const toggle = document.getElementById("themeToggle");

toggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    localStorage.setItem("theme", "dark");
    toggle.innerText = "☀️";
  } else {
    localStorage.setItem("theme", "light");
    toggle.innerText = "🌙";
  }
});

// Load saved theme
if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark");
  toggle.innerText = "☀️";
}