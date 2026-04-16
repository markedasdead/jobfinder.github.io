const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
});



const burgerToggle = document.getElementById('burger-toggle');
const navMenu = document.getElementById('nav-menu');

burgerToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    burgerToggle.classList.toggle('open');
    
    if (navMenu.classList.contains('active')) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = 'auto';
    }
});


const extendedSearchLink = document.getElementById('extended-search__link');
const extendedSearchWrapper = document.getElementById('extended-search');
const extendedSearchSubmitButton = document.getElementById('submit_filters');

extendedSearchLink.addEventListener('click', (e) => {
    e.preventDefault();
    extendedSearchLink.classList.toggle('active');
    extendedSearchWrapper.classList.toggle('active');
});

extendedSearchSubmitButton.addEventListener('click', (e) => {
    e.preventDefault();
    extendedSearchLink.classList.remove('active');
    extendedSearchWrapper.classList.remove('active');
});

document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.slider__container');
    const slides = document.querySelectorAll('.slider__slide');
    const dots = document.querySelectorAll('.slider__dot');
    const btnPrev = document.querySelector('.slider__arrow--prev');
    const btnNext = document.querySelector('.slider__arrow--next');

    let currentIndex = 0;

    function updateSlider(index) {
        if (index >= slides.length) currentIndex = 0;
        else if (index < 0) currentIndex = slides.length - 1;
        else currentIndex = index;

        const slideWidth = slides[0].clientWidth + 30; 
        
        container.scrollTo({
            left: currentIndex * slideWidth,
            behavior: 'smooth'
        });

        dots.forEach((dot, i) => {
            dot.classList.toggle('slider__dot--active', i === currentIndex);
        });
    }

    btnNext.addEventListener('click', () => updateSlider(currentIndex + 1));
    btnPrev.addEventListener('click', () => updateSlider(currentIndex - 1));

    dots.forEach((dot, i) => {
        dot.addEventListener('click', () => updateSlider(i));
    });

    window.addEventListener('resize', () => updateSlider(currentIndex));
});