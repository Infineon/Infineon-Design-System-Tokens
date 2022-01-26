import { Card } from "./Card";
import { Button } from "../button/Button";
import { ListGroup } from "../list-group/ListGroup";
import BsCard from "react-bootstrap/Card";
import BsListGroup from "react-bootstrap/ListGroup";

export default {
  title: "Components/Card",
  component: Card,
  args: {
    title: "Card Title",
    text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    headerText: "",
    subtitleText: "",
    footerText: "",
    links: false,
  }
};

const DefaultTemplate = (args) => (
  <Card {...args}>
    <BsCard.Img src="holder.js/100px270" alt="Card image"></BsCard.Img>
    {args.headerText && <BsCard.Header>{args.headerText}</BsCard.Header>}

    <BsCard.Body>
      {args.subtitleText && <BsCard.Subtitle>{args.subtitleText}</BsCard.Subtitle>}
      <BsCard.Title>{args.title}</BsCard.Title>
      <BsCard.Text>{args.text}</BsCard.Text>
      <Button color="primary" variant="outline" href="#">Go somewhere</Button>
    </BsCard.Body>

    {args.links && 
      <BsCard.Body>
        <BsCard.Link href="#">Card Link</BsCard.Link>
        <BsCard.Link href="#">Another Link</BsCard.Link>
      </BsCard.Body>
    }

    {args.footerText && <BsCard.Footer>{args.footerText}</BsCard.Footer>}
  </Card>
);

const DefaultWithoutImageTemplate = (args) => (
  <Card {...args}>
    {args.headerText && <BsCard.Header>{args.headerText}</BsCard.Header>}

    <BsCard.Body>
      {args.subtitleText && <BsCard.Subtitle>{args.subtitleText}</BsCard.Subtitle>}
      <BsCard.Title>{args.title}</BsCard.Title>
      <BsCard.Text>{args.text}</BsCard.Text>
      <Button color="primary" variant="outline" href="#">Go somewhere</Button>
    </BsCard.Body>

    {args.links && 
      <BsCard.Body>
        <BsCard.Link href="#">Card Link</BsCard.Link>
        <BsCard.Link href="#">Another Link</BsCard.Link>
      </BsCard.Body>
    }

    {args.footerText && <BsCard.Footer>{args.footerText}</BsCard.Footer>}
  </Card>
);

const DefaultCenterTemplate = (args) => (
  <Card {...args}>
    <BsCard.Img src="holder.js/100px270" alt="Card image"></BsCard.Img>
    {args.headerText && <BsCard.Header className="text-center">{args.headerText}</BsCard.Header>}

    <BsCard.Body className="d-flex justify-content-center flex-wrap text-center">
      {args.subtitleText && <BsCard.Subtitle>{args.subtitleText}</BsCard.Subtitle>}
      <BsCard.Title className="w-100">{args.title}</BsCard.Title>
      <BsCard.Text className="w-100">{args.text}</BsCard.Text>
      <Button color="primary" variant="outline" href="#">Go somewhere</Button>
    </BsCard.Body>

    {args.links && 
      <BsCard.Body className="d-flex justify-content-center">
        <BsCard.Link href="#">Card Link</BsCard.Link>
        <BsCard.Link href="#">Another Link</BsCard.Link>
      </BsCard.Body>
    }

    {args.footerText && <BsCard.Footer className="text-center">{args.footerText}</BsCard.Footer>}
  </Card>
);

