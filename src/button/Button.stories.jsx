import { Button } from "./Button";

export default {
  title: "Button",
  component: Button,
  parameters: {
    designToken: {
      files: [],
    },
  },
};

const Template = (args) => <Button {...args}>Button</Button>;

export const Default = Template.bind({});
