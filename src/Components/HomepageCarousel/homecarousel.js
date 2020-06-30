import React, { Component } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { photos } from "./carouseldata";

export default class HomeCarousel extends Component {
  render() {
    const settings = {
      dots: true,
      fade: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      arrows: true,
      slidesToScroll: 1,
      className: "slides",
    };
    return (
      <div>
        <Slider {...settings}>
          {photos.map((photo) => {
            return (
              <div>
                <img width="100%" src={photo.url} alt="Map" />
              </div>
            );
          })}
        </Slider>
      </div>
    );
  }
}
