/*
text() - Sets or returns the text content of selected elements
html() - Sets or returns the content of selected elements (including HTML markup)
val() - Sets or returns the value of form fields

*/

$("#btn1").click(function(){
    alert("Text: " + $("#test").text());
  });
  $("#btn2").click(function(){
    alert("HTML: " + $("#test").html());
  });

$('#test').keydown(
    function(e)
    {
        if(e.keyCode==13)
        {
            console.log(this);
            console.log(
                $('#test').attr("value"))
        } 
        
    }
);


/**
 * 
 * 
 * Add New HTML Content
We will look at four jQuery methods that are used to add new content:

append() - Inserts content at the end of the selected elements
prepend() - Inserts content at the beginning of the selected elements
after() - Inserts content after the selected elements
before() - Inserts content before the selected elements

**/
// Add Several New Elements With append() and prepend()

function appendText() {
    var txt1 = "<p>Text.</p>";               // Create element with HTML 
    var txt2 = $("<p></p>").text("Text.");   // Create with jQuery
    var txt3 = document.createElement("p");  // Create with DOM
    txt3.innerHTML = "Text.";
    $("body").append(txt1, txt2, txt3);      // Append the new elements
  }
  
  $('#btn12').click(
      function()
      {
        $('img').before('before');

      }
  );
  
  $('#btn22').click(
    function()
    {
      $('img').after('after');

    }
);


/**

* 
Remove Elements/Content

To remove elements and content, there are mainly two jQuery methods:

remove() - Removes the selected element (and its child elements)
empty() - Removes the child elements from the selected element


* 
 * */

//The following example removes all <p> elements with class="test":  
$("p").remove(".test");
//This example removes all <p> elements with class="test" and class="demo":   or condition
$("p").remove(".test, .demo");



// to start from css classes 