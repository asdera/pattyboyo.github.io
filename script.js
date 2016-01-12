$(document).ready(function() {
      var theMessage = $("input[name=write whatever u want!]").val();
      $('button').click(function() {
            $('#messages').append("<p>"+theMessage+"</p>")
      }
      
      )
      });
