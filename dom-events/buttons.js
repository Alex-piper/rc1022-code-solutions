function handleClick(event) {
  console.log('button clicked');
  console.log(event);
  console.log(event.target);
}

var el1 = document.getElementsByClassName('click-button');
console.log(el1);
el1[0].addEventListener('click', handleClick, false);

function handleDoubleClick(event) {
  console.log('button double-clicked');
  console.log(event);
  console.log(event.target);
}

var el2 = document.getElementsByClassName('double-click-button');
console.log(el2);
el2[0].addEventListener('dblclick', handleDoubleClick, false);

function handleMouseover(event) {
  console.log('button hovered');
  console.log(event);
  console.log(event.target);
}

var el3 = document.getElementsByClassName('hover-button');
el3[0].addEventListener('mouseover', handleMouseover, false);
