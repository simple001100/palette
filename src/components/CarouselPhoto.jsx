import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Carousel.css";

export const CarouselPhoto = ({ images, nameCarousel, interval }) => {
  return (
    <div className="carousel-wrapper">
      <div className="carousel-header">{nameCarousel}</div>
      <Carousel className="carousel-custom">
        {images.map((image) => {
          return (
            <Carousel.Item interval={interval} pause="hover" key={`${image._id}-${image.index}`}>
              <img
                className="d-block w-100"
                src={image.picture}
                alt={`${nameCarousel} age-${image.age}`}
              />
              <Carousel.Caption>
                <p>{nameCarousel}</p>
              </Carousel.Caption>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </div>
  );
};
