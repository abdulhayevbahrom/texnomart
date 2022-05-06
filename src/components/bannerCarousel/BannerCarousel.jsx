import React from "react";
import "./BannerCarousel.css";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

const handleDragStart = (e) => e.preventDefault();

const items = [
  <img
    width="100%"
    height="300px"
    src="https://texnomart.uz/uploads/slides/38659412.jpg"
    onDragStart={handleDragStart}
    alt="carousel img"
  />,
  <img
    width="100%"
    height="300px"
    src="https://texnomart.uz/uploads/slides/85441213.jpg"
    onDragStart={handleDragStart}
    alt="carousel img"
  />,
  <img
    width="100%"
    height="300px"
    src="https://texnomart.uz/uploads/slides/7459511920x400-uz.jpg"
    onDragStart={handleDragStart}
    alt="carousel img"
  />,
  <img
    width="100%"
    height="300px"
    src="https://texnomart.uz/uploads/slides/75098211.jpg"
    onDragStart={handleDragStart}
    alt="carousel img"
  />,
];

function BannerCarousel() {
  return (
    <div className="bannerCarousel">
      <AliceCarousel
        animationDuration={1000}
        disableButtonsControls={true}
        disableDotsControls={true}
        autoPlayInterval={3000}
        infinite={true}
        autoPlay={true}
        mouseTracking
        items={items}
      />
    </div>
  );
}

export default BannerCarousel;
