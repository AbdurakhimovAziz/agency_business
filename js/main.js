'use strict'

const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav__list');
const body = document.querySelector('body');

/* Toggle class to open/close nav menu, block/unblock body to control scrolling, transform burger icon */
const toggleClass = function() {
	burger.classList.toggle('burger-active');
	nav.classList.toggle('active');
	body.classList.toggle('disabled');
}

/* track clicking on burger */
burger.addEventListener('click', e => {
	e.stopPropagation();
	toggleClass();
});

/* to hide menu when other sections are clicked */
document.addEventListener('click', function(e) {
    const target = e.target;
    const isNav = target == nav || nav.contains(target);
    const isBurger = target == burger;
    const isActiveNav = nav.classList.contains('active');
    
    if (!isNav && !isBurger && isActiveNav) {
        toggleClass();
    }
});
