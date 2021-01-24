const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav__list');

burger.addEventListener('click', e => {
	e.preventDefault();
	burger.classList.toggle('burger-active');
	nav.classList.toggle('active');
});