import PropTypes from "prop-types";
import BsAlert from "react-bootstrap/Alert";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const propTypes = {
  /** Set Alert color */
  variant: PropTypes.oneOf([
    "primary",
    "secondary",
    "success",
    "danger",
    "warning",
    "color-gray-100",
  ]),

  /** Specifies a closable alert */
  closable: PropTypes.bool,

  /** Set icon */
  icon: PropTypes.bool,
};

export const Alert = ({ closable, icon, children, ...props }) => {
  const Icon = () => (
    icon ? <FontAwesomeIcon icon={["fa", "info-circle"]} className="inf__alert-icon"/> : null
  );

  if ( icon ) {
    return (
      <BsAlert {...props} dismissible={closable}>
        <div className="inf__alert-wrapper inf__alert-wrapper-icon">
          <Icon/>{children}
        </div>
      </BsAlert>
    )
  } else {
    return (
      <BsAlert {...props} dismissible={closable}>
        <div className="inf__alert-wrapper">
          {children}
        </div>
      </BsAlert>
    )
  }
};
Alert.propTypes = propTypes;
