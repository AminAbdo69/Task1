
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