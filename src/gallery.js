import React, { Component } from "react";
import Carousel from "./carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

 
class Gallery extends Component {
  render() {
    return (
      <div>
        <h2>Gallery</h2>
        <Carousel />
       

      </div>
    );
  }
}
 
export default Gallery;