const slides = document.getElementsByClassName("carousel-item");
const previousButton = document.getElementById("carousel-button-prev");
const nextButton = document.getElementById("carousel-button-next");
const totalSlides = slides.length;
let slidePosition = 0;


// move the picture and stop the auto moving at the same time when clicked
// wrap 2 functions in a single click using arrow function
previousButton.addEventListener("click", () => {stopInterval();
    moveToPrevSlide()
});

nextButton.addEventListener("click", () => {stopInterval();
    moveToNextSlide()
});

function stopInterval(){
    clearInterval(move)
}

function hide() {
  slides[slidePosition].classList.remove("carousel-item-visible");
}

function show() {
  slides[slidePosition].classList.add("carousel-item-visible");
}

function moveToNextSlide() {
  hide();
  if (slidePosition === totalSlides - 1) {
    slidePosition = 0;
  } else {
    slidePosition += 1;
  }
  show();
}

function moveToPrevSlide() {
  hide();
  if (slidePosition === 0) {
    slidePosition = totalSlides - 1;
  } else {
    slidePosition -= 1;
  }
  show();
}

const move = setInterval(moveToNextSlide,2000)
