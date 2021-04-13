function call_it() 
{
    let variable = 1;
    function run() {
        variable++;
    }
    return variable;
}
call_it();
call_it();

call_it();
call_it();
call_it();
call_it();
call_it();
call_it();


/*
    Funtion Closures 
*/

function add() {
    var counter = 0;
    function plus() {counter += 1;}
    plus();  
    return counter; 
  }
  add();
  add();
    console.log("this is add simple funtion " +  add());  

/**
 * 
 * Self Invoking Functions
 * 
 * */

 var add = (function () {
    var counter = 0;
    return function acha () {counter += 1; return counter }
})();

  
  add();
  add();
  add();
console.log("This is self invoking  "  +  add())

  




// Initiate counter
var counter = 0;

// Function to increment counter
function add() {
  var counter = 0;
  counter += 1;
//  console.log(counter);
}

// Call add() 3 times
add();
add();
add();
//output for each log is 1 

//output of counter  is 0 ;


// Arguments in ES6

function func1() {
    for(let v in arguments)
    {

        console.log(" in loop " + v);
    }
  //  console.log(arguments[0]);
    // expected output: 1
  
 //   console.log(arguments[1]);
    // expected output: 2
  
   // console.log(arguments[2]);
    // expected output: 3
  }
  
  func1(1, 2, 3);
  


/**
 * 
 *  Cookies in jS 
 * */


/**
 * 
 * 
 * 
 * 
 **/
  