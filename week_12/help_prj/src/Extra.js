import React, { useState } from 'react';
function Extra() 
{
  const [data,setData] =  useState(); 
  const [state,setState]  = useState([1,2,3,4]);

  return (
    <div className="App">
      <div>{
        state.map(item=> <div> {item} </div>)
      }</div>
      <input value={data} onChange={(e)=> { setData(e.target.value)}} /> 
      <button onClick={()=> { setState( [...state,Number(data)]  )}}>  Add</button>
      <button onClick={()=> { const a = (state.sort((a,b)=> {return a-b;})); console.log(a); setState([...a])  }}>  Sort</button>
      
    </div>
  );
}
export default Extra;

