"use strict";

const themeToggle = document.getElementById("themeToggle");
const root = document.documentElement;

themeToggle.addEventListener("click", () => {
    root.classList.toggle("dark");
});

