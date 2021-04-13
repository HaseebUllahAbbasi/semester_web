var obj = { name: "John", age: 30, city: "New York" };
var myJSON = JSON.stringify(obj);
console.log(typeof(myJSON));
console.log((myJSON));


var obj_1 = JSON.parse('{ "name":"John", "age":30, "city":"New York"}');
console.log(obj_1);



var numbers = [65, 44, 12, 4];
var newarray = numbers.map(myFunction);

function myFunction(num) {
  return num * 10;
}
another_array = numbers.map((value) => {
    return value%2==0;
})
console.log(another_array);



// filer example 1 
var ages = [32, 33, 16, 40];
let counter = 0;
ages.filter(checkAdult);
function checkAdult(age,value) {

console.log(age + " " + value );

}
console.log(counter);


// filer example 2  
function isBigEnough(value) 
{
    return value >= 10
  }
  
  let filtered = [12, 5, 8, 130, 44].filter(isBigEnough)
  // filtered is [12, 130, 44]


// reducer example _ 1

const array1 = [1, 2, 3, 4];
const reducer = (accumulator, currentValue) => accumulator + currentValue;

// 1 + 2 + 3 + 4
console.log("reduce with without argument " + array1.reduce(reducer));
// expected output: 10

// 5 + 1 + 2 + 3 + 4
console.log( "reduce with Argument" +array1.reduce(reducer, 5));
// expected output: 15


