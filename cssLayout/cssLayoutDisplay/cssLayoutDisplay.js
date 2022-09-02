/* 1. module variables for dom classes */
const menu = document.querySelector(".menu");
const items = document.querySelectorAll(".item");

/* 1.1 add new dom node*/
const toggle = document.createElement("li")
toggle.classList.add("toggle")
toggle.innerHTML = `<a href="#"><i class="fas fa-bars"></i></a>`
function insertAfter(newNode, referenceNode) {
  referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}
const blog = document.querySelector("#contact");
insertAfter(toggle, blog);


/* 3. Toggle mobile menu */
function toggleMenu() {
  if (menu.classList.contains("active")) {
    menu.classList.remove("active");
    toggle.querySelector("a").innerHTML = "<i class='fas fa-bars'></i>";
  } 
  else {
    menu.classList.add("active");
    toggle.querySelector("a").innerHTML = "<i class='fas fa-times'></i>";
  }
}

/* 4. Activate Submenu */
function toggleItem() {
  if (this.classList.contains("submenu-active")) {
    this.classList.remove("submenu-active");
  } 
  else if (menu.querySelector(".submenu-active")) {
    menu.querySelector(".submenu-active").classList.remove("submenu-active");
    this.classList.add("submenu-active");
  } 
  else {
    this.classList.add("submenu-active");
  }
}

/* 5. Close Submenu From Anywhere */
function closeSubmenu(e) {
  if (menu.querySelector(".submenu-active")) {
    let isClickInside = menu
      .querySelector(".submenu-active")
      .contains(e.target);
    if (!isClickInside && menu.querySelector(".submenu-active")) {
      menu.querySelector(".submenu-active").classList.remove("submenu-active");
    }
  }
}

/*2. 
    Event Listeners 
        - give .toggle button a click event. Calls function toggleMenu()
        - give each .item a keypress event. (depreciated, use keydown instead)
          give each .item with .submenu a click event. Calls function toggleItem()  
        - give whole document click event. Calls function closeSubmenu()
*/

toggle.addEventListener("click", toggleMenu, false);
for (let item of items) {
  item.addEventListener("click", toggleItem, false);
  item.addEventListener("keypress", toggleItem, false);
}
document.addEventListener("click", closeSubmenu, false);


/*
  sticky navbar
  https://www.w3schools.com/howto/howto_js_navbar_sticky.asp
*/
/*
const navbar = document.querySelector("nav");
// Get the offset position of the navbar
const sticky = navbar.offsetTop;
// When the user scrolls the page, execute myFunction
window.onscroll = function() {
  // Add the sticky class to the navbar when you reach its scroll position. 
  // Remove "sticky" when you leave the scroll position
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}*/

