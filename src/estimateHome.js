import React, { Component } from "react";
import EstimateForm from "./estimateForm";
import EstimateDetail from './estimateDetail';
import './style/estimateHome.css';



 
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
    // console.log('the time of your request is  :' + this.state.date)
    // console.log('your name is' + this.state.name);
    // console.log('your email is' + this.state.email);
    // console.log('your phone is' + this.state.phone);
    // console.log('your zip is' + this.state.zip);
    // console.log('the service you requested is ' + this.state.service);
    // console.log('your beds are ' + this.state.bed);
    // console.log('your baths are' + this.state.bath);
    // console.log('your commons are' + this.state.common);
    e.preventDefault();
    console.log('name', this.state);
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
   console.log('after setstate in handle sumbit set to blank');
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

// render() {
//   const isLoggedIn = this.state.isLoggedIn;
//   return (
//     <div>
//       {isLoggedIn ? (
//         <LogoutButton onClick={this.handleLogoutClick} />
//       ) : (
//         <LoginButton onClick={this.handleLoginClick} />
//       )}
//     </div>
//   );
// }