
function raceResults(params) 
{
    const [first , second,third, ...rest ] = params
    //console.log(first+ second+third + rest);
    const obj = {
        'first': first,
        'second' : second,
        'third' : third,
        'rest' : rest 
    }
    console.log(obj);
   
}
raceResults(['Tom', 'Margaret', 'Allison', 'David', 'Pierre'])
