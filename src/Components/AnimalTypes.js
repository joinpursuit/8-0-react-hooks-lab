import React from "react";
import "./AnimalTypes.css";

const animalTypes = ["dog", "cat", "ferret", "bird", "fish", "snake", "lizard"];

const AnimalTypes = () => {
  const remove = (e) => {
    const {key} = e.target.__reactFiber$lsvr2t459n
    console.log(key)
  }
  return (
    <section className={"animal-types"}>
      <h4>Animal Types</h4>
      <form>
        <label htmlFor="type">
          <input type="text" id="animal-type" />
        </label>
        <input type="submit" />
      </form>
      <ol>
      {animalTypes.map((type)=>{
          return( 
            <div className="animal-types">
            <li>{type}</li>
            <button key = {type} onClick ={remove}>Remove</button>
            </div>
          )
        })
      }
      </ol>
    </section>
  );
};

export default AnimalTypes;
