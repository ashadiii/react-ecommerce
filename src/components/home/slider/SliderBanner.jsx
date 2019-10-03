 
import React, { Component } from "react";
import Slider from "react-slick";

class SliderBanner extends Component {
  render() {
  	const settings = {
      dots: false,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      speed: 500,
      autoplaySpeed: 2000,
      cssEase: "linear",
      arrows: true,
      className: "carousel-inner"
    };
    return (      
    	<div className="slidershow-container">
            <div className="container">
                <div className="slidershow-content">
                    <Slider {...settings}>
			            <div className="item"><a href="#" title="banner1"><img src={require('./images/Futurelife-slideshow1.jpg')}/></a></div>
			            <div className="item"><a href="#" title="banner2"><img src={require('./images/Futurelife-slideshow1.jpg')}/></a></div>
			            <div className="item"><a href="#" title="banner3"><img src={require('./images/Futurelife-slideshow1.jpg')}/></a></div>
			        </Slider>
                </div>
            </div>
      	</div>
    );
  }
}

export default SliderBanner;
 
