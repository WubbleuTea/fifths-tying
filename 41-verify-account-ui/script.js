const codes = document.querySelectorAll('.code');

codes[0].focus();

codes.forEach((code, idx) => {
  code.addEventListener('keydown', e => {
    if (e.key >= 0 && e.key <= 9) {
      //clears the number that is already in the box
      codes[idx].value = '';
      //added the setTimeout to make sure the number that was put in goes into the box that is in focus
      setTimeout(() => codes[idx + 1].focus(), 10);
    } else if (e.key === 'Backspace') {
      setTimeout(() => codes[idx - 1].focus(), 10);
    }
  });
});
