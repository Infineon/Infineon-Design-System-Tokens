import PropTypes from "prop-types";
import BsCard from "react-bootstrap/Card";

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

  /** Set Card example links */
  links: PropTypes.bool,
};

export const Card = ({ children, ...props }) => (
  <BsCard {...props}>
    {children}
  </BsCard>
);
Card.propTypes = propTypes;
