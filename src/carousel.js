import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default () => (
  <Carousel autoPlay="true" dynamicHeight="true">
    <div>
      <img src={require('./pics/pic1.jpg')} alt="missing pic one file" width="480px"/>
      <p className="legend">Pic 1</p>
    </div>
    <div>
      <img src={require('./pics/test2.gif')} alt="missing pic one file"  />
      <p className="legend">pic 2</p>
    </div>
    <div>
      <img src={require('./pics/test3.gif')} alt="missing pic one file" />
      <p className="legend">pic3 3</p>
    </div>
    <div>
      <img src={require('./pics/pic4.jpg')} alt="missing pic one file" />
      <p className="legend">Pic 4</p>
    </div>
    <div>
      <img src={require('./pics/pic5.jpg')}alt="missing pic one file" />
      <p className="legend">Pic 5</p>
    </div>
    <div>
      <img src={require('./pics/pic6.jpg')} alt="missing pic one file" />
      <p className="legend">Pic 6</p>
    </div>
    {/* <div>
      <img src={require('./pics/pic7.jpg')} alt="missing pic one file" />
      <p className="legend">Pic 7</p>
    </div>
     */}
  </Carousel>
);

