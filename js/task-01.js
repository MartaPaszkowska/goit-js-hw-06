//Numer of categories:
const allCategories = document.querySelector("ul#categories");
const categories = allCategories.querySelectorAll("li.item");
console.log(`Number of categories: ${categories.length}`);
//Categories
for (const category of categories) {
	console.log(`Category: ${category.firstElementChild.textContent}`);

	const eachCategory = category.querySelectorAll("ul");
	for (const item of eachCategory) {
		console.log(`Elements: ${item.children.length}`);
	}
}
