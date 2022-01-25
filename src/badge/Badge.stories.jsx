import { Badge } from "./Badge";

export default {
  title: "Components/Badge",
  component: Badge,
  args: {
    pill: false,
    background: "primary",
  }
};

const DefaultTemplate = (args) => (
  <>
    <h1><Badge {...args}>New</Badge></h1>
    <h2><Badge {...args}>New</Badge></h2>
    <h3><Badge {...args}>New</Badge></h3>
    <h4><Badge {...args}>New</Badge></h4>
    <h5><Badge {...args}>New</Badge></h5>
    <h6><Badge {...args}>New</Badge></h6>
  </>
);

export const Default = DefaultTemplate.bind({});
