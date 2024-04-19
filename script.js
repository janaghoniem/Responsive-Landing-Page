document.addEventListener('DOMContentLoaded', function() {
    let currentSlide = 0;
    const slides = document.querySelectorAll('.slides img');
    const title = document.getElementById('carousel-title');
    const titles = ['American Museum of Natural History', 'Broadway', 'Times Square'];

    function showSlide(n) {
        if (slides.length === 0) {
            console.error('No slides found.');
            return;
        }
        if (n >= slides.length) { currentSlide = 0; }
        if (n < 0) { currentSlide = slides.length - 1; }
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = 'none';
        }
        slides[currentSlide].style.display = 'block';
        title.innerHTML = titles[currentSlide];
    }

    function nextSlide() {
        showSlide(currentSlide += 1);
    }

    function startSlideshow() {
        setInterval(nextSlide, 3000); // Change slide every 3 seconds
    }

    showSlide(currentSlide);
    startSlideshow(); // Start the slideshow automatically
});
