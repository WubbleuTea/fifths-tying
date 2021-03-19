const imageContainer = document.getElementById('image-container');
const unsplashURl = 'https://source.unsplash.com/random/';
const rows = 10;
const columns = 3;

for (let i = 0; i < rows * columns; i++) {
  const img = document.createElement('img');
  img.src = `${unsplashURl}${getRandomSize()}`;

  imageContainer.appendChild(img);
}

function getRandomSize() {
  return `${getRandomNum()}X${getRandomNum()}`;
}

function getRandomNum() {
  return Math.floor(Math.random() * 10) + 300;
}
