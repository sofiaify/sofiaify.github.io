(function () {
  function initCarousel(root) {
    var slides = root.querySelectorAll(".carousel-slide");
    var dots = root.querySelectorAll(".carousel-dot");
    var prev = root.querySelector(".carousel-prev");
    var next = root.querySelector(".carousel-next");
    if (slides.length === 0) return;

    var index = 0;

    function show(i) {
      index = (i + slides.length) % slides.length;
      slides.forEach(function (slide, n) {
        slide.classList.toggle("is-active", n === index);
      });
      dots.forEach(function (dot, n) {
        dot.classList.toggle("is-active", n === index);
      });
    }

    if (prev) prev.addEventListener("click", function () { show(index - 1); });
    if (next) next.addEventListener("click", function () { show(index + 1); });

    dots.forEach(function (dot) {
      dot.addEventListener("click", function () {
        show(parseInt(dot.getAttribute("data-index"), 10));
      });
    });

    // Single slide: no need for controls
    if (slides.length < 2) {
      if (prev) prev.style.display = "none";
      if (next) next.style.display = "none";
      var dotsWrap = root.querySelector(".carousel-dots");
      if (dotsWrap) dotsWrap.style.display = "none";
    }

    show(0);
  }

  document.querySelectorAll("[data-carousel]").forEach(initCarousel);
})();
