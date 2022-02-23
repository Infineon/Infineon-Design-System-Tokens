import PropTypes from "prop-types";
import BsTable from "react-bootstrap/Table";

const propTypes = {
  /** Specifies a small Table */
  size: PropTypes.oneOf(["s", "m"]),

  /** Specifies a hoverable Table body */
  hover: PropTypes.bool,

  /** Specifies a caption text */
  caption: PropTypes.string,
};

export const Table = ({ size, caption, children, ...props }) => {
  const bsSize =
    size === "s" ? "sm" 
    : undefined;

  return (
    <div class="table-responsive">
      <BsTable size={bsSize} {...props}>
        {children}
        {caption ? <caption>{caption}</caption> : ""}
      </BsTable>
    </div>
  );
};
Table.propTypes = propTypes;
