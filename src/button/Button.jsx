import PropTypes from "prop-types";
import BsButton from "react-bootstrap/Button";

const propTypes = {
  /** Set the button text */
  label: PropTypes.string,

  /** Set button variant */
  variant: PropTypes.oneOf(["solid", "outline", "link"]),

  /** Set button color */
  color: PropTypes.oneOf([
    "primary",
    "secondary",
    "terciary",
    "success",
    "danger",
    "warning",
    "info",
    "dark",
    "light",
  ]),

  /** Specifies a large or small button */
  size: PropTypes.oneOf(["sm", "lg"]),

  /** Manually set the visual state of the button to `:active` */
  active: PropTypes.bool,

  /** Disables the Button, preventing mouse events */
  disabled: PropTypes.bool,

  /** Providing a `href` will render an `<a>` element, styled as a button. */
  href: PropTypes.string,
};

export const Button = ({
  label,
  variant,
  color = "primary",
  children,
  ...props
}) => {
  const bsVariant =
    variant === "link"
      ? variant
      : variant === "outline"
      ? `outline-${color}`
      : color;
  return (
    <BsButton variant={bsVariant} {...props} children={children || label} />
  );
};
Button.propTypes = propTypes;
