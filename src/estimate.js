import React, { Component } from "react";
 
class Estimate extends Component {
  render() {
    return (
      <div>
        <h2>Request for Estimate</h2>
        
        <form className="estimateForm"> 
          <label>
            Name:
            <input type="text" name="name" />
          </label>
          <label>
            Email
            <input type="text" name="name" />
          </label>
          <label>
            Phone:
            <input type="text" name="name" />
          </label>
          <label>
            Zip Code:
            <input type="text" name="name" />
          </label>
          <label>
            Service Required 
            <select>
              <option value="biMonthky">Bi Monthly</option>
              <option value="monthly">Monthly</option>
              <option value="weekly">Weekly</option>
              <option value="move">Move In / Move Out</option>
              <option value="bnb">B 'n B</option>
              <option value="deep">Deep Clean</option>
              <option value="alacarte">A La Carte</option>
              <option value="offie">Office / Commercial</option>

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

        </form>
        
      </div>
    );
  }
}
 
export default Estimate;