import PropTypes from "prop-types";
import BsNav from "react-bootstrap/Nav";

const propTypes = {
  /** Set Content Navigation variant */
  variant: PropTypes.oneOf(["tabs", "pills"]),
};

export const ContentNavigation = ({ children, ...props }) => {
  return (
    <BsNav {...props} activeKey="/home" as="ul">
      {children}
    </BsNav>
  );
};
ContentNavigation.propTypes = propTypes;
