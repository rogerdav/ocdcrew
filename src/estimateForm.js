import React, { Component } from "react";
import './style/estimateHome.css';
 
class EstimateForm extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    };

  handleChange(e) {
    // console.log('inside handlechange', e.target.value);
    this.props.onFormChange(e);
  }
  handleSubmit(e) {
    this.props.onFormSubmit(e);
  }
  
  render() {
    return (       
        <form  className="estimateFormClass" onSubmit={this.handleSubmit}> 
          <label className="fullWidth">
            Name:
            <input type="text" name="name" 
          onChange={this.handleChange} />
          </label>
          <label className="fullWidth">
            Email
            <input type="text" name="email" onChange={this.handleChange} />
          </label>
          <label className="fullWidth">
            Phone:
            <input type="text" name="phone" onChange={this.handleChange} />
          </label>
          <label className="fullWidth">
            Zip Code:
            <input type="text" name="zip" onChange={this.handleChange} />
          </label>
          <label>
            Service Required 
            <select name="service" className="alignRight" onChange={this.handleChange} >
              <option value="none">-------------</option>
              <option  value="biMonthly">Bi Monthly</option>
              <option value="monthly">Monthly</option>
              <option value="weekly">Weekly</option>
              <option value="move">Move In / Move Out</option>
              <option value="bnb">B 'n B</option>
              <option value="deep">Deep Clean</option>
              <option value="alacarte">A La Carte</option>
              <option value="office">Office / Commercial</option>

            </select>
          </label>
          <label>
            Bedrooms:
            <select name="value" className="alignRight" onChange={this.handleChange} >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
            </select>
          </label>
          <label>
            BathRooms:
            <select name="bath" className="alignRight" onChange={this.handleChange}>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </label>
          <label>
            Common Areas:
            <select name="common" className="alignRight" onChange={this.handleChange} >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
          </label>
          <label>
            <input id="submitButton" type="submit" value="Submit" />
          </label>
        </form>
        
      
    );
  }
};
 
export default EstimateForm;