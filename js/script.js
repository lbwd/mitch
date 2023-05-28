/*
  Offici x Luca Benedetti
  https://linktr.ee/lucaunliked
*/

const interval = [];
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
  const mainText = document.getElementById('main-text');
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

  /* Gallery */
  let elements = document.getElementsByClassName('slider-img');
  Array.prototype.forEach.call(elements, (element) => {
    element.addEventListener('click', () => {
      switchGalleryState(getImgFromElement(element));
    });
  });

  document.getElementById('close-gallery').addEventListener('click', () => {
    switchGalleryState();
  });

  function switchGalleryState(imgNumber) {
    let gallery = document.getElementById('gallery-block');
    let img = document.getElementById('gallery-img');
    if (gallery.classList.contains('visible')) {
      gallery.classList.remove('visible');
      document.body.style.overflow = 'auto';
    } else {
      img.src = 'imgs/' + imgNumber + '.webp';
      gallery.classList.add('visible');
      document.body.style.overflow = 'hidden';
    }
  }

  function getImgFromElement(element) {
    let split = element.src.split('/');
    let file = split[split.length - 1];
    return file.split('.')[0];
  }
});

window.addEventListener('mouseup', function (event) {
  interval.forEach((i) => clearInterval(i));
});
