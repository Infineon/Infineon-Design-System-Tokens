import PropTypes from "prop-types";
import BsButton from "react-bootstrap/Button";

const propTypes = {
  /** Set the button text */
  label: PropTypes.string,

  /** Set button variant */
  variant: PropTypes.oneOf(["solid", "outline"]),

  /** Set button color */
  color: PropTypes.oneOf([
    "primary",
    "secondary",
    "success",
    "danger",
    "warning",
  ]),

  /** Specifies a large or small button */
  size: PropTypes.oneOf(["s", "m", "l"]),

  /** Manually set the visual state of the button to `:active` */
  active: PropTypes.bool,

  /** Disables the Button, preventing mouse events */
  disabled: PropTypes.bool,

  /** Providing a `href` will render an `<a>` element, styled as a button. */
  href: PropTypes.string,
};

export const Button = ({ label, variant, color, size, children, ...props }) => {
  const bsVariant =
    variant === "outline" ? `outline-${color}`
    : color;

  const bsSize =
    size === "s" ? "sm" 
    : size === "l" ? "lg" 
    : undefined;

  return (
    <BsButton variant={bsVariant} size={bsSize} children={children || label} {...props}></BsButton>
  );
};
Button.propTypes = propTypes;
