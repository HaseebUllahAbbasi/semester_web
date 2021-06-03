import React, { useEffect } from "react";

// componentDidMount 
// class Com extends React.Component {
//   componentDidMount() {
//     console.log("Behavior before the component is added to the DOM");
//   }
 
//   render() {
//     return <h1>Hello World</h1>;
//   }
// };

// ComponentDidupdate
// class Com extends React.Component {
//   componentDidUpdate() {
//     console.log("Behavior when the component receives new state or props.");
//   }
 
//   render() {
//     return <h1>Helloa World</h1>;
//   }
// };

class Com extends React.Component {
  componentDidUpdate(prevProps) {
        if (this.props.foo !== prevProps.foo) {
        console.log("Behavior when the value of 'foo' changes.");
        }
  }
 
  render() {
    return <h1>Hello World</h1>;
  }
};

 
// const Com = () => {
  
//   useEffect(() => {
//     console.log("Behavior before the component is added to the DOM");
//   }, []);
 
//   return <h1>Hello World</h1>;
// };

// const Com = () => {
//   useEffect(() => {
//     console.log("Behavior when the component receives new state or props.");
//   });
 
//   return <h1>Hello World</h1>;
// };

export default Com;
