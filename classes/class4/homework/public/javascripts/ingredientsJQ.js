var $form = $("#ingrd-form");

var onSuccess = function(data, status) {
  $('#in-list').html("<p>Added!<p>");
};

var onError = function(data, status) {
  console.log("status", status);
  console.log("error", data);
};

$form.submit(function(event) {
  console.log('submitted');
  event.preventDefault();
  formData = $form.serialize();
  $.get("/ingredients", formData)
    .done(onSuccess)
    .error(onError);
});