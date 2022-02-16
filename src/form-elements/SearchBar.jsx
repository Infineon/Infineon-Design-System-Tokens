import PropTypes from "prop-types";
import BsForm from "react-bootstrap/Form";
import BsInputGroup from "react-bootstrap/InputGroup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const propTypes = {
  /** Specifies a large or small Input field */
  size: PropTypes.oneOf(["s", "m", "l"]),

  /** Set a disabled Input field */
  disabled: PropTypes.bool,
};

export const SearchBar = ({ size, ...props }) => {
  const bsSize =
    size === "s" ? "sm" 
    : size === "l" ? "lg" 
    : undefined;

  return (
    <BsInputGroup>
      <BsInputGroup.Text>
        <FontAwesomeIcon icon={["fas", "search"]}/>
      </BsInputGroup.Text>
      <BsForm.Control type="text" placeholder="Search" size={bsSize} {...props}></BsForm.Control>
    </BsInputGroup>
  );
};
SearchBar.propTypes = propTypes;
