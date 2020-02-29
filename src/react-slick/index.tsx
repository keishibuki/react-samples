import * as React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ReactSlick = () => {
  return (
    <div>
      <h2>React Slick</h2>
      <Slider slidesToShow={1} slidesToScroll={1} speed={500} dots infinite>
        <div>a</div>
        <div>b</div>
        <div>c</div>
      </Slider>
    </div>
  );
};

export default ReactSlick;
