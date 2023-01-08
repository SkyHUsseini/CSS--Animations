"use strict";
const menuBtn = document.querySelector(".menu-btn");
const menuBtnBurger = document.querySelector(".menu-btn__burger");
let menuBtnOpen = false;
menuBtn.addEventListener("click", function (e) {
  if (!menuBtnOpen) {
    menuBtn.classList.add("open");
    menuBtnOpen = true;
    console.log("clicked");
  } else {
    menuBtn.classList.remove("open");
    menuBtnOpen = false;
  }
});
