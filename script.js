$(document).ready(function() {
      var theMessage = $("input[name=write whatever u want!]").val();
      $('button').click(function() {
            $('#message').append("<p>"+theMessage+"</p>")
      }
      
      )
      });
