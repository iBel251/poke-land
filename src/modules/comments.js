import countComments from './comment-count.js';
import {
  commentitemheight,
  commentitemimg,
  commentitemmove,
  commentitemname,
  commentitemtype,
  commentitemweight,
  commentscount,
  commentsul,
  insights,
  yourname,
} from './DOM-elements.js';

const showComment = async (charname) => {
  const pokey = await fetch(`https://pokeapi.co/api/v2/pokemon/${charname}`);
  const data = await pokey.json();
  const comments = await fetch(
    `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/ZoxDLHcPIRPn5ap2fi3h/comments/?item_id=${charname}`,
  );

  const comments2 = await comments.json();

  commentsul.innerHTML = '';
  comments2.forEach((element) => {
    commentsul.innerHTML += `<li>${element.creation_date} ${element.username}: ${element.comment}</li>`;
  });

  const imgUrl = data.sprites.other['official-artwork'].front_default;
  const type = data.types[0].type.name;
  const move = data.moves[0].move.name;
  const { name, weight, height } = data;
  commentscount.textContent = `(${countComments(comments2)})`;
  commentitemimg.src = imgUrl;
  commentitemimg.alt = name;
  commentitemname.textContent = name;
  commentitemname.dataset.id = name;
  commentitemheight.textContent = `Height: ${height}`;
  commentitemmove.textContent = `Move: ${move}`;
  commentitemweight.textContent = `Weight: ${weight}`;
  commentitemtype.textContent = `Type: ${type}`;
  yourname.value = '';
  insights.value = '';
};

const postComment = async (commentData) => {
  const response = await fetch(
    'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/ZoxDLHcPIRPn5ap2fi3h/comments/',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(commentData),
    },
  );
  return response;
};
export { showComment, postComment };
