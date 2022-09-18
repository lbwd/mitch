/*
  Offici x Luca Benedetti
  https://linktr.ee/lucaunliked
*/

const interval = [];
window.addEventListener('load', (loadEv) => {
  /* Image slider */
  const imagesSlider = document.getElementsByClassName('images-slider')[0];

  document.getElementById('arrow-left').addEventListener('mousedown', (e) => {
    interval.push(
      setInterval(function () {
        imagesSlider.scrollLeft -= 3;
      }, 10)
    );
  });

  document.getElementById('arrow-right').addEventListener('mousedown', (e) => {
    interval.push(
      setInterval(function () {
        imagesSlider.scrollLeft += 3;
      }, 10)
    );
  });

  /* Thanks divs */
  document
    .getElementsByClassName('arrow-logo')[0]
    .addEventListener('mousedown', (e) => {
      const thanksText = document.getElementsByClassName('thanks-text')[0];
      if (thanksText.style.opacity == 0) {
        thanksText.style.opacity = 1;
      } else {
        thanksText.style.opacity = 0;
      }
    });
});

window.addEventListener('mouseup', function (event) {
  interval.forEach((i) => clearInterval(i));
});
