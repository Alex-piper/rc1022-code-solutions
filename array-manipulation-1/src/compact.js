/* exported compact */
function compact(array) {
  var acceptableValues = [];
  var unacceptableValues = [];
  for (var i = 0; i < array.length; i++) {
    // eslint-disable-next-line no-self-compare
    if (array[i] === false || array[i] === '' || array[i] === 0 || array[i] !== array[i] || array[i] === null || array[i] === undefined) {
      unacceptableValues.push(array[i]);
    } else {
      acceptableValues.push(array[i]);
    }
  }
  return acceptableValues;
}
