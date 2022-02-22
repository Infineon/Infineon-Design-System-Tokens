import PropTypes from "prop-types";
import BsCarousel from "react-bootstrap/Carousel";
import imageSrc4_3 from "../../public/1440x1080_ratio-4-3.png";
import imageSrc16_9 from "../../public/1920x1080_ratio-16-9.png";
import imageSrc1_1 from "../../public/1080x1080_ratio-1-1.png";

const image4_3 = {
  src: imageSrc4_3,
  alt: "4-3-s",
};

const image16_9 = {
  src: imageSrc16_9,
  alt: "16-9-s",
};

const image1_1 = {
  src: imageSrc1_1,
  alt: "1-1-s",
};

const image_none = {
  src: imageSrc4_3,
  alt: "4-3-s",
};

const propTypes = {
  /** Specifies Carousel controls */
  controls: PropTypes.bool,

  /** Specifies Carousel indicators */
  indicators: PropTypes.bool,

  /** Specifies an aspect ratio to use for the image */
  aspectRatio: PropTypes.oneOf(["4:3", "16:9", "1:1", "none"]),  
};

const Image = ({ aspectRatio }) => {
  const aspectRatioClass = 
    aspectRatio === "4:3" ? "inf__aspect-ratio--4-3"
    : aspectRatio === "16:9" ? "inf__aspect-ratio--16-9"
    : aspectRatio === "1:1" ? "inf__aspect-ratio--1-1"
    : "";

  const imageSrc =
    aspectRatio === "4:3" ? image4_3.src
    : aspectRatio === "16:9" ? image16_9.src
    : aspectRatio === "1:1" ? image1_1.src
    : image_none.src;

  const imageAlt =
    aspectRatio === "4:3" ? image4_3.alt
    : aspectRatio === "16:9" ? image16_9.alt
    : aspectRatio === "1:1" ? image1_1.alt
    : image_none.alt;

  if ( aspectRatioClass === "" ) {
    return (
      <img className="inf__carousel__image" src={imageSrc} alt={imageAlt}/>
    )
  }
  return (
    <div className="inf__aspect-ratio__box-wrapper ">
      <div className={"inf__aspect-ratio__box " + aspectRatioClass}>
        <img className="inf__aspect-ratio__box__in" src={imageSrc} alt={imageAlt}/>
      </div>
    </div>
  )
};

export const Carousel = ({ aspectRatio, children, ...props }) => {
  return (
    <BsCarousel className="inf__carousel" {...props}>
      <BsCarousel.Item>
        <Image aspectRatio={aspectRatio}/>
        {children}
      </BsCarousel.Item>
      <BsCarousel.Item>
        <Image aspectRatio={aspectRatio}/>
        {children}
      </BsCarousel.Item>
      <BsCarousel.Item>
        <Image aspectRatio={aspectRatio}/>
        {children}
      </BsCarousel.Item>
    </BsCarousel>
  );
};
Carousel.propTypes = propTypes;
