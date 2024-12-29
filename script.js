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

// Add a custom cursor effect (e.g., glowing purple ring)
const cursorRing = document.createElement('div');
cursorRing.classList.add('cursor-ring');
document.body.appendChild(cursorRing);

document.addEventListener('mousemove', (e) => {
    cursorRing.style.left = `${e.pageX}px`;
    cursorRing.style.top = `${e.pageY}px`;
    cursorRing.style.opacity = 1;
});

document.querySelectorAll('a').forEach(anchor => {
    anchor.addEventListener('mouseover', () => {
        cursorRing.style.borderColor = '#8A2BE2'; // Set ring color to purple
    });

    anchor.addEventListener('mouseout', () => {
        cursorRing.style.borderColor = '#fff'; // Reset to white when not hovering
    });
});
