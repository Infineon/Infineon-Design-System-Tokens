import PropTypes from "prop-types";
import BsBadge from "react-bootstrap/Badge";

const propTypes = {
  /** Set background color */
  background: PropTypes.oneOf(["primary", "secondary", "success", "danger", "warning", "white"]),

  /** Specifies a pill Badge */
  pill: PropTypes.bool,
};

export const Badge = ({ background, children, ...props }) => {
  return (
    <BsBadge bg={background} {...props}>{children}</BsBadge>
  );
};
Badge.propTypes = propTypes;
