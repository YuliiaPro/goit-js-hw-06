function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const refs = {
body: document.querySelector('body'),
buttonChangeColor: document.querySelector('.change-color'),
spanForColor: document.querySelector('.color'),
};

const changeColor = () => {
refs.body.style.backgroundColor = getRandomHexColor();
refs.spanForColor.textContent = getRandomHexColor();
}
refs.buttonChangeColor.addEventListener('click', changeColor);
