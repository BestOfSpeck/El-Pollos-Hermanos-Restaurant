const header = document.getElementById("header");
let openingTimeImg = document.getElementById("opening_time_img");
let menuImg = document.getElementById("menu_img");
let locationImg = document.getElementById("location_img");
let aboutusImg = document.getElementById("aboutus_img");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    header.classList.add("scrolled");
    openingTimeImg.src = "./images/header-opening-time-black.png";
    menuImg.src = "./images/header-menu-black.png";
    locationImg.src = "./images/header-location-black.png";
    aboutusImg.src = "./images/header-aboutus-black.png";
  } else {
    header.classList.remove("scrolled");
    openingTimeImg.src = "./images/header-opening-time.png";
    menuImg.src = "./images/header-menu.png";
    locationImg.src = "./images/header-location.png";
    aboutusImg.src = "./images/header-aboutus.png";
  }
});
