import { Teaser } from "../teaser/Teaser";
import { Button } from "../button/Button";

const propTypes = {
  ...Teaser.propTypes,
  buttonLabel: Button.propTypes.label,
  buttonHref: Button.propTypes.href,
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
