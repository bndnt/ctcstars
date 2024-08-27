const inputs = document.querySelectorAll('.js-code__list input');

inputs.forEach((input, index) => {
  input.addEventListener('input', function () {
    // Оставляем только цифры
    this.value = this.value.replace(/[^0-9]/g, '');

    // Переход на следующий input
    if (this.value.length === 1 && index < inputs.length - 1) {
      inputs[index + 1].focus();
    }
  });

  input.addEventListener('keydown', function (e) {
    // Переход на предыдущий input при нажатии Backspace
    if (e.key === 'Backspace') {
      if (this.value === '' && index > 0) {
        inputs[index - 1].focus();
      } else {
        this.value = ''; // Очищаем поле
      }
    }
  });
});

// login-page
const checkbox = document.querySelector('.js-login__check-input');
const button = document.querySelector('.js-login__button');

checkbox.addEventListener('change', function () {
  if (this.checked) {
    button.disabled = false;
    button.classList.add('active');
  } else {
    button.disabled = true;
    button.classList.remove('active');
  }
});
// code page
const codeList = document.querySelector('.js-code__list');
const button2 = document.querySelector('.js-code-login__button');

function updateButtonState() {
  if (codeList.classList.contains('accept')) {
    button2.disabled = false;
    button2.classList.add('active');
  } else if (codeList.classList.contains('error')) {
    button2.disabled = true;
    button2.classList.remove('active');
  }
}

// Наблюдение за изменением классов
const observer = new MutationObserver(updateButtonState);

// Настройки для наблюдения: следим за изменением атрибутов
observer.observe(codeList, { attributes: true });

// Первоначальная проверка
updateButtonState();
