import logo from './logo.svg';
import './App.css';
import React from 'react';

class A extends React.Component
{
  render()
  {
    return (
      <h1>{this.props.title}</h1>
    )
  }

}

class B extends React.Component
{
  render()
  {
    return (
      <A title="A"> </A>
    )
  }

}
function App() {
  return (
    <div className="App">
      
    </div>
  );
}

export default B;
