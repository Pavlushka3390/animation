import Collapse from './collapse';

const root = document.querySelector('.root');

const text =
  'В рамках реализации большого портала вам необходимо сделать виджет "collapsible"-контейнеров, который может разворачиваться и сворачиваться. Подобный виджет есть в рамках Bootstrap, но как мы с вами "знаем": "jQuery не нужен", поэтому вам нужно реализовать такой же виджет на чистом JS'
const collapseWidget = new Collapse(text);

collapseWidget.bindToDOM(root);
