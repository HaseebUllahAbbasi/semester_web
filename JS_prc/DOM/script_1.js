var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("body_1");
console.log(css);
function set_gradient()
{
    body.style.background = "linear-gradient(to right, "+color1.value+" ,"+color2.value+")";
}

color1.addEventListener("input",set_gradient)
   // console.log(color1);

color2.addEventListener("input",set_gradient);
   // console.log(color2);

