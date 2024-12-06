document.addEventListener('DOMContentLoaded', () => {
    const carrossel = document.querySelector('.carrossel');
    const slides = document.querySelector('.slides');
    const images = document.querySelectorAll('.slides img');

    let currentIndex = 0;

    function updateCarrossel() {
        const width = carrossel.clientWidth;
        slides.style.transform = `translateX(${-currentIndex * width}px)`;
    }

    window.addEventListener('resize', updateCarrossel);

    function showNextImage() {
        currentIndex = (currentIndex + 1) % images.length;
        updateCarrossel();
    }

    setInterval(showNextImage, 3000); // Altere o tempo conforme necessário (3000 ms = 3 segundos)
});
