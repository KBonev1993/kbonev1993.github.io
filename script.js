// Smooth scrolling for anchor links
document.querySelectorAll('a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        if (this.hash !== "") {
            e.preventDefault();

            const targetElement = document.querySelector(this.hash);
            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: "smooth"
            });
        }
    });
});

// Add a custom cursor effect (e.g., purple ring when hovering over links)
document.querySelectorAll('a').forEach(anchor => {
    anchor.addEventListener('mouseover', function () {
        document.body.style.cursor = 'url(images/purple-ring.svg), pointer'; // Use a custom cursor image
    });

    anchor.addEventListener('mouseout', function () {
        document.body.style.cursor = 'default'; // Reset cursor back to default
    });
});
