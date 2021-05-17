
$.ajax({
    beforeSend: function() { textreplace(description); },
    type: "POST",  
    url: "updatedjob.php",
    data: "jobID="+ job +"& description="+ description +"& startDate="+ startDate +"& releaseDate="+ releaseDate +"& status="+ status, 
    success: function(){  
        $("form#updatejob").hide(function(){$("div.success").fadeIn();});  
    },
    error: function(XMLHttpRequest, textStatus, errorThrown) { 
        alert("Status: " + textStatus); alert("Error: " + errorThrown); 
    }       
});



$.ajax({
    url: url, 
    success: function (data) {
        // Handle success here
        $('#editor-content-container').html(data);
        $('#editor-container').modal('show');
    },
    cache: false
}).fail(function (jqXHR, textStatus, error) {
    // Handle error here
    $('#editor-content-container').html(jqXHR.responseText);
    $('#editor-container').modal('show');
});


/**
 * 
 * $(document).ready(function(){
  $("button").click(function(){
    $("#div1").load("demo_test.txt", function(responseTxt, statusTxt, xhr){
      if(statusTxt == "success")
        alert("External content loaded successfully!");
      if(statusTxt == "error")
        alert("Error: " + xhr.status + ": " + xhr.statusText);
    });
  });
});
**/