
import './App.css';
import { Link, Route, Switch } from "react-router-dom";

import { Button } from 'semantic-ui-react'
import Products from './Products';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Home from './Home';
import Product from './Product';
import { useState } from 'react';
import ShoppingCart from './ShoppingCart';
  
function App() {
  const [count,setCount] = useState(0)
  const [sum,setSum]  = useState(0);
  const mock_data = [{ "id": 1, "name": "Tea Leaves - Oolong", "price": "$66.59", "qty": 13 },
  { "id": 2, "name": "Beans - Fava Fresh", "price": "$1.93", "qty": 12 },
  { "id": 3, "name": "Asparagus - Green, Fresh", "price": "$57.96", "qty": 5 },
  { "id": 4, "name": "Truffle Cups - White Paper", "price": "$35.96", "qty": 13 },
  { "id": 5, "name": "Beer - Corona", "price": "$16.10", "qty": 19 },
  { "id": 6, "name": "Soup - Campbells Tomato Ravioli", "price": "$31.13", "qty": 14 },
  { "id": 7, "name": "Wine - Crozes Hermitage E.", "price": "$94.99", "qty": 6 },
  { "id": 8, "name": "Cranberry Foccacia", "price": "$50.94", "qty": 11 },
  { "id": 9, "name": "Nut - Walnut, Pieces", "price": "$50.40", "qty": 13 },
  { "id": 10, "name": "Placemat - Scallop, White", "price": "$17.53", "qty": 1 },
  { "id": 11, "name": "Bread - Rolls, Rye", "price": "$11.64", "qty": 3 },
  { "id": 12, "name": "Basil - Pesto Sauce", "price": "$12.73", "qty": 11 },
  { "id": 13, "name": "Chocolate - Liqueur Cups With Foil", "price": "$82.90", "qty": 11 },
  { "id": 14, "name": "Carbonated Water - Blackberry", "price": "$95.37", "qty": 13 },
  { "id": 15, "name": "Pernod", "price": "$84.76", "qty": 12 },
  { "id": 16, "name": "Cheese - Swiss", "price": "$55.01", "qty": 10 },
  { "id": 17, "name": "Lid Coffeecup 12oz D9542b", "price": "$88.19", "qty": 1 },
  { "id": 18, "name": "Flower - Commercial Spider", "price": "$18.24", "qty": 1 },
  { "id": 19, "name": "Bag Stand", "price": "$63.88", "qty": 9 },
  { "id": 20, "name": "Flour - Bread", "price": "$66.85", "qty": 11 },
  { "id": 21, "name": "Water - Evian 355 Ml", "price": "$7.60", "qty": 16 },
  { "id": 22, "name": "Soup V8 Roasted Red Pepper", "price": "$63.20", "qty": 8 },
  { "id": 23, "name": "Island Oasis - Pina Colada", "price": "$18.36", "qty": 18 },
  { "id": 24, "name": "Wheat - Soft Kernal Of Wheat", "price": "$89.30", "qty": 19 },
  { "id": 25, "name": "Edible Flower - Mixed", "price": "$73.50", "qty": 13 },
  { "id": 26, "name": "Beef Cheek Fresh", "price": "$5.31", "qty": 18 },
  { "id": 27, "name": "Sword Pick Asst", "price": "$18.50", "qty": 14 },
  { "id": 28, "name": "Chutney Sauce", "price": "$81.24", "qty": 7 },
  { "id": 29, "name": "Chutney Sauce", "price": "$42.87", "qty": 1 },
  { "id": 30, "name": "Bar Energy Chocchip", "price": "$55.73", "qty": 20 },
  { "id": 31, "name": "Apple - Delicious, Red", "price": "$85.19", "qty": 2 },
  { "id": 32, "name": "Pork - Shoulder", "price": "$28.15", "qty": 9 },
  { "id": 33, "name": "Butter Ripple - Phillips", "price": "$97.36", "qty": 17 },
  { "id": 34, "name": "Rice Wine - Aji Mirin", "price": "$42.49", "qty": 3 },
  { "id": 35, "name": "Bread - Burger", "price": "$61.95", "qty": 13 },
  { "id": 36, "name": "Pepper - Jalapeno", "price": "$41.37", "qty": 20 },
  { "id": 37, "name": "Cocoa Powder - Natural", "price": "$20.35", "qty": 14 },
  { "id": 38, "name": "Cheese - Cheddarsliced", "price": "$4.39", "qty": 18 },
  { "id": 39, "name": "Chocolate - Dark", "price": "$26.39", "qty": 17 },
  { "id": 40, "name": "Shopper Bag - S - 4", "price": "$19.90", "qty": 11 },
  { "id": 41, "name": "Rosemary - Dry", "price": "$39.65", "qty": 7 },
  { "id": 42, "name": "Vermouth - Sweet, Cinzano", "price": "$7.17", "qty": 13 },
  { "id": 43, "name": "Foie Gras", "price": "$13.02", "qty": 13 },
  { "id": 44, "name": "Jameson - Irish Whiskey", "price": "$51.93", "qty": 8 },
  { "id": 45, "name": "Cattail Hearts", "price": "$69.42", "qty": 2 },
  { "id": 46, "name": "Daves Island Stinger", "price": "$10.92", "qty": 8 },
  { "id": 47, "name": "Sterno - Chafing Dish Fuel", "price": "$1.59", "qty": 17 },
  { "id": 48, "name": "Seedlings - Clamshell", "price": "$98.22", "qty": 10 },
  { "id": 49, "name": "Cinnamon Rolls", "price": "$78.47", "qty": 13 },
  { "id": 50, "name": "Mint - Fresh", "price": "$72.53", "qty": 10 }];

  const calculate = ()=>
  {
    let sum_data = 0
    for(let data in cart)
    {

      let price =  parseInt(cart[data].amount.split('$')[1])
      let qty = parseInt(cart[data].qty)
     sum_data+=( price*qty);
    }
    // console.log(cart[0].amount.split('$')[1])
    setSum(sum_data)
    alert("the total bill is "+ sum)
  }

  const set_count = ()=>
  {
    let all_count = 0
    for(let data in cart)
    {
      all_count+=cart[data].qty
      console.log(cart[data].qty);
    }

    setCount(all_count)
  }
  const [cart,setCart] = useState([])
  const increment =(product)=> 
  {
    console.log("in increment");
    setCart(
      cart.map( (x)=> x.id == product.id ? {...product, qty: x.qty+1}: x ))
      set_count()
  }
  const onRemove = (product)=>
  {
    setCart(cart.filter((x)=> x.id !==  product.id))
    set_count()
  }
  const decrement =(product)=> 
  {

    setCart( cart.map((x)=> x.id == product.id ?  (   (x.qty>1) ? {...product,qty: x.qty-1} : x) : x  ))
    set_count()
  }
  
  const onAdd = (product)=> 
  {
 
    const exist = cart.find((x)=> x.id === product.id);
    if(exist)
    {
      // console.log("in true");
      setCart(
        cart.map( (x)=> x.id === product.id ? {...product, qty: x.qty+1}: x ))
 
    }
     
     else
      setCart([...cart,{...product,qty:1}])
      
      set_count()

      // alert('product added')
    }
  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <a className="navbar-brand" >Dot</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
      <Link className="nav-link" to="/">Home</Link>
      </li>
      <li className="nav-item">
        
      <Link className="nav-link" to="/products">Products</Link>
      </li>
      <li className="nav-item">
        
      <Link className="nav-link" to="/cart">Shopping Cart</Link>
      </li>

      
    </ul>
    <div className="form-inline ">
    <button className="btn btn-outline-success my-2 my-sm-0" onClick={calculate} >Check Out</button>

    </div>
  </div>
</nav>




          <div className="container">
      <nav className="navbar navbar-light">
        <ul className="nav navbar-nav">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
          <li>
            <Link to="/cart">Shopping Cart</Link>
          </li>
        </ul>
      </nav>

      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path="/products">
          <Products mock_data={mock_data} count={count} onAdd={onAdd} ></Products>
        </Route>
        <Route path="/cart">
          {/* <ShopingCart></ShopingCart> */}
          <ShoppingCart increment={increment}  onRemove = {onRemove} decrement={decrement} cart={cart}></ShoppingCart>
          </Route>
        {/* <PrivateRoute path="/admin" component={Admin} /> */}
      </Switch>
    </div>
  
    </div>
  );
}

export default App;
