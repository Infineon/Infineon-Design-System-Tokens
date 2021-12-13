import PropTypes from "prop-types";
import { Teaser } from "../teaser/Teaser";
import { Button } from "../button/Button";

const propTypes = {
  /** Image URL */
  imageSrc: PropTypes.string,

  /** Set background color */
  background: PropTypes.oneOf(["primary", "secondary", "dark"]),

  /** Set the button text */
  buttonLabel: PropTypes.string,

  /** Providing a `href` will render an `<a>` element, styled as a button. */
  buttonHref: PropTypes.string,
};

export const ClickTeaser = ({
  buttonHref,
  buttonLabel,
  children,
  ...props
}) => (
  <Teaser {...props}>
    {children}
    <Button color="primary" href={buttonHref} label={buttonLabel} />
  </Teaser>
);
ClickTeaser.propTypes = propTypes;
