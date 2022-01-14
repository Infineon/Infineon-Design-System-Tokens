import PropTypes from "prop-types";
import BsForm from "react-bootstrap/Form";
  
const propTypes = {
  /** Set a disabled Select radio button */
  disabled: PropTypes.bool,
};

export const RadioButton = ({ children, ...props }) => {
  return (
    <BsForm.Check type="radio" id="radioButton" label="Radio button" {...props}></BsForm.Check>
  );
};
RadioButton.propTypes = propTypes;
