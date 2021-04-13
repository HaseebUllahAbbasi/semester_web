function create_counter(num) 
{

    let no = num;
    return function inc()
    {
        return no++;
    } 
}
console.log(create_counter(6))
