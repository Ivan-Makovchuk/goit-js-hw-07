function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
// Отримуємо необхідні елементи
const input = document.querySelector('#controls input');
const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');
const boxesContainer = document.querySelector('#boxes');

// Функція для створення колекції елементів
function createBoxes(amount) {
  // Очищуємо попередні елементи перед додаванням нових
  boxesContainer.innerHTML = '';

  const boxElements = [];
  let size = 30; // Початковий розмір першого елементу

  for (let i = 0; i < amount; i++) {
    const box = document.createElement('div');
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();
    box.style.marginBottom = '5px'; // Щоб було видно окремі квадрати
    boxElements.push(box);
    size += 10; // Збільшуємо розмір наступного елементу
  }

  // Додаємо всі елементи за одну операцію в DOM
  boxesContainer.append(...boxElements);
}

// Функція для очищення контейнера з елементами
function destroyBoxes() {
  boxesContainer.innerHTML = '';
}

// Додаємо слухач події на кнопку Create
createBtn.addEventListener('click', () => {
  const amount = Number(input.value);

  // Перевірка діапазону введеного числа
  if (amount >= 1 && amount <= 100) {
    createBoxes(amount);
    input.value = ''; // Очищаємо поле інпуту
  } else {
    alert('Please enter a number between 1 and 100');
  }
});

// Додаємо слухач події на кнопку Destroy
destroyBtn.addEventListener('click', destroyBoxes);