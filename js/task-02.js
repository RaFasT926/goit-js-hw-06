const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


ingredients.forEach(ingredient => {

const li = document.createElement("li");
const liText = document.createTextNode(ingredient);
li.appendChild(liText);
document.getElementById("ingredients").appendChild(li);
li.className = "item";

});