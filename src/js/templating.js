import template from '../templates/menu.hbs';
import menuList from '../menu.json';

const galleryRef = document.querySelector('.js-menu');

const markup = template(menuList);
galleryRef.insertAdjacentHTML('beforeend', markup);
