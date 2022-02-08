import BsNav from "react-bootstrap/Nav";

export const Sidebar = ({ children, ...props }) => {
  return (
    <BsNav {...props} activeKey="link-1" as="ul" className="inf__sidebar flex-column sticky-top">
      {children}
    </BsNav>
  );
};
