var secondsElapsed = 0;
var $h1 = document.querySelector('.countdown-display');

var nIntervalID = setInterval(() => {
  secondsElapsed += 1;
  if (secondsElapsed === 1) {
    $h1.textContent = '3';
  }
  if (secondsElapsed === 2) {
    $h1.textContent = '2';
  }
  if (secondsElapsed === 3) {
    $h1.textContent = '1';
  }
  if (secondsElapsed === 4) {
    $h1.textContent = '~Earth Beeeelooowww Us~';
  }
  if (secondsElapsed === 5) {
    clearInterval(nIntervalID);
  }
}, '1000');
