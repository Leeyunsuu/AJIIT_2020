import React from 'react';
import PropTypes from "prop-types";


class App extends React.Component{
  constructor(props){
    super(props);
    console.log("Hello");
  };
  state ={
    count: 0
  };
  plus = () => {
    console.log("plus");
    this.setState(current => ({count: current.count +1})); //Component update
  };
  minus = () => {
    console.log("minus");
    this.setState(current => ({count: current.count -1}));
  };
  componentDidMount(){ //Compiled하고 마지막에
    console.log("component rendered");
  }
  componentDidUpdate(){  //Component가 Update된 후
    console.log("component did update")
  }
  componentWillUnmount(){ //Component가 Unmount 후
    console.log("Component die!");
  }
  render() {
    console.log("render");
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
