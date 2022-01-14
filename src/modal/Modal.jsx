import PropTypes from "prop-types";
import BsModal from "react-bootstrap/Modal";
import { Button } from "../button/Button";

const propTypes = {
  /** Specifies a large or small Modal */
  size: PropTypes.oneOf(["sm", "lg"]),
};

export const Modal = ({ size, children }) => {
  return (
    <BsModal.Dialog size={size}>
      <BsModal.Header closeButton>
        <BsModal.Title>Modal title</BsModal.Title>
      </BsModal.Header>

      <BsModal.Body>
        <p>Modal Content</p>
        {children}
      </BsModal.Body>

      <BsModal.Footer>
        <Button variant="outline">Secondary</Button>
        <Button>Save changes</Button>
      </BsModal.Footer>
    </BsModal.Dialog>
  )
};

Modal.propTypes = propTypes;
