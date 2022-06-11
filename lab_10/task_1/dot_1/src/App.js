
import './App.css';
import { Link, Route, Switch } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// import { Button } from 'semantic-ui-react'
import Products from './Products';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Home from './Home';
// import Product from './Product';
import { useEffect, useState } from 'react';
import ShoppingCart from './ShoppingCart';
import shoppingData from './shoppingData';

function App() {
  
  const notify = () => toast("Thanks For Shopping");

  const [count, setCount] = useState(0)
  const [sum, setSum] = useState(0);
  const [mock_data, setMock_Data] = useState(shoppingData);
  const [cart, setCart] = useState([])

  const calculated_method = () => {
    let sum_data = 0
    for (let data in cart) {

      let price = parseInt(cart[data].amount.split('$')[1])
      let qty = parseInt(cart[data].qty)
      sum_data += (price * qty);
    }
    setSum(sum_data)
  }
  const calculate = () => {

    alert("the total bill is " + sum)
  }

  const set_count = () => {
    let all_count = 0
    for (let data in cart) {
      all_count += cart[data].qty
    }

    setCount(all_count)
  }
  const increment = (product) => {

    const check_avail =
      mock_data.findIndex((x) => x.id === product.id)
    if (mock_data[check_avail].qty > 0) {
      setCart(
        cart.map((x) => x.id === product.id ? { ...product, qty: x.qty + 1 } : x))
      setMock_Data(mock_data.map((x) => x.id === product.id ? ((x.qty > 0) ? { ...x, qty: x.qty - 1 } : x) : x))
    }
    else {
      alert('no more your desired product')
    }

  }
  const onRemove = (product) => {
    const index_of_del_item =
      cart.findIndex((x) => x.id === product.id)
    setMock_Data(mock_data.map((x) => product.id === x.id ? { ...x, qty: x.qty + cart[index_of_del_item].qty } : x))
    setCart(cart.filter((x) => x.id !== product.id))
    set_count()
  }
  const decrement = (product) => {
    const index_of_del_item =
      cart.findIndex((x) => x.id === product.id)
    if (cart[index_of_del_item].qty > 1) {
      setMock_Data(mock_data.map((x) => product.id === x.id ? { ...x, qty: x.qty + 1 } : x))
      setCart(cart.map((x) => x.id == product.id ? ((x.qty > 1) ? { ...product, qty: x.qty - 1 } : x) : x))
    }
    else {
      onRemove(product);
    }
    set_count()
  }

  useEffect(() => {
  }, [])
  useEffect(() => {
    set_count()
    calculated_method()
  }, [mock_data])

  const onAdd = (product) => {


    const exist = cart.find((x) => x.id === product.id);
    const check_avail =
      mock_data.findIndex((x) => x.id === product.id)
    if (mock_data[check_avail].qty > 0) {
      if (exist) {

        setCart(
          cart.map((x) => x.id === product.id ? { ...product, qty: x.qty + 1 } : x))
        setMock_Data(mock_data.map((x) => x.id === product.id ? ((x.qty > 0) ? { ...x, qty: x.qty - 1 } : x) : x))

      }
      else
        setCart([...cart, { ...product, qty: 1 }])
      setMock_Data(mock_data.map((x) => x.id === product.id ? ((x.qty > 0) ? { ...x, qty: x.qty - 1 } : x) : x))
      set_count()
    }
    else 
    {
      alert('no more you desired product')
    }

    // alert('product added')
  }
  return (

    <div className="App">
      <ToastContainer />

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
            <button className="btn btn-outline-success my-2 my-sm-0" onClick={() => { calculate(); notify(); }}  >Check Out</button>

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
          <Route exact path="/" component={Home} >
          </Route>
          <Route path="/products">
            <Products mock_data={mock_data} count={count} onAdd={onAdd} ></Products>
          </Route>
          <Route path="/cart">
            <ShoppingCart increment={increment} onRemove={onRemove} decrement={decrement} cart={cart}></ShoppingCart>
          </Route>
        </Switch>
      </div>

    </div>
  );
}

export default App;
