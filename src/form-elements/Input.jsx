import PropTypes from "prop-types";
import BsForm from "react-bootstrap/Form";

const propTypes = {
  /** Set the Input label text */
  label: PropTypes.string,

  /** Specifies the label position */
  labelPosition: PropTypes.oneOf(["top", "left"]),

  /** Specifies a large or small Input field */
  size: PropTypes.oneOf(["s", "m", "l"]),

  /** Set a disabled Input field */
  disabled: PropTypes.bool,

  /** Set an Input field state */
  state: PropTypes.oneOf(["none", "success", "error"]),
};

export const Input = ({ label, labelPosition, size, state, children, ...props }) => {
  const bsSize =
    size === "s" ? "sm" 
    : size === "l" ? "lg" 
    : undefined;

  const stateClass =
    state === "success" ? "inf__input--success"
    : state === "error" ? "inf__input--error"
    : "";

  if ( labelPosition === "top" ) {
    return (
      <BsForm.Group className={"mb-3 " + stateClass} controlId="input">
        <BsForm.Label>{label}</BsForm.Label>
        <BsForm.Control placeholder="Placeholder" size={bsSize} {...props}></BsForm.Control>
        <BsForm.Text>
          Caption text, description, error notification
        </BsForm.Text>
      </BsForm.Group>
    );
  } else {
    return (
      <BsForm.Group className={"inf__input-left mb-3 " + stateClass} controlId="input">
        <div className="inf__input-left__container">
          <BsForm.Label>{label}</BsForm.Label>
          <BsForm.Control placeholder="Placeholder" size={bsSize} {...props}></BsForm.Control>
        </div>
        <BsForm.Text>
          Caption text, description, error notification
        </BsForm.Text>
      </BsForm.Group>
    );
  }
};
Input.propTypes = propTypes;
