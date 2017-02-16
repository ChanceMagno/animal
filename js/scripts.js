$(document).ready(function(){
  $("form#animal").on('change',function() {
    var animal = parseInt($("#animalSelect").val());

    if(animal === 1) {
      $("#turtle").show();
    } else if (animal === 2) {
      $("#sloth").show();
    } else {
      $("#llama").show();
    }
    event.preventDefault();
  });
});
