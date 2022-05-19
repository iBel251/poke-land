import { getLike, getLikes } from './display-likes.js';
import { cardContainer } from './DOM-elements.js';

const displayItem = async (element) => {
  const likes = await getLikes();
  cardContainer.innerHTML += `
    <article class='card'>
    <img id="card-img" src=${element.imgUrl} alt="">
    <div class="name-heart">
    <p>${element.name}</p>
    <i class="fa-regular fa-heart"></i>
    </div>
    <div class="likes" data-charlike="${element.name}">${getLike(element.name, likes)}</div>
    <button type='button' class="comments" data-charname="${element.name}">Comments</button>
    <button type='button' class="reservations">Reservations</button>
    </article>
    `;
};

export default displayItem;
