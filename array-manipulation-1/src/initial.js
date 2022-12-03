/* exported initial */
function initial(array) {
  var skipLastIndex = [];
  for (var i = 0; i < array.length - 1; i++) {
    skipLastIndex.push(array[i]);
  }
  return skipLastIndex;
}
