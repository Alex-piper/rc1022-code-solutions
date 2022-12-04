/* exported invert */

function invert(source) {
  var invertedSource = {};
  var entries = Object.entries(source);
  for (var i = 0; i < entries.length; i++) {
    var entry = entries[i];
    invertedSource[entry[1]] = entry[0];
  }
  return invertedSource;
}
