'use strict';

const menu = document.querySelector('.menu');
const menuButton = document.querySelector('.header__menu-button');
const closeButton = document.querySelector('.menu__close');
const menuLinks = document.querySelectorAll('.menu__link');

const openMenu = () => {
  menu.classList.add('is-open');
  menu.setAttribute('aria-hidden', 'false');
  menuButton.setAttribute('aria-expanded', 'true');
};

const closeMenu = () => {
  menu.classList.remove('is-open');
  menu.setAttribute('aria-hidden', 'true');
  menuButton.setAttribute('aria-expanded', 'false');
};

menuButton.addEventListener('click', openMenu);
closeButton.addEventListener('click', closeMenu);

menuLinks.forEach((link) => {
  link.addEventListener('click', closeMenu);
});

// Header Hover (aparece fixo no topo ao rolar a página)
const headerHover = document.querySelector('.header-hover');
const headerHoverMenuButton = document.querySelector(
  '.header-hover__menu-button',
);

if (headerHover) {
  window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
      headerHover.classList.add('is-visible');
    } else {
      headerHover.classList.remove('is-visible');
    }
  });
}

if (headerHoverMenuButton) {
  headerHoverMenuButton.addEventListener('click', openMenu);
}

// Menu button dentro do Hero (sobreposto na imagem da bike)
const heroMenuButton = document.querySelector('.hero__menu-button');

if (heroMenuButton) {
  heroMenuButton.addEventListener('click', openMenu);
}
