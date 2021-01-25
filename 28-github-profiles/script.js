const APIURL = 'https://api.github.com/users/';

const form = document.getElementById('form');
const search = document.getElementById('search');
const main = document.getElementById('main');

async function getUser(username) {
  try {
    const { data } = await axios(APIURL + username);
    createUserCard(data);
  } catch (err) {
    if (err.response.status == 404) {
      createErrorCard('No Profile With This Username');
    }
  }
}

function createUserCard(user) {
  const { avatar_url, name, bio, followers, following, public_repos } = user;
  const cardHTML = `
    <div class="card">
      <div>
        <img
          src="${avatar_url}"
          alt="${name}"
          class="avatar"
        />
      </div>
      <div class="user-info">
        <h2>${name}</h2>
        <p>${bio}</p>

        <ul>
          <li>${followers} <strong>Followers</strong></li>
          <li>${following} <strong>Following</strong></li>
          <li>${public_repos} <strong>Repos</strong></li>
        </ul>

        <div id="repos"></div>
      </div>
    </div>
  `;

  main.innerHTML = cardHTML;
}

function createErrorCard(msg) {
  const cardHTML = `
    <div class="card">
      <h1>${msg}</h1>
    </div>
  `;

  main.innerHTML = cardHTML;
}

form.addEventListener('submit', e => {
  e.preventDefault();
  const user = search.value;

  if (user) {
    getUser(user);
    search.value = '';
  }
});

{
  /* <a href="#" class="repo">Repo 1</a> */
}
