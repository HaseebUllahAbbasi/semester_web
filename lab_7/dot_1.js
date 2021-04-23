$(document).ready(function()
{
 
    //task 1
    // if(jQuery.isReady)
    //     alert("ready to work");
    
    // task 2
    $("article img").addClass('image-center');
 
    //task 3 
    //$("article p:last-child").remove()

    //task4
    let size = Math.floor(Math.random() * 101);
    $('h1#title').css('font-size', size +"px")

    // task5 
    $('li').append('<li>ahca</li>'); 
    
    // task 6 
    //$('article').empty();

    //  $('article').append('<p>Dot Is Here  not apologizing for the lists existence  with list removing  Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis in iste iure tempora possimus id. Quaerat quod dolorum praesentium est assumenda iste esse ex tempore tenetur provident! Facere, necessitatibus laudantium  </p>')
    // task 7
    $('input').change(function()
    {
        let  r1  =($('input').eq(0).val());
        let  r2  =($('input').eq(1).val());
        let  r3  =($('input').eq(2).val());
        $('body').css('background-color', `rgb(${r1},${r2},${r3})`);

    } )   
    
    
    // task 8
    $('img').click(function() { $(this).remove() })
 
})
