let dot_1 = 12;
let dot_2 = 12.1;
let dot_3 = true;
let dot_4 = "check_1";
let dot_5 =  new Date();
let dot_6 = undefined;
let dot_7 = [1,2,3,4,5];
let dot_8 = ["check_1","check_2","check_3"];
let check_1 = { name : "check", id : 873947 };

//2. 
let dot_9 = ["check_1","check_2","check_3",1,2,3,check_1];
let check_2 =   Number("1231.5");
console.log(check_2);
let check_3 = parseInt("1231.5");
console.log(check_3);
let check_4 = parseFloat("1231.5");
console.log(check_4);

//3 . 
function only_string(param) {
    if(typeof(param)=="string")
    {
        console.log("This is String data" +param );

    }
    else
    {
        console.log("This is  not string type "+param)
    }
}

only_string(1);
only_string("1");

//4. 
function check_even_odd(params) {
    if(typeof(param)=="number")
    {
        if(params%2==0)
            console.log(params +" is  Even");
        else
            console.log(params +" is  Odd");

    }
}

let count  = 0;
//5.
function check_even_odd(params) {
    if(typeof(param)=="number")
    {
        if(params<=70)
            console.log('Good Safe Driving');
        else 
        {
            if(count<10)
                {
                    console.log("'Speed Limit Crossed by Penalty Point "+1000);
                    count++;
                }
                else
                {
                    console.log('License Suspended');
                }
        }
    }
}


///6.
let check_9 = (array) => 
{
     sum = 0;
    for(let i=0; i<array.length; i++)
    {
        sum = sum + array[i];
    }
    console.log("Sum is  "+sum);
    console.log("Avg is  "+ (sum/array.length));
    if(sum<=60)
    {
        console.log("Fail");
    }
    else if(sum<=80)
    {
        console.log("Pass");
    }
    else if(sum<=100)
    {
        console.log("Ae te vi Changi marks an")
    } 
    else
    {
        console.log('invalid ');
    }

} 
 let array = [1,2,3,4,4,9,8,7];
check_9(array);

let string_data = "This is to be tested";
function reverse_string(params) 
{
    let new_str = "";
    for(let i=params.length-1; i>=0; i--)
    {
        new_str+=params[i]
    }
    console.log(new_str);
}

reverse_string(string_data);
// Q 9


function date_diff(date_1,date_2) {
    var date1 = new Date(date_1);
    var date2 = new Date(date_2);
    return (date2.getTime() - date1.getTime())/(1000*3600*24);
}

console.log(" days  are  "+date_diff("02/10/2001","11/10/2024"));


// q 10 
function print_obj_data(passed_obj)
{
    for(var value in passed_obj)
    {
        if(typeof passed_obj[value] === "object")
        {
            print_obj_data(passed_obj[value])
        }
        else
        {
            console.log(`key  is : ${value} ,  value is ${passed_obj[value]}`);
        }
    } 
}

var obj = 
{
    1:'dot_1',
    2:[1,2,4,5],
    3: {
        'check_1':'word_2',
        'check_2':'word_1',
    }
}
print_obj_data(obj);

var min_num=(array)=>
{
    var min=array[0];
    var count = 0;
    for (const key in array){
        if(array[key]<min)
            min = array[key];
    }
    for(var i=0; i<array.length; i++)
    {
        if(array[i] === min)
            array[i] = -1;
    }
    
    return array
}

var array = [1,1,3,4,10,21,1,200,700,900,1000];

console.log(min_num(array));
