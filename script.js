document.addEventListener('DOMContentLoaded', () => {
    
    const carousel = document.querySelector('.carousel');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

let currentIndex = 0;

function updateCarousel() {
  const offset = -currentIndex * 100;
  carousel.style.transform = `translateX(${offset}%)`;
}

prevBtn.addEventListener('click', () => {
  currentIndex = (currentIndex > 0) ? currentIndex - 1 : 0;
  updateCarousel();
});

nextBtn.addEventListener('click', () => {
  const totalItems = document.querySelectorAll('.carousel-item').length;
  currentIndex = (currentIndex < totalItems - 1) ? currentIndex + 1 : currentIndex;
  updateCarousel();
});

});