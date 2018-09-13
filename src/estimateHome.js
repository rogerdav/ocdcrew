import React, { Component } from "react";
import Estimate from "./estimate";
import './estimateHome.css';


 
class EstimateHome extends Component {
  render() {
    return (
      <div id="esContainer">
        <h2>Rdequest an Estimate</h2>
        <span id="estimateForm" className="inline">
         <Estimate />
        </span>
        <span id="estimateDetail" className="inline">
        this is a test message
        </span>
      </div>
    );
  }
}
 
export default EstimateHome;