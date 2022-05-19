import './index.css';
import getCharacters from './modules/getCharacters.js';
import {
  logoContainer,
  modal,
  span,
  commentform,
  yourname,
  insights,
} from './modules/DOM-elements.js';
import logo from './assets/logo.jpg';
import { addLike, updateLikes } from './modules/add-likes.js';
import { postComment, showComment } from './modules/comments.js';

logoContainer.src = logo;

getCharacters();

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

commentform.addEventListener('submit', async (e) => {
  e.preventDefault();

  const itemid = e.target.parentNode.children[1].dataset.id;
  const username = yourname.value;
  const comment = insights.value;
  await postComment({ item_id: itemid, username, comment });

  await showComment(itemid);
});
