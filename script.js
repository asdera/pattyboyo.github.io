$(document).ready(function() {
      var theMessage = $("input[name=write whatever you want!]").val();
      $('#button').click(function() {
            $('#message').append('<p class="message">theMessage</p>')
      }
      
      )
      });
