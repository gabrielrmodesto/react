import React, { Component } from "react";
import PropType from "prop-types";

class Counter extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { value, increment, decrement } = this.props;
    return (
      <div>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <p>{value}</p>
      </div>
    );
  }
}
Counter.PropType ={
    value: PropType.number.isRequired,
    increment: PropType.func.isRequired,
    decrement: PropType.func.isRequired,
}
export default Counter;
