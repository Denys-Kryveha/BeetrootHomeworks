const textBlock = document.getElementById('text_block');
const textareaBlock = document.getElementById('textarea_block');

let keys = {
  ctrl: false,
  e: false,
  s: false,
};

document.addEventListener('keydown', (event) => {

  if (event.key === 'Control') {
    keys.ctrl = true;
  }
  if (event.key === 'e' || event.key === 'у') {
    keys.e = true;
  }
  if (event.key === 's' || event.key === 'ы'  || event.key === 'і') {
    keys.s = true;
  }

  if (keys.ctrl && keys.e) {
    event.preventDefault();
    textareaBlock.style.display = 'block';
    textareaBlock.innerHTML = textBlock.innerText;
    textareaBlock.focus();
    textareaBlock.selectionStart =  textareaBlock.value.length;
    textBlock.style.display = 'none';

  }
  if (keys.ctrl && keys.s) {
    event.preventDefault();
    textareaBlock.style.display = 'none';
    textBlock.style.display = 'block';
    textBlock.innerHTML = textareaBlock.value;
    textBlock.style.whiteSpace = 'pre';  
  }
});

document.addEventListener('keyup', (event) => {
  
  if (event.key === 'Control') {
    keys.ctrl = false;
  }
  if (event.key === 'e' || event.key === 'у') {
    keys.e = false;
  }
  if (event.key === 's' || event.key === 'ы'  || event.key === 'і') {
    keys.s = false;
  }
});