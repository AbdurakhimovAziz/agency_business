const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav__list');
const body = document.querySelector('body');

/* Toggle class to open/close nav menu, block/unblock body to control scrolling, transform burger icon */
const toggleClass = function () {
  burger.classList.toggle('burger-active');
  nav.classList.toggle('active');
  body.classList.toggle('disabled');
};

/* track clicking on burger */
burger.addEventListener('click', (e) => {
  e.stopPropagation();
  toggleClass();
});

/* to hide menu when other sections are clicked */
document.addEventListener('click', function (e) {
  const target = e.target;
  const isNav = target == nav || nav.contains(target);
  const isBurger = target == burger;
  const isActiveNav = nav.classList.contains('active');

  if (!isNav && !isBurger && isActiveNav) {
    toggleClass();
  }
});

const accordeonIcon = document.querySelector('.details__icon');
const accordeonBody = document.querySelector('.details__body');
const close = document.querySelector('.details__cross');

function collapse() {
  accordeonIcon.classList.toggle('active');
  if (accordeonBody.style.maxHeight) {
    accordeonBody.style.maxHeight = null;
  } else {
    accordeonBody.style.maxHeight = '100%';
  }
}

accordeonIcon.addEventListener('click', collapse);

close.addEventListener('click', collapse);
