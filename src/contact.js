import React, { Component } from "react";
import ContactForm from  './contactForm';
import './style/contactForm.css';
 
class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      phone: '',
      message: '',
      submitted: false,
      date: new Date(),

    };

    this.handleInputChange = this.handleInputChange.bind(this);
    
  }

  
  handleInputChange(e) {
    
    this.setState({[e.target.name]: e.target.value});
   console.log('state changed');
  }

  render() {
    return (
      
      <div>
        <div id="contactDetails">
          <h2>Contact</h2>
          <p>Please feel free to contact me via email or phone</p>
          <p>Cell: (206) 353 9012</p>
          <a href="mailto:davenport.mandy@gmail.com">Email:  davenport.mandy@gmail.com</a>
        </div>
        <div id="contactInput">
          <ContactForm onFormChange={this.handleInputChange} />
        </div>
      </div>
    );
  }
}
 
export default Contact;