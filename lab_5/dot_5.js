let dot_1 = document.getElementById('container');
console.log(dot_1);

let dot_2 = document.querySelector('#container');
console.log(dot_2);


let dot_3 = document.querySelectorAll('.second');
console.log(dot_3);

let dot_4 = document.querySelectorAll('ol >  .third');
console.log(dot_4);

/*
dot_1.innerText = "Ki Hal Thek oo na";
*/
let dot_footer = document.getElementsByClassName('footer');

dot_footer[0].classList.add('main');

dot_footer[0].classList.remove('main');

let par = document.createElement("li");
let par_2 = document.createElement("li");
par_2.innerText = "fourth";
par.innerText = "fourth";
list = document.getElementsByTagName('ol');
list[0].appendChild(par);


list = document.getElementsByTagName('ul');
list[0].appendChild(par_2);