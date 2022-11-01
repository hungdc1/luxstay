const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);


let slideShowLink = $('.slider__show--link');
let sliderItems = $$('.slider__item img');
let dots = $$('.owl-dot');
let preDot = $('.pre-dot');
let nextDot = $('.next-dot');


let currentIndex = 0;


function showSlider() {
    slideShowLink.innerHTML = '';
    let showImg = document.createElement('img');
    showImg.setAttribute('class', "slider__show--img");
    showImg.setAttribute('style', "animation: fade 0.2s ease-in-out");
    showImg.src = sliderItems[currentIndex].src;
    slideShowLink.appendChild(showImg);

    for ( let i = 0; i < dots.length; i++) {
        dots[i].classList.remove('owl-dot__active');
    };
    dots[currentIndex].classList.add('owl-dot__active');

    currentIndex++;
    if (currentIndex > sliderItems.length - 1) {
        currentIndex = 0;
    };
};

setInterval(showSlider,5000);

preDot.addEventListener('click', function() {
    currentIndex = 0;
    showSlider();
}); 

nextDot.addEventListener('click', function() {
    currentIndex = 1;
    showSlider();
});


export default showSlider;
