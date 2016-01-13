$(document).ready(function() {
  $( "#explode").click(function() {
  $( "#explode" ).animate( {
    background-color:"green";
  } );
});
  $(document).keyDown(function(key) {
    switch(parseInt(key.which,10)) {
      case 37:
        $('img').animate({Left:'-=10'},'fast')
        break;
        case 39:
        $('img').animate({Left:'+=10'},'fast')
        break;
    }
  }
})