const DefaultCenterWithoutImageTemplate = (args) => (
  <Card {...args}>
    {args.headerText && <BsCard.Header className="text-center">{args.headerText}</BsCard.Header>}

    <BsCard.Body className="d-flex justify-content-center flex-wrap text-center">
      {args.subtitleText && <BsCard.Subtitle>{args.subtitleText}</BsCard.Subtitle>}
      <BsCard.Title className="w-100">{args.title}</BsCard.Title>
      <BsCard.Text className="w-100">{args.text}</BsCard.Text>
      <Button color="primary" variant="outline" href="#">Go somewhere</Button>
    </BsCard.Body>

    {args.links && 
      <BsCard.Body className="d-flex justify-content-center">
        <BsCard.Link href="#">Card Link</BsCard.Link>
        <BsCard.Link href="#">Another Link</BsCard.Link>
      </BsCard.Body>
    }

    {args.footerText && <BsCard.Footer className="text-center">{args.footerText}</BsCard.Footer>}
  </Card>
);

const KitchenSinkTemplate = (args) => (
  <Card {...args}>
    <BsCard.Img src="holder.js/100px270" alt="Card image"></BsCard.Img>
    {args.headerText && <BsCard.Header>{args.headerText}</BsCard.Header>}

    <BsCard.Body>
      {args.subtitleText && <BsCard.Subtitle>{args.subtitleText}</BsCard.Subtitle>}
      <BsCard.Title>{args.title}</BsCard.Title>
      <BsCard.Text>{args.text}</BsCard.Text>
    </BsCard.Body>

    <ListGroup variant="flush">
      <BsListGroup.Item>An item</BsListGroup.Item>
      <BsListGroup.Item>A second item</BsListGroup.Item>
      <BsListGroup.Item>A third item</BsListGroup.Item>
    </ListGroup>

    {args.links && 
      <BsCard.Body>
        <BsCard.Link href="#">Card Link</BsCard.Link>
        <BsCard.Link href="#">Another Link</BsCard.Link>
      </BsCard.Body>
    }

    {args.footerText && <BsCard.Footer>{args.footerText}</BsCard.Footer>}
  </Card>
);

const KitchenSinkWithoutImageTemplate = (args) => (
  <Card {...args}>
    {args.headerText && <BsCard.Header>{args.headerText}</BsCard.Header>}

    <BsCard.Body>
      {args.subtitleText && <BsCard.Subtitle>{args.subtitleText}</BsCard.Subtitle>}
      <BsCard.Title>{args.title}</BsCard.Title>
      <BsCard.Text>{args.text}</BsCard.Text>
    </BsCard.Body>

    <ListGroup variant="flush">
      <BsListGroup.Item>An item</BsListGroup.Item>
      <BsListGroup.Item>A second item</BsListGroup.Item>
      <BsListGroup.Item>A third item</BsListGroup.Item>
    </ListGroup>

    {args.links && 
      <BsCard.Body>
        <BsCard.Link href="#">Card Link</BsCard.Link>
        <BsCard.Link href="#">Another Link</BsCard.Link>
      </BsCard.Body>
    }

    {args.footerText && <BsCard.Footer>{args.footerText}</BsCard.Footer>}
  </Card>
);

const ImageOverlayTemplate = (args) => (
  <Card {...args}>
    {args.headerText && <BsCard.Header>{args.headerText}</BsCard.Header>}
    <BsCard.Img src="holder.js/100px270" alt="Card image"></BsCard.Img>

    <BsCard.ImgOverlay>
      <BsCard.Body>
        {args.subtitleText && <BsCard.Subtitle>{args.subtitleText}</BsCard.Subtitle>}
        <BsCard.Title>{args.title}</BsCard.Title>
        <BsCard.Text>{args.text}</BsCard.Text>
        <Button color="primary" variant="outline" href="#">Go somewhere</Button>
      </BsCard.Body>

      {args.links && 
        <BsCard.Body>
          <BsCard.Link href="#">Card Link</BsCard.Link>
          <BsCard.Link href="#">Another Link</BsCard.Link>
        </BsCard.Body>
      }
    </BsCard.ImgOverlay>

    {args.footerText && <BsCard.Footer>{args.footerText}</BsCard.Footer>}
  </Card>
);

