import PropTypes from "prop-types";
import BsForm from "react-bootstrap/Form";

const propTypes = {
  /** Specifies a large or small Select field */
  size: PropTypes.oneOf(["sm", "lg"]),

  /** Set a disabled Select field */
  disabled: PropTypes.bool,
};

export const Select = ({ children, ...props }) => {
  return (
    <BsForm.Group className="mb-3" controlId="inputSelect">
      <BsForm.Label>Default</BsForm.Label>
      <BsForm.Select aria-label="Default select example" {...props}>
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
};
Select.propTypes = propTypes;
