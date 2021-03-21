/*
document.addEventListener('DOMContentLoaded', (event) => {
    alert('DOM fully loaded and parsed');
});
*/
document.getElementById('change_heading').innerText = 'Dot_1 World';
function  hover_function(element)
{
    let text =  document.getElementsByClassName('selected')[0];
    text.innerText = element.getAttribute("class");
}
var square_box = document.createElement("DIV");

square_box.classList.add('purple');
document.getElementsByTagName('section')[0].append(square_box);
square_box.setAttribute('onmouseover','hover_function(this)')

