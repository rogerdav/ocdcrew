import React, { Component } from "react";
 
class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    
    };

  handleChange(e) {
    // console.log('inside handlechange', e.target.value);
    this.props.onFormChange(e);
  }
  
  render() {
    return (
      
      <div id="contactForm">
        <form  className="contactFormClass" onSubmit={this.handleSubmit}> 
          <label className="fullWidth">
            Name:
            <input type="text" name="name" 
          onChange={this.handleChange} />
          </label>
          <label className="fullWidth">
            Email:
            <input type="text" name="email" onChange={this.handleChange} />
          </label>
          <label className="fullWidth">
            Phone:
            <input type="text" name="phone" onChange={this.handleChange} />
          </label>
          
          
          
          
          <label className="fullWidth">
            Message:
            <textarea name="message" onChange={this.handleChange} />
            
          </label>
          <label>
            <input id="submitButton" type="submit" value="Submit" />
          </label>
        </form>
      </div>
    );
  }
}
 
export default ContactForm;