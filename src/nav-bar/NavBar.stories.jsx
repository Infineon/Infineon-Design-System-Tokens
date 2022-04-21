import { NavBar } from "./NavBar";
import { SearchBar } from "../form-elements/SearchBar";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import BsNavBar from "react-bootstrap/Navbar";
import BsNav from "react-bootstrap/Nav";
import BsNavDropdown from "react-bootstrap/NavDropdown";
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
    <div className="d-flex">
      <BsNavBar.Toggle aria-controls="basic-navbar-nav" />

      <BsNavBar.Brand href="#home">
        <img src={image.src} alt={image.alt} width="100"/>
      </BsNavBar.Brand>
      <p className="ifx__application-name">Application name</p>
    </div>

    <BsNavBar.Collapse id="basic-navbar-nav">
        <div className="d-lg-flex justify-content-lg-between flex-lg-row-reverse w-100">
          <div className="d-flex align-items-center">
            <SearchBar className="ifx__nav-searchbar" size="s"></SearchBar>

            <div className="ifx__nav-metalink-wrapper d-flex">
              <BsNav.Link className="ifx__nav-metalink" href="#" data-text="Metalink">Metalink
                <FontAwesomeIcon icon={["fal", "user"]}/>
              </BsNav.Link>
              <BsNav.Link className="ifx__nav-metalink" href="#" data-text="Metalink">Metalink
                <FontAwesomeIcon icon={["fal", "globe"]}/>
              </BsNav.Link>
            </div>
          </div>

          <div className="align-items-lg-center ifx__nav-link-wrapper ifx__mobile-show">
            <BsNav.Link href="#" data-text="Nav Link 1">
              Nav Link 1
            </BsNav.Link>
            <BsNav.Link href="#" data-text="Nav Link 2">
              Nav Link 2
            </BsNav.Link>
            <BsNav.Link href="#" data-text="Nav Link 3">
              Nav Link 3
            </BsNav.Link>
            <BsNav.Link href="#" data-text="Nav Link 4">
              Nav Link 4
            </BsNav.Link>
            <BsNav.Link href="#" data-text="Nav Link 5">
              Nav Link 5
            </BsNav.Link>
            <BsNav.Link href="#" data-text="Nav Link 6">
              Nav Link 6
            </BsNav.Link>
          </div>

          <div className="d-lg-flex align-items-center ifx__nav-link-wrapper ifx__desktop-show">
            <BsNav.Link href="#" data-text="Nav Link 1">
              Nav Link 1
            </BsNav.Link>
            <BsNav.Link href="#" data-text="Nav Link 2">
              Nav Link 2
            </BsNav.Link>
            <BsNavDropdown title="More +" id="basic-nav-dropdown" className="active" data-text="Action default">
              <BsNavDropdown.Item href="#action/3.1">Nav Link 3</BsNavDropdown.Item>
              <BsNavDropdown.Item href="#action/3.2">Nav Link 4</BsNavDropdown.Item>
              <BsNavDropdown.Item href="#action/3.3">Nav Link 5</BsNavDropdown.Item>
              <BsNavDropdown.Item href="#action/3.4">Nav Link 6</BsNavDropdown.Item>
            </BsNavDropdown>
          </div>
        </div>
    </BsNavBar.Collapse>
  </NavBar>
);

