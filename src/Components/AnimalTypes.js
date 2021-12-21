import React from "react";
import "./AnimalTypes.css";

const animalTypes = ["dog", "cat", "ferret", "bird", "fish", "snake", "lizard"];

class AnimalTypes extends React.Component {
  constructor(){
    super();

    this.state = {
      newAnimalArr: [],
      userInput: '',
    }
  }

  handleInput=(event)=>{
    event.preventDefault();
    this.setState({
      userInput: event.target.value,
    })
  }

  // addToList=(event)=>{
  //   this.setState({
  //     animalArr: this.state.animalArr + event.target.value
  //   })
  // }

  removeButton=(event)=>{
    this.setState({
      animalArr: event.target.value,
    })
  }

  render() {
    const animalList = animalTypes.map((animal, index)=>{
      return (
        <div key={index}>
          <li>{animal}<button onClick={this.removeButton}>-</button></li>
        </div>
      )
    })

    return (
      <section className={"animal-types"}>
        <h4>Animal Types</h4>
        <form onClick={this.handleInput}>
          <label htmlFor="type">
            <input type="text" id="animal-type" />
          </label>
          <input type="submit" />
        </form>
        <ol>{animalList}</ol>
      </section>
    );
  }
}

export default AnimalTypes;
