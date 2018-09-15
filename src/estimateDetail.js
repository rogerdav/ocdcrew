import React, { Component } from "react";
 
class EstimateDetail extends Component {
  constructor(props) {
    super(props);
   
    };
  render() {
    const service = this.props.service;
    console.log('service in details component', service);
    let display;
    if (service === 'none') {
      display = <span>No service requested</span>
    } 
    if (service === 'biMonthly') {
      display = <span>Bi Monthly</span>
    } 
    if (service === 'monthly') {
      display = <span>Monthly</span>
    } 
    if (service === 'weekly') {
      display = <span>Weekly</span>
    } 
    if (service === 'move') {
      display = <span>Move In / Move Out</span>
    } 
    if (service === 'bnb') {
      display = <span>B 'n B</span>
    } 
    if (service === 'deep') {
      display = <span>Deep Clean</span>
    } 
    if (service === 'alacarte') {
      display = <span>A La Carte</span>
    } 
    if (service === 'office') {
      display = <span>Office / Commercial</span>
    } 
    return (
      <div>
        {display}

      </div>
    );
  }
}
 
export default EstimateDetail;
