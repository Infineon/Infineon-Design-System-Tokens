import BsNav from "react-bootstrap/Nav";

export const TableOfContentNav = ({ children, ...props }) => {
  return (
    <BsNav {...props} activeKey="link-1" as="ul" className="inf__table-of-content-nav flex-column sticky-top">
      {children}
    </BsNav>
  );
};
