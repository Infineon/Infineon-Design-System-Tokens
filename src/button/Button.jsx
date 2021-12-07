import classNames from "classnames";
import PropTypes from "prop-types";

export const propTypes = {
  /** Set button variant */
  variant: PropTypes.oneOf([
    "primary",
    "secondary",
    "success",
    "danger",
    "warning",
    "info",
    "dark",
    "light",
    "link",
    "outline-primary",
    "outline-secondary",
    "outline-success",
    "outline-danger",
    "outline-warning",
    "outline-info",
    "outline-dark",
    "outline-light",
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

export const Button = ({ variant, size, active, className, ...props }) => {
  const Component = props.href ? "a" : "button";
  return (
    <Component
      className={classNames(
        "btn",
        active && "active",
        variant && `btn-${variant}`,
        size && `btn-${size}`,
        props.href && props.disabled && "disabled",
        className
      )}
      {...props}
    />
  );
};
Button.propTypes = propTypes;
