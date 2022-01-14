import PropTypes from "prop-types";
import BsForm from "react-bootstrap/Form";

const propTypes = {
  /** Specifies a large or small Textarea field */
  size: PropTypes.oneOf(["sm", "lg"]),

  /** Set a disabled Textarea field */
  disabled: PropTypes.bool,
};

export const Textarea = ({ children, ...props }) => {
  return (
    <BsForm.Group className="mb-3" controlId="inputTextarea">
      <BsForm.Label>Default</BsForm.Label>
      <BsForm.Control as="textarea" rows={5} placeholder="Placeholder" {...props}></BsForm.Control>
    </BsForm.Group>
  );
};
Textarea.propTypes = propTypes;
