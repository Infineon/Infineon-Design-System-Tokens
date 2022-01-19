import PropTypes from "prop-types";
import BsPagination from "react-bootstrap/Pagination";

const propTypes = {
  /** Specifies a large or small Pagination */
  size: PropTypes.oneOf(["s", "m", "l"]),

  /** Specifies an active Pagination-item */
  active : PropTypes.number,
};

export const Pagination = ({ size, active, ...props }) => {
  const bsSize =
    size === "s" ? "sm" 
    : size === "l" ? "lg" 
    : undefined;

  return (
    <BsPagination size={bsSize} {...props}>
      <BsPagination.First />
      <BsPagination.Prev />
      <BsPagination.Item active={active === 1}>{1}</BsPagination.Item>
      <BsPagination.Item active={active === 2}>{2}</BsPagination.Item>
      <BsPagination.Item active={active === 3}>{3}</BsPagination.Item>
      <BsPagination.Item active={active === 4}>{4}</BsPagination.Item>
      <BsPagination.Next />
      <BsPagination.Last />
    </BsPagination>
  );
};
Pagination.propTypes = propTypes;
