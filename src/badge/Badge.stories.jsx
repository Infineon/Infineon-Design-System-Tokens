import { Badge } from "./Badge";

export default {
  title: "Components/Badge",
  component: Badge,
  args: {pill: false}
};

const H1Template = (args) => (
  <h1><Badge {...args}>New</Badge></h1>
);

const H2Template = (args) => (
  <h2><Badge {...args}>New</Badge></h2>
);

const H3Template = (args) => (
  <h3><Badge {...args}>New</Badge></h3>
);

const H4Template = (args) => (
  <h4><Badge {...args}>New</Badge></h4>
);

const H5Template = (args) => (
  <h5><Badge {...args}>New</Badge></h5>
);

const H6Template = (args) => (
  <h6><Badge {...args}>New</Badge></h6>
);

export const Default_h1 = H1Template.bind({});
Default_h1.storyName = "Default <h1>";
Default_h1.args = {
  background: "primary",
  text: "white",
};

export const Default_h2 = H2Template.bind({});
Default_h2.storyName = "Default <h2>";
Default_h2.args = {
  background: "primary",
  text: "white",
};

export const Default_h3 = H3Template.bind({});
Default_h3.storyName = "Default <h3>";
Default_h3.args = {
  background: "primary",
  text: "white",
};

export const Default_h4 = H4Template.bind({});
Default_h4.storyName = "Default <h4>";
Default_h4.args = {
  background: "primary",
  text: "white",
};

export const Default_h5 = H5Template.bind({});
Default_h5.storyName = "Default <h5>";
Default_h5.args = {
  background: "primary",
  text: "white",
};

export const Default_h6 = H6Template.bind({});
Default_h6.storyName = "Default <h6>";
Default_h6.args = {
  background: "primary",
  text: "white",
};
