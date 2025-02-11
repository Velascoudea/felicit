let index = 0;

function moveSlide(step) {
    const slides = document.querySelectorAll('.carousel-item');
    const totalSlides = slides.length;
    index += step;
    if (index < 0) index = totalSlides - 1;
    if (index >= totalSlides) index = 0;
    updateCarousel();
}

function updateCarousel() {
    const carousel = document.querySelector('.carousel');
    const width = document.querySelector('.carousel-item').clientWidth;
    carousel.style.transform =`translateX(${-index * width}px)`;
}

window.addEventListener('resize', updateCarousel)