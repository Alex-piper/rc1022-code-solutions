var clicks = 0;

var $el1 = document.querySelector('.hot-button');

var $el2 = document.querySelector('.click-count');

$el1.addEventListener('click', timesClicked);

function timesClicked() {
  clicks++;
  var temperature;
  if (clicks < 4) {
    temperature = ' cold';
  } else if (clicks < 7) {
    temperature = ' cool';
  } else if (clicks < 10) {
    temperature = ' tepid';
  } else if (clicks < 13) {
    temperature = ' warm';
  } else if (clicks < 16) {
    temperature = ' hot';
  } else {
    temperature = ' nuclear';
  }
  $el1.className = 'hot-button' + temperature;
  $el2.textContent = 'clicks:' + clicks;
}
