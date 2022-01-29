let root = document.getElementById("root");

async function f() {
  try {
    let response = await fetch("https://www.scorebat.com/video-api/v3/");
    let posts = await response.json();
    root.innerHTML = posts.response.map((post) => {
      return `
      <div class='card'>
      <img src=${post.thumbnail} class="card-img-top" alt="thumbnail" />
      <div class="card-body">
        <h3 class="card-title">${post.title}</h3>
        <p class="card-text">${post.date}</p>
        <a href=${post.matchviewUrl} class="btn btn-primary" target="_blank">Watch</a>
      </div>
      </div>
    `;
    });
  } catch (err) {
    // catches errors both in fetch and response.json
    alert(err);
  }
}

f();

/*fetch("https://free-football-soccer-videos.p.rapidapi.com/", {
  method: "GET",
  headers: {
    "x-rapidapi-host": "free-football-soccer-videos.p.rapidapi.com",
    "x-rapidapi-key": "77fde22e03msh6355d78a900986fp1c4c81jsn4d795d653f3f",
  },
})
  .then((response) => {
    const posts = response.json();
    console.log(posts);
  })
  .then((posts) => {
    console.log(posts[0]);
  })

  .catch((err) => {
    console.error(err);
  });*/
