// СТРАНИЦА ВИДЕО
// ПОИСК
document
  .querySelector('.header__search-input')
  .addEventListener('input', function () {
    const loadIcon = document.querySelector('.header__search-load');
    const closeIcon = document.querySelector('.header__search-close');
    const resultList = document.querySelector('.header-search__result-list');

    if (this.value.length > 0) {
      // Показать блок загрузки
      loadIcon.style.display = 'block';
      closeIcon.style.display = 'none';
      resultList.style.display = 'none';

      // Через 2 секунды скрыть блок загрузки и показать блок с результатами и кнопку закрытия
      setTimeout(() => {
        loadIcon.style.display = 'none';
        closeIcon.style.display = 'block';
        resultList.style.display = 'block';
      }, 500);
    } else {
      // Если поле ввода пустое, скрыть все блоки
      loadIcon.style.display = 'none';
      closeIcon.style.display = 'none';
      resultList.style.display = 'none';
    }
  });

document
  .querySelector('.header__search-close')
  .addEventListener('click', function () {
    const input = document.querySelector('.header__search-input');
    const closeIcon = document.querySelector('.header__search-close');
    const resultList = document.querySelector('.header-search__result-list');

    // Очистка поля ввода
    input.value = '';

    // Скрыть блоки
    closeIcon.style.display = 'none';
    resultList.style.display = 'none';
  });
