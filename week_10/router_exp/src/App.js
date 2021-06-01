import React from "react";
import { Link, Route, Switch } from "react-router-dom";

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
);

const Category = () => (
  <div>
    <h2>Category</h2>
  </div>
);

const Products = () => (
  <div>
    <h2>Products</h2>
  </div>
);

export default function App() {
  return (
    <div>
      <nav className="navbar navbar-light">
        <ul className="nav navbar-nav">
          <li>
            <Link to="/" >Home</Link>
          </li>
          <li>
            <Link to="/category" >Category</Link>
          </li>
          <li>
            <Link to="/product" >Products</Link>
          </li>
          <li>
            <Link to="/*" >Not Found</Link>
          </li>
          
        </ul>
      </nav>

      { /* Route components are rendered if the path prop matches the current URL */}
      <Route path="/" exact><Home /></Route>
      <Route path="/category" exact><Category /></Route>
      <Route path="/products" exact><Products /></Route>
    </div>
  );
}