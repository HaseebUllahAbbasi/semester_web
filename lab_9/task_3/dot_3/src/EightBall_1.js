import { useState } from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
function EightBall_1 (props)
{

  const change_data = ()=>
  {
    const obj =  (props.answers[Math.floor(Math.random()*props.answers.length)]);
    setMsg(obj.msg)
    setCol(obj.color)
  }
  const [msg,setMsg] = useState(props.obj.msg);
  const [col,setCol] = useState(props.obj.color);
  
  return(
    <div>
      <div className="text-center my-3">
      <button onClick={change_data} style={ {backgroundColor: col } }  className="EightBall">{msg} </button>    
      </div>
    </div>
    )
}
export default EightBall_1;

EightBall_1.defaultProps = 
{
    value:"Think of A Question",
    color:"black"
}

