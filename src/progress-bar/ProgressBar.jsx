import PropTypes from "prop-types";
import BsProgressBar from "react-bootstrap/ProgressBar";

const propTypes = {
  /** Set the Progress-bar text */
  label: PropTypes.bool,

  /** Specifies a small Progress-bar */
  small: PropTypes.bool,

  /** Set the current value of progress */
  now: PropTypes.number,
};

export const ProgressBar = ({ now, small, label }) => {
  const smallClass = small ? "progress-small" : "";
  const labelText = label && !small ? `${now}%` : "";

  return (
    <BsProgressBar now={now} label={labelText} className={smallClass}></BsProgressBar>
  );
};
ProgressBar.propTypes = propTypes;
