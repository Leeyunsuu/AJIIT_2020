import React from 'react';
import PropTypes from "prop-types";


class App extends React.Component{
  state ={
    count: 0
  };
  plus = () => {
    console.log("plus");
    this.setState(current => ({count: current.count +1}));
  };
  minus = () => {
    console.log("minus");
    this.setState(current => ({count: current.count +1}));
  };
  render() {
    return (
    <div>
      <h1> Class Component 입니다.{this.state.count}</h1>
      <button onClick={this.plus}>Plus</button>
      <button onClick={this.minus}>Minus</button>
    </div>
    );
  }
}

export default App;
