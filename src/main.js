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

// VIDEO PAGE SCROLL
document.addEventListener('DOMContentLoaded', function () {
  const videos = document.querySelectorAll('.video-main__video');
  function pauseAllVideos() {
    videos.forEach(video => {
      video.pause();
    });
  }
  function playVisibleVideo() {
    videos.forEach(video => {
      const rect = video.getBoundingClientRect();
      const inView = rect.top >= 0 && rect.bottom <= window.innerHeight;
      if (inView) {
        video.play();
      } else {
        video.pause();
      }
    });
  }
  // Initial check to pause all videos except the one in view
  playVisibleVideo();
  // Add event listener for scrolling
  window.addEventListener('scroll', playVisibleVideo);
});

document.addEventListener('DOMContentLoaded', () => {
  const posts = document.querySelectorAll('.video-main__item');

  posts.forEach(post => {
    const likeButton = post.querySelector('.video__btn');
    const likeText = post.querySelector('.video__btn-span-text');
    const likesContainer = post.querySelector('.video__likes');
    const heartsContainer = post.querySelector('.video__hearts');

    likeButton.addEventListener('click', () => {
      const hearts = post.querySelectorAll('.video-heart');

      if (post.classList.contains('liked')) {
        // Remove like
        post.classList.remove('liked');
        likesContainer.classList.remove('active');
        likeText.textContent = 'Голосовать';

        // Remove hearts animation by clearing inline styles
        hearts.forEach(heart => {
          heart.style.animation = 'none';
        });

        // Hide the hearts container
        heartsContainer.style.display = 'none';
      } else {
        // Add like
        post.classList.add('liked');
        likesContainer.classList.add('active');
        likeText.textContent = 'Голос принят';

        // Show the hearts container and start animation
        heartsContainer.style.display = 'flex';
        hearts.forEach((heart, index) => {
          const offsetX = Math.random() * 100 - 10;
          heart.style.setProperty('--offset-x', `${offsetX}px`);
          heart.style.animation = `heartAnimation 3s forwards`;
          heart.style.animationDelay = `${index * 0.3}s`;
        });
      }
    });
  });
});

//popup share show/hide

document.addEventListener('DOMContentLoaded', () => {
  const shareButtons = document.querySelectorAll('.js-video__share');
  const popups = document.querySelectorAll('.js-share-popup');

  function handleShareButtonClick(e, shareButton, popup, index) {
    e.preventDefault();
    const windowWidth = window.innerWidth;

    if (windowWidth > 991) {
      // Desktop behavior: toggle the popup visibility
      popup.classList.toggle('active');
      shareButton.classList.toggle('active');

      // Close other popups if open
      popups.forEach((p, i) => {
        if (i !== index && p.classList.contains('active')) {
          p.classList.remove('active');
          shareButtons[i].classList.remove('active');
        }
      });
    } else {
      // Mobile behavior: typical share button action
      // Here you could trigger the native share dialog (if supported) or redirect to a share URL
      window.open('https://your-share-url.com', '_blank'); // Example URL, replace with your logic
    }
  }

  shareButtons.forEach((shareButton, index) => {
    const popup = popups[index];

    shareButton.addEventListener('click', e =>
      handleShareButtonClick(e, shareButton, popup, index)
    );
  });

  // Hide popup when clicking outside of it (desktop only)
  document.addEventListener('click', e => {
    const windowWidth = window.innerWidth;

    if (windowWidth > 991) {
      if (
        !e.target.closest('.js-video__share') &&
        !e.target.closest('.js-share-popup')
      ) {
        popups.forEach((popup, index) => {
          if (popup.classList.contains('active')) {
            popup.classList.remove('active');
            shareButtons[index].classList.remove('active');
          }
        });
      }
    }
  });

  // Re-run the logic if the window is resized
  window.addEventListener('resize', () => {
    popups.forEach(popup => popup.classList.remove('active'));
    shareButtons.forEach(button => button.classList.remove('active'));
  });
});

//COPY LINK
document.addEventListener('DOMContentLoaded', () => {
  const copyButtons = document.querySelectorAll('.js-copy-btn');

  copyButtons.forEach(button => {
    button.addEventListener('click', function () {
      const inputField = this.closest('.share-popup').querySelector(
        '.js-share-popup-input'
      );
      inputField.select();
      inputField.setSelectionRange(0, 99999); // For mobile devices
      navigator.clipboard.writeText(inputField.value);

      const tooltip = this.querySelector('.tooltiptext');
      tooltip.textContent = 'скопировано: ' + inputField.value;
      tooltip.classList.add('active');
    });

    button.addEventListener('mouseout', function () {
      const tooltip = this.querySelector('.tooltiptext');
      tooltip.textContent = 'Копировать ссылку';
      tooltip.classList.remove('active');
    });
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

</div>
`;

// Setup the player
const players = Array.from(document.querySelectorAll('.js-player')).map(
  p => new Plyr(p)
);

document.addEventListener('DOMContentLoaded', function () {
  const plyrElements = document.querySelectorAll('.plyr');

  plyrElements.forEach(plyrElement => {
    const videoBottom = plyrElement
      .closest('.video-main__item-cover')
      .querySelector('.video__bottom');

    // Создаем наблюдатель за изменениями атрибутов (классов) у каждого элемента plyrElement
    const observer = new MutationObserver(function (mutationsList) {
      mutationsList.forEach(mutation => {
        if (
          mutation.type === 'attributes' &&
          mutation.attributeName === 'class'
        ) {
          if (plyrElement.classList.contains('plyr--hide-controls')) {
            videoBottom.classList.remove('up');
          } else {
            videoBottom.classList.add('up');
          }
        }
      });
    });

    observer.observe(plyrElement, { attributes: true });

    // Очищаем наблюдатель при выходе с страницы или завершении работы
    window.addEventListener('unload', function () {
      observer.disconnect();
    });
  });
});
document.addEventListener('DOMContentLoaded', function () {
  const windowWidth = window.innerWidth;

  const openFuckingFormButton = document.querySelector('.header__form');
  // const closeFuckingForm = document.querySelector('');
  if (windowWidth < 991) {
    openFuckingFormButton.addEventListener('click', function () {
      this.classList.add('ouvert');
    });
  }
});
