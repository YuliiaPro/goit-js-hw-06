const refs = {
    input: document.querySelector('#name-input'),
    nameLabel: document.querySelector('#name-output'),
};
const onInputChange = (event) => {
     console.log(event.currentTarget.value);
     refs.nameLabel.textContent = event.currentTarget.value  || 'Anonymous';
 };
 refs.input.addEventListener('input', onInputChange);
 
