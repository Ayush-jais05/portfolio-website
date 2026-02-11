// ================= EMAILJS INITIALIZATION =================
(function () {
  emailjs.init("Rm5dStwUIHCF7uK6D");
})();


// ================= SMOOTH FAST SCROLL =================
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();

    const targetId = this.getAttribute('href');
    const targetSection = document.querySelector(targetId);

    if (targetSection) {
      window.scrollTo({
        top: targetSection.offsetTop - 80, // adjust for navbar height
        behavior: "smooth"
      });
    }
  });
});


// ================= CONTACT FORM =================
document.addEventListener("DOMContentLoaded", function () {

  const form = document.getElementById("contact-form");
  const statusText = document.getElementById("form-status");

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      statusText.style.color = "#9aa6b2";
      statusText.innerText = "Sending message...";

      emailjs.sendForm(
        "service_sfgngej",
        "template_89ayaua",
        this
      ).then(function () {

        statusText.style.color = "#1fd0ff";
        statusText.innerText = "Message sent successfully ✔";
        form.reset();

      }, function () {

        statusText.style.color = "#ff6b6b";
        statusText.innerText = "Failed to send message ❌";

      });
    });
  }

  // ================= SCROLL REVEAL ANIMATION =================
  const reveals = document.querySelectorAll(".reveal");

  const revealObserver = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  reveals.forEach(function (el) {
    revealObserver.observe(el);
  });

  // ================= ACTIVE NAVBAR ON SCROLL =================
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".nav-links a");

  window.addEventListener("scroll", function () {
    let current = "";

    sections.forEach(function (section) {
      const sectionTop = section.offsetTop - 120;

      if (window.scrollY >= sectionTop) {
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach(function (link) {
      link.classList.remove("active");

      if (link.getAttribute("href") === "#" + current) {
        link.classList.add("active");
      }
    });
  });

  // ================= AESTHETIC SCROLL TO TOP BUTTON =================
  const scrollTopBtn = document.getElementById("scrollTopBtn");

  if (scrollTopBtn) {

    window.addEventListener("scroll", function () {
      if (window.scrollY > 300) {
        scrollTopBtn.classList.add("show");
      } else {
        scrollTopBtn.classList.remove("show");
      }
    });

    scrollTopBtn.addEventListener("click", function () {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    });

  }

});

