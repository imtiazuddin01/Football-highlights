let root = document.getElementById("root");

async function f() {
  try {
    let response = await fetch("https://www.scorebat.com/video-api/v3/");
    let posts = await response.json();
    root.innerHTML = posts.response.map((post) => {
      return `
      <img src=${post.thumbnail} class="card-img-top" alt="thumbnail" />
      <div class="card-body">
        <h3 class="card-title">${post.title}</h3>
        <p class="card-text">${post.date}</p>
        <a href=${post.matchviewUrl} class="btn btn-primary" target="_blank">Watch</a>
      </div>
    `;
    });
  } catch (err) {
    // catches errors both in fetch and response.json
    alert(err);
  }
}

f();

