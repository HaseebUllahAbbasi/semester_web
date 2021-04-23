$(document).ready(
    function ()
    {
        $('#greet').click( function () { say($('#name').val()); })
    }

    )

    // Call say("Hi!") to have your computer say hi!
// This only works on recent versions of Safari
// and Chrome at the moment.

function say(text) 
        {
            console.log(text);
            var msg = new SpeechSynthesisUtterance("Hello"+ text);
            window.speechSynthesis.speak( msg); 
        
        }