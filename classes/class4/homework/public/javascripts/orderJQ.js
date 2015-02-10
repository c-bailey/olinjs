$ordForm = $("#order-form");

var ordSuccess = function(data, status) {
  $("html,body").append('<h2>Order Submitted! Yay!</h2>');
};

var ordError = function(data, status) {
  console.log("status", status);
  console.log("error", data);
};

$( "input:checkbox" ).change(function() {
  if($(this).is(':checked')) {
    money= parseInt(this.id)+parseInt($("#cost").html());
    $("#cost").replaceWith(money);
  } else {
    money= parseInt($("#cost").html())-parseInt(this.id);
    $("#cost").replaceWith(money);
  }
});

$ordForm.submit(function(event) {
  console.log('submitted');
  event.preventDefault();
  formData = $ordForm.serialize();
  $.get("/order", formData)
    .done(ordSuccess)
    .error(ordError);
});