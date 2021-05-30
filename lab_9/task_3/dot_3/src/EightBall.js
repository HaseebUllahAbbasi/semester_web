import { useState } from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
function EightBall (props)
{

  const change_data = ()=>
  {
    const obj =  (props.answers[Math.floor(Math.random()*props.answers.length)]);
    setMsg(obj.msg)
    setCol(obj.color)
    setCount(count+1)
  }
  const [count,setCount] = useState(0);  
  const [msg,setMsg] = useState("Think Of A Question");
  const [col,setCol] = useState("black");
  const initial_state = ()=>
  {
    setMsg('Think of Question')
    setCol('black')
    setCount(0);
  }

  return(
    <div>
      <div className="text-center my-3">
      <button onClick={change_data} style={ {backgroundColor: col } }  className="EightBall">{msg} </button>    
      </div>

      <div className="text-center my-3">
        <h3>Counts : {count}</h3>
        <button className="btn btn-secondary " onClick={initial_state}>Reset</button>
      
      </div>
    </div>
    
    )
  



  
  /*
  console.log(props.obj.msg)
  return (
    <button  style={ {backgroundColor: props.obj.color } } className="EightBall">{props.obj.msg} </button>
  )
  */
}
export default EightBall;

EightBall.defaultProps = 
{
    value:"Think of A Question",
    color:"black"
  }

