import './index.css';
import getCharacters, { counter } from './modules/getCharacters.js';
import { logoContainer, modal, span } from './modules/DOM-elements.js';
import logo from './assets/logo.jpg';
import { addLike, updateLikes } from './modules/add-likes.js';

logoContainer.src = logo;

getCharacters();
counter();

window.addEventListener('click', (event) => {
  if (event.target === modal) {
    modal.style.display = 'none';
  }

  if (event.target.classList.contains('fa-heart')) {
    const itemName = event.target.className.split(' ')[0];
    addLike(itemName);
    updateLikes(itemName);
  }
});

span.addEventListener('click', () => {
  modal.style.display = 'none';
});
