var $element1 = document.querySelector('.tab-container');
var $element2 = document.querySelectorAll('.tab');
var $element3 = document.querySelectorAll('.view');

$element1.addEventListener('click', handleClick);
function handleClick(event) {
  if (event.target && event.target.matches('.tab')) {
    for (var i = 0; i < $element2.length; i++) {
      if ($element2[i] === event.target) {
        $element2[i].className = 'tab active';
      } else {
        $element2[i].className = 'tab';
      }

    }
  }
  var element4 = event.target.getAttribute('data-view');
  for (var l = 0; l < $element3.length; l++) {
    if ($element3[l].getAttribute('data-view') !== element4) {
      $element3[l].className = 'view hidden';
    } else {
      $element3[l].className = 'view ';
    }
  }
}
