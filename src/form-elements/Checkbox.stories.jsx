import { Checkbox } from "./Checkbox";

export default {
  title: "Forms/Checkbox",
  component: Checkbox,
  args: {disabled: false}
};

const DefaultTemplate = (args) => (
  <Checkbox {...args}></Checkbox>
);

export const Default = DefaultTemplate.bind({});