const ExtendedTemplate = (args) => (
  <div className="ifx__navbar-extended">
    <NavBar {...args}>
      <div className="d-flex align-items-center">
        <BsNavBar.Toggle aria-controls="basic-navbar-nav" />

        <BsNavBar.Brand href="#home">
          <img src={image.src} alt={image.alt} width="100"/>
        </BsNavBar.Brand>
        <p className="ifx__application-name">Application name</p>
      </div>

      <BsNavBar.Collapse id="basic-navbar-nav">
        <div className="d-flex justify-content-lg-between align-items-center">
          <SearchBar className="ifx__nav-searchbar" size="s"></SearchBar>

          <div className="ifx__nav-metalink-wrapper d-flex">
            <BsNav.Link className="ifx__nav-metalink" href="#" data-text="Metalink">Metalink
              <FontAwesomeIcon icon={["fal", "user"]}/>
            </BsNav.Link>
            <BsNav.Link className="ifx__nav-metalink" href="#" data-text="Metalink">Metalink
              <FontAwesomeIcon icon={["fal", "globe"]}/>
            </BsNav.Link>
            <BsNav.Link className="ifx__nav-metalink" href="#" data-text="Metalink">Metalink
              <FontAwesomeIcon icon={["fal", "cart-shopping"]}/>
            </BsNav.Link>
          </div>
        </div>

        <div className="ifx__nav-link-wrapper ifx__mobile-show">
          <BsNav.Link href="#" data-text="Nav Link 1">
            Nav Link 1
          </BsNav.Link>
          <BsNav.Link href="#" data-text="Nav Link 2">
            Nav Link 2
          </BsNav.Link>
          <BsNav.Link href="#" data-text="Nav Link 3">
            Nav Link 3
          </BsNav.Link>
          <BsNav.Link href="#" data-text="Nav Link 4">
            Nav Link 4
          </BsNav.Link>
          <BsNav.Link href="#" data-text="Nav Link 5">
            Nav Link 5
          </BsNav.Link>
        </div>
      </BsNavBar.Collapse>

      <div className="d-lg-flex ifx__nav-link-wrapper ifx__desktop-show">
        <BsNav.Link href="#" data-text="Nav Link 1">
          Nav Link 1
        </BsNav.Link>
        <BsNav.Link href="#" data-text="Nav Link 2">
          Nav Link 2
        </BsNav.Link>
        <BsNav.Link href="#" data-text="Nav Link 3">
          Nav Link 3
        </BsNav.Link>
        <BsNav.Link href="#" data-text="Nav Link 4">
          Nav Link 4
        </BsNav.Link>
        <BsNav.Link href="#" data-text="Nav Link 5">
          Nav Link 5
        </BsNav.Link>
      </div>
    </NavBar>
  </div>
);

