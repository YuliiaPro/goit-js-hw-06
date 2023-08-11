let counterValue = 0;

const buttonDecrement = document.querySelector('[data-action="decrement"]');
const buttonIncrement = document.querySelector('[data-action="increment"]');

const decrement = () =>{
    counterValue -= 1;
    value.textContent = counterValue;
};

const increment = () =>{
    counterValue += 1;
   value.textContent = counterValue;
};

buttonDecrement.addEventListener("click", decrement);
buttonIncrement.addEventListener("click", increment);


