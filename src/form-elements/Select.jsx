import PropTypes from "prop-types";
import BsForm from "react-bootstrap/Form";

const propTypes = {
  /** Set the Select label text */
  label: PropTypes.string,

  /** Specifies the label position */
  labelPosition: PropTypes.oneOf(["top", "left"]),

  /** Specifies a large or small Select field */
  size: PropTypes.oneOf(["s", "m", "l"]),

  /** Set a disabled Select field */
  disabled: PropTypes.bool,
};

export const Select = ({ label, labelPosition, size, ...props }) => {
  const bsSize =
    size === "s" ? "sm" 
    : size === "l" ? "lg" 
    : undefined;

  if ( labelPosition === "top" ) {
    return (
      <BsForm.Group className="mb-3" controlId="inputSelect">
        <BsForm.Label className="inf__form-label--input">{label}</BsForm.Label>
        <BsForm.Select aria-label="Default select example" size={bsSize} {...props}>
          <option>Select</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </BsForm.Select>
        <BsForm.Text>
          Caption text, description, error notification
        </BsForm.Text>
      </BsForm.Group>
    );
  } else {
    return (
      <BsForm.Group className="inf__input-left mb-3" controlId="inputSelect">
        <div className="inf__input-left__container">
          <BsForm.Label className="inf__form-label--input">{label}</BsForm.Label>
          <BsForm.Select aria-label="Default select example" size={bsSize} {...props}>
            <option>Select</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </BsForm.Select>
        </div>
        <BsForm.Text>
          Caption text, description, error notification
        </BsForm.Text>
      </BsForm.Group>
    );
  }
};
Select.propTypes = propTypes;
