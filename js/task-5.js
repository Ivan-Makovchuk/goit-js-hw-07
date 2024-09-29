function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
// Отримуємо необхідні елементи
const changeColorButton = document.querySelector('.change-color');
const colorSpan = document.querySelector('.color');
const body = document.body;

// Додаємо слухач події на кнопку
changeColorButton.addEventListener('click', function() {
  // Генеруємо випадковий колір
  const randomColor = getRandomHexColor();

  // Змінюємо колір фону body через інлайн-стиль
  body.style.backgroundColor = randomColor;

  // Вставляємо значення кольору у span.color
  colorSpan.textContent = randomColor;
});