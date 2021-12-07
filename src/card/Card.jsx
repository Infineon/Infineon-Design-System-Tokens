import classNames from "classnames";
import PropTypes from "prop-types";

export const propTypes = {
  /** Sets card background */
  bg: PropTypes.oneOf([
    "primary",
    "secondary",
    "success",
    "danger",
    "warning",
    "info",
    "dark",
    "light",
  ]),

  /** Sets card text color */
  text: PropTypes.oneOf([
    "primary",
    "secondary",
    "success",
    "danger",
    "warning",
    "info",
    "dark",
    "light",
    "white",
    "muted",
  ]),

  /** Sets card border color */
  border: PropTypes.oneOf([
    "primary",
    "secondary",
    "success",
    "danger",
    "warning",
    "info",
    "dark",
    "light",
  ]),
};

export const Card = ({ bg, text, border, className, ...props }) => (
  <div
    className={classNames(
      "card",
      bg && `bg-${bg}`,
      text && `text-${text}`,
      border && `border-${border}`,
      className
    )}
    {...props}
  />
);
Card.propTypes = propTypes;

Card.Header = ({ className, ...props }) => (
  <div className={classNames("card-header", className)} {...props} />
);
Card.Header.displayName = "Card.Header";

Card.ImageTop = ({ className, ...props }) => (
  <img className={classNames("card-img-top", className)} {...props} />
);
Card.ImageTop.displayName = "Card.ImageTop";

Card.Body = ({ className, ...props }) => (
  <div className={classNames("card-body", className)} {...props} />
);
Card.Body.displayName = "Card.Body";

Card.Title = ({ className, ...props }) => (
  <div className={classNames("card-title", className)} {...props} />
);
Card.Title.displayName = "Card.Title";

Card.Subtitle = ({ className, ...props }) => (
  <div className={classNames("card-subtitle", className)} {...props} />
);
Card.Subtitle.displayName = "Card.Subtitle";

Card.Text = ({ className, ...props }) => (
  <p className={classNames("card-text", className)} {...props} />
);
Card.Text.displayName = "Card.Text";

Card.Link = ({ className, ...props }) => (
  <a className={classNames("card-link", className)} {...props} />
);
Card.Link.displayName = "Card.Link";

Card.Footer = ({ className, ...props }) => (
  <div className={classNames("card-footer", className)} {...props} />
);
Card.Footer.displayName = "Card.Footer";
