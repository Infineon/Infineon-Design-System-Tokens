import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const propTypes = {
  /** Set icon */
  icon: PropTypes.bool,

  /** Specifies the icon position */
  iconPosition: PropTypes.oneOf(["left", "right"]),
};

export const Link = ({ icon, iconPosition, ...props }) => {
  const iconPositionClass =
    iconPosition === "left" ? "inf__link-icon--before"
    : iconPosition === "right" ? "inf__link-icon--after"
    : undefined;

  const IconLeft = () => (
    icon ? <FontAwesomeIcon icon={["fa", "arrow-down"]} className={iconPositionClass}/> : null
  );

  const IconRight = () => (
    icon ? <FontAwesomeIcon icon={["fa", "arrow-right"]} className={iconPositionClass}/> : null
  );

  return (
    <div {...props}>
      {iconPosition === "left" 
        ? <><a className="inf__link" href="#"><IconLeft/>Link</a></>
        : <><a className="inf__link" href="#">Link<IconRight/></a></>
      }
    </div>
  );
};
Link.propTypes = propTypes;
