document.addEventListener('DOMContentLoaded', function () {
  // Получаем все элементы с классом .js-forms-popup
  const popupBlocks = document.querySelectorAll('.js-forms-popup');

  // Получаем элемент с классом .js-header__button-block
  const openButton = document.querySelector('.js-header__button-block');

  // Получаем элемент с классом .js-login-bg
  const loginBg = document.querySelector('.js-login-bg');

  // Добавление активного класса ко всем .js-forms-popup и к .js-login-bg по клику на .js-header__button-block
  openButton.addEventListener('click', function (event) {
    event.preventDefault(); // Предотвращаем переход по ссылке
    popupBlocks.forEach(function (popup) {
      popup.classList.add('active');
    });
    loginBg.classList.add('active');
  });

  // Обработка кликов на кнопки закрытия .js-login-btn-close
  popupBlocks.forEach(function (popup) {
    const closeButton = popup.querySelector('.js-login-btn-close');
    closeButton.addEventListener('click', function () {
      popup.classList.remove('active');

      // Проверка, если все .js-forms-popup не имеют активного класса, удалить активный класс у .js-login-bg
      if (![...popupBlocks].some(popup => popup.classList.contains('active'))) {
        loginBg.classList.remove('active');
      }
    });
  });

  // Скрытие всех .js-forms-popup и .js-login-bg по клику на .js-login-bg
  loginBg.addEventListener('click', function () {
    popupBlocks.forEach(function (popup) {
      popup.classList.remove('active');
    });
    loginBg.classList.remove('active');
  });
});
