const tagsEl = document.getElementById('tags');
const textarea = document.getElementById('textarea');

textarea.focus();

textarea.addEventListener('keyup', e => {
  createTags(e.target.value);
});

function createTags(input) {
  const tags = input
    .split(',')
    // filters out empty strings from the array
    .filter(tag => tag.trim() !== '')
    // removes spaces from around the typed area
    .map(tag => tag.trim());

  tagsEl.innerHTML = '';

  tags.forEach(tag => {
    const tagEl = document.createElement('span');
    tagEl.classList.add('tag');
    tagEl.innerText = tag;
    tagsEl.appendChild(tagEl);
  });
}
