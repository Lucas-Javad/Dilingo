/*===================================================================== Mobile hamburger menu===========================================*/
document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.querySelector(".nav__hamburger");
  const menu = document.querySelector(".nav__menu");
  const hamburgerLines = document.querySelector(".nav__hamburger__lines");

  hamburger.addEventListener("click", function () {
    menu.classList.toggle("nav__menu--mobile");
    hamburgerLines.classList.toggle("nav__hamburger__lines--cross");
  });

  // Add click event to remove classes when clicking outside the navigation
  /*document.addEventListener("click", function (event) {
    const target = event.target;
    if (!menu.contains(target) && !hamburger.contains(target)) {
      menu.classList.remove("nav__menu--mobile");
      hamburgerLines.classList.remove("nav__hamburger__lines--cross");
    }
  });*/
  // Add click event to remove classes when a menu link is clicked
  const menuLinks = document.querySelectorAll(".nav__menu__items--link");
  menuLinks.forEach(function (link) {
    link.addEventListener("click", function () {
      menu.classList.remove("nav__menu--mobile");
      hamburgerLines.classList.remove("nav__hamburger__lines--cross");
    });
  });
});
document.addEventListener("DOMContentLoaded", function() {
  const container = document.querySelector(".courses__container");
  const slides = document.querySelectorAll(".courses__container__slide");
  const leftBtn = document.querySelector(".left-btn");
  const rightBtn = document.querySelector(".right-btn");
  const slideWidth = 371;
  let currentSlide = 0;

  leftBtn.addEventListener("click", function() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    container.scrollLeft = currentSlide * slideWidth;
  });

  rightBtn.addEventListener("click", function() {
    currentSlide = (currentSlide + 1) % slides.length;
    
    // Check if we have reached the end (original last slide)
    if (currentSlide === slides.length - 1) {
      container.scrollLeft = 0; // Scroll back to the first slide
    } else {
      container.scrollLeft = currentSlide * slideWidth;
    }
  });
});
/*========================================================= Teachers Slide Show ===================================================*/
let slideIndex = 1;
  showSlides(slideIndex);

  function plusSlides(n) {
      showSlides(slideIndex += n);
  }

  function currentSlide(n) {
      showSlides(slideIndex = n);
  }

  function showSlides(n) {
      let i;
      const slides = document.getElementsByClassName("teachers__conatainer__teacher-mobile");
      const dots = document.getElementsByClassName("teachers__conatainer-dot");
      if (n > slides.length) {
          slideIndex = 1;
      }
      if (n < 1) {
          slideIndex = slides.length;
      }
      for (i = 0; i < slides.length; i++) {
          slides[i].style.display = "none";
      }
      for (i = 0; i < dots.length; i++) {
          dots[i].className = dots[i].className.replace(" teachers__conatainer-dot-active", "");
      }
      slides[slideIndex - 1].style.display = "flex";
      dots[slideIndex - 1].className += " teachers__conatainer-dot-active";
  }