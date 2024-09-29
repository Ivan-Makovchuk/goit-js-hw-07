// Отримуємо форму
const form = document.querySelector('.login-form');

// Додаємо слухач події submit
form.addEventListener('submit', function(event) {
  // Запобігаємо перезавантаженню сторінки
  event.preventDefault();
  
  // Отримуємо значення полів
  const email = form.elements.email.value.trim();
  const password = form.elements.password.value.trim();

  // Перевіряємо, чи всі поля заповнені
  if (email === '' || password === '') {
    alert('All form fields must be filled in');
    return; // Зупиняємо виконання, якщо є порожні поля
  }

  // Створюємо об'єкт з введеними даними
  const formData = {
    email: email,
    password: password,
  };

  // Виводимо об'єкт у консоль
  console.log(formData);

  // Очищаємо форму
  form.reset();
});
