function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const refs = {
  buttonDataCreate: document.querySelector('[data-create]'),
  buttonDataDestroy: document.querySelector('[data-destroy]'),
  input: document.querySelector('input'),
  divBox: document.querySelector('#boxes'),
}
 const createBoxes = () => {
  const divBoxesArray = [];
  for (let i=1; i <= refs.input.value; i +=1){
  const div = document.createElement('div');
  div.style.width = 30+(i*10)+`px`;
  div.style.height = 30+(i*10)+`px`;
  div.style.background = getRandomHexColor();
  divBoxesArray.push(div);
  };
  refs.divBox.append(...divBoxesArray);
};
const destroyBoxes = () => {
  refs.divBox.innerHTML = '';
  refs.input.value = 0;
};
refs.buttonDataCreate.addEventListener("click", createBoxes);
refs.buttonDataDestroy.addEventListener("click", destroyBoxes);

