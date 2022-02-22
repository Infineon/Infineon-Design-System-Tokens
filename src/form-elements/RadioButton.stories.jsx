import { RadioButton } from "./RadioButton";

export default {
  title: "Forms/Radio Button",
  component: RadioButton,
  args: {
    label: "Radio button",
    disabled: false,
  }
};

const DefaultTemplate = (args) => (
  <RadioButton {...args}></RadioButton>
);

export const Default = DefaultTemplate.bind({});
