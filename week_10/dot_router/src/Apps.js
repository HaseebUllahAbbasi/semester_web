import './App.css';
import { Route, Switch } from 'react-router-dom';
import Contact from './Contact'
import About from './About';
import Home from './Home';
import NotFound from './NotFound';
function AppA() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/"  component={Home}></Route>
        <Route exact path="/contact"  component={Contact}></Route>
        <Route exact path="/about" component={About}></Route>
        <Route  component={NotFound}>  </Route>
      </Switch>


      
      {/* <Contact/>
      <About></About> */}
      </div>
  );
}

export default AppA;
