// Отримуємо елементи
const nameInput = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');

// Функція для оновлення імені
const updateNameOutput = () => {
  // Очищаємо пробіли на початку і в кінці
  const trimmedValue = nameInput.value.trim();
  
  // Перевіряємо, чи порожнє поле
  if (trimmedValue === '') {
    nameOutput.textContent = 'Anonymous';
  } else {
    nameOutput.textContent = trimmedValue;
  }
};

// Додаємо слухач події для input
nameInput.addEventListener('input', updateNameOutput);