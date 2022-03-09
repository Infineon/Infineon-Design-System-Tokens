import { NavBar } from "./NavBar";
import { SearchBar } from "../form-elements/SearchBar";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import BsNavBar from "react-bootstrap/Navbar";
import BsNav from "react-bootstrap/Nav";
import imageFile from "../../public/logo-desktop-en-2x.png";

export default {
  title: "Components/Nav Bar",
  component: NavBar,
};

const image = {
  src: imageFile,
  alt: 'infineon-logo',
};

const DefaultTemplate = (args) => (
  <NavBar {...args}>
    <BsNavBar.Brand href="#home">
      <img src={image.src} alt={image.alt} width="100"/>
    </BsNavBar.Brand>

    <BsNavBar.Toggle aria-controls="basic-navbar-nav" />
    <BsNavBar.Collapse id="basic-navbar-nav">
      <div className="d-flex justify-content-between align-items-center w-100">
        <p className="inf__application-name">Application name</p>
        <div className="d-flex align-items-center">
          <SearchBar className="inf__nav-searchbar"></SearchBar>
          <div>
            <BsNav.Link href="#">Link
              <FontAwesomeIcon icon={["fas", "user"]}/>
            </BsNav.Link>
            <BsNav.Link href="#">Link
              <FontAwesomeIcon icon={["fas", "globe"]}/>
            </BsNav.Link>
            <BsNav.Link href="#">Link
              <FontAwesomeIcon icon={["fas", "shopping-cart"]}/>
            </BsNav.Link>
          </div>
        </div>
      </div>
    </BsNavBar.Collapse>
  </NavBar>
);

export const Default = DefaultTemplate.bind({});
