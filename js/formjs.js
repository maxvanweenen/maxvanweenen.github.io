BRUSHED.contactForm = function(){
 $("#contact-submit").on('click',function() {
  $contact_form = $('#contact-form');
  
  var fields = $contact_form.serialize();
  
  $.ajax({
   type: "POST",
   url: "_include/php/contact.php",
   data: fields,
   dataType: 'json',
   success: function(response) {
    
    if(response.status){
     $('#contact-form input').val('');
     $('#contact-form textarea').val('');
    }
    
    $('#response').empty().html(response.html);
   }
  });
  return false;
 });
}