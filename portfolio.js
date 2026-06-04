
const hamburger = document.querySelector(".hamburger");
const menubar = document.querySelector(".navbar-menu .menu-bar");
const menuLinks = document.querySelectorAll(".navbar-menu .menu-bar a");


hamburger.addEventListener("click", () => {
    menubar.classList.toggle("show");
});


menuLinks.forEach((link) => {
    link.addEventListener("click", () => {
        menubar.classList.remove("show");
    });
});


document.addEventListener("click", (e) => {
    if (
        !hamburger.contains(e.target) &&
        !menubar.contains(e.target)
    ) {
        menubar.classList.remove("show");
    }
});



document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});



const navbar = document.querySelector(".navbar");
const mobileNavbar = document.querySelector(".navbar-menu");

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        if (navbar) {
            navbar.style.boxShadow = "0 2px 10px rgba(0,0,0,0.15)";
        }

        if (mobileNavbar) {
            mobileNavbar.style.boxShadow = "0 2px 10px rgba(0,0,0,0.15)";
        }
    } else {
        if (navbar) {
            navbar.style.boxShadow = "none";
        }

        if (mobileNavbar) {
            mobileNavbar.style.boxShadow = "none";
        }
    }
});