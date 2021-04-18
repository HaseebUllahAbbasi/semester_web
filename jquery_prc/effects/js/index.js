$(document).ready(function(){
    $("#hide").click(function()
    {
      $("p").hide(1000);
    });
    $("#show").click(function()
    {
      $("p").show(1000);
    });
    


    $("#toggle").click(function()
    {
      $("p").toggle(1000);
    });
    

    $("#fade_in").click(function(){
      $("#div1").fadeIn();
      $("#div2").fadeIn("slow");
      $("#div3").fadeIn(3000);
    });
    
    $("#fade_out").click(function(){
      $("#div1").fadeOut();
      $("#div2").fadeOut("slow");
      $("#div3").fadeOut(3000);
    });
    $("#fade_toggle").click(function(){
      $("#div1").fadeToggle();
      $("#div2").fadeToggle("slow");
      $("#div3").fadeToggle(3000);
    });

    $("#fade_to").click(function(){
      $("#div1").fadeTo("fast", 0.15);
      $("#div2").fadeTo("slow", 0.15);
      $("#div3").fadeTo("fast", 0.15);
    });
    $("#flip").click(function(){
      $("#panel").slideDown("slow");
    });
    
    $("#panel").click(function(){
      $("#panel").slideUp("slow");
    });
    $("#flip_toggle").click(function(){
      $("#panel").toggle("slow");
    });


    $("#animate").click(function(){
      var div = $("#target");
      div.animate({height: '300px', opacity: '0.4'}, "slow");
      div.animate({width: '300px', opacity: '0.8'}, "slow");
      
    });

    $("#animate_res").click(function(){
      var div = $("#target");
      div.animate({height: '100px', opacity: '0.4'}, "slow");
      div.animate({width: '100px', opacity: '0.8'}, "slow");
    });


  
  
    

});
  