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