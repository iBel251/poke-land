const apiUrl = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/ZoxDLHcPIRPn5ap2fi3h/likes`;
const gameId = "ZoxDLHcPIRPn5ap2fi3h";

export async function getLike() {
    const replay = await fetch(apiUrl);
    const data = await replay.json()
    //   .then((response) => response.json())
    //   .then((data) => {
    //     displayLike(data);
    //   })
    //   .catch((err) => `Pokemon not found, ${err}`);
    return data;
  }

  export async function createLike(name) {
    await fetch(apiUrl, {
      method: 'POST',
      body: JSON.stringify({ "item_id": name }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
