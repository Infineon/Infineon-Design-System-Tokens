import PropTypes from "prop-types";
import BsCarousel from "react-bootstrap/Carousel";

const propTypes = {
  /** Specifies Carousel controls */
  controls: PropTypes.bool,

  /** Specifies Carousel indicators */
  indicators: PropTypes.bool,
};

export const Carousel = ({ children, ...props }) => {
  return (
    <BsCarousel {...props}>
      <BsCarousel.Item>
        <img
          className="d-block w-100"
          src="holder.js/800x400?text=First slide&bg=373940"
          alt="First slide"
        />
        {children}
      </BsCarousel.Item>
      <BsCarousel.Item>
        <img
          className="d-block w-100"
          src="holder.js/800x400?text=Second slide&bg=282c34"
          alt="Second slide"
        />
        {children}
      </BsCarousel.Item>
      <BsCarousel.Item>
        <img
          className="d-block w-100"
          src="holder.js/800x400?text=Third slide&bg=20232a"
          alt="Third slide"
        />
        {children}
      </BsCarousel.Item>
    </BsCarousel>
  );
};
Carousel.propTypes = propTypes;
