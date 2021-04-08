//// adding class to header items
// $(' :header').addClass('headline');

////items hides it self first then comes in 1200 seconds

// $(' li :lt(3) ').hide().fadeIn(1200);
// $('li').on('click', function() 
// {
//     $(this) . remove();
// } ) ;



// when the button is pressed the all the p's are hidden
$(document).ready(function(){

    /*
    $("button").click(function(){
      $("p").hide();
    });
    */
   //if clicked on button the hides the item with id test
        
   $("button").click(function()
        {

          console.log($(".dot"));
            
          console.log($(".dot").children());
          $("#test").hide();
          console.log($(this).html());

        });   

  });

  $(document).ready(function(){
    $("button").click(function(){
      $("p:first").hide();
    });
  });

  // on single click
  // $("p").click(function(){
  //     console.log(this);
  // });
  

  $("p").dblclick(function(){
      console.log(this);
  });



  // on method is used to associate method with itseld too .
  $("p").on("click", function(){
    console.log(this);
  });
  
  $(document).ready(function(){
    $("p").on({
      mouseenter: function(){
        $(this).css("background-color", "lightgray");
      },  
      mouseleave: function(){
        $(this).css("background-color", "lightblue");
      }, 
      click: function(){
        $(this).css("background-color", "yellow");
      }  
    });
  });
  /*
Mouse Events	

click	
dblclick	
mouseenter	
mouseleave	

Keyboard Events	

keypress
keydown
keyup


Form 

change
focus
blur
submit


Document/Window Events
load
resize
scroll
unload


  */


$("#hide").click(function(){
 // $("p").hide(1000);
  // works for both  hide and show
  $("p").toggle(1000);
  // used for fade out 

  // $("#div1").fadeOut();
  // $("#div2").fadeOut("slow");
  // $("#div3").fadeOut(3000);
  $("#div1").fadeToggle();
  $("#div2").fadeToggle("slow");
  $("#div3").fadeToggle(3000);


});

$("#show").click(function(){
//  $("p").show(1000);
    $("p").toggle(1000);


    //used for fade in 
    // $("#div1").fadeIn(7000);
    // $("#div2").fadeIn("fast");
    // $("#div3").fadeIn(3000);

    // same is case with toggle of fading
    $("#div1").fadeToggle();
    $("#div2").fadeToggle("slow");
    $("#div3").fadeToggle(3000);
  

});
