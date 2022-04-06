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

const VerticalTemplate = (args) => (
  <div className="inf__vertical-nav-icons-wrapper">
    <ul className="flex-column inf__content-nav__border nav" {...args}>
      <BsNav.Item as="li">
        <BsNav.Link href="#">
          <FontAwesomeIcon icon={["fas", "globe"]} />
        </BsNav.Link>
      </BsNav.Item>
      <BsNav.Item as="li">
        <BsNav.Link eventKey="link-1">
          <FontAwesomeIcon icon={["fas", "compass"]} />
        </BsNav.Link>
      </BsNav.Item>
      <BsNav.Item as="li">
        <BsNav.Link eventKey="link-2">
          <FontAwesomeIcon icon={["fas", "chart-bar"]} />
        </BsNav.Link>
      </BsNav.Item>
      <p className="inf__content-nav__divider">Divider</p>
      <BsNav.Item as="li">
        <BsNav.Link eventKey="link-3">
          <FontAwesomeIcon icon={["fas", "home"]} />
        </BsNav.Link>
      </BsNav.Item>
      <BsNav.Item as="li">
        <BsNav.Link eventKey="link-4">
          <FontAwesomeIcon icon={["fas", "tachometer-alt"]} />
        </BsNav.Link>
      </BsNav.Item>
    </ul>
    <div className="d-inline-flex inf__content-nav__border inf__vertical-nav-icons-btn">
      <FontAwesomeIcon icon={["fas", "chevron-right"]} />
    </div>
  </div>
);

export const Default = DefaultTemplate.bind({});

export const Vertical = VerticalTemplate.bind({});
