import PropTypes from "prop-types";
import BsForm from "react-bootstrap/Form";

const propTypes = {
  /** Specifies a large or small Input field */
  size: PropTypes.oneOf(["sm", "lg"]),

  /** Set a disabled Input field */
  disabled: PropTypes.bool,
};

export const Input = ({ children, ...props }) => {
  return (
    <BsForm.Group className="mb-3" controlId="input">
      <BsForm.Label>Default</BsForm.Label>
      <BsForm.Control placeholder="Placeholder" {...props}></BsForm.Control>
      <BsForm.Text>
        Caption text, description, error notification
      </BsForm.Text>
    </BsForm.Group>
  );
};
Input.propTypes = propTypes;
