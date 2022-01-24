import PropTypes from "prop-types";
import BsAlert from "react-bootstrap/Alert";

const propTypes = {
  /** Set Alert color */
  variant: PropTypes.oneOf([
    "primary",
    "secondary",
    "success",
    "danger",
    "warning",
    "color-gray-100",
  ]),

  /** Specifies a closable alert */
  closable: PropTypes.bool,
};

export const Alert = ({ closable, children, ...props }) => {
  return (
    <BsAlert {...props} dismissible={closable}>
      {children}
    </BsAlert>
  );
};
Alert.propTypes = propTypes;
