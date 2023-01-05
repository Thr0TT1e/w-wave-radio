import '@/sass/main.sass';

// Импорт компонентов HTML
import headerComp from '@/assets/components/_header/header.html?raw';

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

loadSection(headerComp, 'header', document.body);
