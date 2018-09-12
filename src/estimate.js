import React, { Component } from "react";
import './estimate.css';
 
class Estimate extends Component {
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
   
    

  }
  render() {
    return (       
        <form className="estimateForm" onSubmit={this.handleSubmit}> 
          <label>
            Name:
            <input type="text" name="name" 
          onChange={this.handleInputChange} value={this.state.name}/>
          </label>
          <label>
            Email
            <input type="text" name="email" onChange={this.handleInputChange} value={this.state.email}/>
          </label>
          <label>
            Phone:
            <input type="text" name="phone" onChange={this.handleInputChange} value={this.state.phone} />
          </label>
          <label>
            Zip Code:
            <input type="text" name="zip" onChange={this.handleInputChange} value={this.state.zip} />
          </label>
          <label>
            Service Required 
            <select name="service" onChange={this.handleInputChange} service={this.state.service}>
              <option service="none">-------------</option>
              <option service="biMonthly">Bi Monthly</option>
              <option service="monthly">Monthly</option>
              <option service="weekly">Weekly</option>
              <option service="move">Move In / Move Out</option>
              <option service="bnb">B 'n B</option>
              <option service="deep">Deep Clean</option>
              <option service="alacarte">A La Carte</option>
              <option service="offie">Office / Commercial</option>

            </select>
          </label>
          <label>
            Bedrooms:
            <select name="bed" onChange={this.handleInputChange} bed={this.state.bed}>
              <option bed="1">1</option>
              <option bed="2">2</option>
              <option bed="3">3</option>
              <option bed="4">4</option>
              <option bed="5">5</option>
              <option bed="6">6</option>
            </select>
          </label>
          <label>
            BathRooms:
            <select name="bath" onChange={this.handleInputChange} bath={this.state.bath}>
              <option bath="1">1</option>
              <option bath="2">2</option>
              <option bath="3">3</option>
              <option bath="4">4</option>
              <option bath="5">5</option>
            </select>
          </label>
          <label>
            Common Areas:
            <select name="common" onChange={this.handleInputChange} common={this.state.common}>
              <option common="1">1</option>
              <option common="2">2</option>
              <option common="3">3</option>
              <option common="4">4</option>
            </select>
          </label>
          <label>
            <input type="submit" value="Submit" />
          </label>
        </form>
        
      
    );
  }
}
 
export default Estimate;