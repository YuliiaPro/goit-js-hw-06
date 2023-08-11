const inputEl = document.querySelector("#validation-input");
const checkLength = (event) => {
    inputEl.classList = [];
        if (event.target.value.length === parseInt(inputEl.getAttribute('data-length'))) {
            inputEl.classList.add('valid');
        } else {
            inputEl.classList.add('invalid');
    };
    
};

inputEl.addEventListener("blur", checkLength);
