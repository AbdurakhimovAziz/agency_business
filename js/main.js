const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav__list');
const body = document.querySelector('body');

burger.addEventListener('click', e => {
	e.preventDefault();
	burger.classList.toggle('burger-active');
	nav.classList.toggle('active');
	body.classList.toggle('disabled');
});