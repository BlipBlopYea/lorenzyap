document.addEventListener('DOMContentLoaded', () => {
    // Slider Logic
    const slider = document.getElementById('imageSlider');
    const beforeImgContainer = document.getElementById('beforeImg');
    const sliderHandle = document.getElementById('sliderHandle');
    slider.addEventListener('input', (e) => {
        beforeImgContainer.style.width = `${e.target.value}%`;
        sliderHandle.style.left = `${e.target.value}%`;
    });

    // Carousel Logic
    let slideIndex = 0;
    function showSlides() {
        let slides = document.getElementsByClassName("carousel-slide");
        for (let i = 0; i < slides.length; i++) { slides[i].style.display = "none"; }
        slideIndex++;
        if (slideIndex > slides.length) { slideIndex = 1 }
        slides[slideIndex-1].style.display = "block";
        setTimeout(showSlides, 4000); 
    }
    showSlides();
});