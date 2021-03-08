const result = document.getElementById('result');
const filter = document.getElementById('filter');
const loading = document.getElementById('loading');
const listItems = [];

getData();

filter.addEventListener('input', e => filterData(e.target.value));
async function getData() {
  const res = await fetch('https://randomuser.me/api?results=50');

  const { results } = await res.json();
  // Clear results
  results.innerHTML = '';

  results.forEach(user => {
    const li = document.createElement('li');
    listItems.push(li);

    const { picture, name, location } = user;

    console.log(picture, name, location);

    li.innerHTML = `
      <img src="${picture.large}" alt="${name.first}">
      <div class="user-info"> 
        <h4>${name.first} ${name.last}</h4>
        <p>${location.city}, ${location.country}</p>
      </div>
    `;

    result.appendChild(li);
    loading.classList.add('hide');
  });
}

function filterData(searchTerm) {
  listItems.forEach(item => {
    if (item.innerText.toLowerCase().includes(searchTerm.toLowerCase())) {
      item.classList.remove('hide');
    } else {
      item.classList.add('hide');
    }
  });
}
