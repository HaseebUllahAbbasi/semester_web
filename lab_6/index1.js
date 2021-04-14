// task  1
function countDown(n)
{
    if(n%2==0);
    console.log(n--);
    let refer = setTimeout(countDown,100,n)
    if(n<=0)
    {
        console.log("Done");
        clearTimeout(refer);
    }
}
let number = 10;
setTimeout(countDown,100,10)


// task 2 
function IsEven()
{
    let n =  document.getElementById('even').value;
    console.log(n%2==0);
}
function IsOdd()
{
    let n =  document.getElementById('odd').value;
    console.log(n%2==1);
}
function isPrime()
{
    
    let n =  document.getElementById('prime').value;
    
    for(let i=2; i<n; i++)
    {
        if(n%i==0)
            {
                console.log(false);
                return false;
            }
    }
    console.log(true);
    return true;
}

function HighOrderFunction(number,fun)
{
    return fun(number);
}
HighOrderFunction(90,IsEven);


// task 7 
function findIndex(array,func)
{
  return  array.findIndex(func)
}
console.log(findIndex([8,11,4,27], function(val){return val >= 10}))


// task 10 
printFirstAndLast(['awesome','example','of','forEach'])
function printFirstAndLast(array)
{
    for(let obj of array)
    {
        console.log(obj[0] + " "+obj[obj.length-1] )
    }
}

// task 11
addKeyAndValue([{name: 'Elie'},{name: 'Tim'},{name: 'Elie'}],
"isInstructor", true)
function addKeyAndValue(array,arg,value)
{
    for(let obj of array)
    {
        obj[arg]= value;
        console.log(obj)
    }
}

// task 12

valTimesIndex([1,2,3]) // [0,2,6]


function valTimesIndex(array)
{
    for(let v in array)
    {
        array[v] = v*array[v];
    }
    console.log(array);
}

// task 13 
console.log("extract key" +  extractKey([{name: "Elie", isInstructor:true},{name: "Tim",
isInstructor:true},{name: "Matt", isInstructor:true}], "name") )
function extractKey(array,arg)
{
    new_arr = [];
    array.forEach(Element => {
        console.log(Element[arg]);
        new_arr.push(Element[arg]);

    });
    return new_arr;
}

// task 14
console.log( " This is filter letters " + filterLetters(['1','c','c','b','c'],'c'));
function filterLetters(array,letter)
{
    new_array = []
    for (let key in array) 
    {
        if(array[key]===letter)
            new_arr.push(key);
        
    }
    return new_arr;
}


// task 15 

console.log(filterKey(
    [{name: "Elie", isInstructor:true, isHilarious:
false},{name: "Tim", isInstructor:true, isHilarious: true},{name:
"Matt", isInstructor:true}], "isHilarious")
);

function filterKey(array,arg) 
{
    let new_array = [];
    array.forEach(element => {
        if(element[arg]==true)
        {
            new_array.push(element);
        }
    });
    return new_array;
}

// task 16

console.log(addKeyAndValue([{name: 'Elie'},{name: 'Tim'},{name: 'Elie'}],
"isInstructor", true)
);

function addKeyAndValue(array,arg,value)
{
    array.forEach(element => {
        element[arg] = value;
    });
    return array;
    
}

let obj = {};

// task 18 
function vowelCount(params) 
{
    for(let i=0; i<params.length; i++)
    {
        let  arg = params[i]
        if(params[i]== 'a' || params[i]== 'e' || params[i]== 'o' ||params[i]== 'u' || params[i]== 'i' )
            if(! obj.hasOwnProperty(arg))
                obj[arg]= 1;
            else
                obj[arg]++;

    }
    console.log(obj);
    
}
vowelCount('this is straing')

//task 19 
function removeVowels(params) 
{
    let new_array = []
    for(let i=0; i<params.length; i++)
    {
        if(params[i]== 'a' || params[i]== 'e' || params[i]== 'o' ||params[i]== 'u' || params[i]== 'i' )
            continue;
        else if(params[i]== 'A' || params[i]== 'E' || params[i]== 'I' ||params[i]== 'O' || params[i]== 'U' )
            continue;
        else 
            new_array.push(params[i]);
        }
    return new_array;
} 


console.log( removeVowels("THis is  Check to be done "));