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

let list_ol = document.getElementsByTagName('ol');
list_ol[0].appendChild(par);


let  list_ul = document.getElementsByTagName('ul');

list_ul[0].appendChild(par_2);

let array_ul =  list_ul[0].children;
let array_ol =  list_ol[0].children;

function change_color(params) 
{
    for(let i=0; i<params.length; i++)
    {
        let li_elem = params[i];
        li_elem.style.background = 'green';
    }
}

change_color(array_ul);
change_color(array_ol);

