import { ParagraphHorizontal } from "./ParagraphHorizontal";
import { Button } from "../button/Button";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default {
  title: "Components/Paragraph Horizontal",
  component: ParagraphHorizontal,
  args: {
    title: "The standard Lorem Ipsum headline",
    text: "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system.",
    aspectRatio: "16:9",
    imagePosition: "right",
    alignItems: "center",
  }
};

const DefaultTemplate = (args) => (
  <ParagraphHorizontal {...args}>
    <div>
      <p className="ifx__paragraph-category">Category</p>
      <h3>{args.title}</h3>
      <p>{args.text}</p>
      <Button color="primary" href="#">
        Button
      </Button>
    </div>
  </ParagraphHorizontal>
);

const BulletpointsTemplate = (args) => (
  <ParagraphHorizontal {...args}>
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
  </ParagraphHorizontal>
);

export const Default = DefaultTemplate.bind({});

export const Bulletpoints = BulletpointsTemplate.bind({});
