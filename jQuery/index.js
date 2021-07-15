
$(document).ready(function(){
  $("h1").css("color","blue");
});

//Changing Text attributes
 $("h1").text("Bye");
 $("button").text("Don't Click Me");
 $("button").html("<em>HEY</em>");


 $("button").click(function(){
     $("h1").css("color","purple");
 });

$(document).keydown(function(event){
   console.log(event.key);
  $("h1").text(event.key);
});
