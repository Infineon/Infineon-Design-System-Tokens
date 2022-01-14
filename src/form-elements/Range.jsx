import PropTypes from "prop-types";
import BsForm from "react-bootstrap/Form";
  
const propTypes = {
  /** Set a disabled Range */
  disabled: PropTypes.bool,
};

export const Range = ({ disabled, children, ...props }) => {
  return (
    <div {...props}>
      <BsForm.Label>Example range</BsForm.Label>
      <BsForm.Range disabled={disabled}/>
    </div>
  );
};
Range.propTypes = propTypes;
