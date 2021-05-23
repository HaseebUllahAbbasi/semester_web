function extend(array1, array2) {
    const array  = [...array1, ...array2];
    return array;
}
/** Return a new object with all the keys and values
from obj and a new key/value pair */
function addKeyVal(obj, key, val) {

    const prev_obj = {...obj};
    prev_obj[key] = val;
    return prev_obj;
}
/** Return a new object with a key removed. */
function removeKey(obj, key) 
{
    const prev_obj = {...obj};
    if(prev_obj[key])
    {
        delete prev_obj[key]
    }
    return prev_obj;
}
function combine(obj1, obj2) 
{
    console.log(obj1);
    
    console.log(obj2);
    const new_obj = {...obj1, ...obj2};
    return new_obj; 
}
function update(obj, key, val) 
{
    const prev_obj = {...obj};
    if(prev_obj[key])
    {
        prev_obj[key] = val;
    }
    return prev_obj;
}

console.log (extend([1,2,3,4],[1,2,3,4,5]))

console.log (addKeyVal({a: 1, b: 2},'c', '3'))

console.log (removeKey({a: 1, b: 2},'c'))

console.log (removeKey({a: 1, b: 2},'b'))

console.log ( combine({c: 1, p: 2},{m: 1, b: 2}))

