const buttons = document.querySelectorAll('.ripple');

buttons.forEach(button => {
  button.addEventListener('click', function (e) {
    // gets the position of the click on the button
    const x = e.clientX;
    const y = e.clientY;

    // gets the top and left position of the button
    const buttonTop = e.target.offsetTop;
    const buttonLeft = e.target.offsetLeft;

    // calc the position of the clicked value in relation to the button
    // top left corner is 0,0
    // as you move to the right the number grows
    // as you move down the number grows
    const xInside = x - buttonLeft;
    const yInside = y - buttonTop;

    const circle = document.createElement('span');

    circle.classList.add('circle');
    circle.style.top = yInside + 'px';
    circle.style.left = xInside + 'px';

    // this refers to the button
    this.appendChild(circle);

    // to remove the span after the effect happens so it does not continuously add to the DOM
    setTimeout(() => circle.remove(), 500);
  });
});
