document.addEventListener('DOMContentLoaded', function () {
  const selectButton = document.querySelector('.select-button');
  const selectDropdown = document.querySelector('.select-dropdown');
  const selectedValue = document.querySelector('.selected-value');

  // Toggle dropdown visibility and button active class
  selectButton.addEventListener('click', function (event) {
    event.preventDefault(); // Отменяет стандартное действие кнопки
    const isExpanded = selectButton.getAttribute('aria-expanded') === 'true';
    selectButton.setAttribute('aria-expanded', !isExpanded);
    selectDropdown.classList.toggle('active');
    selectButton.classList.toggle('active'); // Добавляем или удаляем активный класс
  });

  // Handle option selection
  selectDropdown.addEventListener('click', function (event) {
    event.preventDefault(); // Отменяет стандартное действие клика по элементам списка
    const option = event.target.closest('li');
    if (option) {
      const content = option
        .querySelector('.account__select-content')
        .cloneNode(true);
      selectedValue.innerHTML = '';
      selectedValue.appendChild(content);

      // Close the dropdown and remove active class from the button
      selectDropdown.classList.remove('active');
      selectButton.setAttribute('aria-expanded', 'false');
      selectButton.classList.remove('active'); // Удаляем активный класс после выбора опции
    }
  });

  // Close dropdown and remove active class when clicking outside
  document.addEventListener('click', function (event) {
    if (
      !selectButton.contains(event.target) &&
      !selectDropdown.contains(event.target)
    ) {
      selectDropdown.classList.remove('active');
      selectButton.setAttribute('aria-expanded', 'false');
      selectButton.classList.remove('active'); // Удаляем активный класс при клике вне
    }
  });
});

document.addEventListener('DOMContentLoaded', function () {
  // Получаем все input элементы внутри .account__form-labels
  const inputs = document.querySelectorAll('.account__form-labels input');

  // Функция для проверки и применения стилей
  function updateInputStyles() {
    inputs.forEach(input => {
      if (input.value.trim() !== '') {
        input.classList.add('active'); // Добавляем класс если input не пустой
      } else {
        input.classList.remove('active'); // Удаляем класс если input пустой
      }
    });
  }

  // Применяем стили при загрузке страницы
  updateInputStyles();

  // Применяем стили при изменении значений в input
  inputs.forEach(input => {
    input.addEventListener('input', updateInputStyles);
  });
});

// МАСКА ДЛЯ ИНПУТА
document.addEventListener('DOMContentLoaded', function () {
  const phoneInput = document.querySelector('.js-account__form-input');

  // Функция для форматирования и установки маски
  function formatPhoneInput(value) {
    let input = value.replace(/\D/g, ''); // Удаляем все нецифровые символы
    let formattedInput = '+7 (';

    if (input.length > 1) {
      formattedInput += input.substring(1, 4);
    }
    if (input.length >= 5) {
      formattedInput += ') ' + input.substring(4, 7);
    }
    if (input.length >= 8) {
      formattedInput += '-' + input.substring(7, 9);
    }
    if (input.length >= 10) {
      formattedInput += '-' + input.substring(9, 11);
    }

    return formattedInput;
  }

  // Применение маски при фокусировке на input
  phoneInput.addEventListener('focus', function () {
    if (phoneInput.value.trim() === '') {
      phoneInput.value = '+7 (';
      phoneInput.classList.add('active');
    }
  });

  // Применение маски при вводе
  phoneInput.addEventListener('input', function () {
    phoneInput.value = formatPhoneInput(phoneInput.value);
  });

  // Убираем нежелательные символы
  phoneInput.addEventListener('keydown', function (event) {
    const key = event.key;
    if (
      !/[0-9]/.test(key) &&
      key !== 'Backspace' &&
      key !== 'ArrowLeft' &&
      key !== 'ArrowRight'
    ) {
      event.preventDefault();
    }
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const copyButton = document.getElementById('application-approved-button');
  const tooltip = document.getElementById('application-approved-myTooltip');
  const copyText = document.getElementById('application-approved-myInput');

  // Обработчик клика на кнопку
  copyButton.addEventListener('click', function () {
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(copyText.value);

    tooltip.innerHTML = 'Скопировано: ' + copyText.value;
  });

  // Обработчик события mouseout для кнопки
  copyButton.addEventListener('mouseout', function () {
    tooltip.innerHTML = 'Копировать ссылку';
  });
});

const controls = `
    <button type="button" class="plyr__control plyr__control--overlaid" data-plyr="play" aria-pressed="false" aria-label="Play"><svg aria-hidden="true" focusable="false"><use xlink:href="#plyr-play"></use></svg><span class="plyr__sr-only">Play</span></button>

<div class="plyr__controls">
    
        <div class="plyr__progress">
        <input data-plyr="seek" type="range" min="0" max="100" step="0.01" value="0" aria-label="Seek">
        <progress class="plyr__progress__buffer" min="0" max="100" value="0">% buffered</progress>
        <span role="tooltip" class="plyr__tooltip">00:00</span>
    </div>
    <div style="display: flex" class="player-flex-block">
    <button type="button" class="plyr__control" aria-label="Play, {title}" data-plyr="play">
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
const player = new Plyr('#player', { controls });

document.addEventListener('DOMContentLoaded', function () {
  const volumeButton = document.getElementById('volume-button');
  const volumeSlider = document.querySelector('.plyr__volume');

  // Показ ползунка при наведении на кнопку
  volumeButton.addEventListener('mouseover', function () {
    volumeSlider.style.display = 'flex';
  });

  // Скрытие ползунка при выходе курсора с кнопки
  volumeButton.addEventListener('mouseout', function () {
    // Проверка, находится ли курсор внутри ползунка
    const hideSlider = event => {
      if (!volumeSlider.contains(event.relatedTarget)) {
        volumeSlider.style.display = 'none';
      }
    };

    volumeSlider.addEventListener('mouseout', hideSlider, { once: true });
  });

  // Скрытие ползунка при выходе курсора с ползунка
  volumeSlider.addEventListener('mouseout', function (event) {
    if (!volumeButton.contains(event.relatedTarget)) {
      volumeSlider.style.display = 'none';
    }
  });
});
