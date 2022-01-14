import { RadioButton } from "./RadioButton";

export default {
  title: "Forms/Radio Button",
  component: RadioButton,
  args: {disabled: false}
};

const DefaultTemplate = (args) => (
  <RadioButton {...args}></RadioButton>
);

export const Default = DefaultTemplate.bind({});
