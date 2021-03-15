console.log("check")
let var_1 = "this is var_1";
let var_2 = "this is var_2";

let var_3 = `${var_1} + ${var_1} 

this is new line 

this is the last live`;
console.log(var_3)
ok = {
    12 : "name",
    name : "ali ",
    ok_1 :
    {
        check_1 : "name",
        name_2 : "ali ",
        ok_2 : 
        {
            check_2 : "name",
            name_5 : "ali "
        }
    } 
};
console.log(ok['name'])

console.log(ok);

array_1 = [1,2,3,34,4,[1,2,3,4,5],[1,23,2,[1,1,2]]];
array_2 = [1,2,[1,3,4,4]];
array_3 = [1,2, array_1];

console.log(array_3)

setTimeout(() => {
    alert("this is check")
}, 5000);
var ok = 1;
setInterval(() => {
    alert(ok++);
}, 1000);

clearInterval(c); // stops the interval with id,
clearInterval(20000)