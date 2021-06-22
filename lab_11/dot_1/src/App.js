
import { useState } from 'react';
import './App.css';
import { Button } from 'react-bootstrap';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

const Simple = (props)=>
{

  const [userName,setUserName] = useState(props.name);
  const [pass,setPass] = useState();
  const [login_state,setLoginState] = useState(false);
 const change_user = (e)=>
 {
 setUserName(e.target.value);
 }   
 const  change_pass =(e)=>
 {
   setPass(e.target.value);
 } 
 const  submit_method =(e)=>
 {
   if(userName=="dot" && pass=="123")
      setLoginState(true)
 }
 const logout = ()=>
 {
   setLoginState(false)
 }
  return (
    <div>
      
      { login_state==false ? <div> <label>User Name</label>
      <input name="userName" onChange={change_user} value={userName}></input>
      <br></br>
      
      <label>Password</label>
      <input name="userName" value={pass} onChange={change_pass} ></input>
      <br></br>
      
      <button className="primary" onClick={submit_method}>LOgin</button></div> : <div>  <div> Logded in : {userName}   
  <button className="primary" onClick={logout}> Logout</button>  </div>   </div>  }
    </div>
  )
} 


Simple.defaultProps = {
  name:"default data"
}
function App() {
  
  return (
    <div className="App">
      
          <Simple></Simple>
    </div>
  );
}

export default App;
