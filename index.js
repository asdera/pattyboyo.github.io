$(document).ready(function(){
    $(".sidebar").hover(function(){
        $(this).fadeTo("slow", 0.4);
    },
    function(){
        $(this).fadeTo("slow", 1);;
    }); 
});
