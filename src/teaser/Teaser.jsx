import PropTypes from "prop-types";
import BsCard from "react-bootstrap/Card";

const propTypes = {
  /** Set the Teaser title */
  title: PropTypes.string,

  /** Set the Teaser text */
  text: PropTypes.string,

  /** Set the Teaser subtitle text */
  subtitleText: PropTypes.string,
};

export const Teaser = ({ children, ...props }) => (
  <BsCard {...props}>
    {children}
  </BsCard>
);
Teaser.propTypes = propTypes;
