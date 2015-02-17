var $addForm = $("#add-form");
var $logForm = $("#log-form");
var $list = $(".twot-list");
var $logger = $('.logButton');
var $highlighter = $('.userButton');

var Success = function(data, status) {
  console.log('Successful Form Submission');
};

var Error = function(data, status) {
  console.log("status", status);
  console.log("error", data);
};

var adder = function(twot) {
  $list.prepend('<div class="twot">' + twot.message + twot.user + '</div>');
};

$addForm.submit(function(event) {
  event.preventDefault();
  var formData = {};
  $.each($addForm.serializeArray(), function(i, field) {
    formData[field.name] = field.value;
  });
  formData[author] = $("#userID").text();
  console.log(formData);
  $.post("/addTwot", formData).done(Success).error(Error);
  adder(formData);
});

$logForm.submit(function(event) {
  event.preventDefault();
  var logData = {};
  $.each($logForm.serializeArray(), function(i, field) {
    logData[field.name] = field.value;
  });
  console.log(logData);
  $.post("/logUser", logData).done(Success).error(Error);
  $.get("/", logData).done(Success).error(Error);
});

$logger.click(function(event) {
  event.preventDefault();
  if ($logger.text() == "Log Out") {
    $.post('/logOut',{}).done(Success).error(Error);
  } else if ($logger.text() == "Log In") {
    $.get('/logIn',{}).done(Success).error(Error);
  } else {
    console.log('Unexpected Log Button value');
    console.log($logger.text());
  }  
});

$highlighter.click(function(event) {
  event.preventDefault();
  highClass = '.' + $(this).text();
  $('.twot').removeClass('high');
  $(highClass).addClass('high');
})

// $logOut.onClick(function(event) {
//   $logOut.replaceWith('<a href="/login" id="log-in">Log In</a>');
//   $.post("/logOut",[]).done(Success).error(Error);
// });

