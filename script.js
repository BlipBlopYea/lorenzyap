document.addEventListener("DOMContentLoaded", function() {
    const container = document.getElementById('beforeAfterSlider');
    const beforeImg = document.getElementById('beforeImg');
    const handle = document.getElementById('sliderHandle');
    
    if (!container || !beforeImg || !handle) return;

    let isSliding = false;

    // Helper function to calculate position and apply the change
    function moveSlider(clientX) {
        const rect = container.getBoundingClientRect();
        // Determine position relative to slider width (0.0 to 1.0)
        let position = (clientX - rect.left) / rect.width;
        
        // Lock boundaries so it doesn't break out of the container frame
        if (position < 0) position = 0;
        if (position > 1) position = 1;
        
        // Apply width to the front (before) image layer and position the handle bar
        const percentage = position * 100;
        beforeImg.style.width = `${percentage}%`;
        handle.style.left = `${percentage}%`;
        // Inside your slider input event listener, change it to update clipPath:
beforeImg.style.clipPath = `inset(0 ${100 - sliderValue}% 0 0)`;
    }

    // --- Mouse Event Controls ---
    handle.addEventListener('mousedown', function() {
        isSliding = true;
    });

    window.addEventListener('mouseup', function() {
        isSliding = false;
    });

    window.addEventListener('mousemove', function(e) {
        if (!isSliding) return;
        moveSlider(e.clientX);
    });

    // --- Touch Screen Event Controls (For Mobile Devices) ---
    handle.addEventListener('touchstart', function() {
        isSliding = true;
    });

    window.addEventListener('touchend', function() {
        isSliding = false;
    });

    window.addEventListener('touchmove', function(e) {
        if (!isSliding) return;
        if (e.touches.length > 0) {
            moveSlider(e.touches[0].clientX);
        }
    });
});
