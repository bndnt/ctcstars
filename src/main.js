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
        likeText.textContent = 'голосовать';

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
        likeText.textContent = 'голос оставлен';

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
