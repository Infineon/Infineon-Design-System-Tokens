import PropTypes from "prop-types";
import BsTable from "react-bootstrap/Table";

const propTypes = {
  /** Specifies a small Table */
  size: PropTypes.oneOf(["s", "m"]),

  /** Specifies a hoverable table body */
  hover: PropTypes.bool,

  /** Specifies a caption text */
  caption: PropTypes.string,
};

export const Table = ({ size, caption, children, ...props }) => {
  const bsSize =
    size === "s" ? "sm" 
    : undefined;

  return (
    <BsTable size={bsSize} {...props}>
      {caption ? <caption>{caption}</caption> : ""}
      {children}
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <td>3</td>
          <td>Larry</td>
          <td>The Bird</td>
          <td>@twitter</td>
        </tr>
      </tbody>
    </BsTable>
  );
};
Table.propTypes = propTypes;
