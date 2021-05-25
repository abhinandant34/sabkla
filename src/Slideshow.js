
import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import './Slideshow.css'

const slideImages = [
  "/images/1.png",
  "/images/2.png",
  "/images/3.png"
];

const Slideshow = () => {
    return (
      <div className="crausel">
        <br/>
        <br/>
        <Slide easing="ease" className="arrow__slideshow">
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[0]})`}}>
              
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[1]})`}}>
             
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[2]})`}}>
             
            </div>
          </div>
          </Slide>

      </div>
    )
};

export default Slideshow;
