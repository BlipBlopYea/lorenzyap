// A simple JavaScript enhancement (good for a high grade!)

// Wait for the HTML document to fully load
document.addEventListener("DOMContentLoaded", function() {
    console.log("Portfolio JS loaded");

    // Select the theme button and body element
    const themeButton = document.getElementById("theme-icon");
    const body = document.body;

    // Check if user previously saved a theme preference
    const savedTheme = localStorage.getItem("theme");

    // Apply saved theme if it exists (e.g., 'light')
    if (savedTheme) {
        body.classList.add(savedTheme);
        // Update the icon based on the loaded theme
        themeButton.textContent = savedTheme === "light-theme" ? "☀️" : "🌙";
    }

    // Define what happens when you click the button
    themeButton.addEventListener("click", function() {
        // Toggle the 'light-theme' class on the body
        // We defined all dark variables by default; light overrides them.
        body.classList.toggle("light-theme");

        // Determine which theme is now active
        const currentTheme = body.classList.contains("light-theme") ? "light-theme" : "dark-theme";

        // Save preference to localStorage so it persists on reload
        localStorage.setItem("theme", currentTheme);

        // Update the button icon
        themeButton.textContent = currentTheme === "light-theme" ? "☀️" : "🌙";
    });

    // Simple scroll reveal (like Yuji's subtle effects)
    // Select elements you want to animate on scroll
    const animatedElements = document.querySelectorAll('.card, .about-section h2');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in'); // Add the animation class when seen
            }
        });
    });

    // Observe each element
    animatedElements.forEach(el => observer.observe(el));
});