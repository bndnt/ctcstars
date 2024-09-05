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
  // Получаем все элементы с классом .js-forms-popup
  const popupBlocks = document.querySelectorAll('.js-forms-popup');

  // Получаем элемент с классом .js-header__button-block
  const openButton = document.querySelector('.js-header__button-block-mob');

  // Получаем элемент с классом .js-login-bg
  const loginBg = document.querySelector('.js-login-bg');

  // Добавление активного класса ко всем .js-forms-popup и к .js-login-bg по клику на .js-header__button-block
  openButton.addEventListener('click', function (event) {
    event.preventDefault(); // Предотвращаем переход по ссылке
    popupBlocks.forEach(function (popup) {
      popup.classList.add('active');
    });
    document.querySelector('#mobile_menu_toggle').classList.toggle('active');
    document.querySelector('.mobile__menu').classList.toggle('active');

    document.querySelector('.top__hamburger').classList.toggle('active');
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
document.addEventListener('DOMContentLoaded', function () {
  const anchorLinks = document.querySelectorAll('a[href^="#"]');

  anchorLinks.forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();

      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop,
          behavior: 'smooth',
        });
      }
    });
  });
});
document.addEventListener('DOMContentLoaded', function () {
  const phoneInput = document.querySelector('.js-phone-input');

  phoneInput.addEventListener('focus', function () {
    // Если поле пустое, при фокусе сразу вставляем маску
    if (phoneInput.value === '') {
      phoneInput.value = '+7 (___) ___-__-__';
      phoneInput.setSelectionRange(4, 4); // Ставим курсор после "+7 ("
    }
  });

  phoneInput.addEventListener('input', function (e) {
    let input = phoneInput.value.replace(/\D/g, ''); // Убираем все нецифровые символы
    if (input.length === 0) {
      phoneInput.value = '+7 (___) ___-__-__';
      phoneInput.setSelectionRange(4, 4); // Возвращаем курсор на начало ввода после "+7 ("
    } else {
      // Ограничиваем ввод 10 цифрами (после 7)
      input = input.substring(1, 11); // Убираем первый символ (7), чтобы не продублировать его

      let formattedInput = '+7 (';
      if (input.length > 0) {
        formattedInput += input.substring(0, 3); // Первые 3 цифры
      }
      if (input.length >= 4) {
        formattedInput += ') ' + input.substring(3, 6); // Следующие 3 цифры
      }
      if (input.length >= 7) {
        formattedInput += '-' + input.substring(6, 8); // Следующие 2 цифры
      }
      if (input.length >= 9) {
        formattedInput += '-' + input.substring(8, 10); // Последние 2 цифры
      }

      // Дополняем недостающие части маски подчеркиванием
      if (input.length < 10) {
        formattedInput += '_'.repeat(10 - input.length);
      }

      phoneInput.value = formattedInput;

      // Если пользователь пытается удалить маску
      if (phoneInput.value.length < 4) {
        phoneInput.value = '+7 (';
      }
    }
  });

  phoneInput.addEventListener('blur', function () {
    // Очищаем поле, если ничего не введено
    if (phoneInput.value === '+7 (___) ___-__-__') {
      phoneInput.value = '';
    }
  });

  // Ограничиваем доступные для ввода символы только цифрами
  phoneInput.addEventListener('keydown', function (e) {
    if (
      !/[0-9]/.test(e.key) &&
      e.key !== 'Backspace' &&
      e.key !== 'ArrowLeft' &&
      e.key !== 'ArrowRight'
    ) {
      e.preventDefault();
    }
  });
});
