import {
  commentitemheight,
  commentitemimg,
  commentitemmove,
  commentitemname,
  commentitemtype,
  commentitemweight,
  commentsul,
} from './DOM-elements.js';

const showComment = async (charname) => {
  const pokey = await fetch(`https://pokeapi.co/api/v2/pokemon/${charname}`);
  const data = await pokey.json();
  const comments = await fetch(
    `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/ZoxDLHcPIRPn5ap2fi3h/comments/?item_id=${charname}`
  );

  const comments2 = await comments.json();
  const comments3 = await comments2;

  commentsul.innerHTML = '';
  comments3.forEach((element) => {
    commentsul.innerHTML += `<li>${element.creation_date} ${element.username}: ${element.comment}</li>`;
  });

  const imgUrl = data.sprites.other['official-artwork'].front_default;
  const type = data.types[0].type.name;
  const move = data.moves[0].move.name;
  const { name, weight, height } = data;

  commentitemimg.src = imgUrl;
  commentitemimg.alt = name;
  commentitemname.textContent = name;
  commentitemheight.textContent = `Height: ${height}`;
  commentitemmove.textContent = `Move: ${move}`;
  commentitemweight.textContent = `Weight: ${weight}`;
  commentitemtype.textContent = `Type: ${type}`;
};

export default showComment;
