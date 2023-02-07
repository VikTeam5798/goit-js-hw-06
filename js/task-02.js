const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ingredientsListEl = document.querySelector('#ingredients');
ingredients.forEach(Element => {
  const newListEl = document.createElement("li")
  newListEl.textContent = Element;
  newListEl.classList.add('item')
  ingredientsListEl.append(newListEl)
})