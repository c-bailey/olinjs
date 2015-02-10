var kitchSuccess = function(data, status) {
  console.log('order successfully completed');
};

var kitchError = function(data, status) {
  console.log("status", status);
  console.log("error", data);
};

var kitchRem = function(data) {
  $('#'+data).replaceWith('<h3>Burger Ready!</h3>');
}

$(".kitch-form").submit(function(event) {
  event.preventDefault();
  formData = $(this)[0].id;
  console.log(formData);
  $.post("/doneOrder", {id:formData})
    .done(kitchSuccess)
    .error(kitchError);
  kitchRem(formData);
});