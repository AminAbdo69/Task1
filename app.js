const slides = document.querySelectorAll(".slide");
const bullets = document.querySelectorAll(".slider-bullets li");

let currentSlide = 0;

const previous = document.getElementById("previous");
const next = document.getElementById("next");

previous.addEventListener("click", handlePrevious);
next.addEventListener("click", handleNext);

function handlePrevious() {
  currentSlide = currentSlide === 0 ? 2 : (currentSlide - 1) % 3;
  updateSlidesAndBullets();
}

function handleNext() {
  currentSlide = (currentSlide + 1) % 3;
  updateSlidesAndBullets();
}

function goToSlide(index) {
  currentSlide = index;
  updateSlidesAndBullets();
}

function updateSlidesAndBullets() {
  for (let i = 0; i < 3; i++) {
    const slide = slides[i];
    const bullet = bullets[i];
    slide.classList.remove("isPrevious", "isCurrent", "isNext");
    bullet.style.opacity = 0.5;
    if (i === currentSlide) {
      slide.classList.add("isCurrent");
      bullet.style.opacity = 1;
    } else if (i === (currentSlide + 1) % 3) {
      slide.classList.add("isNext");
    } else if (i === (currentSlide === 0 ? 2 : (currentSlide - 1) % 3)) {
      slide.classList.add("isPrevious");
    }
  }
}

setInterval(() => {
  handleNext()
}, 5000 )