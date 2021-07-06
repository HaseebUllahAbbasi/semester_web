import { useState } from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

const Counter =  (props) =>
{
  const [count,setCount] = useState(props.initial)
  const increment =()=>
  {
    if((count+1)>props.max)
    {
        return
    }
    setCount(count+1);
  } 
  const decremnet =()=>
  {
    if((count-1)<props.min)
    {
        return
    }
    setCount(count-1);
  }
  useState(function(){
    
  },count)
   
  return(
    <div>
      <button className="btn btn-primary" onClick={increment}>
+
    </button>
    
    <input className=" field"  disabled  value={count}></input>
    <button className="btn btn-primary" onClick={decremnet}>
-
    </button>

    </div>
  )
}
function App() {
  return (

  <div>
  <Counter initial={5} min={1} max={10}></Counter>

  </div>  
  );
}

export default App;
