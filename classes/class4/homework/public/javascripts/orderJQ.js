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
    money= parseFloat(this.id)+parseFloat($("#cost").html());
    $("#cost").replaceWith('<div id="cost">' + money +'</div>');
  } else {
    money= parseFloat($("#cost").html())-parseFloat(this.id);
    $("#cost").replaceWith('<div id="cost">' + money +'</div>');
  }
});

$ordForm.submit(function(event) {
  console.log('submitted');
  event.preventDefault();
  formData = $ordForm.serialize();
  $.post("/submitOrder", formData)
    .done(ordSuccess)
    .error(ordError);
});