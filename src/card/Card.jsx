import PropTypes from "prop-types";
import BsCard from "react-bootstrap/Card";

const propTypes = {
  /** Image URL */
  imageSrc: PropTypes.string,

  /** Set background color */
  background: PropTypes.oneOf(["primary"]),
};

export const Card = ({ imageSrc, background, children, ...props }) => (
  <BsCard bg={background} text={background && "white"} {...props}>
    {imageSrc && <BsCard.Img variant="top" src={imageSrc} />}
    {children}
  </BsCard>
);
Card.propTypes = propTypes;
