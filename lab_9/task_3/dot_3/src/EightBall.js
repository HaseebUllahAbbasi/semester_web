import { useState } from 'react';
import './App.css';

function EightBall (props)
{

  /*
  const [msg,setMsg] = useState("Think Of A Question");
  const [col,setCol] = useState("black");
  return(
    <button style={ {backgroundColor: props.obj.color } } className="EightBall">{props.obj.msg} </button>    
  )
  */



  
  console.log(props.obj.msg)
  return (
    <button  style={ {backgroundColor: props.obj.color } } className="EightBall">{props.obj.msg} </button>
  )
}
export default EightBall;

EightBall.defaultProps = 
{
    value:"Think of A Question",
    color:"black"
  }

