document.addEventListener('DOMContentLoaded', () => {
    const slider = document.getElementById('imageSlider');
    const beforeImgContainer = document.getElementById('beforeImg');
    const sliderHandle = document.getElementById('sliderHandle');

    // Add event listener to trace mouse or touch drag movements
    slider.addEventListener('input', (e) => {
        const sliderValue = e.target.value;
        
        // Updates the container width box smoothly (the mask window)
        beforeImgContainer.style.width = `${sliderValue}%`;
        
        // Positions the white divider line exactly over the cut point
        sliderHandle.style.left = `${sliderValue}%`;
    });
});