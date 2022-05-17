import './index.css';
import { displayChar, showComment } from './modules/display-items.js';
import { modal, btn } from './modules/DOM-elements.js';

const pokemons = ['pikachu', 'bulbasaur', 'venusaur', 'pidgeot', 'butterfree', 'spearow'];

pokemons.forEach((name) => {
  displayChar(name);
});

btn.addEventListener('click', () => {
  showComment();
  const span = document.createElement('span');
  span.innerHTML = '&times;';
  span.classList.add('close');
  span.addEventListener('click', () => {
    modal.style.display = 'none';
  });
  modal.children[0].append(span);
  modal.style.display = 'block';
});

window.addEventListener('click', (event) => {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
});
