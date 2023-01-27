const body = document.querySelector("body"),
  nav = document.querySelector("nav"),
  modeToggle = document.querySelector(".dark-light"),
  searchToggle = document.querySelector(".searchToggle"),
  sidebarOpen = document.querySelector(".siderbarOpen"),
  sidebarClose = document.querySelector(".siderbarClose");

let getMode = localStorage.getItem("mode");
if (getMode && getMode === "dark-mode") {
  body.classList.add("dark");
}

// toggle light and dark mode
modeToggle.addEventListener("click", () => {
  modeToggle.classList.toggle("active");
  body.classList.toggle("dark");

  //user interface when page refreshes (keeps dark or light mode!)
  if (!body.classList.contains("dark")) {
    localStorage.setItem("mode", "light-mode");
  } else {
    localStorage.setItem("mode", "dark-mode");
  }
});

// toggle search box
searchToggle.addEventListener("click", () => {
  searchToggle.classList.toggle("active");
});

//toggle sidebar
sidebarOpen.addEventListener("click", () => {
  nav.classList.add("active");
});
body.addEventListener("click", (e) => {
  let clickedElm = e.target;

  if (
    !clickedElm.classList.contains("siderbarOpen") &&
    !clickedElm.classList.contains("menu")
  ) {
    nav.classList.remove("active");
  }
});
