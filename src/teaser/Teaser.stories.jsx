import { Teaser } from "./Teaser";
import { Button } from "../button/Button";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import BsCard from "react-bootstrap/Card";

export default {
  title: "Components/Teaser",
  component: Teaser,
  args: {
    title: "This is a headline",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    subtitleText: "01.01.2022.",
  }
};

const DefaultTemplate = (args) => (
  <Teaser {...args}>
    <BsCard.Img src="holder.js/100px270" alt="Card image"></BsCard.Img>

    <BsCard.Body>
      <BsCard.Title>{args.title}</BsCard.Title>
      {args.subtitleText && <BsCard.Subtitle>{args.subtitleText}</BsCard.Subtitle>}
      <BsCard.Text>{args.text}</BsCard.Text>
      <BsCard.Link href="#">Link</BsCard.Link>
    </BsCard.Body>
  </Teaser>
);

const DefaultWithoutImageTemplate = (args) => (
  <Teaser {...args}>
    <BsCard.Body>
      <BsCard.Title>{args.title}</BsCard.Title>
      {args.subtitleText && <BsCard.Subtitle>{args.subtitleText}</BsCard.Subtitle>}
      <BsCard.Text>{args.text}</BsCard.Text>
      <BsCard.Link href="#">Link</BsCard.Link>
    </BsCard.Body>
  </Teaser>
);

const HorizontalLeftTemplate = (args) => (
  <Teaser {...args}>
    <div className="row no-gutters">
      <div className="col-md-4">
        <BsCard.Img src="holder.js/100px270" alt="Card image"></BsCard.Img>
      </div>

      <div className="col-md-8">
        <BsCard.Body>
          <BsCard.Title>{args.title}</BsCard.Title>
          {args.subtitleText && <BsCard.Subtitle>{args.subtitleText}</BsCard.Subtitle>}
          <BsCard.Text>{args.text}</BsCard.Text>
          <BsCard.Link href="#">Link</BsCard.Link>
        </BsCard.Body>
      </div>
    </div>
  </Teaser>
);

const HorizontalRightTemplate = (args) => (
  <Teaser {...args}>
    <div className="row no-gutters">
      <div className="col-md-8">
        <BsCard.Body>
          <BsCard.Title>{args.title}</BsCard.Title>
          {args.subtitleText && <BsCard.Subtitle>{args.subtitleText}</BsCard.Subtitle>}
          <BsCard.Text>{args.text}</BsCard.Text>
          <BsCard.Link href="#">Link</BsCard.Link>
        </BsCard.Body>
      </div>

      <div className="col-md-4">
        <BsCard.Img src="holder.js/100px270" alt="Card image"></BsCard.Img>
      </div>
    </div>
  </Teaser>
);

const ImageOverlayTemplate = (args) => (
  <Teaser {...args}>
    <BsCard.Img src="holder.js/100px270" alt="Card image"></BsCard.Img>
    <BsCard.ImgOverlay>
      <BsCard.Title>{args.title}</BsCard.Title>
      {args.subtitleText && <BsCard.Subtitle>{args.subtitleText}</BsCard.Subtitle>}
      <BsCard.Text>{args.text}</BsCard.Text>
      <BsCard.Link href="#">Link</BsCard.Link>
    </BsCard.ImgOverlay>
  </Teaser>
);

const EventTemplate = (args) => (
  <Teaser {...args}>
    <BsCard.Img src="holder.js/100px270" alt="Card image"></BsCard.Img>

    <div>
      <BsCard.ImgOverlay>
        <div className="d-flex flex-wrap justify-content-end">
          <Button>
            <FontAwesomeIcon icon={["fa", "star"]}/>
          </Button>
          <p className="w-100 mb-0">Overline Text</p>
          <BsCard.Title className="w-100 mb-0">{args.title}</BsCard.Title>
        </div>
      </BsCard.ImgOverlay>
    </div>

    <BsCard.Body className="d-flex justify-content-between align-items-center">
      {args.subtitleText && <BsCard.Subtitle>{args.subtitleText}</BsCard.Subtitle>}
      <BsCard.Link href="#">Read more</BsCard.Link>
    </BsCard.Body>
  </Teaser>
);

export const Default = DefaultTemplate.bind({});

export const DefaultWithoutImage = DefaultWithoutImageTemplate.bind({});

export const HorizontalLeft = HorizontalLeftTemplate.bind({});

export const HorizontalRight = HorizontalRightTemplate.bind({});

export const ImageOverlay = ImageOverlayTemplate.bind({});

export const Event = EventTemplate.bind({});
Event.args = {
  title: "Title",
};
