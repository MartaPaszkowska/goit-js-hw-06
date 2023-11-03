const ingredients = [
	"Potatoes",
	"Mushrooms",
	"Garlic",
	"Tomatos",
	"Herbs",
	"Condiments",
];
const list = document.querySelector("ul#ingredients");

for (const ingredient of ingredients) {
	const ingredientsList = document.createElement("li");
	ingredientsList.textContent = ingredient;
	ingredientsList.classList.add("item");
	list.append(ingredientsList);
}
