let slideIndex = 0;
const slides = document.getElementsByClassName('slider-item');

function showSlides() {
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.transform = `translateX(-${slideIndex * 100}%)`;
  }
}

function nextSlide() {
  if (slideIndex < slides.length - 1) {
    slideIndex++;
  } else {
    slideIndex = 0;
  }
  showSlides();
}

function prevSlide() {
  if (slideIndex > 0) {
    slideIndex--;
  } else {
    slideIndex = slides.length - 1;
  }
  showSlides();
}

setInterval(nextSlide,3500);//gọi lại hàm nextSlide sau 3,5s

showSlides();
