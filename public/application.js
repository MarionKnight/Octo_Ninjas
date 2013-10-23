$(document).on('ready', function() {
  console.log('hi');
  $('#form-create-survey').submit(function(event){
    event.preventDefault();
    $("#movie-list-template").show();
  })
})
 
