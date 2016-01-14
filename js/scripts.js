$(document).ready(function(){
  $("#evn").click(function() {
    alert("Hello");
  });

  $("#tgglimg").click(function() {
    $("#drgn").toggle();
  });

  $("#listbtn").click(function(){
    $('#apnd').append("<p class='new'>Text!</p>");
  });

  $("#rmvbtn").click(function(){
    $("#apnd").children(".new").first().remove();
  });

  $("#clr").click(function(){
    $("#clrchng").css('background-color', 'yellow');
  });

  $("#clr").dblclick(function(){
    $("#clrchng").css('background-color', 'white')
  });

  $('#blanks form').submit(function(event) {
    var nameInput = $('input#name2').val();
    $('.formshow').text(nameInput);
    event.preventDefault();
  });
});
