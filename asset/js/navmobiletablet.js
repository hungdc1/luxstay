const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);


const navIcon = $('.header-navbar__mobile--icon');
const navbarMobileTablet = $('.navbar-mobile-tablet');
const overlay = $('.overlay');
const navExit = $('.navbar-mobile-tablet__item--exit');




function showNavbarMobileTablet() {
    navIcon.addEventListener('click', showNav);
    navExit.addEventListener('click', hideNav);
    overlay.addEventListener('click', hideNav);
};

function showNav() {
    navbarMobileTablet.classList.remove('hide-nav-mobile');
    overlay.classList.remove('hide');
};

function hideNav() {
    navbarMobileTablet.classList.add('hide-nav-mobile');
    overlay.classList.add('hide');
};

showNavbarMobileTablet();

export default showNavbarMobileTablet;