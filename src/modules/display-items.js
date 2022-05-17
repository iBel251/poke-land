import { cardContainer, logoContainer, modal } from './DOM-elements.js';
import logo from '../assets/logo.jpg';
import showComment from './comments.js';

logoContainer.src = logo;

function displayCards(data) {
  const imgUrl = data.sprites.other['official-artwork'].front_default;
  const { name, weight, height } = data;
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
  card.children[3].addEventListener('click', () => {
    showComment(name, imgUrl, height, weight, data.types[0].type.name, data.moves[0].move.name);
    const span = document.createElement('span');
    span.innerHTML = '&times;';
    span.classList.add('close');
    span.addEventListener('click', () => {
      modal.style.display = 'none';
    });
    modal.children[0].append(span);
    modal.style.display = 'block';
  });
  cardContainer.appendChild(card);
}

export default function displayChar(name) {
  const url = `https://pokeapi.co/api/v2/pokemon/${name}`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      displayCards(data);
    })
    .catch((err) => `Pokemon not found, ${err}`);
}
