const slideContainer = document.querySelectorAll(".slider");

for (let i = 0; i < slideContainer.length; i++) {
  const slider = () => {
    const currentSlider = slideContainer[i];
    const slides = currentSlider.querySelectorAll(".slide");
    const btnPrevious = currentSlider.querySelector(".slider__arrow--left");
    const btnNext = currentSlider.querySelector(".slider__arrow--right");
    const dotsContainer = currentSlider.querySelector(".dots");
    const isAutoPlay = currentSlider.classList.contains("auto-play");

    let currentSlide = 0;
    const slidesCount = slides.length;

    // Functions
    const createDots = () => {
      for (let i = 0; i < slidesCount; i++) {
        const paginationItem = document.createElement("button");
        paginationItem.classList.add("dots__dot");
        paginationItem.setAttribute("data-slide", i);
        paginationItem.setAttribute("aria-label", "slide pagination");
        dotsContainer.appendChild(paginationItem);
      }
    };

    const activateDot = (dotIndex) => {
      currentSlider
        .querySelectorAll(".dots__dot")
        .forEach((dot) => dot.classList.remove("dots__dot--active"));

      currentSlider
        .querySelector(`[data-slide="${dotIndex}"]`)
        .classList.add("dots__dot--active");
    };

    const goToSlide = (slideIndex) => {
      slides.forEach(
        (slide, i) =>
          (slide.style.transform = `translateX(${100 * (i - slideIndex)}%)`)
      );
    };

    const nextSlide = () => {
      if (currentSlide === slidesCount - 1) {
        currentSlide = 0;
      } else {
        currentSlide++;
      }

      goToSlide(currentSlide);
      activateDot(currentSlide);
    };

    const prevSlide = () => {
      if (currentSlide === 0) {
        currentSlide = slidesCount - 1;
      } else {
        currentSlide--;
      }
      goToSlide(currentSlide);
      activateDot(currentSlide);
    };

    const autoPlay = () => {
      const duration =
        parseInt(currentSlider.getAttribute("data-autoplay-duration")) || 3000; // default auto play duration is 3000 ms

      setInterval(() => {
        nextSlide();
      }, duration);
    };

    const init = () => {
      // goToSlide(0);
      createDots();

      activateDot(0);
      isAutoPlay && autoPlay();
    };
    init();

    // Events handlers
    btnNext.addEventListener("click", nextSlide);
    btnPrevious.addEventListener("click", prevSlide);

    document.addEventListener("keydown", (e) => {
      e.key === "ArrowLeft" && prevSlide();
      e.key === "ArrowRight" && nextSlide();
    });

    dotsContainer.addEventListener("click", (e) => {
      if (e.target.classList.contains("dots__dot")) {
        const { slide } = e.target.dataset;
        goToSlide(slide);
        activateDot(slide);
      }
    });
  };
  slider();
}
