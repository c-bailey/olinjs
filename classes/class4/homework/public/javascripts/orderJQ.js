$ordForm = $("#order-form");

var ordSuccess = function(data, status) {
  $("html,body").append('<h2>Order Submitted! Yay!</h2>');
};

var ordError = function(data, status) {
  console.log("status", status);
  console.log("error", data);
};

$ordForm.submit(function(event) {
  console.log('submitted');
  event.preventDefault();
  formData = $form.serialize();
  $.get("/order", formData)
    .done(ordSuccess)
    .error(ordError);
});