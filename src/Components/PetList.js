import React from "react";
import Pet from "./Pet";
import "./PetList.css";

const BASE_URL = "http://localhost:5000/api";

class PetList extends React.Component {
  constructor(){
    super();

    this.state={
      animalData: [],
    }
  }

  fetchAnimalData=()=>{
    fetch("https://raw.githubusercontent.com/joinpursuit/resource-veterinarian-api/main/data/db.json")
      .then(res=>res.json())
      .then((data)=>{
        this.setState({
          animalData: data.pets,
        })
      })
  }

  componentDidMount=()=>{
    this.fetchAnimalData();
  }

  render() {
    const petList = this.state.animalData.map((pet)=>{
      return (
        <div>
          <h5>
            {pet.name}
            <br />
            {pet.breed}
            <br />
            {pet.kind}
          </h5>
        </div>
      )
    })

    return (
      <section className="pet-list">
        <h4>All Pets</h4>
        <article>{ petList }</article>
      </section>
    );
  }
}

export default PetList;
