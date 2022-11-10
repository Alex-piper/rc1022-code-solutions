var $userlist = document.querySelector('#user-list');
var xhr = new XMLHttpRequest();
xhr.open('GET', 'https://jsonplaceholder.typicode.com/users');
xhr.responseType = 'json';
xhr.addEventListener('load', function () {
  console.log(xhr.status);
  console.log(xhr.response);
  var users = xhr.response;
  for (var i = 0; i < users.length; i++) {
    var user = users[i];
    var $list = document.createElement('li');
    $list.textContent = user.name;
    $userlist.appendChild($list);
  }
});
xhr.send();
