import React, { Component } from "react";
import EstimateForm from "./estimateForm";
import estimateDetail from './estimateDetail';
import './estimateHome.css';
import EstimateDetail from "./estimateDetail";


 
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
      date: new Date(),

    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    console.log('the time of your request is  :' + this.state.date)
    console.log('your name is' + this.state.name);
    console.log('your email is' + this.state.email);
    console.log('your phone is' + this.state.phone);
    console.log('your zip is' + this.state.zip);
    console.log('the service you requested is ' + this.state.service);
    console.log('your beds are ' + this.state.bed);
    console.log('your baths are' + this.state.bath);
    console.log('your commons are' + this.state.common);
    e.preventDefault();
  }
  handleInputChange(e) {
    
    this.setState({[e.target.name]: e.target.value});
   console.log('state changed');
    

  }
  render() {
    return (
      <div id="esContainer">
        <h2>Request an Estimate</h2>
        <div id="estimateForm" className="inline">
         <EstimateForm onFormChange={this.handleInputChange} onFormSubmit={this.handleSubmit}/>

        </div>
        <div id="estimateDetail" className="inline">
        <EstimateDetail />
        </div>
        <div id="estimateFloatClear"></div>
      </div>
    );
  }
}
 
export default EstimateHome;