const ExtendedLevel2Template = (args) => (
  <div className="ifx__navbar-extended">
    <NavBar {...args}>
      <div className="d-flex align-items-center">
        <BsNavBar.Toggle aria-controls="basic-navbar-nav" />

        <BsNavBar.Brand href="#home">
          <img src={image.src} alt={image.alt} width="100"/>
        </BsNavBar.Brand>
        <p className="ifx__application-name">Application name</p>
      </div>

      <BsNavBar.Collapse id="basic-navbar-nav">
        <div className="d-flex justify-content-lg-between align-items-center">
          <SearchBar className="ifx__nav-searchbar" size="s"></SearchBar>

          <div className="ifx__nav-metalink-wrapper d-flex">
            <BsNav.Link className="ifx__nav-metalink" href="#" data-text="Metalink">Metalink
              <FontAwesomeIcon icon={["fal", "user"]}/>
            </BsNav.Link>
            <BsNav.Link className="ifx__nav-metalink" href="#" data-text="Metalink">Metalink
              <FontAwesomeIcon icon={["fal", "globe"]}/>
            </BsNav.Link>
            <BsNav.Link className="ifx__nav-metalink" href="#" data-text="Metalink">Metalink
              <FontAwesomeIcon icon={["fal", "cart-shopping"]}/>
            </BsNav.Link>
          </div>
        </div>

        <div className="ifx__nav-link-wrapper ifx__mobile-show">
          <BsNav.Link href="#" data-text="Nav Link 1">
            Nav Link 1
          </BsNav.Link>
          <BsNav.Link href="#" data-text="Nav Link 2">
            Nav Link 2
          </BsNav.Link>
          <BsNav.Link href="#" data-text="Nav Link 3">
            Nav Link 3
          </BsNav.Link>
          <BsNav.Link href="#" data-text="Nav Link 4">
            Nav Link 4
          </BsNav.Link>
          <BsNav.Link href="#" data-text="Nav Link 5">
            Nav Link 5
          </BsNav.Link>
        </div>
      </BsNavBar.Collapse>

      <div className="ifx__nav-link-wrapper ifx__desktop-show">
        <BsNav.Link href="#" data-text="Nav Link 1">
          Nav Link 1
        </BsNav.Link>
        <BsNav.Link href="#" data-text="Nav Link 2">
          Nav Link 2
        </BsNav.Link>
        <BsNav.Link href="#" data-text="Nav Link 3">
          Nav Link 3
        </BsNav.Link>
        <BsNav.Link href="#" data-text="Nav Link 4">
          Nav Link 4
        </BsNav.Link>
        <BsNav.Link href="#" data-text="Nav Link 5">
          Nav Link 5
        </BsNav.Link>

        <div className="w-100 ifx__nav-mega-dropdown">
          <div className="row">
            <div className="col-6 col-lg-3">
              <BsNav.Link href="#" data-text="Overview Nav Link">
                <div>
                  <span>Overview Nav Link</span>
                  <FontAwesomeIcon icon={["fal", "chevron-right"]}/>
                </div>
              </BsNav.Link>
              <BsNav.Link href="#" data-text="Navigationlink">
                <div>
                  <span>Navigationlink</span>
                  <FontAwesomeIcon icon={["fal", "chevron-right"]}/>
                </div>
              </BsNav.Link>
              <BsNav.Link href="#" data-text="Navigationlink">
                <div>
                  <span>Navigationlink</span>
                  <FontAwesomeIcon icon={["fal", "chevron-right"]}/>
                </div>
              </BsNav.Link>
              <BsNav.Link href="#" data-text="Navigationlink">
                <div>
                  <span>Navigationlink</span>
                  <FontAwesomeIcon icon={["fal", "chevron-right"]}/>
                </div>
              </BsNav.Link>
              <BsNav.Link href="#" data-text="Navigationlink">
                <div>
                  <span>Navigationlink</span>
                  <FontAwesomeIcon icon={["fal", "chevron-right"]}/>
                </div>
              </BsNav.Link>
              <BsNav.Link href="#" data-text="Navigationlink">
                <div>
                  <span>Navigationlink</span>
                  <FontAwesomeIcon icon={["fal", "chevron-right"]}/>
                </div>
              </BsNav.Link>
              <BsNav.Link href="#" data-text="Navigationlink">
                <div>
                  <span>Navigationlink</span>
                  <FontAwesomeIcon icon={["fal", "chevron-right"]}/>
                </div>
              </BsNav.Link>
            </div>

            <div className="col-lg-3">
              <BsNav.Link href="#" data-text="Overview Nav Link">
                <div>
                  <span>Overview Nav Link</span>
                  <FontAwesomeIcon icon={["fal", "chevron-right"]}/>
                </div>
              </BsNav.Link>
              <BsNav.Link href="#" data-text="Navigationlink">
                <div>
                  <span>Navigationlink</span>
                  <FontAwesomeIcon icon={["fal", "chevron-right"]}/>
                </div>
              </BsNav.Link>
              <BsNav.Link href="#" data-text="Navigationlink">
                <div>
                  <span>Navigationlink</span>
                  <FontAwesomeIcon icon={["fal", "chevron-right"]}/>
                </div>
              </BsNav.Link>
              <BsNav.Link href="#" data-text="Navigationlink">
                <div>
                  <span>Navigationlink</span>
                  <FontAwesomeIcon icon={["fal", "chevron-right"]}/>
                </div>
              </BsNav.Link>
              <BsNav.Link href="#" data-text="Navigationlink">
                <div>
                  <span>Navigationlink</span>
                  <FontAwesomeIcon icon={["fal", "chevron-right"]}/>
                </div>
              </BsNav.Link>
              <BsNav.Link href="#" data-text="Navigationlink">
                <div>
                  <span>Navigationlink</span>
                  <FontAwesomeIcon icon={["fal", "chevron-right"]}/>
                </div>
              </BsNav.Link>
              <BsNav.Link href="#" data-text="Navigationlink">
                <div>
                  <span>Navigationlink</span>
                  <FontAwesomeIcon icon={["fal", "chevron-right"]}/>
                </div>
              </BsNav.Link>
            </div>

            <div className="col-lg-3">
              <BsNav.Link href="#" data-text="Overview Nav Link">
                <div>
                  <span>Overview Nav Link</span>
                  <FontAwesomeIcon icon={["fal", "chevron-right"]}/>
                </div>
              </BsNav.Link>
              <BsNav.Link href="#" data-text="Navigationlink">
                <div>
                  <span>Navigationlink</span>
                  <FontAwesomeIcon icon={["fal", "chevron-right"]}/>
                </div>
              </BsNav.Link>
              <BsNav.Link href="#" data-text="Navigationlink">
                <div>
                  <span>Navigationlink</span>
                  <FontAwesomeIcon icon={["fal", "chevron-right"]}/>
                </div>
              </BsNav.Link>
              <BsNav.Link href="#" data-text="Navigationlink">
                <div>
                  <span>Navigationlink</span>
                  <FontAwesomeIcon icon={["fal", "chevron-right"]}/>
                </div>
              </BsNav.Link>
              <BsNav.Link href="#" data-text="Navigationlink">
                <div>
                  <span>Navigationlink</span>
                  <FontAwesomeIcon icon={["fal", "chevron-right"]}/>
                </div>
              </BsNav.Link>
              <BsNav.Link href="#" data-text="Navigationlink">
                <div>
                  <span>Navigationlink</span>
                  <FontAwesomeIcon icon={["fal", "chevron-right"]}/>
                </div>
              </BsNav.Link>
              <BsNav.Link href="#" data-text="Navigationlink">
                <div>
                  <span>Navigationlink</span>
                  <FontAwesomeIcon icon={["fal", "chevron-right"]}/>
                </div>
              </BsNav.Link>
            </div>

            <div className="col-lg-3">
              <BsNav.Link href="#" data-text="Overview Nav Link">
                <div>
                  <span>Overview Nav Link</span>
                  <FontAwesomeIcon icon={["fal", "chevron-right"]}/>
                </div>
              </BsNav.Link>
              <BsNav.Link href="#" data-text="Navigationlink">
                <div>
                  <span>Navigationlink</span>
                  <FontAwesomeIcon icon={["fal", "chevron-right"]}/>
                </div>
              </BsNav.Link>
              <BsNav.Link href="#" data-text="Navigationlink">
                <div>
                  <span>Navigationlink</span>
                  <FontAwesomeIcon icon={["fal", "chevron-right"]}/>
                </div>
              </BsNav.Link>
              <BsNav.Link href="#" data-text="Navigationlink">
                <div>
                  <span>Navigationlink</span>
                  <FontAwesomeIcon icon={["fal", "chevron-right"]}/>
                </div>
              </BsNav.Link>
              <BsNav.Link href="#" data-text="Navigationlink">
                <div>
                  <span>Navigationlink</span>
                  <FontAwesomeIcon icon={["fal", "chevron-right"]}/>
                </div>
              </BsNav.Link>
              <BsNav.Link href="#" data-text="Navigationlink">
                <div>
                  <span>Navigationlink</span>
                  <FontAwesomeIcon icon={["fal", "chevron-right"]}/>
                </div>
              </BsNav.Link>
              <BsNav.Link href="#" data-text="Navigationlink">
                <div>
                  <span>Navigationlink</span>
                  <FontAwesomeIcon icon={["fal", "chevron-right"]}/>
                </div>
              </BsNav.Link>
            </div>
          </div>
        </div>
      </div>
    </NavBar>
  </div>
);

const VerticalTemplate = (args) => (
  <div className="ifx__vertical-nav-icons-wrapper">
    <ul className="flex-column ifx__content-nav__border nav" {...args}>
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
      <p className="ifx__content-nav__divider">Divider</p>
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
    <div className="d-inline-flex ifx__content-nav__border ifx__vertical-nav-icons-btn">
      <FontAwesomeIcon icon={["fas", "chevron-right"]} />
    </div>
  </div>
);

export const Default = DefaultTemplate.bind({});

export const Extended = ExtendedTemplate.bind({});

export const ExtendedLevel2 = ExtendedLevel2Template.bind({});

export const Vertical = VerticalTemplate.bind({});
