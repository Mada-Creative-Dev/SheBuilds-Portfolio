// ================= MENU MOBILE =================

const menuBtn = document.getElementById("menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});


// ================= FERMER LE MENU =================

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });

});


// ================= ANNÉE AUTOMATIQUE =================

const year = document.getElementById("year");

year.textContent = new Date().getFullYear();