import PropTypes from "prop-types";

const propTypes = {
  /** Set the Paragraph title */
  title: PropTypes.string,

  /** Set the Paragraph text */
  text: PropTypes.string,
};

export const Paragraph = ({ children, ...props }) => {
  return (
    <div className="inf__paragraph inf__paragraph-vertical" {...props}>
      {children}
    </div>
  )
};
Paragraph.propTypes = propTypes;