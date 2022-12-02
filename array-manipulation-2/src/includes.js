/* exported includes */
function includes(array, value) {
  var arrayIncludesVal = false;
  for (var i = 0; i < array.length; i++) {
    if (array[i] === value) {
      arrayIncludesVal = true;
    }
  }
  return arrayIncludesVal;
}
