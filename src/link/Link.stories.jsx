import { Link } from "./Link";

export default {
  title: "Components/Link",
  component: Link,
  args: {
    color: "brand",
    underline: false,
    icon: false,
    iconPosition: "left",
  }
};

const DefaultTemplate = (args) => (
  <Link {...args}></Link>
);

export const Default = DefaultTemplate.bind({});
