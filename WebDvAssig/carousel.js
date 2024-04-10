const images = document.querySelectorAll('.carousel-images .image-container');
const nextButton = document.querySelector('.next');
const prevButton = document.querySelector('.prev');
let currentIndex = 0;

function showImage(index) {
    images.forEach((container, i) => {
        container.classList.remove('active');
    });
    images[index].classList.add('active');
    currentIndex = index;
}

function showNext() {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
}

function showPrev() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(currentIndex);
}

nextButton.addEventListener('click', showNext);
prevButton.addEventListener('click', showPrev);

// Initialize the carousel by showing the first image
showImage(currentIndex);
