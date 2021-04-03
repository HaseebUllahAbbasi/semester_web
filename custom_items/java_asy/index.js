setTimeout(myFunction, 3000);

function myFunction() {
  document.getElementById("demo").innerHTML = "Dot !!";
}

setTimeout(function() { myFunction("I love You !!!"); }, 3000);

function myFunction(value) {
  document.getElementById("demo").innerHTML = value;
}



setInterval(myFunction, 1000);

function myFunction() {
  let d = new Date();
    console.log(
  d.getHours() + ":" +
  d.getMinutes() + ":" +
  d.getSeconds());
}