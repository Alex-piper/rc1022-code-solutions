var $hotButton = document.querySelector('.button');
var $whole = document.querySelector('.whole');
$hotButton.addEventListener('click', handleHotButtonClick);

function handleHotButtonClick(event) {
  $hotButton.className = 'clicked';
  $whole.className = 'click2';
}
