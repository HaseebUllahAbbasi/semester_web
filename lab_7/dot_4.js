$(document).ready(
    function()
    {
        $('#clicker').click( function ()
        {
            if($('p').text().startsWith('I am hidden secret') )
            {
                $('.secret').slideUp();
            }
        }
        )
        
    }

    )