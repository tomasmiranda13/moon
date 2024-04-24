import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../public/prueba.png";
import "../styles/carousel.css";

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    appendDots: (dots) => (
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <ul style={{ margin: "0" }}>{dots}</ul>
      </div>
    ),
  };

  return (
    <Slider className="slider-carousel" {...settings}>
      <div className="slider-img-container">
        <img src="prueba.png" alt="" />
      </div>

      <div className="slider-img-container">
        <img src="prueba.png" alt="" />
      </div>

      <div className="slider-img-container">
        <img src="prueba.png" alt="" />
      </div>

      {/* Agrega más elementos div para más slides */}
    </Slider>
  );
};
export default Carousel;
