document.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelectorAll(".slide");
  const dots = document.querySelectorAll(".nav-dot");
  let currentSlide = 1;
  const slideInterval = 100000; // Changed to 10 seconds (10000ms)

  // Initialize first slide
  slides[0].classList.add("active");
  dots[0].classList.add("active");

  function goToSlide(n) {
    // Hide all slides
    slides.forEach((slide) => slide.classList.remove("active"));
    dots.forEach((dot) => dot.classList.remove("active"));

    // Update current slide
    currentSlide = (n + slides.length) % slides.length;

    // Show new slide
    slides[currentSlide].classList.add("active");
    dots[currentSlide].classList.add("active");
  }

  // Add click handlers to dots
  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      goToSlide(index);
      resetInterval();
    });
  });

  // Auto advance slides
  let slideTimer = setInterval(
    () => goToSlide(currentSlide + 1),
    slideInterval
  );

  // Reset interval when manually changing slides
  function resetInterval() {
    clearInterval(slideTimer);
    slideTimer = setInterval(() => goToSlide(currentSlide + 1), slideInterval);
  }

  // Optional: Pause on hover
  const sliderContainer = document.querySelector(".slider-container");
  sliderContainer.addEventListener("mouseenter", () => {
    clearInterval(slideTimer);
  });

  sliderContainer.addEventListener("mouseleave", () => {
    slideTimer = setInterval(() => goToSlide(currentSlide + 1), slideInterval);
  });
});
