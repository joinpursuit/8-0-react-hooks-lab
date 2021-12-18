import React from "react";
import "./NumberOfPets.css";

class NumberOfPets extends React.Component {
  constructor(){
    super();

    this.state = {
      count: 1,
    }
  }
  
  handleIncrement=()=>{
    this.setState({
      count: this.state.count + 1,
    })
  }

  handleDecrement=()=>{
    this.setState({
      count: this.state.count - 1,
    })
  }
  
  render() {
    return (
      <section className="num-of-pets">
        <h4>Number of Pets</h4>
        <h5>{ this.state.count }</h5>
        <div>
          <button onClick={this.handleDecrement} id="less">-</button>
          <button onClick={this.handleIncrement} id="more">+</button>
        </div>
      </section>
    );
  }
}

export default NumberOfPets;
