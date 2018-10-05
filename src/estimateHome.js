import React, { Component } from "react";
import EstimateForm from "./estimateForm";
import EstimateDetail from './estimateDetail';
import './style/estimateHome.css';
import sendEmail from './sendEmail';



 
class EstimateHome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      phone: '',
      zip: '',
      service: 'none',
      bed: '',
      bath: '',
      common: '',
      submitted: false,
      date: new Date(),

    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    
    this.setState({
      name: '',
      email: '',
      phone: '',
      zip: '',
      service: 'none',
      bed: '',
      bath: '',
      submitted: true,
      common: '',
      date: '',
    });
    console.log('value of beds before email', this.state.bed)
    sendEmail(this.state);
    console.log('test env variable', process.env.REACT_APP_AWS_KEY_ID)
   
  }
  handleInputChange(e) {
    
    this.setState({[e.target.name]: e.target.value});
   console.log('state changed');
   

  }
  render() {
    
    const isSubmitted = this.state.submitted;
    console.log('isSubmitted', isSubmitted)
    return (
      <div id="esContainer">
        <h2>Request an Estimate</h2>
        <div id="estimateForm" >
        {!isSubmitted ? (
          <EstimateForm onFormChange={this.handleInputChange} onFormSubmit={this.handleSubmit}/>

        ) : (
          <h4>Thank you for your enquiry, you should hear from us within 2 business days</h4>
        )}

        </div>
        <div id="estimateDetail" className="inline">
        {!isSubmitted ? (
          <EstimateDetail service={this.state.service}/>

        ) : (
          null
        )

        }
        </div>
        <div id="estimateFloatClear"></div>
      </div>
    );
  }
}
 
export default EstimateHome;

