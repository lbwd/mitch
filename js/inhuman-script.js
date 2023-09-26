/*
  Offici x Luca Benedetti
  https://linktr.ee/lucaunliked
*/

const interval = [];
window.addEventListener('load', (loadEv) => {
  /* Main opacity */
  document.documentElement.style.opacity = 1;

  /* Text effect */
  textEffect('title-text');
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
});
