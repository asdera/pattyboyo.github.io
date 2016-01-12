$(document).ready(function() {
    $('button').click(function() {
    	var toAdd = $("input[name=do it]").val();
        $('#messages').append("<p>"+toAdd+"</p>");
    });
});
