import React, {useState} from "react";
import "./NewClient.css";

const NewClient = () => {
    const [ handleForm, setHandleForm] = useState({
      firstName: "",
       lastName: "", 
       phone: "", 
       email: ""
    })

//tracking the input so we can get its value
    const handleInputs = (event) => {
      setHandleForm({ ...handleForm, [event.target.name]: event.target.value})
    }
    //auto updates handleform based on the key and value
    //spread op moves keyvalues outside of its current object and puts it in the outer obj
    //target name = states, value = userinput

    return (
      <section className="new-client">
        <h4>New Client Info</h4>
        <div>
          <form>
            <label htmlFor="firstName">First Name</label>
            <input onChange={handleInputs} type="text" id="firstName" name="firstName" />
            <label onChange={handleInputs} htmlFor="lastName">Last Name</label>
            <input onChange={handleInputs} type="text" id="lastName" name="lastName" />
            <label onChange={handleInputs}htmlFor="phone">Telephone</label>
            <input onChange={handleInputs} type="tel" id="phone" name="phone" />
            <label onChange={handleInputs} htmlFor="email">Email</label>
            <input onChange={handleInputs} type="email" id="email" name="email" />
          </form>
          <article>
            <h5>{handleForm.firstName}</h5>
            <h5>{handleForm.lastName}</h5>
            <h5>{handleForm.phone}</h5>
            <h5>{handleForm.email}</h5>
          </article>
        </div>
      </section>
    );

}

export default NewClient;
