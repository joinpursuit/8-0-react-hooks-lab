import React,{useState} from "react";
import "./FirstPet.css";

const FirstPet = () => {
  const [checkStatus, setCheckStatus] = useState(false);

  const handleClick = () => {
    setCheckStatus(!checkStatus)
  }



  const showText = () => {
    if (checkStatus) {
      return "Yes";
    } else {
      return "No";
    }
  }
  
    return (
      <section className="first-pet">
        <h4>Is this your first pet?</h4>
        <br />
        <form>
          <input onClick={handleClick} type="checkbox" />
        </form>
      <h5>{showText()}</h5>
      </section>
    );
    }

export default FirstPet;
