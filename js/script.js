let index = 0;
const images = document.querySelectorAll('.banner-image');

function showNextImage() {
    images[index].classList.remove('active');
    
    index = (index + 1) % images.length;
    
    images[index].classList.add('active');
}

setInterval(showNextImage, 3000);

images[index].classList.add('active');
