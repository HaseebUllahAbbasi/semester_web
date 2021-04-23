$(document).ready(function()
{

    $('#clicker').click(function() {
        // to directly show 
        // $('#secret').css('display','block');
        
        // for fade in 
     //  $('#secret').fadeIn(3000);
        
        // for Slide Down 
        // $('#secret').slideDown(2000);


                // for fade toggle 
      $('#secret').fadeToggle(3000);


        });
        $('#clicker').text('Click me to toggle a hidden secret!');

    
    
});