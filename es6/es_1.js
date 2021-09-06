var greeter = "hey hi";
var hello = "hello";    
function newFunction() 
{
    var hello = "ok"
    console.log(this);
    console.log(hello);
    console.log(this.hello);
}


// only to use let and const  most of the times in appilcation