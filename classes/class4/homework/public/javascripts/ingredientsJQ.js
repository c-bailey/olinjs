var $ingForm = $("#ingrd-form");

var ingSuccess = function(data, status) {
  console.log('Yay');
  };

var ingError = function(data, status) {
  console.log("status", status);
  console.log("error", data);
};

var adder = function(data) {
  $newform = $("#ingrd-form").clone();
  $('#in-list').append($newform);
  $newform.replaceWith('<form action="outStock" method="POST"> Ingredient: <input type="text" name="ingredient" value="'+ data.ingredient +'"/> Price: <input type="text" name="price" value="'+data.price+'"/> <input type="submit" value="Out of Stock" formaction="outStock"/> <input type="submit" value="Edit" formaction="edit"/></form>');
}

$ingForm.submit(function(event) {
  console.log('submitted');
  event.preventDefault();
  var formData = {};
  $.each($ingForm.serializeArray(), function(i, field) {
    formData[field.name] = field.value;
  });
  formData[id] = $(this).id;
  $.post("/addIngr", formData)
    .done(ingSuccess)
    .error(ingError);
  adder(formData);
});



