/* exported truncate */
function truncate(length, string) {
  var shortString = string.slice(0, length) + '...';
  return shortString;
}
