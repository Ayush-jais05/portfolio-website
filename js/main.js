// ================= EMAILJS INITIALIZATION =================
(function () {
    emailjs.init("Rm5dStwUIHCF7uK6D");
})();

document.addEventListener("DOMContentLoaded", function () {

    // ================= VARIABLES =================
    const navLinks = document.querySelectorAll(".nav-links a");
    const sections = document.querySelectorAll("section");
    const menuToggle = document.querySelector(".menu-toggle");
    const navMenu = document.querySelector(".nav-links");
    const scrollTopBtn = document.getElementById("scrollTopBtn");
    const form = document.getElementById("contact-form");
    const statusText = document.getElementById("form-status");

    // ================= MOBILE MENU TOGGLE =================
    let open = false;
    if (menuToggle) {
        menuToggle.addEventListener("click", function () {
            if (open) {
                navMenu.classList.add("active");
                menuToggle.classList.add("open");
            }
            else {
                navMenu.classList.remove("active");
                menuToggle.classList.remove("open");
            }
            open = !open;

        });
    }


    // ================= SMOOTH SCROLL =================
    navLinks.forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();

            const targetId = this.getAttribute("href");
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 80,
                    behavior: "smooth"
                });
            }

            // Close mobile menu after clicking link
            if (navMenu) {
                navMenu.classList.remove("active");
            }
            if (menuToggle) {
                menuToggle.classList.remove("open");
            }
        });
    });

    // ================= CONTACT FORM =================
    if (form) {
        form.addEventListener("submit", function (e) {
            e.preventDefault();

            statusText.style.color = "#9aa6b2";
            statusText.innerText = "Sending message...";

            emailjs.sendForm(
                "service_sfgngej",
                "template_89ayaua",
                this
            ).then(() => {

                statusText.style.color = "#1fd0ff";
                statusText.innerText = "Message sent successfully ✔";
                form.reset();

            }).catch(() => {

                statusText.style.color = "#ff6b6b";
                statusText.innerText = "Failed to send message ❌";

            });
        });
    }

    // ================= SCROLL REVEAL =================
const reveals = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver((entries, observer) => {

  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("active");
      observer.unobserve(entry.target);
    }
  });

}, {
  threshold: 0.12,
  rootMargin: "0px 0px -40px 0px"
});

reveals.forEach(el => observer.observe(el));

    // ================= ACTIVE NAVBAR + SCROLL TOP =================
    window.addEventListener("scroll", function () {

        let currentSection = "";

        sections.forEach(section => {
            const sectionTop = section.offsetTop - 120;
            const sectionHeight = section.offsetHeight;

            if (
                window.scrollY >= sectionTop &&
                window.scrollY < sectionTop + sectionHeight
            ) {
                currentSection = section.getAttribute("id");
            }
        });

        navLinks.forEach(link => {
            link.classList.remove("active");

            if (link.getAttribute("href") === "#" + currentSection) {
                link.classList.add("active");
            }
        });

        // Scroll-to-top button visibility
        if (scrollTopBtn) {
            if (window.scrollY > 300) {
                scrollTopBtn.classList.add("show");
            } else {
                scrollTopBtn.classList.remove("show");
            }
        }

    });

    // ================= SCROLL TO TOP =================
    if (scrollTopBtn) {
        scrollTopBtn.addEventListener("click", function () {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });
    }

});


window.addEventListener("scroll", () => {
  const scroll = window.scrollY;
  const height = document.body.scrollHeight - window.innerHeight;
  const progress = (scroll / height) * 100;
  document.getElementById("progress-bar").style.width = progress + "%";
});

