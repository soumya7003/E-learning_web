document.querySelector(".toggler").addEventListener("click", function () {
    const menu = document.querySelector(".nav-mid");
    const icon = document.querySelector(".toggler i");

    menu.classList.toggle("d-menu");

    // Toggle icon
    if (menu.classList.contains("d-menu")) {
        icon.classList.remove("fa-bars");
        icon.classList.add("fa-xmark"); // cross
    } else {
        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars"); // bars
    }
});

// active navigation highlighting + hide menu after click
let navlinks = document.querySelectorAll(".nav-mid ul li a");
let menuPart = document.querySelector(".nav-wrapper .nav-mid");
let toggleIcon = document.querySelector(".toggler i");

for (let i = 0; i < navlinks.length; i++) {
    navlinks[i].addEventListener("click", function () {
        // remove old active
        for (let j = 0; j < navlinks.length; j++) {
            navlinks[j].classList.remove("active");
        }
        this.classList.add("active");

        // hide menu after click (remove d-menu class)
        menuPart.classList.remove("d-menu");

        // reset toggler icon back to bars
        toggleIcon.classList.remove("fa-xmark");
        toggleIcon.classList.add("fa-bars");
    });
}



window.addEventListener("scroll", function () {
    let navabar = document.querySelector(".nav-bar");
    if (window.pageYOffset > 101) {
        navabar.classList.add("sticky");
        navabar.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.2)";
    }
    else {
        navabar.classList.remove("sticky");
        navabar.style.boxShadow = "none";
    }
})



// slider
$(document).ready(function () {
    $("#owltwo").owlCarousel({
        items: 4,
        loop: true,
        margin: 25,
        autoplay: true,
        autoplayTimeout: 3000, // ⏳ wait 3s before sliding
        autoplaySpeed: 1000,   // 🎬 smooth sliding animation (1s)
        smartSpeed: 1000,      // 🪄 smooth navigation speed
        nav: false,
        dots: false,
        navText: [
            "<i class='fa fa-chevron-left'></i>",
            "<i class='fa fa-chevron-right'></i>"
        ],
        autoplayHoverPause: true, // ✅ pause on hover
        responsive: {
            0: {
                items: 1,
            },
            768: {
                items: 2,
            },
            991: {
                items: 3,
            },
        }
    });
});

//cart functionlity

let cartCount = document.getElementById("cartCount");
let addCartbtn = document.getElementById("addToCartBtn");

let count = 0;

addCartbtn.addEventListener("click", function (e) {
    e.preventDefault();
    count++;
    cartCount.innerText = "(" + count + ")";
});

// scroll - up - btn
let btn = document.getElementById("scrollBtn");

window.addEventListener("scroll", function () {

    //page scroll
    let scrollTop = window.scrollY || document.documentElement.scrollTop;
    //displayarea height
    let windowHeight = window.innerHeight;
    // total document height
    let docHeight = document.documentElement.scrollHeight;

    if (scrollTop + windowHeight >= docHeight - 10) {
        btn.style.display = "block";
    } else {
        btn.style.display = "none";
    }
});

btn.addEventListener("click", function (e) {
    e.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: "smooth"  // ✅ smooth animation
    });
});