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

document.addEventListener('DOMContentLoaded', function () {
  const showMoreButton = document.querySelector('.songs-show-more__button');
  const showMoreText = document.querySelector('.songs-show-more__span');
  const songsList = document.querySelector('.songs__list');
  const songsShowMore = document.querySelector('.songs-show-more');

  const getMaxHeight = () => {
    return window.innerWidth <= 650 ? '600px' : '955px';
  };

  const toggleSongsList = () => {
    if (songsList.classList.contains('expanded')) {
      // Убираем активный класс
      songsList.classList.remove('expanded');
      songsShowMore.classList.remove('active');
      // Возвращаем максимальную высоту
      songsList.style.maxHeight = getMaxHeight();
      // Меняем текст на "Показать ещё"
      showMoreText.textContent = 'Показать ещё';
    } else {
      // Добавляем активный класс
      songsList.classList.add('expanded');
      songsShowMore.classList.add('active');
      // Устанавливаем высоту в зависимости от контента
      songsList.style.maxHeight = `${songsList.scrollHeight}px`;
      // Меняем текст на "Скрыть"
      showMoreText.textContent = 'Скрыть';
    }
  };

  showMoreButton.addEventListener('click', toggleSongsList);

  // Устанавливаем начальную максимальную высоту в зависимости от ширины экрана
  songsList.style.maxHeight = getMaxHeight();

  // Обновляем максимальную высоту при изменении размера экрана
  window.addEventListener('resize', function () {
    if (!songsList.classList.contains('expanded')) {
      songsList.style.maxHeight = getMaxHeight();
    }
  });
});

new Accordion('.accordion-container', {
  duration: 400,
  showMultiple: true,
});

document
  .querySelector('#mobile_menu_toggle')
  .addEventListener('click', function (e) {
    e.preventDefault();
    this.classList.toggle('active');
    document.querySelector('.mobile__menu').classList.toggle('active');
    document.querySelector('.js-login-bg').classList.toggle('active');

    document.querySelector('.top__hamburger').classList.toggle('active');
    document.body.classList.toggle('hidden');
  });
