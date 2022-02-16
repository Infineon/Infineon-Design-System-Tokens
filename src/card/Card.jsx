import PropTypes from "prop-types";
import BsCard from "react-bootstrap/Card";
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
  /** Set the Card title */
  title: PropTypes.string,

  /** Set the Card text */
  text: PropTypes.string,

  /** Set the Card header text */
  headerText: PropTypes.string,

  /** Set the Card subtitle text */
  subtitleText: PropTypes.string,

  /** Set the Card footer text */
  footerText: PropTypes.string,

  /** Set Card example button */
  button: PropTypes.bool,

  /** Set Card example button */
  buttonIcon: PropTypes.bool,

  /** Set Card example links */
  links: PropTypes.bool,

  /** Set Card image */
  image: PropTypes.bool,

  /** Specifies an aspect ratio to use for the image */
  aspectRatio: PropTypes.oneOf(["4:3", "16:9", "1:1", "none"]),

  /** Specifies the direction for the image */
  direction: PropTypes.oneOf(["vertical", "horizontal"]),
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
      <img className="inf__card__image" src={imageSrc} alt={imageAlt}/>
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

export const Card = ({ aspectRatio, direction, image, children, ...props }) => {
  if ( image ) {
    if (direction === "horizontal") {
      return (
        <BsCard className="inf__card__horizontal" {...props}>
  
        <div className="row no-gutters">
        <div className="col-md-4">
          <Image aspectRatio={aspectRatio}/>
        </div>
        <div className="col-md-8">
          {children}
        </div>
      </div>
      </BsCard>
      )
    } else {
      return (
        <BsCard className="inf__card" {...props}>
          <Image aspectRatio={aspectRatio}/>
          {children}
        </BsCard>
      )
    }
  } else {
    return (
      <BsCard className="inf__card" {...props}>
        {children}
      </BsCard>
    )
  }
};
Card.propTypes = propTypes;
