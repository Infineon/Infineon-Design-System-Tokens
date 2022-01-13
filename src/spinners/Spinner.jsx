import PropTypes from "prop-types";
import BsSpinner from "react-bootstrap/Spinner";

const propTypes = {
  /** Specifies a small spinner */
  size: PropTypes.oneOf(["sm"]),

  /** Specifies the animation type of the spinner */
  animation: PropTypes.oneOf(["border", "grow"]),
};

export const Spinner = ({ children, ...props }) => {
  return (
    <BsSpinner role="status" {...props}>
      <span className="visually-hidden">Loading...</span>
    </BsSpinner>
  );
};
Spinner.propTypes = propTypes;
