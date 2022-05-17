import { cardContainer, logoContainer, modal } from './DOM-elements.js';
import logo from '../assets/logo.jpg';

logoContainer.src = logo;

function displayCards(data) {
  const imgUrl = data.sprites.other['official-artwork'].front_default;
  const { name } = data;
  const card = document.createElement('div');
  card.dataset.name = name;
  card.classList.add('card');
  card.innerHTML = `<img id="card-img" src=${imgUrl} alt="">
          <div class="name-heart">
          <p>${name}</p>
          <i class="fa-regular fa-heart"></i>
          </div>
          <div class="likes">5 likes</div>
          <button type='button' class="comments">Comments</button>
          <button type='button' class="reservations">Reservations</button>`;
  cardContainer.appendChild(card);
}

export function displayChar(name) {
  const url = `https://pokeapi.co/api/v2/pokemon/${name}`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      displayCards(data);
    })
    .catch((err) => `Pokemon not found, ${err}`);
}

export const showComment = () => {
  const comment = `
  <div class="modal-content">
    <p>Some text in the Modal..</p>
  </div>
`;
  modal.innerHTML = comment;
};
