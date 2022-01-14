import { Select } from "./Select";

export default {
  title: "Forms/Select",
  component: Select,
  args: {disabled: false}
};

const DefaultTemplate = (args) => (
  <Select {...args}></Select>
);

export const Default = DefaultTemplate.bind({});
