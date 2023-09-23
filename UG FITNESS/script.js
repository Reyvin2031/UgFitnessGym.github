const menuItems = document.getElementById("menu-items");
const searchBar = document.getElementById("search-bar");
const searchIcon = document.getElementById("search-icon");
const closeIcon = document.getElementById("close-icon");
const myList = document.getElementById("myLinks");
const menuIcon = document.getElementById("menu-icon");
const myLinks = document.getElementById("myLinks");

searchIcon.addEventListener("click", function () {
  menuItems.style.display = "none";
  searchBar.style.display = "flex";
});

closeIcon.addEventListener("click", function () {
  menuItems.style.display = "flex";
  searchBar.style.display = "none";
  searchIcon.style.display = "flex";
  closeIcon.style.display = "flex";
});

function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}
