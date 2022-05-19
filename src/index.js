import './index.css';
import getCharacters from './modules/getCharacters.js';
import { logoContainer, modal, span } from './modules/DOM-elements.js';
import logo from './assets/logo.jpg';

logoContainer.src = logo;

getCharacters();

window.addEventListener('click', (event) => {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
});

span.addEventListener('click', () => {
  modal.style.display = 'none';
});
