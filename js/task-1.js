// Отримуємо список категорій
const categoriesList = document.querySelectorAll('#categories .item');

// Виводимо кількість категорій
console.log(`Number of categories: ${categoriesList.length}`);

// Перебираємо кожен елемент і виводимо його заголовок та кількість елементів в категорії
categoriesList.forEach(category => {
  const categoryTitle = category.querySelector('h2').textContent;
  const itemsCount = category.querySelectorAll('ul li').length;
  
  console.log(`Category: ${categoryTitle}`);
  console.log(`Elements: ${itemsCount}`);
});
