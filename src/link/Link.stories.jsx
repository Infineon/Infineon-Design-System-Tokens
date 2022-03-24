import { Link } from "./Link";

export default {
  title: "Components/Link",
  component: Link,
  args: {
    icon: false,
    iconPosition: "left",
  }
};

const DefaultTemplate = (args) => (
  <Link {...args}></Link>
);

export const Default = DefaultTemplate.bind({});
