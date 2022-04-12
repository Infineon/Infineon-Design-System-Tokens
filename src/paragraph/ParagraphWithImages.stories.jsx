import { ParagraphWithImages } from "./ParagraphWithImages";
import { Button } from "../button/Button";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default {
  title: "Components/Paragraph With Images",
  component: ParagraphWithImages,
  args: {
    title: "The standard Lorem Ipsum headline",
    text: "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system.",
    aspectRatio: "16:9",
    imagePosition: "right",
    alignItems: "center",
  }
};

const DefaultTemplate = (args) => (
  <ParagraphWithImages {...args}>
    <div>
      <p className="ifx__paragraph-category">Category</p>
      <h3>{args.title}</h3>
      <p>{args.text}</p>
      <Button color="primary" href="#">
        Button
      </Button>
    </div>
  </ParagraphWithImages>
);

const BulletpointsTemplate = (args) => (
  <ParagraphWithImages {...args}>
    <div>
      <p className="ifx__paragraph-category">Category</p>
      <h3>{args.title}</h3>
      <p>{args.text}</p>
      <ul className="list-unstyled">
        <li>
          <FontAwesomeIcon icon={["fal", "check"]}/>
          Checkmark
        </li>
        <li>
          <FontAwesomeIcon icon={["fal", "check"]}/>
          Checkmark
        </li>
        <li>
          <FontAwesomeIcon icon={["fal", "check"]}/>
          Checkmark
        </li>
      </ul>
    </div>
  </ParagraphWithImages>
);

export const Default = DefaultTemplate.bind({});

export const Bulletpoints = BulletpointsTemplate.bind({});
