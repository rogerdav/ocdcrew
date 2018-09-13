import React, { Component } from "react";
import EstimateForm from "./estimateForm";
import './estimateHome.css';


 
class EstimateHome extends Component {
  render() {
    return (
      <div id="esContainer">
        <h2>Rdequest an Estimate</h2>
        <div id="estimateForm" className="inline">
         <EstimateForm />

        </div>
        <div id="estimateDetail" className="inline">
        this is a test message
        </div>
        <div id="estimateFloatClear"></div>
      </div>
    );
  }
}
 
export default EstimateHome;