// Custom Cursor
document.addEventListener('mousemove', function (e) {
    const cursor = document.querySelector('.custom-cursor');
    cursor.style.left = `${e.pageX}px`;
    cursor.style.top = `${e.pageY}px`;
});

// Cursor Animation for Mouse Hover
const hoverElements = document.querySelectorAll('a, h1, h2, h3, p');
hoverElements.forEach(element => {
    element.addEventListener('mouseenter', function () {
        const cursor = document.querySelector('.custom-cursor');
        cursor.style.transform = 'scale(1.5)';
    });
    element.addEventListener('mouseleave', function () {
        const cursor = document.querySelector('.custom-cursor');
        cursor.style.transform = 'scale(1)';
    });
});
