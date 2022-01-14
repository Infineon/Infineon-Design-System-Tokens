import PropTypes from "prop-types";
import BsForm from "react-bootstrap/Form";
  
const propTypes = {
  /** Set a disabled Checkbox */
  disabled: PropTypes.bool,
};

export const Checkbox = ({ children, ...props }) => {
  return (
    <BsForm.Check type="checkbox" id="checkbox" label="Checkbox" {...props}></BsForm.Check>
  );
};
Checkbox.propTypes = propTypes;
