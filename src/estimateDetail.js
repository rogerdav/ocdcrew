import React, { Component } from "react";
 
class EstimateDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      service: '',
    }
    };
  render() {
    const service = this.state.service;
    return (
      {renderIf(1 + 2 === 3)(
        <span> No service requested</span>
      )}
    )
  }
}
 
export default EstimateDetail;


