import PropTypes from "prop-types";
import BsForm from "react-bootstrap/Form";
  
const propTypes = {
  /** Set a disabled Switch */
  disabled: PropTypes.bool,
};

export const Switch = ({ children, ...props }) => {
  return (
    <BsForm.Check type="switch" id="switch" label="Default" {...props}></BsForm.Check>
  );
};
Switch.propTypes = propTypes;
