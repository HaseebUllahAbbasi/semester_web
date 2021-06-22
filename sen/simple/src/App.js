import './App.css';
import { useState } from 'react';
const Simple =(props)=>
{
  return (
    <div> My Papa has  : {props.kuch_bhi}  </div>
  )

}
function App() {
  const [data,setData] = useState("")
  const [son,sendSon] = useState("") 
  const changing_data =(e)=>
  {
    setData(e.target.value);

  } 
  const send_data=()=>{
      sendSon(data)
  }
  
  return (
    <div className="App">

      <input type="text" value={data} onChange={changing_data} ></input>
      <button onClick={send_data} >Send Data</button>
      <Simple kuch_bhi={son}></Simple>

    </div>
  );
}

export default App;
