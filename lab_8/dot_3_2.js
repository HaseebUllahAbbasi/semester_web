const extend = (array1, array2) => {
    return [...array1, ...array2];
  }

  const addKeyVal = (obj, key, val) => {
    let newObj = { ...obj }
    newObj[key] = val;
    return newObj;
 }  

 const removeKey = (obj, key) => {
     return ({ [key]: undefined, ...obj } = obj);
 }
 const combine = (obj1, obj2) => {
    return { ...obj1, ...obj2 };
  }

const update = (obj, key, val) => {return { ...obj, [key]: val };}


  
console.log (extend([1,2,3,4],[1,2,3,4,5]))

console.log (addKeyVal({a: 1, b: 2},'c', '3'))

console.log (removeKey({a: 1, b: 2},'c'))

console.log (removeKey({a: 1, b: 2},'b'))

console.log ( combine({c: 1, p: 2},{m: 1, b: 2}))

