import PropTypes from "prop-types";
import BsForm from "react-bootstrap/Form";

const propTypes = {
  /** Set the Input label text */
  label: PropTypes.string,

  /** Specifies a large or small Input field */
  size: PropTypes.oneOf(["s", "m", "l"]),

  /** Set a disabled Input field */
  disabled: PropTypes.bool,
};

export const Input = ({ label, size, ...props }) => {
  const bsSize =
    size === "s" ? "sm" 
    : size === "l" ? "lg" 
    : undefined;

  return (
    <BsForm.Group className="mb-3" controlId="input">
      <BsForm.Label>{label}</BsForm.Label>
      <BsForm.Control placeholder="Placeholder" size={bsSize} {...props}></BsForm.Control>
      <BsForm.Text>
        Caption text, description, error notification
      </BsForm.Text>
    </BsForm.Group>
  );
};
Input.propTypes = propTypes;
