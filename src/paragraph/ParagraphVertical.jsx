import PropTypes from "prop-types";
import imageSrc4_3 from "../../public/1440x1080_ratio-4-3.png";

const image4_3 = {
  src: imageSrc4_3,
  alt: "4-3-s",
};

const propTypes = {
  /** Set the Paragraph title */
  title: PropTypes.string,

  /** Set the Paragraph text */
  text: PropTypes.string,

  /** Specifies the image position */
  imagePosition: PropTypes.oneOf(["top", "bottom"]),
};

const Image = () => (
  <img className="inf__paragraph-vertical__img" src={image4_3.src} alt={image4_3.alt}/>
);

export const ParagraphVertical = ({ imagePosition, children, ...props }) => {
  if ( imagePosition === "top" ) {
    return (
      <div className="inf__paragraph inf__paragraph-vertical" {...props}>
        <Image/>
        {children}
      </div>
    )
  } else {
    return (
      <div className="inf__paragraph inf__paragraph-vertical" {...props}>
        {children}
        <Image/>
      </div>
    )
  }
};
ParagraphVertical.propTypes = propTypes;
