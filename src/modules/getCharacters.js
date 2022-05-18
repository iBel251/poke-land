import addCommentListener from './commentsListener.js';
import displayItem from './display-items.js';
import { getLikes } from './display-likes.js';

const pokemons = ['pikachu', 'bulbasaur', 'venusaur', 'pidgeot', 'butterfree', 'spearow'];

const getCharacters = async () => {
  pokemons.forEach(async (element, index) => {
    const p1 = await fetch(`https://pokeapi.co/api/v2/pokemon/${element}`);
    const p2 = await p1.json();
    const imgUrl = p2.sprites.other['official-artwork'].front_default;
    const type = p2.types[0].type.name;
    const move = p2.moves[0].move.name;
    const { name, weight, height } = p2;

    displayItem({
      name,
      imgUrl,
      weight,
      height,
      type,
      move,
    });
    if (index === 5) {
      await getLikes();
      addCommentListener();
    }
  });
};

export default getCharacters;
