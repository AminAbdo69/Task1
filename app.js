// const slides = document.querySelectorAll(".slide");
// const bullets = document.querySelectorAll(".slider-bullets li");



// let currentSlide = 0;

// const previous = document.getElementById("previous");
// const next = document.getElementById("next");

// previous.addEventListener("click", handlePrevious);
// next.addEventListener("click", handleNext);

// function handlePrevious() {
//   currentSlide = currentSlide === 0 ? 2 : (currentSlide - 1) % 3;
//   updateSlidesAndBullets();
// }

// function handleNext() {
//   currentSlide = (currentSlide + 1) % 3;
//   updateSlidesAndBullets();
// }

// function goToSlide(index) {
//   currentSlide = index;
//   updateSlidesAndBullets();
// }

// function updateSlidesAndBullets() {
//   for (let i = 0; i < 3; i++) {
//     const slide = slides[i];
//     const bullet = bullets[i];
//     slide.classList.remove("isPrevious", "isCurrent", "isNext");
//     bullet.style.opacity = 0.5;
//     if (i === currentSlide) {
//       slide.classList.add("isCurrent");
//       bullet.style.opacity = 1;
//     } else if (i === (currentSlide + 1) % 3) {
//       slide.classList.add("isNext");
//     } else if (i === (currentSlide === 0 ? 2 : (currentSlide - 1) % 3)) {
//       slide.classList.add("isPrevious");
//     }
//   }
// }

// setInterval(() => {
//   handleNext()
// }, 5000 )

const slides = document.querySelectorAll(".slide");
const bullets = document.querySelectorAll(".bullets button");

let currentSlide = 0;

function goNext(){
  currentSlide = (currentSlide+1) % 3 ;
  updateSlide();
}


function goBack() {
  currentSlide = currentSlide==0 ? 2 :(currentSlide-1) % 3 ;
  updateSlide();
}
function updateSlide()
{
  

  for(let i=0 ; i<3 ; i++){
    slides[i].classList.remove("next" , "current" , "preve");
    bullets[i].classList.remove("current-bullet");
    if(i === currentSlide) {
      slides[i].classList.add("current");
      bullets[i].classList.add("current-bullet");
    }else if(i === (currentSlide+1) % 3) {
      slides[i].classList.add("next");
    }else
    slides[i].classList.add("preve");
  }
}

function goSlide(num) {
  currentSlide = num;
  updateSlide();
}

let btnNext = document.querySelector(".next-btn");
let btnPrev = document.querySelector(".prev-btn");



bullets.forEach(function(bullet , index) {
  bullet.addEventListener("click" , () =>goSlide(index))
})
btnNext.addEventListener("click" , goNext);
btnPrev.addEventListener("click" , goBack);



setInterval(() => {
  goNext();
} , 5000)


let scroll_btn = document.querySelector(".scroll-btn");

window.onscroll = function() {
  if(this.scrollY >=350 ) {
    scroll_btn.style.display="flex";
  }else {
      scroll_btn.style.display="none";
    }
};

scroll_btn.onclick = function () {
  window.scrollTo({
    top:0 , behavior :"smooth"

  })
};


let numbers = document.querySelectorAll(".num");
const dur = 2000;

numbers.forEach(numm => {
  let count =0;
  setInterval(()=> {
    if(count == Number(numm.dataset.value)){
      clearInterval;
    } else {
      count+=1;
      numm.innerHTML = `${count}+`
    }
  }, dur /  Number(numm.dataset.value))
})