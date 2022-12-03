/* exported getKeys */
function getKeys(object) {
  var theKeys = [];
  for (var key in object) {
    theKeys.push(key);
  }
  return theKeys;
}
