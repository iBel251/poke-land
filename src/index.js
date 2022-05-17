import './index.css';
import displayChar from './modules/display-items.js';

const pokemons = ['pikachu', 'bulbasaur', 'venusaur', 'pidgeot', 'butterfree', 'spearow'];
pokemons.forEach((name) => {
  displayChar(name);
});