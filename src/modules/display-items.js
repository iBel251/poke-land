import { getLike } from './display-likes.js';
import { cardContainer } from './DOM-elements.js';

const displayItem = (element) => {
  cardContainer.innerHTML += `
    <article class='card'>
    <img id="card-img" src=${element.imgUrl} alt="">
    <div class="name-heart">
    <p>${element.name}</p>
    <i class="fa-regular fa-heart"></i>
    </div>
    <div class="likes" data-charlike="${element.name}"></div>
    <button type='button' class="comments" data-charname="${element.name}">Comments</button>
    <button type='button' class="reservations">Reservations</button>
    </article>
    `;
};

export default displayItem;
