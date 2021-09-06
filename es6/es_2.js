const array = [1,2,3,4,5,6,7,8,9,10,11];
// console.log(array.length)
for (const iterator of array)
{
    // console.log(iterator);   
}
const local = localStorage.getItem ('obj')


const obj =  JSON.parse(local)  
const same_to_same_value_as_obj = JSON.stringify(obj    )
document.getElementById('obj').innerText =same_to_same_value_as_obj

/*
 // can not be used in objects
for (const iterator of obj)
{
    console.log(iterator);   
}
*/
for (const iterator in obj)
{
    // console.log(obj[iterator]);   
}

//template Literal


function callAssignObject()
{

    // ("called")
    const key = document.getElementById('key');
    const value= document.getElementById('value');
    // alert(`${key.value} ${value.value}`)
    
    const  updateObj = assignObject(obj,key.value,value.value)
    const same_to_same_value_as_obj = JSON.stringify(updateObj)
    document.getElementById('obj').innerText =same_to_same_value_as_obj
    localStorage.setItem ('obj',same_to_same_value_as_obj)
   
    key.value = ""
    value.value= ""
}

const assignObject = (obj,key,value)=>
{
    obj[key ]=value;
    return {...obj};
} 
function callRemoveObject()
{
    const key = document.getElementById('key');
    
    const  updateObj = removeObject(obj,key.value)
    const same_to_same_value_as_obj = JSON.stringify(updateObj)
    document.getElementById('obj').innerText =same_to_same_value_as_obj
   
    localStorage.setItem ('obj',same_to_same_value_as_obj)
    key.value = ""
    value.value= ""
}

const removeObject = (obj,key)=>
{

    if(obj[key])
    {
        delete obj[key];
        return {...obj};
    }
    else 
        return {...obj}
    
}
 
