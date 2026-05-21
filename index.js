const nav = document.querySelector('nav');
const scrollLimit = 90;
const cards = document.querySelectorAll('.servicecards');

/*Make navbar small on scroll down */
window.addEventListener('scroll', () => {
    if (window.scrollY > scrollLimit) {
        nav.classList.add('shrink');
    } else {
        nav.classList.remove('shrink');
    }
});

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
            /*observer.unobserve(entry.target);*/
        } else {
            entry.target.classList.remove('show');
        }
    });
}, {
    threshold: 0.1,
    rootMargin: '0px'
});

cards.forEach(card => {
    observer.observe(card);
});