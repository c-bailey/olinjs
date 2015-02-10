var $ingForm = $("#ingrd-form");

var ingSuccess = function(data, status) {
  $newform = $("#ingrd-form").clone();
  $('#in-list').append($newform);
  $newform.replaceWith('<form id= '  ' action="outStock" method="POST"> Ingredient: <input type="text" name="ingredient" value="{{this.name}}"/> Price: <input type="text" name="price" value="{{this.price}}"/> <input type="submit" value="Out of Stock" formaction="outStock"/> <input type="submit" value="Edit" formaction="edit"/></form>');
};

var ingError = function(data, status) {
  console.log("status", status);
  console.log("error", data);
};

$ingForm.submit(function(event) {
  console.log('submitted');
  event.preventDefault();
  formData = $ingForm.serialize();
  console.log(formData);
  $.get("/ingredients", formData)
    .done(ingSuccess)
    .error(ingError);
});