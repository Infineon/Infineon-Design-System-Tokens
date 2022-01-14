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

const DefaultTemplate = (args) => (
  <Footer {...args}>
    <footer className="footer">
      <div className="footer__border container-fluid text-md-left">
        <div className="row">
          <div className="col-md-6 mt-md-0 mt-3">
            <img src={image.src} alt={image.alt} width="100"/>
            <div className='footer__social-media'>
              <a href="" class="me-3">
                <FontAwesomeIcon icon={["fab", "facebook"]} />
              </a>
              <a href="" class="me-3">
                <FontAwesomeIcon icon={["fab", "instagram"]} />
              </a>
              <a href="" class="me-3">
                <FontAwesomeIcon icon={["fab", "linkedin-in"]} />
              </a>
              <a href="" class="me-3">
                <FontAwesomeIcon icon={["fab", "twitter"]} />
              </a>
              <a href="" class="me-3">
                <FontAwesomeIcon icon={["fab", "xing"]} />
              </a>
              <a href="">
                <FontAwesomeIcon icon={["fab", "youtube"]} />
              </a>
            </div>
          </div>

          <div className="col-md-3 mb-md-0 mb-3">
            <h5>Headline</h5>
            <ul className="list-unstyled">
              <li><a href="#">This is a multiline long text link</a></li>
              <li><a href="#">Medium text link</a></li>
              <li><a href="#">Link</a></li>
              <li><a href="#">Link</a></li>
            </ul>
          </div>

          <div className="col-md-3 mb-md-0 mb-3">
            <h5>Headline</h5>
            <ul className="list-unstyled">
              <li><a href="#">This is a multiline long text link</a></li>
              <li><a href="#">This is a multiline long text link</a></li>
              <li><a href="#">Medium text link</a></li>
              <li><a href="#">Link</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="d-flex justify-content-between flex-wrap">
        <div className="footer-copyright">
          © 1999 - 2021 Infineon Technologies AG
        </div>

        <ul className="list-unstyled d-flex">
          <li><a href="#">Privacy & Policy</a></li>
          <li><a href="#">Terms</a></li>
          <li><a href="#">Site Map</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </div>
    </footer>
  </Footer>
);

const SmallTemplate = (args) => (
  <Footer {...args}>
    <footer className="footer">
      <div className="d-flex justify-content-between flex-wrap">
        <div className="footer-copyright">
          © 1999 - 2021 Infineon Technologies AG
        </div>

        <ul className="list-unstyled d-flex">
          <li><a href="#">Privacy & Policy</a></li>
          <li><a href="#">Terms</a></li>
          <li><a href="#">Site Map</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </div>
    </footer>
  </Footer>
);

const SmallIconsTemplate = (args) => (
  <Footer {...args}>
    <footer className="footer">
      <div className='footer__social-media'>
        <a href="" class="me-3">
          <FontAwesomeIcon icon={["fab", "facebook"]} />
        </a>
        <a href="" class="me-3">
          <FontAwesomeIcon icon={["fab", "instagram"]} />
        </a>
        <a href="" class="me-3">
          <FontAwesomeIcon icon={["fab", "linkedin-in"]} />
        </a>
        <a href="" class="me-3">
          <FontAwesomeIcon icon={["fab", "twitter"]} />
        </a>
        <a href="" class="me-3">
          <FontAwesomeIcon icon={["fab", "xing"]} />
        </a>
        <a href="">
          <FontAwesomeIcon icon={["fab", "youtube"]} />
        </a>
      </div>

      <div className="d-flex justify-content-between flex-wrap">
        <div className="footer-copyright">
          © 1999 - 2021 Infineon Technologies AG
        </div>

        <ul className="list-unstyled d-flex">
          <li><a href="#">Privacy & Policy</a></li>
          <li><a href="#">Terms</a></li>
          <li><a href="#">Site Map</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </div>
    </footer>
  </Footer>
);

export const Default = DefaultTemplate.bind({});

export const Small = SmallTemplate.bind({});

export const SmallIcons = SmallIconsTemplate.bind({});
