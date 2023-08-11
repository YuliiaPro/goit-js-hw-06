const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listIngredients = document.querySelector('#ingredients');

const makeListIngredients = ingredientItems => {
  return ingredientItems.map(ingredient => {
    const navItemEl = document.createElement('li');
    navItemEl.classList.add('item');
    navItemEl.textContent = ingredient;
    return navItemEl;
  });
};

const items = makeListIngredients(ingredients);
listIngredients.append(...items);