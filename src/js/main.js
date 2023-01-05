import '@/sass/main.sass';

// Импорт компонентов HTML
import headerComp from '@/components/_header/header.html?raw';
import heroComp from '@/components/_hero/hero.html?raw';
import podcastComp from '@/components/_podcast/podcast.html?raw';

// Импорт дополнительных модулей
import BurgerMenu from './burgerMenu';
import Panel from './panel';

/**
 * Функция добавления компонента в DOM дерево
 * @param {*} importSection
 * @param {String} tagNameElement - название тега
 * @param {Object} container - контейнер DOM
 */
function loadSection(importSection, tagNameElement, container) {
  const elem = new DOMParser()
    .parseFromString(importSection, 'text/html')
    .getElementsByTagName(tagNameElement)[0];

  container.appendChild(elem);
}

function burgerHandler() {
  if (!burger.isOpen && !burger.isAction) {
    burger.open();

    if (panel.isOpen) panel.close();
  }

  if (burger.isOpen && !burger.isAction) burger.close();
}

function panelHandler() {
  if (!panel.isOpen && !panel.isAction) panel.open();

  if (panel.isOpen && !panel.isAction) panel.close();
}

// Вставляем компоненты HTML в основной DOM
loadSection(headerComp, 'header', document.body);
loadSection(heroComp, 'section', document.body);
loadSection(podcastComp, 'section', document.body);

// HEADER
const burger = new BurgerMenu({
  element: document.getElementById('burger'),
  animDilay: 200,
  classStyleName: 'active',
  isFirstElementAdd: true,
  onClick: burgerHandler,
});

const panel = new Panel({
  element: document.getElementById('panel'),
  animDilay: 200,
  classStyleName: 'open',
  isFirstElementAdd: false,
  onClick: panelHandler,
});

const burgerLinks = document.querySelectorAll('.header__burger-nav-link');
// burgerLinks.addEventListener('click');
