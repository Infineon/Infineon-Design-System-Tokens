import PropTypes from "prop-types";
import imageSrc4_3 from "./4-3-s.png";
import imageSrc16_9 from "./16-9-s.png";
import imageSrc1_1 from "./1-1-s.png";

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

const propTypes = {
  /** Specifies an aspect ratio to use for the image */
  aspectRatio: PropTypes.oneOf(["4:3", "16:9", "1:1"]),

  /** Specifies the image position */
  imagePosition: PropTypes.oneOf(["left", "right"]),

  /** Specifies text alignment */
  alignItems: PropTypes.oneOf(["center", "top"]),

  /** Set the Paragraph title */
  title: PropTypes.string,

  /** Set the Paragraph text */
  text: PropTypes.string,
};

export const Paragraph = ({ children, aspectRatio, imagePosition, alignItems, ...props }) => {
  const aspectRatioClass = 
    aspectRatio === "4:3" ? "inf__aspect-ratio--4-3"
    : aspectRatio === "16:9" ? "inf__aspect-ratio--16-9"
    : aspectRatio === "1:1" ? "inf__aspect-ratio--1-1"
    : "";

  const imageSrc =
    aspectRatio === "4:3" ? image4_3.src
    : aspectRatio === "16:9" ? image16_9.src
    : aspectRatio === "1:1" ? image1_1.src
    : "";

  const imageAlt =
    aspectRatio === "4:3" ? image4_3.alt
    : aspectRatio === "16:9" ? image16_9.alt
    : aspectRatio === "1:1" ? image1_1.alt
    : "";

  const alignItemsClass =
    alignItems === "center" ? "align-items-center"
    : "";

  const Image = () => (
    <div className="inf__aspect-ratio__box-wrapper">
      <div className={"inf__aspect-ratio__box " + aspectRatioClass}>
        <img className="inf__aspect-ratio__box__in" src={imageSrc} alt={imageAlt}/>
      </div>
    </div>
  );

  return (
    <div className={"d-flex " + alignItemsClass} {...props}>
      {imagePosition === "left" 
        ? <><Image/> {children}</>
        : <>{children} <Image/></>
      }
    </div>
  )
};
Paragraph.propTypes = propTypes;
