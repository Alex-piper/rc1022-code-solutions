/* exported todos */

var todos = [];
var previousTodosJson = localStorage.getItem('javascript-local-storage');
if (!previousTodosJson === 'null') {
  todos = JSON.parse(previousTodosJson);
}
addEventListener('beforeunload', handleUnload);
function handleUnload() {
  var todosJson = JSON.stringify(todos);
  localStorage.setItem('javascript-local-storage', todosJson);
}
