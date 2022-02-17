import BsNavBar from "react-bootstrap/Navbar";

export const NavBar = ({ children }) => {
  return (
    <BsNavBar>
      {children}
    </BsNavBar>
  );
};
