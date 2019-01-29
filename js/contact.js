$(window).load(function() {
  if(window.location.hash == '#thank-you'){
    $("#thank-you").removeClass('collapse');
  }

  function sendData() {
    $.post("https://getsimpleform.com/messages?form_api_token=e6237707ba0b42fc6ffdbd7a3517d74c", form.serialize(), function(data) {
      return;
    });
  }
  
  // Access the form element...
  var form = $("#contact-form");

  // ...and take over its submit event.
  form.submit(function(event){
    event.preventDefault();
    // submitted by bot, field is not empty, so do nothing
    if ($('input[type="text"]#form-phone').val().length == 0) {
      sendData();
    }
    form[0].reset();
    $("#thank-you").removeClass('collapse');
    window.location.href = "#thank-you";
    return false;
  });

});