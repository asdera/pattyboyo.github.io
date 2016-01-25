$(document).ready(function() {
  var state = true
 $('button').click{function() {
   if (state) {
     $('div').animate ({
       backGround-color: #000000;
     },1000) else {
        $('div').animate ({
       backGround-color: #5b88f6;
        },1000)
     }
   }
   
 }
}
 
})
