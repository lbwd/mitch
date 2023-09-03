/*
  Offici x Luca Benedetti
  https://linktr.ee/lucaunliked
*/

const interval = [];
let totalImgs;
let selectedImg = null;
window.addEventListener('load', (loadEv) => {
  /* Main opacity */
  document.documentElement.style.opacity = 1;

  /* Image slider */
  const imagesSlider = document.getElementsByClassName('images-slider')[0];

  document.getElementById('arrow-left').addEventListener('mousedown', (e) => {
    interval.push(
      setInterval(function () {
        imagesSlider.scrollLeft -= 3;
      }, 5)
    );
  });

  document.getElementById('arrow-right').addEventListener('mousedown', (e) => {
    interval.push(
      setInterval(function () {
        imagesSlider.scrollLeft += 3;
      }, 5)
    );
  });

  /* Thanks divs */
  document.getElementsByClassName('arrow-logo')[0].addEventListener('mouseover', (e) => {
    const thanksText = document.getElementsByClassName('thanks-text')[0];
    thanksText.style.opacity = 1;
  });

  document.getElementsByClassName('arrow-logo')[0].addEventListener('mouseout', (e) => {
    const thanksText = document.getElementsByClassName('thanks-text')[0];
    thanksText.style.opacity = 0;
  });

  /* Text effect */
  textEffect('main-text');

  function textEffect(paragraph) {
    const mainText = document.getElementById(paragraph);
    const textSplitted = mainText.textContent.replace(/ +(?= )/g, '').split(' ');
    const newText = [];
    textSplitted.forEach((word) => {
      newText.push('<span class="text-word">' + word + '</span>');
    });
    mainText.innerHTML = newText.join(' ');
    const spansWords = document.getElementsByClassName('text-word');

    for (let i = 0; i < spansWords.length; i++) {
      spansWords[i].style.opacity = 0;
    }
    mainText.style.opacity = 1;

    let i = 0;
    const wordsInterval = setInterval(() => {
      spansWords[i].style.opacity = 1;

      if (spansWords.length - 1 == i) {
        clearInterval(wordsInterval);
      }
      i++;
    }, 50);
  }

  /* Gallery */
  let elements = document.getElementsByClassName('slider-img');
  totalImgs = elements.length;
  Array.prototype.forEach.call(elements, (element) => {
    element.addEventListener('click', () => {
      switchGalleryState(getImgFromElement(element));
    });
  });

  document.getElementById('close-gallery').addEventListener('click', (e) => {
    switchGalleryState();
  });

  document.getElementById('gallery-block').addEventListener('click', (e) => {
    if (e.target !== document.getElementById('gallery-block')) {
      return;
    }

    switchGalleryState();
  });

  document.getElementById('gallery-left').addEventListener('click', (e) => {
    showPrevImage();
  });

  document.getElementById('gallery-right').addEventListener('click', (e) => {
    showNextImage();
  });

  function switchGalleryState(imgNumber) {
    let gallery = document.getElementById('gallery-block');
    let img = document.getElementById('gallery-img');
    let left = document.getElementById('gallery-left');
    let right = document.getElementById('gallery-right');
    if (!imgNumber) {
      gallery.classList.remove('visible');
      document.body.style.overflow = 'auto';
      selectedImg = null;
    } else {
      img.src = 'imgs-new/' + imgNumber + '.webp';
      gallery.classList.add('visible');
      document.body.style.overflow = 'hidden';
      selectedImg = imgNumber;
      left.style.color = '#ffc000';
      right.style.color = '#ffc000';
      if (selectedImg == 1) {
        left.style.color = '#ccc';
      } else if (selectedImg == totalImgs) {
        right.style.color = '#ccc';
      }
    }
  }

  function getImgFromElement(element) {
    let split = element.src.split('/');
    let file = split[split.length - 1];
    return file.split('.')[0];
  }

  function showPrevImage() {
    if (selectedImg && selectedImg > 1) {
      switchGalleryState(--selectedImg);
    }
  }

  function showNextImage() {
    if (selectedImg && selectedImg < totalImgs) {
      switchGalleryState(++selectedImg);
    }
  }

  /* Gallery swipe */
  let touchstartX = 0;
  let touchendX = 0;

  function checkDirection() {
    if (touchendX < touchstartX) {
      showNextImage();
    } else if (touchendX > touchstartX) {
      showPrevImage();
    }
  }

  document.getElementById('gallery-img').addEventListener('touchstart', (e) => {
    touchstartX = e.changedTouches[0].screenX;
  });

  document.getElementById('gallery-img').addEventListener('touchend', (e) => {
    touchendX = e.changedTouches[0].screenX;
    checkDirection();
  });
});

window.addEventListener('mouseup', function (event) {
  interval.forEach((i) => clearInterval(i));
});
