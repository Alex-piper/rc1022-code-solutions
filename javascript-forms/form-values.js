var $form = document.querySelector('#contact-form');
function noReload(event) {
  event.preventDefault();
  var name = $form.elements.name.value;
  var email = $form.elements.email.value;
  var message = $form.elements.message.value;
  var data = {
    name,
    email,
    message
  };
  console.log('data:', data);
  $form.reset();
}

$form.addEventListener('submit', noReload);
