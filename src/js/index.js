document.addEventListener('DOMContentLoaded', function () {
  // Функция для проверки, находится ли элемент в области видимости
  function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return rect.top >= 0;
  }

  // Функция для добавления класса с анимацией
  function handleScroll() {
    const items = document.querySelectorAll('.new-hero-item.bear');
    items.forEach(item => {
      if (isInViewport(item)) {
        item.classList.add('animate');
      }
    });
  }

  // Обработчик события прокрутки
  window.addEventListener('scroll', handleScroll);

  // Проверяем при загрузке, чтобы анимация запускалась, если элемент уже в области видимости
  handleScroll();
});

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
        const targetPosition =
          targetElement.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = targetPosition - window.innerHeight / 3.5;

        window.scrollTo({
          top: offsetPosition,
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

const controls = `
    <button type="button" class="real-winners-play-btn plyr__control plyr__control--overlaid" data-plyr="play" aria-pressed="false" aria-label="Play"><svg aria-hidden="true" focusable="false"><use xlink:href="#plyr-play"></use></svg><span class="plyr__sr-only">Play</span></button>

<div class="plyr__controls">
    
        <div class="plyr__progress">
        <input data-plyr="seek" type="range" min="0" max="100" step="0.01" value="0" aria-label="Seek">
        <progress class="plyr__progress__buffer" min="0" max="100" value="0">% buffered</progress>
        <span role="tooltip" class="plyr__tooltip">00:00</span>
    </div>
    <div style="display: flex" class="player-flex-block">
    <button type="button" class="plyr__control account-btn-play-small" aria-label="Play, {title}" data-plyr="play">
        <svg class="icon--pressed" role="presentation" width="9" height="12" viewBox="0 0 9 12" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M1.57373 1L1.57373 11" stroke="#FF0199" stroke-width="1.6" stroke-linecap="round" />
  <path d="M7.57373 1L7.57373 11" stroke="#FF0199" stroke-width="1.6" stroke-linecap="round" />
</svg>
        <svg class="icon--not-pressed" role="presentation" width="20" height="23" viewBox="0 0 20 23" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M19.1798 10.0247C20.1197 10.5674 20.1197 11.9241 19.1798 12.4668L2.40958 22.1491C1.46962 22.6918 0.294679 22.0134 0.294679 20.9281L0.294679 1.56351C0.29468 0.478141 1.46962 -0.200213 2.40958 0.34247L19.1798 10.0247Z" fill="#FF0199" />
</svg>
        
    </button>
    
<div style="display: flex"><div class="plyr__time plyr__time--current" aria-label="Current time">00:00</div>
    <div class="plyr__time plyr__time--duration" aria-label="Duration">00:00</div></div>
   </div>
<div style="display: flex">

    <button type="button" id="volume-button" class="plyr__control" aria-label="Mute" data-plyr="mute">
        <svg class="icon--pressed" role="presentation"><use xlink:href="#plyr-muted"></use></svg>
        <svg class="icon--not-pressed" role="presentation"><use xlink:href="#plyr-volume"></use></svg>
      
    </button>
    <div class="plyr__volume js-plyr__volume">
        <input data-plyr="volume" type="range" min="0" max="1" step="0.05" value="1" autocomplete="off" aria-label="Volume">
    </div>
   
    <button type="button" class="plyr__control" data-plyr="fullscreen">
        <svg class="icon--pressed" role="presentation" width="30" height="31" viewBox="0 0 30 31" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M10.0059 6.49396V12.744H3.75586M20.0059 6.49396V12.744H26.2559M3.75586 17.744H10.0059V23.994M20.0059 23.994V17.744H26.2559" stroke="white" stroke-width="2.25" stroke-linecap="round" stroke-linejoin="round" />
</svg>
        <svg class="icon--not-pressed" role="presentation" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M2.66675 6.00002V3.73335C2.66675 3.35999 2.66675 3.1733 2.73941 3.0307C2.80333 2.90525 2.90531 2.80327 3.03075 2.73935C3.17336 2.66669 3.36005 2.66669 3.73341 2.66669L6.00008 2.66669M2.66675 10V12.2667C2.66675 12.6401 2.66675 12.8267 2.73941 12.9693C2.80333 13.0948 2.90531 13.1968 3.03075 13.2607C3.17336 13.3334 3.36005 13.3334 3.73341 13.3334L6.00008 13.3334M10.0001 2.66669H12.2667C12.6401 2.66669 12.8268 2.66669 12.9694 2.73935C13.0949 2.80326 13.1968 2.90525 13.2608 3.03069C13.3334 3.1733 13.3334 3.35999 13.3334 3.73335V6.00002M13.3334 10V12.2667C13.3334 12.6401 13.3334 12.8267 13.2608 12.9693C13.1968 13.0948 13.0949 13.1968 12.9694 13.2607C12.8268 13.3334 12.6401 13.3334 12.2667 13.3334H10.0001" stroke="white" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
</svg>
        <span class="label--pressed plyr__tooltip" role="tooltip">Свернуть</span>
        <span class="label--not-pressed plyr__tooltip" role="tooltip">На весь экран </span>
    </button>
    </div>
</div>
`;
// Setup the player
const players = Array.from(document.querySelectorAll('.js-wonners-player')).map(
  p => new Plyr(p, { controls: controls })
);
document.addEventListener('DOMContentLoaded', function () {
  // Функция для проверки и управления классом
  function checkPlyrStatus(item) {
    const plyrBlock = item.querySelector('.plyr');
    const authorBlock = item.querySelector('.videos-result__info');

    if (plyrBlock && authorBlock) {
      // Проверяем наличие класса plyr--stopped
      if (plyrBlock.classList.contains('plyr--stopped')) {
        authorBlock.classList.add('up');
      } else {
        authorBlock.classList.remove('up');
      }
    }
  }

  // Настройка MutationObserver для отслеживания изменений класса
  function observePlyr(item) {
    const plyrBlock = item.querySelector('.plyr');

    if (plyrBlock) {
      // Создаем наблюдатель
      const observer = new MutationObserver(function (mutationsList) {
        mutationsList.forEach(mutation => {
          if (
            mutation.type === 'attributes' &&
            mutation.attributeName === 'class'
          ) {
            // Проверяем состояние класса plyr--stopped
            checkPlyrStatus(item);
          }
        });
      });

      // Запускаем наблюдатель
      observer.observe(plyrBlock, { attributes: true });
    }
  }

  // Инициализация для всех элементов videos-result__item
  const videoItems = document.querySelectorAll('.videos-result__item');
  videoItems.forEach(item => {
    checkPlyrStatus(item); // Проверяем при загрузке
    observePlyr(item); // Начинаем отслеживать изменения
  });
});
