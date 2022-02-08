import { Paragraph } from "./Paragraph";
import { Button } from "../button/Button";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default {
  title: "Components/Paragraph",
  component: Paragraph,
  args: {
    title: "The standard Lorem Ipsum passage, used since the 1500s",
    text: "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings.",
    aspectRatio: "4:3",
    imagePosition: "right",
    alignItems: "center",
  }
};

const DefaultTemplate = (args) => (
  <Paragraph {...args}>
    <div>
      <h3>{args.title}</h3>
      <p>{args.text}</p>
      <Button color="primary" href="#">
        Primary
      </Button>
    </div>
  </Paragraph>
);

const BulletpointsTemplate = (args) => (
  <Paragraph {...args}>
    <div>
      <h3>{args.title}</h3>
      <p>{args.text}</p>
      <ul className="list-unstyled">
        <li>
          <FontAwesomeIcon icon={["fa", "check"]}/>
          Bear claw cake biscuit
        </li>
        <li>
          <FontAwesomeIcon icon={["fa", "check"]}/>
          Bear claw cake biscuit
        </li>
        <li>
          <FontAwesomeIcon icon={["fa", "check"]}/>
          Bear claw cake biscuit
        </li>
      </ul>
    </div>
  </Paragraph>
);

export const Default = DefaultTemplate.bind({});

export const Bulletpoints = BulletpointsTemplate.bind({});
