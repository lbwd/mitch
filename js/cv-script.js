/*
  Offici x Luca Benedetti
  https://linktr.ee/lucaunliked
*/

const interval = [];
window.addEventListener('load', (loadEv) => {
  /* Main opacity */
  document.documentElement.style.opacity = 1;

  /* Thanks divs */
  document.getElementsByClassName('arrow-logo')[0].addEventListener('mouseover', (e) => {
    const thanksText = document.getElementsByClassName('thanks-text')[0];
    thanksText.style.opacity = 1;
  });

  document.getElementsByClassName('arrow-logo')[0].addEventListener('mouseout', (e) => {
    const thanksText = document.getElementsByClassName('thanks-text')[0];
    thanksText.style.opacity = 0;
  });
});
