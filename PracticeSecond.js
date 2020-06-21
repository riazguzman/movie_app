import React from "react";
import PropTypes from "prop-types";

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {count : 0}
  }
  add = () => {
    this.setState(current => ({count : current.count + 1}));
  }
  minus = () => {
    this.setState(current => ({count : current.count - 1}));
  }
  componentDidMount(){
    console.log("component has rendered")
  }
  componentDidUpdate(){
    console.log("I have been updated")
  }
  render() {
    console.log("I am rendering");
      return (
      <div>
        <h1>The number is {this.state.count}</h1>
        <button onClick={this.add}>Add</button>
        <button onClick={this.minus}>Minus</button>
      </div>
    );
  }  
}
// React automatically executes the render method of the class component.

export default App;
// A comoponent is a function that returns html.
