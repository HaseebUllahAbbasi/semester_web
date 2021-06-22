import { useState } from 'react';
import './App.css';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.js'
const Simple=(props)=> 
{

  console.log(props);
  
  return <p>{props.check} </p>

}

function App() {
  const [data,setData] = useState("")
  const change_data = (e)=> { setData(e.target.value); console.log(e.target.value)  }

  return (
    <div className="App">
    <h1>
      Simple
    </h1>
    <input type="text" value={data} onChange={change_data}></input>

    <Simple check={data}></Simple>
        
    </div>

    

  );
}

export default App;
