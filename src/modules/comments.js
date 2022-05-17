import { modal } from './DOM-elements.js';

const showComment = (name, imgsrc, height, weight, type, move) => {
  const comment = `
    <div class="modal-content">
    <article class="commentitem">
    <img src="${imgsrc}" alt="${name} class="commentitem-img">
    <h2 class="commentitem-name">${name}</h2>
    <ul class="commentitem-detail padding10">
        <li>Height: ${height}</li>
        <li>Weight: ${weight}</li>
        <li>Type: ${type}</li>
        <li>Move: ${move}</li>
    </ul>
</article>
    </div>
  `;
  modal.innerHTML = comment;
};

export default showComment;
