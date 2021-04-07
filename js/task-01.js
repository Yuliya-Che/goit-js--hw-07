const totalCategories = document.querySelectorAll(".item");
console.log(`В списке ${totalCategories.length} категории.`);

totalCategories.forEach((element) =>
  console.log(`Категория: ${element.querySelector("h2").textContent}
Количество элементов: ${element.querySelectorAll("li").length}`)
);