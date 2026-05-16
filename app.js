"use strict";

const themeToggle = document.getElementById("themeToggle");
const root = document.documentElement;

themeToggle.addEventListener("click", () => {
    root.classList.toggle("dark");
});

const hamburger = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobileMenu");

hamburger.addEventListener("click", () => {
    mobileMenu.classList.toggle("show");
});

const form = document.getElementById("contactForm");
const status = document.getElementById("formStatus");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    status.textContent = "Message sent successfully!";
    
    form.reset();
});

const header = document.querySelector(".site-header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 10) {
        header.style.boxShadow = "0 2px 10px rgba(0,0,0,0.1)";
    } 
    
    else {
        header.style.boxShadow = "none";
    }

});