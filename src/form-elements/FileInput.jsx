import PropTypes from "prop-types";
import BsForm from "react-bootstrap/Form";

const propTypes = {
  /** Specifies a large or small File Input field */
  size: PropTypes.oneOf(["sm", "lg"]),

  /** Set a disabled File Input field */
  disabled: PropTypes.bool,
};

export const FileInput = ({ children, ...props }) => {
  return (
    <BsForm.Group className="mb-3" controlId="fileInput">
      <BsForm.Control type="file" placeholder="Placeholder" {...props}></BsForm.Control>
    </BsForm.Group>
  );
};
FileInput.propTypes = propTypes;
