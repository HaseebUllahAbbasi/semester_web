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

