import React from "react";
import "./FirstPet.css";

class FirstPet extends React.Component {
  constructor(){
    super();

    this.state = {
      display: true,
    }
  }

  handleCheckbox=(e)=>{
    this.setState({
      display: e.target.checked,
    })
  }

  render() {
    return (
      <section className="first-pet">
        <h4>Is this your first pet?</h4>
        <br />
        <form>
          <input 
            type="checkbox" 
            onChange={this.handleCheckbox}
            checked={this.state.display}
          />
        </form>
        <h5>{ this.state.display ? "Yes" : "No" }</h5>
      </section>
    );
  }
}

export default FirstPet;
