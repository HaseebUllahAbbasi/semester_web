let powers = 1;
$(document).ready(function () {
   
    $('#player').mouseenter(function () {
        $('#player').attr('src','resources//ryu_animated.gif')
    })
    $('#player').mouseleave(function () {
        $('#player').attr('src','resources/ryu_stand_still.png')
    })
    $('#player').click(function () {
        $('#player').attr('src','resources/ryu_hadouken_pose.png')
        $('#area').append('<img  id=id_'+powers+ ' " src="../resources/hadouken.gif"   style= "position: absolute; top: 140px; left:350px; " >')
        animate('id_'+powers);
        powers++;
    })
    function animate(params) {
        console.log(params + " is going");
        $('#'+params).animate({left: '1300px'},3000);
        // $(params).animate({left: '1000px'}, "");
    
    }
    

});