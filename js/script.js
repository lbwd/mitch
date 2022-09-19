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
  document
    .getElementsByClassName('arrow-logo')[0]
    .addEventListener('mouseover', (e) => {
      const thanksText = document.getElementsByClassName('thanks-text')[0];
      thanksText.style.opacity = 1;
    });

  document
    .getElementsByClassName('arrow-logo')[0]
    .addEventListener('mouseout', (e) => {
      const thanksText = document.getElementsByClassName('thanks-text')[0];
      thanksText.style.opacity = 0;
    });

  /* Text effect */
  const mainText = document.getElementById('main-text');
});

window.addEventListener('mouseup', function (event) {
  interval.forEach((i) => clearInterval(i));
});