const ImageOverlayWithoutButtonTemplate = (args) => (
  <Card {...args}>
    {args.headerText && <BsCard.Header>{args.headerText}</BsCard.Header>}
    <BsCard.Img src="holder.js/100px270" alt="Card image"></BsCard.Img>

    <BsCard.ImgOverlay>
      <BsCard.Body>
        {args.subtitleText && <BsCard.Subtitle>{args.subtitleText}</BsCard.Subtitle>}
        <BsCard.Title>{args.title}</BsCard.Title>
        <BsCard.Text>{args.text}</BsCard.Text>
      </BsCard.Body>

      {args.links && 
        <BsCard.Body>
          <BsCard.Link href="#">Card Link</BsCard.Link>
          <BsCard.Link href="#">Another Link</BsCard.Link>
        </BsCard.Body>
      }
    </BsCard.ImgOverlay>

    {args.footerText && <BsCard.Footer>{args.footerText}</BsCard.Footer>}
  </Card>
);

const HorizontalLeftTemplate = (args) => (
  <Card {...args}>
    <div className="row no-gutters">
      <div className="col-md-4">
        <BsCard.Img src="holder.js/100px270" alt="Card image"></BsCard.Img>
      </div>
      <div className="col-md-8">
        {args.headerText && <BsCard.Header>{args.headerText}</BsCard.Header>}

        <BsCard.Body>
          {args.subtitleText && <BsCard.Subtitle>{args.subtitleText}</BsCard.Subtitle>}
          <BsCard.Title>{args.title}</BsCard.Title>
          <BsCard.Text>{args.text}</BsCard.Text>
          <Button color="primary" variant="outline" href="#">Go somewhere</Button>
        </BsCard.Body>

        {args.links && 
          <BsCard.Body>
            <BsCard.Link href="#">Card Link</BsCard.Link>
            <BsCard.Link href="#">Another Link</BsCard.Link>
          </BsCard.Body>
        }
        <div>
          {args.footerText && <BsCard.Footer>{args.footerText}</BsCard.Footer>}
        </div>
      </div>
    </div>
  </Card>
);

const HorizontalRightTemplate = (args) => (
  <Card {...args}>
    <div className="row no-gutters">
      <div className="col-md-8">
        {args.headerText && <BsCard.Header>{args.headerText}</BsCard.Header>}

        <BsCard.Body>
          {args.subtitleText && <BsCard.Subtitle>{args.subtitleText}</BsCard.Subtitle>}
          <BsCard.Title>{args.title}</BsCard.Title>
          <BsCard.Text>{args.text}</BsCard.Text>
          <Button color="primary" variant="outline" href="#">Go somewhere</Button>
        </BsCard.Body>

        {args.links && 
          <BsCard.Body>
            <BsCard.Link href="#">Card Link</BsCard.Link>
            <BsCard.Link href="#">Another Link</BsCard.Link>
          </BsCard.Body>
        }
        <div>
          {args.footerText && <BsCard.Footer>{args.footerText}</BsCard.Footer>}
        </div>
      </div>
      <div className="col-md-4">
        <BsCard.Img src="holder.js/100px270" alt="Card image"></BsCard.Img>
      </div>
    </div>
  </Card>
);

export const Default = DefaultTemplate.bind({});

export const DefaultWithoutImage = DefaultWithoutImageTemplate.bind({});

export const DefaultCenter = DefaultCenterTemplate.bind({});

export const DefaultCenterWithoutImage = DefaultCenterWithoutImageTemplate.bind({});

export const KitchenSink = KitchenSinkTemplate.bind({});
KitchenSink.args = {
  links: true,
};

export const KitchenSinkWithoutImage = KitchenSinkWithoutImageTemplate.bind({});
KitchenSinkWithoutImage.args = {
  links: true,
};

export const ImageOverlay = ImageOverlayTemplate.bind({});

export const ImageOverlayWithoutButton = ImageOverlayWithoutButtonTemplate.bind({});

export const HorizontalLeft = HorizontalLeftTemplate.bind({});

export const HorizontalRight = HorizontalRightTemplate.bind({});
