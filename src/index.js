import './index.css';
import displayChar from './modules/display-items.js';
import { modal, btn } from './modules/DOM-elements.js';

const pokemons = ['pikachu', 'bulbasaur', 'venusaur', 'pidgeot', 'butterfree', 'spearow'];

pokemons.forEach((name) => {
  displayChar(name);
});

window.addEventListener('click', (event) => {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
});
