const screens = document.querySelectorAll('.screen');
const chooseInsectBtn = document.querySelectorAll('.choose-insect-btn');
const startBtn = document.getElementById('start-btn');
const gameContainer = document.getElementById('game-container');
const timeEl = document.getElementById('time');
const scoreEl = document.getElementById('score');
const messageEl = document.getElementById('message');
let seconds = 0;
let score = 0;
let selectedInsect = {};

startBtn.addEventListener('click', () => screens[0].classList.add('up'));

chooseInsectBtn.forEach(btn => {
  btn.addEventListener('click', () => {
    const img = btn.querySelector('img');
    const src = img.getAttribute('src');
    const alt = img.getAttribute('alt');
    selectedInsect = { src, alt };
    screens[1].classList.add('up');
    setTimeout(createInsect, 1000);
    startGame();
  });
});
