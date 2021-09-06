const array = [1,2,3,4,5,6,7,8,9,10,11];
// console.log(array.length)



// const obj =  JSON.parse(local)  
// const same_to_same_value_as_obj = JSON.stringify(obj    )
// document.getElementById('obj').innerText =same_to_same_value_as_obj

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
    const value= document.getElementById('value');
    // alert(`${key.value} ${value.value}`)
    
    const  updatedArray = assignObject(array,value.value)
    const same_to_same_value_as_obj = (updatedArray).toString()
    document.getElementById('obj').innerText =same_to_same_value_as_obj
    localStorage.setItem ('array',same_to_same_value_as_obj)
    value.value= ""
}

const assignObject = (array,value)=>
{
    array.push(Number(value));
    return array;
} 
function callRemoveObject()
{
    const value = document.getElementById('value');
    
    const  updateObj = removeObject(array,value.value)
    const same_to_same_value_as_obj = (updateObj).toString()
    document.getElementById('obj').innerText =same_to_same_value_as_obj
   
    localStorage.setItem ('array',same_to_same_value_as_obj)
    value.value= ""
}

const removeObject = (array,value)=>
{
    const key =  array.indexOf(Number(value))
    // debugger
    if(array[key])
    {
        delete array[key];
        return [...array];
    }
    else 
        return [...array]
}
 
