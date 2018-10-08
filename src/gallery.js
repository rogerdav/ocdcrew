import React, { Component } from "react";
import Carousel from "./carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './style/gallery.css';

 
class Gallery extends Component {
  render() {
    return (
      <div id="gallery">
        <h2 className="galleryHeading">Gallery</h2>
        <div className="smallCarousel">
        <Carousel id="picsView"/>

        </div>
       

      </div>
    );
  }
}
 
export default Gallery;