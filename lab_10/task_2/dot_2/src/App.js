import logo from './logo.svg';
import pic from './Capture.png'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

import './App.css';

const PizzaForm = ()=>
{
  return (
    <div>
      <h1 className="display-3">Pizza Pepperoni</h1>
      <p className="display-6">$13.00</p>
      <p className="" >
      What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type
     
      </p>
      <hr></hr>
        <div>
          <label> Select your Feelings</label>
          <select className="form-select" aria-label="Default select example">
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
      </div>
      <div>
          <label> Select Your Pizza Crust </label>
          <select className="form-select" aria-label="Default select example">
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
      </div>
      <div className="component">
        <div>Do you want cheese ? </div>
        <div>
        <input type="radio" name="cheez" value="cheeze"/>
          <label>Cheeze </label>
          
          </div>  
          <div>
        <input type="radio" name="cheez" value="nocheeze" />
          <label>No Cheeze </label>
          </div>  
          <div> $0.00</div>

      </div>
       
      <div className="component">
        <div>Select Your Pizza </div>
          <div>
          <input type="radio" name="size" value="cheeze"/>
          <label>Small </label>
          </div>  
          <div>
        <input type="radio" name="size" value="nocheeze" />
          <label>Medium</label>
          </div>  
          <div>
        <input type="radio" name="size" value="nocheeze" />
          <label>Large</label>
          </div>  
         <div> $0.00</div>
          
      </div>
      <div className="component">
        <div>Additional Details</div>
        <input className="form-control" placeholder="Any Instructions" type="text"></input>
      </div>
      <div className="component">
        <div>Name</div>
        <input className="form-control"  type="text"></input>
      </div>
      <div className="component">
        <div>Your PhoneNumber</div>
        <input className="form-control"  type="text"></input>
      </div>
      <div className="component">
        <div>Your Email Address</div>
        <input className="form-control"  type="text"></input>
      </div>
      <div className="component">
        <div>Pick Up Date</div>
        <input className="form-control"  type="text"></input>
      </div>
      <div className="component">
        <div>Your PickUp Time</div>
        <input className="form-control"  type="text"></input>
      </div>
      <div className="component">
        <div>Your PhoneNumber</div>
        <input className="form-control"  type="text"></input>
      </div>
      
      <hr></hr>
      <div className="component">
        <div className="row">
          <p className="col-md-11">Total  </p>
          <div className="col-md-1 ">Bill:00</div>
          </div>
      </div>

      <div className="component">
      <div className="row">
          <div className="col-md-3">  <button className="btn  btn-success"> Add to Cart </button>   </div>
          <div className="col-md-3 offset-md-6 "> <button className="btn  btn-warning"> Check Out </button> </div>
          </div>

      </div>
      
      

    </div>
  )
}
const Logo = ()=>
{
  return (
    <img src={pic}></img>
    
  )
}

function App() {
  return (
    <div className="App">
      <div className="container">
      <div className="row">
      <div className="col-md-4">
      <Logo></Logo>
      

      </div>
      <div className="col-md-6">
      <PizzaForm></PizzaForm>
      </div>
      </div>
      
      </div>
    </div>
  );
}

export default App;
