import { Button } from '../button/Button';
import { Card } from "./Card";

export default {
  title: "Card",
  component: Card,
};

const BodyTemplate = (args) => (
  <Card {...args}>
    <Card.Body>This is some text within a card body.</Card.Body>
  </Card>
);
export const Body = BodyTemplate.bind({});

const TitleTemplate = (args) => (
  <Card {...args}>
    <Card.Body>
      <Card.Title className="h5">Card title</Card.Title>
      <Card.Subtitle className="h6 mb-2 text-muted">
        Card Subtitle
      </Card.Subtitle>
      <Card.Text>
        Some quick example text to build on the card title and make up the bulk
        of the card's content.
      </Card.Text>
      <Card.Link href="#">Card link</Card.Link>
      <Card.Link href="#">Another link</Card.Link>
    </Card.Body>
  </Card>
);
export const TitleAndLinks = TitleTemplate.bind({});

const ImageTopTemplate = (args) => (
  <Card {...args}>
    <Card.ImageTop src="holder.js/100px180" />
    <Card.Body>
      <Card.Text>
        Some quick example text to build on the card title and make up the bulk
        of the card's content.
      </Card.Text>
      <Card.Link href="#">Card link</Card.Link>
      <Card.Link href="#">Another link</Card.Link>
    </Card.Body>
  </Card>
);
export const ImageTop = ImageTopTemplate.bind({});

const HeaderTemplate = (args) => (
  <Card {...args}>
    <Card.Header>Featured</Card.Header>
    <Card.Body>
      <Card.Title className="h5">Special title treatment</Card.Title>
      <Card.Text>
        With supporting text below as a natural lead-in to additional content.
      </Card.Text>
      <Button variant="primary" href="#">Go somewhere</Button>
    </Card.Body>
  </Card>
);
export const Header = HeaderTemplate.bind({});

const FooterTemplate = (args) => (
  <Card {...args}>
    <Card.Body>
      <Card.Title className="h5">Special title treatment</Card.Title>
      <Card.Text>
        With supporting text below as a natural lead-in to additional content.
      </Card.Text>
    </Card.Body>
    <Card.Footer className="text-muted">Last updated 3 mins ago</Card.Footer>
  </Card>
);
export const Footer = FooterTemplate.bind({});
