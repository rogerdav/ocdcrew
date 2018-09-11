import React, { Component } from "react";
 
class Estimate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      phone: '',
      zip: '',
      service: 'biMonthly',
      bed: '',
      bath: '',
      common: '',

    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    console.log('your name is' + this.state.name);
    e.preventDefault();
  }
  handleInputChange(e) {
    console.log('target', e.target.value);
    console.log('target name', e.target.name);
    console.log('state service before setstate', this.state.service);
    this.setState({[e.target.name]: e.target.value});
    console.log('state service after setstate', this.state.service);
    
    

  }
  render() {
    return (
      <div>
        <h2>Request for Estimate</h2>
        
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
            <select>
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
            <select>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </label>
          <label>
            Common Areas:
            <select>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
          </label>
          <input type="submit" value="Submit" />
        </form>
        
      </div>
    );
  }
}
 
export default Estimate;