$(document).ready(function(){
    $(".tabs").hover(function(){
        $(this).fadeTo("slow", 0.4);
    },
    function(){
        $(this).fadeTo("slow", 1);;
    }); 
});
