document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.querySelector(".menu-toggle");
  const mobileMenu = document.querySelector(".mobile-menu");
  const navLinks = document.querySelectorAll(".nav-links a");

  // Toggle menu
  menuToggle.addEventListener("click", function (e) {
    e.stopPropagation(); // Prevent event from bubbling up
    menuToggle.classList.toggle("active");
    mobileMenu.classList.toggle("active");
  });

  // Close menu when clicking a link
  navLinks.forEach((link) => {
    link.addEventListener("click", function () {
      menuToggle.classList.remove("active");
      mobileMenu.classList.remove("active");
    });
  });

  // Close menu when clicking outside
  document.addEventListener("click", function (e) {
    const isClickInside =
      mobileMenu.contains(e.target) || menuToggle.contains(e.target);
    if (!isClickInside && mobileMenu.classList.contains("active")) {
      menuToggle.classList.remove("active");
      mobileMenu.classList.remove("active");
    }
  });

  // Prevent menu from closing when clicking inside it
  mobileMenu.addEventListener("click", function (e) {
    e.stopPropagation();
  });
});
