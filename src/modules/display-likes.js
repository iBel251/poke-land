import { likeDisplay } from './DOM-elements';

const apiUrl =
  'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/ZoxDLHcPIRPn5ap2fi3h/likes';

const getLikes = async () => {
  const response = await fetch(apiUrl);
  const data = await response.json();
  likeDisplay.forEach((element) => {
    console.log(element);
  });
};

const getLike = (name) => {
  const arr = getLikes().then((res) => {
    arr.filter((element) => element.item_id === name);
  });
  return arr;
};

const createLike = async (character) => {
  const response = await fetch(apiUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      item_id: character,
    }),
  });
  return response;
};

export { getLikes, createLike, getLike };
