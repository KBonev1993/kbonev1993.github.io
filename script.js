// You can add interactivity here, like a smooth scroll or a contact form handler.
document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', event => {
        event.preventDefault();
        const section = document.querySelector(link.getAttribute('href'));
        section.scrollIntoView({ behavior: 'smooth' });
    });
});
