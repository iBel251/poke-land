import { showComment } from './comments.js';
import { modal } from './DOM-elements.js';

const addCommentListener = () => {
  const likeBtn = document.querySelectorAll('.comments');
  likeBtn.forEach((btn) => {
    btn.addEventListener('click', async (e) => {
      showComment(e.target.dataset.charname);
      modal.style.display = 'block';
    });
  });
};

export default addCommentListener;
