var $hotButton = document.querySelector('.button');
var $whole = document.querySelector('.whole');

$hotButton.addEventListener('click', handleHotButtonClick);

function handleHotButtonClick(event) {
  if ($hotButton.className === 'button') {
    $hotButton.className = 'clicked';
    $whole.className = 'click2';
  } else {
    $hotButton.className = 'button';
    $whole.className = 'whole';
  }
}
