$(document).ready(function() {
     
      $('button').click(function() {
             var theMessage = $("input[name=write whatever u want!]").val();
            $('#messages').append("<p>"+theMessage+"</p>")
      }
      
      )
      });
