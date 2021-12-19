import React from "react";
import "./NewClient.css";

class NewClient extends React.Component {
  constructor(){
    super();

    this.state={
      firstName: '',
      lastName: '',
      phone: '',
      email: '',
    }
  }

  handleFirstNameInput=(e)=>{
    this.setState({
      firstName: e.target.value,
    })
  }

  handleLastNameInput=(e)=>{
    this.setState({
      lastName: e.target.value,
    })
  }

  handlePhoneInput=(e)=>{
    this.setState({
      phone: e.target.value,
    })
  }

  handleEmailInput=(e)=>{
    this.setState({
      email: e.target.value,
    })
  }


  render() {
    return (
      <section className="new-client">
        <h4>New Client Info</h4>
        <div>
          <form>
            <label htmlFor="firstName">First Name</label>
            <input 
              type="text" 
              id="firstName" 
              onChange={this.handleFirstNameInput}
            />
            <label htmlFor="lastName">Last Name</label>
            <input 
              type="text" 
              id="lastName" 
              onChange={this.handleLastNameInput}
            />
            <label htmlFor="phone">Telephone</label>
            <input 
              type="tel" 
              id="phone" 
              onChange={this.handlePhoneInput}
            />
            <label htmlFor="email">Email</label>
            <input 
              type="email" 
              id="email" 
              onChange={this.handleEmailInput}
            />
          </form>
          <article>
            <h5 onChange={this.handleFirstNameInput}>{ this.state.firstName }</h5>
            <h5 onChange={this.handleLastNameInput}>{ this.state.lastName }</h5>
            <h5 onChange={this.handlePhoneInput}>{ this.state.phone }</h5>
            <h5 onChange={this.handleEmailInput}>{ this.state.email }</h5>
          </article>
        </div>
      </section>
    );
  }
}

export default NewClient;
