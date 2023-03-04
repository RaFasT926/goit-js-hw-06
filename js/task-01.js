const numberOfCategories = document.querySelectorAll("li.item");
console.log(`Number of categories: ${numberOfCategories.length}`);

numberOfCategories.forEach( category => {
    const name = category.querySelector("h2").textContent;
    const elements = category.querySelectorAll("li");
    console.log(`Category: ${name}`);
    console.log(`Elements: ${elements.length}`);
});








