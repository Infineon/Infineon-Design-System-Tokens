import { Footer } from "./Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import imageFile from "./logo-desktop-en-2x.png";

export default {
  title: "Components/Footer",
  component: Footer,
};

const image = {
  src: imageFile,
  alt: "infineon-logo",
};

const LargeTemplate = (args) => (
  <Footer {...args}>
    <footer className="footer">
      <div className="inf__footer-top">
        <div className="row">
          <div className="col-md-2 mb-md-0 mb-3">
            <h5>Mainlink</h5>
            <ul className="list-unstyled">
              <li><a href="#">Link 1</a></li>
              <li><a href="#">Link 2</a></li>
              <li><a href="#">Link 3</a></li>
              <li><a href="#">Link 4</a></li>
            </ul>
          </div>

          <div className="col-md-2 mb-md-0 mb-3">
            <h5>Mainlink</h5>
            <ul className="list-unstyled">
              <li><a href="#">Link 1</a></li>
              <li><a href="#">Link 2</a></li>
              <li><a href="#">Link 3</a></li>
              <li><a href="#">Link 4</a></li>
            </ul>
          </div>

          <div className="col-md-2 mb-md-0 mb-3">
            <h5>Mainlink</h5>
            <ul className="list-unstyled">
              <li><a href="#">Link 1</a></li>
              <li><a href="#">Link 2</a></li>
              <li><a href="#">Link 3</a></li>
              <li><a href="#">Link 4</a></li>
            </ul>
          </div>

          <div className="col-md-2 mb-md-0 mb-3">
            <h5>Mainlink</h5>
            <ul className="list-unstyled">
              <li><a href="#">Link 1</a></li>
              <li><a href="#">Link 2</a></li>
              <li><a href="#">Link 3</a></li>
              <li><a href="#">Link 4</a></li>
            </ul>
          </div>
        </div>

        <div className="d-flex align-items-end inf__footer-border">
          <div className="d-flex justify-content-between flex-wrap w-100">
            <img src={image.src} alt={image.alt} width="110" height="48"/>
            <div className='inf__footer-top__social-media'>
              <a href="">
                <FontAwesomeIcon icon={["fab", "facebook"]} />
              </a>
              <a href="">
                <FontAwesomeIcon icon={["fab", "instagram"]} />
              </a>
              <a href="">
                <FontAwesomeIcon icon={["fab", "linkedin-in"]} />
              </a>
              <a href="">
                <FontAwesomeIcon icon={["fab", "twitter"]} />
              </a>
              <a href="">
                <FontAwesomeIcon icon={["fab", "xing"]} />
              </a>
              <a href="">
                <FontAwesomeIcon icon={["fab", "youtube"]} />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="d-md-flex justify-content-between flex-wrap inf__footer-bottom">
        <div className="inf__footer-bottom__copyright">
          © 1999 - 2021 Infineon Technologies AG
        </div>

        <ul className="list-unstyled d-sm-flex">
          <li><a href="#">Terms</a></li>
          <li><a href="#">Imprint</a></li>
          <li><a href="#">Privacy policy</a></li>
          <li><a href="#">Glossary</a></li>
        </ul>
      </div>
    </footer>
  </Footer>
);

const DefaultTemplate = (args) => (
  <Footer {...args}>
    <footer className="footer">
      <div className="d-md-flex justify-content-between flex-wrap inf__footer-bottom">
        <div className="inf__footer-bottom__copyright">
          © 1999 - 2021 Infineon Technologies AG
        </div>

        <ul className="list-unstyled d-sm-flex">
          <li><a href="#">Terms</a></li>
          <li><a href="#">Imprint</a></li>
          <li><a href="#">Privacy policy</a></li>
          <li><a href="#">Glossary</a></li>
        </ul>
      </div>
    </footer>
  </Footer>
);

const MediumTemplate = (args) => (
  <Footer {...args}>
    <footer className="footer">
      <div className="d-flex align-items-end inf__footer-border">
        <div className="d-flex justify-content-between flex-wrap w-100">
          <img src={image.src} alt={image.alt} width="110" height="48"/>
          <div className='inf__footer-top__social-media'>
            <a href="">
              <FontAwesomeIcon icon={["fab", "facebook"]} />
            </a>
            <a href="">
              <FontAwesomeIcon icon={["fab", "instagram"]} />
            </a>
            <a href="">
              <FontAwesomeIcon icon={["fab", "linkedin-in"]} />
            </a>
            <a href="">
              <FontAwesomeIcon icon={["fab", "twitter"]} />
            </a>
            <a href="">
              <FontAwesomeIcon icon={["fab", "xing"]} />
            </a>
            <a href="">
              <FontAwesomeIcon icon={["fab", "youtube"]} />
            </a>
          </div>
        </div>
      </div>

      <div className="d-md-flex justify-content-between align-items-center flex-wrap inf__footer-bottom">
        <div className="inf__footer-bottom__copyright">
          © 1999 - 2021 Infineon Technologies AG
        </div>

        <ul className="list-unstyled d-sm-flex">
          <li><a href="#">Terms</a></li>
          <li><a href="#">Imprint</a></li>
          <li><a href="#">Privacy policy</a></li>
          <li><a href="#">Glossary</a></li>
        </ul>
      </div>
    </footer>
  </Footer>
);

export const Large = LargeTemplate.bind({});

export const Default = DefaultTemplate.bind({});

export const Medium = MediumTemplate.bind({});
