import PropTypes from "prop-types";
import BsForm from "react-bootstrap/Form";
  
const propTypes = {
  /** Set the Range label text */
  label: PropTypes.string,

  /** Set a disabled Range */
  disabled: PropTypes.bool,
};

export const Range = ({ label, disabled, children, ...props }) => {
  return (
    <div {...props}>
      <BsForm.Label className="ifx__form-label--form-range">{label}</BsForm.Label>
      <BsForm.Range disabled={disabled}/>
    </div>
  );
};
Range.propTypes = propTypes;
