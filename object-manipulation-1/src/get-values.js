/* exported getValues */
function getValues(object) {
  var arrayOfKeys = [];
  for (var key in object) {
    arrayOfKeys.push(object[key]);
  }
  return arrayOfKeys;
}
