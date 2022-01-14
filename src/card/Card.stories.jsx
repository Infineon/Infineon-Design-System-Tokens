import { Card } from "./Card";
import { Button } from "../button/Button";
import { ListGroup } from "../list-group/ListGroup";
import BsCard from "react-bootstrap/Card";
import BsListGroup from "react-bootstrap/ListGroup";

export default {
  title: "Components/Card",
  component: Card,
};

const DefaultTemplate = (args) => (
  <Card {...args}>
    <BsCard.Body>
      <h5 className="card-title">Card Title</h5>
      <p className="card-text">
        Some quick example text to build on the card title and make up the bulk of the card's content.
      </p>
      <Button color="primary" href="#">
        Go somewhere
      </Button>
    </BsCard.Body>
  </Card>
);

const KitchenSinkTemplate = (args) => (
  <Card {...args}>
    <BsCard.Body>
      <h5 className="card-title">Card Title</h5>
      <p className="card-text">
        Some quick example text to build on the card title and make up the bulk of the card's content.
      </p>
    </BsCard.Body>
    <ListGroup variant="flush">
      <BsListGroup.Item>An item</BsListGroup.Item>
      <BsListGroup.Item>A second item</BsListGroup.Item>
      <BsListGroup.Item>A third item</BsListGroup.Item>
    </ListGroup>
    <BsCard.Body>
      <BsCard.Link href="#">Card Link</BsCard.Link>
      <BsCard.Link href="#">Another Link</BsCard.Link>
    </BsCard.Body>
  </Card>
);

const FooterTemplate = (args) => (
  <Card {...args}>
    <BsCard.Body className="d-flex justify-content-center flex-wrap text-center">
      <h5 className="card-title w-100">Card Title</h5>
      <p className="card-text w-100">
        Some quick example text to build on the card title and make up the bulk of the card's content.
      </p>
      <Button color="primary" href="#">
        Go somewhere
      </Button>
    </BsCard.Body>
    <BsCard.Footer className="text-center">2 days ago</BsCard.Footer>
  </Card>
);

const ImageOverlayTemplate = (args) => (
  <Card {...args}>
    <BsCard.Img src="holder.js/100px270" alt="Card image"></BsCard.Img>
    <BsCard.ImgOverlay>
      <h5 className="card-title">Card Title</h5>
      <p className="card-text">
        Some quick example text to build on the card title and make up the bulk of the card's content.
      </p>
    </BsCard.ImgOverlay>
  </Card>
);

const HorizontalTemplate = (args) => (
  <Card {...args}>
    <div className="row no-gutters">
      <div className="col-md-4">
        <BsCard.Img src="holder.js/100px270" alt="Card image" ></BsCard.Img>
      </div>
      <div className="col-md-8">
        <BsCard.Body>
          <h5 className="card-title">Card Title</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the bulk of the card's content.
          </p>
        </BsCard.Body>
      </div>
    </div>
  </Card>
);

export const Default = DefaultTemplate.bind({});
Default.args = {
  imageSrc: "holder.js/100px180",
};

export const DefaultWithoutImage = DefaultTemplate.bind({});

export const KitchenSink = KitchenSinkTemplate.bind({});
KitchenSink.args = {
  imageSrc: "holder.js/100px180",
};

export const KitchenSinkWithoutImage = KitchenSinkTemplate.bind({});

export const Footer = FooterTemplate.bind({});

export const ImageOverlay = ImageOverlayTemplate.bind({});

export const Horizontal = HorizontalTemplate.bind({});
