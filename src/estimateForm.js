import React, { Component } from "react";
import './estimateHome.css';
 
class EstimateForm extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    };

  handleChange(e) {
    console.log('inside handlechange', e.target.value);
    this.props.onFormChange(e);
  }
  handleSubmit(e) {
    this.props.onFormSubmit(e);
  }
  
  render() {
    return (       
        <form className="estimateFormClass" onSubmit={this.handleSubmit}> 
          <label>
            Name:
            <input type="text" name="name" 
          onChange={this.handleChange} />
          </label>
          <label>
            Email
            <input type="text" name="email" onChange={this.handleChange} />
          </label>
          <label>
            Phone:
            <input type="text" name="phone" onChange={this.handleChange} />
          </label>
          <label>
            Zip Code:
            <input type="text" name="zip" onChange={this.handleChange} />
          </label>
          <label>
            Service Required 
            <select name="service" onChange={this.handleChange} >
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
            <select name="bed" onChange={this.handleChange} >
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
            <select name="bath" onChange={this.handleChange}>
              <option bath="1">1</option>
              <option bath="2">2</option>
              <option bath="3">3</option>
              <option bath="4">4</option>
              <option bath="5">5</option>
            </select>
          </label>
          <label>
            Common Areas:
            <select name="common" onChange={this.handleChange} >
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
};
 
export default EstimateForm;