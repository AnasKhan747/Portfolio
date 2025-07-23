/*===== SCROLL SECTIONS ACTIVE LINK =====*/
const sections = document.querySelectorAll('section[id10');
const navLinks = document.querySelectorAll('.nav-link');

const scrollActive = () => {
    const scrollY = window.scrollY;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 70; // Adjusted for navbar height
        const sectionId = current.getAttribute('id');
        const navLink = document.querySelector(`.nav-link[href*="${sectionId}"]`);

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navLinks.forEach(link => link.classList.remove('active'));
            navLink.classList.add('active');
        }
    });
};
window.addEventListener('scroll', scrollActive);

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 200
});

sr.reveal('.home .display-4, .about p, .skills h2, .work h2, .contact h2', {});
sr.reveal('.home .d-flex, .about .row, .skills .row, .work .row, .contact .row', { delay: 400 });
sr.reveal('.home a', { interval: 200 });
sr.reveal('.skills .card, .work .card, .contact__form .form-control', { interval: 200 });