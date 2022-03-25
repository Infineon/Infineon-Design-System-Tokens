import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const propTypes = {
  /** Set Link color */
  color: PropTypes.oneOf(["brand", "font"]),

  /** Set underline */
  underline: PropTypes.bool,

  /** Set icon */
  icon: PropTypes.bool,

  /** Specifies the icon position */
  iconPosition: PropTypes.oneOf(["left", "right"]),
};

export const Link = ({ color, underline, icon, iconPosition, ...props }) => {
  const colorClass =
    color === "brand" ? "text-secondary"
    : color === "font" ? "text-body"
    : undefined;

  const underlineClass =
    underline === true ? "ifx__link-underline"
    : underline === false ? ""
    : undefined;

  const iconPositionClass =
    iconPosition === "left" ? "ifx__link-icon--before"
    : iconPosition === "right" ? "ifx__link-icon--after"
    : undefined;

  const IconLeft = () => (
    icon ? <FontAwesomeIcon icon={["fa", "arrow-down"]} className={iconPositionClass}/> : null
  );

  const IconRight = () => (
    icon ? <FontAwesomeIcon icon={["fa", "arrow-right"]} className={iconPositionClass}/> : null
  );

  return (
    <>
      {iconPosition === "left" 
        ? <><a className={colorClass + " " + underlineClass} href="#" {...props}><IconLeft/>Link</a></>
        : <><a className={colorClass + " " + underlineClass} href="#" {...props}>Link<IconRight/></a></>
      }
    </>
  );
};
Link.propTypes = propTypes;
