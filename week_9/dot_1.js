/*
For OF Loop 
*/
var cars = ["BMW", "Volvo", "Mini"];

for (let iterator of cars) {
    console.log(iterator);
}


    // Rest OP

    function sum(...args) {
        let sum = 0;
        for (let arg of args) 
            sum += arg;
        return sum;
      }
      
      let x = sum(4, 9, 16, 25, 29, 100, 66, 77);
      
      console.log(x);

      // Find Function 
 var numbers = [4, 9, 16, 25, 29];
var first = numbers.find(myFunction);

function myFunction(value, index, array) {
  return value > 18;
}



// findindex 

function func(value, index, array) {
    return value > 18;
  }
var numbers = [4, 9, 16, 25, 29];
var first = numbers.findIndex(func);

console.log("first "+ first);



// spread operator 
const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;
(function() {
  arr2 = [...arr1]; // change this line // copy value not by the references
  arr1[0] = 'potato'
})();
console.log(arr2);




// Destructuring object 
let a, b, rest;
[a, b] = [10, 20];

console.log(a);
// expected output: 10

console.log(b);
// expected output: 20

[a, b, ...rest] = [10, 20, 30, 40, 50];

console.log(rest);




 // array destructuring 
const foo = ['one', 'two', 'three'];

const [red, yellow, green] = foo;
console.log(red); // "one"
console.log(yellow); // "two"
console.log(green); // "three"




 // object  Destructuring 
 const user = {
    id: 42,
    is_verified: true
};

const {id, is_verified} = user;

console.log(id); // 42
console.log(is_verified); // true


let a, b;

({a, b} = {a: 1, b: 2});


const o = {p: 42, q: true};
const {p: foo, q: bar} = o;

console.log(foo); // 42
console.log(bar); // true



const {a = 10, b = 5} = {a: 3};

console.log(a); // 3
console.log(b); // 5




const user = {
    id: 42,
    displayName: 'jdoe',
    fullName: {
      firstName: 'John',
      lastName: 'Doe'
    }
  };
  
  function userId({id}) {
    return id;
  }
  
  function whois({displayName, fullName: {firstName: name}}) {
    return `${displayName} is ${name}`;
  }
  
  console.log(userId(user)); // 42
  console.log(whois(user));  // "jdoe is John"



  const metadata = {
    title: 'Scratchpad',
    translations: [
      {
        locale: 'de',
        localization_tags: [],
        last_edit: '2014-04-14T08:43:37',
        url: '/de/docs/Tools/Scratchpad',
        title: 'JavaScript-Umgebung'
      }
    ],
    url: '/en-US/docs/Tools/Scratchpad'
  };
  
  let {
    title: englishTitle, // rename
    translations: [
      {
         title: localeTitle, // rename
      },
    ],
  } = metadata;
  
  console.log(englishTitle); // "Scratchpad"
  console.log(localeTitle);  // "JavaScript-Umgebung"







  const people = [
    {
      name: 'Mike Smith',
      family: {
        mother: 'Jane Smith',
        father: 'Harry Smith',
        sister: 'Samantha Smith'
      },
      age: 35
    },
    {
      name: 'Tom Jones',
      family: {
        mother: 'Norah Jones',
        father: 'Richard Jones',
        brother: 'Howard Jones'
      },
      age: 25
    }
  ];
  
  for (const {name: n, family: {father: f}} of people) {
    console.log('Name: ' + n + ', Father: ' + f);
  }
  
  // "Name: Mike Smith, Father: Harry Smith"
  // "Name: Tom Jones, Father: Richard Jones"