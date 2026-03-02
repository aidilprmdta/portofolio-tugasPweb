document.addEventListener("DOMContentLoaded", function () {
  const toggle = document.getElementById("menu-toggle");
  const nav = document.querySelector(".nav");
  const navLinks = document.querySelectorAll(".nav a");
  const sections = document.querySelectorAll("section");
  const header = document.querySelector(".header");
  
  // MOBILE MENU TOGGLE
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      nav.classList.toggle("active");    });
  }

  // SMOOTH SCROLL & CLOSE MENU
  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      const targetId = this.getAttribute("href");

      // Tutup menu mobile saat link diklik
      if (nav) nav.classList.remove("active");

      if (targetId.startsWith("#")) {
        const target = document.querySelector(targetId);
        if (target) {
          e.preventDefault();
          const headerHeight = header ? header.offsetHeight : 0;

          window.scrollTo({
            top: target.offsetTop - headerHeight,
            behavior: "smooth",
          });
        }
      }
    });
  });

  // ACTIVE LINK ON SCROLL
  window.addEventListener("scroll", function () {
    let currentSection = "";
    const headerHeight = header ? header.offsetHeight : 70;
    const scrollPos = window.scrollY;

    sections.forEach((section) => {
      const sectionTop = section.offsetTop - (headerHeight + 50);
      const sectionHeight = section.offsetHeight; 

      if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
        currentSection = section.getAttribute("id");
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (currentSection && link.getAttribute("href") === "#" + currentSection) {
        link.classList.add("active");
      }
    });
  });
});